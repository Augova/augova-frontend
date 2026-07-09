// Augova — reveal-on-scroll driver (spec §10). One IntersectionObserver for
// every fade/translateY entrance on the site (hero, stat/feature/industry
// cards, step rows). The hidden pre-reveal state only exists in CSS under
// `@media (prefers-reduced-motion: no-preference)` (see global.css), so this
// script is purely additive: with reduced motion, elements are already
// visible and adding `.is-revealed` is a harmless no-op.
//
// Usage:
//   <div data-reveal>...</div>                        one element
//   <div data-reveal-group data-reveal-stagger="80">   direct children get
//     <div>...</div>                                   staggered transition-delay
//     <div>...</div>
//   </div>

const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-revealed");
        observer.unobserve(entry.target);
      }
    }
  },
  { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
);

document.querySelectorAll("[data-reveal]").forEach((el) => observer.observe(el));

document.querySelectorAll("[data-reveal-group]").forEach((group) => {
  const stagger = Number(group.dataset.revealStagger || 80);
  Array.from(group.children).forEach((child, i) => {
    child.classList.add("reveal-item");
    child.style.transitionDelay = `${i * stagger}ms`;
    observer.observe(child);
  });
});
