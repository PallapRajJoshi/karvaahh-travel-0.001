import type { ItineraryOption } from "./types";

// Section 8: Suggested Itineraries. All are customizable concepts — no confirmed
// schedules, flight timings, or exact travel durations are implied.

const CUSTOMIZABLE_DISCLAIMER =
  "A customizable concept itinerary. Transport, trail conditions, and permit requirements must be verified before travel.";

export const ITINERARIES: ItineraryOption[] = [
  {
    id: "phoksundo-lake-escape",
    optionLabel: "Option A",
    title: "Phoksundo Lake Escape",
    duration: "4 Days / 3 Nights",
    days: [
      { day: "Day 1", summary: "Travel to Nepalgunj and connect toward Juphal, subject to flight availability." },
      { day: "Day 2", summary: "Continue toward the Phoksundo region and explore the surrounding landscapes." },
      { day: "Day 3", summary: "Explore Phoksundo Lake, Ringmo Village, and nearby cultural landmarks." },
      { day: "Day 4", summary: "Return via the appropriate departure route." },
    ],
    disclaimer: CUSTOMIZABLE_DISCLAIMER,
  },
  {
    id: "lower-dolpo-nature-culture",
    optionLabel: "Option B",
    title: "Lower Dolpo Nature & Culture",
    duration: "7 Days / 6 Nights",
    days: [
      { day: "Day 1", summary: "Travel toward Nepalgunj." },
      { day: "Day 2", summary: "Connect to Juphal and continue toward the Dolpo region, subject to transport availability." },
      { day: "Day 3", summary: "Explore the Phoksundo Lake region." },
      { day: "Day 4", summary: "Explore Ringmo Village, Tshowa Bon Monastery, and nearby landscapes." },
      { day: "Day 5", summary: "Continue with a suitable local trekking or cultural exploration route." },
      { day: "Day 6", summary: "Return toward the departure point." },
      { day: "Day 7", summary: "Complete the return journey." },
    ],
    disclaimer: CUSTOMIZABLE_DISCLAIMER,
  },
  {
    id: "upper-dolpo-expedition",
    optionLabel: "Option C",
    title: "Upper Dolpo Cultural & Wilderness Expedition",
    duration: "12–18 Days",
    days: [
      { day: "Overview", summary: "A multi-day expedition through selected areas of Upper Dolpo." },
      { day: "Possible destinations", summary: "Shey Gompa, Crystal Mountain, Saldang, and Dho Tarap, subject to route feasibility and required permits." },
      { day: "Planning", summary: "Incorporates acclimatization, rest days, local logistics, and contingency time." },
    ],
    disclaimer:
      "Itinerary duration is indicative and depends on the chosen route and travel arrangements. " +
      CUSTOMIZABLE_DISCLAIMER,
  },
];
