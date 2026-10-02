import type { AdventureCategory } from "./types";
import { ANCHORS } from "./site";

export const ADVENTURE_CATEGORIES: AdventureCategory[] = [
  {
    id: "scenic-road-trips",
    title: "Scenic Road Trips",
    description:
      "Discover scenic drives through mountain valleys, countryside roads, terraced hillsides, and traditional villages.",
    highlights: [
      "Mountain valleys",
      "Countryside roads",
      "Terraced hillsides",
      "Traditional villages",
    ],
    image: {
      file: "category-scenic-road-trip.jpg",
      alt: "A quiet countryside road through terraced hillsides in Nepal",
      label: "Countryside road with terraces and village in frame. Real Nepal location.",
    },
    cta: {
      label: "Explore Experience",
      href: `#${ANCHORS.roadTrips}`,
    },
  },
  {
    id: "off-road-4x4",
    title: "4x4 Off-Road Adventures",
    description:
      "Experience rugged mountain roads, remote landscapes, and challenging terrain with suitable four-wheel-drive vehicles.",
    highlights: [
      "Rugged mountain roads",
      "Remote landscapes",
      "Challenging terrain",
      "Suitable 4WD vehicles",
    ],
    image: {
      file: "category-offroad-4x4.jpg",
      alt: "A four-wheel-drive jeep on a rugged high-altitude road in the Nepal Himalaya",
      label: "4x4 on an actual mountain road. Calm, controlled driving only.",
    },
    cta: { label: "Explore Experience", href: `#${ANCHORS.offRoad}` },
  },
  {
    id: "motorcycle",
    title: "Motorcycle Adventures",
    description:
      "Explore Nepal’s scenic highways and mountain routes on motorcycle journeys tailored to riding experience and road conditions.",
    highlights: [
      "Scenic highways",
      "Mountain routes",
      "Tailored to riding experience",
      "Planned around road conditions",
    ],
    image: {
      file: "category-motorcycle.jpg",
      alt: "A motorcycle travelling along a scenic Himalayan mountain road",
      label: "Motorcycle on a real Nepal mountain road. Riders in proper gear.",
    },
    cta: { label: "Explore Experience", href: `#${ANCHORS.ride}` },
  },
  {
    id: "trekking",
    title: "Trekking & Hiking Trails",
    description:
      "Discover Himalayan trekking routes, peaceful forest trails, alpine landscapes, and traditional mountain villages.",
    highlights: [
      "Himalayan trekking routes",
      "Peaceful forest trails",
      "Alpine landscapes",
      "Mountain villages",
    ],
    image: {
      file: "category-trekking.jpg",
      alt: "Trekkers walking a trail toward snow-capped Himalayan peaks",
      label: "Trail with trekkers and peaks. Identify the region in the alt text once known.",
    },
    cta: { label: "Explore Experience", href: `#${ANCHORS.trails}` },
  },
  {
    id: "mountain-biking",
    title: "Mountain Biking",
    description:
      "Explore selected mountain biking routes through countryside trails, forest paths, and scenic Himalayan terrain.",
    highlights: [
      "Countryside trails",
      "Forest paths",
      "Himalayan terrain",
      "Selected routes",
    ],
    image: {
      file: "category-mountain-biking.jpg",
      alt: "A mountain biker riding a forest and hillside trail in Nepal",
      label: "Real MTB trail in Nepal (e.g. around Pokhara). Helmeted riders.",
    },
    cta: { label: "Explore Experience", href: `#${ANCHORS.ride}` },
  },
  {
    id: "jeep-safaris",
    title: "Jeep Safaris & Mountain Exploration",
    description:
      "Experience scenic overland journeys and selected off-road routes with suitable vehicles and local travel support.",
    highlights: [
      "Scenic overland journeys",
      "Selected off-road routes",
      "Suitable vehicles",
      "Local travel support",
    ],
    image: {
      file: "category-jeep-safari.jpg",
      alt: "A jeep travelling an overland route through a Himalayan valley",
      label: "Jeep in a valley landscape. Vehicle must suit the terrain shown.",
    },
    cta: { label: "Explore Experience", href: `#${ANCHORS.offRoad}` },
  },
];
