// Augova — Tailwind theme mirror (spec §3)
//
// Every value below is a var(--token) reference back into
// src/styles/global.css — never a literal hex/px. global.css is the single
// source of truth; this file only teaches Tailwind's utility classes to
// resolve to those same custom properties, so `bg-ink`, `text-eyebrow`,
// `rounded-card`, etc. always match the design tokens exactly.
//
// Loaded via `@config "../../tailwind.config.mjs";` in global.css (Tailwind
// v4's supported path for JS-based theme.extend alongside @tailwindcss/vite).

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        black: "var(--black)",
        ink: "var(--ink)",
        paper: "var(--paper)",
        white: "var(--white)",
        gray: {
          900: "var(--gray-900)",
          700: "var(--gray-700)",
          500: "var(--gray-500)",
          300: "var(--gray-300)",
          100: "var(--gray-100)",
        },
        // Reserved token — must not be applied by any component yet
        // (site is fully monochrome). See global.css comment.
        signal: "var(--signal)",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      fontSize: {
        "hero-desktop": [
          "var(--text-hero-desktop)",
          {
            lineHeight: "var(--text-hero-line-height)",
            letterSpacing: "var(--text-hero-letter-spacing)",
            fontWeight: "var(--text-hero-weight)",
          },
        ],
        "hero-tablet": [
          "var(--text-hero-tablet)",
          {
            lineHeight: "var(--text-hero-line-height)",
            letterSpacing: "var(--text-hero-letter-spacing)",
            fontWeight: "var(--text-hero-weight)",
          },
        ],
        "hero-mobile": [
          "var(--text-hero-mobile)",
          {
            lineHeight: "var(--text-hero-line-height)",
            letterSpacing: "var(--text-hero-letter-spacing)",
            fontWeight: "var(--text-hero-weight)",
          },
        ],
        "h2-desktop": [
          "var(--text-h2-desktop)",
          {
            lineHeight: "var(--text-h2-line-height)",
            letterSpacing: "var(--text-h2-letter-spacing)",
            fontWeight: "var(--text-h2-weight)",
          },
        ],
        "h2-tablet": [
          "var(--text-h2-tablet)",
          {
            lineHeight: "var(--text-h2-line-height)",
            letterSpacing: "var(--text-h2-letter-spacing)",
            fontWeight: "var(--text-h2-weight)",
          },
        ],
        "h2-mobile": [
          "var(--text-h2-mobile)",
          {
            lineHeight: "var(--text-h2-line-height)",
            letterSpacing: "var(--text-h2-letter-spacing)",
            fontWeight: "var(--text-h2-weight)",
          },
        ],
        "card-title-desktop": [
          "var(--text-card-title-desktop)",
          { fontWeight: "var(--text-card-title-weight)" },
        ],
        "card-title-tablet": [
          "var(--text-card-title-tablet)",
          { fontWeight: "var(--text-card-title-weight)" },
        ],
        "card-title-mobile": [
          "var(--text-card-title-mobile)",
          { fontWeight: "var(--text-card-title-weight)" },
        ],
        "body-desktop": [
          "var(--text-body-desktop)",
          {
            lineHeight: "var(--text-body-line-height)",
            fontWeight: "var(--text-body-weight)",
          },
        ],
        "body-tablet": [
          "var(--text-body-tablet)",
          {
            lineHeight: "var(--text-body-line-height)",
            fontWeight: "var(--text-body-weight)",
          },
        ],
        "body-mobile": [
          "var(--text-body-mobile)",
          {
            lineHeight: "var(--text-body-line-height)",
            fontWeight: "var(--text-body-weight)",
          },
        ],
        eyebrow: [
          "var(--text-eyebrow-size)",
          {
            letterSpacing: "var(--text-eyebrow-letter-spacing)",
            fontWeight: "var(--text-eyebrow-weight)",
          },
        ],
      },
      borderRadius: {
        card: "var(--radius-card)",
        button: "var(--radius-button)",
        input: "var(--radius-input)",
        pill: "var(--radius-pill)",
      },
      maxWidth: {
        container: "var(--container-max)",
      },
      spacing: {
        gutter: "var(--gutter-desktop)",
        "gutter-mobile": "var(--gutter-mobile)",
      },
      transitionTimingFunction: {
        augova: "var(--motion-ease)",
      },
      transitionDuration: {
        "motion-min": "200ms",
        "motion-max": "600ms",
      },
    },
  },
  plugins: [],
};
