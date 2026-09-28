/**
 * Char Dham Yatra Uttarakhand — content types.
 * All page copy lives in charDhamData.ts; components only render.
 */

export type DhamSlug = "yamunotri" | "gangotri" | "kedarnath" | "badrinath";

/**
 * Image config. `available: false` renders a designed placeholder instead of a
 * broken <img>. Flip to `true` once the file exists in /public.
 */
export interface ImageAsset {
  src: string;
  alt: string;
  available: boolean;
  /** Optional crop focus for object-position, e.g. "50% 30%". */
  focus?: string;
  caption?: string;
  /** Gallery only: span two columns on desktop. Keep wide count so rows close evenly. */
  wide?: boolean;
}

export interface ChapterLink {
  id: string;
  label: string;
  /** Anchor of the first section in the chapter. */
  href: `#${string}`;
}

export interface Dham {
  slug: DhamSlug;
  order: 1 | 2 | 3 | 4;
  /** Devanagari numeral used as the sequence mark. */
  numeral: string;
  name: string;
  deity: string;
  district: string;
  river: string;
  quickLine: string;
  heading: string;
  lead: string;
  paragraphs: string[];
  highlights: { title: string; text: string }[];
  accessNote: string;
  comparison: { tradition: string; region: string; experience: string };
  image: ImageAsset;
  secondaryImage: ImageAsset;
}

export type RouteStopKind = "gateway" | "base" | "dham" | "return";

export interface RouteStop {
  name: string;
  kind: RouteStopKind;
  dham?: DhamSlug;
}

export interface Destination {
  name: string;
  role: string;
  text: string;
}

export interface TimelineStage {
  stage: number;
  title: string;
  text: string;
  dham?: DhamSlug;
}

export interface Money {
  amount: number;
  currency: "INR";
}

/**
 * Commercial package config. Every commercial field is nullable/empty on
 * purpose — the UI hides or softens anything not supplied. Never fill these
 * with estimates.
 */
export interface PackageConfig {
  name: string;
  duration: string;
  departure: string;
  returnDate: string;
  /** Exact price per person. Leave null unless confirmed. */
  price: Money | null;
  /** Optional indicative "from" band. Only with a verified date. */
  priceFrom: Money | null;
  priceBasis: string;
  priceVerifiedOn: string;
  startPoint: string;
  endPoint: string;
  vehicle: string;
  mealPlan: string;
  accommodation: string;
  customNote: string;
}

export interface ListGroup {
  id: string;
  title: string;
  items: string[];
}

export interface OptionCard {
  title: string;
  text: string;
  conditions?: string[];
}

export interface Season {
  id: string;
  label: string;
  window: string;
  summary: string;
  points: string[];
  tone: "good" | "caution" | "closed";
}

export interface Faq {
  q: string;
  a: string;
}

export interface CtaLink {
  label: string;
  href: string;
  variant: "primary" | "secondary" | "ghost";
}

export interface RelatedLink {
  label: string;
  href: string;
  /** Only rendered when true — set after confirming the route exists. */
  enabled: boolean;
}
