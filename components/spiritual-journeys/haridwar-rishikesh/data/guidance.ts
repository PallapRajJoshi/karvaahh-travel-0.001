import type { TipGroup, TravellerType } from "./types";

export const TIP_GROUPS: TipGroup[] = [
  {
    id: "prepare",
    title: "Before you go",
    tips: [
      "Carry valid photo identification and any travel documents you need",
      "Pack comfortable walking footwear and layers for changing weather",
      "Carry your personal medication, and tell your coordinator about any mobility needs",
      "Check temple timings and ropeway schedules for your travel dates",
    ],
  },
  {
    id: "temples",
    title: "At temples and ghats",
    tips: [
      "Wear comfortable, modest clothing suitable for temple visits",
      "Follow temple dress codes and local religious customs",
      "Follow posted rules on photography and phone use at religious sites",
      "Keep valuables secure in crowded pilgrimage areas",
    ],
  },
  {
    id: "pace",
    title: "Pace and safety",
    tips: [
      "Senior travellers should weigh walking distances, stairs and road conditions before choosing activities",
      "Follow local traffic, road-safety and environmental guidelines",
      "Carry a refillable bottle and avoid single-use plastic along the river",
    ],
  },
];

export const RIVER_SAFETY =
  "The Ganga is fast, cold and deep in places, even where the surface looks calm. Bathe only at designated ghats, hold the safety chains, never enter restricted or unguarded stretches, and stay out of the water when authorities advise against it or the river is running high.";

export const TRAVELLER_TYPES: TravellerType[] = [
  {
    id: "families",
    title: "Families",
    text: "A meaningful pilgrimage with short drives, comfortable stays and shared moments at the aarti.",
    icon: "family",
  },
  {
    id: "devotees",
    title: "Devotees",
    text: "Time at the sacred ghats and darshan at the goddess temples and Neelkanth Mahadev.",
    icon: "temple",
  },
  {
    id: "seniors",
    title: "Senior travellers",
    text: "A spiritually focused journey paced around rest, with walking and stairs planned in advance.",
    icon: "senior",
  },
  {
    id: "couples",
    title: "Couples",
    text: "A quiet spiritual getaway of river evenings, ashram mornings and unhurried walks.",
    icon: "heart",
  },
  {
    id: "yoga",
    title: "Yoga & meditation enthusiasts",
    text: "Sessions in the town that made yoga a pilgrimage in its own right, arranged in advance.",
    icon: "yoga",
  },
  {
    id: "culture",
    title: "Culture & heritage travellers",
    text: "Living religious traditions, ashram life and temples that tell India's story.",
    icon: "book",
  },
];

export const TRAVELLER_NOTE =
  "Suitability depends on each traveller's mobility, the chosen itinerary and individual needs. Tell us about these when you enquire and we'll plan around them.";
