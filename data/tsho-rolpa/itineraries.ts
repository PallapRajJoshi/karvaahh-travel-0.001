import type { Itinerary } from "./types";

/**
 * Section 8 — sample itineraries, explicitly illustrative. No prices,
 * distances, or guaranteed schedules are stated per brief instruction.
 */
export const itineraries: Itinerary[] = [
  {
    id: "rolwaling-short-trek",
    label: "Rolwaling Valley Short Trek",
    duration: "5 Days / 4 Nights",
    days: [
      { day: "Day 1", summary: "Drive from Kathmandu toward Charikot and continue toward the trailhead, subject to road conditions." },
      { day: "Day 2", summary: "Trek through scenic trails and mountain settlements toward Bedhing." },
      { day: "Day 3", summary: "Continue toward Na Village and explore the surrounding landscapes." },
      { day: "Day 4", summary: "Continue toward the Tsho Rolpa region if route conditions and acclimatization allow." },
      { day: "Day 5", summary: "Begin the return journey." },
    ],
    note: "An illustrative outline — may require additional days for safe acclimatization and return travel.",
  },
  {
    id: "tsho-rolpa-adventure",
    label: "Tsho Rolpa Lake Trekking Adventure",
    duration: "7–9 Days",
    days: [
      { day: "Day 1", summary: "Travel from Kathmandu toward the Rolwaling Valley trailhead." },
      { day: "Day 2", summary: "Trek through lower valley landscapes and mountain settlements." },
      { day: "Day 3", summary: "Continue toward Bedhing and explore the village." },
      { day: "Day 4", summary: "Trek toward Na Village with appropriate acclimatization." },
      { day: "Day 5", summary: "Continue toward Tsho Rolpa Lake, subject to conditions." },
      { day: "Day 6", summary: "Explore the lake surroundings and nearby scenic viewpoints from safe routes." },
      { day: "Day 7", summary: "Begin the return trek." },
    ],
    note: "Additional rest days and return travel should be built in as required.",
  },
  {
    id: "tashi-lapcha-expedition",
    label: "Rolwaling & Tashi Lapcha Pass Expedition",
    duration: "12–16 Days",
    days: [
      { day: "Day 1", summary: "Travel toward the Rolwaling Valley." },
      { day: "Days 2–5", summary: "Trek through the valley and mountain settlements, allowing time for acclimatization." },
      { day: "Days 6–8", summary: "Explore the upper Rolwaling region and prepare for the high-altitude crossing." },
      { day: "Days 9–11", summary: "Attempt the Tashi Lapcha Pass crossing only if conditions, permits, and team readiness allow." },
      { day: "Remaining days", summary: "Continue toward the Everest region and complete the return journey through a verified route." },
    ],
    note: "A demanding expedition concept, not a guaranteed schedule — feasibility depends on season, route conditions, technical requirements, and experienced support.",
  },
];
