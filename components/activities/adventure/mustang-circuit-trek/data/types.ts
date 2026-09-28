/**
 * Mustang Circuit Trek — shared types.
 * Every section reads from typed data so content can change without touching components.
 */

export interface ImageAsset {
  /** Path under /public, e.g. /images/destinations/mustang-circuit/hero/... */
  src: string;
  /** Descriptive alt text. Describe what is actually in the photo. */
  alt: string;
  /** Optional CSS object-position for art-direction, e.g. "50% 30%". */
  focal?: string;
}

export interface CtaLink {
  label: string;
  href: string;
  /** Visual weight. */
  variant: "primary" | "secondary" | "ghost";
}

/** Which part of Mustang a place / rule belongs to. */
export type MustangZone = "lower" | "upper" | "both";

export type DestinationCategory =
  | "Cultural Heritage"
  | "Sacred Site"
  | "Mountain Village"
  | "Natural Landscape"
  | "Monastic Heritage";

export interface Destination {
  id: string;
  name: string;
  tagline: string;
  location: string;
  zone: Exclude<MustangZone, "both">;
  category: DestinationCategory;
  description: string;
  image: ImageAsset;
  /**
   * Dedicated destination page. Leave undefined until the page exists —
   * the card then links to the matching stage in the route section instead
   * of pointing at a dead URL.
   */
  href?: string;
  /** Route stage id this place appears in (used when href is undefined). */
  routeStageId?: string;
}

export interface Highlight {
  id: string;
  title: string;
  text: string;
}

export interface CultureItem {
  id: string;
  title: string;
  text: string;
  image: ImageAsset;
}

/** Trek = on foot; road = jeep/vehicle sightseeing; mixed = both. */
export type TravelStyle = "trek" | "road" | "mixed" | "custom";

export interface TrekPackage {
  id: string;
  title: string;
  style: TravelStyle;
  /** Shown as the category line, e.g. "Trekking itinerary". */
  category: string;
  description: string;
  /** Ordered list of key places, rendered as a route strip. */
  route: string[];
  image: ImageAsset;
  /** e.g. "12 days". null → "Duration on request". Do not guess. */
  duration: string | null;
  /** e.g. "Moderate". null → "Grade on request". Do not guess. */
  difficulty: string | null;
  /**
   * Verified indicative price text (e.g. "From ₹1,25,000 per person").
   * null → "Request a quote". Only fill once confirmed.
   */
  price: string | null;
  /** Date the price was verified, ISO string. Required when price is set. */
  priceVerifiedOn?: string;
  /** Package detail page. undefined → "View package" opens an enquiry instead. */
  href?: string;
}

export interface ItineraryStage {
  id: string;
  /** e.g. "Stage 1" or "Day 3". */
  label: string;
  place: string;
  zone: Exclude<MustangZone, "both">;
  summary: string;
  image: ImageAsset;
  /** Placeholders — null renders "Confirmed at planning". */
  travelMode: string | null;
  distance: string | null;
  duration: string | null;
  accommodation: string | null;
}

export interface GalleryImage extends ImageAsset {
  id: string;
  caption: string;
  /** Wider tiles in the carousel. */
  wide?: boolean;
}

export type FeatureIcon =
  | "compass"
  | "sliders"
  | "jeep"
  | "bed"
  | "people"
  | "support"
  | "document"
  | "backpack";

export interface Feature {
  id: string;
  title: string;
  text: string;
  icon: FeatureIcon;
  /**
   * Only enable features Karvaahh can actually deliver today.
   * Disabled features are not rendered.
   */
  enabled: boolean;
}

export interface Season {
  id: string;
  name: string;
  months: string;
  summary: string;
  lower: string;
  upper: string;
  /** Short verdict chip, e.g. "Popular", "Plan carefully". */
  verdict: string;
  tone: "good" | "mixed" | "caution";
}

export interface PrepItem {
  id: string;
  title: string;
  appliesTo: MustangZone;
  /** General paragraphs. */
  body: string[];
  /** Optional side-by-side notes when Lower and Upper differ. */
  lowerNote?: string;
  upperNote?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  /** Plain-text paragraphs — also used for FAQPage JSON-LD, so keep them plain. */
  answer: string[];
}

export interface RelatedLink {
  label: string;
  href: string;
  note: string;
}

/** Section ids — order in config.sections controls page order. */
export type SectionId =
  | "hero"
  | "breadcrumb"
  | "sectionNav"
  | "overview"
  | "destinations"
  | "experience"
  | "culture"
  | "packages"
  | "route"
  | "gallery"
  | "why"
  | "seasons"
  | "preparation"
  | "faq"
  | "related"
  | "finalCta";
