# Fable Build Plan — Augova Website Rebuild

**Status:** PLANNING ONLY. No implementation, no scaffolding, no deletions, no pushes.
**Branch:** created and checked out `augova-astro-rebuild` (this doc lives here; `main` untouched).
**Source of truth:** `augova-build-reference.md` (to be canonicalized as `docs/BUILD-SPEC.md`). Where `CLAUDE.md` and the build reference conflict, the build reference wins.

> Note on the build reference: the file `augova-build-reference.md` is heavily abbreviated/telegraphic in places (some sentences are compressed and a few section fragments — e.g. parts of §6 `features.json`, §7.4, §11, §13 — are partially elided). This plan reconstructs intent from the surrounding, unambiguous rules. Any spot where the source is genuinely unclear is flagged in §10 (Risks) and §9 (Open decisions). None of these gaps block Milestones 0–3.

---

## 1. Repo audit — what exists now

| Item | Finding |
|---|---|
| Site type | **Raw multi-page static HTML.** Three hand-authored pages: `index.html` (25.9 KB), `features.html` (14.2 KB), `pricing.html` (13.8 KB). No routing, no bundler, no components. |
| Tailwind | **Loaded via CDN** (`<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries">`) on all three pages, with an inline `tailwind.config` in a `<script id="tailwind-config">` block. This is dev-mode CDN Tailwind — unpurged, not a real build. |
| Framework code | **None.** No Astro, React, Vite, Next, Svelte, or Vue. No JSX/TSX. The only JS is: inline Three.js ES-module hero in `index.html` (torus-knot + `AsciiEffect` from `unpkg`), and a small inline `IntersectionObserver` reveal + mousemove gradient script. |
| `package.json` | **Absent.** No npm project, no lockfile, no `node_modules`. |
| Build pipeline | **None.** No CI, no config files (`astro.config`, `vite.config`, `tailwind.config.*` as real files), no `.github/`. Deploys as static files. A remote branch `origin/cloudflare/workers-autoconfig` exists (Cloudflare auto-config), suggesting Cloudflare Pages/Workers is already wired to the repo. |
| Fonts | CDN-loaded: Geist (`cdn.jsdelivr.net/npm/geist`), JetBrains Mono (`cdn.jsdelivr.net/npm/jetbrains-mono`), Material Symbols (Google Fonts). All violate the "no font CDN / self-host" rule. |
| Other files | `DESIGN.md` (legacy "Startup Manifesto / Brutalist" design system — do NOT adopt), `CLAUDE.md` (new lean guardrails — keep), `augova-build-reference.md` (the spec — becomes `docs/BUILD-SPEC.md`), `screen.png` (123 KB mockup screenshot — reference only), `.gitignore` (`.DS_Store`), `.DS_Store` (ignored). |

### Per-file summary
- **`index.html`** — homepage. Fixed nav (How It Works / Features / Use Cases / Pricing / Contact + "Get Started"). Three.js ASCII torus-knot hero with "AUGOVA_ENGINE_V2.0" binary microtext. Sections: problem/outcome, how-it-works (4 steps), features (6 cards), use-cases (4 verticals), **fake testimonial + fake client logos**, final CTA with **"7-day trial / no credit card / 5-minute integration"**, footer. Contains multiple hard-rule violations (see §4).
- **`features.html`** — "Feature Catalogue" page. Packaging model (Core/Standard/Add-on) × Readiness (Now/Next Phase), plus a 6-category capability catalogue (Conversation Engine, Inbound Call Handling, Scheduling & Workflow, Knowledge & Personalization, Compliance & Security, Integrations & CRM). **This is the on-strategy content the spec says to salvage** (§0.5). Wrapped in the legacy terminal/binary styling that must be dropped.
- **`pricing.html`** — three pricing tiers ($799 / $599 / $449), setup fees, hybrid overage ($0.40/min), add-on buckets, money-flow. **Entire page must be removed** (§4 hard rule) and `/pricing*` redirected to `/#faq`.
- **`DESIGN.md`** — legacy design tokens: Geist + JetBrains Mono, dark-mode-first `#131313` charcoal, **sharp 0px brutalist corners**, `terminal-green #22C55E` used as a repeated design element, ASCII-wave hero. **Superseded by spec §3 — do not adopt.**

---

## 2. Build-reference summary (the target site)

- **Product / positioning:** Augova — a **managed AI voice receptionist** for local SMBs. Sales-led, not self-serve; 1–2 week setup, 30-day proof window. **One product only** (voice receptionist); secondary products (chat, CRM automation) never appear in nav or sections.
- **Target audience:** call-heavy SMBs in the **GTA / York Region** (Richmond Hill, Markham, Vaughan, Aurora, Newmarket, Barrie). Verticals: Home Services, Clinics & Wellness, Professional Services, Automotive, Real Estate & Property, Retail & Hospitality.
- **Required pages (routes):** `/` (index), `/demo`, `/about`, `/privacy`, `/features` (re-skinned salvage), `/404`. **Removed:** `/pricing` → redirect `/pricing` and `/pricing.html` to `/#faq`. **Reserved but not built:** `/industries/[slug]`, `/beyond-voice`.
- **Homepage sections (§7), single scroll, alternating dark/light:** Header → Hero (WebGL map) → Problem strip (stats) → Product intro (`#receptionist`) → Audio demo (`#demo-audio`) → ROI moment (light) → What's included/features (light) → Multilingual → How it works + reliability (`#how-it-works`, light) → Industries (`#industries`) → FAQ (`#faq`, light) → Final CTA + lead form → Footer + sticky mobile CTA.
- **Design system (§3, independently reasoned):** monochrome — black/`--ink`/`--paper`/white + grey ramp (900/700/500/300/100). **Inter** (display + body, self-hosted), **IBM Plex Mono** (eyebrows/labels only). Modest radius (card 14px, button 10px, input 10px, pill 999px). `--signal` green `#22C55E` = **the ONLY accent, used in exactly one tiny scoped element site-wide** (e.g. one live-status pip) — never a section fill, button, border, or repeated motif. Sections alternate `--ink` (dark) / `--paper` (light).
- **Tech stack:** **Astro + React + Tailwind (real build dependency) + `@astrojs/sitemap`**, TypeScript strict, `output: 'static'`. React only for interactive islands. **MapLibre GL JS** for the hero map — the site's **only** WebGL, lazy-loaded/code-split after first paint, desktop-capable only. Lead form runs as a **Cloudflare Pages Function** in `/functions/`. Optional Lenis (~2–3 KB) smooth scroll.
- **Performance constraints:** **core page JS < 100 KB** (excludes the deferred MapLibre bundle, which never loads on mobile/reduced-motion). **LCP < 2.5 s on mid-range mobile** (static hero image is LCP), **CLS < 0.1**. Self-hosted WOFF2 fonts, lazy audio, AVIF/WebP imagery.
- **Accessibility constraints (WCAG AA):** AA contrast, visible `:focus-visible`, semantic landmarks, **one `<h1>` per page**, labeled inputs, keyboard-operable accordion + audio player, `prefers-reduced-motion` disables reveals/parallax and serves the static hero. Fully usable at zero motion.
- **Cloudflare / static deployment assumptions:** Cloudflare Pages, git-connected (`main` → production, branches → preview). DNS/registrar/CDN already on Cloudflare. `output: 'static'` + Pages Functions in `/functions/` (no SSR adapter). Cookieless Cloudflare Web Analytics (no consent banner). Secrets as Pages env vars.

---

## 3. Salvage inventory from the old site

**Rule:** salvage *content and structure*, never the old design tokens/fonts/shape language/sci-fi register/fake proof/pricing.

| # | Item | Source | Reuse | New home |
|---|---|---|---|---|
| S1 | Feature-catalogue framing: 6 capability categories (Conversation Engine, Inbound Call Handling, Scheduling & Workflow, Knowledge & Personalization, Compliance & Security, Integrations & CRM) + their bullet items | `features.html:186–253` | Reuse the **content taxonomy** as the basis for `/features` page copy; re-skin into new component system | `src/pages/features.astro` + possibly `src/data/features.json` |
| S2 | Packaging × Readiness model (Core/Standard/Add-on × Now/Next Phase) | `features.html:163–184` | Reuse the framing concept for the features page structure | `src/pages/features.astro` |
| S3 | On-strategy compliance line "PIPEDA baseline compliance / AI disclosure prompts / PII redaction / audit trails" | `features.html:233–241` | Confirms Canadian framing; reuse as-is (already spec-aligned) | features/privacy copy |
| S4 | Missed-call / "Missed Calls Are Missed Revenue" narrative and the 4-step call→conversion flow concept | `index.html:308–331`, `index.html:332–364` | Reuse the *narrative spine* only; replace all copy with spec §7 final copy (spec copy is authoritative, not the old wording) | Homepage problem strip (§7.2) + how-it-works (§7.8) |
| S5 | Industry/vertical concept (Clinics/Agencies/Trades/Local Biz) | `index.html:409–441` | Reuse only the *idea* of a verticals section; **replace with spec's 6 industries** from `industries.json` | Homepage Industries (§7.9) |
| S6 | `.gitignore` | repo root | Keep and extend (add `node_modules`, `dist`, `.astro`, env files) | repo root |

**Assets worth keeping:** `screen.png` — mockup reference only (not shipped). `augova-build-reference.md` → becomes `docs/BUILD-SPEC.md`. `CLAUDE.md` → keep (already the lean guardrails file).

**Explicitly NOT salvaged:** old design tokens (`DESIGN.md`), Geist/JetBrains Mono/Material Symbols fonts, terminal/binary/sci-fi copy (`ENGINE_V2.0`, `SYSTEM_DIAGNOSTIC`, `01010101`), sharp/brutalist 0px shape language, the fake testimonial + fake client logos, the entire pricing model, and the Three.js ASCII torus-knot as the main hero (a monochrome ASCII shape is only a `[[DECISION]]` fallback alternative to the MapLibre map — the map is the recommendation).

---

## 4. Removal & exclusion audit

Everything below must NOT survive into the new site. "Rewrite" means the *topic* stays but copy is replaced by spec §6–§8.

| # | Item | Source (file:line) | Why it violates the build reference | Action |
|---|---|---|---|---|
| R1 | Fabricated testimonial — "Augova saved us $4,200… — Thomas Wright, Founder of Wright Plumbing" | `index.html:447–452` | No client exists; invented proof. Competition Act / misleading-representation risk (§4, §0.5) | **DELETE** (never recreate) |
| R2 | Fake client logos — LOGISTICS_CO / HEALTH_CORE / MODERN_LAW / SKY_REALTY | `index.html:455–460` | Fabricated client proof | **DELETE** |
| R3 | SOC2 claim — "SOC2 compliant data handling" | `index.html:403–405` | False, US-framed; team holds no SOC2. Canadian PIPEDA framing only | **DELETE / REWRITE** to PIPEDA framing |
| R4 | HIPAA claim — "without HIPAA violations" | `index.html:426` | US healthcare framing; false | **DELETE / REWRITE** |
| R5 | US data-location — "LOCATION: ASHBURN_VA" | `index.html:468` | US data center; contradicts Canadian-data trust story | **DELETE** |
| R6 | Self-serve framing — "No credit card required for the 7-day trial. Integration takes 5 minutes." | `index.html:482–484` | Wrong model — managed, sales-led, 1–2 wk setup, 30-day proof | **DELETE / REWRITE** to managed framing |
| R7 | Self-serve CTAs — "Deploy My AI Assistant" / "Get Started" | `index.html:155, 475–476` | Self-serve/deploy-it-yourself framing | **REWRITE** → "Book a Demo" / "Book Free Demo" → `/demo` |
| R8 | Entire pricing page (tiers $799/$599/$449, setup fees, $0.40/min overage, add-on buckets) | `pricing.html` (whole file, esp. `:185, :191, :197, :228, :247–249`) | §4 hard rule: no Augova prices on site | **REMOVE file**; redirect `/pricing` + `/pricing.html` → `/#faq`; drop "Pricing" from nav |
| R9 | "Pricing" nav item + `#pricing` anchor | `index.html:152, 309`; `features.html:128, 140`; `pricing.html:140` | No pricing page in new build | **REMOVE** from nav; replace with FAQ deflection |
| R10 | Binary/terminal theatre — "AUGOVA_ENGINE_V2.0", "INITIALIZING_NEURAL_VOICE_LAYER", "SYSTEM_DIAGNOSTIC: 0x442", "PROTOCOL_MATCH_0x", "01010101", "LATENCY: 12ms" | `index.html:282–288, 315, 335, 416–420, 465–467`; `features.html:136–141`; `pricing.html:148–152` | Tacky sci-fi register; spec §3 is calm/premium/plain-voice | **DELETE** all sci-fi copy; rebuild with §6–§8 plain copy |
| R11 | Three.js `AsciiEffect` torus-knot hero + `three@0.160.0` from unpkg | `index.html:159–279` | WebGL-in-hero must be the MapLibre GTA map; no CDN 3D libs; ASCII shape is only a fallback `[[DECISION]]` | **REPLACE** with `HeroMap` (MapLibre) + `HeroMapStatic` |
| R12 | `terminal-green #22C55E` used as a repeated element (eyebrows, borders, links, hover states) throughout | `index.html:290, 294, 301, 322, 326, 413`; `features.html` many; `pricing.html` many; `DESIGN.md:53, 111` | Spec §3: `--signal` green used in exactly ONE tiny scoped element site-wide; never section color/border/link/CTA | **REMOVE** all repeated green usage; reserve one `--signal` pip only |
| R13 | Legacy `DESIGN.md` tokens (Geist, sharp-0px brutalism, 160px section gaps, dark-mode-first, ASCII wave) | `DESIGN.md` (whole) | Superseded by §3 (Inter, modest radius, alternating dark/light) | **EXCLUDE** — keep file as historical reference only; do not adopt |
| R14 | Font CDNs — Geist, JetBrains Mono, Material Symbols | `index.html:8–11`; `features.html:8–10`; `pricing.html:8–10` | No font CDN; self-host WOFF2; Inter + IBM Plex Mono only | **REMOVE**; self-host Inter + IBM Plex Mono; replace Material Symbols icons with inline SVG |
| R15 | CDN Tailwind + inline config | `index.html:7, 12–101`; `features.html:7, 11–100`; `pricing.html:7, 11–100` | CDN Tailwind is dev-only/unpurged; must be a real build dependency | **REPLACE** with `@astrojs/tailwind` + `tailwind.config.mjs` |
| R16 | "62% of customers won't call back", "lose up to 30% of revenue", "answers within 10ms" claims stated without sourcing | `index.html:317, 323, 349` | Spec requires sourced stats from `stats.json` (CallRail, 411 Locals, HBR) and no fabricated latency claims | **REWRITE** using `stats.json` sourced numbers only |
| R17 | Generic "Contact" nav/anchor | `index.html:153, 463`; others | Becomes "Book Demo → /demo" (§5) | **REWRITE** |

**The two urgent ones (spec §0.5):** the fabricated testimonial (R1) and the public pricing page (R8) simply never exist in the new build.

---

## 5. Recommended new architecture

New greenfield Astro + React project. Target tree (mirrors spec §2, with the small additions the spec implies):

```
augova-website/                 (built at repo root of augova-astro-rebuild)
├── CLAUDE.md                    # already present — lean guardrails, points to docs/BUILD-SPEC.md
├── docs/
│   ├── BUILD-SPEC.md            # canonicalized from augova-build-reference.md (M0)
│   └── FABLE-BUILD-PLAN.md      # this file
├── astro.config.mjs            # output:'static', react, tailwind, sitemap, site URL
├── tailwind.config.mjs         # §3 tokens mirrored from global.css
├── tsconfig.json               # strict
├── package.json
├── public/
│   ├── fonts/                  # self-hosted Inter + IBM Plex Mono WOFF2
│   ├── audio/                  # demo clips (placeholders first)
│   ├── og/                     # open-graph images per page
│   ├── hero/                   # HeroMapStatic AVIF/WebP (desktop + mobile crops)
│   ├── robots.txt
│   └── _redirects              # /pricing, /pricing.html → /#faq  (Cloudflare Pages redirects)
├── functions/
│   └── submit.js               # Pages Function: Turnstile verify → email + webhook
└── src/
    ├── styles/global.css       # §3 tokens as CSS vars + base reset
    ├── data/
    │   ├── stats.json
    │   ├── features.json
    │   ├── steps.json
    │   ├── industries.json
    │   ├── faq.json
    │   └── demos.json          # audio metadata + transcripts
    ├── lib/
    │   ├── reveal.ts           # IntersectionObserver reveal utility
    │   └── countup.ts          # stat count-up
    ├── components/             # see spec §9 (Section, Button, StatCard, FeatureCard,
    │                           #   StepRow, IndustryCard, FAQAccordion, AudioDemoPlayer,
    │                           #   HeroMap, HeroMapStatic, LiveCallVisual, LeadForm, CTABand, Header, Footer)
    ├── layouts/
    │   └── BaseLayout.astro    # <head> meta + JSON-LD, Header, <slot/>, Footer
    └── pages/
        ├── index.astro
        ├── demo.astro
        ├── about.astro
        ├── privacy.astro
        ├── features.astro
        └── 404.astro
```

Reserved-but-not-built routes (leave room, do not create): `src/pages/industries/[slug].astro`, `src/pages/beyond-voice.astro`.

**Open structural question:** whether to scaffold *in place at the repo root* or in an `augova-website/` subfolder. The spec's tree (§2) is rooted at `augova-website/`, and `npm create astro` scaffolds into a named dir. **Recommendation:** scaffold at the **repo root** (so Cloudflare Pages needs no root-directory setting) and treat legacy `.html` files as transient — kept until salvage is verified, then removed in the same branch. This is a §9 decision to confirm before M1.

### Recommended dependencies (only these)
- `astro`
- `@astrojs/react` + `react` + `react-dom`
- `@astrojs/tailwind` + `tailwindcss`
- `@astrojs/sitemap`
- `maplibre-gl` (hero only, dynamically imported / code-split)
- *(optional, ~2–3 KB)* `lenis` for smooth scroll — only if it earns its weight against the JS budget.

### Explicitly do NOT add
GSAP · Framer Motion · Lottie · Three.js (beyond the approved ASCII fallback `[[DECISION]]`, if ever chosen) · any extra 3D library · any font CDN · any form-SaaS SDK · any self-serve product/payment tooling.

---

## 6. Branch & deployment safety plan

**Git rules (binding for the entire rebuild):**
- **All implementation, commits, and pushes happen only on `augova-astro-rebuild`.** This branch is already created and checked out; this plan lives on it.
- **`main` must never be edited, committed to, pushed to, or used for the rebuild.** `main` stays as the current legacy site until an approved production cutover.
- **Before any implementation session begins, Fable must:** (1) run `git rev-parse --abbrev-ref HEAD` to confirm the branch; (2) confirm it reads `augova-astro-rebuild`; (3) if on `main`/`master`/other, create or switch to `augova-astro-rebuild`; (4) if the branch already exists, switch to it; (5) **STOP and report** if there are uncommitted/unstaged changes that would make switching unsafe (e.g. tracked-file conflicts) rather than force-switching.
- **No push to GitHub without explicit user approval.** No force-push ever. No push to `main` under any circumstances.

**Deployment rules:**
- **No production Cloudflare switch until the §13 launch checklist is fully green.**
- Cloudflare Pages should build the **rebuild branch as a preview deployment first** (branch deploys → preview URL). Validate there.
- **Production cutover happens only after explicit approval** — by merging to `main` (or repointing the Pages production branch), never silently.
- **Do not modify Cloudflare settings in this phase.** Only document what will need to change (below).

**Cloudflare settings to configure later (documentation only — do NOT change now):**
- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Root directory:** repo root (or `augova-website/` if the subfolder option is chosen in §9)
- **Environment variables (Pages, per-environment):** `TURNSTILE_SECRET`, `TURNSTILE_SITEKEY`, email API key / Zoho inbox target, `LEADS_WEBHOOK_URL`, `CAL_COM_LINK`, `DEMO_NUMBER`, `PUBLIC_SITE_URL`. Secrets never in repo.
- **Pages Functions:** ensure Functions are enabled so `/functions/submit.js` runs; confirm it coexists with `output: 'static'` (no SSR adapter needed).
- **Redirects:** `/pricing` and `/pricing.html` → `/#faq` (301). Deliver via `public/_redirects`. Confirm precedence with any existing Cloudflare rules.
- **Custom domain / production branch:** `augova.com` currently serves the legacy site from `main`. Cutover = repoint production branch or merge to `main` — only on approval. Note the existing `origin/cloudflare/workers-autoconfig` branch and reconcile before cutover.
- **Analytics:** enable cookieless Cloudflare Web Analytics; wire custom events (`demo_cta_click`, `audio_demo_play`, `audio_demo_complete`, `demo_number_click`, `form_submit`, `cal_booking`).

---

## 7. Milestone-by-milestone implementation plan

Each milestone ends with the §8 hard-rule checklist review and a checkpoint for approval.

### Milestone 0 — Planning, branch safety, repo normalization *(this step, in progress)*
- Confirm branch strategy; operate only on `augova-astro-rebuild`. ✅ (branch created)
- Preserve legacy files (`index.html`, `features.html`, `pricing.html`, `DESIGN.md`, `screen.png`) until salvage is complete — do not delete yet.
- Create `docs/BUILD-SPEC.md` from `augova-build-reference.md` (verbatim canonicalization).
- Produce this plan. **No production changes. No scaffolding.**

### Milestone 1 — Astro scaffold & base setup
- `npm create astro` (minimal, TS strict) + `astro add react`, `astro add tailwind`, `astro add sitemap`.
- `output: 'static'`; set `site` URL; base `astro.config.mjs`.
- Global CSS variables (§3 tokens) in `src/styles/global.css`; mirror into `tailwind.config.mjs`. No hard-coded hex in markup.
- Verify dev server + production build run clean.

### Milestone 2 — Design-system foundation
- Self-host Inter + IBM Plex Mono (WOFF2, `font-display: swap`, preload the hero-critical weight).
- Global reset; typography scale (§3); color tokens (`--ink`, `--paper`, grey ramp, `--signal`); spacing scale; radius tokens.
- `Button` variants (primary solid white / secondary outline / ghost); `:focus-visible` rings.
- Section theme system (dark `--ink` / light `--paper` alternation).
- **Enforce the `--signal` rule in code** (single scoped element; lint/grep guard against repeated `#22C55E`).

### Milestone 3 — Layout shell
- `BaseLayout.astro` (`<head>` meta + JSON-LD slot, Header, `<slot/>`, Footer).
- `Header` (sticky, transparent-over-hero → solid `--ink` on scroll >80px), `Footer` (three columns), `Section` wrapper (theme + eyebrow + padding).
- Mobile nav (full-screen menu island); sticky mobile "Book Demo" CTA strategy (appears after hero scrolls out).

### Milestone 4 — Content data files
Author `src/data/`: `stats.json`, `features.json`, `steps.json`, `industries.json`, `faq.json`, `demos.json` — using the **final copy from spec §6** verbatim; keep `[[PLACEHOLDER]]` audio/transcripts as placeholders.

### Milestone 5 — Homepage static build
Build all §7 sections with real copy and **static** visuals first (no advanced animation yet): hero (static), problem strip, product intro, audio demo, ROI moment, features, multilingual, how-it-works, industries, FAQ, final CTA.

### Milestone 6 — Hero static fallback (`HeroMapStatic`) — **launch-blocking**
- Build the static hero first: desktop + mobile AVIF/WebP map crops + text overlay.
- This is the **LCP asset** and the `prefers-reduced-motion` / mobile path. Must exist and be usable on day one. No WebGL on this path.

### Milestone 7 — Desktop `HeroMap` (MapLibre)
- MapLibre GL JS, monochrome map of GTA/York Region with the six city points.
- Desktop-capable only; **lazy-loaded/code-split after first paint**; scroll-driven camera (subtle pitch/pan/zoom), **no scroll-jacking**.
- WebGL only here; never mounts on mobile/reduced-motion (capability/viewport detection at load).

### Milestone 8 — React islands
FAQ accordion (keyboard-operable, aria-expanded), stat count-up, audio player (keyboard-operable), lead form, mobile nav, sticky mobile CTA. Keep core JS < 100 KB.

### Milestone 9 — Other pages
`/demo` (Cal.com embed placeholder + 5-field LeadForm + "what happens next"), `/about` (accountability block default), `/privacy` (PIPEDA placeholder content), `/features` (re-skinned salvage S1/S2), `/404`.

### Milestone 10 — Forms, booking, analytics
`functions/submit.js` (Turnstile verify → email + webhook), Cal.com embed (placeholder link), analytics custom events, graceful behavior when env vars are unset (hide demo-number row, inline form errors). Secrets via Pages env vars only.

### Milestone 11 — SEO & metadata
Per-page `<title>`/description/canonical, OG images, `@astrojs/sitemap`, `robots.txt`, `LocalBusiness` + `Service` JSON-LD (York Region `areaServed`), one `<h1>` per page, indexable audio transcripts.

### Milestone 12 — Accessibility & performance audit
Keyboard nav, focus states, AA contrast, reduced-motion path, LCP < 2.5 s mobile, CLS < 0.1, core JS < 100 KB (hero map bundle excluded), verify no WebGL outside hero, verify no forbidden claims. Run against the §13 checklist.

### Milestone 13 — GitHub & Cloudflare readiness
Push branch **only after approval** → preview deployment → Cloudflare env-var checklist → redirect checklist (`/pricing*` → `/#faq`) → production cutover checklist (approval-gated; never touches `main` without sign-off).

---

## 8. Hard-rule checklist (review after every milestone)

- [ ] Build remains on `augova-astro-rebuild`
- [ ] `main` remains untouched
- [ ] No Augova pricing figures anywhere
- [ ] No testimonials
- [ ] No client logos
- [ ] No case studies
- [ ] No fake proof of any kind
- [ ] No SOC2 claims
- [ ] No HIPAA claims
- [ ] No US data-location claims
- [ ] Canadian PIPEDA / CRTC framing only
- [ ] No self-serve / free-trial / no-credit-card / 5-minute-setup framing
- [ ] One product only: AI voice receptionist (no secondary products in nav/sections)
- [ ] WebGL only in the hero map
- [ ] No WebGL on mobile or reduced-motion
- [ ] No hard-coded accent colors in markup
- [ ] `--signal` green used once only, in one tiny scoped element
- [ ] No font CDN (self-hosted Inter + IBM Plex Mono)
- [ ] No extra animation / 3D libraries
- [ ] One `<h1>` per page
- [ ] Keyboard-accessible interactive elements
- [ ] Visible focus states
- [ ] Core JS < 100 KB (excludes deferred hero-map bundle)

---

## 9. Open decisions & placeholders

Extracted from the build reference `[[DECISION]]` / `[[PLACEHOLDER]]` markers, grouped by readiness.

### A. Safe default can be used now (build on it immediately)
- **Hero H1** (`[[DECISION]]`, §7.1): default `Never miss another call. Never lose another customer.` — one-line swap later.
- **About accountability block** (`[[DECISION]]`, §8.2): default "How we're accountable" (30-day proof window · outcomes in SOW · human oversight). Swap = one section.
- **Hero type = MapLibre map** vs ASCII-shape alternative (`[[DECISION]]`, §0.6/§14): default = MapLibre map (recommended). ASCII shape is a one-component swap; WebGL-in-hero-only rule applies either way.
- **Fonts** (`[[DECISION]]` #2/#3, §14): default Inter + IBM Plex Mono — locked by §3.
- **Repo layout** (this plan, §5): default = scaffold at repo root; confirm before M1.

### B. Needed before launch (placeholders that must resolve; don't block scaffolding/layout)
- Demo audio ×3 + transcripts (`demos.json`, §6/§7.4).
- Demo phone number `DEMO_NUMBER` (§7.4) — row hidden if unset.
- Cal.com booking link `CAL_COM_LINK` (§8.1/§11).
- Zoho contact email / lead inbox (§11/§14).
- Leads-tracker webhook URL (§11).
- Turnstile keys (site + secret) (§11).
- Privacy-page content (real PIPEDA-aligned pass) (§8.3).
- OG images per page (§12).
- Hero static map image (desktop + mobile AVIF/WebP crops) (§7.1) — **launch-blocking**, must exist day one.
- Footer custom-domain / contact strings (§7.12).

### C. Needs human input before implementation
- **Production demo-agent ownership/timing** (`[[DECISION]]` #5, §14): who provides the interim Vapi/Retell demo number and when recordings are swapped.
- **About team/portfolio** (`[[PLACEHOLDER]]`, §8.2): whether to include named team/roles or ship the accountability block only; 2–3 prior-work references if any.
- **Production cutover timing** and confirmation that `augova.com` should move off the legacy `main` site.
- **Repo-root vs subfolder** scaffold decision (needs a yes/no before M1).

---

## 10. Risks & questions

1. **Repo structure risk.** Scaffolding Astro at the repo root while legacy `.html` files still exist can cause route/asset collisions (e.g. `index.html` vs `index.astro`) during build. Mitigation: keep legacy files until salvage (M0–M4) is verified, then remove them in the same branch before M5's build is finalized. Confirm root-vs-subfolder first.
2. **Cloudflare deployment risk.** A remote branch `origin/cloudflare/workers-autoconfig` already exists — Cloudflare is wired to this repo and `main` currently serves production. Pushing the rebuild branch will trigger a **preview** build (desired), but any misconfigured production-branch setting could affect the live site. Mitigation: no Cloudflare setting changes this phase; verify preview-only behavior before pushing; get approval before push.
3. **WebGL / performance risk.** MapLibre can blow the perf budget if not strictly code-split and gated. Mitigation: static hero is the LCP asset; MapLibre loads deferred, desktop-only, never on mobile/reduced-motion; if it can't hold frame rate on a mid-range laptop, simplify it (§4).
4. **Placeholder assets.** Multiple launch-critical placeholders (audio, demo number, Cal.com, Turnstile, privacy copy, OG, hero image). None block scaffolding/layout, but launch is blocked until §9-B resolves. The **static hero image** is the one placeholder that is itself launch-blocking.
5. **Privacy/legal copy needing review.** `/privacy` and all compliance framing must be PIPEDA-aligned and reviewed by a human before launch. Do not ship placeholder legal text.
6. **Old-site claims possibly lingering elsewhere.** The audited violations are in the three HTML files, but the same claims may exist on the live `augova.com` deployment, in `origin/main`, or in the `workers-autoconfig` branch. Recommend a sweep of the live site and other branches before cutover so no fabricated testimonial / pricing / SOC2 / HIPAA text survives anywhere public.
7. **Build-reference legibility.** `augova-build-reference.md` is compressed/telegraphic and a few fragments are elided (parts of `features.json` in §6, §7.4, §11, §13). This plan reconstructs intent from the unambiguous rules; before M4/M5, the elided `features.json` items and any partial FAQ/step text should be reconciled against the intended final copy (a clean re-read or human confirmation). This does not block M0–M3.
8. **`--signal` discipline.** The single-use accent rule is easy to violate accidentally (the old site used green everywhere). Mitigation: a repo grep/lint guard for `#22C55E` and a manual check each milestone.

---

## 11. Final recommendation

- **Recommended first implementation step:** Milestone 0 completion — create `docs/BUILD-SPEC.md` (verbatim from `augova-build-reference.md`), keep legacy files in place, and confirm the two pre-M1 human decisions in §9-C (repo-root vs subfolder scaffold; About team/portfolio scope). No scaffolding until those are confirmed.
- **Is the repo ready to scaffold Astro?** **Almost.** The audit is complete and the target architecture is clear. Two things gate scaffolding: (1) the repo-root-vs-subfolder decision, and (2) confirming that legacy `.html` files stay until salvage is done (to avoid build collisions). Once those are settled, M1 can proceed.
- **What to approve before Fable starts building:**
  1. This plan and the branch strategy (all work on `augova-astro-rebuild`, `main` untouched, no push without approval).
  2. Scaffold location: **repo root** (recommended) vs `augova-website/` subfolder.
  3. About page scope (accountability-block default vs named team/portfolio).
  4. Acknowledgement that launch is gated on the §9-B placeholders (esp. the static hero image, Turnstile keys, Cal.com link, privacy copy).
  5. Confirmation that pushing the rebuild branch (when approved) triggers a **preview** deploy only, with production cutover strictly approval-gated.

**STOP — planning complete. No implementation, no scaffolding, no file deletions, no push to GitHub, no changes to `main` or Cloudflare.**
