// data/south-africa/types.ts
// Typed models for the South Africa page. Every list on the page renders from
// these shapes, so a CMS or API can replace the static files one at a time
// without touching components. Optional fields render only when set.

import type { SAImageId } from "./images";

export type SouthAfricaRegion =
  | "western-cape"
  | "gauteng"
  | "mpumalanga"
  | "limpopo"
  | "kwazulu-natal"
  | "eastern-cape"
  | "northern-cape"
  | "free-state"
  | "north-west";

export type SouthAfricaTravelStyle =
  | "safari"
  | "wildlife"
  | "honeymoon"
  | "family"
  | "luxury"
  | "adventure"
  | "beach"
  | "nature"
  | "culture"
  | "road-trip"
  | "city-tour"
  | "food-wine"
  | "photography"
  | "senior-friendly"
  | "private"
  | "group";

export type SAIconKey =
  | "binoculars"
  | "camera"
  | "car"
  | "compass"
  | "fish"
  | "glass"
  | "heart"
  | "hotel"
  | "landmark"
  | "map"
  | "mountain"
  | "palm"
  | "plane"
  | "shield"
  | "ship"
  | "sparkles"
  | "sun"
  | "trees"
  | "users"
  | "utensils"
  | "waves"
  | "wallet";

export interface SouthAfricaDestination {
  id: string;
  name: string;
  region: SouthAfricaRegion;
  /** Shown instead of the province name where a place spans two. */
  area?: string;
  kind: "city" | "park" | "route" | "town" | "region";
  image?: SAImageId;
  tagline: string;
  description: string;
  attractions: string[];
  travelStyles: SouthAfricaTravelStyle[];
  idealSeason?: string;
  duration?: string;
  coords: [number, number];
  /** Section on this page that goes deeper. */
  sectionId?: string;
  /** Dedicated page, linked only once it is live. */
  href?: string;
  featured?: boolean;
  active: boolean;
}

export interface SouthAfricaPackage {
  id: string;
  title: string;
  /** e.g. "5N/6D". "Flexible" for fully custom journeys. */
  duration: string;
  nights?: number;
  /** Destination ids, in travel order. */
  destinations: string[];
  styles: SouthAfricaTravelStyle[];
  image: SAImageId;
  summary: string;
  highlights: string[];
  accommodationCategory?: string;
  safariType?: string;
  transport?: string;
  /** Plain-language summary of what a quote typically covers. */
  inclusionsSummary?: string;
  /** Day-by-day outline shown in View Details. */
  outline?: string[];
  /** Only set when Karvaahh publishes a real price it can honour. */
  price?: string;
  kind: "template" | "custom";
  popular?: boolean;
  active: boolean;
}

export interface FeatureItem {
  id: string;
  title: string;
  text: string;
  image?: SAImageId;
  icon?: SAIconKey;
}
