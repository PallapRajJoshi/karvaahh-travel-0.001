import type { Img } from "./content";

/**
 * Getaway types and filter labels. Kept apart from getaways.ts so the client
 * filter can import them without bundling the tour data that builds the list.
 */

export type GetawayGroup =
  | "mountain"
  | "lakeside"
  | "honeymoon"
  | "luxury"
  | "adventure"
  | "cultural"
  | "custom";

export const GROUP_LABEL: Record<GetawayGroup, string> = {
  mountain: "Romantic Mountain Getaways",
  lakeside: "Lakeside Holidays",
  honeymoon: "Honeymoon Packages",
  luxury: "Luxury & Private",
  adventure: "Adventure for Two",
  cultural: "Cultural Escapes",
  custom: "Customized Couple Tours",
};

export type Getaway = {
  id: string;
  title: string;
  /** What kind of product this is, so nobody mistakes an activity for a full package. */
  kind: "Multi-stop journey" | "Experience" | "Tailor-made";
  groups: GetawayGroup[];
  image: Img;
  duration: string | null;
  destinations: string[];
  highlights: string[];
  inclusions: string[] | null;
  price: string;
  primary: { label: string; href: string };
  enquire: { label: string; href: string };
};
