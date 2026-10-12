// data/russia/seasons.ts
// Seasonal guidance. Destinations are ids from ./destinations.ts.

import type { SeasonId } from "./destinations";

export const russiaSeasons: { id: SeasonId; label: string; months: string; text: string; destinations: string[] }[] = [
  {
    id: "spring",
    label: "Spring",
    months: "March – May",
    text: "Snow melts and parks turn green; a comfortable time for Moscow, Saint Petersburg and cultural circuits.",
    destinations: ["moscow", "saint-petersburg", "kazan", "golden-ring"],
  },
  {
    id: "summer",
    label: "Summer",
    months: "June – August",
    text: "Saint Petersburg's White Nights, long days in the Golden Ring, Lake Baikal by boat and the Black Sea at Sochi.",
    destinations: ["saint-petersburg", "moscow", "golden-ring", "lake-baikal", "sochi"],
  },
  {
    id: "autumn",
    label: "Autumn",
    months: "September – November",
    text: "Golden leaves and fewer crowds; good for photography, museums and historic towns.",
    destinations: ["moscow", "saint-petersburg", "golden-ring", "kazan", "nizhny-novgorod"],
  },
  {
    id: "winter",
    label: "Winter",
    months: "December – February",
    text: "Snowy Moscow, frozen Lake Baikal, Northern Lights near Murmansk and ski slopes above Sochi.",
    destinations: ["moscow", "lake-baikal", "murmansk", "sochi", "irkutsk"],
  },
];

export const SEASON_NOTE =
  "Weather, daylight, attraction opening and local conditions vary significantly by region and year. Check conditions for your dates before booking.";
