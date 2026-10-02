import type { SeasonCard } from "./types";

export const seasons: SeasonCard[] = [
  {
    id: "spring",
    season: "Spring",
    months: "March – May",
    points: [
      "Popular trekking season with changing alpine landscapes.",
      "Conditions vary with altitude, snow cover, and weather.",
    ],
  },
  {
    id: "summer-monsoon",
    season: "Summer / Monsoon",
    months: "June – August",
    points: [
      "Greener lower-valley landscapes.",
      "Rainfall may affect trails, road access, and visibility.",
    ],
  },
  {
    id: "autumn",
    season: "Autumn",
    months: "September – November",
    points: [
      "Popular season for trekking and mountain exploration.",
      "Conditions are often favorable for scenic views when weather permits.",
    ],
  },
  {
    id: "winter",
    season: "Winter",
    months: "December – February",
    points: [
      "Cold temperatures and possible heavy snowfall.",
      "High-altitude routes and passes may become inaccessible or hazardous.",
    ],
  },
];

export const seasonsDisclaimer =
  "Conditions vary by year. Tashi Lapcha Pass requires a separate, current assessment of seasonal feasibility.";
