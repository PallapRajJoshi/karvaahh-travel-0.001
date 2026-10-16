/* ============================================================
   INTERNATIONAL FLIGHTS — PAGE-SPECIFIC SECTION CONTRACT
   ------------------------------------------------------------
   The Kathmandu (KTM) nonstop route directory and the global
   connecting-hub guide. Rendered as `slot:` sections of
   <ExperiencePage>. Content lives in
   /data/flights/international-flights.ts.
   ============================================================ */

import type { SourceLink } from "@/components/activities/domestic-flights/everest/types";

export type RouteRegion = "India" | "Gulf & Middle East" | "Southeast Asia" | "East Asia" | "South Asia" | "Europe";

/** An airline on a route, resolved to its official website. */
export type RouteCarrier = {
  name: string;
  href: string;
  /** Listed in published schedules, but not independently re-verified on the last check. */
  confirm?: boolean;
  /** e.g. "2 weekly (from 30 Sep 2026)" — only when found in a dated source. */
  frequency?: string;
  note?: string;
};

/** One nonstop route to / from Tribhuvan International Airport (KTM). */
export type KtmRoute = {
  city: string;
  country: string;
  airport: string;
  iata: string;
  region: RouteRegion;
  /** Great-circle distance from KTM, rounded. */
  km: number;
  /** Approximate scheduled flight time; omitted when not verified. */
  duration?: string;
  carriers: RouteCarrier[];
  note?: string;
  sources?: SourceLink[];
};

export type RouteDirectoryData = {
  title: string;
  intro: string;
  /** Human-readable date the routes were last checked. */
  verified: string;
  routes: KtmRoute[];
  notes: string[];
};

export type ConnectionHub = {
  city: string;
  iata: string;
  text: string;
  /** Airlines flying this hub ⇄ KTM nonstop (derived from the route directory). */
  carriers: string[];
};

export type OriginRegion = { region: string; hubs: string[]; text: string };

export type GlobalConnectionsData = {
  title: string;
  intro: string;
  hubs: ConnectionHub[];
  origins: OriginRegion[];
  note: string;
};
