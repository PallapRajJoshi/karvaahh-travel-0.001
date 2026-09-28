/**
 * Types for the Tsum Valley Trek destination page.
 * Kept local to this destination so they cannot collide with any
 * existing `types/destination.ts` in the live project.
 */

export interface TsumImage {
  src: string;
  alt: string;
  /** Marks images that are still labelled placeholders awaiting real photography. */
  placeholder?: boolean;
}

export interface TsumLink {
  label: string;
  href: string;
}

export interface TsumTripFact {
  label: string;
  value: string;
  /** Shown as a small "approx." marker until the figure is verified with the operator. */
  approximate?: boolean;
}

export interface TsumHighlight {
  id: string;
  title: string;
  description: string;
  image: TsumImage;
  tag: string;
  href?: string;
}

export interface TsumExperience {
  id: string;
  kicker: string;
  title: string;
  body: string[];
  image: TsumImage;
}

export interface TsumItineraryDay {
  day: number;
  from: string;
  to: string;
  summary: string;
  details: string[];
  /** Leave undefined until verified with the operator — the UI hides empty fields. */
  walkingHours?: string;
  distanceKm?: string;
  /** Overnight elevation in metres. */
  elevationM?: number;
  mode: "arrival" | "drive" | "trek" | "explore" | "departure";
  thumbnail?: TsumImage;
}

export interface TsumNatureFeature {
  id: string;
  title: string;
  description: string;
  image: TsumImage;
  size: "wide" | "tall" | "standard";
}

export interface TsumVillage {
  id: string;
  name: string;
  stage: string;
  elevationM?: number;
  description: string;
  image: TsumImage;
}

export interface TsumSeason {
  id: "spring" | "autumn" | "winter" | "monsoon";
  name: string;
  months: string;
  verdict: string;
  rating: "recommended" | "good" | "challenging";
  points: string[];
}

export interface TsumPrepItem {
  title: string;
  body: string;
  icon: "fitness" | "days" | "altitude" | "boots" | "rain" | "water" | "firstaid" | "insurance" | "signal" | "respect";
}

export interface TsumInfoCard {
  id: string;
  title: string;
  body: string;
  items?: string[];
  icon: "permit" | "guide" | "road" | "bed" | "signal" | "sos" | "wallet";
}

export interface TsumPackage {
  id: string;
  title: string;
  duration: string;
  difficulty: string;
  route: string;
  accommodation: string;
  inclusions: string[];
  exclusions: string[];
  /** Only render when a verified price exists. */
  price?: { amount: number; currency: "INR" | "USD"; basis: string; verifiedOn: string };
  detailsHref?: string;
}

export interface TsumFaq {
  question: string;
  answer: string;
}

export interface TsumRelatedLink extends TsumLink {
  description: string;
  kicker: string;
}
