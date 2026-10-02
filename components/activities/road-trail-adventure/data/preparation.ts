import type { PrepItem, ValueProp } from "./types";

export const PREP_ITEMS: PrepItem[] = [
  {
    id: "roads",
    title: "Road Conditions & Seasonal Planning",
    body: "Road conditions vary with weather, altitude, maintenance and season. Some routes are affected or closed at certain times of year, so timing matters.",
    icon: "road",
  },
  {
    id: "vehicle",
    title: "Vehicle Selection",
    body: "The right vehicle depends on terrain, route conditions, the number of passengers and luggage. A standard vehicle is not suitable for every route.",
    icon: "jeep",
  },
  {
    id: "trekking",
    title: "Trekking Preparation",
    body: "Broken-in footwear, clothing in layers, regular hydration, a realistic route plan and sensible physical preparation all help. Plan around your own fitness.",
    icon: "footwear",
  },
  {
    id: "altitude",
    title: "Altitude Awareness",
    body: "High-altitude journeys need careful planning and awareness of altitude-related risks. Pace, itinerary shape and personal health all matter. Seek medical advice before travelling if unsure.",
    icon: "altitude",
  },
  {
    id: "permits",
    title: "Permits & Entry Requirements",
    body: "Some destinations and trekking areas may require permits or other entry arrangements. Requirements change, so verify them before you travel.",
    icon: "doc",
  },
];

export const PACKING_ESSENTIALS = [
  { label: "Comfortable footwear", icon: "footwear" },
  { label: "Weather-appropriate clothing", icon: "layers" },
  { label: "Sun protection", icon: "sun" },
  { label: "Personal medication and essentials", icon: "pill" },
  { label: "Water and suitable snacks", icon: "water" },
  { label: "Travel documents and required permits", icon: "doc" },
] as const;

export const VALUE_PROPS: ValueProp[] = [
  {
    title: "Customized Journeys",
    body: "Travel plans tailored to interests, time, and preferred adventure style.",
    icon: "compass",
  },
  {
    title: "Destination Variety",
    body: "Explore scenic roads, mountain villages, trekking gateways, and Himalayan landscapes.",
    icon: "mountain",
  },
  {
    title: "Flexible Travel Styles",
    body: "Discover options ranging from scenic drives to off-road journeys and trekking experiences.",
    icon: "route",
  },
  {
    title: "Practical Route Planning",
    body: "Plan around road conditions, seasonal access, and destination requirements.",
    icon: "map",
  },
  {
    title: "Cultural Discovery",
    body: "Connect with local landscapes, traditions, and communities respectfully.",
    icon: "culture",
  },
  {
    title: "Personalized Travel Support",
    body: "Get assistance planning an adventure that fits your travel preferences.",
    icon: "support",
  },
];
