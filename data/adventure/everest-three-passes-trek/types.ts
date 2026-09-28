/**
 * Types for the Everest Three Passes Trek page.
 * Kept next to the data (not in a global types/destination.ts) so this page
 * cannot collide with types other destination pages already define.
 */

/** An image slot. `ready: false` renders a branded placeholder instead of a broken path. */
export interface EtpImage {
  /** Filename inside IMAGE_BASE + folder, e.g. "kongma-la-pass-nepal.webp" */
  file: string;
  /** Sub-folder under /images/destinations/everest-three-passes/ */
  folder: "hero" | "passes" | "highlights" | "culture" | "gallery";
  alt: string;
  /** Flip to true once the real photograph is in /public. */
  ready?: boolean;
  /** Optional CSS object-position for art direction, e.g. "50% 30%". */
  focus?: string;
}

export interface EtpLink {
  label: string;
  href: string;
}

export interface MountainPass {
  id: string;
  name: string;
  elevationM: number;
  /** One line shown on the card face. */
  tagline: string;
  description: string;
  /** Which two places the pass connects, in trekking order. */
  connects: [string, string];
  image: EtpImage;
}

export interface Highlight {
  id: string;
  title: string;
  description: string;
  image: EtpImage;
  /** Optional internal link, only set when the target page exists. */
  href?: string;
}

export interface Experience {
  id: string;
  kicker: string;
  title: string;
  body: string;
  points: string[];
  image: EtpImage;
}

export type DayKind = "arrival" | "flight" | "trek" | "acclimatisation" | "pass" | "summit";

export interface ItineraryDay {
  day: number;
  from: string;
  to: string;
  title: string;
  kind: DayKind;
  summary: string;
  details: string[];
  /** Approximate overnight elevation in metres. See ELEVATIONS_VERIFIED. */
  overnightM?: number;
  /** Approximate high point of the day in metres, when notably above overnight. */
  highPointM?: number;
  highPointName?: string;
  /** Leave undefined until verified by the operations team. */
  walkingHours?: string;
  distanceKm?: string;
}

export interface ProfilePoint {
  name: string;
  elevationM: number;
  kind: "village" | "pass" | "viewpoint" | "camp";
}

export interface Peak {
  id: string;
  name: string;
  elevationM: number;
  rank?: string;
  description: string;
  image: EtpImage;
}

export interface CultureItem {
  id: string;
  title: string;
  body: string;
  image?: EtpImage;
}

export interface Season {
  id: string;
  name: string;
  months: string;
  verdict: "Popular" | "Good" | "Challenging" | "Not recommended";
  body: string;
  watchFor: string[];
}

export interface InfoCard {
  id: string;
  title: string;
  body: string;
  /** Flags content that changes and must be re-checked before each season. */
  verifyBeforeTravel?: boolean;
  icon: IconName;
}

export type IconName =
  | "permit"
  | "park"
  | "guide"
  | "plane"
  | "road"
  | "house"
  | "signal"
  | "shield"
  | "cash"
  | "boot"
  | "lungs"
  | "layers"
  | "water"
  | "snow"
  | "radio"
  | "mountain"
  | "clock"
  | "gauge"
  | "arrow"
  | "chevron"
  | "close"
  | "phone";

export interface TrekPackage {
  id: string;
  title: string;
  durationDays: number;
  difficulty: string;
  routeSummary: string;
  accommodation: string;
  inclusions: string[];
  exclusions: string[];
  /** Only set when a verified, dated price exists. Rendered with Intl en-IN. */
  price?: { amount: number; currency: "INR" | "USD" | "NPR"; basis: string; verifiedOn: string };
  detailsHref?: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface Stat {
  label: string;
  value: string;
  note?: string;
}
