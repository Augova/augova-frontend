# Augova Website — Build Reference for Claude Code

**Purpose:** the single source of truth for building the Augova marketing website. Decisions here are settled — build to them, don't re-litigate. Where a decision needs a human, it's marked `[[DECISION]]` with a safe default you can build on immediately. Where content is a stand-in, it's marked `[[PLACEHOLDER]]`.

**Companion doc:** a strategic architecture report explains the reasoning behind these choices. This build reference is self-contained; you don't need that report to build, but it exists if a "why" is unclear.

**A site already exists** (repo: `github.com/Augova/augova-frontend`, live at augova.com). **This is a NEW build, not a refactor** — we rebuild in Astro + React and salvage only the parts of the old site that are good enough to keep (§0.5). Two live elements must be removed and never carried over.

**Visual direction (§0.6, §3):** premium monochrome, independently reasoned (Inter, modest radius, black/white/grey — NOT inherited from the old repo's `DESIGN.md`). One accent, `--signal` green, used in exactly one tiny scoped element site-wide — never a section color. Scale-style scroll feel with WebGL in **one showpiece — the map hero** — and nowhere else; the mobile/reduced hero is a static image built at launch.

**Note on the Project Instructions:** they predate this spec and still mention "Framer or Carrd" and a 14-day sprint. Ignore both. The stack is Astro on Cloudflare Pages (below); there is no timeline constraint — ship when the §13 checklist is green.

---

## 0. How to use this doc

**Recommended placement:** save this file as `docs/BUILD-SPEC.md`, and place the provided lean `CLAUDE.md` (~300 words — carries the hard-rule guardrails + points here) at the repo root. Keep CLAUDE.md small: it's re-read every session, so detail belongs here, not there.

**Build order (each milestone is shippable-ish):**
1. Scaffold + tokens + global styles (§1–4)
2. Layout shell: header, footer, section wrapper (§9)
3. Content data files with real copy (§6)
4. Homepage sections top to bottom (§7)
5. `/demo`, `/about`, `/privacy` (§8)
6. Forms + booking + analytics wiring (§11)
7. SEO/metadata (§12)
8. Animation pass (§10)
9. Accessibility + performance audit against budgets (§4)

**The three things most likely to trip you up:** (1) no pricing figures anywhere on the site — see §4; (2) WebGL lives in the hero map and **nowhere else** — every other section is CSS/DOM/SVG, and the mobile/reduced hero is a static image built at launch (§0.6, §4); (3) audio/demo assets are placeholders that must not block layout — build the players and swap files later (§7.4).

---

## 0.5 Old site (`Augova/augova-frontend`) — salvage / rebuild / remove

**This is a NEW build in Astro + React, not a refactor of the old files.** The old repo is raw multi-page HTML (`index.html`, `features.html`, `pricing.html`) with **Tailwind loaded via CDN** (not a real build), Geist + JetBrains Mono fonts via CDN, and a **Three.js AsciiEffect** hero (a 3D torus-knot rendered as ASCII). It also ships a `DESIGN.md`. **The design system in §3 is built fresh and independently reasoned — it does not adopt `DESIGN.md` wholesale.** Treat the old file as a reference to consult only where a specific detail proves genuinely useful, not as the base.

**SALVAGE (carry into the new build):**
- **`features.html` content** — the Core/Standard/Add-on × Now/Next-Phase catalogue framing is on-strategy and well done. Keep the content; re-skin into the new (independently-designed) component system.
- **Tailwind** — keep Tailwind, but as a **proper build dependency in Astro** (CDN Tailwind is dev-only: unpurged, heavy, wrong for production).
- **The Three.js ASCII hero** — salvageable *as a candidate*, but the hero is decided as the MapLibre map (§0.6) for local-positioning reasons. Keep the ASCII effect in reserve as an optional lighter section motif; see the hero note in §0.6.
- On-strategy **copy and section structure** from `index.html` (positioning line, missed-call framing) — reuse the words, rebuild the markup.
- **Fonts and shape language are NOT carried over** — see §3, reasoned independently rather than inherited from `DESIGN.md`.

**REMOVE — never carry into the new build (confirmed in the old code):**

| In old repo | Why it dies |
|---|---|
| Fabricated testimonial — "Thomas Wright, Wright Plumbing, saved $4,200/mo" (`index.html:448`) | Invented; no client exists. Competition Act misleading-representation risk |
| SOC2 claim (`index.html:405`), HIPAA claim (`index.html:426`) | False / US-framed; the team holds neither. Canadian PIPEDA framing only |
| `ASHBURN_VA` data-location (`index.html:468`) | US data center; contradicts the Canadian-data trust story |
| Self-serve "no credit card / 7-day trial / integration takes 5 minutes" (`index.html:483`) | Wrong model — this is managed, sales-led, 1–2 wk setup, 30-day proof window |
| **Entire `pricing.html`** — tiers $799/$599/$449, overage, add-ons | §4 hard rule: no Augova prices on the site. Replace nav item with the pricing-deflection FAQ (§6); no pricing page in the new build |
| Binary/terminal theatre in copy (`ENGINE_V2.0`, diagnostic readouts) | Tacky execution — build to the independently-reasoned system in §3, not the old execution or its sci-fi register |
| Old `DESIGN.md`'s specific tokens (Geist, sharp-0px brutalism, terminal-green as a repeated design element) | Superseded by §3 — the new system is reasoned fresh, and the accent color is far more restrained (one tiny scoped use, not a section-level motif) |

**The two urgent ones remain** the fabricated testimonial and the public pricing — they simply never exist in the new build.

---

## 0.6 Visual & motion direction (WebGL hero + premium motion) — governs the build

**Decision (team call):** Augova's site takes the **premium, scroll-driven feel** of the Scale AI reference, but concentrates the actual WebGL into **one showpiece: the hero.** Everything else gets its "alive, Scale-like" quality from **CSS/DOM/SVG motion** (scroll reveals, depth parallax, the transcript-typing live-call visual) — not from WebGL. One wow moment, contained; the rest fast and disciplined.

**The hero (the one WebGL element):** a **3D interactive map of the GTA / York Region** — target cities (Richmond Hill, Markham, Vaughan, Aurora, Newmarket, Barrie) as points on a dark, monochrome map that tilts / pans / zooms as the visitor scrolls. Recommended build: **MapLibre GL JS** (real WebGL 3D map, free, no API key, high-level API — far more buildable than hand-rolled three.js, and it *is* an actual local map, which serves the "local specialist" positioning). Headline + subhead + CTA sit over it. **The text and a static map image are the LCP; the live WebGL map lazy-loads and layers in after first paint.**

**Hard boundary:** WebGL appears in the hero and **nowhere else**. No 3D backgrounds or scenes in other sections — those get CSS/parallax depth only. This is the single most important guardrail of this direction: it's what keeps the site fast, buildable, and on-positioning.

**Color, locked (independently reasoned — see §3):** monochrome is the system — black, white, full grey range, including primary buttons. The one accent, `--signal` green, is reserved for **one tiny scoped element site-wide** (e.g. a `● Live` pip near the demo phone number) — not a section color, not repeated. The hero map itself stays fully monochrome; do not add a signal-green glow to the map — that would be a second use of the accent.

**Hero salvage note:** the old repo's Three.js **ASCII-effect** 3D shape is a usable asset if you want it, rendered in the monochrome system above. The hero is still decided as the **MapLibre GTA/York-Region map** (it ties to the local-specialist positioning in a way an abstract shape can't). `[[DECISION]]` if the team prefers the ASCII shape as the hero instead, that's a one-component swap — the map is the recommendation, and the WebGL-in-hero-only rule applies either way.

**Mobile / reduced-motion — built at launch, NOT deferred.** This is a firm requirement: the mobile experience and the `prefers-reduced-motion` experience **do not load WebGL at all** — the hero renders as a **static map image** (a crisp AVIF/WebP of the same monochrome map), with the same headline, subhead, and CTA over it, plus light CSS depth. This isn't a later polish pass; the no-3D hero ships in the same launch. Practically: capability/viewport detection at load decides which hero mounts — the WebGL map on capable desktop, the static image everywhere else. Both must exist and be usable on day one.

**Two things kept from the earlier direction because they're right regardless:** grounded, plain copy/voice (so the visuals feel premium while the words carry the trust story), and the removal of the tacky binary/terminal theatre from the live site (§0.5) — premium 3D is the opposite of sci-fi kitsch, not more of it.

---

## 1. Stack & setup

**The build: a NEW Astro + React site** (decided — §0.5, §14). The old repo is raw HTML with Tailwind-via-CDN; there's no framework code to refactor, so we build fresh in Astro, salvaging the design system, the features-page content, the on-strategy copy, and the fonts (§0.5). React is used for interactive islands (and so the shadcn / 21st.dev component MCPs apply, §1.5); everything static stays static Astro for the perf model.

**Setup:**
```bash
npm create astro@latest augova-website -- --template minimal --typescript strict
cd augova-website
npx astro add react        # for interactive islands + shadcn components
npx astro add tailwind
npx astro add sitemap
npm i
```

- **Styling:** §3 tokens (independently-reasoned system) as CSS custom properties in a global stylesheet, mirrored into `tailwind.config`. No hard-coded hex in markup. Tailwind is a real build dependency here — **not** the CDN build the old site used.
- **Host:** Cloudflare Pages, git-connected (`main` → production, branches → preview). DNS/registrar/CDN already on Cloudflare.
- **JS only where needed** (core, non-3D): audio demo player, FAQ accordion, count-up stats, lead form, mobile nav, sticky mobile CTA — as React islands. Core page JS stays under 100 KB (§4).
- **The hero map (the only WebGL, desktop-capable path only):** **MapLibre GL JS** — real WebGL 3D map via a high-level declarative API (recommended over raw three.js for buildability; see §0.6). Loaded **code-split and deferred, after first paint**, and **never loaded on mobile or the reduced-motion path** (which get a static map image). The old repo's Three.js ASCII effect is the salvage-alternative per §0.6.
- **Scroll feel elsewhere (no WebGL):** native scroll + IntersectionObserver + CSS for reveals and depth parallax; **Lenis** (~2–3 KB) optional for smooth-scroll polish. No GSAP, no extra 3D anywhere outside the hero.
- **Do not add:** a second 3D engine, three.js scenes beyond the hero, lottie, framer-motion, any font CDN, any form-SaaS SDK. One map lib for the hero, one scroll approach — no more.

**Output mode:** `output: 'static'`. The lead-form endpoint runs as a Cloudflare Pages Function in `/functions/` (see §11), which coexists with a static Astro build — no SSR adapter required.

---

## 1.5 Build-agent tooling — free MCPs & skills (and what to ignore)

A pile of UI/design tools was evaluated. **All three below are now in use** — the build takes the Astro + React path (§1/§14 confirmed greenfield), so the React-based component MCPs apply. The rest of the evaluated links are inspiration-for-humans, Framer-only (unusable here), or off-scope media generators. **This spec stays authoritative** — the tools assist within its constraints; they do not re-decide the palette, layout, or hard rules.

**Use (all three, free):**

1. **`ui-ux-pro-max` skill** — free, open-source Claude Code skill; design-intelligence + accessibility + anti-pattern checks.
   ```bash
   claude plugin marketplace add nextlevelbuilder/ui-ux-pro-max-skill
   claude plugin install ui-ux-pro-max@ui-ux-pro-max-skill   # requires Python 3
   ```
   **When to reach for it (team directive):** invoke the skill **whenever the agent would otherwise guess/hallucinate a design detail, and whenever consulting it is cheaper or more reliable than reasoning from scratch** — e.g. interaction states, spacing scales, accessibility/contrast checks, font-pairing or component-pattern lookups, anti-pattern QA before finalizing a section. Prefer a quick skill lookup over inventing values.
   **Guardrail:** it assists **within this spec's independently-reasoned design system (§3 — monochrome + Inter + IBM Plex Mono + modest radius + `--signal` green reserved for one tiny scoped element)**. Do not let its generic palette/style/motion suggestions override §3 or §0.6 — and do not let it reintroduce the old `DESIGN.md`'s tokens. Ignore its `--motion` GSAP output; our motion rules (§4/§10) win.

2. **shadcn/ui MCP** — free; gives the agent accurate shadcn component source (real props, no hallucination) for the React components.
   ```bash
   claude mcp add shadcn -- npx -y @jpisnice/shadcn-ui-mcp-server --github-api-key <free_github_token>
   ```
   (Free GitHub token raises the rate limit to 5000/hr; works without at 60/hr. The official `shadcn` CLI also ships an MCP if preferred.) Re-style shadcn components to §3 — modest radius, monochrome, Inter — they ship with different defaults.

3. **21st.dev Magic MCP** — free tier (monthly generation cap); needs an API key from `21st.dev/magic/console`. Generates polished React+Tailwind sections from a prompt. Use for a specific stubborn section; then conform it to §3.
   ```
   { "mcpServers": { "magic": { "command": "npx", "args": ["-y","@21st-dev/magic@latest"], "env": { "API_KEY": "<key>" } } } }
   ```

**The old `DESIGN.md`** (in `Augova/augova-frontend`) is available as an optional reference only — §3 is the actual design system and does not depend on it.

**Do NOT wire up / not usable here:**
- **Inspiration galleries** (Mobbin, Dribbble, Refero, recent.design, dark.design, minimal.gallery, motionsites.ai, Pinterest): Claude Code can't browse these. They're for a *human* to gather references and paste screenshots into the agent. Useful in the design-direction step, not as agent tools.
- **Framer components** (framer.university depth-globe / stacking-cards; framer.com mask-reveal / scratch-reveal / carousel): **incompatible** — this build uses Astro/React, not Framer; these live only inside Framer's canvas and can't be imported. The MapLibre hero (§0.6) already covers the "3D depth" want.
- **AI media / UGC generators** (Seedance, Higgsfield, Magnific, Google Flow, Arcads, shadergradient, motion.so, 10x, contentcore, ls.graphics): off-scope for building the *site*, and mostly paid. These make ad/UGC creative — relevant to *outreach marketing* later, not to this repo. (`shadergradient` is free but conflicts with the WebGL-hero-only rule — skip.)

**Optional utility:** **ezgif** (free) for compressing/converting any GIF/video asset the team produces. Not an agent tool; a manual optimizer.

---

## 2. Repo / file structure

```
augova-website/
├── CLAUDE.md                      # one line: build to docs/BUILD-SPEC.md
├── docs/BUILD-SPEC.md             # this file
├── astro.config.mjs               # static output, tailwind, sitemap, site URL
├── tailwind.config.mjs            # tokens mirrored into theme
├── functions/
│   └── submit.js                  # Pages Function: lead form → email + webhook
├── public/
│   ├── fonts/                     # self-hosted WOFF2
│   ├── audio/                     # demo call clips (placeholders at first)
│   └── og/                        # open-graph images per page
└── src/
    ├── styles/global.css          # tokens as CSS vars + base reset
    ├── data/
    │   ├── stats.json
    │   ├── features.json
    │   ├── steps.json
    │   ├── industries.json
    │   ├── faq.json
    │   └── demos.json             # audio clip metadata + transcripts
    ├── lib/                        # tiny utilities (reveal, countup)
    ├── components/                 # see §9
    ├── layouts/BaseLayout.astro    # <head>, meta, header, footer slot
    └── pages/
        ├── index.astro
        ├── demo.astro
        ├── about.astro
        ├── privacy.astro
        └── 404.astro
```

Reserved-but-not-built routes (leave room, don't create): `src/pages/industries/[slug].astro`, `src/pages/beyond-voice.astro`.

---

## 3. Design tokens (literal)

**Independently reasoned — not inherited from the old repo's `DESIGN.md`.** Consult that file only if a specific detail proves genuinely useful during the build; it is a reference, not the base.

Define in `src/styles/global.css` as CSS custom properties on `:root`, and mirror into `tailwind.config.mjs`.

### Color
```
--black:          #000000
--ink:            #0A0A0A   /* near-black: dark section bg + primary text on light */
--paper:          #F7F7F5   /* off-white section bg */
--white:          #FFFFFF
--gray-900:       #1A1A1A
--gray-700:       #424242
--gray-500:       #929292
--gray-300:       #BCBCBC
--gray-100:       #E8E8E6
--signal:         #22C55E   /* the ONLY non-monochrome color on the entire site */
```
**Palette rule (strict):** black, white, and the grey ramp are the entire visual system — every section background, every card, every button, every icon. `--signal` is not a brand accent to sprinkle through sections; it is reserved for **exactly one small, tightly-scoped element on the whole site** — a live-status pip (e.g. a `● Live` indicator by the demo phone number, or a single pulsing dot on the hero map). It must never appear as a section fill, a button color, a card border, an icon set, or repeated across multiple components as a design motif. If a second use case tempts you, the answer is no — render it in monochrome instead. This is deliberately far more restrained than a typical "one accent color" system.

### Typography
```
--font-display: "Inter", system-ui, sans-serif;
--font-body:    "Inter", system-ui, sans-serif;
--font-mono:    "IBM Plex Mono", ui-monospace, monospace;   /* eyebrows/labels only */
```
Inter, chosen independently: free, self-hosted, exceptionally legible at every size, and reads as premium-but-neutral in tech/SaaS contexts without being borrowed from any other brand's template. IBM Plex Mono for eyebrows, tags, and technical labels only — never body copy.

Type scale (desktop / tablet / mobile, px):
```
Hero H1:        72 / 52 / 38   weight 600, line-height 1.05, letter-spacing -0.02em
Section H2:     52 / 40 / 30   weight 600, line-height 1.1,  letter-spacing -0.01em
Card title:     24 / 22 / 20   weight 600
Body:           18 / 17 / 16   weight 400, line-height 1.55
Eyebrow:        11             weight 500, MONO, UPPERCASE, letter-spacing 0.14em
```

### Shape / spacing / depth
```
Corners:  modest radius — card 14px, button 10px, input 10px, tag/pill 999px. (Not brutalist-sharp, not heavy-rounded — a calm premium middle ground, reasoned independently.)
Depth:    hairline 1px border (--gray-100 on light / rgba(255,255,255,.08) on dark) + a soft shadow on light sections only; dark sections use tonal steps, not shadows.
Nav/overlay: backdrop-blur ~16px over a semi-transparent bg on scroll.
Spacing:  8px base unit — 4 8 12 16 24 32 48 64 96 128. Section padding-y: 96 desktop / 64 tablet / 48 mobile.
Motion:   duration 200-600ms, ease cubic-bezier(0.4, 0, 0.2, 1); reveal = fade + translateY(16px->0) once on intersection.
Container max-width: 1200px, 24px gutters (16px mobile).
```

**Section rhythm:** homepage sections **alternate dark (`--ink`) and light (`--paper`)** for visual pacing on a long single-scroll page — this is the original, independently-reasoned call (not the dark-mode-first tonal-layer approach floated in an earlier pass). Where §7 below marks a section's theme, treat it as dark/light per this alternation; any lingering reference to a colored (green) section theme is stale — render it as `--ink` or `--paper` instead.


---

## 4. Global rules (hard constraints — non-negotiable)

> **The live site currently breaks several of these** (fabricated testimonial + logos, a full public pricing page, HIPAA/SOC2/US-data claims, self-serve-trial framing). The §0.5 audit says what to remove or reframe; the rules below are why.

**Content:**
- **No pricing figures anywhere on the site.** No $ amounts for Augova's setup or monthly. The FAQ pricing answer deflects to the demo call (§6 faq). Competitor/alternative cost figures in the ROI section (answering service, front-desk hire) ARE allowed and intended — those are the anchor.
- **No case studies, client logos, testimonials, or named-client claims.** None exist yet. Leave the architecture able to add them later; show nothing now.
- **No secondary products** (text/chat, CRM automation, internal ops) in nav or as page sections. Voice receptionist only.
- **Canadian compliance framing only:** PIPEDA (privacy), CRTC (telecom). Never GDPR/HIPAA/TCPA as the primary frame.
- Copy is sentence case, plain verbs, active voice. No em-dash-free rule, but no filler.

**Technical (revised for the WebGL-hero direction — see §0.6):**
- **Exactly one WebGL element: the hero map. No 3D/WebGL anywhere else.** The hero is lazy-loaded and code-split, is **never the LCP** (the text + static map image are), and **must not load on mobile or under `prefers-reduced-motion`**. Every other section uses CSS/DOM/SVG motion only.
- **Mobile / reduced-motion hero ships at launch, not later.** A static map image (AVIF/WebP) with the same headline/subhead/CTA is a **launch-blocking requirement**, not a deferred polish pass. Capability/viewport detection at load chooses which hero mounts. If the static hero isn't done, the site isn't done.
- **Performance budget:** **core page JS (everything except the hero map bundle) stays < 100 KB.** The MapLibre bundle loads separately, deferred, desktop-capable path only, and never counts against the mobile path (which never loads it). Targets on the paths users get: **LCP < 2.5 s on mid-range mobile** (static image hero), CLS < 0.1, and the desktop map holds a usable frame rate on a mid-range laptop — if it can't, simplify it.
- **No scroll-*jacking*** (don't override the scrollbar). Scroll-*driven* motion that tracks natural scroll is the intended pattern.
- **No browser storage** unless later required.
- **Accessibility floor (WCAG AA):** AA contrast (tan never as text), visible `:focus-visible` styles, semantic landmarks, one `<h1>` per page, labeled inputs, keyboard-operable accordion + audio player. **`prefers-reduced-motion` gets the static hero and disables all reveals/parallax** — fully usable with zero motion.

---

## 5. Routes & pages

Reconciled with the live site (§0.5). The existing site uses `.html` pages; on the refactor path keep that, on the Astro path use the routes below — the page *set* is what matters.

| Route (Astro) / live file | Purpose | Status vs. live site |
|---|---|---|
| `/` (`index.html`) | Full narrative + conversion, single scroll | **Refactor** — restructure to §7, strip fake proof + self-serve claims |
| `/demo` | Cal.com embed + 5-field form + next-steps | **Add** — live site has only a "Contact" anchor; build the real conversion page (§8.1) |
| `/about` (`about.html`) | Credibility page | **Add** — missing on the live site |
| `/privacy` (`privacy.html`) | PIPEDA-aligned notice | **Add** — live footer links to a dead `#` Privacy link |
| `/features` (`features.html`) | Catalogue reference depth | **Keep** — content is on-strategy; re-skin only |
| `/404` | Not-found with Book Demo CTA | **Add** |
| ~~`/pricing` (`pricing.html`)~~ | — | **REMOVE** — §0.5/§4: no public pricing. Redirect `/pricing.html` → `/#faq` (the pricing-deflection answer) so existing links/bookmarks don't 404, and drop "Pricing" from the nav |
| `/industries/[slug]` | Per-vertical SEO pages | Reserve, don't build |
| `/beyond-voice` | Secondary-products page | Reserve, don't build |

Home anchors (for deep-linking from outreach): `#receptionist`, `#how-it-works`, `#industries`, `#faq`, `#demo-audio`.

Nav (all pages): How It Works · Features · Industries · About · **[Book Demo]**. Removed from the live nav: **Pricing** (page gone) and the generic **Contact** (becomes **Book Demo → /demo**).

---

## 6. Content data files (schemas + real content)

All copy below is final unless marked. Store as JSON in `src/data/`.

### `stats.json`
```json
[
  { "value": "28%", "label": "of business calls go unanswered on average", "source": "CallRail", "url": "https://www.callrail.com/blog/missed-calls-costing-your-business" },
  { "value": "62%", "label": "of small-business calls may never reach a live person", "source": "411 Locals (85 businesses, 58 industries)", "url": "https://411locals.us/small-business-owners-dont-answer-62-of-phone-calls/" },
  { "value": "78%", "label": "of consumers have walked away after one unanswered call", "source": "CallRail, 2025", "url": "https://www.callrail.com/blog/missed-calls-cost-businesses-more-than-ever" },
  { "value": "7×", "label": "likelier to qualify a lead when you respond within the hour", "source": "Harvard Business Review", "url": "https://hbr.org/2011/03/the-short-life-of-online-sales-leads" }
]
```

### `features.json` (8 grouped cards — from Core + Standard)
```json
[
  { "title": "Natural conversation", "body": "Understands free-form speech, not phone-tree menus. Handles interruptions, pauses, and background noise." },
  { "title": "Always on", "body": "Answers 24/7 with unlimited simultaneous calls. No voicemail, no hold music, no busy signal." },
  { "title": "Grounded answers", "body": "Answers from your approved FAQs, services, hours, and policies — and won't invent what it doesn't know." },
  { "title": "Live booking", "body": "Books, reschedules, and cancels right on the call, synced to your calendar." },
  { "title": "Lead capture", "body": "Collects name, need, urgency, and contact details, written straight to your CRM." },
  { "title": "Warm human handoff", "body": "Transfers important calls with a summary, so the caller never repeats themselves." },
  { "title": "Call summaries", "body": "A clean transcript, summary, and action items after every call." },
  { "title": "Missed-call recovery", "body": "Detects dropped calls and follows up by text before the lead moves on." }
]
```

### `steps.json` (5 steps + reliability items)
```json
{
  "steps": [
    { "n": "01", "title": "Call workflow audit", "body": "We map how your calls work today — who calls, why, and when a human needs to step in." },
    { "n": "02", "title": "Knowledge setup", "body": "We load your FAQs, services, hours, policies, and escalation rules." },
    { "n": "03", "title": "System integration", "body": "We connect your phone line, calendar, CRM, SMS, and email." },
    { "n": "04", "title": "Test calls", "body": "We run realistic calls before launch — bookings, FAQs, urgent and noisy callers." },
    { "n": "05", "title": "Go live & improve", "body": "The receptionist answers real calls. We monitor performance and keep refining." }
  ],
  "reliability": ["Approved knowledge base", "Human fallback", "Call logs & transcripts", "Pre-launch test calls", "Live monitoring", "Version control", "Failover routing"]
}
```

### `industries.json` (6)
```json
[
  { "name": "Home Services", "examples": "HVAC, plumbing, electrical, cleaning, roofing", "tags": ["Emergency calls", "Booking", "Follow-up"] },
  { "name": "Clinics & Wellness", "examples": "Dental, medical, physio, beauty", "tags": ["Scheduling", "Reminders", "FAQs"] },
  { "name": "Professional Services", "examples": "Legal, accounting, consulting, insurance", "tags": ["Intake", "Qualification", "Handoff"] },
  { "name": "Automotive", "examples": "Repair shops, detailing, dealerships", "tags": ["Service booking", "Status calls", "Quotes"] },
  { "name": "Real Estate & Property", "examples": "Realtors, property managers", "tags": ["Showings", "Tenant calls", "Maintenance"] },
  { "name": "Retail & Hospitality", "examples": "Restaurants, local shops", "tags": ["Reservations", "Questions", "Support"] }
]
```

### `faq.json` (8 — answers are final; #5 deliberately deflects pricing)
```json
[
  { "q": "Will callers know they're talking to an AI?", "a": "Yes — it's designed to. Augova introduces itself as an assistant, which Canadian privacy practice favors, and hands off to a person whenever a caller asks or the situation calls for it." },
  { "q": "What happens if it doesn't know the answer?", "a": "It won't guess. Augova answers only from the information you approve, and routes anything outside that to a human or takes a message." },
  { "q": "Do we keep our existing phone number?", "a": "Yes. Augova works with your current number — no porting needed unless you want it." },
  { "q": "Is this compliant with Canadian privacy law?", "a": "Yes. Augova is built to PIPEDA practice: call-recording disclosure, sensitive-data redaction in logs, and Canadian data handling." },
  { "q": "How much does it cost?", "a": "It depends on your business type and what you want it to handle. It's a simple setup fee plus a flat monthly rate — and the monthly doesn't start until after a 30-day proof window. We'll give you an exact number on the demo call." },
  { "q": "How long until it's live?", "a": "Usually one to two weeks — setup, integration, testing, and launch." },
  { "q": "Can it book into our calendar or practice software?", "a": "Yes. Google, Outlook, and Cal.com out of the box, plus deeper integrations with systems like Dentrix, Jane, Clio, and Jobber." },
  { "q": "What about when we're busy or after hours?", "a": "That's the point. Augova answers every call at once, around the clock, so nothing slips to voicemail." }
]
```

### `demos.json` (`[[PLACEHOLDER]]` audio, real transcripts to be recorded)
```json
[
  { "id": "booking", "label": "Booking a new appointment", "audio": "/audio/demo-booking.mp3", "transcript": "[[PLACEHOLDER transcript — record from live demo agent]]" },
  { "id": "faq", "label": "Answering a common question", "audio": "/audio/demo-faq.mp3", "transcript": "[[PLACEHOLDER transcript]]" },
  { "id": "handoff", "label": "Handing off to a human", "audio": "/audio/demo-handoff.mp3", "transcript": "[[PLACEHOLDER transcript]]" }
]
```

---

## 7. Homepage build spec (`index.astro`, top to bottom)

Section order is fixed. Each alternates dark/light per the "theme" note. Every section is wrapped in the shared `Section` component (§9) which owns padding + eyebrow.

### 7.0 Header (`Header.astro`, sticky)
- Left: `Augova` wordmark (text, `--font-display`, weight 600). Links home.
- Center (desktop): AI Receptionist (`#receptionist`) · How It Works (`#how-it-works`) · Industries (`#industries`) · About (`/about`)
- Right: **Book Demo** button (solid white, `--on-primary` text) → `/demo`
- Behavior: transparent over hero; on scroll > 80px, solid `--ink` bg + subtle backdrop-blur + hairline bottom border. Mobile: wordmark + hamburger + Book Demo button always visible; links collapse into a full-screen menu island.

### 7.1 Hero — theme: dark (`--ink`)
- Eyebrow: `AI PARTNER FOR SMALL & MID-SIZED BUSINESSES`
- H1 `[[DECISION]] headline`. **Default to build:** `Never miss another call. Never lose another customer.` — Variants for the team to choose from: (a) "Every call answered. Every lead captured." (b) "Your phone, answered 24/7 — by AI that sounds human." (c) "Stop losing customers to voicemail." Build with the default; it's a one-line swap.
- Subhead: `Augova builds AI receptionists for local businesses — answering every call around the clock, booking appointments, and capturing every lead, so the phone stops costing you customers.`
- CTAs: primary **Book Free Demo** → `/demo`; secondary **Hear it answer a call** → `#demo-audio` (engagement scroll, not conversion).
- **Visual — the WebGL hero map (`HeroMap`, the site's one WebGL element).** A dark, monochrome **3D map of the GTA / York Region** (MapLibre GL JS) with the six target cities as points/labels; scroll drives the camera (subtle pitch/pan/zoom). Headline, subhead, and CTAs sit in an overlay above it. Rules (from §0.6/§4): the **static map image + text are the LCP**; the live map **lazy-loads after first paint**; on **mobile and `prefers-reduced-motion` the WebGL never loads** — a static AVIF/WebP of the same map renders instead, same overlay on top. Fully monochrome — no accent color on the map itself (per §3's strict one-use rule for `--signal`, already spent elsewhere). This is the single showpiece — spend the design boldness here; every other section stays quiet CSS/DOM motion.
- **Fallback asset `[[PLACEHOLDER: hero-map static image]]`** — export a crisp monochrome map still (desktop + mobile crops). Build the static version first so the hero works before the WebGL layer exists.

### 7.2 Problem strip — theme: dark
- Eyebrow: `THE MISSED-CALL PROBLEM`
- H2: `The phone is still where high-intent customers disappear.`
- Render `stats.json` as 4 `StatCard`s. Numbers count up once on scroll. Each card shows value, label, and a small linked source. This is the page's only raw-stats moment — do not repeat these numbers elsewhere.

### 7.3 Product intro — theme: dark (id `receptionist`)
- Eyebrow: `OUR CORE PRODUCT`
- H2: `Meet the Augova AI Voice Receptionist.`
- Lead line: `It's not a voicemail replacement. It's a trained front desk that works inside your business rules.`
- Four capability blocks:
  1. **Answers every call** — Day, night, weekend, holiday, and overflow. No voicemail, no hold music.
  2. **Understands real conversations** — Handles natural speech, interruptions, and background noise, and answers from your business's own information.
  3. **Books and updates** — Checks availability, books on the call, sends confirmation, and updates your calendar and CRM.
  4. **Escalates safely** — Sends urgent or sensitive calls to the right person, with a summary so no one repeats themselves.
- **Visual: `LiveCallVisual`** (CSS/DOM/SVG, no WebGL) — a stylized live-call dashboard: transcript panel that types out on scroll-in, an action-flow strip (*Incoming call → Understanding → Checking calendar → Booked → CRM updated*), outcome chips (*Lead captured · Appointment booked · SMS sent · Summary ready*) with a subtle float. This was the old hero visual; it now supports the product section — it demonstrates the product where the words describe it. Respects reduced-motion.

### 7.4 Audio demo — theme: dark (id `demo-audio`)
- Eyebrow: `HEAR IT WORK`
- H2: `This is Augova answering a real call.`
- Render `demos.json` as `AudioDemoPlayer`s: label, play/pause, and the transcript visible beside/under the player. `[[PLACEHOLDER]]` audio files — **build the players now against `demos.json`; the layout must look finished with placeholder clips and swap cleanly when real recordings land.** Do not block this section on the recordings.
- Live-number CTA row: `Call it yourself:` **`[[PLACEHOLDER: DEMO_NUMBER]]`** as a `tel:` link (large tap target). Hide the row gracefully if the number env var is unset, so an absent number never ships a dead link.

### 7.5 ROI moment — theme: light (`--paper`)
- Eyebrow: `MISSED CALLS ARE MISSED REVENUE`
- H2: `One recovered customer can pay for the whole month.`
- Body: `A phone call is where new customers ask, book, and decide who to trust. When it goes unanswered, most don't leave a message — they call the next business that picks up.`
- Comparison block (these figures are ALLOWED — they're the anchor, and none is an Augova price): an after-hours answering service runs **$325–825/mo**; a full-time front-desk hire runs **$3,000+/mo** loaded; round-the-clock human coverage runs **~$160K/yr**. Augova answers every call, day and night, for a flat monthly rate — and one captured job or patient can cover it.
- CTA: **Book Free Demo** → `/demo`.
- Note: this is the only place cost figures appear, and they are competitor/alternative costs, never Augova's.

### 7.6 What's included — theme: light (`--paper`)
- Eyebrow: `WHAT'S INCLUDED`
- H2: `Everything your front desk does — and things it can't.`
- Render `features.json` as 8 `FeatureCard`s, 3-col desktop / 2-col tablet / 1-col mobile. Reveal on scroll with slight stagger.

### 7.7 Multilingual — theme: dark
- Eyebrow: `SPEAKS YOUR CUSTOMERS' LANGUAGE`
- H2: `It answers in Mandarin, Cantonese, Farsi, and more.`
- Body: `In Richmond Hill, most residents' first language isn't English. Augova greets and serves callers in their own language — and can switch mid-call — so no customer is lost in translation. No answering service in the region does this.`
- Visual: one greeting rendered in four scripts (EN / 中文 / فارسی / Русский) as styled text, `--font-display` where the script supports it, system fallback otherwise. This is a differentiator — give it a real visual moment, not a bullet.

### 7.8 How it works + reliability — theme: light (`--paper`, id `how-it-works`)
- Eyebrow: `HOW IT WORKS`
- H2: `Launched for you — not another tool to figure out.`
- Render `steps.json.steps` as 5 numbered `StepRow`s (numbering is meaningful here — real sequence). Progressive reveal on scroll.
- Reliability panel: heading `Reliable by design`, then `steps.json.reliability` as a tidy chip/list grid. This section is the justification for a managed service over a $59 app — give it weight.

### 7.9 Industries — theme: dark (id `industries`)
- Eyebrow: `BUILT FOR CALL-HEAVY BUSINESSES`
- H2: `If a missed call means a missed customer, this is for you.`
- Render `industries.json` as 6 `IndustryCard`s (name, examples, tags), 3-col/2-col/1-col.

### 7.10 FAQ — theme: light (id `faq`)
- Eyebrow: `QUESTIONS`
- H2: `Answers before you ask.`
- Render `faq.json` as `FAQAccordion` (keyboard-operable, one open at a time is fine, first item open by default).

### 7.11 Final CTA — theme: dark (`--ink`), full-bleed
- H2: `Let Augova answer your next missed call.`
- Body: `Book a free demo and hear how it answers, books, and follows up for your business.`
- Primary **Book Free Demo** → `/demo`, plus the 5-field `LeadForm` inline as the fallback path.

### 7.12 Footer (`Footer.astro`)
- Three columns:
  - **Product:** AI Voice Receptionist (`#receptionist`) · Features (`#receptionist`) · How It Works (`#how-it-works`) · Industries (`#industries`)
  - **Company:** About (`/about`) · Book Demo (`/demo`) · `[[PLACEHOLDER: contact email — Zoho custom-domain address]]`
  - **Trust:** Privacy Policy (`/privacy`) · PIPEDA-aligned data handling · Human handoff by design · Your data stays yours
- Bottom line: `© 2026 Augova. AI partner for SMBs — starting with the phone.`
- Sticky mobile CTA bar: after the hero scrolls out, a bottom-fixed **Book Demo** bar appears on mobile only.

---

## 8. Other pages

### 8.1 `/demo` (`demo.astro`)
- H1: `See Augova answer your calls.`
- Sub: `Tell us how your business handles calls today, and we'll show you a live demo built around it.`
- **Cal.com inline embed** — `[[PLACEHOLDER: CAL_COM_LINK]]`. Primary conversion.
- **Fallback `LeadForm`** (5 fields + 1 optional): Name · Business name · Email · Phone · Industry (select: Home Services, Clinics & Wellness, Professional Services, Automotive, Real Estate & Property, Retail & Hospitality, Other) · *optional* "What should it handle?" (textarea). Turnstile on submit.
- **"What happens next"** panel (4 steps): 1) We review your call workflow. 2) We identify your best first call flow. 3) We show you a live demo. 4) We recommend a setup path.
- Reassurance line: `A 30-minute call, no obligation. Anything you share stays private.`

### 8.2 `/about` (`about.astro`)
- H1: `AI that fits how your business actually works.`
- **Why Augova exists:** `Local businesses know AI can help but don't want disconnected tools or experiments. Augova builds practical AI that plugs into how a business already runs.`
- **Why voice first:** `Missed calls are the clearest, most expensive problem a local business has. So we started with the phone.`
- **How we work:** `Workflow audit, approved knowledge, real integrations, tested before launch, monitored after. A managed partner, not software you're left to configure.`
- **Our philosophy:** `Human control, safe handoff, your business rules, measurable outcomes.`
- **Team / accountability block** — `[[DECISION]]`. **Default to build:** an "How we're accountable" block (30-day proof window · outcomes written into the SOW · human oversight on every deployment). If the team wants names/roles/"built in York Region" instead, swap this block — it raises local trust. Do not fabricate team members.
- **Portfolio/prior work** — `[[PLACEHOLDER]]`: team to supply 2–3 concrete prior-work items. Until then, omit the section entirely (do not invent credibility).
- CTA: **Book Free Demo** → `/demo`.

### 8.3 `/privacy` (`privacy.astro`)
- Plain-language PIPEDA-aligned notice. `[[PLACEHOLDER content — needs a review pass before launch]]`. Required sections: what we collect (form submissions, analytics), how call-recording disclosure works, how long data is kept, how to contact us, and a note that Augova follows PIPEDA. Keep it readable, not legalese. This page is both a legal necessity and part of the trust story the product sells.

### 8.4 `/404`
- Short: `That page doesn't exist.` + **Book a Demo** and **Back home** links.

---

## 9. Components spec

Small, flat, token-driven. No component hard-codes a hex value.

| Component | Type | Props / behavior |
|---|---|---|
| `BaseLayout` | layout | `title`, `description`, `ogImage`; renders `<head>` meta + JSON-LD slot, `Header`, `<slot/>`, `Footer` |
| `Section` | wrapper | `theme` (`dark`\|`light`), `eyebrow`, `id`; owns padding-y + eyebrow rendering + text-color-for-theme |
| `Header` | island (mobile nav) | sticky/scroll-solidify behavior; mobile menu toggle |
| `Footer` | static | three columns + bottom line |
| `Button` | static | `variant` (`primary` solid white + `--on-primary` text \| `secondary` 1px outline \| `ghost`), `href`; modest radius (§3); `--signal` never on buttons; focus ring |
| `StatCard` | island | `value`, `label`, `source`, `url`; count-up once on intersection |
| `RadialStat` | island | optional variant of StatCard with SVG ring (`stroke-dashoffset` fill once) — only if a radial layout is used; otherwise skip |
| `FeatureCard` | static | `title`, `body`; hairline border, hover lift |
| `StepRow` | static | `n`, `title`, `body`; numbered, reveal on scroll |
| `IndustryCard` | static | `name`, `examples`, `tags[]` |
| `FAQAccordion` | island | array of `{q,a}`; keyboard-operable, aria-expanded, first open |
| `AudioDemoPlayer` | island | `label`, `audioSrc`, `transcript`; play/pause, no autoplay, transcript always in DOM |
| `HeroMap` | island (WebGL, deferred) | the **only** WebGL element; MapLibre GL map of GTA/York Region, scroll-driven camera; **lazy-loads after first paint; does not mount on mobile or `prefers-reduced-motion`** — those render `HeroMapStatic` instead |
| `HeroMapStatic` | static | AVIF/WebP map image + text overlay; the launch-required mobile/reduced fallback and the LCP asset |
| `LiveCallVisual` | static/CSS | product-section visual (moved out of hero); HTML/SVG/CSS only; transcript types on scroll-in, float on chips; reduced-motion safe |
| `LeadForm` | island | 5 fields + optional textarea; Turnstile; posts to `/functions/submit`; inline success/error states |
| `CTABand` | static | headline + body + Button; `theme` |

---

## 10. Animation spec (concrete)

Driver: a single `src/lib/reveal.js` IntersectionObserver utility + CSS classes. All animation gated behind `@media (prefers-reduced-motion: no-preference)`.

| Element | Animation | Trigger |
|---|---|---|
| Header | bg transparent→`--ink`, blur in, border fade | scrollY > 80px |
| Hero overlay content | fade + translateY(16px) entrance, ~120ms stagger | page load |
| **Hero map (desktop/WebGL only)** | scroll-driven camera: subtle pitch/pan/zoom as the hero scrolls past; ambient point pulse | scroll position; deferred mount after first paint |
| **Hero (mobile/reduced)** | none — static image, optional slow CSS scale/parallax only | — |
| Section depth/parallax | layered translateY at different scroll rates (CSS/transform, no WebGL) | scroll, throttled via rAF |
| Stat numbers | count-up 0→value, ~1200ms | on intersection, once |
| Feature/Industry cards | fade + translateY, 80ms stagger | on intersection |
| Step rows | progressive fade-in in sequence | on intersection |
| LiveCallVisual (product section) | transcript types in; outcome chips gentle float (±4px) | on intersection / ambient |
| Buttons | translateY(-1px) + arrow nudge on hover | hover |

WebGL is permitted **only** in the hero map (§0.6). Prohibited everywhere else: WebGL, canvas 3D, particle systems, scroll-*jacking*. Scroll-*driven* CSS/transform motion is the intended pattern; keep scroll handlers throttled through `requestAnimationFrame`.

---

## 11. Forms, booking, analytics

**Lead form** → `/functions/submit.js` (Cloudflare Pages Function):
- Verify Turnstile token server-side.
- On success: (1) send an email to `[[PLACEHOLDER: Zoho inbox]]`; (2) POST the payload to `[[PLACEHOLDER: leads-tracker webhook]]` so web leads enter the same pipeline as outreach leads.
- Return JSON; `LeadForm` shows inline success/error (no page reload). Errors are specific and actionable, in the interface's voice.
- Secrets (`TURNSTILE_SECRET`, email API key, webhook URL) as Cloudflare Pages environment variables — never in the repo.

**Booking:** Cal.com inline embed on `/demo`; all "Book Demo" CTAs across the site link to `/demo`. `[[PLACEHOLDER: CAL_COM_LINK]]`. Configure Cal.com's booking webhook (Cloudflare-side or Cal-side) to also log bookings to the leads tracker.

**Analytics:** Cloudflare Web Analytics (cookieless — no consent banner needed, consistent with the trust story). Custom events to instrument: `demo_cta_click` (include section name), `audio_demo_play`, `audio_demo_complete`, `demo_number_click`, `form_submit`, `cal_booking` (via webhook). These answer the one launch-phase question that matters: where do warm visitors drop off before booking. Add GA4 only if paid ads start.

---

## 12. SEO & metadata

- Per-page `<title>`, `<meta description>`, canonical, and OG image (`/og/*`).
- `LocalBusiness` + `Service` JSON-LD in `BaseLayout`, with York Region `areaServed` (Richmond Hill, Markham, Vaughan, Aurora, Newmarket, Barrie).
- `@astrojs/sitemap` for `sitemap.xml`; `robots.txt` allowing all, pointing to sitemap.
- One `<h1>` per page; descriptive `alt` on any imagery; audio transcripts live in the DOM (indexable).
- Honest scope: Google Business Profile will out-earn on-site SEO in year one; on-site SEO here is hygiene. The reserved `/industries/[slug]` routes are the future organic surface.

---

## 13. Launch checklist (definition of done — ship when green)

**Blocking:**
- [ ] **Live-site cleanup done (§0.5):** fabricated testimonial + logo wall removed; `pricing.html` removed and redirected to `/#faq`; HIPAA/SOC2/US-data-location claims removed; self-serve "7-day trial / no credit card / 5-minute" framing removed; sci-fi/binary theatre dialed back; © year fixed
- [ ] 4 pages + 404 build and deploy to a Cloudflare Pages preview
- [ ] All homepage sections (§7) render with real copy from `src/data`
- [ ] **Hero: WebGL map (`HeroMap`) works on capable desktop, lazy-loaded after first paint**
- [ ] **Hero: static image fallback (`HeroMapStatic`) ships at launch** and renders on mobile + `prefers-reduced-motion` (WebGL never loads there) — this is launch-blocking, not deferred
- [ ] Audio demo players built and functional against `demos.json` (placeholder clips OK to swap)
- [ ] Live demo number wired as `tel:` (interim number acceptable; row hidden if unset)
- [ ] FAQ complete incl. the pricing-deflection answer
- [ ] Privacy page has real reviewed content
- [ ] Lead form submits end-to-end (Turnstile + email + webhook) and Cal.com embed books
- [ ] Headline chosen (or default shipped)
- [ ] Perf budget met: **core JS < 100 KB** (hero map bundle excluded, loads deferred desktop-only); LCP < 2.5s mid-range mobile (static hero); CLS < 0.1
- [ ] A11y: AA contrast, focus states, keyboard nav, reduced-motion (static hero), one h1/page
- [ ] Hard rules audited: no Augova prices, no case studies, no secondary products, **WebGL only in the hero (nowhere else)**, Canadian compliance framing

**Not blocking (post-launch):** real recorded demo clips, production demo-agent screenshot swapped for the SVG, About team/portfolio decision, Decap CMS (add when a non-technical editor needs it or industry pages arrive).

---

## 14. Open decisions (with build-safe defaults)

| # | Decision | Default to build on | Swap cost |
|---|---|---|---|
| 1 | Old site: refactor or rebuild? | **Decided: NEW build in Astro + React.** Salvaged: `features.html` content, on-strategy copy, Tailwind-as-a-dependency. NOT salvaged: fonts, shape language, or `DESIGN.md`'s tokens — §3 is independently reasoned (§0.5) | — resolved |
| 2 | Aeonik license | Inter (display+body) + IBM Plex Mono | one line in `--font-display` |
| 3 | Hero headline | "Never miss another call. Never lose another customer." | one string |
| 4 | About: team names vs. accountability block | Accountability block | swap one section |
| 5 | Production demo agent owner/timing | Launch on interim self-built Vapi/Retell demo number; swap recordings later | swap audio files + number |
| 6 | Contact email / Zoho inbox | `[[PLACEHOLDER]]` | env var + footer string |
| 7 | Cal.com link, leads webhook, Turnstile keys | `[[PLACEHOLDER]]` env vars | Pages env vars |

**Placeholders to resolve before launch:** demo audio (×3) + transcripts, demo phone number, Cal.com link, Zoho contact email, leads-tracker webhook URL, Turnstile keys, privacy-page content, OG images. None blocks scaffolding or layout — build against the schemas and swap values in.
