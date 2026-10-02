export type ImageSlot = {
  /** Path under /public. Replace placeholders with licensed photography. */
  src: string;
  alt: string;
  /** Short label shown on the placeholder until the real photo exists. */
  label: string;
};

export type ExperienceItem = {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  image: ImageSlot;
  inquiryValue: string;
};

export type DestinationItem = {
  id: string;
  name: string;
  region: string;
  country: "Nepal" | "India";
  heading: string;
  description: string;
  highlights: string[];
  idealFor: string;
  image: ImageSlot;
  href: string;
  inquiryValue: string;
  featured: boolean;
};

export type ActivityItem = {
  id: string;
  title: string;
  description: string;
  icon: "sun" | "lotus" | "breath" | "leaf" | "drop" | "book";
};

export type RetreatStyle = {
  id: string;
  title: string;
  description: string;
  destinations: string[];
  activities: string[];
  experienceValue: string;
  purposeValue: string;
};

export type TravelerItem = {
  id: string;
  title: string;
  heading: string;
  description: string;
  image: ImageSlot;
  purposeValue: string;
  ctaLabel: string;
};

export type ItineraryDay = { day: string; title: string; points: string[] };
export type Itinerary = {
  id: string;
  title: string;
  duration: string;
  destinationValue: string;
  days: ItineraryDay[];
};

export type ComparisonRow = {
  type: string;
  setting: string;
  activities: string;
  idealTraveler: string;
  style: string;
  customization: string;
};

export type IconCard = {
  id: string;
  title: string;
  description: string;
  icon: "compass" | "mountain" | "blend" | "people" | "route" | "hands";
};

export type ProcessStep = { id: string; title: string; description: string };

export type GalleryItem = {
  id: string;
  image: ImageSlot;
  size: "large" | "wide" | "small";
};

export type FaqItem = { id: string; question: string; answer: string };
