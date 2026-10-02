import type { SampleItinerary } from "./types";

export const ITINERARY_DISCLAIMER =
  "Illustrative concepts only. Actual travel times, accommodation, activity availability, park regulations and seasonal conditions are confirmed before any journey is presented as a bookable plan.";

export const ITINERARIES: SampleItinerary[] = [
  {
    id: "chitwan",
    title: "Chitwan Wildlife Escape",
    duration: "3 Days / 2 Nights — illustrative only",
    destination: "chitwan",
    summary: "A short Terai introduction to jungle habitats.",
    days: [
      {
        day: "Day 1",
        title: "Arrival in Chitwan",
        items: [
          "Arrive in the Chitwan area.",
          "Transfer to the selected accommodation.",
          "Enjoy leisure time and an introduction to the local environment.",
          "Optional nature activity where available.",
        ],
      },
      {
        day: "Day 2",
        title: "Jungle and Nature Exploration",
        items: [
          "Optional permitted safari experience.",
          "Explore the local natural surroundings.",
          "Optional birdwatching or nature walk where available.",
          "Enjoy a relaxing evening.",
        ],
      },
      {
        day: "Day 3",
        title: "Departure",
        items: [
          "Enjoy a peaceful morning.",
          "Optional short nature activity where available.",
          "Depart according to the confirmed travel arrangements.",
        ],
      },
    ],
  },
  {
    id: "bardia",
    title: "Bardia Wildlife Adventure",
    duration: "4 Days / 3 Nights — illustrative only",
    destination: "bardia",
    summary: "A wilder western Terai stay with room to slow down.",
    days: [
      {
        day: "Day 1",
        title: "Arrival in Bardia",
        items: [
          "Arrive in the Bardia area.",
          "Transfer to the selected accommodation.",
          "Enjoy leisure time and a destination introduction.",
        ],
      },
      {
        day: "Day 2",
        title: "Wildlife Exploration",
        items: [
          "Optional permitted wildlife safari.",
          "Explore forest and grassland landscapes.",
          "Enjoy wildlife observation and photography where appropriate.",
        ],
      },
      {
        day: "Day 3",
        title: "Nature and Birdwatching",
        items: [
          "Optional guided nature experience where available.",
          "Explore bird habitats and natural landscapes.",
          "Enjoy a peaceful evening.",
        ],
      },
      {
        day: "Day 4",
        title: "Departure",
        items: ["Enjoy breakfast and leisure time.", "Depart according to the confirmed travel arrangements."],
      },
    ],
  },
  {
    id: "koshi-tappu",
    title: "Koshi Tappu Birdwatching Escape",
    duration: "3 Days / 2 Nights — illustrative only",
    destination: "koshi-tappu",
    summary: "A wetland-focused stay built around birdlife.",
    days: [
      {
        day: "Day 1",
        title: "Arrival and Wetland Introduction",
        items: [
          "Arrive in the Koshi Tappu area.",
          "Transfer to the selected accommodation.",
          "Enjoy an introduction to the wetland ecosystem.",
        ],
      },
      {
        day: "Day 2",
        title: "Birdwatching and Nature Exploration",
        items: [
          "Optional guided birdwatching experience where available.",
          "Explore suitable wetland and river landscapes.",
          "Enjoy wildlife photography and nature observation.",
        ],
      },
      {
        day: "Day 3",
        title: "Morning Nature Experience and Departure",
        items: [
          "Optional morning birdwatching.",
          "Enjoy breakfast and departure according to the confirmed arrangements.",
        ],
      },
    ],
  },
  {
    id: "rara",
    title: "Rara Lake Nature Escape",
    duration: "4 Days / 3 Nights — illustrative only",
    destination: "rara",
    summary: "A remote, slow lakeside escape in the far-west Himalaya.",
    days: [
      {
        day: "Day 1",
        title: "Arrival in the Rara Region",
        items: [
          "Arrive according to the confirmed route and travel arrangements.",
          "Transfer to the selected accommodation or designated stay.",
          "Enjoy the surrounding scenery.",
        ],
      },
      {
        day: "Day 2",
        title: "Lakeside Exploration",
        items: [
          "Explore scenic areas around Rara Lake where permitted.",
          "Enjoy photography and nature observation.",
          "Experience the peaceful lake environment.",
        ],
      },
      {
        day: "Day 3",
        title: "Nature Walks and Scenic Exploration",
        items: [
          "Explore suitable forest trails and viewpoints.",
          "Enjoy landscape photography and relaxation.",
          "Return to the selected accommodation.",
        ],
      },
      {
        day: "Day 4",
        title: "Departure",
        items: ["Enjoy a relaxed morning.", "Depart according to the confirmed travel arrangements."],
      },
    ],
  },
];
