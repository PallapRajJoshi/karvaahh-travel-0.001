import type { MediaId } from "./data/media";

/** Interest options shared by the inquiry form and every "plan this" CTA. */
export type InterestId =
  | "festivals"
  | "heritage"
  | "music-dance"
  | "food"
  | "community"
  | "arts-crafts"
  | "spiritual"
  | "custom";

/** Payload for pre-filling the inquiry form from a card CTA. */
export interface InquiryPrefill {
  interest?: InterestId;
  /** Must match a `value` in data/inquiry.ts DESTINATION_OPTIONS. */
  destination?: string;
  /** Appended to "Additional requirements" (once). */
  message?: string;
  /** Short label announced to screen readers, e.g. "Dashain". */
  label?: string;
}

export interface Festival {
  id: string;
  name: string;
  media: MediaId;
  description: string;
  significance: string;
  experience: string;
  /** Broad seasonal window only. Never a specific date. */
  season: string;
  prefill: InquiryPrefill;
}

export interface HeritageDestination {
  id: string;
  name: string;
  media: MediaId;
  intro: string;
  sites: string[];
  experiences: string[];
  /** Optional real page. When absent the CTA opens the prefilled inquiry form. */
  href?: string;
  prefill: InquiryPrefill;
}

export interface CommunityGroup {
  name: string;
  region: string;
  line: string;
}

export interface Community {
  id: string;
  name: string;
  media: MediaId;
  region: string;
  intro: string;
  highlights: string[];
  /** For cards that cover more than one distinct community. */
  groups?: CommunityGroup[];
  href?: string;
  prefill: InquiryPrefill;
}

export interface Experience {
  id: string;
  title: string;
  media: MediaId;
  description: string;
  icon: IconName;
  href?: string;
  prefill: InquiryPrefill;
}

export interface Itinerary {
  id: string;
  title: string;
  duration: string;
  media: MediaId;
  overview: string;
  highlights: string[];
  prefill: InquiryPrefill;
}

export interface ValueProp {
  id: string;
  title: string;
  body: string;
  icon: IconName;
}

export interface GalleryItem {
  id: string;
  media: MediaId;
  caption: string;
  /** CSS aspect-ratio for masonry rhythm, e.g. "4 / 5". */
  ratio: string;
}

export interface Guideline {
  id: string;
  title: string;
  body: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export type IconName =
  | "temple"
  | "sliders"
  | "people"
  | "calendar"
  | "route"
  | "leaf"
  | "food"
  | "walk"
  | "craft"
  | "workshop"
  | "home"
  | "attire"
  | "monastery"
  | "camera";
