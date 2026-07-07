# Agent & Model Routing Policy — Augova Website

This document defines which model/agent does which job on the Augova rebuild, and how much of it is enforced by config vs. followed as instruction.

## What is enforceable in this environment (and what is not)

- **No config file performs task-conditional model routing.** There is no setting that says "if the task is creative use Fable, if it's coding use Sonnet." The main-thread model is chosen at runtime with `/model`. This policy is therefore followed as **project instruction**, with two enforceable supports below.
- **Enforceable support 1 — project default model:** `.claude/settings.json` sets the default main-thread model to **Opus** (`{"model": "opus"}`), matching "Opus is the default high-reasoning model." Override per session with `/model`.
- **Enforceable support 2 — pinned-model subagents:** `.claude/agents/*.md` define named subagents whose `model:` is pinned. Delegating work to them runs it on the intended model:
  - `creative-planner` → **Fable**
  - `coder` → **Sonnet**
  - `helper` → **Haiku**
  - `reviewer` → **Opus**
- Model/subagent availability depends on the account/plan. If a pinned model (e.g. Fable) is unavailable, the environment falls back — verify the running model when it matters.

## 1. Fable — creative planning & design strategy only  (`creative-planner`)

Use Fable when the task is highly creative, involves product/design judgment, or is ambiguous website strategy.

Use for: creative website planning · UX direction · page structure & storytelling · visual/design-system reasoning · high-level component planning · creative alternatives & tradeoff exploration · interpreting design references · turning the build reference into a creative implementation plan · deciding how sections should feel, flow, and communicate.

Produces: plans, design directions, UX strategies, wireframe-level structures, creative recommendations.

Do **not**: make Fable the default implementation agent; have it write large amounts of production code (unless explicitly asked). **Fable stops after planning and waits for approval before implementation.**

## 2. Opus — deep thinking, architecture, audits, complex reasoning  (`reviewer`, and the default main thread)

Use Opus as the default high-reasoning model for technical tasks that are not primarily creative design exploration.

Use for: architecture decisions · build planning · technical tradeoffs · repo audits · compliance/hard-rule audits · performance planning · accessibility planning · security/privacy reasoning · reviewing implementation plans · resolving ambiguity in the build spec · final checks before merge/push/deploy.

Opus may write small reference snippets or pseudocode, but generally **delegates actual implementation to Sonnet or Haiku**.

## 3. Sonnet — primary coding subagent  (`coder`)

Use Sonnet as the main implementation agent for non-trivial code.

Use for: Astro components · React islands · TypeScript · Tailwind · layout & page builds · integrating data files · forms · Cloudflare Pages Functions · accessibility fixes · performance fixes · refactors · test/build/debug loops.

Sonnet is the default code-writing agent.

## 4. Haiku — lightweight coding/support subagent  (`helper`)

Use Haiku for smaller, faster implementation and support tasks.

Use for: simple file edits · repetitive component updates · JSON/data-file creation · copy insertion from the build spec · small CSS/token updates · simple bug fixes · formatting cleanup · checklist verification · finding forbidden phrases · simple grep/search/audit tasks.

Haiku should **not** own complex architecture, creative UX decisions, or tricky implementation unless explicitly assigned.

## Required workflow (per milestone)

1. **Needs creative UX/design planning?** Start with **Fable** (`creative-planner`). Fable creates/updates the plan, then **stops for approval**.
2. **Needs technical reasoning?** Use **Opus**. Opus reviews spec, architecture, risks, and acceptance criteria, and defines the implementation tasks — then delegates coding to Sonnet/Haiku.
3. **Actual code writing:** Use **Sonnet** (`coder`) as primary; **Haiku** (`helper`) for small/mechanical edits. Do **not** use Fable as the main coding agent. Do **not** use Opus for bulk implementation unless explicitly approved.
4. **After code is written:** Sonnet or Haiku runs build/lint/checks. **Opus** performs a milestone review if the change is architecturally important or risky. **Stop for user approval before the next milestone.**

## Branch rule (binding)

- All work happens on **`augova-astro-rebuild`**.
- **`main` must not be touched, edited, committed to, overwritten, or pushed to.**
- Before any implementation: check the current branch → switch to `augova-astro-rebuild` if safe → create it if it does not exist → **stop if there are unsafe uncommitted changes** → do not push unless the user explicitly approves.

## Hard-rule checklist (all agents, every milestone)

No Augova pricing figures · no testimonials · no client logos · no case studies · no fabricated proof · no SOC2 · no HIPAA · no US data-location claims · Canadian PIPEDA/CRTC framing only · no self-serve/free-trial/no-credit-card/5-minute-setup framing · one product (voice receptionist) · WebGL only in the hero map · no WebGL on mobile/reduced-motion · no hard-coded accent colors · `--signal` green used once only, one tiny scoped element · no font CDN · no extra animation/3D libraries · one `<h1>` per page · keyboard-accessible interactive elements · visible focus states · core JS < 100 KB (excludes deferred hero-map bundle).
