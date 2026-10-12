// lib/europe/projection.ts
// Projection for the stylised Europe map. Dependency free and tiny, so client
// components can import it without pulling in the generated dot paths.

/** Must match the grid in ./map-grid.ts (96 cols × 75 rows; 0.8° lon × 0.5° lat cells from 25°W, 71.5°N). */
export const MAP_GRID = { lon0: -25, lat0: 71.5, lonStep: 0.8, latStep: 0.5, cell: 10, cols: 96, rows: 75 } as const;

export const MAP_W = MAP_GRID.cols * MAP_GRID.cell;
export const MAP_H = MAP_GRID.rows * MAP_GRID.cell;

export type Point = { x: number; y: number };

export const project = ([lat, lon]: [number, number]): Point => ({
  x: ((lon - MAP_GRID.lon0) / MAP_GRID.lonStep) * MAP_GRID.cell,
  y: ((MAP_GRID.lat0 - lat) / MAP_GRID.latStep) * MAP_GRID.cell,
});

/** Gentle arc between two projected points, bowed upwards. */
export function arcPath(a: Point, b: Point, maxBow = 120) {
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
  const bow = Math.min(maxBow, len * 0.22);
  return `M${a.x.toFixed(1)} ${a.y.toFixed(1)}Q${(mx + nx * bow).toFixed(1)} ${(my + ny * bow).toFixed(1)} ${b.x.toFixed(1)} ${b.y.toFixed(1)}`;
}

/** A multi-stop route as one path of gentle arcs. */
export function routePath(points: Point[]) {
  if (points.length < 2) return "";
  // Each arc starts with "M x y"; keep only the first so the path is continuous.
  const arcs = points.slice(1).map((p, i) => arcPath(points[i], p, 60));
  return arcs[0] + arcs.slice(1).map((a) => a.replace(/^M[^Q]+/, "")).join("");
}
