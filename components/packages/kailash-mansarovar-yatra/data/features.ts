/**
 * "Why Karvaahh" features.
 *
 * ⚠ Set `enabled: false` for any service Karvaahh does not deliver itself or
 *   through a contracted partner. Copy deliberately avoids claims such as
 *   "100% success", "guaranteed permits" or "oxygen on every vehicle".
 */
import type { Feature } from "../types";

export const featuresHeading = {
  eyebrow: "Why Karvaahh",
  heading: "Your Trusted Partner for a Meaningful Pilgrimage",
  intro:
    "Kailash is a journey of faith, and a serious high-altitude expedition. We take care of the planning so you can focus on the yatra.",
};

export const features: Feature[] = [
  {
    id: "planning",
    title: "Personalized Pilgrimage Planning",
    body: "An itinerary shaped around your dates, fitness, age and the rituals that matter to your family.",
    icon: "compass",
    enabled: true,
  },
  {
    id: "options",
    title: "Overland & Helicopter-Assisted Options",
    body: "Honest advice on which route suits you, including the trade-offs of each.",
    icon: "helicopter",
    enabled: true,
  },
  {
    id: "logistics",
    title: "Travel Coordination & Logistics",
    body: "Flights, road transfers, border formalities and group permits coordinated end to end.",
    icon: "route",
    enabled: true,
  },
  {
    id: "stays",
    title: "Accommodation Planning",
    body: "The best available stays on each night of the route, with clear notes on what to expect in remote areas.",
    icon: "bed",
    enabled: true,
  },
  {
    id: "local",
    title: "Experienced Local Coordination",
    body: "Ground teams in Nepal and Tibet who know the route, working with you where operations allow.",
    icon: "people",
    enabled: true,
  },
  {
    id: "assistance",
    title: "Dedicated Trip Assistance",
    body: "One point of contact from first enquiry to your return home.",
    icon: "support",
    enabled: true,
  },
  {
    id: "transparency",
    title: "Transparent Package Information",
    body: "Inclusions, exclusions and caveats in writing before you pay — no surprises on the plateau.",
    icon: "document",
    enabled: true,
  },
  {
    id: "preparation",
    title: "Preparation & Requirements Guidance",
    body: "Help with documents, medical checks, fitness and packing, well before departure.",
    icon: "shield",
    enabled: true,
  },
];
