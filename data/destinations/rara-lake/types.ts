/**
 * Shared types for the Rara Lake destination page.
 * Mirrors the typed-data-file pattern used by existing province pages
 * (destinations, experiences, journey-stops) — see project README.
 */

export interface ImageRef {
  /** Path relative to /public, e.g. "/images/destinations/rara-lake/hero.jpg" */
  src: string;
  alt: string;
}

export interface WhyVisitCard {
  id: string;
  title: string;
  description: string;
  image: ImageRef;
  icon?: string; // inline SVG name, resolved in component
}

export type AttractionZone = "lakeside" | "day-trip" | "regional-gateway";

export interface Attraction {
  id: string;
  name: string;
  zone: AttractionZone; // distinguishes "around the lake" vs "separate journey"
  description: string;
  suggestedActivity: string;
  image: ImageRef;
}

export interface Experience {
  id: string;
  title: string;
  description: string;
  image: ImageRef;
  availabilityNote?: string; // e.g. "subject to current local operating rules"
}

export interface TrekSegment {
  id: string;
  title: string;
  description: string;
  difficultyKnown: boolean; // only render a difficulty badge when true
  difficulty?: "Easy" | "Moderate" | "Challenging";
}

export interface ItineraryDay {
  day: number;
  summary: string;
}

export interface Itinerary {
  id: string;
  code: "A" | "B" | "C";
  title: string;
  duration: string; // "3 Days / 2 Nights"
  tagline: string;
  days: ItineraryDay[];
}

export interface SeasonCard {
  id: string;
  season: string;
  months: string;
  description: string;
}

export interface RouteOption {
  id: string;
  label: string; // e.g. "Kathmandu"
  mode: ("air" | "road")[];
  note: string; // no invented distances/durations — verification-required framing
}

export interface AccommodationCategory {
  id: string;
  title: string;
  description: string;
  image: ImageRef;
}

export interface EssentialItem {
  id: string;
  label: string;
}

export interface PackageCard {
  id: string;
  title: string;
  durationLabel: string; // "Suggested: 5 Days / 4 Nights"
  description: string;
  keyExperiences: string[];
  detailsHref: string;
  customizeHref: string;
}

export interface GalleryImage extends ImageRef {
  id: string;
  caption: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  requiresVerification?: boolean;
}
