import type { Feature } from "./types";

/**
 * "Why Karvaahh" — set enabled:false for anything not offered today.
 * Only claims the business can actually deliver should be enabled.
 */
export const features: Feature[] = [
  {
    id: "planning",
    title: "Personalized Trek Planning",
    text: "Routes shaped around your dates, fitness and interests — not a one-size itinerary.",
    icon: "compass",
    enabled: true,
  },
  {
    id: "packages",
    title: "Customized Travel Packages",
    text: "Trekking, road-based or a mix — we help you pick the right way to see Mustang.",
    icon: "sliders",
    enabled: true,
  },
  {
    id: "transport",
    title: "Transportation Coordination",
    text: "Help arranging flights, jeeps and transfers, with back-up options when weather intervenes.",
    icon: "jeep",
    enabled: true,
  },
  {
    id: "stays",
    title: "Accommodation Planning",
    text: "Tea-house and lodge stays arranged along your route.",
    icon: "bed",
    enabled: true,
  },
  {
    id: "culture",
    title: "Local Cultural Experiences",
    text: "Monastery visits, village time and festival timing woven into the plan where possible.",
    icon: "people",
    enabled: true,
  },
  {
    id: "support",
    title: "Dedicated Trip Assistance",
    text: "One point of contact from first enquiry to your return.",
    icon: "support",
    enabled: true,
  },
  {
    id: "transparency",
    title: "Transparent Package Information",
    text: "Clear inclusions, exclusions and permit costs in writing before you commit.",
    icon: "document",
    enabled: true,
  },
  {
    id: "prep",
    title: "Guidance on Trek Preparation",
    text: "Advice on permits, acclimatization, fitness and packing for high-altitude travel.",
    icon: "backpack",
    enabled: true,
  },
];
