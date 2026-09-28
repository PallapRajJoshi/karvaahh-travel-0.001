import type { IconName } from "../Icon";

export interface ImageAsset {
  src: string;
  alt: string;
}

/** Which part of the route a destination belongs to. */
export type RouteGroupId = "haridwar" | "rishikesh" | "extensions";

export interface RouteGroup {
  id: RouteGroupId;
  title: string;
  intro: string;
  /** Solid = part of the core yatra, dashed = optional extension. */
  optional: boolean;
}

export interface SacredDestination {
  id: string;
  name: string;
  group: RouteGroupId;
  location: string;
  /** One-line reason the place matters to pilgrims. */
  significance: string;
  description: string;
  highlights: string[];
  suggestedExperience?: string;
  /** Always approximate — rendered with an "approx." label. */
  visitDuration: string;
  /** Operating-condition caveats (ropeways, access, timings). */
  notes?: string[];
  image: ImageAsset;
}

export interface SpiritualExperience {
  id: string;
  title: string;
  description: string;
  suitableFor: string[];
  note?: string;
  icon: IconName;
}

export interface ItineraryActivity {
  text: string;
  optional?: boolean;
}

export interface ItineraryDay {
  day: number;
  title: string;
  route: string;
  activities: ItineraryActivity[];
  meals: string;
  overnight: string | null;
}

export interface OverviewFact {
  label: string;
  value: string;
}

export interface ServiceLine {
  text: string;
  /** true = depends on the selected package, false = standard for every booking. */
  packageDependent: boolean;
}

export interface Season {
  id: string;
  name: string;
  months: string;
  summary: string;
  plan: string;
  icon: IconName;
}

export interface CrowdAdvisory {
  id: string;
  title: string;
  period: string;
  text: string;
}

export interface TipGroup {
  id: string;
  title: string;
  tips: string[];
}

export interface TravellerType {
  id: string;
  title: string;
  text: string;
  icon: IconName;
}

export interface FaqItem {
  id: string;
  question: string;
  /** Plain text so the visible answer and FAQPage JSON-LD stay identical. */
  answer: string;
}

export interface RelatedJourney {
  id: string;
  title: string;
  href: string;
  description: string;
  image: ImageAsset;
  /** Only journeys with live: true are rendered. Flip after verifying the route exists. */
  live: boolean;
}

export interface NavItem {
  id: string;
  label: string;
}
