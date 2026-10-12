// data/europe/regions.ts
// Regions for /packages/international/europe.
//
// A country has one `region` (where its card is grouped in the directory) and any
// number of extra `regions` tags. "Scandinavia" and "Mediterranean" are filter-only
// tags that cut across the directory groups; "Turkey & the Caucasus" groups the
// transcontinental, Europe-marketed destinations. Order here is the page order.

export type EuropeRegionId =
  | "western-europe"
  | "central-europe"
  | "southern-europe"
  | "northern-europe"
  | "eastern-europe"
  | "balkans"
  | "scandinavia"
  | "mediterranean"
  | "turkey-caucasus";

export interface EuropeRegion {
  id: EuropeRegionId;
  name: string;
  /** Short label for filter chips. */
  short: string;
  tagline: string;
  /** Two colours for the accent bar and the image fallback. */
  tone: [string, string];
  /** True when countries are grouped under this region in the directory. */
  group: boolean;
  /** True when shown in the quick filter bar. */
  filter: boolean;
}

export const europeRegions: EuropeRegion[] = [
  {
    id: "western-europe",
    name: "Western Europe",
    short: "Western",
    tagline: "Grand capitals, royal landmarks, canals and storybook countryside.",
    tone: ["#1c2f52", "#4a6fa5"],
    group: true,
    filter: true,
  },
  {
    id: "central-europe",
    name: "Central Europe & the Alps",
    short: "Central",
    tagline: "Alpine railways, imperial cities, lakes and fairy-tale old towns.",
    tone: ["#1f3d3a", "#4f8f7f"],
    group: true,
    filter: true,
  },
  {
    id: "southern-europe",
    name: "Southern Europe & Mediterranean",
    short: "Southern",
    tagline: "Islands, coastlines, Renaissance art and long, sunlit dinners.",
    tone: ["#0d3b5c", "#2a8bb8"],
    group: true,
    filter: true,
  },
  {
    id: "northern-europe",
    name: "Northern Europe & Scandinavia",
    short: "Northern",
    tagline: "Fjords, design capitals, midnight sun and winter auroras.",
    tone: ["#14263d", "#3d6d8f"],
    group: true,
    filter: true,
  },
  {
    id: "balkans",
    name: "Balkans & Southeastern Europe",
    short: "Balkans",
    tagline: "Adriatic bays, Ottoman bridges, lake towns and good-value travel.",
    tone: ["#3b2a1a", "#a8743b"],
    group: true,
    filter: true,
  },
  {
    id: "eastern-europe",
    name: "Eastern Europe",
    short: "Eastern",
    tagline: "Gothic squares, Danube cities and wine country at a gentler price.",
    tone: ["#3a1f2b", "#9a4f68"],
    group: true,
    filter: true,
  },
  {
    id: "turkey-caucasus",
    name: "Turkey & the Caucasus",
    short: "Turkey & Caucasus",
    tagline: "Transcontinental destinations often combined with European journeys.",
    tone: ["#3d2414", "#b5652e"],
    group: true,
    filter: false,
  },
  {
    id: "scandinavia",
    name: "Scandinavia",
    short: "Scandinavia",
    tagline: "Norway, Sweden and Denmark, with Finland and Iceland often added.",
    tone: ["#14263d", "#3d6d8f"],
    group: false,
    filter: true,
  },
  {
    id: "mediterranean",
    name: "Mediterranean",
    short: "Mediterranean",
    tagline: "Coastlines and islands from Spain to Cyprus.",
    tone: ["#0d3b5c", "#2a8bb8"],
    group: false,
    filter: true,
  },
];

export const regionById = (id: EuropeRegionId) => europeRegions.find((r) => r.id === id)!;
export const groupRegions = europeRegions.filter((r) => r.group);
export const filterRegions = europeRegions.filter((r) => r.filter);
