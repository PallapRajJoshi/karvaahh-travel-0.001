// data/usa/seasons.ts
// Seasonal guidance. There is no single best time to visit the USA; these are
// general patterns that vary by region, elevation and year.

import type { SeasonId } from "./destinations";

export const usaSeasons: { id: SeasonId; label: string; months: string; text: string; destinations: string[] }[] = [
  {
    id: "spring",
    label: "Spring",
    months: "March – May",
    text: "Blossoms in Washington DC, comfortable city weather and desert parks before the summer heat.",
    destinations: ["washington-dc", "new-york", "grand-canyon", "zion", "las-vegas", "san-francisco", "new-orleans"],
  },
  {
    id: "summer",
    label: "Summer",
    months: "June – August",
    text: "The main season for Alaska, Yellowstone, Niagara boat tours, Chicago's lakefront and the Pacific Northwest.",
    destinations: ["anchorage", "yellowstone", "niagara-falls", "chicago", "seattle", "denali", "yosemite"],
  },
  {
    id: "autumn",
    label: "Autumn / Fall",
    months: "September – November",
    text: "New England's foliage, golden light in the national parks and pleasant temperatures in most cities.",
    destinations: ["boston", "new-york", "grand-canyon", "san-francisco", "napa", "nashville", "zion"],
  },
  {
    id: "winter",
    label: "Winter",
    months: "December – February",
    text: "Warm escapes to Florida and Hawaii, festive New York, Northern Lights in Alaska and Rocky Mountain skiing.",
    destinations: ["miami", "orlando", "honolulu", "key-west", "new-york", "fairbanks", "denver"],
  },
];

export const SEASON_NOTE =
  "There is no single best season for the whole USA. Weather, park access, daylight and events vary by region, elevation and year, so we check conditions for your dates.";

export type MatrixLevel = "great" | "good" | "limited";

/** Seasonal destination matrix. Notes explain any "limited" cell. */
export const seasonMatrix: { place: string; destinationId?: string; cells: Record<SeasonId, MatrixLevel>; note: string }[] = [
  { place: "New York & Washington DC", destinationId: "new-york", cells: { spring: "great", summer: "good", autumn: "great", winter: "good" }, note: "Year-round cities; summers are humid, winters cold but festive." },
  { place: "California coast", destinationId: "los-angeles", cells: { spring: "great", summer: "great", autumn: "great", winter: "good" }, note: "Broad year-round possibilities; coastal fog in early summer." },
  { place: "Florida", destinationId: "orlando", cells: { spring: "great", summer: "good", autumn: "good", winter: "great" }, note: "Warm all year; hurricane season is June to November." },
  { place: "Hawaii", destinationId: "honolulu", cells: { spring: "great", summer: "great", autumn: "great", winter: "great" }, note: "Warm year-round; winter brings bigger north-shore surf." },
  { place: "Las Vegas & Grand Canyon", destinationId: "grand-canyon", cells: { spring: "great", summer: "good", autumn: "great", winter: "good" }, note: "Summer is very hot in the desert; the North Rim is seasonal." },
  { place: "Yellowstone & Grand Teton", destinationId: "yellowstone", cells: { spring: "good", summer: "great", autumn: "good", winter: "limited" }, note: "Most park roads close to cars in winter; snowcoach tours only." },
  { place: "Alaska", destinationId: "anchorage", cells: { spring: "limited", summer: "great", autumn: "good", winter: "good" }, note: "Summer for glaciers, wildlife and cruises; winter for aurora in Fairbanks." },
  { place: "Niagara Falls", destinationId: "niagara-falls", cells: { spring: "good", summer: "great", autumn: "good", winter: "limited" }, note: "Boat tours are seasonal; winter views can be icy and dramatic." },
  { place: "New England", destinationId: "boston", cells: { spring: "good", summer: "great", autumn: "great", winter: "limited" }, note: "Autumn foliage is the highlight; timing varies each year." },
  { place: "Rockies & ski areas", destinationId: "denver", cells: { spring: "good", summer: "great", autumn: "good", winter: "great" }, note: "Winter is ski season; high mountain roads open in summer." },
];
