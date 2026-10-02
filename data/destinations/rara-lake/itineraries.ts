import type { Itinerary } from "./types";

/**
 * Illustrative, customizable sample itineraries — not verified operational
 * schedules. No transport connections or guaranteed travel times are implied.
 */
export const itineraries: Itinerary[] = [
  {
    id: "rara-short-escape",
    code: "A",
    title: "Rara Short Escape",
    duration: "3 Days / 2 Nights",
    tagline: "A compact introduction to Rara for travelers short on time.",
    days: [
      { day: 1, summary: "Arrival and transfer to the Rara region." },
      { day: 2, summary: "Lakeside exploration and viewpoint visit." },
      { day: 3, summary: "Return journey." },
    ],
  },
  {
    id: "rara-nature-culture",
    code: "B",
    title: "Rara Nature & Culture",
    duration: "5 Days / 4 Nights",
    tagline: "A fuller pace that pairs lakeside time with a viewpoint hike and village culture.",
    days: [
      { day: 1, summary: "Arrival and transfer to Rara." },
      { day: 2, summary: "Lakeside exploration and nature photography." },
      { day: 3, summary: "Murma Top hike and scenic viewpoints." },
      { day: 4, summary: "Local village exploration and cultural experiences." },
      { day: 5, summary: "Return journey." },
    ],
  },
  {
    id: "rara-western-nepal",
    code: "C",
    title: "Rara & Western Nepal Exploration",
    duration: "7 Days / 6 Nights",
    tagline: "An extended route through Rara and the wider Karnali region, with an optional cultural extension.",
    days: [
      { day: 1, summary: "Arrival and transfer to the Rara region." },
      { day: 2, summary: "Rara Lake exploration and scenic hikes." },
      { day: 3, summary: "Murma Village and nearby cultural experiences." },
      { day: 4, summary: "Additional exploration around Gamgadhi." },
      { day: 5, summary: "Optional extension toward Jumla or Sinja Valley, subject to route feasibility." },
      { day: 6, summary: "Continued regional exploration or rest day." },
      { day: 7, summary: "Return journey." },
    ],
  },
];

export const itinerariesNote =
  "These are illustrative, customizable sample itineraries, not verified operational schedules. Transport connections and travel times are not guaranteed and should be confirmed at the time of booking.";
