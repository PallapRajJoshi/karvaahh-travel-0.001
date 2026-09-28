/**
 * Nepal Spiritual & Adventure Tours — shared TypeScript contracts.
 *
 * Every piece of content on the page is typed here so data files can be
 * edited safely: a typo in a category, difficulty or icon name fails the
 * build instead of silently rendering a broken card.
 */

/* ------------------------------------------------------------------ */
/* Primitives                                                          */
/* ------------------------------------------------------------------ */

/** A registered image. `src` is a path under /public or an allowed remote URL. */
export interface ImageAsset {
  src: string;
  alt: string;
  /** Focal point for `object-position`, e.g. "50% 30%". Defaults to centre. */
  focus?: string;
  /** True while the file is a generated placeholder — surfaced in the README manifest. */
  placeholder?: boolean;
}

export interface LinkTarget {
  label: string;
  href: string;
  /** Accessible, descriptive label when the visible label is generic ("Explore"). */
  ariaLabel?: string;
}

/** Names of the inline SVG icons shipped in ui/Icon.tsx. */
export type IconName =
  | "temple"
  | "stupa"
  | "lotus"
  | "village"
  | "sunrise"
  | "festival"
  | "lake"
  | "mountain"
  | "compass"
  | "heritage"
  | "route"
  | "bed"
  | "document"
  | "bus"
  | "backpack"
  | "altitude"
  | "calendar"
  | "sparkle"
  | "arrow-right"
  | "arrow-down"
  | "plus"
  | "clock"
  | "pin"
  | "shield";

/* ------------------------------------------------------------------ */
/* Section content                                                     */
/* ------------------------------------------------------------------ */

export type SacredCategory =
  | "Hindu Pilgrimage"
  | "Buddhist Heritage"
  | "Hindu & Buddhist"
  | "Sacred Lake";

export interface SacredDestination {
  id: string;
  name: string;
  location: string;
  category: SacredCategory;
  description: string;
  image: ImageAsset;
  link: LinkTarget;
}

export type Difficulty = "Easy" | "Moderate" | "Challenging" | "Strenuous";

export interface AdventureExperience {
  id: string;
  title: string;
  region: string;
  description: string;
  difficulty: Difficulty;
  /** Typical range, e.g. "12–14 days". Omit when it varies too much to state. */
  duration?: string;
  /** Highest point commonly reached, e.g. "5,364 m". Approximate. */
  maxAltitude?: string;
  /** Short operational flag, e.g. "Restricted-area permit". */
  permitNote?: string;
  image: ImageAsset;
  link: LinkTarget;
}

export interface CulturalExperience {
  id: string;
  title: string;
  description: string;
  icon: IconName;
  image: ImageAsset;
}

export interface TourPackage {
  id: string;
  title: string;
  category: string;
  description: string;
  /** Indicative trip length. Rendered with an "indicative" hint, never as a promise. */
  duration: string;
  /** Leave `null` until a verified price exists — the card shows "Request a Quote". */
  price: { amount: number; currency: "INR" | "USD" | "NPR"; basis: string; verifiedOn: string } | null;
  /** Set only when a real package page exists. Without it the card links to the enquiry form. */
  href?: string;
  highlights: string[];
  image: ImageAsset;
  featured?: boolean;
}

export interface WhyFeature {
  id: string;
  title: string;
  description: string;
  icon: IconName;
}

export interface Season {
  id: string;
  name: string;
  months: string;
  /** 1–12. Drives the month ribbon on the card. */
  monthNumbers: number[];
  description: string;
  bestFor: string[];
  consider: string;
  icon: IconName;
  tone: "spring" | "monsoon" | "autumn" | "winter";
}

/** Accordion item used by both Travel Information and FAQ. */
export interface AccordionEntry {
  id: string;
  title: string;
  /** Paragraphs. Plain text only so the FAQ JSON-LD matches the visible copy exactly. */
  body: string[];
  /** Optional bullet list rendered after the paragraphs. */
  list?: string[];
  icon?: IconName;
}

/* ------------------------------------------------------------------ */
/* Page configuration                                                  */
/* ------------------------------------------------------------------ */

export type SectionId =
  | "overview"
  | "sacred"
  | "adventures"
  | "culture"
  | "packages"
  | "why"
  | "seasons"
  | "plan"
  | "faq"
  | "cta";

export interface SectionConfig {
  id: SectionId;
  enabled: boolean;
  /** Label in the sticky in-page navigation. Omit to keep the section out of the nav. */
  navLabel?: string;
}

export interface BreadcrumbItem {
  label: string;
  /** Omit on the current page, or on an ancestor that has no page yet (renders as text). */
  href?: string;
}
