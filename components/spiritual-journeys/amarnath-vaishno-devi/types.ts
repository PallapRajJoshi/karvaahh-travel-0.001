/**
 * Amarnath & Vaishno Devi Yatra — content types.
 * `shrine` drives the page's two-shrine colour coding (always paired with a text label,
 * never colour alone): "amarnath" = glacier blue, "vaishno" = saffron, "kashmir" = neutral.
 */

export type ShrineKey = "amarnath" | "vaishno" | "kashmir";

export interface SiteImage {
  src: string;
  alt: string;
}

export interface Destination {
  id: string;
  name: string;
  location: string;
  /** Approximate elevation in metres — only where the brief supplies a verified figure. */
  elevationM?: number;
  shrine: ShrineKey;
  /** Short role label, e.g. "Shrine", "Pilgrimage base", "Optional extension". */
  role: string;
  image: SiteImage;
  significance: string;
  experience: string;
  highlights: string[];
  note?: string;
  optional?: boolean;
}

export interface PilgrimageRoute {
  id: "pahalgam" | "baltal";
  name: string;
  character: string;
  summary: string;
  points: string[];
  /** Traditional waypoints, in order. Names only — no distances or timings. */
  waypoints: string[];
}

export interface ComparisonRow {
  feature: string;
  a: string;
  b: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  shrine: ShrineKey;
  activities: string[];
  note?: string;
}

export interface ItineraryPlan {
  id: string;
  label: string;
  description: string;
  days: ItineraryDay[];
}

export interface FAQ {
  id: string;
  question: string;
  /** Plain text — reused verbatim in FAQPage JSON-LD so schema always matches the visible answer. */
  answer: string;
}

export interface TravelTip {
  icon: IconName;
  text: string;
}

export type PackageInclusion = string;
export type PackageExclusion = string;

export interface InfoCard {
  title: string;
  body: string;
  icon?: IconName;
  shrine?: ShrineKey;
}

export interface JourneyStop {
  name: string;
  body: string;
}

export interface TransportOption {
  name: string;
  icon: IconName;
  body: string;
  /** Which pilgrimage the option is relevant to. */
  appliesTo: string;
}

export interface RelatedJourney {
  title: string;
  href: string;
  region: string;
  image: SiteImage;
}

export type IconName =
  | "id"
  | "document"
  | "copy"
  | "layers"
  | "boot"
  | "rain"
  | "sun"
  | "pill"
  | "water"
  | "pace"
  | "compass"
  | "phone"
  | "bag"
  | "hands"
  | "leaf"
  | "walk"
  | "horse"
  | "palki"
  | "car"
  | "heli"
  | "family"
  | "diya"
  | "mountain"
  | "lotus"
  | "senior"
  | "shield";
