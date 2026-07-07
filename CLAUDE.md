# Augova Website — Agent Guide

Marketing site for **Augova**: a managed AI **voice receptionist** for GTA / York Region SMBs. Sales-led, not self-serve. Full build spec: **`docs/BUILD-SPEC.md`** — read it before building and follow it exactly. This file is only the always-on guardrails.

**Build type:** a **NEW Astro + React site**, not a refactor. Salvage from the old repo (`Augova/augova-frontend`): the features-page content and on-strategy copy (spec §0.5). Do NOT adopt its `DESIGN.md`, fonts, or shape language — the design system is independently reasoned in spec §3.

## Hard rules — never violate
- **No pricing figures** anywhere on the site. Pricing lives in the sales call. Remove `pricing.html`; redirect `/pricing*` → `/#faq`.
- **No fabricated proof.** No testimonials, client logos, or case studies — there are no real clients yet. Remove the existing fake ones immediately.
- **No false compliance.** No HIPAA / SOC2 / US-data-location claims. Canadian framing only: **PIPEDA** (privacy), **CRTC** (telecom).
- **No self-serve framing.** No "free trial / no credit card / 5-minute setup / deploy it yourself." It's managed: 1–2 week setup, 30-day proof window.
- **One product** = the voice receptionist. Secondary products never appear in nav.
- **WebGL only in the hero map (MapLibre); nowhere else.** Every other section is CSS/DOM/SVG motion. Mobile/reduced-motion hero = static image, built at launch. No scroll-jacking.
- **Design system (spec §3, independently reasoned):** monochrome — black, white, grey ramp, Inter + IBM Plex Mono, modest radius. **`--signal` green (#22C55E) is the ONLY accent, used in exactly one tiny scoped element on the whole site** (e.g. one live-status pip) — never a section color, never on CTAs, never repeated.
- **Perf budget:** JS < 100 KB · LCP < 2.5 s mobile · CLS < 0.1. Self-hosted fonts, lazy audio, AVIF/WebP.
- **Accessibility AA:** contrast on charcoal, visible focus states, keyboard nav, `prefers-reduced-motion` (static hero), one `<h1>` per page.

## Agent & model routing
Full policy: **`docs/AGENT-ROUTING.md`**. Summary — route work to the right model; no config auto-switches by task type, so this is followed as instruction (backed by pinned-model subagents in `.claude/agents/` and an Opus default in `.claude/settings.json`).
- **Fable** (`creative-planner`) — creative planning & design strategy only: UX direction, page structure/storytelling, visual/design-system reasoning, creative alternatives, interpreting references. Produces plans; **stops for approval**. Not the default coder.
- **Opus** (`reviewer` / default main thread) — architecture, build planning, audits, compliance/perf/a11y/security reasoning, plan review, pre-merge checks. Delegates implementation.
- **Sonnet** (`coder`) — primary implementation: Astro/React/TS/Tailwind, pages, forms, Pages Functions, a11y/perf fixes, refactors, build/debug loops.
- **Haiku** (`helper`) — small/mechanical: simple edits, JSON/data files, spec copy insertion, token tweaks, formatting, forbidden-phrase sweeps, checklist verification.
- **Per milestone:** creative planning → Fable (stop for approval); technical reasoning → Opus (defines tasks) → delegate code to Sonnet/Haiku; Opus reviews risky/architectural changes; **stop for approval before the next milestone**. Never use Fable as the main coder or Opus for bulk implementation unless explicitly approved.

## Branch rule
All work on **`augova-astro-rebuild`**. **Never touch, edit, commit to, overwrite, or push `main`.** Before implementation: check branch → switch to `augova-astro-rebuild` if safe → create if missing → stop on unsafe uncommitted changes → no push without explicit approval.

## Workflow
- **Before starting each milestone, give the user a short summary of exactly what will be built in it, then wait for approval before writing code.** Non-negotiable gate.
- Do the **urgent removals** (fake testimonials/logos, pricing page) before building anything else.
- Then follow the spec's build order (§0) and launch checklist (§13). Checkpoint at each milestone.
- Copy is **final** in spec §6–§8 — don't invent it. `[[PLACEHOLDER]]` items stay until real assets land; `[[DECISION]]` items use the spec's default.
- Reference files by path; don't paste large files into context.
- **Use the `ui-ux-pro-max` skill whenever you'd otherwise guess/hallucinate a design detail, or when a skill lookup is cheaper/more reliable than reasoning from scratch** (interaction states, spacing, contrast, font/component patterns). It assists within §3 — it does not override the palette, layout, or motion rules. Use shadcn / 21st.dev MCPs for React component source; re-style output to §3 (modest radius, monochrome, Inter).
