import type { Feature, JourneyStep, TrustItem, ValueItem } from "./types";

export const whyKarvaahh = {
  eyebrow: "Why Karvaahh",
  title: "Why Travel With Karvaahh?",
  sub: "Local knowledge. Thoughtful planning. Personal service.",
} as const;

export const features: Feature[] = [
  { id: "local", title: "Local Expertise", text: "Deep destination knowledge helps us design journeys that feel authentic.", icon: "compass" },
  { id: "personal", title: "Personalized Planning", text: "We create itineraries around your interests, schedule and travel style.", icon: "route" },
  { id: "support", title: "Complete Travel Support", text: "Accommodation, transportation, sightseeing, permits and experiences can be coordinated through one travel partner.", icon: "layers" },
  { id: "transparent", title: "Transparent Planning", text: "Clear communication and thoughtfully structured travel plans.", icon: "eye" },
  { id: "human", title: "Human Assistance", text: "Real people helping you before, during and after your journey.", icon: "person" },
  { id: "purpose", title: "Travel With Purpose", text: "Journeys designed to create meaningful memories rather than simply checking destinations off a list.", icon: "flag" },
];

export const journey = {
  eyebrow: "How We Plan",
  title: "From Dream to Departure",
} as const;

export const journeySteps: JourneyStep[] = [
  { id: "dream", title: "Tell Us Your Dream", text: "Share your destination, dates, interests and travel preferences." },
  { id: "design", title: "We Design Your Journey", text: "Our team creates an itinerary around your requirements." },
  { id: "refine", title: "Refine the Experience", text: "Adjust destinations, hotels, transportation, activities and budget." },
  { id: "confidence", title: "Travel With Confidence", text: "We coordinate the details so you can focus on the experience." },
  { id: "memories", title: "Create Memories", text: "Travel, explore and return with stories worth sharing." },
];

/**
 * Trust strip. NO invented numbers.
 *
 * The one figure is "7": Karvaahh has a destination guide for each of Nepal's seven
 * provinces (Koshi, Madhesh, Bagmati, Gandaki, Lumbini, Karnali, Sudurpashchim).
 * Delete that item if you'd rather keep the strip fully non-numerical, and add real
 * figures here (e.g. years operating, travellers hosted) only once you can stand behind them.
 */
export const trust = {
  eyebrow: "Why Trust Us",
  title: "Built on the things that matter",
} as const;

export const trustItems: TrustItem[] = [
  { id: "provinces", kind: "figure", value: "7", label: "Provinces of Nepal, each with its own destination guide" },
  { id: "local", kind: "statement", value: "Local Expertise", label: "Rooted in Nepal and the Himalayas" },
  { id: "custom", kind: "statement", value: "Customized Journeys", label: "Planned around you, not a template" },
  { id: "assist", kind: "statement", value: "Personal Assistance", label: "Real people from first enquiry to return" },
];

export const values = {
  eyebrow: "Our Values",
  title: "What We Value",
} as const;

export const valueItems: ValueItem[] = [
  { id: "authenticity", title: "Authenticity", text: "Experience places as they truly are.", icon: "mountain" },
  { id: "trust", title: "Trust", text: "Build relationships through honest communication.", icon: "shield" },
  { id: "care", title: "Care", text: "Pay attention to the details that matter.", icon: "heart" },
  { id: "flexibility", title: "Flexibility", text: "Travel should adapt to you.", icon: "flex" },
  { id: "discovery", title: "Discovery", text: "Stay curious and keep exploring.", icon: "search" },
  { id: "responsibility", title: "Responsibility", text: "Respect destinations, communities and nature.", icon: "leaf" },
];
