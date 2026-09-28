/**
 * Adi Kailash & Om Parvat Yatra — shared content types.
 *
 * Every piece of copy, imagery and configuration on the page is typed here so
 * that editors can change data files without touching component logic.
 */

/* ------------------------------------------------------------------ */
/* Primitives                                                          */
/* ------------------------------------------------------------------ */

export interface ImageAsset {
  /** Path under /public (e.g. "/images/destinations/…/hero/om-parvat.jpg"). */
  src: string;
  /** Descriptive alt text. Use "" only for purely decorative images. */
  alt: string;
  /**
   * Focal point for `object-position`, e.g. "50% 35%". Lets editors keep the
   * subject (a peak, the ॐ face) in frame when the image is cropped.
   */
  focus?: string;
  /** True while the file is a generated placeholder — shown in the README manifest. */
  placeholder?: boolean;
  /** Photographer / licence credit, rendered in a caption where supported. */
  credit?: string;
}

/**
 * primary     — gold, the main action
 * secondary   — outlined blue, on light backgrounds
 * ghost       — text link with arrow, on light backgrounds
 * light       — outlined white, on dark/photo backgrounds
 * light-ghost — text link with arrow, on dark/photo backgrounds
 */
export type CtaVariant = "primary" | "secondary" | "ghost" | "light" | "light-ghost";

export interface Cta {
  label: string;
  href: string;
  variant?: CtaVariant;
  /** Extra context for screen readers when the visible label is generic. */
  ariaLabel?: string;
}

/* ------------------------------------------------------------------ */
/* Page structure                                                      */
/* ------------------------------------------------------------------ */

export type SectionId =
  | "overview"
  | "sacred-sites"
  | "adi-kailash"
  | "om-parvat"
  | "packages"
  | "route"
  | "culture"
  | "why-karvaahh"
  | "best-time"
  | "prepare"
  | "faq"
  | "final-cta";

export interface SectionToggle {
  id: SectionId;
  enabled: boolean;
  /** When set, the section appears in the sticky "On this page" navigation. */
  navLabel?: string;
}

export interface QuickFact {
  label: string;
  value: string;
  /** Marks a value that must be re-confirmed each season. */
  needsConfirmation?: boolean;
}

/* ------------------------------------------------------------------ */
/* Content collections                                                 */
/* ------------------------------------------------------------------ */

export type DestinationCategory =
  | "Sacred Peak"
  | "Sacred Lake"
  | "Sacred Waters"
  | "Viewpoint"
  | "Himalayan Village"
  | "Temple"
  | "High Valley";

export interface SacredDestination {
  id: string;
  name: string;
  /** One-line descriptor shown under the name. */
  tagline: string;
  /** Neutral, human-readable location label. */
  location: string;
  category: DestinationCategory;
  description: string;
  image: ImageAsset;
  /** Where "Explore Destination" goes. Defaults to an in-page anchor. */
  href: string;
  linkLabel?: string;
  enabled?: boolean;
}

export type PackagePrice =
  | { kind: "quote" }
  | {
      kind: "band";
      fromINR: number;
      toINR?: number;
      /** ISO date the band was last verified — displayed next to the price. */
      verifiedOn: string;
      basis?: string;
    };

export interface YatraPackage {
  id: string;
  title: string;
  category: string;
  /** Leave null until confirmed; the card then shows `durationFallback`. */
  duration: string | null;
  description: string;
  /** Short route outline — stop names only, no distances or timings. */
  routeOverview: string[];
  price: PackagePrice;
  image: ImageAsset;
  /**
   * Link to a real package detail page. When null the card's primary button
   * becomes an itinerary request, so there is never a dead "View Package" CTA.
   */
  detailHref: string | null;
  featured?: boolean;
  enabled?: boolean;
}

export interface MapPoint {
  lat: number;
  lng: number;
}

export interface RouteStage {
  id: string;
  name: string;
  /** Short context line, e.g. "Gateway to the high valleys". */
  role: string;
  description: string;
  image: ImageAsset;
  /** Null renders the configured "to be confirmed" copy. */
  travelMode: string | null;
  duration: string | null;
  highlights?: string[];
  /** Approximate location for the schematic map; null = not plotted. */
  mapPoint: MapPoint | null;
  /** Label placement on the schematic map. */
  labelSide?: "left" | "right" | "top" | "bottom";
  enabled?: boolean;
}

export interface RouteMapLandmark {
  id: string;
  name: string;
  point: MapPoint;
  kind: "peak" | "lake" | "site";
  labelSide?: "left" | "right" | "top" | "bottom";
}

export interface RouteMapConfig {
  /** Ordered stage ids the corridor line passes through (repeats allowed for spurs). */
  path: string[];
  landmarks: RouteMapLandmark[];
  /** Padding (in degrees) added around plotted points, per axis. Extra lng room keeps east-side labels inside the frame. */
  padding: { lat: number; lng: number };
  caption: string;
}

export interface ExperienceCard {
  id: string;
  title: string;
  description: string;
  image: ImageAsset;
  enabled?: boolean;
}

export interface Highlight {
  id: string;
  title: string;
  description: string;
}

export type IconName =
  | "compass"
  | "sliders"
  | "route"
  | "bed"
  | "vehicle"
  | "headset"
  | "document"
  | "backpack"
  | "mountain"
  | "shield"
  | "sun"
  | "snow"
  | "leaf"
  | "cloud"
  | "info"
  | "alert"
  | "arrow-right"
  | "arrow-down"
  | "chevron-down"
  | "om";

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: IconName;
  enabled?: boolean;
}

export type SeasonOutlook = "favourable" | "mixed" | "caution" | "closed";

export interface Season {
  id: string;
  name: string;
  months: string;
  icon: IconName;
  outlook: SeasonOutlook;
  outlookLabel: string;
  description: string;
  points: string[];
}

export interface TravelInfoItem {
  id: string;
  title: string;
  icon: IconName;
  summary: string;
  points: string[];
  /** Flags items that depend on current rules from authorities or the operator. */
  needsConfirmation: boolean;
  confirmWith?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  /**
   * Plain text (paragraphs separated by a blank line). The same string feeds
   * the visible answer and FAQPage JSON-LD, so they can never drift apart.
   */
  answer: string;
  /** Adds a "Subject to current verification" tag to the visible answer. */
  needsVerification?: boolean;
  enabled?: boolean;
}
