/**
 * Shared types for the Road & Trail Adventure page.
 * All page copy lives in the sibling data files so editors never touch JSX.
 */

/** A photo slot. `file` is a filename inside IMAGE_BASE (see photos.ts). */
export interface ImageSpec {
  /** Filename only, e.g. "hero-himalayan-highway.jpg" */
  file: string;
  /** Descriptive alt text. Must describe the real photo that replaces the slot. */
  alt: string;
  /** Editor-facing note: what the photo must actually show. Shown in dev only. */
  label: string;
}

/** Values pre-filled into the inquiry form by a CTA. */
export interface InquiryPrefill {
  destination?: string;
  adventureType?: string;
}

export interface CtaSpec {
  label: string;
  /** In-page anchor (e.g. "#off-road"). Inquiry CTAs use INQUIRY_ANCHOR. */
  href: string;
  prefill?: InquiryPrefill;
}

export interface AdventureCategory {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  image: ImageSpec;
  cta: CtaSpec;
}

export type AccessMode = "Road journey" | "Road + walking" | "Trekking-led";

export interface RouteDestination {
  id: string;
  name: string;
  intro: string;
  highlights: string[];
  adventureTypes: string[];
  /** How the place is mainly explored. Keeps trekking and road access distinct. */
  access: AccessMode;
  /** Optional caution shown on the card. */
  note?: string;
  image: ImageSpec;
}

export interface RoadTrip {
  id: string;
  title: string;
  from: string;
  to: string;
  duration: string;
  intro: string;
  highlights: string[];
  travelStyle: string;
  image: ImageSpec;
}

export interface TrailGroup {
  id: string;
  region: string;
  intro: string;
  trails: string[];
  image: ImageSpec;
}

export interface RideExperience {
  id: string;
  title: string;
  intro: string;
  highlights: string[];
  image: ImageSpec;
  ctaLabel: string;
  prefill: InquiryPrefill;
}

export interface InfoBlock {
  title: string;
  body: string;
}

export interface TravelStyle {
  id: string;
  title: string;
  description: string;
  icon: IconName;
  cta: CtaSpec;
  image: ImageSpec;
}

export interface Itinerary {
  id: string;
  title: string;
  duration: string;
  adventureType: string;
  highlights: string[];
  image: ImageSpec;
  prefill: InquiryPrefill;
}

export interface PrepItem {
  id: string;
  title: string;
  body: string;
  icon: IconName;
}

export interface ValueProp {
  title: string;
  body: string;
  icon: IconName;
}

export interface GalleryItem {
  id: string;
  caption: string;
  shape: "tall" | "wide" | "square";
  image: ImageSpec;
}

export interface ResponsibleItem {
  text: string;
  icon: IconName;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export type IconName =
  | "road"
  | "jeep"
  | "motorcycle"
  | "trek"
  | "bike"
  | "compass"
  | "mountain"
  | "arrow"
  | "chevron"
  | "check"
  | "alert"
  | "close"
  | "calendar"
  | "users"
  | "shield"
  | "backpack"
  | "sun"
  | "water"
  | "doc"
  | "pill"
  | "map"
  | "heart"
  | "route"
  | "culture"
  | "support"
  | "leaf"
  | "layers"
  | "footwear"
  | "altitude"
  | "family"
  | "paw"
  | "trash"
  | "store"
  | "prev"
  | "next"
  | "copy"
  | "mail"
  | "chat";
