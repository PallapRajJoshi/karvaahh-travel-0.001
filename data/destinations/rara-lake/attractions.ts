import type { Attraction } from "./types";

/**
 * zone distinguishes attractions directly around the lake ("lakeside") from
 * those requiring a separate onward journey ("day-trip" / "regional-gateway"),
 * per the brief's instruction not to blur the two.
 */
export const attractions: Attraction[] = [
  {
    id: "rara-lake",
    name: "Rara Lake",
    zone: "lakeside",
    description: "The centerpiece of the region — open lakeshore for walking, photography, and quiet contemplation.",
    suggestedActivity: "Lakeside exploration, photography, and peaceful nature walks",
    image: { src: "/images/destinations/rara-lake/attraction-rara-lake.jpg", alt: "Rara Lake shoreline" },
  },
  {
    id: "murma-top",
    name: "Murma Top",
    zone: "lakeside",
    description: "A panoramic viewpoint rising above the lake, taking in the full basin and surrounding ranges.",
    suggestedActivity: "Panoramic viewpoint overlooking Rara Lake and surrounding landscapes",
    image: { src: "/images/destinations/rara-lake/attraction-murma-top.jpg", alt: "View from Murma Top over Rara Lake" },
  },
  {
    id: "chuchemara-hill",
    name: "Chuchemara Hill",
    zone: "lakeside",
    description: "A highland viewpoint offering a different angle on the lake and the wider Himalayan skyline.",
    suggestedActivity: "Scenic highland viewpoint and mountain scenery",
    image: { src: "/images/destinations/rara-lake/attraction-chuchemara-hill.jpg", alt: "Chuchemara Hill landscape" },
  },
  {
    id: "rara-national-park",
    name: "Rara National Park",
    zone: "lakeside",
    description: "The protected forest surrounding the lake, home to pine and juniper woodland and native wildlife.",
    suggestedActivity: "Forest trails, birdwatching, and wildlife observation",
    image: { src: "/images/destinations/rara-lake/attraction-national-park.jpg", alt: "Forest trail in Rara National Park" },
  },
  {
    id: "murma-village",
    name: "Murma Village",
    zone: "lakeside",
    description: "A traditional settlement near the lake, offering an authentic look at local mountain life.",
    suggestedActivity: "Local culture, village walks, and community experiences",
    image: { src: "/images/destinations/rara-lake/attraction-murma-village.jpg", alt: "Murma Village houses" },
  },
  {
    id: "gamgadhi",
    name: "Gamgadhi",
    zone: "regional-gateway",
    description: "Mugu district's headquarters and the practical gateway into the wider Rara region.",
    suggestedActivity: "District headquarters and a gateway to the Rara region",
    image: { src: "/images/destinations/rara-lake/attraction-gamgadhi.jpg", alt: "Gamgadhi town" },
  },
  {
    id: "sinja-valley",
    name: "Sinja Valley",
    zone: "day-trip",
    description: "A historic valley tied to the origins of the Nepali language and the former Khasa Malla civilization.",
    suggestedActivity: "Historic valley associated with the Khasa Malla civilization",
    image: { src: "/images/destinations/rara-lake/attraction-sinja-valley.jpg", alt: "Sinja Valley landscape" },
  },
  {
    id: "jumla-bazaar",
    name: "Jumla Bazaar",
    zone: "regional-gateway",
    description: "A traditional market settlement and regional gateway to western Nepal.",
    suggestedActivity: "Traditional settlements, local markets, and a regional gateway",
    image: { src: "/images/destinations/rara-lake/attraction-jumla-bazaar.jpg", alt: "Jumla Bazaar market street" },
  },
];
