/**
 * Everest Base Camp theme — the single source of truth for colours, type and motion.
 * `themeToCssVars()` turns this into `--ebc-*` custom properties on the page root,
 * so every CSS file reads from here. Change a value once, it updates everywhere.
 */

export const ebcTheme = {
  colors: {
    blue: "#123B5D", // Deep Himalayan Blue — primary
    blueDeep: "#0A2238", // darker step for overlays / footer-adjacent bands
    teal: "#2A7F82", // Mountain Teal — secondary (backgrounds, icons, large text)
    tealInk: "#226E71", // teal darkened to pass WCAG AA as small text on ivory
    gold: "#D8A64A", // Summit Gold — accent (use on dark backgrounds)
    goldInk: "#7F5B1C", // gold darkened to pass WCAG AA as text on ivory
    ivory: "#F8F6F0", // Soft Ivory — page background
    ivoryDeep: "#EFEBE0", // alternate band background
    charcoal: "#252B32", // body text
    muted: "#5B6570", // secondary text (AA on ivory)
    line: "rgba(18, 59, 93, 0.14)",
    white: "#FFFFFF",
    warning: "#9C4A1A",
    warningBg: "#FBF1E6",
  },
  fonts: {
    /** Falls back gracefully if the live project uses different next/font variable names. */
    heading: "var(--font-playfair, 'Playfair Display'), Georgia, 'Times New Roman', serif",
    body: "var(--font-inter, 'Inter'), system-ui, -apple-system, 'Segoe UI', sans-serif",
  },
  radius: { sm: "8px", md: "14px", lg: "22px" },
  motion: {
    /** Reveal animation duration in ms. */
    revealMs: 800,
    /** Delay between staggered siblings in ms. */
    staggerMs: 80,
    easing: "cubic-bezier(0.22, 1, 0.36, 1)",
    /** Hero parallax strength (0 disables). Fraction of scroll distance. */
    parallax: 0.25,
    /** IntersectionObserver rootMargin for reveals. */
    revealRootMargin: "0px 0px -10% 0px",
  },
} as const;

export type EbcTheme = typeof ebcTheme;

/** Converts the theme into a style object of CSS custom properties. */
export function themeToCssVars(theme: EbcTheme = ebcTheme): Record<string, string> {
  const vars: Record<string, string> = {};
  for (const [k, v] of Object.entries(theme.colors)) vars[`--ebc-${kebab(k)}`] = v;
  vars["--ebc-font-heading"] = theme.fonts.heading;
  vars["--ebc-font-body"] = theme.fonts.body;
  for (const [k, v] of Object.entries(theme.radius)) vars[`--ebc-radius-${k}`] = v;
  vars["--ebc-reveal-ms"] = `${theme.motion.revealMs}ms`;
  vars["--ebc-stagger-ms"] = `${theme.motion.staggerMs}ms`;
  vars["--ebc-ease"] = theme.motion.easing;
  return vars;
}

function kebab(s: string): string {
  return s.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);
}
