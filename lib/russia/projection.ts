// lib/russia/projection.ts
// Projection for the stylised Russia map. Tiny and dependency free so the
// client can import it without pulling in the dot grid.
// Cells are 1.4° of longitude × 0.7° of latitude drawn as squares, which
// roughly corrects for the shrinking of longitude at Russian latitudes.

/** Must match ./map-grid.ts (116 columns × 55 rows from 18°E, 78°N). */
export const RU_GRID = { lon0: 18, lat0: 78, stepX: 1.4, stepY: 0.7, cell: 10, cols: 116, rows: 55 } as const;

export const RU_MAP_W = RU_GRID.cols * RU_GRID.cell;
export const RU_MAP_H = RU_GRID.rows * RU_GRID.cell;

export type Point = { x: number; y: number };

export const projectRu = ([lat, lon]: [number, number]): Point => ({
  x: ((lon - RU_GRID.lon0) / RU_GRID.stepX) * RU_GRID.cell,
  y: ((RU_GRID.lat0 - lat) / RU_GRID.stepY) * RU_GRID.cell,
});

/** Smooth path through several points (Catmull-Rom → cubic Bézier). */
export function routeThrough(points: Point[]) {
  if (points.length < 2) return "";
  let d = `M${points[0].x.toFixed(1)} ${points[0].y.toFixed(1)}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i - 1] ?? points[i];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2] ?? p2;
    const c1 = { x: p1.x + (p2.x - p0.x) / 6, y: p1.y + (p2.y - p0.y) / 6 };
    const c2 = { x: p2.x - (p3.x - p1.x) / 6, y: p2.y - (p3.y - p1.y) / 6 };
    d += `C${c1.x.toFixed(1)} ${c1.y.toFixed(1)} ${c2.x.toFixed(1)} ${c2.y.toFixed(1)} ${p2.x.toFixed(1)} ${p2.y.toFixed(1)}`;
  }
  return d;
}
