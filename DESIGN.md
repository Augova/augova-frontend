---
name: Augova Editorial
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c4c7c8'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c6c6c7'
  primary: '#ffffff'
  on-primary: '#2f3131'
  primary-container: '#e2e2e2'
  on-primary-container: '#636565'
  inverse-primary: '#5d5f5f'
  secondary: '#c6c6cf'
  on-secondary: '#2f3037'
  secondary-container: '#45464e'
  on-secondary-container: '#b4b4bd'
  tertiary: '#ffffff'
  on-tertiary: '#2f3131'
  tertiary-container: '#e2e2e2'
  on-tertiary-container: '#636565'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c7'
  on-primary-fixed: '#1a1c1c'
  on-primary-fixed-variant: '#454747'
  secondary-fixed: '#e2e1eb'
  secondary-fixed-dim: '#c6c6cf'
  on-secondary-fixed: '#1a1b22'
  on-secondary-fixed-variant: '#45464e'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
  border-subtle: '#27272A'
  surface-elevated: '#18181B'
  terminal-green: '#22C55E'
typography:
  headline-display:
    fontFamily: Geist
    fontSize: 80px
    fontWeight: '700'
    lineHeight: 88px
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.03em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
spacing:
  margin-desktop: 80px
  margin-mobile: 24px
  gutter: 32px
  section-gap: 160px
  grid-unit: 8px
---

## Brand & Style

The design system is centered on the "Startup Manifesto" aesthetic: a blend of high-end editorial publishing and raw, technical engineering. It targets SMB owners who value clarity, authority, and efficiency. The brand personality is calm, confident, and direct, avoiding the decorative in favor of the functional.

The primary design style is **Minimalism with Brutalist influences**. It utilizes heavy whitespace, oversized typography, and a strict monochromatic palette to evoke a sense of "engineered" premium quality. Visual interest is derived from technical textures—specifically ASCII-inspired 3D wave patterns—rather than photography or traditional illustrations. The layout should feel asymmetrical and spacious, emphasizing a clear hierarchy where the most important message dominates the frame.

## Colors

This is a **dark-mode-first** design system. The palette is intentionally restrictive to maintain a high-contrast, technical feel.

- **Background:** The foundation is a deep Charcoal (#0A0A0A), providing a void-like canvas that allows typography to pop.
- **Primary:** Pure White (#FFFFFF) is reserved for headlines, primary buttons, and critical information.
- **Secondary:** A subtle Grey (#A1A1AA) is used for body copy and secondary details to reduce eye strain and establish hierarchy.
- **Accents:** Minimal use of grey and white. A "terminal-green" may be used sparingly for "Live" status indicators or successful connection states to reinforce the technical theme.
- **Borders:** Use low-visibility greys (#27272A) for structural lines and grid dividers.

## Typography

The typography is the core of the design. **Geist** provides a clean, technical, and geometric foundation.

- **Headlines:** Must be oversized with tight tracking (letter spacing). The `headline-display` style is used for hero statements and should feel massive and unavoidable.
- **Body:** Kept small and controlled. The line height is generous to ensure readability against the dark background.
- **Microtext/Labels:** **JetBrains Mono** is introduced for technical labels, tags, and small data points to lean into the "engineered" aesthetic.
- **Scaling:** On mobile, headlines should scale down aggressively to prevent awkward word breaks, while maintaining their bold weight.

## Layout & Spacing

The layout follows a **12-column fluid grid** for desktop, but adopts an **asymmetrical philosophy**. Elements should not always be centered; instead, utilize heavy left-alignment with wide-open right-side gutters to create a sophisticated, editorial feel.

- **Rhythm:** Use an 8px base unit. Section spacing is intentionally "too large" (`160px`+) to force the user to focus on one idea at a time.
- **Breakpoints:**
  - **Desktop (1440px+):** 12 columns, 80px side margins.
  - **Tablet (768px - 1024px):** 8 columns, 40px side margins.
  - **Mobile (Up to 767px):** 4 columns, 24px side margins.
- **ASCII Wave Integration:** The wave graphic should sit in the background of the hero or as a full-width separator, adhering to the grid lines.

## Elevation & Depth

This design system eschews traditional shadows in favor of **Tonal Layers** and **Low-Contrast Outlines**.

- **Surfaces:** Depth is created by stepping up the background color. The base is `#0A0A0A`. Elevated cards or containers use `#18181B`.
- **Borders:** Instead of shadows, use 1px solid borders in `#27272A` to define shapes. 
- **Backdrop Blur:** For navigation bars or overlays, use a heavy backdrop blur (20px+) with a semi-transparent background (`rgba(10, 10, 10, 0.8)`) to maintain the technical, "glass" feel without looking soft.
- **The Wave:** The ASCII wave graphic provides the primary "Z-axis" depth, creating a sense of 3D space through mathematical motion rather than lighting effects.

## Shapes

The shape language is **Sharp (0px)**. 

To maintain an authoritative, engineered feel, all buttons, input fields, and cards must have square corners. This reinforces the "Brutalist" and "Technical" nature of the brand. The only exception is the occasional use of circular icons or status pips. UI elements are defined by their borders and high-contrast typography rather than rounded corners or soft edges.

## Components

- **Buttons:** 
  - **Primary:** Solid White background, Black text, Sharp corners. High-impact.
  - **Secondary:** Outlined White (1px), White text, Sharp corners.
  - **Ghost:** Grey text, no background. Used for less critical actions.
- **Input Fields:** Bottom-border only or full sharp border in `#27272A`. Focused state changes border to White. Labels should use the `label-mono` style.
- **Cards:** No shadows. Use a 1px border (#27272A) or a slightly lighter background (#18181B). Content should have generous internal padding (32px+).
- **Chips/Tags:** Monospaced text inside a subtle grey border. No background fill.
- **ASCII Wave Graphic:** A dynamic component rendered via Three.js or a similar canvas-based approach. Characters (dots, +, or letters) should move in a sine-wave pattern. This is the "Hero Motion Graphic" and should be treated as a background-layer component.
- **Lists:** Simple horizontal dividers between items. Use the `label-mono` style for list headers or categories.