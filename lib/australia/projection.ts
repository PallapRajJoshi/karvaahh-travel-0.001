// lib/australia/projection.ts
// Projection for the stylised Australia map. Tiny and dependency free so client
// components can import it without pulling in the dot grid.
// Cells are drawn as squares; longitude steps are wider than latitude steps to
// correct for the shrinking of longitude at Australian latitudes.

/** Must match ./map-grid.ts (99 columns × 91 rows). */
export const AU_GRID = { lon0: 112.6, lat0: -10.3, stepX: 0.42, stepY: 0.37, cell: 10, cols: 99, rows: 91 } as const;

export const AU_MAP_W = AU_GRID.cols * AU_GRID.cell;
export const AU_MAP_H = AU_GRID.rows * AU_GRID.cell;

export type Point = { x: number; y: number };

/** [latitude, longitude] → map point. */
export const projectAU = ([lat, lon]: [number, number]): Point => ({
  x: ((lon - AU_GRID.lon0) / AU_GRID.stepX) * AU_GRID.cell,
  y: ((AU_GRID.lat0 - lat) / AU_GRID.stepY) * AU_GRID.cell,
});

/** View box that frames a set of points with padding and a fixed aspect. */
export function viewBoxFor(points: Point[], aspect = 4 / 3, pad = 50, minW = 220) {
  const xs = points.map((p) => p.x);
  const ys = points.map((p) => p.y);
  const x0 = Math.min(...xs) - pad;
  const x1 = Math.max(...xs) + pad;
  const y0 = Math.min(...ys) - pad;
  const y1 = Math.max(...ys) + pad;
  const w = Math.min(AU_MAP_W, Math.max(x1 - x0, minW, (y1 - y0) * aspect));
  const h = w / aspect;
  const cx = (x0 + x1) / 2;
  const cy = (y0 + y1) / 2;
  const x = Math.min(Math.max(cx - w / 2, 0), AU_MAP_W - w);
  const y = Math.min(Math.max(cy - h / 2, 0), Math.max(0, AU_MAP_H - h));
  return { x, y, w, h };
}
