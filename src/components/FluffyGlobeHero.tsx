// Augova — "Fluffy Globe" hero, React wrapper (M11).
// Thin wrapper around src/lib/heroGlobe.ts's mountHeroGlobe() — used ONLY by
// /hero-preview (dev-only comparison tool) so both hero options can be
// viewed as React islands there. The real production homepage never uses
// this component: HeroSection mounts the same mountHeroGlobe() function via
// a plain vanilla <script>, so production visitors never download React
// just to decide whether to show the globe (see HeroSection.astro).
import { useEffect, useRef } from "react";
import { mountHeroGlobe } from "../lib/heroGlobe";

export default function FluffyGlobeHero() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    return mountHeroGlobe(mount);
  }, []);

  // Full-bleed; never intercepts clicks (CTAs sit above it).
  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
