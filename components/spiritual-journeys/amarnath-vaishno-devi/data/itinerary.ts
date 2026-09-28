import type { ItineraryPlan } from "../types";

const DAY_1 = {
  day: 1,
  title: "Arrival in Jammu / Katra",
  shrine: "vaishno" as const,
  activities: [
    "Arrival at the designated pickup point",
    "Transfer to Katra and hotel check-in",
    "Shrine Board registration and preparation for the Vaishno Devi pilgrimage",
    "Overnight in Katra",
  ],
};

const DAY_2 = {
  day: 2,
  title: "Mata Vaishno Devi pilgrimage",
  shrine: "vaishno" as const,
  activities: [
    "Begin the pilgrimage from Katra",
    "Trek towards the Mata Vaishno Devi shrine",
    "Darshan",
    "Return to Katra according to your pace and the transport available",
    "Overnight in Katra",
  ],
};

export const ITINERARY_PLANS: ItineraryPlan[] = [
  {
    id: "baltal",
    label: "Via Baltal route",
    description:
      "A compact plan built around the Baltal route, where a same-day return from the cave may be possible under the official schedule.",
    days: [
      DAY_1,
      DAY_2,
      {
        day: 3,
        title: "Katra to Sonamarg / Baltal region",
        shrine: "amarnath",
        activities: [
          "Breakfast and a long scenic drive into Kashmir",
          "Check-in near the Baltal base",
          "Rest, document check and preparation for the Amarnath pilgrimage",
          "Overnight stay",
        ],
      },
      {
        day: 4,
        title: "Amarnath pilgrimage via Baltal",
        shrine: "amarnath",
        activities: [
          "Report for your permitted Yatra slot",
          "High-altitude pilgrimage towards the cave, on foot or with permitted services",
          "Darshan at Shri Amarnath Cave",
          "Return according to the official schedule and your condition",
        ],
        note: "If a same-day return isn't possible, an overnight stay along the route or at the base may be needed.",
      },
      {
        day: 5,
        title: "Rest and recovery",
        shrine: "kashmir",
        activities: ["A recovery day after the high-altitude walk", "Optional easy sightseeing around Sonamarg", "Overnight stay"],
      },
      {
        day: 6,
        title: "Srinagar (optional extension)",
        shrine: "kashmir",
        activities: ["Transfer to Srinagar", "Dal Lake", "Mughal gardens", "Local sightseeing", "Overnight in Srinagar"],
      },
      {
        day: 7,
        title: "Departure",
        shrine: "kashmir",
        activities: ["Breakfast", "Transfer to the designated departure point", "Tour concludes"],
      },
    ],
  },
  {
    id: "pahalgam",
    label: "Via Pahalgam route",
    description:
      "The traditional route is usually walked over more than one day, with overnight stays in camps along the way under official arrangements — so it needs a longer plan.",
    days: [
      DAY_1,
      DAY_2,
      {
        day: 3,
        title: "Katra to Pahalgam",
        shrine: "amarnath",
        activities: [
          "Breakfast and a scenic Himalayan drive to Pahalgam",
          "Check-in, rest and preparation for the Amarnath pilgrimage",
          "Overnight in Pahalgam",
        ],
      },
      {
        day: 4,
        title: "Amarnath pilgrimage begins",
        shrine: "amarnath",
        activities: [
          "Report for your permitted Yatra slot",
          "Set out on the traditional route towards Chandanwari and beyond",
          "Overnight at a pilgrimage camp as permitted",
        ],
      },
      {
        day: 5,
        title: "Onward to the cave",
        shrine: "amarnath",
        activities: [
          "Continue through high valleys and passes",
          "Darshan at Shri Amarnath Cave, according to the official schedule",
          "Overnight at a pilgrimage camp as permitted",
        ],
      },
      {
        day: 6,
        title: "Return from the pilgrimage",
        shrine: "amarnath",
        activities: [
          "Return along the permitted route — some pilgrims descend via Baltal",
          "Transfer to your hotel",
          "Overnight stay",
        ],
        note: "The return sequence depends on the route you're permitted and official arrangements on the day.",
      },
      {
        day: 7,
        title: "Pahalgam — rest day",
        shrine: "kashmir",
        activities: ["Recovery day", "Optional local sightseeing around Pahalgam", "Overnight in Pahalgam"],
      },
      {
        day: 8,
        title: "Srinagar (optional extension)",
        shrine: "kashmir",
        activities: ["Transfer to Srinagar", "Dal Lake and Mughal gardens", "Overnight in Srinagar"],
      },
      {
        day: 9,
        title: "Departure",
        shrine: "kashmir",
        activities: ["Breakfast", "Transfer to the designated departure point", "Tour concludes"],
      },
    ],
  },
];
