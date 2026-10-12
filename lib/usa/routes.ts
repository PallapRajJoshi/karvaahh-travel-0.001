// lib/usa/routes.ts
// Route geometry for journey maps. Grid-free, so client components can use it.

import type { CircuitStop, LegMode, USACircuit } from "@/data/usa/circuits";
import { usaDestinations } from "@/data/usa/destinations";
import type { TravelStyle } from "@/data/usa/travel-styles";
import { arcPath } from "@/lib/asia/projection";
import { routeThrough } from "@/lib/russia/projection";
import { isInset, projectUS, type Point } from "./projection";

export type RouteStop = { name: string; coords: [number, number] };
export type RouteView = { path: string; points: (Point & { name: string })[] };

/**
 * Path through route stops. Ground legs curve smoothly; a leg to or from an
 * inset (Alaska, Hawaii) is drawn as a separate flight arc, since insets are
 * not in their real position.
 */
export function routeView(stops: RouteStop[]): RouteView {
  const pts = stops.map((s) => ({ ...projectUS(s.coords), name: s.name, inset: isInset(s.coords) }));
  let d = "";
  let run: Point[] = [];
  const flush = () => {
    if (run.length > 1) d += routeThrough(run);
    run = [];
  };
  pts.forEach((p, i) => {
    const prev = pts[i - 1];
    if (prev && prev.inset !== p.inset) {
      flush();
      d += arcPath(prev, p);
    }
    run.push(p);
  });
  flush();
  return { path: d, points: pts.map(({ x, y, name }) => ({ x, y, name })) };
}

// ─────────── circuit → journey view ───────────


export interface JourneyView {
  id: string;
  title: string;
  duration: string;
  description: string;
  transport: string[];
  styles: TravelStyle[];
  stops: { name: string; nights?: number; by?: LegMode; note?: string }[];
  route: RouteView;
  /** Destination ids along the route, for "Customize". */
  destinations: string[];
  packageId?: string;
}

const destIdFor = (s: CircuitStop) =>
  usaDestinations.find((d) => d.name === s.name || d.name.startsWith(`${s.name} `) || d.name.startsWith(`${s.name},`))?.id;

export function journeyView(c: USACircuit): JourneyView {
  return {
    id: c.id,
    title: c.title,
    duration: c.duration,
    description: c.description,
    transport: c.transport,
    styles: c.styles,
    stops: c.stops.map(({ name, nights, by, note }) => ({ name, nights, by, note })),
    route: routeView(c.stops),
    destinations: [...new Set(c.stops.map(destIdFor).filter((x): x is string => Boolean(x)))],
    packageId: c.packageId,
  };
}
