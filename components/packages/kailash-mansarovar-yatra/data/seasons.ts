/**
 * Seasonal guidance. Never promise year-round access.
 */
import type { Season } from "../types";

export const seasonsHeading = {
  eyebrow: "When to Go",
  heading: "Choose the Right Season for Your Yatra",
  intro:
    "The main pilgrimage season is concentrated in the warmer months, roughly May to September. Exact departure windows depend on regional weather, permit issuance and operator schedules, and are announced each year.",
};

export const seasons: Season[] = [
  {
    id: "spring",
    name: "Spring",
    months: "March – May",
    status: "Season opening",
    icon: "leaf",
    summary: "Permits and routes typically begin to open towards late spring.",
    points: ["Cold nights, snow possible on Dolma La", "Early departures usually from May", "Good time to plan and apply"],
  },
  {
    id: "summer",
    name: "Summer",
    months: "June – August",
    status: "Main season",
    icon: "sun",
    summary: "The busiest period, with the mildest temperatures on the plateau.",
    points: [
      "Most group departures and full-moon yatras",
      "Monsoon in Nepal can delay Simikot flights and helicopters",
      "Book early for popular dates",
    ],
  },
  {
    id: "autumn",
    name: "Autumn",
    months: "September – November",
    status: "Season closing",
    icon: "mountain",
    summary: "September often brings clear skies; operations wind down as cold sets in.",
    points: ["Crisp views of Kailash", "Colder nights, especially on the Kora", "Late-season dates are limited"],
  },
  {
    id: "winter",
    name: "Winter",
    months: "December – February",
    status: "Generally closed",
    icon: "snow",
    summary: "Extreme cold and snow; pilgrimage tours are generally not operated.",
    points: ["Passes may be snowbound", "Permits generally not issued for the yatra", "Use this time to prepare"],
  },
];

export const seasonsAlert =
  "Conditions in the Tibetan Himalayas can change rapidly. Route availability, border status and permit issuance must be confirmed before booking — dates on any published schedule remain provisional until permits are granted.";
