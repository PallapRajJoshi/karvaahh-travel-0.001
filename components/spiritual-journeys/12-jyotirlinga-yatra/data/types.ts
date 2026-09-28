/**
 * Types for the 12 Jyotirlinga Yatra page.
 * All page content lives in jyotirlingaData.ts — components only render it.
 */

export type Region = "North" | "Central" | "West" | "East" | "South";

export interface ImageAsset {
  /** Public path, e.g. /images/spiritual-journeys/12-jyotirlinga-yatra/somnath-jyotirlinga-gujarat.jpg */
  src: string;
  alt: string;
  /** Flip to true once the file exists in /public. Until then an intentional placeholder renders. */
  ready: boolean;
  /** Short caption / credit line, optional. */
  caption?: string;
}

/** Keys into the central route registry. Only enabled routes are ever rendered as links. */
export type RouteKey =
  | "home"
  | "spiritualJourneys"
  | "contact"
  | "charDhamUttarakhand"
  | "badaCharDham"
  | "kedarnath"
  | "pashupatinath"
  | "muktinath"
  | "kailashMansarovar"
  | "uttarakhandTours";

export interface RouteEntry {
  href: string;
  label: string;
  /** Set true only after confirming the route exists in the project. */
  enabled: boolean;
}

export interface Jyotirlinga {
  id: number;
  slug: string;
  name: string;
  templeName: string;
  /** Section H3 text, e.g. "Somnath Jyotirlinga – Gujarat" */
  heading: string;
  location: string;
  state: string;
  region: Region;
  landscape: string;
  tradition: string;
  shortDescription: string;
  significance: string;
  templeCharacter: string;
  nearby: string[];
  travelNotes: string;
  experience: string;
  /** Neutral note where traditions identify the site differently. */
  traditionNote?: string;
  /** Contextual related-page link, rendered only if the route is enabled. */
  relatedLink?: { route: RouteKey; text: string };
  /** One-line context for the comparison table. */
  tableContext: string;
  /** Approximate coordinates, used only to position points on the route graphic. */
  coordinates: { lat: number; lng: number };
  image: ImageAsset;
}

export interface Fact {
  label: string;
  value: string;
}

export interface TitledText {
  title: string;
  text: string;
}

export interface ChecklistGroup {
  title: string;
  items: string[];
}

export interface Faq {
  question: string;
  answer: string;
}

export interface CtaLink {
  label: string;
  route: RouteKey;
  /** Appended as ?enquiry=… so the contact page can pre-select the topic. */
  query?: string;
  variant: "primary" | "secondary" | "ghost";
}
