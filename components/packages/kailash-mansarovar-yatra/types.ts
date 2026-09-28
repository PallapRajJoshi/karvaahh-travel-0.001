/**
 * Kailash Mansarovar Yatra — shared types.
 *
 * Every piece of copy on the page lives in `./data/*` and is typed here, so
 * content can be edited without touching component logic.
 *
 * Fields ending in `Verify` / typed as `VerifiableText` mark facts that
 * change with permits, weather and operator schedules. Keep them honest:
 * the UI renders them with a "confirm before booking" treatment.
 */

/* ------------------------------------------------------------------ */
/* Primitives                                                          */
/* ------------------------------------------------------------------ */

export interface ImageAsset {
  /** Path under /public, e.g. "/images/destinations/kailash-mansarovar/hero/mount-kailash-south-face.jpg" */
  src: string;
  /** Descriptive alt text. Describe what is actually in the photo. */
  alt: string;
  /** Optional object-position for art-directed crops, e.g. "50% 30%". */
  position?: string;
}

export interface CtaLink {
  label: string;
  href: string;
  /** Visual weight. */
  variant: "primary" | "secondary" | "ghost";
  /** Open in a new tab (external links only). */
  external?: boolean;
}

/**
 * A figure that is widely published but must be re-checked each season
 * (distances, elevations, durations). `null` renders "To be confirmed".
 */
export type IndicativeValue = string | null;

/* ------------------------------------------------------------------ */
/* Sections                                                            */
/* ------------------------------------------------------------------ */

export type SectionId =
  | "hero"
  | "breadcrumb"
  | "section-nav"
  | "overview"
  | "sacred-sites"
  | "parikrama"
  | "mansarovar"
  | "packages"
  | "routes"
  | "significance"
  | "why-karvaahh"
  | "seasons"
  | "preparation"
  | "faq"
  | "final-cta"
  | "related";

export interface SectionConfig {
  id: SectionId;
  enabled: boolean;
  /** Label shown in the sticky in-page nav. Omit to keep a section out of the nav. */
  navLabel?: string;
}

export interface HeroContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  supporting: string;
  image: ImageAsset;
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
  /** Short facts under the CTAs. Keep to 3–4. */
  facts: { label: string; value: string }[];
}

export interface OverviewContent {
  eyebrow: string;
  heading: string;
  body: string;
  highlights: string[];
  primaryImage: ImageAsset;
  secondaryImage: ImageAsset;
  cta: CtaLink;
}

/* ------------------------------------------------------------------ */
/* Sacred destinations                                                 */
/* ------------------------------------------------------------------ */

export type DestinationCategory =
  | "Sacred Mountain"
  | "Sacred Lake"
  | "Pilgrim Base"
  | "Kora Landmark"
  | "Monastery"
  | "High Pass";

export interface SacredDestination {
  id: string;
  name: string;
  tagline: string;
  location: string;
  category: DestinationCategory;
  description: string;
  image: ImageAsset;
  /**
   * Where "Explore" leads. Defaults to an in-page anchor until dedicated
   * destination pages exist — never a dead link.
   */
  href: string;
  linkLabel?: string;
}

/* ------------------------------------------------------------------ */
/* Parikrama                                                           */
/* ------------------------------------------------------------------ */

export interface ParikramaStage {
  id: string;
  day: number;
  title: string;
  from: string;
  to: string;
  summary: string;
  highlights: string[];
  image: ImageAsset;
  /** e.g. "≈ 12–20 km". Verify each season. */
  distance: IndicativeValue;
  /** Highest point reached on the day, e.g. "≈ 5,630 m (Dolma La)". */
  maxElevation: IndicativeValue;
  /** Overnight elevation. */
  overnightElevation: IndicativeValue;
  /** Typical walking time. */
  walkingTime: IndicativeValue;
  difficulty: "Moderate" | "Strenuous" | "Very strenuous";
  /** Stage-specific caution shown in amber. */
  caution?: string;
  /** Which schematic map waypoints this stage spans (ids from parikramaMap.waypoints). */
  mapSegment: [string, string, ...string[]];
}

export interface MapWaypoint {
  id: string;
  label: string;
  /** Position on the 0–100 schematic canvas. */
  x: number;
  y: number;
  kind: "base" | "gate" | "monastery" | "pass" | "lake";
}

export interface ParikramaContent {
  eyebrow: string;
  heading: string;
  subtitle: string;
  totalDistance: IndicativeValue;
  highestPoint: IndicativeValue;
  direction: string;
  figuresNote: string;
  safetyNote: string;
  stages: ParikramaStage[];
  map: {
    caption: string;
    summit: { x: number; y: number; label: string };
    waypoints: MapWaypoint[];
  };
}

/* ------------------------------------------------------------------ */
/* Mansarovar                                                          */
/* ------------------------------------------------------------------ */

export interface MansarovarContent {
  eyebrow: string;
  heading: string;
  lead: string;
  image: ImageAsset;
  insetImage: ImageAsset;
  moments: { title: string; body: string; icon: IconName }[];
  ritualNote: string;
}

/* ------------------------------------------------------------------ */
/* Packages & routes                                                   */
/* ------------------------------------------------------------------ */

export type TravelMode = "Overland" | "Helicopter-assisted" | "Private / flexible" | "Group departure";

export interface PackagePrice {
  /** Price per person in INR. */
  fromInr: number;
  /** ISO date the figure was last checked, e.g. "2026-09-01". Required when a price is shown. */
  verifiedOn: string;
  basis: string;
}

export interface YatraPackage {
  id: string;
  title: string;
  mode: TravelMode;
  image: ImageAsset;
  /** e.g. "Typically 12–15 days". `null` → "Duration shared with itinerary". */
  duration: IndicativeValue;
  description: string;
  routeOverview: string[];
  bestFor: string;
  /** `null` → "Request a Quote". Only set a price you can honour. */
  price: PackagePrice | null;
  /** Dedicated package page. `null` hides "View Package" instead of linking nowhere. */
  detailHref: string | null;
  enquiryHref: string;
  /** Short caveat shown on the card. */
  note?: string;
  featured?: boolean;
}

export interface TravelRoute {
  id: string;
  title: string;
  mode: TravelMode;
  overview: string;
  transitPoints: string[];
  duration: IndicativeValue;
  image: ImageAsset;
  /** Operational caveat. Never present a route as guaranteed. */
  availability: string;
  href: string;
}

/* ------------------------------------------------------------------ */
/* Significance, features, seasons                                     */
/* ------------------------------------------------------------------ */

export interface Tradition {
  id: string;
  name: string;
  kailashName: string;
  kailash: string;
  mansarovar: string;
  kora: string;
}

export interface SignificanceContent {
  eyebrow: string;
  heading: string;
  intro: string;
  traditions: Tradition[];
  shared: { title: string; body: string }[];
  respectNote: string;
}

export type IconName =
  | "compass"
  | "route"
  | "helicopter"
  | "bed"
  | "people"
  | "support"
  | "document"
  | "shield"
  | "sun"
  | "moon"
  | "lotus"
  | "mountain"
  | "snow"
  | "leaf"
  | "flame"
  | "alert"
  | "check"
  | "arrow-right"
  | "arrow-down"
  | "chevron"
  | "pin"
  | "clock"
  | "trend-up"
  | "water";

export interface Feature {
  id: string;
  title: string;
  body: string;
  icon: IconName;
  /** Only switch on services Karvaahh actually delivers. */
  enabled: boolean;
}

export type SeasonStatus = "Season opening" | "Main season" | "Season closing" | "Generally closed";

export interface Season {
  id: string;
  name: string;
  months: string;
  status: SeasonStatus;
  icon: IconName;
  summary: string;
  points: string[];
}

/* ------------------------------------------------------------------ */
/* Accordions                                                          */
/* ------------------------------------------------------------------ */

export interface AccordionEntry {
  id: string;
  title: string;
  /** Paragraphs. */
  body: string[];
  /** Optional bullet list rendered after the paragraphs. */
  list?: string[];
  /** Marks content that must be re-confirmed with authorities / operator. */
  requiresConfirmation?: boolean;
  icon?: IconName;
}

export interface FaqEntry {
  id: string;
  question: string;
  /** Plain text — also used verbatim in FAQPage JSON-LD. */
  answer: string;
  requiresConfirmation?: boolean;
}

export interface RelatedLink {
  title: string;
  href: string;
  blurb: string;
}
