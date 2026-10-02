import type { Itinerary } from "../types";

export const ITINERARIES_HEADING = "Choose Your Cultural Journey";
export const ITINERARIES_LEDE =
  "Three starting points. Every journey is shaped around your dates, pace and interests.";
export const ITINERARIES_DISCLAIMER =
  "These are sample itineraries, not confirmed packages. Routes, travel times, accommodation and inclusions are customised and confirmed with you before booking. Festival access cannot be guaranteed.";

export const ITINERARIES: Itinerary[] = [
  {
    id: "valley-heritage",
    title: "Kathmandu Valley Heritage Escape",
    duration: "3 Days / 2 Nights",
    media: "journey-valley",
    overview:
      "A short introduction to the three historic cities of the Kathmandu Valley: their temples, squares and craft traditions.",
    highlights: [
      "Kathmandu heritage exploration",
      "Bhaktapur cultural discovery",
      "Patan architecture and craftsmanship",
    ],
    prefill: { interest: "heritage", destination: "kathmandu", message: "I’d like to customise the Kathmandu Valley Heritage Escape (3 Days / 2 Nights).", label: "Kathmandu Valley Heritage Escape" },
  },
  {
    id: "festival-heritage",
    title: "Nepal Festival & Heritage Journey",
    duration: "5 Days / 4 Nights",
    media: "journey-festival",
    overview:
      "A longer, valley-based journey with room for local experiences, food and performances, timed around a festival where dates and access permit.",
    highlights: [
      "Kathmandu Valley heritage sites",
      "Local cultural experiences",
      "Festival participation when dates and access permit",
      "Traditional food and cultural performances",
    ],
    prefill: { interest: "festivals", destination: "kathmandu", message: "I’d like to customise the Nepal Festival & Heritage Journey (5 Days / 4 Nights).", label: "Nepal Festival & Heritage Journey" },
  },
  {
    id: "himalayan-community",
    title: "Himalayan Culture & Community Journey",
    duration: "7 Days / 6 Nights",
    media: "journey-himalaya",
    overview:
      "Begin with Kathmandu’s heritage, then continue to a Himalayan destination, chosen together, for community-based cultural experiences.",
    highlights: [
      "Kathmandu cultural heritage",
      "A selected Himalayan destination",
      "Community-based cultural experiences",
      "Traditional food, local customs and cultural exploration",
    ],
    prefill: { interest: "community", destination: "himalaya", message: "I’d like to customise the Himalayan Culture & Community Journey (7 Days / 6 Nights).", label: "Himalayan Culture & Community Journey" },
  },
];
