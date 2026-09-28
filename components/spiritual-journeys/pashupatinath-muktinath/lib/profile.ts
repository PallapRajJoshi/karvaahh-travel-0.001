/**
 * Geometry for the stylised elevation profile.
 * X positions are evenly spaced (not distance-proportional) and the chart
 * says so in its caption; Y is linear in approximate elevation.
 */
export const PROFILE = {
  width: 1000,
  height: 300,
  top: 34,
  bottom: 272,
  maxElevation: 4000,
} as const;

export interface ProfilePoint {
  x: number;
  y: number;
}

export function elevationToY(m: number): number {
  const { top, bottom, maxElevation } = PROFILE;
  return +(bottom - (m / maxElevation) * (bottom - top)).toFixed(2);
}

/** Centre of column i of n across the chart width. */
export function columnX(i: number, n: number): number {
  return +(((i + 0.5) / n) * PROFILE.width).toFixed(2);
}

/** Smooth path through points (Catmull-Rom converted to cubic Béziers). */
export function smoothPath(points: ProfilePoint[]): string {
  if (points.length < 2) return "";
  const pts = [points[0]!, ...points, points[points.length - 1]!];
  let d = `M${points[0]!.x} ${points[0]!.y}`;
  for (let i = 1; i < pts.length - 2; i++) {
    const p0 = pts[i - 1]!;
    const p1 = pts[i]!;
    const p2 = pts[i + 1]!;
    const p3 = pts[i + 2]!;
    const c1x = p1.x + (p2.x - p0.x) / 6;
    const c1y = p1.y + (p2.y - p0.y) / 6;
    const c2x = p2.x - (p3.x - p1.x) / 6;
    const c2y = p2.y - (p3.y - p1.y) / 6;
    d += ` C${c1x.toFixed(1)} ${c1y.toFixed(1)} ${c2x.toFixed(1)} ${c2y.toFixed(1)} ${p2.x} ${p2.y}`;
  }
  return d;
}
