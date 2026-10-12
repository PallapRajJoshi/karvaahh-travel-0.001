// lib/asia/map.ts
// Server-side map building. Imports the land grid, so keep it out of client components.

import { LAND_ROWS } from "./map-grid";
import { MAP_GRID } from "./projection";

/**
 * The land mask as one path. Each run of land cells becomes a horizontal line;
 * drawn with `stroke-dasharray: 0 cell` and round caps it renders as a row of
 * dots, so ~2,000 dots cost a single DOM node.
 */
export function landDotsPath() {
  const { cell } = MAP_GRID;
  let d = "";
  LAND_ROWS.forEach((row, r) => {
    const y = (r + 0.5) * cell;
    let c = 0;
    while (c < row.length) {
      if (row[c] !== "1") {
        c++;
        continue;
      }
      const start = c;
      while (c < row.length && row[c] === "1") c++;
      d += `M${(start + 0.5) * cell} ${y}h${(c - 1 - start) * cell}`;
    }
  });
  return d;
}
