// Augova — scroll-linked depth/parallax driver (spec §10). CSS transform
// only, throttled via requestAnimationFrame, never scroll-jacking (scroll
// position is read, never overridden). Skipped entirely under reduced
// motion — the listener is never attached, so elements simply sit at their
// natural position.
//
// Usage: <div data-parallax="0.08">...</div> — the factor is how many px
// the element shifts per 100px scrolled; small values (0.04–0.12) read as
// "depth", not motion sickness.

const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!reduced) {
  const els = Array.from(document.querySelectorAll("[data-parallax]")).map((el) => ({
    el,
    factor: Number(el.dataset.parallax || 0.06),
  }));

  if (els.length > 0) {
    let ticking = false;

    const apply = () => {
      const vh = window.innerHeight;
      for (const { el, factor } of els) {
        const rect = el.getBoundingClientRect();
        // Distance of the element's center from the viewport's center,
        // so the shift is ~0 when centered and grows as it scrolls away.
        const delta = rect.top + rect.height / 2 - vh / 2;
        el.style.transform = `translateY(${(-delta * factor) / 10}px)`;
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(apply);
        ticking = true;
      }
    };

    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
  }
}
