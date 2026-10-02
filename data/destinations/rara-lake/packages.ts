import type { PackageCard } from "./types";

/**
 * Editable placeholders for future package integration. No prices, hotel
 * names, transport availability, or confirmed departure dates are included
 * per the brief — wire detailsHref/customizeHref to real package routes
 * once they exist.
 */
export const packages: PackageCard[] = [
  {
    id: "rara-short-escape",
    title: "Rara Lake Short Escape",
    durationLabel: "Suggested itinerary: 3 Days / 2 Nights",
    description: "A quick, focused visit to Rara Lake for travelers with limited time.",
    keyExperiences: ["Lakeside exploration", "Viewpoint visit", "Photography"],
    detailsHref: "/packages/rara-lake-short-escape",
    customizeHref: "/contact?trip=rara-lake-short-escape&type=custom",
  },
  {
    id: "rara-nature-photography",
    title: "Rara Lake Nature & Photography Tour",
    durationLabel: "Suggested itinerary: 4–5 Days",
    description: "Built around the lake's changing light, forest trails, and wildlife.",
    keyExperiences: ["Sunrise & sunset photography", "Birdwatching", "Forest trails"],
    detailsHref: "/packages/rara-lake-nature-photography",
    customizeHref: "/contact?trip=rara-lake-nature-photography&type=custom",
  },
  {
    id: "rara-trekking-adventure",
    title: "Rara Lake Trekking Adventure",
    durationLabel: "Suggested itinerary: 5–6 Days",
    description: "Centered on the Murma Top hike and the region's scenic forest trails.",
    keyExperiences: ["Murma Top hike", "Forest trekking", "Lakeside camping"],
    detailsHref: "/packages/rara-lake-trekking-adventure",
    customizeHref: "/contact?trip=rara-lake-trekking-adventure&type=custom",
  },
  {
    id: "rara-sinja-cultural",
    title: "Rara Lake & Sinja Valley Cultural Journey",
    durationLabel: "Suggested itinerary: 6–7 Days",
    description: "Pairs Rara's landscapes with the historic and cultural depth of Sinja Valley.",
    keyExperiences: ["Village culture", "Sinja Valley history", "Local homestays"],
    detailsHref: "/packages/rara-lake-sinja-cultural-journey",
    customizeHref: "/contact?trip=rara-lake-sinja-cultural-journey&type=custom",
  },
  {
    id: "rara-western-nepal-expedition",
    title: "Rara Lake Extended Western Nepal Expedition",
    durationLabel: "Suggested itinerary: 7+ Days",
    description: "The fullest route through Rara and the wider Karnali region.",
    keyExperiences: ["Rara Lake & Murma Top", "Gamgadhi", "Optional Jumla / Sinja extension"],
    detailsHref: "/packages/rara-lake-western-nepal-expedition",
    customizeHref: "/contact?trip=rara-lake-western-nepal-expedition&type=custom",
  },
];
