/**
 * Everest Base Camp Trek — shared TypeScript contracts.
 * Every data file in ./data conforms to one of these interfaces, so content
 * can be edited without touching component logic.
 */

/** A single image reference. `src` is relative to /public. */
export interface EbcImage {
  src: string;
  alt: string;
  /** Optional CSS object-position for art direction, e.g. "50% 30%". */
  position?: string;
}

export interface CtaLink {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
}

/* ------------------------------------------------------------------ */
/* Destinations                                                        */
/* ------------------------------------------------------------------ */

export type DestinationCategory =
  | "Mountain Village"
  | "Cultural Heritage"
  | "Trekking Landmark"
  | "Viewpoint"
  | "Natural Wonder";

export interface EverestDestination {
  slug: string;
  name: string;
  tagline: string;
  location: string;
  /** Approximate elevation in metres. Kept as a number so it can be formatted consistently. */
  elevationM?: number;
  description: string;
  category: DestinationCategory;
  image: EbcImage;
  /** Leave undefined until a dedicated destination page exists — the card then renders without a dead link. */
  href?: string;
}

/* ------------------------------------------------------------------ */
/* Experiences / culture                                               */
/* ------------------------------------------------------------------ */

export interface ExperienceItem {
  id: string;
  title: string;
  description: string;
  image: EbcImage;
}

export interface CultureItem extends ExperienceItem {
  /** Short eyebrow label shown above the title. */
  label: string;
}

/* ------------------------------------------------------------------ */
/* Packages                                                            */
/* ------------------------------------------------------------------ */

/** Distinguishes the operating model — the UI styles each one differently. */
export type PackageMode = "standard" | "helicopter" | "luxury" | "private" | "custom";

export interface TrekPackage {
  slug: string;
  title: string;
  mode: PackageMode;
  /** Human-readable category, e.g. "Classic Teahouse Trek". */
  category: string;
  /** e.g. "Duration to be confirmed" or "14 days" once verified. */
  duration: string;
  difficulty: string;
  maxAltitude: string;
  description: string;
  route: string[];
  /**
   * Price display. Leave `amount` undefined to show "Request a Quote".
   * When a verified price is added, also set `verifiedOn` (ISO date).
   */
  price?: { amount?: number; currency: "INR" | "USD"; basis: string; verifiedOn?: string };
  /** A short, honest note that differentiates the operating model (e.g. weather dependency for helicopters). */
  modeNote?: string;
  image: EbcImage;
  href?: string;
  featured?: boolean;
}

/* ------------------------------------------------------------------ */
/* Itinerary                                                           */
/* ------------------------------------------------------------------ */

export type StageKind = "arrival" | "flight" | "trek" | "acclimatization" | "summit" | "return";

export interface ItineraryStage {
  id: string;
  /** "Day 1", "Days 11–13" etc. A string so ranges are possible. */
  day: string;
  title: string;
  kind: StageKind;
  description: string;
  image: EbcImage;
  /** All numeric trek facts are strings so they can hold "To be confirmed" placeholders. */
  distance: string;
  duration: string;
  startElevation: string;
  endElevation: string;
  accommodation: string;
  note?: string;
}

/* ------------------------------------------------------------------ */
/* Seasons, preparation, FAQs, features                                */
/* ------------------------------------------------------------------ */

export type SeasonRating = "recommended" | "good" | "challenging";

export interface Season {
  id: string;
  name: string;
  months: string;
  rating: SeasonRating;
  ratingLabel: string;
  summary: string;
  points: string[];
}

export interface AccordionEntry {
  id: string;
  title: string;
  /** Paragraphs of plain text. Kept plain so the same content can feed JSON-LD. */
  body: string[];
  /** Optional flag to surface "verify before travel" styling. */
  verify?: boolean;
}

export type FeatureIcon =
  | "compass"
  | "sliders"
  | "bed"
  | "plane"
  | "backpack"
  | "prayer-flags"
  | "headset"
  | "heart-pulse";

export interface Feature {
  id: string;
  icon: FeatureIcon;
  title: string;
  description: string;
  /** Set false to hide a claim Karvaahh cannot currently deliver. */
  enabled: boolean;
}

export interface GalleryItem extends EbcImage {
  id: string;
  caption: string;
  /** Layout hint for the masonry grid. */
  size?: "tall" | "wide" | "regular";
}

export interface QuickFact {
  label: string;
  value: string;
}

/* ------------------------------------------------------------------ */
/* Section registry                                                    */
/* ------------------------------------------------------------------ */

export type SectionId =
  | "hero"
  | "breadcrumb"
  | "subnav"
  | "overview"
  | "destinations"
  | "experience"
  | "culture"
  | "packages"
  | "itinerary"
  | "basecamp"
  | "gallery"
  | "why"
  | "seasons"
  | "preparation"
  | "faq"
  | "final-cta";
