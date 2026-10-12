// data/russia/regions.ts
// Regions used to group Russia destinations. Order = display order.

export type RussiaRegionId =
  | "western-russia"
  | "volga"
  | "south"
  | "arctic-north"
  | "urals"
  | "siberia"
  | "far-east"
  | "baltic";

export interface RussiaRegion {
  id: RussiaRegionId;
  name: string;
  /** Two colours for the region accent and image fallback. */
  tone: [string, string];
}

export const russiaRegions: RussiaRegion[] = [
  { id: "western-russia", name: "Western Russia", tone: ["#1b2a4a", "#6b1f2e"] },
  { id: "volga", name: "Volga Region", tone: ["#1d3b4f", "#2f7d8a"] },
  { id: "south", name: "Black Sea & Caucasus", tone: ["#103f4a", "#2a8f9a"] },
  { id: "arctic-north", name: "Arctic North", tone: ["#0b1d33", "#1f6f6a"] },
  { id: "urals", name: "Ural Mountains", tone: ["#2a2440", "#6a4a7a"] },
  { id: "siberia", name: "Siberia", tone: ["#14304a", "#4f86b0"] },
  { id: "far-east", name: "Russian Far East", tone: ["#2b1a2e", "#8a3d3d"] },
  { id: "baltic", name: "Baltic Coast", tone: ["#1a3340", "#5a7f8f"] },
];

export const russiaRegionById = (id: RussiaRegionId) => russiaRegions.find((r) => r.id === id)!;
