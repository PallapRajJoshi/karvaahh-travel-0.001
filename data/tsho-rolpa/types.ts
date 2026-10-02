export interface Attraction {
  id: string;
  name: string;
  description: string;
  locationContext: string;
  activities: string[];
  image: string;
  onRouteToLake: boolean;
  requiresExtendedTrek: boolean;
}

export interface WhyVisitCard {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: IconName;
}

export interface ExperienceItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

export type TrekCategory = "village" | "lake-trek" | "pass-expedition";

export interface TrekCategoryCopy {
  id: TrekCategory;
  title: string;
  description: string;
}

export interface ItineraryDay {
  day: string;
  summary: string;
}

export interface Itinerary {
  id: string;
  label: string;
  duration: string;
  days: ItineraryDay[];
  note: string;
}

export interface SeasonCard {
  id: string;
  season: string;
  months: string;
  points: string[];
}

export interface AccommodationOption {
  id: string;
  title: string;
  description: string;
}

export interface EssentialItem {
  id: string;
  label: string;
}

export interface PackageOption {
  id: string;
  title: string;
  duration: string;
  description: string;
  experiences: string[];
  travelerProfile: string;
  technical: boolean;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export type IconName =
  | "water"
  | "mountain"
  | "peak"
  | "village"
  | "glacier"
  | "trek"
  | "stupa"
  | "compass";
