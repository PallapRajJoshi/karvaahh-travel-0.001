import type { ImageKey } from "./images";

export type IconName =
  | "binoculars"
  | "bird"
  | "camera"
  | "leaf"
  | "canoe"
  | "mountain"
  | "lake"
  | "paw"
  | "tree"
  | "shield"
  | "compass"
  | "users"
  | "map"
  | "heart"
  | "clipboard"
  | "sun"
  | "check"
  | "chevron-down"
  | "chevron-left"
  | "chevron-right"
  | "arrow-right"
  | "close"
  | "suitcase"
  | "sparkle"
  | "eye"
  | "info"
  | "pin"
  | "book";

/** Values a card / selector can push into the inquiry form. Values must match form.ts option values. */
export interface PrefillPayload {
  destination?: string;
  experience?: string;
  purpose?: string;
  interests?: string;
}

export interface Experience {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  image: ImageKey;
  icon: IconName;
}

export interface Destination {
  /** Matches DESTINATION_OPTIONS value in form.ts */
  id: string;
  name: string;
  region: string;
  heading: string;
  description: string;
  features: string[];
  experiences: string[];
  idealFor: string;
  image: ImageKey;
  href: string;
  /** "feature" = large editorial card, "compact" = small card */
  size: "feature" | "compact";
  comparison: {
    ecosystem: string;
    highlights: string;
    signature: string;
    idealTraveler: string;
    travelStyle: string;
  };
}

export interface WildlifeEncounter {
  id: string;
  name: string;
  description: string;
  habitat: string;
  image: ImageKey;
}

export interface NatureActivity {
  id: string;
  title: string;
  description: string;
  icon: IconName;
  experience: string;
}

export interface TravelStyle {
  id: string;
  title: string;
  icon: IconName;
  description: string;
  destinations: string[];
  activities: string[];
  prefill: PrefillPayload;
}

export interface TravelerType {
  id: string;
  title: string;
  heading: string;
  description: string;
  image: ImageKey;
  cta: string;
  prefill: PrefillPayload;
}

export interface ItineraryDay {
  day: string;
  title: string;
  items: string[];
}

export interface SampleItinerary {
  id: string;
  title: string;
  duration: string;
  destination: string;
  summary: string;
  days: ItineraryDay[];
}

export interface TitledBlock {
  title: string;
  body: string;
  icon: IconName;
}

export interface ProcessStep {
  step: number;
  title: string;
  body: string;
}

export interface GalleryItem {
  id: string;
  image: ImageKey;
  caption: string;
  layout: "large" | "wide" | "tall" | "std";
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface Option {
  value: string;
  label: string;
}
