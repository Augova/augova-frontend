# Fable Creative Plan — Augova Website Rebuild

**Status:** CREATIVE PLANNING ONLY. No implementation, no scaffolding, no deletions, no pushes.
**Branch:** `augova-astro-rebuild` (`main` untouched).
**Companion docs:** `augova-build-reference.md` (the spec — settled decisions live there) and `docs/FABLE-BUILD-PLAN.md` (Opus's technical plan — audit, architecture, milestones). This document is the third leg: the *creative and UX direction* — how the site should feel, why each section earns its place in the story, and where a human still has a taste call to make. It re-decides nothing the spec has settled. Where the spec gives a token, this doc gives the intent behind using it well.

---

## Approved decisions (locked — 2026-07-07)

The user reviewed this plan and approved the creative direction (§1–§7) with the following locked choices and directives. These override the recommendations/alternatives below where they differ.

1. **Creative direction (§1–§7): approved.**
2. **Pre-milestone summaries (standing rule):** before each milestone, the user gets a short summary of exactly what will be built, and approves before code is written. (Encoded in `CLAUDE.md` and `docs/AGENT-ROUTING.md`.)
3. **Hero headline (§8A):** default — *"Never miss another call. Never lose another customer."*
4. **Hero visual (§4, §8B): PARKED.** The 3D/WebGL hero object (MapLibre map vs. ASCII shape vs. something else) is undecided; **do not invest time in it yet.** Build a simple, on-system static hero placeholder; defer the WebGL `HeroMap` milestone until the user decides what the hero should be. The static-hero-first and reduced-motion rules still hold; the *specific concept* is open.
5. **Multilingual moment (§7.7, §8C):** build the quiet static four-script block now; prototype the bold animated variant later behind a toggle.
6. **`--signal` green pip (§4, §5): NOT USED anywhere for now.** The site stays **fully monochrome** — no accent element at all. The `--signal` token may exist in CSS but must not be applied by any component. Build guard: **no `#22C55E` / `--signal` usage anywhere** (stricter than the spec's one-use rule).

---

## 1. Creative positioning & voice — the emotional throughline

**The visitor we are designing for:** a small-business owner in Richmond Hill or Vaughan who answers their own phone from a job site, a chair-side, or a front counter. They are not anti-AI; they are anti-*being-burned*. They've seen chatbots embarrass businesses. They've been pitched software that became their second job. Their skepticism is earned and rational, and the site must treat it as such — never argue them out of it, never dazzle them past it. **Earn it down.**

**The single feeling the site must produce:** *"These people are calm because they've done this before."* Not excitement. Not futurism. The specific, almost physical relief of handing a stressful, always-on responsibility to someone visibly competent. The emotional analogue is not "wow, AI" — it's the feeling of hiring a really good employee.

**The emotional throughline in one line:**

> *Your phone is a source of quiet, constant loss. We are the calm, local, accountable people who stop it.*

Every creative decision resolves against that sentence. The monochrome palette is that calm. The map is that local. The plain copy, the sourced stats, the PIPEDA framing, the "it won't guess" FAQ answer — that accountable.

**Voice principles (governing all copy execution within the spec's final copy, and any connective tissue we write):**

- **Plain over clever.** The spec's copy already does this ("It won't guess."). Any microcopy we add — button labels, form errors, empty states — follows suit. A form error says *"That email doesn't look complete — mind checking it?"* not *"ERROR: INVALID INPUT."* The sci-fi register died with the old site; it does not sneak back in through the microcopy.
- **Confident, never salesy.** The site states things; it doesn't plead. No exclamation marks anywhere on the site. The strongest emphasis tool we allow ourselves is a short sentence.
- **Canadian, quietly.** The Canadian-ness (PIPEDA, York Region, the map, Richmond Hill's languages) is expressed through *specifics*, never through flag-waving. Naming Aurora and Newmarket does more trust-work than any maple leaf could.
- **Honest about the machine.** The product introduces itself as an assistant on real calls; the site carries that same honesty. We never imply the AI is a human, and we never hide that a human backs it up. The candor *is* the differentiator — the FAQ's "Will callers know they're talking to an AI?" / "Yes — it's designed to" is the most trust-building exchange on the page, and the design should let it breathe rather than bury it mid-accordion (it stays first, and first-open).

**Register calibration — three dials, all set deliberately:**

| Dial | Setting | Why |
|---|---|---|
| Warmth | Warm-neutral, not friendly-cute | SMB owners buy from competent adults, not mascots |
| Technicality | Concrete outcomes, zero jargon | "Books on the call, synced to your calendar" — never "NLU pipeline" |
| Urgency | Present but never pushy | The missed-call math creates its own urgency; we state it once (§7.2, §7.5) and trust it |

---

## 2. The narrative arc — how the single scroll tells one story

The §7 section order is fixed. What this section adds is the *dramatic function* of each beat — the job it does in the visitor's head, and how it should feel — so that implementation decisions (spacing, emphasis, motion weight) serve the story rather than fight it.

The homepage is structured as a classic persuasion arc: **wound → remedy → demonstration → arithmetic → recognition → reassurance → invitation.** One product, one story, one scroll.

### Act I — The wound (dark: Hero → Problem strip)

**7.1 Hero — *"We know exactly where you are."***
Job: establish authority-through-locality before a single claim is made. The visitor sees *their own region* rendered with restraint and precision — Markham, Vaughan, Aurora as labeled points on a near-black map. The subtext is doing the heavy lifting: *a company that maps York Region this carefully is not a faceless SaaS from nowhere.* The headline ("Never miss another call. Never lose another customer.") names the wound plainly over that map. Feel: cinematic but still — like the opening shot of a film, not the trailer. The visitor should want to scroll, not be pushed.

**7.2 Problem strip — *"It's not just you, and it's worse than you think."***
Job: convert a private, nagging suspicion into a validated, quantified fact. The four StatCards (28% unanswered, 62% never reach a person, 78% walk away, 7× within-the-hour) land as a drumbeat — count-ups give each number a moment of arrival. Crucially, each carries a *source link*: the design must make the sourcing visible, because "we cite CallRail and HBR" is a trust move disguised as a footnote — it silently says *we don't invent numbers*, which pre-answers the fear that we'd invent anything else. Feel: sober, almost clinical. This is the lowest emotional point of the page by design — the tension the rest of the scroll resolves.

### Act II — The remedy and the proof (dark: Product intro → Audio demo)

**7.3 Product intro (`#receptionist`) — *"Here is the employee you couldn't hire."***
Job: the turn. Tension breaks into resolution — and the framing must be *staffing*, not *software*. "It's not a voicemail replacement. It's a trained front desk" is the thesis sentence of the whole site; the four capability blocks (answers, understands, books, escalates) read like a strong job description. The LiveCallVisual beside them is the section's quiet masterstroke: while the words *claim*, the visual *demonstrates* — a transcript typing itself out, a call flowing to "Booked → CRM updated." The visitor watches the product work in miniature. Feel: relief with evidence attached. This section can be the longest on the page; it has earned the visitor's attention and should reward it.

**7.4 Audio demo (`#demo-audio`) — *"Don't take our word for it."***
Job: the proof-of-competence beat — and structurally vital, because the hard rules (rightly) strip us of every conventional proof device: no testimonials, no logos, no case studies. **The product's own voice is the only witness we're allowed to call, so this section carries the entire evidentiary burden of the page.** Three players, transcripts visible (honesty again — nothing hidden behind the play button), and the `tel:` live-number row as the boldest move on the site: *call it yourself, right now.* That invitation is fearless in a way no testimonial could ever be. Feel: quiet confidence — a craftsperson sliding their work across the table and saying nothing. This is also where the site's single `--signal` green pip lives (see §5): one small `● Live` beside the number. The only spark of color on the whole site marks the only place the product is literally alive.

### Act III — The arithmetic (light: ROI → What's included)

**7.5 ROI moment — *"Now let's talk like businesspeople."***
Job: move the decision from gut to ledger. The first light section (see §3 on why the tonal shift matters here): emotion handled, now the math. The comparison block anchors against what the visitor already pays or fears paying — $325–825/mo answering services, $3,000+/mo front desk, ~$160K/yr for round-the-clock humans — and pointedly *never* states Augova's price. That absence is a feature: "One recovered customer can pay for the whole month" lets the visitor do the arithmetic themselves, and self-generated conclusions are the ones people keep. Feel: like a straight-shooting accountant. Daylight, black figures on paper, no drama.

**7.6 What's included — *"And it's complete."***
Job: close the "what am I actually getting?" gap. Eight FeatureCards in a calm grid — deliberately undramatic, like a well-organized contract schedule. The headline's second clause ("— and things it can't") earns one beat of intrigue: missed-call recovery, unlimited simultaneous calls, a summary after every call — things no human front desk physically can do. Feel: thoroughness as reassurance.

### Act IV — Recognition and belonging (dark → light → dark)

**7.7 Multilingual — *"We know who actually calls you."***
Job: the local-insight moment — the single most differentiating claim on the page ("No answering service in the region does this") and proof that Augova understands the *actual* GTA, where the customer's customer may open in Cantonese or Farsi. The four-script greeting is the visual: one warm sentence, four writing systems, rendered as typography rather than illustration. Feel: a small moment of genuine surprise and warmth in an otherwise reserved page — the one section allowed to be a bit beautiful for its own sake. (How bold this moment goes is a taste call — see Alternatives, §8.)
Back to dark: after the daylight arithmetic, this section reads as a held breath — intimate, specific.

**7.8 How it works + reliability (`#how-it-works`) — *"You won't be doing this alone."***
Job: dismantle the biggest hidden objection — *"I don't have time to babysit another tool."* Five numbered StepRows where the subject of every sentence is **We**: we map, we load, we connect, we test, we monitor. The visitor's only job in the story is to run their business. The "Reliable by design" chip panel underneath answers the *other* silent question — "what happens when it screws up?" — with fallbacks, logs, test calls, monitoring, failover. This section is the justification for a managed service over a $59 app; give it visual weight accordingly. Feel: the calm of a written process. Light theme: procedural, documentary, nothing to hide.

**7.9 Industries (`#industries`) — *"People like you."***
Job: belonging. Six IndustryCards that function as mirrors — the HVAC owner finds "Emergency calls," the clinic manager finds "Reminders." The headline does the real work: "If a missed call means a missed customer, this is for you" defines the audience by *pain shape* rather than industry code, so even the visitor between categories self-selects in. Feel: recognition. Dark again — focused, personal.

### Act V — Reassurance and commitment (light → dark)

**7.10 FAQ (`#faq`) — *"Ask us the hard ones."***
Job: objection demolition, in the visitor's own internal voice. The eight questions are sequenced from spookiest to most practical, and the answers keep giving ground honestly ("It won't guess," "Yes — it's designed to" disclose the AI). Question 5 — pricing — deflects to the demo call *while giving real structure* (setup fee + flat monthly + 30-day proof window before the monthly starts), which reads as "we're specific, just in person" rather than "we're hiding the number." First item open by default: an open drawer says *nothing in here bites*. Feel: a candid conversation at the end of a good meeting. Light: transparency, daylight.

**7.11 Final CTA — *"Whenever you're ready."***
Job: commitment, framed as continuation rather than pressure. "Let Augova answer your next missed call" quietly implies the truth: the next missed call is coming either way. Full-bleed dark — the page closes the loop back to the hero's night-map mood, story resolved. The inline LeadForm beside the Book Free Demo button is the low-stakes path for the not-quite-ready. Feel: an open door and no salesperson standing in it. The managed, sales-led model means the site's job ends at *a conversation*, not a signup — the CTA's tone must match (no "Get started now!" energy anywhere).

**The arc, compressed:** *You're bleeding (dark) → here's the tourniquet, watch it work (dark) → the math is obvious (light) → we know your world (dark) → here's exactly how it goes (light) → you belong here (dark) → your questions, answered (light) → come talk (dark).*

---

## 3. The dark/light alternation as a storytelling device

The spec fixes the rhythm (§3, §7): sections alternate `--ink` and `--paper`. Creatively, this is not decoration — it's the page's *pacing mechanism*, and it should be executed with intent:

- **Dark sections are the emotional register.** Night is when the missed after-hours call happens; dark is where the problem lives, where the product performs (hero, product demo, audio), and where intimacy sits (multilingual, industries, final CTA). Dark = *feel*.
- **Light sections are the rational register.** Paper is where contracts, invoices, and process documents live: ROI, the feature schedule, the five-step process, the FAQ. Light = *verify*.
- The page therefore breathes **feel → verify → feel → verify**, which mirrors how a skeptical owner actually buys: an emotional pull, immediately checked against the numbers, repeatedly, until checking stops producing objections.
- **The transitions are chapter breaks.** Each dark→light boundary is a palate cleanse on a long scroll — it resets attention the way a scene cut does, and makes an eleven-section page feel like five or six movements instead of a wall. Execution note for later: boundaries should be honest hard cuts (a crisp edge, hairline where needed) — no gradient fades between themes, which would read as indecision in a system this disciplined.
- **The first light section (§7.5 ROI) is the pivot of the whole page** — four dark sections of problem-and-proof, then daylight exactly when the visitor is ready to ask "fine, but what's this worth?" The design should make that first tonal shift the most noticeable one: the reader should *feel* the register change from story to spreadsheet.
- **Ending dark matters.** The final CTA returning to `--ink` closes the ring composition with the hero — the page opens and closes at night, because night is when Augova is most obviously worth paying for.

---

## 4. Hero creative direction — the map as a thesis statement

**What the hero must say without words:** *"We are specialists in exactly your patch of the world."* Every generic AI-receptionist competitor opens with an abstract blob, a waveform, or a stock photo of a headset. Augova opens with **Markham**. That is the entire strategic point of the MapLibre decision, and the creative execution must protect it.

**Composition.** A dark, monochrome map of the GTA / York Region — `--ink` water and land in near-black tonal steps, road networks as faint `--gray-700`/`--gray-900` filigree, the six cities (Richmond Hill, Markham, Vaughan, Aurora, Newmarket, Barrie) as small labeled monochrome points. The map is *atmosphere, not interface*: no zoom controls, no attribution clutter beyond what licensing requires, nothing that invites the visitor to "use" it. It should read like an elegant nighttime satellite view of home — recognizable in half a second to anyone who lives there.

**Text over map.** The overlay owns the hierarchy; the map serves it:
- Text sits left-aligned in the container (not centered) — an editorial, confident placement that also keeps the eastern GTA map area visually open.
- Legibility is engineered, not hoped for: a subtle scrim (a soft radial or left-edge darkening baked into the map style/static image, not a gray box) guarantees AA contrast for the H1/subhead at every scroll state. If the map fights the text anywhere, the map loses.
- Order of perception: eyebrow (mono, tracked-out, quiet) → H1 (72px, weight 600, the page's one emotional gut-punch) → subhead (one calm sentence of what Augova actually is) → two CTAs. Primary **Book Free Demo** solid white — in this palette, a solid white button on near-black is *the* highest-contrast object on screen, which is exactly why buttons never needed the accent color. Secondary **Hear it answer a call** as a quiet outline — the low-commitment path down to the proof section, and the correct first click for a skeptic. Both must be plainly clickable within the first second.

**Motion character (desktop WebGL path).** The camera drift is *ambient, glacial, and scroll-tracked* — a slow pitch/pan that makes the region feel dimensional, closer to a museum installation than a video game. Rules of taste: no fly-to animations, no spinning, no bounce; if a bystander would call the motion "cool," it's 20% too much. The map never reacts to the cursor in an attention-seeking way. The visitor should half-notice the movement, the way you half-notice clouds.

**The one spark of life — placement decision for the `--signal` pip.** The spec allows the site's single green element to be either a hero-map pulse or a `● Live` pip at the demo number. **Creative recommendation: spend it in §7.4, next to the demo phone number — not on the map.** Reasoning: (a) the spec itself warns against green on the map (§0.6 explicitly says don't glow the map); (b) semantically, green-as-"live" is *true* at the phone number — that line is genuinely answered by the product right now — whereas on the map it would be mere decoration; (c) dramatically, holding all color until the moment the visitor is invited to *call the product* makes the pip a payoff, not a garnish. One tiny pulsing dot, `--signal`, beside `Call it yourself:` — the only color on the entire site, marking the only live thing on it. (Reduced-motion: the pip stays, its pulse stops — presence, not animation, is the point.)

**The static hero is a first-class experience, not a downgrade.** Creatively we treat `HeroMapStatic` as *the definitive photograph of the scene* and the WebGL map as that photograph gently breathing. Practical implications:
- The static export is **art-directed, not screenshotted**: composed crops for desktop and mobile (mobile crop tightens on the York Region core so city labels stay legible at 390px), exported at retina-crisp AVIF/WebP, with the same scrim, same label set, same tonal balance.
- Since the static image *is the LCP for everyone* and the only hero most mobile visitors ever see, it gets the same design scrutiny as the live map — arguably more. The bar: someone who only ever sees the static hero should never suspect a fancier version exists.
- Optional whisper of life on the static path (CSS only, `no-preference` users): a very slow scale drift (1.0 → ~1.03 over tens of seconds). Under reduced motion: perfectly still, and perfectly composed for stillness.

**What the hero must never become:** a tech demo. The moment the map upstages the headline, the hero has failed. Map = setting; words = story.

---

## 5. Design-system feel — composing §3 into "premium but neutral"

Tokens are settled (§3); this section is about *how they're played*.

**The premium effect in this system comes from four disciplines, not from any single element:**

1. **Space is the luxury good.** 96px section padding, a 1200px container, generous line-height — the monochrome palette only reads "premium" when nothing is crowded. Rule of thumb for every section: when in doubt, remove an element before shrinking the spacing. Cheap sites fill; expensive sites breathe.
2. **Type does all the talking.** With one family (Inter) carrying display and body, hierarchy comes entirely from size, weight (essentially just 600 vs 400), and color-as-tone (white/`--ink` for primary text, `--gray-500` for secondary). The tight negative tracking on headlines (-0.02em at 72px) is what makes Inter read *engineered* rather than *default*. Discipline: resist adding weights — a two-weight site looks decided; a five-weight site looks assembled.
3. **The mono voice is the "system, operating" register.** IBM Plex Mono eyebrows (11px, uppercase, 0.14em tracking) are the one typographic seasoning — they carry a faint air of infrastructure and precision, a *civilized* trace of the machine (everything the old site's binary theatre wanted to be and wasn't). Kept strictly to eyebrows, tags, and tiny technical labels (a timestamp in the LiveCallVisual, a source citation), it stays seasoning. In body copy it would become costume.
4. **Depth is a whisper.** Hairline 1px borders, one soft shadow tier on light sections, tonal steps (`--gray-900` panels on `--ink`) on dark sections. Nothing floats dramatically; things sit *slightly* proud of the page, like good print embossing. The 14px/10px radii keep everything calm — soft enough to be friendly, tight enough to be serious. No glassmorphism, no glows, no gradients-as-decoration.

**The restraint discipline for `--signal` — creative framing for the build.** The single-use rule is easiest to keep if the team internalizes the *story* reason, not just the rule: the site is a monochrome world in which exactly one thing is alive — the product, at the moment you can call it. Every additional green pixel dilutes that sentence. Practical guardrails (echoing Opus's plan): the token exists once in CSS, is applied by exactly one component, and a grep for `#22C55E`/`--signal` outside that component fails the build. Success states, hover states, link styles, chart accents, focus rings — all monochrome, no exceptions, forever answered with "render it in grayscale instead."

**Litmus test for every screen:** if it were printed in a high-end annual report, would it look at home? If yes, it's on-system. If it looks like a SaaS landing template, tighten the type, widen the space, and remove one thing.

---

## 6. Motion & interaction character — competent, quiet, never gimmicky

**The mood motion must convey:** *a well-run office.* Things happen when they should, take exactly as long as they need (200–600ms, the standard ease), and nothing moves to entertain. Motion on this site is **evidence of order**, not decoration. If a given animation were removed and the page communicated less, keep it; if it would merely be less "fun," cut it.

**Character notes per pattern (all CSS/DOM/SVG outside the hero, per the hard rule):**

- **Scroll reveals (fade + 16px rise, once):** the page *composing itself* as you read — elements arrive like a careful person laying documents on a table. Staggers stay short (80–120ms); a long cascade reads as showing off. Everything settles fully before the visitor's eye needs it.
- **StatCard count-ups (~1200ms, once):** the one place motion is allowed a little drama, because the numbers *are* the drama — a count-up gives each statistic a moment of arrival, like a meter settling on a bad reading. Once only; a re-triggering counter becomes a toy.
- **LiveCallVisual transcript typing:** the emotional heart of the motion system. The transcript types at a *believable conversational pace* — not teletype-fast, not agonizingly slow — because the animation is a live demonstration, a re-enactment of a real call. The action-flow strip (*Incoming → Understanding → Checking calendar → Booked → CRM updated*) advances in deliberate, discrete steps: state changes, like a checklist being worked through by someone unhurried. Outcome chips float ±4px, slowly — paperwork settling, not bubbles bouncing. This is the closest the site comes to theatre, and it stays believable precisely because everything around it is still.
- **FAQ accordion:** a smooth, unremarkable height ease. An accordion that animates cleverly is an accordion that annoys on the third open.
- **Buttons:** translateY(-1px) + arrow nudge on hover — a firm handshake, nothing more. No color pulses, no sheen sweeps.
- **Header solidify (>80px):** the blur-in to solid `--ink` should feel like the nav *clicking into place* for the working part of the scroll — a functional state change, done quietly.

**Reduced motion is a designed experience, not an off switch.** The `prefers-reduced-motion` visitor gets a *finished document* rather than a *performance of one*: static hero (composed for stillness, §4), all reveals pre-settled (content simply present at full opacity — never blank holes where animations would have been), stat values printed at their final numbers, the LiveCallVisual shown as a **completed** call — full transcript visible, flow strip at "CRM updated," chips resting. Framed creatively: motion users watch the call happen; reduced-motion users read the call report. Both are whole experiences; neither is the degraded one. This mirrors the product's own promise — it works the same for everyone who calls.

**Global motion taste test:** at any moment, at most one thing on screen should be moving ambiently. If two things float/pulse/type simultaneously in one viewport, the office is fidgeting — remove one.

---

## 7. Component intent — wireframe-level layout reasoning

No production code here; this is the *why* of each layout so implementation (Sonnet, later, post-approval) inherits intent, not just props.

**StatCard (×4, §7.2)** — a single row of four on desktop (2×2 tablet, stacked mobile). Internal hierarchy is strictly: huge numeral (display type, the card's whole reason to exist) → one-line label in `--gray-300`-on-dark → tiny mono source citation, linked, at the bottom. The citation must be *visibly present but typographically last* — legible proof, not a shout. Cards sit on `--gray-900` tonal panels with hairline borders; no icons (icons would cartoon the gravity). The four should read as one instrument panel giving one bad diagnosis, not four competing billboards.

**LiveCallVisual (§7.3)** — the product intro's proof-pane, paired with the four capability blocks in a split layout: text column (blocks stacked, generous spacing) beside the visual on desktop; visual after the first block on mobile so proof arrives early. The visual itself is a stylized dashboard-vignette in three stacked zones: transcript panel (the star — two speaker turns, caller and receptionist, typographically differentiated), the horizontal action-flow strip beneath it (five steps, mono labels, advancing state), outcome chips last (pill-shaped, monochrome). It must look like a *tasteful abstraction* of software — clearly an illustration of the product working, not a fake screenshot pretending to be UI. Hairline-bordered, tonal, no chrome (no fake traffic-light window buttons — that trope is beneath this system).

**AudioDemoPlayer (×3, §7.4)** — three horizontal rows stacked (not cards in a grid): each row = play/pause control (large, obvious, keyboard-first) + label ("Booking a new appointment") + the transcript *visible by default* beside/below, styled as a modest conversation excerpt. Rows over grid because listening is sequential and comparative; a grid implies "pick one," rows imply "here's the evidence, in order." The transcript's default visibility is a trust decision (nothing hidden behind the play button) and an SEO/a11y one. Below the three rows, the live-number row: `Call it yourself:` + the number as a big tap-target `tel:` link + the site's one `--signal` pip. This row is styled as the section's quiet climax — slightly more padding, slightly larger type — because it's the boldest claim on the site. (Row hides entirely when the number env is unset; the section must look complete without it.)

**FeatureCard (×8, §7.6)** — the calmest component on the page: title (24px, weight 600) + two-line body, hairline border, `--paper`-toned white card, gentle hover lift. 3/2/1 columns. Deliberately no icons in v1: eight icons is eight opportunities to look like clip-art, and the monochrome system makes mediocre icons conspicuous. Typography-only cards read as *specification*, which is the feel we want ("thoroughness as reassurance," §2). If icons ever come, they arrive as a single commissioned monochrome set or not at all.

**StepRow (×5, §7.8)** — full-width rows, not cards: oversized mono numeral (`01`–`05`, `--gray-300`, almost watermark-scale) left, title + body right, hairline rule between rows. Rows because a *sequence* must read top-to-bottom as one process — cards would fragment the choreography that makes "managed" credible. Progressive reveal in order reinforces we-do-this-in-order. The reliability chip panel follows as a bordered tray of pill chips (mono labels) under the heading "Reliable by design" — visually a *systems checklist*, the one place the infrastructure register gets a full component.

**IndustryCard (×6, §7.9)** — name (the mirror — biggest element) → examples line in `--gray-500` ("HVAC, plumbing, electrical…", where the real self-recognition happens) → 2–3 tag pills naming the *call types* ("Emergency calls," "Booking"), which quietly demonstrate we know their phone traffic, not just their industry label. Tonal panels on dark, 3/2/1 grid. Not links in v1 (nowhere to go yet) — but styled with enough affordance-neutrality that they can become links when `/industries/[slug]` ships.

**FAQAccordion (§7.10)** — single column, generous max-width (~720px; measure matters more than density here), hairline rules between items, question as the full-width keyboard-operable trigger with a modest +/– or chevron indicator (monochrome). First item open on load — the "nothing in here bites" signal (§2). One-at-a-time open keeps the page tidy and the reading focused. Answers are set in full body type — never smaller, because the answers are the point.

**LeadForm (§7.11, `/demo`)** — five fields + one optional textarea, single column always (multi-column forms read as bureaucracy), labels above fields (never placeholder-as-label), generous input height, one full-width primary submit. Inline success/error states in the site voice (§1): specific, human, unpanicked. In the final CTA it sits beside the Book Free Demo button as the visibly-secondary path — present, honest, but not competing. The optional "What should it handle?" textarea is the one warm touch: it invites the owner to describe their business in their own words, which is both good UX and good sales intelligence.

**Section & CTABand** — the Section wrapper's eyebrow treatment (mono, tracked, quiet) is the page's recurring wayfinding voice; consistent eyebrow rhythm is what makes eleven sections feel like one document. CTABand keeps a strict headline → one-line body → one button hierarchy; two competing CTAs in a band is one too many (the final CTA's form-beside-button is the deliberate single exception).

---

## 8. Creative alternatives — taste calls for a human

Three decisions worth a human's eye before implementation. Each has a build-safe default; none blocks the plan.

### A. Hero headline — which wound do we name? *(spec §7.1 `[[DECISION]]`)*
- **Default (build this): "Never miss another call. Never lose another customer."** Two mirrored punches, names both the event and the consequence, reads well over the map. Safe, strong, symmetrical.
- **(c) "Stop losing customers to voicemail."** The scrappiest and most concrete — names the *villain* (voicemail), and an imperative is a strong opening move. Risk: slightly smaller in spirit than the map beneath it; more campaign-line than thesis.
- **(a) "Every call answered. Every lead captured."** Calmest and most premium — states the *after* instead of the wound. Pairs beautifully with the map's serenity, but sacrifices the pain-first hook that makes Act I land, and the arc leans on that wound.
- **(b)** ("Your phone, answered 24/7 — by AI that sounds human") is the weakest fit: it leads with the mechanism and "sounds human" brushes against the disclosure-forward honesty the FAQ takes pride in.
- **Recommendation:** default, with (c) as the challenger worth an A/B look post-launch. One-string swap either way.

### B. Hero visual — map vs. ASCII shape *(spec §0.6/§14 `[[DECISION]]`)*
- **Map (default, recommended, strongly):** the only option that *argues the positioning*. An abstract shape says "we are a tech company"; the map says "we are *your* company." For a local-specialist brand with zero client proof allowed on the page, the map is doing evidentiary work — it's a claim about focus that can't be faked.
- **ASCII torus-knot (salvage candidate):** genuinely distinctive, cheap to ship (exists), and monochrome-native. But it's mood without meaning here — it decorates the brand rather than proving it, and it drags a faint trace of the old site's sci-fi register back onstage.
- **Middle path worth noting:** ship the map hero; if the ASCII effect still charms the team, it could someday serve as a light background motif on an *interior* page (rendered as static/CSS, never a second WebGL element) — but v1 does nothing with it. Keep it in reserve, unbuilt.
- **Recommendation:** map, unhedged. Only revisit if the static map exports prove visually weaker than expected.

### C. The multilingual moment — how loud? *(§7.7 execution range)*
The spec mandates a real visual moment (four scripts, styled text). The taste range:
- **Quiet (safe default):** the four greetings set as a refined typographic block — one greeting per line, generous size, EN / 中文 / فارسی / Русский, `--gray-300` on `--ink`, RTL handled correctly for Farsi. Dignified, unmissable, zero gimmick. Ships without risk.
- **Bold (worth considering):** the greetings *rotate or cross-fade* as the section's headline-scale element — one phrase, alive in four languages, timed slowly (reduced-motion: all four shown statically, i.e. the quiet version). More memorable and closer to the product truth ("switches mid-call"); risks being the page's second theatre moment after LiveCallVisual, and two theatres on one page strains the "one thing moving at a time" rule (§6).
- **Recommendation:** build quiet; prototype bold behind a one-line toggle during the animation pass and decide with eyes on it. The section's differentiating power is in the *claim* ("No answering service in the region does this") — the visual only has to be worthy of it, not to carry it.

*(A fourth, smaller call already argued in §4: the `--signal` pip lives at the demo number, not on the map. Flagging it here so a human can veto — but the creative case for the number is strong and the spec leans that way.)*

---

## Hard-rule conformance of this creative plan

Every direction above was checked against CLAUDE.md / spec §4: no pricing figures appear or are implied outside the allowed competitor anchors (§7.5); no proof devices are invented (the audio demo carries proof precisely *because* nothing may be fabricated); all compliance feel is PIPEDA/CRTC-Canadian; all framing is managed/sales-led (the CTA tone rules in §2 enforce it); one product throughout; WebGL exists only in the desktop hero map and the static/reduced path is designed as first-class (§4, §6); monochrome discipline with exactly one `--signal` element, placement recommended and single-sited (§4, §5); fonts self-hosted per spec; AA contrast engineered into the hero scrim and every register; one h1 per page assumed in every layout described.

---

## STOP — approval required

Creative planning is complete. **No implementation, no scaffolding, no code, no file deletions, no pushes, no changes to `main` or Cloudflare have been made or will be made from this document.**

Awaiting human decisions before any build work:
1. Approve or amend this creative direction overall (§1–§7).
2. Hero headline: default vs. variant (c) — §8A.
3. Hero visual: confirm the map (recommended) — §8B.
4. Multilingual moment: quiet default vs. prototyping the bold variant — §8C.
5. Confirm the `--signal` pip placement at the demo number (§4).

Nothing proceeds until these are answered and the user approves moving to the next milestone (per CLAUDE.md's routing: technical task definition by Opus, implementation by Sonnet/Haiku).
