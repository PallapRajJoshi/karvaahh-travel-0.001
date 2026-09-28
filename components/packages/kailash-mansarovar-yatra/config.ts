/**
 * Kailash Mansarovar Yatra — page configuration.
 *
 * One file controls: theme tokens, SEO, section order/visibility,
 * shared CTAs and motion settings. Components never hardcode any of these.
 */
import type { CSSProperties } from "react";
import type { CtaLink, SectionConfig } from "./types";

/* ------------------------------------------------------------------ */
/* Theme                                                               */
/* ------------------------------------------------------------------ */

/**
 * Single source of truth for colour. Converted to `--km-*` CSS custom
 * properties on the page root (see `themeStyle`), so the CSS files only ever
 * reference variables and nothing leaks outside `.km-page`.
 */
export const theme = {
  blue: "#123B5D", // Deep Himalayan Blue — primary
  blueDeep: "#0A2540", // darker step for hero / CTA grounds
  teal: "#2A7F82", // Mountain Teal — secondary
  tealSoft: "#E3F0EF",
  gold: "#D8A64A", // Sacred Golden — accent
  goldDeep: "#A97C2B", // gold that passes AA on ivory for small text
  ivory: "#F8F6F0", // Soft Ivory — background
  ivoryDeep: "#EFEBE0",
  ink: "#252B32", // Dark Charcoal — text
  inkSoft: "#56606B",
  white: "#FFFFFF",
  line: "rgba(18, 59, 93, 0.12)",
  caution: "#8A5A00",
  cautionBg: "#FBF1DC",
} as const;

export type ThemeToken = keyof typeof theme;

const toKebab = (s: string) => s.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);

/** `{ blueDeep: "#0A2540" }` → `{ "--km-blue-deep": "#0A2540" }` */
export const themeStyle = Object.fromEntries(
  Object.entries(theme).map(([k, v]) => [`--km-${toKebab(k)}`, v]),
) as CSSProperties;

/* ------------------------------------------------------------------ */
/* Site / SEO                                                          */
/* ------------------------------------------------------------------ */

export const site = {
  name: "Karvaahh",
  tagline: "Live to Travel",
  url: "https://karvaahh.in",
  path: "/packages/kailash-mansarovar-yatra",
} as const;

export const pageUrl = `${site.url}${site.path}`;

export const seo = {
  title: "Kailash Mansarovar Yatra | Sacred Mount Kailash Pilgrimage – Karvaahh",
  description:
    "Experience the sacred Kailash Mansarovar Yatra with Karvaahh. Explore Mount Kailash, Lake Mansarovar, Kailash Parikrama, and customized overland and helicopter-assisted pilgrimage options.",
  ogImage: {
    url: "/images/destinations/kailash-mansarovar/hero/mount-kailash-og.jpg",
    width: 1200,
    height: 630,
    alt: "Snow-covered Mount Kailash rising above the Tibetan plateau",
  },
  keywords: [
    "Kailash Mansarovar Yatra",
    "Kailash Mansarovar Yatra from Nepal",
    "Kailash Parikrama",
    "Kailash Kora",
    "Lake Mansarovar",
    "Kailash helicopter yatra",
    "Kailash overland yatra via Kerung",
  ],
} as const;

export const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Packages", href: "/packages" },
  { name: "Kailash Mansarovar Yatra", href: site.path },
] as const;

/* ------------------------------------------------------------------ */
/* Section registry — reorder, disable or relabel here                 */
/* ------------------------------------------------------------------ */

export const sections: SectionConfig[] = [
  { id: "hero", enabled: true },
  { id: "breadcrumb", enabled: true },
  { id: "section-nav", enabled: true },
  { id: "overview", enabled: true, navLabel: "Overview" },
  { id: "sacred-sites", enabled: true, navLabel: "Sacred sites" },
  { id: "parikrama", enabled: true, navLabel: "Parikrama" },
  { id: "mansarovar", enabled: true, navLabel: "Mansarovar" },
  { id: "packages", enabled: true, navLabel: "Packages" },
  { id: "routes", enabled: true, navLabel: "Routes" },
  { id: "significance", enabled: true, navLabel: "Significance" },
  { id: "why-karvaahh", enabled: true },
  { id: "seasons", enabled: true, navLabel: "When to go" },
  { id: "preparation", enabled: true, navLabel: "Prepare" },
  { id: "faq", enabled: true, navLabel: "FAQ" },
  { id: "final-cta", enabled: true },
  { id: "related", enabled: true },
];

export const isEnabled = (id: SectionConfig["id"]) =>
  sections.some((s) => s.id === id && s.enabled);

/* ------------------------------------------------------------------ */
/* CTAs — every button on the page resolves to one of these            */
/* ------------------------------------------------------------------ */

/**
 * `/contact` is the assumed enquiry route (see README). The `trip` query
 * lets the contact form pre-select the enquiry and lets analytics attribute
 * leads to this page.
 */
const ENQUIRY = "/contact?trip=kailash-mansarovar-yatra";

export const ctas = {
  explorePackages: { label: "Explore Yatra Packages", href: "#packages", variant: "primary" },
  customize: { label: "Customize Your Yatra", href: `${ENQUIRY}&type=custom`, variant: "secondary" },
  contact: { label: "Contact Karvaahh", href: ENQUIRY, variant: "ghost" },
  enquiry: (packageId: string) => `${ENQUIRY}&package=${encodeURIComponent(packageId)}`,
} satisfies Record<string, CtaLink | ((id: string) => string)>;

/* ------------------------------------------------------------------ */
/* Motion                                                              */
/* ------------------------------------------------------------------ */

export const motion = {
  /** IntersectionObserver rootMargin for reveals — trigger slightly before entry. */
  revealRootMargin: "0px 0px -8% 0px",
  revealThreshold: 0.12,
  /** Per-item delay for staggered grids (ms). Capped so long grids don't lag. */
  staggerMs: 70,
  staggerMaxMs: 420,
  /** Hero background drift as a fraction of scroll distance (0 disables). */
  heroParallax: 0.18,
  /** Show the thin reading-progress bar at the top of the viewport. */
  scrollProgress: true,
} as const;
