// data/europe/seasons.ts
// Seasonal guidance for the "Best Time to Visit Europe" selector. `countries`
// are country ids (rendered with flags, linked to their cards); `extras` are
// themes that are not a single country.

export type SeasonId = "spring" | "summer" | "autumn" | "winter";

export interface EuropeSeason {
  id: SeasonId;
  label: string;
  months: string;
  text: string;
  countries: string[];
  extras?: string[];
}

export const europeSeasons: EuropeSeason[] = [
  {
    id: "spring",
    label: "Spring",
    months: "March – May",
    text: "Blossom, tulips and comfortable sightseeing weather before the summer crowds. A strong choice for cities and first-time trips.",
    countries: ["france", "netherlands", "italy", "spain", "czechia", "austria", "hungary"],
    extras: ["Tulip season in the Netherlands", "Central European capitals"],
  },
  {
    id: "summer",
    label: "Summer",
    months: "June – August",
    text: "Long days for Alpine passes, fjord cruises and island hopping. Mediterranean resorts are at their busiest and warmest.",
    countries: ["switzerland", "norway", "sweden", "greece", "croatia", "italy", "iceland"],
    extras: ["Midnight sun in the far north", "Mediterranean islands"],
  },
  {
    id: "autumn",
    label: "Autumn",
    months: "September – November",
    text: "Golden vineyards, quieter museums and still-warm southern coasts in September and early October.",
    countries: ["france", "italy", "switzerland", "austria", "czechia", "portugal", "greece"],
    extras: ["Harvest season in wine regions", "First auroras in the Arctic"],
  },
  {
    id: "winter",
    label: "Winter",
    months: "December – February",
    text: "Snow in the Alps, Christmas markets in late November and December, and the long dark nights that bring the Northern Lights.",
    countries: ["switzerland", "austria", "finland", "norway", "iceland", "germany", "czechia"],
    extras: ["Christmas markets", "Northern Lights", "Lapland"],
  },
];
