import type { StyleFilter, WeddingStyle } from "./types";

export const styleFilters: StyleFilter[] = [
  { id: "all", label: "All" },
  { id: "mountain", label: "Mountain" },
  { id: "beach", label: "Beach" },
  { id: "spiritual", label: "Spiritual" },
  { id: "heritage", label: "Heritage" },
  { id: "royal", label: "Royal" },
  { id: "intimate", label: "Intimate" },
  { id: "boutique", label: "Boutique" },
  { id: "luxury", label: "Luxury" },
];

/**
 * Two families of style: the *scale* of the celebration and the *setting*.
 * Couples usually pick one of each — the finder lets them see both at once.
 */
export const weddingStyles: WeddingStyle[] = [
  {
    id: "intimate",
    name: "Intimate",
    line: "20–50 guests",
    description:
      "Close family and friends, unhurried rituals and settings too small for a crowd — village courtyards, lakeside lawns, mountain terraces.",
    tags: ["intimate"],
  },
  {
    id: "boutique",
    name: "Boutique",
    line: "50–100 guests",
    description:
      "A full set of functions with room for every detail — boutique resorts and heritage hotels can often host the whole party under one roof.",
    tags: ["boutique"],
  },
  {
    id: "grand",
    name: "Grand",
    line: "100–300+ guests",
    description:
      "Multiple hotels, coach transfers, a hospitality desk and a run-of-show for every function. This is where central coordination matters most.",
    tags: [],
  },
  {
    id: "luxury",
    name: "Luxury",
    line: "Premium bespoke experience",
    description:
      "Palace and five-star venues, signature décor and a dedicated concierge for the families.",
    tags: ["luxury"],
  },
  {
    id: "mountain",
    name: "Mountain",
    line: "Nepal • Uttarakhand • Himachal",
    description:
      "Snow peaks as your backdrop. Plan around season, altitude and road access — we do that part.",
    tags: ["mountain"],
  },
  {
    id: "beach",
    name: "Beach",
    line: "Goa • Andaman • International Islands",
    description:
      "Sunset ceremonies, resort pools and barefoot evenings, with beach access where permitted.",
    tags: ["beach"],
  },
  {
    id: "spiritual",
    name: "Spiritual",
    line: "Triyuginarayan • Janakpur • Rishikesh • Lumbini",
    description:
      "Places where the ceremony carries the weight of tradition — planned respectfully, within temple and site guidelines.",
    tags: ["spiritual"],
  },
  {
    id: "heritage",
    name: "Heritage",
    line: "Kathmandu • Janakpur • Rajasthan",
    description:
      "Carved courtyards, temple squares and centuries-old architecture as part of the celebration.",
    tags: ["heritage"],
  },
  {
    id: "royal",
    name: "Royal",
    line: "Jaipur • Udaipur • Jodhpur • Jaisalmer",
    description:
      "Palaces, forts, grand baraats and décor at the scale of the venue.",
    tags: ["royal"],
  },
];
