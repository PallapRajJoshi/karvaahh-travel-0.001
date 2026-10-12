// lib/australia/map.ts
// Server-side map building. Imports the dot grid, so keep it out of client components.

import type { AustraliaRegion } from "@/data/australia/regions";
import { AU_ROWS } from "./map-grid";
import { AU_GRID } from "./projection";

const CODE: Record<string, AustraliaRegion> = {
  n: "new-south-wales",
  v: "victoria",
  q: "queensland",
  w: "western-australia",
  s: "south-australia",
  t: "tasmania",
  r: "northern-territory",
  a: "australian-capital-territory",
};

/**
 * One path per state or territory. Each run of cells is one horizontal line
 * drawn with `stroke-dasharray: 0 cell` and round caps, so thousands of dots
 * cost eight DOM nodes and a state is highlighted by restyling one path.
 */
export function australiaRegionPaths() {
  const { cell } = AU_GRID;
  const out = Object.fromEntries(Object.values(CODE).map((r) => [r, ""])) as Record<AustraliaRegion, string>;
  AU_ROWS.forEach((row, r) => {
    const y = (r + 0.5) * cell;
    let c = 0;
    while (c < row.length) {
      const ch = row[c];
      if (ch === "0") {
        c++;
        continue;
      }
      const start = c;
      while (c < row.length && row[c] === ch) c++;
      out[CODE[ch]] += `M${(start + 0.5) * cell} ${y}h${(c - 1 - start) * cell}`;
    }
  });
  return out;
}
