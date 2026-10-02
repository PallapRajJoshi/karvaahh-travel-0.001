// Shared TypeScript types for the Shey Phoksundo destination page.
// Centralizing types here keeps every section component and data file in sync.

export interface DestinationFact {
  label: string;
  value: string;
}

export interface AttractionItem {
  id: string;
  name: string;
  category: "lake-region" | "upper-dolpo";
  description: string;
  location: string;
  activities: string[];
  image: string;
  alt: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

export interface TrekkingTier {
  id: string;
  title: string;
  tagline: string;
  description: string;
  routePoints: string[];
  note?: string;
}

export interface ItineraryDay {
  day: string;
  summary: string;
}

export interface ItineraryOption {
  id: string;
  optionLabel: string;
  title: string;
  duration: string;
  days: ItineraryDay[];
  disclaimer: string;
}

export interface WildlifeItem {
  id: string;
  name: string;
  description: string;
  image: string;
  alt: string;
}

export interface CultureItem {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

export interface SeasonCard {
  id: string;
  season: string;
  months: string;
  points: string[];
}

export interface AccessRoute {
  id: string;
  mode: "air" | "road";
  title: string;
  description: string;
  highlights?: string[];
}

export interface StartingPoint {
  id: string;
  name: string;
  description: string;
}

export interface AccommodationOption {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

export interface EssentialItem {
  id: string;
  label: string;
}

export interface PermitNote {
  id: string;
  text: string;
}

export interface PackageItem {
  id: string;
  title: string;
  duration: string;
  description: string;
  experiences: string[];
  suitedFor: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
