// Augova — responsive hero background selector (React island, client-only).
// Picks the hero visual by device:
//   - Laptops / desktops (wide viewport + fine pointer) -> "Fluffy Globe"
//     (three.js; mouse-reactive, so it needs a real pointer).
//   - Phones / tablets / touch -> "Mesh" (Paper Design gradient; light-weight).
//
// Each variant is a dynamic import(), so Vite code-splits them into separate
// chunks and ONLY the chosen branch is downloaded — phones never fetch the
// ~120 KB three.js bundle; desktops never fetch the mesh chunk. React.lazy +
// Suspense handle the async mount. Until the media check resolves we render
// nothing and the CSS backdrop in HeroSection shows (no blank, no CLS).
import { lazy, Suspense, useEffect, useState } from "react";

// Real pointing device + laptop-ish width. Touch tablets and phones fall to
// the mesh regardless of width.
const DESKTOP_QUERY = "(min-width: 1024px) and (pointer: fine)";

const MeshGradientHero = lazy(() => import("./MeshGradientHero"));
const FluffyGlobeHero = lazy(() => import("./FluffyGlobeHero"));

export default function ResponsiveHero() {
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

  useEffect(() => {
    const mq = window.matchMedia(DESKTOP_QUERY);
    const apply = () => setIsDesktop(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  if (isDesktop === null) return null; // media check pending; backdrop shows

  return (
    <Suspense fallback={null}>
      {isDesktop ? <FluffyGlobeHero /> : <MeshGradientHero />}
    </Suspense>
  );
}
