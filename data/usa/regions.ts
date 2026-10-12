// data/usa/regions.ts
// Karvaahh travel regions for the USA. These are trip-planning groupings, not
// official census regions. Order = display order. States are listed so the
// map, filters and copy stay in sync with lib/usa/map-grid.ts.

import type { USAImageId } from "./images";

export type USRegion =
  | "northeast"
  | "southeast"
  | "midwest"
  | "southwest"
  | "west-coast"
  | "mountain-states"
  | "alaska"
  | "hawaii";

export interface USARegion {
  id: USRegion;
  name: string;
  /** One line for the region navigator. */
  tagline: string;
  description: string;
  states: string[];
  image?: USAImageId;
  /** Section on this page that tells the region's story. */
  sectionId?: string;
  /** Accent + fallback gradient. */
  tone: [string, string];
}

export const usaRegions: USARegion[] = [
  {
    id: "northeast",
    name: "Northeast",
    tagline: "Skylines, monuments & Niagara",
    description: "New York, Washington DC, Boston and Philadelphia, with Niagara Falls and New England's autumn colour close by.",
    states: ["New York", "New Jersey", "Pennsylvania", "Massachusetts", "Connecticut", "Rhode Island", "Vermont", "New Hampshire", "Maine", "Delaware", "Maryland", "District of Columbia"],
    image: "nyc-skyline",
    sectionId: "new-york",
    tone: ["#0e1a33", "#2c4a7a"],
  },
  {
    id: "southeast",
    name: "Southeast",
    tagline: "Theme parks, beaches & music",
    description: "Orlando's resorts, Miami's beaches, the Florida Keys, and the music cities of New Orleans and Nashville.",
    states: ["Florida", "Georgia", "Tennessee", "Louisiana", "North Carolina", "South Carolina", "Virginia", "West Virginia", "Kentucky", "Alabama", "Mississippi", "Arkansas"],
    image: "miami-beach",
    sectionId: "florida",
    tone: ["#0b3a4a", "#2a8f9a"],
  },
  {
    id: "midwest",
    name: "Midwest",
    tagline: "Architecture, lakes & museums",
    description: "Chicago's skyline and lakefront, plus Great Lakes cities with strong food and museum scenes.",
    states: ["Illinois", "Michigan", "Wisconsin", "Minnesota", "Ohio", "Indiana", "Iowa", "Missouri", "Kansas", "Nebraska", "North Dakota", "South Dakota"],
    image: "chicago",
    sectionId: "midwest",
    tone: ["#1c2a40", "#4b6a8f"],
  },
  {
    id: "southwest",
    name: "Southwest",
    tagline: "Desert icons & Las Vegas",
    description: "Las Vegas, the Grand Canyon, Antelope Canyon and Horseshoe Bend, plus the big cities of Texas.",
    states: ["Nevada", "Arizona", "New Mexico", "Texas", "Oklahoma"],
    image: "grand-canyon",
    sectionId: "southwest",
    tone: ["#3d1f14", "#b5622f"],
  },
  {
    id: "west-coast",
    name: "West Coast",
    tagline: "California dreaming",
    description: "Los Angeles, San Francisco and San Diego, the Pacific Coast Highway, wine country and the Pacific Northwest.",
    states: ["California", "Oregon", "Washington"],
    image: "golden-gate",
    sectionId: "california",
    tone: ["#13324a", "#d07a3a"],
  },
  {
    id: "mountain-states",
    name: "Mountain States",
    tagline: "Peaks, parks & wildlife",
    description: "Yellowstone, Grand Teton, the Rockies and Utah's national parks, with Denver and Salt Lake City as gateways.",
    states: ["Colorado", "Utah", "Wyoming", "Montana", "Idaho"],
    image: "teton",
    sectionId: "mountain-states",
    tone: ["#1b2f2a", "#5b8a6a"],
  },
  {
    id: "alaska",
    name: "Alaska",
    tagline: "Glaciers & Northern Lights",
    description: "Glaciers, wildlife, scenic rail and cruises in summer; Northern Lights around Fairbanks in the darker months.",
    states: ["Alaska"],
    image: "alaska-glacier",
    sectionId: "alaska",
    tone: ["#0b1d33", "#3f7f9a"],
  },
  {
    id: "hawaii",
    name: "Hawaii",
    tagline: "Island paradise",
    description: "Oahu, Maui, Kauai and the Big Island: beaches, volcanoes, dramatic coastlines and resort stays.",
    states: ["Hawaii"],
    image: "waikiki",
    sectionId: "hawaii",
    tone: ["#073b4c", "#1fa39a"],
  },
];

export const usaRegionById = (id: USRegion) => usaRegions.find((r) => r.id === id)!;
