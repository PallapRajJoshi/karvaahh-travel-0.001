// lib/south-africa/map.ts
// Projection + artwork for the stylised South Africa map. Equirectangular,
// x compressed by cos(29°) so the country keeps its proportions. The outline
// is a simplified trace through real border and coastline coordinates;
// markers use real coordinates.

export const MAP_W = 940;
export const MAP_H = 820;

/** [lat, lon] → SVG [x, y]. Frame: 22°S–35°S, 16°E–33°E. */
export function project([lat, lon]: [number, number]): [number, number] {
  return [Math.round((lon - 16) * 52.5 + 20), Math.round((-22 - lat) * 60 + 20)];
}

export const projectPct = (c: [number, number]) => {
  const [x, y] = project(c);
  return { left: `${(x / MAP_W) * 100}%`, top: `${(y / MAP_H) * 100}%` };
};

const toPath = (pts: [number, number][]) =>
  pts.map((c, i) => {
    const [x, y] = project(c);
    return `${i ? "L" : "M"}${x} ${y}`;
  }).join(" ") + " Z";

/** Simplified national outline, clockwise from the Orange River mouth. */
const OUTLINE: [number, number][] = [
  [-28.63, 16.45], [-28.2, 17.2], [-28.7, 18.2], [-28.4, 19.2], [-28.4, 20.0], [-24.75, 20.0],
  [-25.8, 20.7], [-26.8, 20.6], [-26.7, 21.8], [-25.9, 22.9], [-25.6, 24.0], [-25.7, 25.4], [-24.7, 25.9],
  [-24.0, 26.9], [-23.0, 27.9], [-22.6, 28.6], [-22.15, 29.9], [-22.42, 31.3], [-23.5, 31.6], [-24.5, 31.98],
  [-25.43, 31.95], [-25.75, 31.3], [-25.95, 30.8], [-26.8, 30.8], [-27.3, 31.2], [-27.3, 31.95], [-26.87, 32.89],
  [-27.5, 32.7], [-28.4, 32.4], [-28.8, 32.1], [-29.86, 31.03], [-30.6, 30.6], [-31.05, 30.2], [-31.6, 29.5],
  [-32.2, 28.8], [-33.0, 27.9], [-33.6, 26.9], [-33.96, 25.62], [-34.2, 24.83], [-34.0, 23.4], [-34.05, 23.05],
  [-34.18, 22.14], [-34.4, 21.4], [-34.83, 20.0], [-34.6, 19.4], [-34.42, 19.24], [-34.2, 18.85], [-34.36, 18.48],
  [-34.0, 18.32], [-33.9, 18.4], [-33.4, 18.1], [-33.0, 17.95], [-32.7, 18.0], [-32.1, 18.3], [-31.5, 17.95],
  [-30.3, 17.27], [-29.25, 16.87],
];

const LESOTHO: [number, number][] = [
  [-28.6, 28.6], [-28.75, 29.4], [-29.3, 29.45], [-29.9, 29.2], [-30.6, 28.4], [-30.5, 27.4], [-29.9, 27.0], [-29.3, 27.3], [-28.8, 28.0],
];

const ESWATINI: [number, number][] = [
  [-25.75, 31.3], [-25.95, 30.8], [-26.8, 30.8], [-27.3, 31.2], [-27.3, 31.95], [-26.4, 32.1], [-25.95, 32.0], [-25.43, 31.95],
];

export const LAND = { country: toPath(OUTLINE), lesotho: toPath(LESOTHO), eswatini: toPath(ESWATINI) };

export const MAP_LABELS: { text: string; at: [number, number]; kind: "country" | "ocean" }[] = [
  { text: "NAMIBIA", at: [-25.6, 17.6], kind: "country" },
  { text: "BOTSWANA", at: [-23.6, 23.4], kind: "country" },
  { text: "ZIMBABWE", at: [-22.4, 29.3], kind: "country" },
  { text: "MOZAMBIQUE", at: [-23.4, 32.0], kind: "country" },
  { text: "LESOTHO", at: [-29.75, 28.25], kind: "country" },
  { text: "ATLANTIC OCEAN", at: [-31.6, 16.4], kind: "ocean" },
  { text: "INDIAN OCEAN", at: [-33.6, 28.6], kind: "ocean" },
];

/** Catmull-Rom → cubic Bézier: a smooth route line through the points. */
export function smoothPath(points: [number, number][]) {
  if (points.length < 2) return "";
  let d = `M${points[0][0]} ${points[0][1]}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i - 1] ?? points[i];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2] ?? p2;
    d += ` C${(p1[0] + (p2[0] - p0[0]) / 6).toFixed(1)} ${(p1[1] + (p2[1] - p0[1]) / 6).toFixed(1)}, ${(p2[0] - (p3[0] - p1[0]) / 6).toFixed(1)} ${(p2[1] - (p3[1] - p1[1]) / 6).toFixed(1)}, ${p2[0]} ${p2[1]}`;
  }
  return d;
}

/** One straight-ish arc per leg, so flown and driven legs can be styled separately. */
export function legPaths(points: [number, number][]) {
  return points.slice(0, -1).map((a, i) => {
    const b = points[i + 1];
    const mx = (a[0] + b[0]) / 2;
    const my = (a[1] + b[1]) / 2;
    const dx = b[0] - a[0];
    const dy = b[1] - a[1];
    const bend = Math.min(60, Math.hypot(dx, dy) * 0.18);
    const len = Math.hypot(dx, dy) || 1;
    const cx = mx - (dy / len) * bend;
    const cy = my + (dx / len) * bend;
    return `M${a[0]} ${a[1]} Q${cx.toFixed(1)} ${cy.toFixed(1)} ${b[0]} ${b[1]}`;
  });
}
