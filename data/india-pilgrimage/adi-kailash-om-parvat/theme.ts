import type { CSSProperties } from "react";

/**
 * Page theme — the single source of truth for colour, type and motion tokens.
 *
 * These values are emitted as CSS custom properties (prefixed `--akop-`) on
 * the page root, so the stylesheets never hard-code a colour. Change a value
 * here and every section follows.
 */

export const theme = {
  colors: {
    /** Deep Himalayan Blue — headings, dark sections. */
    primary: "#123B5D",
    /** Darker shade of primary for cinematic sections and overlays. */
    primaryDeep: "#0B2740",
    /** Mountain Teal — secondary accents, links on dark. */
    secondary: "#2A7F82",
    /** Sacred Golden — decorative accents, buttons, rules. */
    accent: "#D8A64A",
    /**
     * Darkened gold for small TEXT on light backgrounds. The brand gold is
     * ~2:1 on ivory, which fails WCAG; this shade passes 4.5:1.
     */
    accentText: "#86611D",
    /** Soft Ivory — page background. */
    background: "#F8F6F0",
    /** Slightly deeper ivory for alternating bands. */
    backgroundAlt: "#EFEBE0",
    surface: "#FFFFFF",
    /** Dark Charcoal — body text. */
    text: "#252B32",
    textMuted: "#56606B",
    border: "#E2DCCD",
    white: "#FFFFFF",
    /** Outlook chips on season cards. */
    outlookFavourable: "#2A7F82",
    outlookMixed: "#86611D",
    outlookCaution: "#A5512A",
    outlookClosed: "#56606B",
  },
  fonts: {
    /** Assumes the root layout exposes next/font variables with these names. */
    heading: "var(--font-playfair), 'Playfair Display', Georgia, 'Times New Roman', serif",
    body: "var(--font-inter), Inter, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
  },
  layout: {
    maxWidth: "1240px",
    gutter: "clamp(1rem, 4vw, 2.5rem)",
    sectionSpace: "clamp(4.5rem, 10vw, 8rem)",
    radius: "14px",
    radiusSmall: "8px",
    /**
     * Height of any sticky/fixed site header above this page. The sticky
     * "On this page" bar sits below it. Set to e.g. "72px" if your Navbar is sticky.
     */
    stickyOffset: "0px",
  },
  shadow: {
    card: "0 1px 2px rgba(18, 59, 93, 0.06), 0 8px 24px -12px rgba(18, 59, 93, 0.18)",
    cardHover: "0 2px 4px rgba(18, 59, 93, 0.08), 0 18px 40px -16px rgba(18, 59, 93, 0.30)",
  },
} as const;

export const motion = {
  /** IntersectionObserver settings shared by every reveal. */
  reveal: {
    rootMargin: "0px 0px -8% 0px",
    threshold: 0.12,
    distancePx: 22,
    durationMs: 750,
    /** Delay between staggered siblings (cards in a grid). */
    staggerMs: 70,
    /** Upper bound on stagger so long grids don't feel slow. */
    maxStaggerSteps: 6,
  },
  /** Hero parallax: image moves at this fraction of scroll speed. 0 disables. */
  heroParallax: 0.22,
  /** Ease used by all transitions. */
  ease: "cubic-bezier(0.22, 1, 0.36, 1)",
} as const;

/** Converts the theme into CSS custom properties for the page root. */
export function themeToCssVars(): CSSProperties {
  const c = theme.colors;
  const vars: Record<string, string> = {
    "--akop-primary": c.primary,
    "--akop-primary-deep": c.primaryDeep,
    "--akop-secondary": c.secondary,
    "--akop-accent": c.accent,
    "--akop-accent-text": c.accentText,
    "--akop-bg": c.background,
    "--akop-bg-alt": c.backgroundAlt,
    "--akop-surface": c.surface,
    "--akop-text": c.text,
    "--akop-text-muted": c.textMuted,
    "--akop-border": c.border,
    "--akop-white": c.white,
    "--akop-outlook-favourable": c.outlookFavourable,
    "--akop-outlook-mixed": c.outlookMixed,
    "--akop-outlook-caution": c.outlookCaution,
    "--akop-outlook-closed": c.outlookClosed,
    "--akop-font-heading": theme.fonts.heading,
    "--akop-font-body": theme.fonts.body,
    "--akop-max": theme.layout.maxWidth,
    "--akop-gutter": theme.layout.gutter,
    "--akop-section-space": theme.layout.sectionSpace,
    "--akop-radius": theme.layout.radius,
    "--akop-radius-sm": theme.layout.radiusSmall,
    "--akop-sticky-offset": theme.layout.stickyOffset,
    "--akop-shadow": theme.shadow.card,
    "--akop-shadow-hover": theme.shadow.cardHover,
    "--akop-ease": motion.ease,
    "--akop-reveal-distance": `${motion.reveal.distancePx}px`,
    "--akop-reveal-duration": `${motion.reveal.durationMs}ms`,
    "--akop-stagger": `${motion.reveal.staggerMs}ms`,
  };
  return vars as CSSProperties;
}
