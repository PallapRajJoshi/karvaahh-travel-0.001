// lib/antarctica/map.ts
// Projection + artwork for the stylised polar map. Simple equirectangular
// projection compressed by cos(60°) on the x axis, which keeps the Scotia Sea
// in proportion. Coastlines are deliberately simplified artwork, not survey
// data; marker positions come from real coordinates.

export const MAP_W = 920;
export const MAP_H = 900;

/** [lat, lon] → SVG [x, y] in a 920×900 viewBox. Frame: 50°S–72°S, 75°W–30°W. */
export function project([lat, lon]: [number, number]): [number, number] {
  return [Math.round((lon + 75) * 20 + 10), Math.round((-50 - lat) * 40 + 10)];
}

/** As percentages, for HTML buttons laid over the SVG. */
export const projectPct = (c: [number, number]) => {
  const [x, y] = project(c);
  return { left: `${(x / MAP_W) * 100}%`, top: `${(y / MAP_H) * 100}%` };
};

export const ANTARCTIC_CIRCLE_Y = project([-66.56, -60])[1];

/** Sea waypoint at the eastern mouth of the Beagle Channel, so lines leave Ushuaia by water. */
export const BEAGLE_EXIT: [number, number] = [-55.05, -66.5];

/** Catmull-Rom → cubic Bézier through the points: a smooth voyage line. */
export function smoothPath(points: [number, number][]) {
  if (points.length < 2) return "";
  let d = `M${points[0][0]} ${points[0][1]}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i - 1] ?? points[i];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2] ?? p2;
    const c1x = p1[0] + (p2[0] - p0[0]) / 6;
    const c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6;
    const c2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += ` C${c1x.toFixed(1)} ${c1y.toFixed(1)}, ${c2x.toFixed(1)} ${c2y.toFixed(1)}, ${p2[0]} ${p2[1]}`;
  }
  return d;
}

/** Simplified land shapes (artwork). */
export const LAND = {
  southAmerica:
    "M0 0 L150 0 C 142 30 136 52 132 70 C 128 88 140 100 160 112 C 182 132 200 162 214 196 C 200 206 186 210 176 220 C 170 236 166 246 162 252 C 146 246 128 234 108 222 C 84 208 62 192 40 166 C 22 144 8 128 0 118 Z",
  falklandsWest: "M300 70 C 312 62 328 64 336 72 C 340 82 332 94 318 96 C 306 96 296 88 300 70 Z",
  falklandsEast: "M344 66 C 360 58 384 62 394 74 C 398 86 388 98 370 98 C 352 98 340 84 344 66 Z",
  southGeorgia: "M736 162 C 750 158 768 166 784 180 C 796 190 804 200 800 206 C 790 206 772 196 756 184 C 742 176 730 168 736 162 Z",
  southShetlands: [
    "M292 516 C 300 510 312 510 316 516 C 312 522 300 524 292 516 Z",
    "M318 506 C 328 498 342 498 348 504 C 344 512 330 514 318 506 Z",
    "M352 494 C 360 488 372 488 374 494 C 370 500 360 502 352 494 Z",
    "M398 452 C 406 446 418 448 420 454 C 414 460 404 460 398 452 Z",
  ],
  peninsula:
    "M372 540 C 352 544 330 550 306 562 C 284 574 264 590 246 608 C 230 624 214 642 198 660 C 184 676 172 690 162 708 C 150 734 136 766 118 800 C 100 834 72 868 40 900 L 300 900 C 290 868 282 834 280 800 C 280 764 284 728 292 694 C 300 662 310 632 324 606 C 338 582 356 560 372 540 Z",
  /** The main continent edge along the bottom of the frame (east of the Weddell Sea). */
  continentEdge: "M640 900 C 700 880 780 872 860 868 C 890 866 910 866 920 866 L 920 900 Z",
};
