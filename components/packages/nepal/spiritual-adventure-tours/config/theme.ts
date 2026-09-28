import type { CSSProperties } from "react";

/**
 * Single source of truth for this page's visual tokens.
 *
 * Values here are written onto the page root as CSS custom properties
 * (`--nsa-*`), so every stylesheet in this feature reads from them.
 * Change a colour here and the whole page follows — no CSS edits needed.
 * Tokens are scoped to `.nsa-page`, so nothing leaks into the rest of the site.
 */
export const nsaTheme = {
  color: {
    primary: "#123B5D", // Deep Himalayan Blue
    primaryDeep: "#0B2740", // darker step for dark sections / overlays
    secondary: "#2A7F82", // Mountain Teal
    secondaryDeep: "#1F6366", // teal passing AA as text on ivory
    accent: "#D8A64A", // Warm Golden
    accentDeep: "#A97A22", // gold passing AA as large text on ivory
    background: "#F8F6F0", // Soft Ivory
    surface: "#FFFFFF",
    surfaceMuted: "#EFEBE0",
    text: "#252B32", // Dark Charcoal
    textMuted: "#56606B",
    line: "rgba(18, 59, 93, 0.12)",
    white: "#FFFFFF",
  },
  font: {
    /**
     * Assumes the root layout exposes Playfair Display / Inter through
     * next/font CSS variables. Rename these if your layout uses different names.
     */
    display: "var(--font-playfair), 'Playfair Display', Georgia, 'Times New Roman', serif",
    body: "var(--font-inter), Inter, system-ui, -apple-system, 'Segoe UI', sans-serif",
  },
  radius: {
    sm: "10px",
    md: "16px",
    lg: "24px",
    pill: "999px",
  },
  space: {
    /** Vertical rhythm between sections. */
    section: "clamp(4.5rem, 9vw, 8rem)",
    gutter: "clamp(1rem, 4vw, 2.5rem)",
    container: "1240px",
  },
  shadow: {
    card: "0 1px 2px rgba(11, 39, 64, 0.06), 0 12px 32px -12px rgba(11, 39, 64, 0.18)",
    lift: "0 2px 4px rgba(11, 39, 64, 0.08), 0 24px 48px -16px rgba(11, 39, 64, 0.28)",
  },
  motion: {
    /** Reveal distance in px. Set to 0 for fade-only reveals. */
    revealDistance: 28,
    revealDuration: "700ms",
    /** Delay added per card in a staggered grid. */
    staggerStep: 70,
    /** Cap so the 8th card of a grid doesn't wait forever. */
    staggerMax: 420,
    ease: "cubic-bezier(0.22, 1, 0.36, 1)",
    /** Hero background parallax strength (0 disables). Fraction of scroll distance. */
    heroParallax: 0.22,
    hoverZoom: 1.06,
  },
} as const;

export type NsaTheme = typeof nsaTheme;

/** Flatten the theme into `--nsa-*` custom properties for the page root's `style`. */
export function themeToCssVars(theme: NsaTheme = nsaTheme): CSSProperties {
  const kebab = (s: string) => s.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);
  const vars: Record<string, string> = {};

  for (const [group, tokens] of Object.entries(theme)) {
    for (const [key, value] of Object.entries(tokens)) {
      vars[`--nsa-${group}-${kebab(key)}`] = typeof value === "number" ? String(value) : value;
    }
  }
  vars["--nsa-motion-reveal-distance"] = `${theme.motion.revealDistance}px`;

  return vars as CSSProperties;
}
