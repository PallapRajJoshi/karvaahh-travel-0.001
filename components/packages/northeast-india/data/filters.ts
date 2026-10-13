import type { Img } from "./images";

/**
 * Destination types and filter labels. Kept apart from destinations.ts so the
 * client filter imports only these, not the destination data itself.
 */

export type DestinationCategory = "himalayan" | "waterfalls" | "wildlife" | "culture" | "water" | "spiritual" | "offbeat";

export const CATEGORY_LABEL: Record<DestinationCategory, string> = {
  himalayan: "Himalayan Landscapes",
  waterfalls: "Waterfalls & Caves",
  wildlife: "Wildlife & Nature",
  culture: "Culture & Heritage",
  water: "Lakes & River Islands",
  spiritual: "Monasteries & Spiritual Journeys",
  offbeat: "Offbeat Adventures",
};

export const CATEGORY_ORDER: DestinationCategory[] = ["himalayan", "waterfalls", "wildlife", "culture", "water", "spiritual", "offbeat"];

export type StateId = "arunachal" | "assam" | "meghalaya" | "nagaland" | "manipur" | "mizoram" | "tripura" | "sikkim";

/** Where a card leads: a filtered view of the live destination guide, or a pre-filled enquiry. */
export type CardLink = { label: string; href: string; kind: "page" | "enquiry" };

export type Destination = {
  id: string;
  name: string;
  state: StateId;
  stateName: string;
  highlight: string;
  tags: string[];
  categories: DestinationCategory[];
  image: Img;
  link: CardLink;
};
