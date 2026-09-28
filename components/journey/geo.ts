export type LatLngTuple = [number, number];

export interface JourneyRoute {
  /** Densified, smoothed path through every stop. */
  path: LatLngTuple[];
  /** Cumulative distance (km) at each point of `path`. */
  cumulative: number[];
  /** Total length of the route in km. */
  total: number;
  /** Normalised 0–1 position of each original stop along the route. */
  waypointProgress: number[];
}

/** Points generated between each pair of stops. Higher = smoother, heavier. */
const SEGMENTS_PER_SPAN = 28;
const EARTH_RADIUS_KM = 6371;

function catmullRom(
  p0: LatLngTuple,
  p1: LatLngTuple,
  p2: LatLngTuple,
  p3: LatLngTuple,
  t: number,
): LatLngTuple {
  const t2 = t * t;
  const t3 = t2 * t;

  const axis = (a: number, b: number, c: number, d: number): number =>
    0.5 *
    (2 * b + (c - a) * t + (2 * a - 5 * b + 4 * c - d) * t2 + (-a + 3 * b - 3 * c + d) * t3);

  return [axis(p0[0], p1[0], p2[0], p3[0]), axis(p0[1], p1[1], p2[1], p3[1])];
}

export function haversine(a: LatLngTuple, b: LatLngTuple): number {
  const toRad = (deg: number): number => (deg * Math.PI) / 180;
  const dLat = toRad(b[0] - a[0]);
  const dLng = toRad(b[1] - a[1]);
  const lat1 = toRad(a[0]);
  const lat2 = toRad(b[0]);

  const h =
    Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;

  return 2 * EARTH_RADIUS_KM * Math.asin(Math.min(1, Math.sqrt(h)));
}

/**
 * Turns the raw stop coordinates into a smooth, densified route plus the
 * bookkeeping the scroll timeline needs to draw it progressively.
 */
export function buildRoute(stops: LatLngTuple[]): JourneyRoute {
  if (stops.length < 2) {
    return {
      path: [...stops],
      cumulative: stops.map(() => 0),
      total: 0,
      waypointProgress: stops.map(() => 0),
    };
  }

  const path: LatLngTuple[] = [];
  const waypointIndex: number[] = [];
  const last = stops.length - 1;

  for (let i = 0; i < last; i += 1) {
    const p0 = stops[Math.max(i - 1, 0)];
    const p1 = stops[i];
    const p2 = stops[i + 1];
    const p3 = stops[Math.min(i + 2, last)];

    waypointIndex.push(path.length);

    for (let j = 0; j < SEGMENTS_PER_SPAN; j += 1) {
      path.push(catmullRom(p0, p1, p2, p3, j / SEGMENTS_PER_SPAN));
    }
  }

  waypointIndex.push(path.length);
  path.push(stops[last]);

  const cumulative: number[] = new Array(path.length).fill(0);
  for (let i = 1; i < path.length; i += 1) {
    cumulative[i] = cumulative[i - 1] + haversine(path[i - 1], path[i]);
  }

  const total = cumulative[cumulative.length - 1] || 1;

  return {
    path,
    cumulative,
    total,
    waypointProgress: waypointIndex.map((index) => cumulative[index] / total),
  };
}

/** Position along the route at a normalised 0–1 progress value. */
export function pointAtProgress(route: JourneyRoute, progress: number): LatLngTuple {
  const target = Math.min(Math.max(progress, 0), 1) * route.total;
  const { cumulative, path } = route;

  let lo = 0;
  let hi = cumulative.length - 1;

  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (cumulative[mid] < target) lo = mid + 1;
    else hi = mid;
  }

  if (lo === 0) return path[0];

  const span = cumulative[lo] - cumulative[lo - 1] || 1;
  const t = (target - cumulative[lo - 1]) / span;
  const a = path[lo - 1];
  const b = path[lo];

  return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
}
