// lib/usa/map.ts
// Server-side map building. Imports the dot grid, so keep it out of client components.

import type { USRegion } from "@/data/usa/regions";
import { US_ROWS } from "./map-grid";
import { US_GRID } from "./projection";

const CODE: Record<string, USRegion> = {
  n: "northeast",
  s: "southeast",
  m: "midwest",
  w: "southwest",
  c: "west-coast",
  r: "mountain-states",
  a: "alaska",
  h: "hawaii",
};

/**
 * One path per region. Each run of cells is one horizontal line drawn with
 * `stroke-dasharray: 0 cell` and round caps, so thousands of dots cost eight
 * DOM nodes and a region can be highlighted by restyling one path.
 */
export function usaRegionPaths() {
  const { cell } = US_GRID;
  const out = Object.fromEntries(Object.values(CODE).map((r) => [r, ""])) as Record<USRegion, string>;
  US_ROWS.forEach((row, r) => {
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
