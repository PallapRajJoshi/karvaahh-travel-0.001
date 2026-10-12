/**
 * Shared types for the Destination Weddings experience.
 * Kept framework-agnostic so the same data can later feed
 * dynamic routes such as /experience/destination-weddings/[slug].
 */

export type WeddingImage = {
  /** File name under /public/images/experience/destination-weddings/ */
  file: string;
  /** Descriptive alt text — also shown on the placeholder until the photo exists. */
  alt: string;
};

export type RegionId = "nepal" | "uttarakhand" | "india" | "international";

export type StyleId =
  | "mountain"
  | "beach"
  | "spiritual"
  | "heritage"
  | "royal"
  | "intimate"
  | "boutique"
  | "luxury"
  | "lake"
  | "nature";

export type WeddingDestination = {
  slug: string;
  name: string;
  region: RegionId;
  /** Wedding identity, e.g. "Himalayan Lake Wedding" */
  title: string;
  description: string;
  highlights: string[];
  /** Three-word mood line */
  mood: [string, string, string];
  styles: StyleId[];
  image: WeddingImage;
  /** Existing Karvaahh page to deepen the story, if one exists. */
  href?: string;
  hrefLabel?: string;
  /** Sub-locations, e.g. Jaipur / Udaipur for Rajasthan */
  places?: string[];
  /** Destination-specific conditions that must be shown with the card. */
  note?: string;
  /** Featured destinations get the large editorial treatment. */
  featured?: boolean;
};

export type Region = {
  id: RegionId;
  label: string;
  kicker: string;
  intro: string;
  note?: string;
};

export type WeddingStyle = {
  id: string;
  name: string;
  line: string;
  description: string;
  /** Filter chips this card answers to. */
  tags: StyleId[];
};

export type StyleFilter = { id: "all" | StyleId; label: string };

export type TitledList = {
  id: string;
  title: string;
  description?: string;
  items: string[];
  image?: WeddingImage;
  note?: string;
};

export type PlanningStage = {
  id: string;
  number: string;
  title: string;
  summary: string;
  detail: string;
  outcome: string;
};

export type ItineraryDay = { day: string; title: string; moments: string[] };

export type SampleJourney = {
  id: string;
  name: string;
  duration: string;
  label: string;
  summary: string;
  days: ItineraryDay[];
  extension?: string;
};

export type Collection = {
  id: string;
  name: string;
  guests: string;
  description: string;
  suits: string[];
  emphasis?: boolean;
};

export type Faq = { question: string; answer: string };
