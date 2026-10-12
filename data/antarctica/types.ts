// data/antarctica/types.ts
// Typed models for the Antarctica page. Every list on the page is built from
// these shapes, so a CMS or API can replace the static files one by one
// without touching the components. Optional fields render only when set.

import type { AntarcticaImageId } from "./images";

export type PolarRegion =
  | "antarctic-peninsula"
  | "south-shetland-islands"
  | "drake-passage"
  | "south-georgia"
  | "falkland-islands"
  | "antarctic-circle"
  | "ushuaia"
  | "weddell-sea"
  | "other";

export type ExpeditionStyle =
  | "classic"
  | "wildlife"
  | "photography"
  | "luxury"
  | "adventure"
  | "honeymoon"
  | "family"
  | "educational"
  | "expedition-cruise"
  | "air-cruise"
  | "small-group"
  | "private";

/** How the Southern Ocean is crossed. */
export type CrossingMode = "drake" | "air-cruise" | "either";

export interface AntarcticaDestination {
  id: string;
  name: string;
  region: PolarRegion;
  /** Short geographic label, e.g. "Southern Ocean, sub-Antarctic". */
  area: string;
  image: AntarcticaImageId;
  tagline: string;
  description: string;
  experiences: string[];
  /** Possible encounters only, never promised. */
  wildlife: string[];
  recommendedSeason?: string;
  /** Typical voyage length that includes this destination. */
  duration?: string;
  expeditionType: string;
  /** Lat/long, for JSON-LD and the map. */
  coords?: [number, number];
  /** Dedicated page, linked only once it is live. */
  href?: string;
  featured?: boolean;
  active: boolean;
}

export interface CabinCategory {
  id: "standard" | "superior" | "balcony" | "suite" | "luxury";
  name: string;
  summary: string;
  /** Typical features. Vessel-specific, shown as "may include". */
  typical: string[];
}

export interface AntarcticaExpedition {
  id: string;
  title: string;
  /** e.g. "9N/10D". "Flexible" for fully custom journeys. */
  duration: string;
  nights?: number;
  /** Ordered stops shown as the route line. */
  route: string[];
  regions: PolarRegion[];
  styles: ExpeditionStyle[];
  crossing: CrossingMode;
  image: AntarcticaImageId;
  summary: string;
  highlights: string[];
  /** Possible encounters, never guaranteed. */
  wildlife: string[];
  cabinCategories?: CabinCategory["id"][];
  gateway: string;
  bestSeason: string;
  /** Only set when Karvaahh publishes a real, honourable price. */
  price?: string;
  /** Real departure dates, only when confirmed with an operator. */
  departures?: string[];
  /** Extension products only render when configured. */
  extensions?: string[];
  /** "template" means a configurable starting point, not a fixed itinerary. */
  kind: "template" | "custom";
  popular?: boolean;
  active: boolean;
}

export interface Wildlife {
  id: string;
  species: string;
  group: "penguins" | "whales" | "seals" | "birds";
  image?: AntarcticaImageId;
  where: string;
  season: string;
  experience: string;
  photography: string;
  note?: string;
  active: boolean;
}

export interface ExperienceItem {
  id: string;
  title: string;
  text: string;
  image?: AntarcticaImageId;
  icon?: IconKey;
}

export type IconKey =
  | "anchor"
  | "binoculars"
  | "book"
  | "camera"
  | "compass"
  | "fish"
  | "glass"
  | "heart"
  | "hotel"
  | "map"
  | "mountain"
  | "plane"
  | "sailboat"
  | "ship"
  | "shield"
  | "snowflake"
  | "sparkles"
  | "sun"
  | "users"
  | "utensils"
  | "waves";
