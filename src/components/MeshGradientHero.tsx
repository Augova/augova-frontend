// Augova — animated hero background (M6). React island.
//
// Replaces the originally planned MapLibre map hero: a full-bleed animated
// monochrome mesh-gradient (Paper Design shaders / WebGL). This is the ONE
// place React ships on the site and the ONE WebGL element — mounted with
// `client:only="react"` so it never renders on the server (no hydration
// mismatch, no WebGL on the server); the CSS backdrop in index.astro shows
// until this hydrates and remains the pre-JS / no-JS fallback.
//
// Palette is our real monochrome ramp (ink / gray-900 / gray-700), dark-biased
// so it reads as a premium "night" field and keeps AA for the white hero text
// at every frame. No signal green. A scrim in index.astro backs up contrast.
//
// prefers-reduced-motion -> speed 0: the shader renders a single composed still
// frame and the rAF loop stops entirely (zero recurring cost) — the same hero,
// not moving.
import { useEffect, useState } from "react";
import { MeshGradient } from "@paper-design/shaders-react";

// Monochrome spots from the design tokens (src/styles/global.css):
// --ink #0A0A0A · --gray-900 #1A1A1A · --gray-700 #424242.
const COLORS = ["#0A0A0A", "#1A1A1A", "#424242", "#111111", "#0A0A0A"];

export default function MeshGradientHero() {
  // Client-only island, so window/matchMedia are always available here.
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduced(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  return (
    <MeshGradient
      // Full-bleed behind the hero text; never intercepts clicks.
      className="pointer-events-none absolute inset-0 h-full w-full"
      style={{ width: "100%", height: "100%" }}
      colors={COLORS}
      // Organic drift; calm rather than showy (words carry the hero, not this).
      distortion={0.8}
      swirl={0.55}
      grainMixer={0.15}
      grainOverlay={0.04}
      // 0 => single still frame, rAF stops (reduced-motion path).
      speed={reduced ? 0 : 0.4}
      // Perf cap: don't render more than ~2.1MP regardless of DPR/viewport.
      maxPixelCount={1920 * 1080}
    />
  );
}
