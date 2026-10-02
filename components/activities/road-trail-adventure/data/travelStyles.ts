import type { TravelStyle } from "./types";
import { ANCHORS, INQUIRY_ANCHOR } from "./site";

/**
 * Descriptions follow the brief. None of these are labelled beginner- or
 * family-friendly: suitability is confirmed per route, altitude, duration and
 * conditions.
 */
export const TRAVEL_STYLES: TravelStyle[] = [
  {
    id: "road-trip",
    title: "For Road Trip Enthusiasts",
    description:
      "Scenic drives, mountain highways, countryside exploration, and flexible itineraries.",
    icon: "road",
    cta: {
      label: "See road trips",
      href: `#${ANCHORS.roadTrips}`,
    },
    image: {
      file: "style-road-trip.jpg",
      alt: "A scenic mountain highway in Nepal",
      label: "Scenic highway, real Nepal location.",
    },
  },
  {
    id: "off-road",
    title: "For Off-Road Explorers",
    description:
      "Rugged mountain roads, remote landscapes, and selected 4x4 journeys.",
    icon: "jeep",
    cta: { label: "See 4x4 journeys", href: `#${ANCHORS.offRoad}` },
    image: {
      file: "style-off-road.jpg",
      alt: "A four-wheel-drive vehicle on a remote mountain road",
      label: "4x4 on a real remote mountain road.",
    },
  },
  {
    id: "trekking",
    title: "For Trekking Enthusiasts",
    description:
      "Himalayan trails, mountain villages, and immersive walking experiences.",
    icon: "trek",
    cta: { label: "Find your trail", href: `#${ANCHORS.trails}` },
    image: {
      file: "style-trekking.jpg",
      alt: "Trekkers walking a Himalayan mountain trail",
      label: "Trekking trail with peaks.",
    },
  },
  {
    id: "motorcycle",
    title: "For Motorcycle Riders",
    description:
      "Scenic riding routes and customized road adventures suited to rider experience.",
    icon: "motorcycle",
    cta: {
      label: "Plan your ride",
      href: INQUIRY_ANCHOR,
      prefill: { adventureType: "Motorcycle Adventure" },
    },
    image: {
      file: "style-motorcycle.jpg",
      alt: "A motorcycle on a scenic riding route in Nepal",
      label: "Motorcycle on a real Nepal route.",
    },
  },
  {
    id: "families",
    title: "For Families & Leisure Travelers",
    description:
      "Scenic mountain drives, accessible viewpoints, and relaxed countryside exploration, subject to route suitability.",
    icon: "family",
    cta: {
      label: "Ask about family journeys",
      href: INQUIRY_ANCHOR,
      prefill: { adventureType: "Family Scenic Journey" },
    },
    image: {
      file: "style-families.jpg",
      alt: "A family enjoying a mountain viewpoint in the Nepal foothills",
      label: "Relaxed viewpoint or countryside scene. Avoid high-risk terrain.",
    },
  },
];
