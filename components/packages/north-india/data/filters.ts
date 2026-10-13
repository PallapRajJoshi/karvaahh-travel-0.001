import type { Img } from "./images";

/**
 * Destination types and filter labels. Kept apart from destinations.ts so the
 * client filter imports only these, not the destination data itself.
 */

export type DestinationCategory = "spiritual" | "hills" | "adventure" | "heritage" | "family" | "lakes";

export const CATEGORY_LABEL: Record<DestinationCategory, string> = {
  spiritual: "Spiritual & Pilgrimage",
  hills: "Himalayan Hill Stations",
  adventure: "Adventure & Nature",
  heritage: "Heritage & Culture",
  family: "Family Holidays",
  lakes: "Lakes & Scenic Escapes",
};

export const CATEGORY_ORDER: DestinationCategory[] = ["spiritual", "hills", "adventure", "heritage", "family", "lakes"];

export type RegionId = "uttarakhand" | "himachal" | "kashmir" | "uttar-pradesh" | "golden-triangle";

export type Region = {
  id: RegionId;
  name: string;
  theme: string;
  intro: string;
};

export type Destination = {
  id: string;
  name: string;
  region: RegionId;
  /** Short place context shown above the name, e.g. "Garhwal Himalaya". */
  area: string;
  highlight: string;
  tags: string[];
  categories: DestinationCategory[];
  image: Img;
  /** An existing Karvaahh page, or a pre-filled enquiry when none exists. */
  link: { label: string; href: string; kind: "page" | "enquiry" };
};
