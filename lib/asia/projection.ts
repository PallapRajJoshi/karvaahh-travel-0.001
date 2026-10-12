// lib/asia/projection.ts
// Equirectangular projection for the stylised Asia map. Tiny and dependency
// free so the client can import it without pulling in the land grid.

/** Must match the grid in ./map-grid.ts (106 columns × 56 rows of 1.2° cells from 24°E, 56°N). */
export const MAP_GRID = { lon0: 24, lat0: 56, step: 1.2, cell: 10, cols: 106, rows: 56 } as const;

export const MAP_W = MAP_GRID.cols * MAP_GRID.cell;
export const MAP_H = MAP_GRID.rows * MAP_GRID.cell;

export type Point = { x: number; y: number };

export const project = ([lat, lon]: [number, number]): Point => ({
  x: ((lon - MAP_GRID.lon0) / MAP_GRID.step) * MAP_GRID.cell,
  y: ((MAP_GRID.lat0 - lat) / MAP_GRID.step) * MAP_GRID.cell,
});

/** Gentle arc between two projected points, bowed upwards. */
export function arcPath(a: Point, b: Point) {
  const mx = (a.x + b.x) / 2;
  const my = (a.y + b.y) / 2;
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const len = Math.hypot(dx, dy) || 1;
  let nx = -dy / len;
  let ny = dx / len;
  if (ny > 0) {
    nx = -nx;
    ny = -ny;
  }
  const bow = Math.min(140, len * 0.28);
  return `M${a.x.toFixed(1)} ${a.y.toFixed(1)}Q${(mx + nx * bow).toFixed(1)} ${(my + ny * bow).toFixed(1)} ${b.x.toFixed(1)} ${b.y.toFixed(1)}`;
}
