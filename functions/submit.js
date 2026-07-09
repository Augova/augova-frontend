// Augova — lead form endpoint (spec §11, M8). Cloudflare Pages Function,
// coexists with the static Astro build (no SSR adapter needed).
//
// Flow: verify Turnstile server-side -> email the lead to the Zoho inbox ->
// POST the same payload to the leads-tracker webhook (so web leads land in
// the same pipeline as outreach leads). All three secrets are Cloudflare
// Pages env vars — never committed (see .env.example).
//
// Email provider: the spec leaves this as [[PLACEHOLDER: email API key]]
// with no provider named. Defaulting to Resend (one fetch call, no SDK) —
// swapping providers later means editing sendLeadEmail() only.

const REQUIRED_FIELDS = ["name", "business", "email", "phone"];

export async function onRequestPost({ request, env }) {
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, error: "Invalid request body." }, 400);
  }

  const missing = REQUIRED_FIELDS.filter((f) => !String(body[f] ?? "").trim());
  if (missing.length > 0) {
    return json({ ok: false, error: `Missing required field(s): ${missing.join(", ")}.` }, 400);
  }

  const turnstileToken = body.turnstileToken;
  if (!turnstileToken) {
    return json({ ok: false, error: "Verification failed. Please try again." }, 400);
  }

  const verified = await verifyTurnstile(turnstileToken, env.TURNSTILE_SECRET, request.headers.get("CF-Connecting-IP"));
  if (!verified) {
    return json({ ok: false, error: "Verification failed. Please try again." }, 400);
  }

  const lead = {
    name: String(body.name).trim(),
    business: String(body.business).trim(),
    email: String(body.email).trim(),
    phone: String(body.phone).trim(),
    industry: String(body.industry ?? "").trim(),
    details: String(body.details ?? "").trim(),
    source: "website",
    submittedAt: new Date().toISOString(),
  };

  // Email and webhook run independently — one placeholder/unset integration
  // must never block the other or fail the whole submission for the visitor.
  const [emailResult, webhookResult] = await Promise.allSettled([
    sendLeadEmail(lead, env),
    postToLeadsWebhook(lead, env),
  ]);

  if (emailResult.status === "rejected") {
    console.error("submit.js: lead email failed", emailResult.reason);
  }
  if (webhookResult.status === "rejected") {
    console.error("submit.js: leads webhook failed", webhookResult.reason);
  }

  return json({ ok: true });
}

async function verifyTurnstile(token, secret, remoteIp) {
  if (!secret) {
    // [[PLACEHOLDER: TURNSTILE_SECRET]] unset — fail closed, never accept
    // an unverified submission as if it were real.
    console.error("submit.js: TURNSTILE_SECRET is not configured");
    return false;
  }

  const form = new FormData();
  form.append("secret", secret);
  form.append("response", token);
  if (remoteIp) form.append("remoteip", remoteIp);

  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body: form,
  });
  const result = await res.json();
  return result.success === true;
}

async function sendLeadEmail(lead, env) {
  if (!env.EMAIL_API_KEY || !env.ZOHO_INBOX_EMAIL) {
    // [[PLACEHOLDER]] — no email provider configured yet.
    return;
  }

  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.EMAIL_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: env.EMAIL_FROM_ADDRESS || "leads@augova.com",
      to: env.ZOHO_INBOX_EMAIL,
      subject: `New demo request — ${lead.business}`,
      html: leadEmailHtml(lead),
    }),
  }).then((res) => {
    if (!res.ok) throw new Error(`Resend responded ${res.status}`);
  });
}

async function postToLeadsWebhook(lead, env) {
  if (!env.LEADS_WEBHOOK_URL) {
    // [[PLACEHOLDER]] — no leads-tracker webhook configured yet.
    return;
  }

  await fetch(env.LEADS_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(lead),
  }).then((res) => {
    if (!res.ok) throw new Error(`Leads webhook responded ${res.status}`);
  });
}

function leadEmailHtml(lead) {
  const rows = Object.entries(lead)
    .map(([k, v]) => `<tr><td><strong>${escapeHtml(k)}</strong></td><td>${escapeHtml(v)}</td></tr>`)
    .join("");
  return `<table>${rows}</table>`;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
