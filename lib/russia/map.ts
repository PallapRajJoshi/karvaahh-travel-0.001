// lib/russia/map.ts
// Server-side map building. Imports the dot grid, so keep it out of client components.

import { RU_ROWS } from "./map-grid";
import { RU_GRID } from "./projection";

/**
 * Two paths: Russia and neighbouring land. Each run of cells is one horizontal
 * line drawn with `stroke-dasharray: 0 cell` and round caps, so thousands of
 * dots cost two DOM nodes.
 */
export function russiaDotsPaths() {
  const { cell } = RU_GRID;
  const out = { russia: "", other: "" };
  RU_ROWS.forEach((row, r) => {
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
      const seg = `M${(start + 0.5) * cell} ${y}h${(c - 1 - start) * cell}`;
      if (ch === "1") out.russia += seg;
      else out.other += seg;
    }
  });
  return out;
}
