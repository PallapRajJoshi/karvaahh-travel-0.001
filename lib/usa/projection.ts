// lib/usa/projection.ts
// Projection for the stylised USA map. Tiny and dependency free so client
// components can import it without pulling in the dot grid.
// The mainland and the Alaska / Hawaii insets each have their own frame, the
// way printed US maps do. Cells are drawn as squares; longitude steps are
// wider than latitude steps to correct for the shrinking of longitude.

/** Must match ./map-grid.ts (107 columns × 66 rows). */
export const US_GRID = { cell: 10, cols: 107, rows: 66 } as const;

type Frame = { lon0: number; lat0: number; stepX: number; stepY: number; col0: number; row0: number };

export const US_FRAMES: Record<"main" | "alaska" | "hawaii", Frame> = {
  main: { lon0: -125, lat0: 49.6, stepX: 0.55, stepY: 0.44, col0: 0, row0: 0 },
  alaska: { lon0: -170, lat0: 71.6, stepX: 1.9, stepY: 0.86, col0: 0, row0: 44 },
  hawaii: { lon0: -160.4, lat0: 22.4, stepX: 0.3, stepY: 0.29, col0: 28, row0: 54 },
};

export const US_MAP_W = US_GRID.cols * US_GRID.cell;
export const US_MAP_H = US_GRID.rows * US_GRID.cell;

export type Point = { x: number; y: number };

const frameFor = (lat: number, lon: number) =>
  lat > 51 && lon < -129 ? US_FRAMES.alaska : lat < 23.5 && lon < -154 ? US_FRAMES.hawaii : US_FRAMES.main;

/** [latitude, longitude] → map point, picking the mainland or inset frame. */
export function projectUS([lat, lon]: [number, number]): Point {
  const f = frameFor(lat, lon);
  return {
    x: (f.col0 + (lon - f.lon0) / f.stepX) * US_GRID.cell,
    y: (f.row0 + (f.lat0 - lat) / f.stepY) * US_GRID.cell,
  };
}

/** Insets are drawn in their own frames, so a route never crosses into them. */
export const isInset = ([lat, lon]: [number, number]) => frameFor(lat, lon) !== US_FRAMES.main;

/** View box that frames a set of points with padding and a fixed aspect. */
export function viewBoxFor(points: Point[], aspect = 4 / 3, pad = 50, minW = 220) {
  const xs = points.map((p) => p.x);
  const ys = points.map((p) => p.y);
  const x0 = Math.min(...xs) - pad;
  const x1 = Math.max(...xs) + pad;
  const y0 = Math.min(...ys) - pad;
  const y1 = Math.max(...ys) + pad;
  const w = Math.min(US_MAP_W, Math.max(x1 - x0, minW, (y1 - y0) * aspect));
  const h = w / aspect;
  const cx = (x0 + x1) / 2;
  const cy = (y0 + y1) / 2;
  const x = Math.min(Math.max(cx - w / 2, 0), US_MAP_W - w);
  const y = Math.min(Math.max(cy - h / 2, 0), Math.max(0, US_MAP_H - h));
  return { x, y, w, h };
}
