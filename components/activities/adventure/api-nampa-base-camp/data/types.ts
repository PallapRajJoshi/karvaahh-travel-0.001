/**
 * Api Nampa Base Camp Trek — content types.
 *
 * Every field that depends on real-world conditions (elevation, walking time,
 * permits, prices) is optional and carries a `verified` flag so editors can
 * publish a framework now and tighten it once facts are confirmed on the ground.
 */

export type ImageAsset = {
  src: string;
  alt: string;
  /** True while the file in /public is a generated placeholder. Flip to false once replaced. */
  placeholder?: boolean;
};

export type LinkTarget = {
  label: string;
  href: string;
};

export type HeroBadge = {
  label: string;
  value: string;
  /** Short qualifier rendered under the value, e.g. "sample itinerary". */
  note?: string;
};

export type QuickFact = {
  label: string;
  value: string;
  note?: string;
};

export type Advisory = {
  active: boolean;
  title: string;
  body: string;
  /** ISO date the advisory text was last reviewed. */
  reviewed: string;
};

export type Highlight = {
  id: string;
  title: string;
  description: string;
  image: ImageAsset;
  href?: string;
};

export type Experience = {
  id: string;
  kicker: string;
  title: string;
  description: string;
  points: string[];
  image: ImageAsset;
};

export type ItineraryPhase = "approach" | "trek-in" | "base-camp" | "return";

export type ItineraryDay = {
  day: number;
  phase: ItineraryPhase;
  from: string;
  to: string;
  summary: string;
  details: string[];
  /** Only render when verified — never estimate. */
  walkingHours?: string;
  distance?: string;
  elevation?: string;
  verified: boolean;
  image?: ImageAsset;
};

export type Peak = {
  id: string;
  name: string;
  /** Leave undefined until a reliable source is confirmed. */
  elevation?: string;
  elevationVerified: boolean;
  range: string;
  description: string;
  /** Where on the route the peak is usually seen — never "everywhere". */
  visibility: string;
  image: ImageAsset;
};

export type InfoPoint = {
  id: string;
  title: string;
  body: string;
};

export type Season = {
  id: "spring" | "autumn" | "winter" | "monsoon";
  name: string;
  months: string;
  verdict: string;
  tone: "good" | "caution" | "avoid";
  body: string;
  points: string[];
};

export type PrepItem = {
  id: string;
  title: string;
  body: string;
  group: "body" | "gear" | "safety" | "support";
};

export type TravelInfoCard = {
  id: string;
  title: string;
  body: string;
  /** Items that change often (permits, fees) — rendered with a "confirm before departure" tag. */
  changesOften?: boolean;
  items?: string[];
};

export type StayType = {
  id: string;
  title: string;
  body: string;
  image: ImageAsset;
};

export type TrekPackage = {
  id: string;
  title: string;
  duration: string;
  difficulty: string;
  routeSummary: string;
  accommodation: string;
  inclusions: string[];
  exclusions: string[];
  /** Omit entirely unless a verified, dated price exists. */
  price?: { amount: number; currency: "INR" | "NPR" | "USD"; basis: string; verifiedOn: string };
  detailsHref?: string;
};

export type GalleryImage = ImageAsset & {
  caption: string;
  /** Layout hint for the editorial grid. */
  shape?: "wide" | "tall" | "square";
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type RelatedLink = LinkTarget & {
  description: string;
};
