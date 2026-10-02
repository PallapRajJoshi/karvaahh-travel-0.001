import type { SeasonCard, AccessRoute, StartingPoint } from "./types";

// Section 11: Best Time to Visit
export const SEASONS: SeasonCard[] = [
  {
    id: "spring",
    season: "Spring",
    months: "March to May",
    points: [
      "Scenic landscapes and opportunities for nature exploration.",
      "Conditions vary with altitude and snow cover.",
    ],
  },
  {
    id: "summer-monsoon",
    season: "Summer / Monsoon",
    months: "June to August",
    points: [
      "Greener landscapes in lower areas.",
      "Rainfall may affect access routes and trekking conditions.",
    ],
  },
  {
    id: "autumn",
    season: "Autumn",
    months: "September to November",
    points: [
      "Popular season for trekking and mountain exploration.",
      "Often favorable for scenic views when weather conditions permit.",
    ],
  },
  {
    id: "winter",
    season: "Winter",
    months: "December to February",
    points: [
      "Cold temperatures and possible snowfall.",
      "High-altitude routes may become difficult or inaccessible.",
    ],
  },
];

export const SEASONS_NOTE =
  "Actual weather, flight operations, and trail accessibility vary by year and altitude.";

// Section 12: How to Reach Shey Phoksundo
export const ACCESS_ROUTES: AccessRoute[] = [
  {
    id: "by-air",
    mode: "air",
    title: "By Air",
    description:
      "The commonly used approach is through Nepalgunj and Juphal Airport, subject to current flight schedules and operating conditions. Onward travel from Juphal involves overland travel and trekking, depending on the chosen route.",
  },
  {
    id: "by-road",
    mode: "road",
    title: "By Road",
    description:
      "An overland approach to Dolpo is possible through challenging western Nepal road networks, depending on the starting point and current conditions.",
    highlights: [
      "Remote terrain",
      "Rugged roads",
      "Long travel times",
      "Seasonal disruptions",
      "Limited services in remote areas",
    ],
  },
];

export const STARTING_POINTS: StartingPoint[] = [
  { id: "kathmandu", name: "Kathmandu", description: "The typical starting point for onward connections toward Nepalgunj." },
  { id: "nepalgunj", name: "Nepalgunj", description: "The main gateway city for flights connecting toward Juphal." },
  { id: "juphal", name: "Juphal", description: "The airstrip serving the Dolpo region, subject to flight schedules." },
  { id: "dunai", name: "Dunai", description: "A district headquarters and staging point for onward routes into Dolpo." },
];

export const ACCESS_NOTE =
  "Distances, flight schedules, road durations, fares, and guaranteed connections are not specified here and should be verified before travel. Access to Phoksundo Lake is distinct from extended Upper Dolpo trekking routes.";
