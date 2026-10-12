// data/europe/travel-styles.ts
// One list of travel styles powers the quick filter bar, the "Europe by Travel
// Style" grid, the package cards and the trip builder. Countries and packages
// carry these ids; nothing is duplicated per category.

import type { EuropeImageKey } from "./images";

export type EuropeStyleId =
  | "honeymoon"
  | "family"
  | "luxury"
  | "budget"
  | "group"
  | "private"
  | "senior"
  | "adventure"
  | "romantic"
  | "cultural"
  | "food-wine"
  | "shopping"
  | "christmas-markets"
  | "summer"
  | "winter"
  | "northern-lights"
  | "alpine"
  | "beach"
  | "cruise"
  | "photography"
  | "first-time"
  | "city-breaks"
  | "multi-country";

export interface EuropeStyle {
  id: EuropeStyleId;
  /** Chip label. */
  label: string;
  /** Card heading in the travel-style grid, e.g. "Honeymoon Europe". */
  title: string;
  text: string;
  /** Shown in the quick filter bar under the hero. */
  quick?: boolean;
  image?: EuropeImageKey;
}

export const europeStyles: EuropeStyle[] = [
  { id: "honeymoon", label: "Honeymoon", title: "Honeymoon Europe", text: "Venice, Santorini, Paris and the Alps, paced for two.", quick: true, image: "veniceRialto" },
  { id: "family", label: "Family", title: "Family Europe", text: "Theme parks, easy trains and family rooms.", quick: true, image: "londonAerial" },
  { id: "luxury", label: "Luxury", title: "Luxury Europe", text: "Premium hotels, private guides and scenic trains.", quick: true, image: "lauterbrunnen" },
  { id: "budget", label: "Budget", title: "Budget Europe", text: "Central Europe and the Balkans at a gentler price.", quick: true, image: "budapestAerial" },
  { id: "adventure", label: "Adventure", title: "Adventure Europe", text: "Glaciers, fjords, alpine trails and road trips.", quick: true, image: "icelandVestrahorn" },
  { id: "city-breaks", label: "City Breaks", title: "City Breaks", text: "Short, walkable trips to one or two great cities.", quick: true, image: "pragueOldTown" },
  { id: "winter", label: "Christmas & Winter", title: "Winter Europe", text: "Snowy Alps, Lapland and festive capitals.", quick: true, image: "snowyPromenade" },
  { id: "summer", label: "Summer Holidays", title: "Summer Europe", text: "Long days on islands, lakes and coastlines.", quick: true, image: "mykonos" },
  { id: "multi-country", label: "Multi-Country Tours", title: "Multi-Country Europe", text: "Two, three or more countries in one trip.", quick: true, image: "parisBridge" },
  { id: "group", label: "Group Tours", title: "Group Tours", text: "Shared itineraries for friends, families and associations.", image: "veniceGrandCanal" },
  { id: "private", label: "Private Tours", title: "Private Europe", text: "Your own vehicle, guide and pace.", image: "belvedere" },
  { id: "senior", label: "Senior-Friendly", title: "Senior-Friendly Europe", text: "Fewer hotel changes, rail travel and step-light sightseeing.", image: "pragueCruise" },
  { id: "romantic", label: "Romantic", title: "Romantic Europe", text: "Sunsets, gondolas, lake towns and candle-lit dinners.", image: "santoriniDusk" },
  { id: "cultural", label: "Cultural", title: "Cultural Europe", text: "Museums, cathedrals, palaces and old towns.", image: "florence" },
  { id: "food-wine", label: "Food & Wine", title: "Food & Wine", text: "Tapas, pasta, pastries and vineyard country.", image: "paella" },
  { id: "shopping", label: "Shopping", title: "Shopping Europe", text: "Paris, Milan, London and outlet villages.", image: "madrid" },
  { id: "christmas-markets", label: "Christmas Markets", title: "Christmas Markets", text: "Vienna, Prague, Germany and more, late November to December.", image: "christmasLights" },
  { id: "northern-lights", label: "Northern Lights", title: "Northern Lights", text: "Norway, Finland, Iceland and Sweden in the dark months.", image: "auroraForest" },
  { id: "alpine", label: "Alpine Holidays", title: "Alpine Holidays", text: "Swiss, Austrian and Italian mountains, summer or snow.", image: "alpineLake" },
  { id: "beach", label: "Beach Holidays", title: "Beach Holidays", text: "Greek islands, Croatia, the Algarve and the Amalfi Coast.", image: "amalfi" },
  { id: "cruise", label: "Cruise Holidays", title: "Cruise Holidays", text: "Danube river cruises, fjord sailings and island ferries.", image: "fjord" },
  { id: "photography", label: "Photography", title: "Photography Tours", text: "Lofoten, Iceland, the Dolomites and golden-hour cities.", image: "lofoten" },
  { id: "first-time", label: "First-Time Europe", title: "First-Time Europe", text: "The classic Paris–Swiss–Italy route, done well.", image: "eiffel" },
];

export const styleById = (id: EuropeStyleId) => europeStyles.find((s) => s.id === id)!;
export const styleLabel = (id: EuropeStyleId) => styleById(id)?.label ?? id;
export const quickStyles = europeStyles.filter((s) => s.quick);
