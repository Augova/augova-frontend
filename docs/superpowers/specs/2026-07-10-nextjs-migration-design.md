# Augova Frontend: Next.js + TypeScript Migration — Design

## Context

The site is currently static HTML/CSS (Tailwind loaded via CDN, no build step) with two pages: `index.html`, `features.html`. It's deployed to Cloudflare Pages as a plain static build. Pricing has already been removed (page deleted, nav links removed).

The user has approved migrating to Next.js + TypeScript, with build scripts handed to Cloudflare Pages, on the condition that the current visual identity (colors, fonts, typography, structure) is preserved. A separate internal doc (`DEVELOPEMENT-DOCS/Development/Website/Structure.md`) contains a full alternate design system and site plan — **this doc is explicitly out of scope**: not for structure, not for design. Content sourcing draws only from `DEVELOPEMENT-DOCS/Definitions/*` and `DEVELOPEMENT-DOCS/Sales_and_Marketing/*`.

## Goals

1. Move to Next.js (App Router) + TypeScript, statically exported, deployable to Cloudflare Pages with a simple build command.
2. Preserve the current site's visual identity exactly: same color tokens, same fonts (JetBrains Mono + Geist), same component look/spacing.
3. Implement the new navbar exactly as specified by the user.
4. Add three new pages (Industries, About Us, Contact Us) with content generated from internal docs (Definitions + Sales_and_Marketing), reworded into website tone — no sales-script phrasing, no pricing figures, no city/legal-compliance claims (per user decision to keep generic).

## Non-goals

- No new design system, palette, or font (Structure.md's proposal is not used).
- No dynamic backend, API routes, or edge runtime (static export only) — this can change later if a real contact-form backend is needed.
- No pricing content anywhere.

## Tech approach

- **Framework:** Next.js 14+, App Router, TypeScript.
- **Styling:** Tailwind CSS installed via npm (replacing the CDN `<script>` tag). The existing inline `tailwind.config` object (colors like `surface-tint`, `error-container`, `tertiary-container`, etc., plus the `py-section-gap` / `px-margin-desktop` spacing scale) is ported verbatim into `tailwind.config.ts`.
- **Fonts:** JetBrains Mono and Geist, currently loaded from `cdn.jsdelivr.net` — kept as the same external `<link>` tags (or migrated to `next/font` pointing at the same font families if that proves cleaner; visual output must match).
- **Icons:** Material Symbols Outlined — kept as the same Google Fonts stylesheet link.
- **Deployment:** `next.config.ts` sets `output: 'export'`. Cloudflare Pages build settings:
  - Build command: `npm run build`
  - Build output directory: `out`
  - No Cloudflare adapter, no Workers, no edge runtime.

## Site map

| Route | Status | Notes |
|---|---|---|
| `/` | Migrated | Existing homepage content, ported as-is (minus pricing, already removed). Section anchors preserved: `#problem`, `#how-it-works`, `#features`, `#use-cases`, `#contact` used for in-page nav where applicable. |
| `/features` | Migrated | Existing features page content, ported as-is. |
| `/industries` | New | Dedicated page. Content: industry verticals grounded in the Voice Catalog's "Industry Workflow Bundles" section (clinics, legal, real estate, field service, hospitality, property management) reworded as customer-facing copy — capabilities only, no pricing/add-on labels exposed. |
| `/about` | New | Dedicated page. Content: mission/positioning synthesized from Sales_and_Marketing themes — AI receptionist as an assistant to the front desk (not a replacement), reliability principles (confirms bookings out loud, hands off anything uncertain, graceful failover to normal phone lines if something goes wrong), multilingual capability. No city references, no compliance-regime claims, no "new company" cold-call framing. |
| `/contact` | New | Dedicated page. Simple contact form (name, business name, email, phone, industry, message) — static form for now (no backend wired yet; can POST to a future endpoint or a form service). No pricing/demo-scheduling logic beyond a "Book Demo" CTA. |

## Navbar (per user spec)

Links, in order: **AI Receptionist · How It Works · Industries · About Us · Contact Us**
Right-aligned CTA: **Book Demo**

- `AI Receptionist` → `/#hero` (top of homepage)
- `How It Works` → `/#how-it-works`
- `Industries` → `/industries`
- `About Us` → `/about`
- `Contact Us` → `/contact`
- `Book Demo` → `/contact` (or a dedicated demo anchor/CTA target — reuses the same conversion action as Contact Us for now)

**Behavior:**
- Transparent background while scrolled to the top of the hero.
- Switches to solid (using the site's existing background color token, dark theme as currently implemented) once the user scrolls past the hero.
- Implemented via a scroll listener (`useEffect` + `window.scrollY` threshold) toggling a background/border class — client component (`"use client"`), since static export still supports client-side interactivity.
- Mobile (`< md` breakpoint): nav links collapse into a hamburger-triggered menu; **Book Demo** stays visible in the top bar at all times, outside the collapsed menu.

## Content generation rules

- Source material: `DEVELOPEMENT-DOCS/Definitions/Features/Voice_Catalog.md`, `DEVELOPEMENT-DOCS/Definitions/Initial_Offer/initial_offer.md`, `DEVELOPEMENT-DOCS/Sales_and_Marketing/pitch_strategies/augova-sales-kit/*.md`.
- Explicitly excluded as a source: `DEVELOPEMENT-DOCS/Development/Website/Structure.md` (structure and design only, not content).
- No pricing numbers, tiers, or packaging labels (Core/Standard/Add-on) surfaced verbatim — these are internal classification, not customer-facing language.
- No specific city/region claims (e.g. Richmond Hill), no named legal/compliance regimes (PIPEDA/PHIPA), no "new company" framing — keep trust language generic (e.g. "your team stays in control," "calls fail over safely if anything goes wrong").
- Sales-script phrasing (cold-call openers, rebuttals) is not copied directly — only the underlying capability claims are extracted and rewritten in a calm, marketing-page register consistent with the current site's tone.

## Open items resolved during brainstorming

- Migration scope: full site migration now (not just navbar).
- Deployment target: static export, not the Cloudflare Workers adapter.
- Industries / About Us / Contact Us: all three are dedicated pages, not homepage anchors.
- About Us copy source: Definitions docs (+ Sales_and_Marketing, per follow-up), not fabricated from scratch.
- Design system: current site's colors/fonts win over Structure.md's proposed palette.
- Structure/content plan: Structure.md excluded entirely; only Definitions + Sales_and_Marketing inform content.
- Local/compliance framing: excluded, keep generic.
