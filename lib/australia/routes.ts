// lib/australia/routes.ts
// Route geometry for journey maps. Grid-free, so client components can use it.

import type { AustraliaCircuit, CircuitStop, LegMode } from "@/data/australia/circuits";
import { australiaDestinationById } from "@/data/australia/destinations";
import type { AustraliaTravelStyle } from "@/data/australia/travel-styles";
import { arcPath } from "@/lib/asia/projection";
import { routeThrough } from "@/lib/russia/projection";
import { projectAU, type Point } from "./projection";

export type RouteStop = { name: string; coords: [number, number]; by?: LegMode };
export type RouteView = {
  /** Whole route, continuous, for the travelling marker. */
  path: string;
  /** Road, rail and ferry legs (solid). */
  ground: string;
  /** Flight legs as arcs (dashed), so long distances read as flights. */
  air: string;
  points: (Point & { name: string })[];
};

export function routeView(stops: RouteStop[]): RouteView {
  const pts = stops.map((s) => ({ ...projectAU(s.coords), name: s.name, by: s.by }));
  let ground = "";
  let air = "";
  let path = "";
  let run: Point[] = [];
  const flush = () => {
    if (run.length > 1) {
      const d = routeThrough(run);
      ground += d;
      path += d;
    }
    run = [];
  };
  pts.forEach((p, i) => {
    if (i > 0 && p.by === "flight") {
      // Close the ground run that ends at the previous stop, then fly.
      flush();
      const d = arcPath(pts[i - 1], p);
      air += d;
      path += d;
    }
    run.push(p);
  });
  flush();
  return { path, ground, air, points: pts.map(({ x, y, name }) => ({ x, y, name })) };
}

/** A circuit stop resolves its name and position from its destination unless given. */
export function resolveStop(s: CircuitStop): RouteStop & { nights?: number; note?: string; destination?: string } {
  const d = s.destination ? australiaDestinationById(s.destination) : undefined;
  const coords = s.coords ?? d?.coords;
  if (!coords) throw new Error(`Stop "${s.name ?? s.destination}" has no coordinates`);
  return { name: s.name ?? d?.shortName ?? d?.name ?? "", coords, by: s.by, nights: s.nights, note: s.note, destination: s.destination };
}

// ─────────── circuit → journey view ───────────

export interface JourneyView {
  id: string;
  title: string;
  duration: string;
  description: string;
  transport: string[];
  styles: AustraliaTravelStyle[];
  stops: { name: string; nights?: number; by?: LegMode; note?: string }[];
  route: RouteView;
  /** Destination ids along the route, for "Customize". */
  destinations: string[];
}

export function journeyView(c: AustraliaCircuit): JourneyView {
  const stops = c.stops.map(resolveStop);
  return {
    id: c.id,
    title: c.title,
    duration: c.duration,
    description: c.description,
    transport: c.transport,
    styles: c.styles,
    stops: stops.map(({ name, nights, by, note }) => ({ name, nights, by, note })),
    route: routeView(stops),
    destinations: [...new Set(stops.map((s) => s.destination).filter((x): x is string => Boolean(x)))],
  };
}
