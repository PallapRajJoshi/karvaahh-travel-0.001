/**
 * types/trek-destination.ts
 * Shared data model for trek destination pages (e.g. Langtang Valley Trek).
 *
 * Image fields hold a key from the page's image registry, not a path.
 * Icon fields hold a key from the page's inline icon set.
 */

export interface Link {
  label: string;
  href: string;
}

export interface TrekImage {
  src: string;
  alt: string;
  /** Art-direction brief for the photographer / replacement image. */
  brief?: string;
  width: number;
  height: number;
  /** True while the file is a generated placeholder, not real photography. */
  placeholder?: boolean;
}

/** A fact that may go stale. `checked` is the YYYY-MM it was last cross-checked. */
export interface Fact {
  value: string;
  qualifier?: string;
  checked?: string;
}

export interface HeroBadge {
  label: string;
  fact: Fact;
}

export interface Highlight {
  title: string;
  text: string;
  image: string;
  meta?: string;
}

export interface Experience {
  title: string;
  text: string;
  points: string[];
  image: string;
}

export type ItineraryMode = "arrival" | "drive" | "trek" | "explore";

export interface ItineraryDay {
  day: number;
  title: string;
  from: string;
  to: string;
  mode: ItineraryMode;
  /** Approximate overnight elevation in metres. */
  sleepElevationM?: number;
  /** Highest point reached that day, when it differs from the overnight stop. */
  highPointM?: number;
  /** Typical walking / driving time, e.g. "5–6 hr". */
  walking?: string;
  text: string;
  image?: string;
}

export interface CultureItem {
  title: string;
  text: string;
}

export interface LandscapeZone {
  /** Altitude band label, e.g. "≈ 1,500–2,500 m". */
  band: string;
  title: string;
  text: string;
  image: string;
}

export type SeasonTone = "recommended" | "good" | "caution";

export interface Season {
  name: string;
  months: string;
  tone: SeasonTone;
  summary: string;
  points: string[];
}

export interface PrepItem {
  icon: string;
  title: string;
  text: string;
}

export interface InfoCard {
  icon: string;
  title: string;
  text: string;
  /** Rules or fees that change — UI flags them "Check latest". */
  confirm?: boolean;
  points?: string[];
}

export interface PermitFee {
  permit: string;
  foreign: string;
  saarc: string;
  nepali: string;
}

export interface TrekPackage {
  id: string;
  title: string;
  duration: string;
  difficulty: string;
  route: string;
  accommodation: string;
  includes: string[];
  excludes: string[];
  /** Null until a verified price exists — the UI then shows an enquiry CTA. */
  price: string | null;
  priceNote?: string;
  /** Null until a dedicated package page exists. */
  detailsHref: string | null;
  featured?: boolean;
}

export type GallerySize = "regular" | "wide" | "tall";

export interface GalleryItem {
  image: string;
  caption: string;
  size?: GallerySize;
}

export interface FaqItem {
  q: string;
  a: string;
}
