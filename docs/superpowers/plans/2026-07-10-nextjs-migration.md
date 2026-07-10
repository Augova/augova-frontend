# Augova Frontend → Next.js + TypeScript Migration — Implementation Plan

## Goal

Migrate `augova-frontend` from static HTML/CSS to Next.js 14 (App Router) + TypeScript, statically exported (`output: 'export'`) for Cloudflare Pages, while:
- Preserving the current visual identity exactly (same Tailwind color tokens, spacing scale, fonts: JetBrains Mono + Geist).
- Implementing the new navbar (AI Receptionist / How It Works / Industries / About Us / Contact Us + Book Demo CTA) with transparent-over-hero → solid-on-scroll behavior and a mobile hamburger menu.
- Adding three new pages — `/industries`, `/about`, `/contact` — with content drawn only from `DEVELOPEMENT-DOCS/Definitions/*` and `DEVELOPEMENT-DOCS/Sales_and_Marketing/*` (never `Structure.md`, never pricing).

Full design rationale lives in `docs/superpowers/specs/2026-07-10-nextjs-migration-design.md`.

## Architecture overview

```
augova-frontend/
├── app/
│   ├── layout.tsx          # root layout: fonts, <Navbar/>, metadata
│   ├── globals.css         # ported body styles, keyframes, tailwind directives
│   ├── page.tsx            # Home ("/") — ported from index.html
│   ├── features/page.tsx   # ported from features.html
│   ├── industries/page.tsx # new
│   ├── about/page.tsx      # new
│   └── contact/page.tsx    # new
├── components/
│   ├── Navbar.tsx           # includes the mobile hamburger menu inline
│   ├── TorusKnotHero.tsx
│   └── ScrollReveal.tsx
├── hooks/
│   └── useScrolled.ts
├── hooks/useScrolled.test.ts
├── components/Navbar.test.tsx
├── tailwind.config.ts       # ported theme.extend
├── next.config.ts           # output: 'export'
├── package.json
└── tsconfig.json
```

## Tech stack

- Next.js 14, App Router, TypeScript
- Tailwind CSS (npm, not CDN)
- Vitest + @testing-library/react + jsdom for the two components with real behavioral logic (scroll state, mobile menu toggle)
- Playwright (already available via the `playwright-skill`) for a final cross-page smoke check
- Package manager: npm

---

## Task 1 — Scaffold the Next.js + TypeScript project

**Files created:** `package.json`, `tsconfig.json`, `next.config.ts`, `app/layout.tsx`, `app/page.tsx`, `app/globals.css`, `.eslintrc.json`

1. From `augova-frontend/`, run:
   ```bash
   npx create-next-app@latest . --typescript --tailwind --app --no-src-dir --import-alias "@/*" --eslint --use-npm
   ```
   When prompted about the non-empty directory (it contains `.git`, `.gitignore`, the old `.html` files, `docs/`), confirm proceeding — it will not touch existing files it doesn't own.

2. Verify scaffold builds:
   ```bash
   npm run dev -- -p 4321 &
   sleep 3
   curl -s -o /dev/null -w "%{http_code}\n" http://localhost:4321
   kill %1
   ```
   Expected: `200`.

3. Commit:
   ```bash
   git add package.json package-lock.json tsconfig.json next.config.ts next-env.d.ts app/ .eslintrc.json postcss.config.mjs tailwind.config.ts
   git commit -m "Scaffold Next.js + TypeScript project"
   ```

---

## Task 2 — Port the Tailwind theme config exactly

**Files modified:** `tailwind.config.ts`

The current site's theme lives inline in `index.html` lines 12–101. Port it verbatim (same keys, same values) into the generated `tailwind.config.ts`.

1. Replace the generated `tailwind.config.ts` content with:

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "surface-tint": "#c6c6c7",
        "error-container": "#93000a",
        "tertiary-container": "#e2e2e2",
        "inverse-primary": "#5d5f5f",
        "on-secondary": "#2f3037",
        "secondary-fixed-dim": "#c6c6cf",
        "surface-container-lowest": "#0e0e0e",
        "on-secondary-fixed-variant": "#45464e",
        "on-primary": "#2f3131",
        "outline-variant": "#444748",
        "on-tertiary": "#2f3131",
        "on-primary-fixed-variant": "#454747",
        "tertiary-fixed": "#e2e2e2",
        tertiary: "#ffffff",
        "surface-variant": "#353534",
        outline: "#8e9192",
        "on-error": "#690005",
        "on-secondary-fixed": "#1a1b22",
        "surface-container-highest": "#353534",
        "surface-elevated": "#18181B",
        "secondary-fixed": "#e2e1eb",
        "terminal-green": "#22C55E",
        surface: "#131313",
        "primary-fixed-dim": "#c6c6c7",
        "on-secondary-container": "#b4b4bd",
        "on-primary-container": "#636565",
        "primary-container": "#e2e2e2",
        primary: "#ffffff",
        secondary: "#c6c6cf",
        "on-error-container": "#ffdad6",
        "secondary-container": "#45464e",
        "tertiary-fixed-dim": "#c6c6c7",
        "inverse-surface": "#e5e2e1",
        background: "#131313",
        "on-tertiary-container": "#636565",
        "surface-container": "#201f1f",
        "on-primary-fixed": "#1a1c1c",
        "surface-dim": "#131313",
        "border-subtle": "#27272A",
        "surface-container-low": "#1c1b1b",
        "on-surface": "#e5e2e1",
        "inverse-on-surface": "#313030",
        "on-surface-variant": "#c4c7c8",
        "on-background": "#e5e2e1",
        "surface-container-high": "#2a2a2a",
        error: "#ffb4ab",
        "on-tertiary-fixed": "#1a1c1c",
        "primary-fixed": "#e2e2e2",
        "surface-bright": "#3a3939",
        "on-tertiary-fixed-variant": "#454747",
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
      spacing: {
        "margin-mobile": "24px",
        "grid-unit": "8px",
        gutter: "32px",
        "section-gap": "160px",
        "margin-desktop": "80px",
      },
      fontFamily: {
        "headline-lg-mobile": ["Geist", "sans-serif"],
        "headline-lg": ["Geist", "sans-serif"],
        "headline-display": ["Geist", "sans-serif"],
        "body-lg": ["Geist", "sans-serif"],
        "body-md": ["Geist", "sans-serif"],
        "label-mono": ["JetBrains Mono", "monospace"],
      },
      fontSize: {
        "headline-lg-mobile": ["32px", { lineHeight: "40px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-lg": ["48px", { lineHeight: "56px", letterSpacing: "-0.03em", fontWeight: "700" }],
        "headline-display": ["80px", { lineHeight: "88px", letterSpacing: "-0.04em", fontWeight: "700" }],
        "body-lg": ["18px", { lineHeight: "28px", letterSpacing: "-0.01em", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "label-mono": ["12px", { lineHeight: "16px", letterSpacing: "0.05em", fontWeight: "500" }],
      },
    },
  },
  plugins: [],
};

export default config;
```

2. Verify: `npm run build` completes with no Tailwind config errors.

3. Commit:
   ```bash
   git add tailwind.config.ts
   git commit -m "Port existing Tailwind theme tokens into tailwind.config.ts"
   ```

---

## Task 3 — Root layout: fonts, global styles, metadata

**Files modified:** `app/layout.tsx`, `app/globals.css`

1. Replace `app/globals.css` with the Tailwind directives plus the ported global styles from `index.html` lines 102–142:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  background-color: #131313;
  color: #e5e2e1;
  font-family: "Geist", sans-serif;
  scroll-behavior: smooth;
}

.material-symbols-outlined {
  font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24;
}

.ascii-texture {
  mask-image: radial-gradient(circle, white 0%, transparent 80%);
  opacity: 0.1;
  pointer-events: none;
}

#torus-knot-stage {
  background: radial-gradient(circle at top, rgba(255, 255, 255, 0.08), transparent 45%), #050505;
}

#torus-knot-stage #app,
#torus-knot-stage #app canvas,
#torus-knot-stage #app .ascii-output {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

#torus-knot-stage #app canvas,
#torus-knot-stage #app .ascii-output {
  display: block;
}

.asymmetric-gutter {
  padding-right: clamp(80px, 15vw, 400px);
}

.text-reveal {
  animation: reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes reveal {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

2. Replace `app/layout.tsx`:

```tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Augova | Your AI Receptionist",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <link href="https://cdn.jsdelivr.net/npm/jetbrains-mono@1.0.6/css/jetbrains-mono.min.css" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/geist@1.3.0/dist/fonts.css" rel="stylesheet" />
      </head>
      <body className="selection:bg-primary selection:text-background">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
```

   (Task 5 creates `components/Navbar.tsx` — this will fail to compile until then; that's expected and resolved in Task 5.)

3. Commit happens together with Task 5 (layout depends on Navbar existing to build).

---

## Task 4 — `useScrolled` hook (TDD)

**Files created:** `hooks/useScrolled.ts`, `hooks/useScrolled.test.ts`

This hook is the one piece of real logic in the navbar (transparent-over-hero → solid-on-scroll) — the right place for an actual RED→GREEN cycle.

1. Install test tooling:
   ```bash
   npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom @vitejs/plugin-react
   ```

2. Add to `package.json` scripts: `"test": "vitest run"`.

3. Create `vitest.config.ts` at the project root:
   ```ts
   import { defineConfig } from "vitest/config";
   import react from "@vitejs/plugin-react";

   export default defineConfig({
     plugins: [react()],
     test: {
       environment: "jsdom",
       setupFiles: ["./vitest.setup.ts"],
     },
   });
   ```

4. Create `vitest.setup.ts`:
   ```ts
   import "@testing-library/jest-dom/vitest";
   ```

5. **RED** — create `hooks/useScrolled.test.ts`:
   ```ts
   import { describe, it, expect, beforeEach } from "vitest";
   import { renderHook, act } from "@testing-library/react";
   import { useScrolled } from "./useScrolled";

   describe("useScrolled", () => {
     beforeEach(() => {
       window.scrollY = 0;
     });

     it("returns false when at the top of the page", () => {
       const { result } = renderHook(() => useScrolled(64));
       expect(result.current).toBe(false);
     });

     it("returns true once scrolled past the threshold", () => {
       const { result } = renderHook(() => useScrolled(64));
       act(() => {
         window.scrollY = 100;
         window.dispatchEvent(new Event("scroll"));
       });
       expect(result.current).toBe(true);
     });

     it("returns false again after scrolling back above the threshold", () => {
       const { result } = renderHook(() => useScrolled(64));
       act(() => {
         window.scrollY = 100;
         window.dispatchEvent(new Event("scroll"));
       });
       act(() => {
         window.scrollY = 0;
         window.dispatchEvent(new Event("scroll"));
       });
       expect(result.current).toBe(false);
     });
   });
   ```

6. Run and confirm it fails because `hooks/useScrolled.ts` doesn't exist yet:
   ```bash
   npm test
   ```
   Expected: fails with a module-not-found error.

7. **GREEN** — create `hooks/useScrolled.ts`:
   ```ts
   import { useEffect, useState } from "react";

   export function useScrolled(threshold: number): boolean {
     const [scrolled, setScrolled] = useState(false);

     useEffect(() => {
       const handleScroll = () => setScrolled(window.scrollY > threshold);
       handleScroll();
       window.addEventListener("scroll", handleScroll);
       return () => window.removeEventListener("scroll", handleScroll);
     }, [threshold]);

     return scrolled;
   }
   ```

8. Run again, confirm all 3 tests pass:
   ```bash
   npm test
   ```

9. Commit:
   ```bash
   git add hooks/useScrolled.ts hooks/useScrolled.test.ts vitest.config.ts vitest.setup.ts package.json package-lock.json
   git commit -m "Add useScrolled hook with tests for navbar scroll behavior"
   ```

---

## Task 5 — Navbar component (desktop + mobile) (TDD for the mobile toggle)

**Files created:** `components/Navbar.tsx`, `components/Navbar.test.tsx`

Nav links per approved spec: AI Receptionist (`/#hero`), How It Works (`/#how-it-works`), Industries (`/industries`), About Us (`/about`), Contact Us (`/contact`). Right CTA: Book Demo (`/contact`). Mobile: links collapse into a hamburger menu; Book Demo stays visible outside the collapsed menu.

1. **RED** — create `components/Navbar.test.tsx`:
   ```tsx
   import { describe, it, expect } from "vitest";
   import { render, screen, fireEvent } from "@testing-library/react";
   import Navbar from "./Navbar";

   describe("Navbar", () => {
     it("renders all nav links and the Book Demo CTA", () => {
       render(<Navbar />);
       expect(screen.getByRole("link", { name: "AI Receptionist" })).toBeInTheDocument();
       expect(screen.getByRole("link", { name: "How It Works" })).toBeInTheDocument();
       expect(screen.getByRole("link", { name: "Industries" })).toBeInTheDocument();
       expect(screen.getByRole("link", { name: "About Us" })).toBeInTheDocument();
       expect(screen.getByRole("link", { name: "Contact Us" })).toBeInTheDocument();
       expect(screen.getAllByRole("link", { name: "Book Demo" }).length).toBeGreaterThan(0);
     });

     it("mobile menu is closed by default and opens on hamburger click", () => {
       render(<Navbar />);
       const mobileNav = screen.getByTestId("mobile-menu");
       expect(mobileNav).toHaveClass("hidden");

       fireEvent.click(screen.getByRole("button", { name: /toggle menu/i }));
       expect(mobileNav).not.toHaveClass("hidden");
     });

     it("Book Demo stays visible outside the collapsible mobile menu", () => {
       render(<Navbar />);
       const topBarCta = screen.getAllByRole("link", { name: "Book Demo" })[0];
       const mobileMenu = screen.getByTestId("mobile-menu");
       expect(mobileMenu.contains(topBarCta)).toBe(false);
     });
   });
   ```

2. Run, confirm it fails (module not found):
   ```bash
   npm test
   ```

3. **GREEN** — create `components/Navbar.tsx`:
   ```tsx
   "use client";

   import { useState } from "react";
   import Link from "next/link";
   import { useScrolled } from "@/hooks/useScrolled";

   const NAV_LINKS = [
     { label: "AI Receptionist", href: "/#hero" },
     { label: "How It Works", href: "/#how-it-works" },
     { label: "Industries", href: "/industries" },
     { label: "About Us", href: "/about" },
     { label: "Contact Us", href: "/contact" },
   ];

   export default function Navbar() {
     const scrolled = useScrolled(64);
     const [mobileOpen, setMobileOpen] = useState(false);

     return (
       <nav
         className={`fixed top-0 w-full z-50 flex items-center justify-between px-margin-mobile md:px-margin-desktop h-16 transition-colors duration-300 ${
           scrolled
             ? "bg-background/95 backdrop-blur-xl border-b border-outline-variant"
             : "bg-transparent border-b border-transparent"
         }`}
       >
         <Link href="/" className="font-headline-lg-mobile text-headline-lg-mobile tracking-tighter text-primary">
           Augova
         </Link>

         <div className="hidden md:flex items-center gap-gutter font-body-md text-body-md">
           {NAV_LINKS.map((link) => (
             <Link
               key={link.href}
               href={link.href}
               className="text-on-surface-variant hover:text-primary transition-colors duration-200"
             >
               {link.label}
             </Link>
           ))}
         </div>

         <div className="flex items-center gap-4">
           <Link
             href="/contact"
             className="hidden md:inline-block bg-primary text-background px-6 py-2 font-bold text-body-md hover:opacity-80 transition-opacity"
           >
             Book Demo
           </Link>

           <button
             aria-label="Toggle menu"
             className="md:hidden text-primary"
             onClick={() => setMobileOpen((open) => !open)}
           >
             <span className="material-symbols-outlined">{mobileOpen ? "close" : "menu"}</span>
           </button>

           <Link
             href="/contact"
             className="md:hidden bg-primary text-background px-4 py-2 font-bold text-body-md hover:opacity-80 transition-opacity"
           >
             Book Demo
           </Link>
         </div>

         <div
           data-testid="mobile-menu"
           className={`${mobileOpen ? "flex" : "hidden"} md:hidden absolute top-16 left-0 w-full flex-col gap-grid-unit bg-background border-b border-outline-variant px-margin-mobile py-grid-unit`}
         >
           {NAV_LINKS.map((link) => (
             <Link
               key={link.href}
               href={link.href}
               className="text-on-surface-variant hover:text-primary transition-colors duration-200 py-2"
               onClick={() => setMobileOpen(false)}
             >
               {link.label}
             </Link>
           ))}
         </div>
       </nav>
     );
   }
   ```

   Note: the second `Book Demo` link (mobile top bar, outside `data-testid="mobile-menu"`) satisfies "Book Demo stays visible on mobile" — the test asserts the first matched `Book Demo` link (desktop one) isn't inside the mobile menu container; both instances live outside it by construction.

4. Run, confirm all Navbar + useScrolled tests pass:
   ```bash
   npm test
   ```

5. Now that `Navbar` exists, verify `app/layout.tsx` (Task 3) compiles:
   ```bash
   npm run build
   ```
   Expected: build succeeds (page content may still be the scaffold default — that's fixed in Task 7).

6. Commit:
   ```bash
   git add components/Navbar.tsx components/Navbar.test.tsx app/layout.tsx app/globals.css
   git commit -m "Add Navbar with scroll behavior, mobile menu, and new nav spec"
   ```

---

## Task 6 — Migrate the Home page (`/`)

**Files created:** `components/TorusKnotHero.tsx`, `components/ScrollReveal.tsx`
**Files modified:** `app/page.tsx`, `package.json`

Source: current `index.html` lines 156–523 (everything after the old `<nav>`, which is now replaced by the shared `Navbar` from the layout — do not re-include a nav element in this page). The file has three pieces of vanilla-JS behavior that must become React client components rather than static markup:

1. **Hero 3D effect** (`index.html` lines 159–277): a `three.js` + `AsciiEffect` torus-knot animation mounted into `#app` inside `#torus-knot-stage`, currently imported from `unpkg.com` inside an inline `<script type="module">`.
   - Install the npm package instead of relying on the CDN ESM import: `npm install three` and `npm install -D @types/three`.
   - Create `components/TorusKnotHero.tsx`:
     ```tsx
     "use client";

     import { useEffect, useRef } from "react";
     import * as THREE from "three";
     import { AsciiEffect } from "three/examples/jsm/effects/AsciiEffect.js";

     export default function TorusKnotHero() {
       const containerRef = useRef<HTMLDivElement>(null);

       useEffect(() => {
         const container = containerRef.current;
         if (!container) return;

         let width = container.clientWidth || window.innerWidth;
         let height = container.clientHeight || window.innerHeight;

         const scene = new THREE.Scene();
         scene.background = new THREE.Color(0x040404);

         const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
         camera.position.set(0, 0, 7);

         const clock = new THREE.Clock();

         const ambient = new THREE.AmbientLight(0x7b8b9a, 0.8);
         scene.add(ambient);
         const directional = new THREE.DirectionalLight(0xffffff, 1.2);
         directional.position.set(3, 4, 5);
         scene.add(directional);
         const fill = new THREE.PointLight(0x6d7dff, 18, 20);
         fill.position.set(-4, 2, -3);
         scene.add(fill);

         const geometry = new THREE.TorusKnotGeometry(1.4, 0.38, 220, 24);
         const material = new THREE.MeshStandardMaterial({
           color: 0xb6a47d,
           roughness: 0.34,
           metalness: 0.18,
           emissive: 0x101010,
         });
         const mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         const floor = new THREE.Mesh(
           new THREE.CircleGeometry(8, 64),
           new THREE.MeshBasicMaterial({ color: 0x0d0d0d, side: THREE.DoubleSide })
         );
         floor.rotation.x = -Math.PI / 2;
         floor.position.y = -2.1;
         scene.add(floor);

         const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
         renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
         renderer.setSize(width, height);
         container.appendChild(renderer.domElement);

         const effect = new AsciiEffect(renderer, " .:-=+*#%@", {
           invert: true,
           color: false,
           resolution: 0.16,
           scale: 1.0,
           alpha: true,
           block: false,
         });
         effect.setSize(width, height);
         effect.domElement.style.position = "absolute";
         effect.domElement.style.inset = "0";
         effect.domElement.style.width = "100%";
         effect.domElement.style.height = "100%";
         effect.domElement.style.background = "#040404";
         effect.domElement.style.color = "#f3efe8";
         effect.domElement.className = "ascii-output";
         container.appendChild(effect.domElement);

         let frameId: number;
         const animate = () => {
           const elapsed = clock.getElapsedTime();
           mesh.rotation.x = elapsed * 0.8;
           mesh.rotation.y = elapsed * 0.6;
           mesh.rotation.z = elapsed * 0.4;
           renderer.render(scene, camera);
           effect.render(scene, camera);
           frameId = requestAnimationFrame(animate);
         };
         animate();

         const handleResize = () => {
           width = container.clientWidth || window.innerWidth;
           height = container.clientHeight || window.innerHeight;
           camera.aspect = width / height;
           camera.updateProjectionMatrix();
           renderer.setSize(width, height);
           effect.setSize(width, height);
         };
         window.addEventListener("resize", handleResize);

         return () => {
           cancelAnimationFrame(frameId);
           window.removeEventListener("resize", handleResize);
           renderer.dispose();
           container.innerHTML = "";
         };
       }, []);

       return (
         <div id="torus-knot-stage" className="absolute inset-0 w-full h-full z-0 opacity-100">
           <div id="app" ref={containerRef} />
         </div>
       );
     }
     ```
   - In `app/page.tsx`, replace the original `<div id="torus-knot-stage">...</div>` block (including its inline `<script type="module">`) with `<TorusKnotHero />`.
   - The hero `<section>` wrapping this (`index.html` line 157, `<section class="relative min-h-screen ...">`) currently has no `id`. Add `id="hero"` to it in `app/page.tsx`, since the navbar's "AI Receptionist" link points to `/#hero`.

2. **Scroll-reveal + mouse-tracking background effect** (`index.html` lines 502–522, trailing `<script>`): an `IntersectionObserver` that adds `.text-reveal` to `section > div` elements, and a `mousemove` listener that paints a radial-gradient onto `<body>`.
   - Create `components/ScrollReveal.tsx`:
     ```tsx
     "use client";

     import { useEffect } from "react";

     export default function ScrollReveal() {
       useEffect(() => {
         const observer = new IntersectionObserver(
           (entries) => {
             entries.forEach((entry) => {
               if (entry.isIntersecting) {
                 entry.target.classList.add("text-reveal");
               }
             });
           },
           { threshold: 0.1 }
         );

         document.querySelectorAll("section > div").forEach((section) => {
           observer.observe(section);
         });

         const handleMouseMove = (e: MouseEvent) => {
           document.body.style.backgroundImage = `radial-gradient(circle at ${e.clientX}px ${e.clientY}px, rgba(255,255,255,0.03) 0%, transparent 40%)`;
         };
         document.addEventListener("mousemove", handleMouseMove);

         return () => {
           observer.disconnect();
           document.removeEventListener("mousemove", handleMouseMove);
         };
       }, []);

       return null;
     }
     ```
   - Render `<ScrollReveal />` once, at the top of `app/page.tsx`'s returned JSX.

3. Convert the remaining static HTML body content into `app/page.tsx` mechanically:
   - `class="..."` → `className="..."`
   - Self-close void elements (`<br>` → `<br />`)
   - Inline `style="key: value; key2: value2"` → `style={{ key: "value", key2: "value2" }}` (camelCase CSS properties, e.g. `animation-delay` → `animationDelay`)
   - `<!-- comment -->` → drop (or `{/* comment */}` where it aids readability)
   - Preserve every section id exactly as in the source (`problem`, `how-it-works`, `features`, `use-cases`, `contact`), plus the new `hero` id added in step 1, since the navbar's anchor links depend on them.
   - Drop the old inline `<nav>` block (`index.html` lines 145–155) — replaced by the shared `Navbar`.
   - Wire the previously inert `<button>` CTAs to the new `/contact` page using `next/link`, preserving their exact classes/text: "Book a Live Demo" (hero), "Deploy My AI Assistant" and "Talk to Sales" (final CTA section) all become `<Link href="/contact">`.

4. `app/page.tsx` does not itself need `"use client"` — it can stay a server component that renders the two client components (`TorusKnotHero`, `ScrollReveal`) alongside static JSX.

5. Verify dev server renders the home page with no console errors and all sections present:
   ```bash
   npm run dev -- -p 4321 &
   sleep 3
   curl -s http://localhost:4321 | grep -c "id=\"how-it-works\""
   curl -s http://localhost:4321 | grep -c "id=\"contact\""
   kill %1
   ```
   Expected: both greater than 0.

6. Commit:
   ```bash
   git add app/page.tsx components/TorusKnotHero.tsx components/ScrollReveal.tsx package.json package-lock.json
   git commit -m "Migrate homepage content from index.html, porting three.js hero and scroll-reveal effects to client components"
   ```

---

## Task 7 — Migrate the Features page (`/features`)

**Files created:** `app/features/page.tsx`

Source: current `features.html` lines 120–272 (body content after its old `<nav>`, which is dropped in favor of the shared `Navbar`).

1. Apply the same mechanical conversion rules as Task 6.
2. Drop the old inline `<nav>` (lines 122–132 of `features.html`).
3. Verify:
   ```bash
   npm run dev -- -p 4321 &
   sleep 3
   curl -s -o /dev/null -w "%{http_code}\n" http://localhost:4321/features
   kill %1
   ```
   Expected: `200`.
4. Commit:
   ```bash
   git add app/features/page.tsx
   git commit -m "Migrate features page content into app/features/page.tsx"
   ```

---

## Task 8 — Industries page (new content)

**Files created:** `app/industries/page.tsx`

Content basis (per approved content-generation rules): the "Industry Workflow Bundles" section of `DEVELOPEMENT-DOCS/Definitions/Features/Voice_Catalog.md` (features #110–127) grouped into verticals — Healthcare/Clinics, Legal, Real Estate/Property, Field Service/Trades, Hospitality — described as customer-facing capabilities (what the receptionist does for that industry), never packaging labels (no "Add-on"/"Core" wording) and never pricing.

1. Write the page using the same visual language as the rest of the site (same section wrapper classes: `py-section-gap px-margin-desktop`, same `font-headline-lg`/`font-body-md` classes, same card border style `border border-border-subtle p-8`):

```tsx
const INDUSTRIES = [
  {
    name: "Clinics & Healthcare",
    description:
      "Handles patient intake, triages emergency versus routine calls, and books appointments without adding to front-desk workload.",
  },
  {
    name: "Legal Practices",
    description:
      "Takes new client intake, runs a conflict check against your client list, and routes callers to the right practice area.",
  },
  {
    name: "Real Estate & Property",
    description:
      "Answers property inquiries, schedules showings, and qualifies buyers versus sellers before a call ever reaches an agent.",
  },
  {
    name: "Field Service & Trades",
    description:
      "Triages emergency versus routine service calls, gives a job estimate from the caller's description, and confirms the service area before booking.",
  },
  {
    name: "Hospitality & Reservations",
    description:
      "Books tables or rooms, captures special requests, and answers common guest questions around the clock.",
  },
  {
    name: "Property Management",
    description:
      "Takes maintenance requests, verifies tenant identity before discussing an account, and triages urgency for dispatch.",
  },
];

export default function IndustriesPage() {
  return (
    <main className="pt-32">
      <section className="py-section-gap px-margin-desktop" id="industries">
        <div className="mb-24">
          <div className="font-label-mono text-label-mono text-primary uppercase mb-4">Industries</div>
          <h1 className="font-headline-lg text-headline-lg text-primary">Built for call-heavy businesses.</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {INDUSTRIES.map((industry) => (
            <div key={industry.name} className="border border-border-subtle p-8 hover:bg-surface-elevated transition-colors">
              <h3 className="font-body-lg font-bold text-primary mb-4">{industry.name}</h3>
              <p className="font-body-md text-on-surface-variant">{industry.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
```

2. Verify:
   ```bash
   npm run dev -- -p 4321 &
   sleep 3
   curl -s -o /dev/null -w "%{http_code}\n" http://localhost:4321/industries
   curl -s http://localhost:4321/industries | grep -c "Field Service"
   kill %1
   ```
   Expected: `200`, and count `> 0`.

3. Commit:
   ```bash
   git add app/industries/page.tsx
   git commit -m "Add Industries page with content sourced from Voice Catalog verticals"
   ```

---

## Task 9 — About Us page (new content)

**Files created:** `app/about/page.tsx`

Content basis: themes from `DEVELOPEMENT-DOCS/Sales_and_Marketing/pitch_strategies/augova-sales-kit/*` reworded into marketing-page tone — assistant-to-the-front-desk framing (not a replacement), reliability principles (confirms bookings out loud, hands off anything uncertain to a human, calls fail over to normal phone lines if something goes wrong), multilingual capability. No city names, no named compliance regimes, no "new company" framing, no pricing.

```tsx
export default function AboutPage() {
  return (
    <main className="pt-32">
      <section className="py-section-gap px-margin-desktop">
        <div className="max-w-3xl mb-section-gap">
          <div className="font-label-mono text-label-mono text-primary uppercase mb-4">About Us</div>
          <h1 className="font-headline-lg text-headline-lg text-primary mb-8">
            An assistant for your front desk, not a replacement for it.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Augova builds AI receptionists for businesses that cannot afford to miss a call. We designed it to work
            alongside your team during the moments they are already stretched thin — not to take their place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter border-t border-border-subtle pt-12">
          <div>
            <h3 className="font-body-lg font-bold text-primary mb-4">Confirms before it commits</h3>
            <p className="font-body-md text-on-surface-variant">
              Every booking is read back to the caller and confirmed out loud before it's locked in.
            </p>
          </div>
          <div>
            <h3 className="font-body-lg font-bold text-primary mb-4">Knows when to hand off</h3>
            <p className="font-body-md text-on-surface-variant">
              Anything outside its knowledge base or judgment is passed to your team with full context, not guessed at.
            </p>
          </div>
          <div>
            <h3 className="font-body-lg font-bold text-primary mb-4">Fails safely</h3>
            <p className="font-body-md text-on-surface-variant">
              If something goes wrong, calls fail over to your existing phone lines — you are never worse off than
              before.
            </p>
          </div>
        </div>

        <div className="mt-section-gap max-w-3xl">
          <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-primary mb-6">Speaks your customers' language</h2>
          <p className="font-body-md text-on-surface-variant">
            Natural, multilingual conversation means callers are met in the language they're most comfortable in —
            not routed through a rigid, English-only phone tree.
          </p>
        </div>
      </section>
    </main>
  );
}
```

Verify + commit identically to Task 8 (route `/about`, grep for `"front desk"`).

---

## Task 10 — Contact Us page (new content, static form)

**Files created:** `app/contact/page.tsx`

Static form (no backend wired yet, per spec's non-goals) — fields: name, business name, email, phone, industry, message.

```tsx
export default function ContactPage() {
  return (
    <main className="pt-32">
      <section className="py-section-gap px-margin-desktop max-w-2xl">
        <div className="mb-12">
          <div className="font-label-mono text-label-mono text-primary uppercase mb-4">Contact Us</div>
          <h1 className="font-headline-lg text-headline-lg text-primary mb-4">Book a demo.</h1>
          <p className="font-body-md text-on-surface-variant">
            Tell us about your business and we'll show you how Augova can answer, qualify, and book your calls.
          </p>
        </div>

        <form className="flex flex-col gap-grid-unit">
          <input
            className="bg-surface-elevated border border-border-subtle px-4 py-3 text-on-surface placeholder:text-on-surface-variant"
            type="text"
            name="name"
            placeholder="Full name"
            required
          />
          <input
            className="bg-surface-elevated border border-border-subtle px-4 py-3 text-on-surface placeholder:text-on-surface-variant"
            type="text"
            name="business"
            placeholder="Business name"
            required
          />
          <input
            className="bg-surface-elevated border border-border-subtle px-4 py-3 text-on-surface placeholder:text-on-surface-variant"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <input
            className="bg-surface-elevated border border-border-subtle px-4 py-3 text-on-surface placeholder:text-on-surface-variant"
            type="tel"
            name="phone"
            placeholder="Phone number"
          />
          <input
            className="bg-surface-elevated border border-border-subtle px-4 py-3 text-on-surface placeholder:text-on-surface-variant"
            type="text"
            name="industry"
            placeholder="Industry"
          />
          <textarea
            className="bg-surface-elevated border border-border-subtle px-4 py-3 text-on-surface placeholder:text-on-surface-variant"
            name="message"
            placeholder="What should your AI receptionist handle?"
            rows={4}
          />
          <button
            type="submit"
            className="bg-primary text-background px-10 py-4 font-bold text-body-md hover:opacity-80 transition-opacity"
          >
            Submit Request
          </button>
        </form>
      </section>
    </main>
  );
}
```

Verify + commit identically to Task 8 (route `/contact`, grep for `"Submit Request"`).

---

## Task 11 — Static export configuration for Cloudflare Pages

**Files modified:** `next.config.ts`

1. Set static export:
```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
};

export default nextConfig;
```

2. Run the full static build and verify every route is emitted as static HTML:
```bash
npm run build
ls out/
ls out/features/ out/industries/ out/about/ out/contact/
```
Expected: `out/index.html`, `out/features/index.html`, `out/industries/index.html`, `out/about/index.html`, `out/contact/index.html` all exist.

3. Smoke-serve the static output:
```bash
npx serve out -p 5544 &
sleep 2
for path in "" features industries about contact; do
  curl -s -o /dev/null -w "/%s -> %{http_code}\n" "http://localhost:5544/$path" | sed "s#%s#$path#"
done
kill %1
```
Expected: `200` for all five.

4. Commit:
```bash
git add next.config.ts
git commit -m "Configure static export for Cloudflare Pages deployment"
```

---

## Task 12 — Document the Cloudflare Pages build settings

**Files created:** `docs/deployment/cloudflare-pages.md`

```markdown
# Cloudflare Pages build settings

Framework preset: **None** (static export)

- Build command: `npm run build`
- Build output directory: `out`
- Root directory: `/` (repo root is `augova-frontend`)
- Node version: 20 (set `NODE_VERSION=20` as an environment variable in the Pages project settings)

No Cloudflare adapter, Workers, or `wrangler.toml` is required — this is a plain static export.
```

Commit:
```bash
git add docs/deployment/cloudflare-pages.md
git commit -m "Document Cloudflare Pages build settings for static export"
```

---

## Task 13 — Final cross-page verification

Use the dev server (not the static export, to catch any client-side runtime errors the static grep checks in earlier tasks wouldn't reveal) and drive it with Playwright per the `playwright-skill`:

1. Start the dev server:
   ```bash
   npm run dev -- -p 4321 &
   sleep 3
   ```
2. Write and run a short Playwright script (or use the `playwright-skill` flow) that:
   - Visits `/`, `/features`, `/industries`, `/about`, `/contact` and asserts each returns 200 with no console errors.
   - On `/`, scrolls down and asserts the navbar's background class switches from transparent to solid.
   - Resizes to a mobile viewport (375px wide), clicks the hamburger button, and asserts the mobile menu becomes visible while the Book Demo button stays visible throughout.
3. Fix anything that fails, re-run until clean.
4. Kill the dev server:
   ```bash
   kill %1
   ```

No commit for this task unless fixes were needed (in which case commit those fixes with a message describing what was wrong).

---

## Task coverage check

- Tech stack (Next.js + TS + static export) → Tasks 1, 11, 12
- Preserve colors/fonts/spacing → Task 2, 3
- Navbar spec (links, scroll behavior, mobile menu, Book Demo) → Tasks 4, 5
- Home + Features migrated as-is → Tasks 6, 7
- Industries / About / Contact new pages, content-sourced per rules → Tasks 8, 9, 10
- Cloudflare Pages build scripts handed to user → Task 12
- End-to-end behavioral verification → Task 13
