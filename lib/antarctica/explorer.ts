// lib/antarctica/explorer.ts
// One client store for the Antarctica page. The command bar, interactive map,
// destination explorer, style filter, package grid and trip builder all read
// and write it, so every entry point shows the same results.

import { useSyncExternalStore } from "react";
import type { AntarcticaDestination, AntarcticaExpedition, ExpeditionStyle, PolarRegion } from "@/data/antarctica/types";

export interface PolarFilterState {
  /** Region selected on the map / command bar / explorer. */
  region: PolarRegion | "all";
  /** Multi-select styles; a package must match every one. */
  styles: ExpeditionStyle[];
  /** Multi-select routes; a package must visit every one. */
  routes: PolarRegion[];
}

export const DEFAULT_POLAR_STATE: PolarFilterState = { region: "all", styles: [], routes: [] };

let state = DEFAULT_POLAR_STATE;
const listeners = new Set<() => void>();
const subscribe = (l: () => void) => {
  listeners.add(l);
  return () => listeners.delete(l);
};

export function setPolarFilter(patch: Partial<PolarFilterState>) {
  state = { ...state, ...patch };
  listeners.forEach((l) => l());
}

/** Clears expedition styles + routes; the map/explorer region is left alone. */
export const resetPolarFilters = () => setPolarFilter({ styles: [], routes: [] });

const toggle = <T,>(list: T[], v: T) => (list.includes(v) ? list.filter((x) => x !== v) : [...list, v]);
export const togglePolarStyle = (s: ExpeditionStyle) => setPolarFilter({ styles: toggle(state.styles, s) });
export const togglePolarRoute = (r: PolarRegion) => setPolarFilter({ routes: toggle(state.routes, r) });

export function usePolarFilters() {
  return useSyncExternalStore(subscribe, () => state, () => DEFAULT_POLAR_STATE);
}

export const isFiltering = (s: PolarFilterState) => s.styles.length > 0 || s.routes.length > 0;

export function expeditionMatches(e: AntarcticaExpedition, s: PolarFilterState) {
  if (!s.styles.every((st) => e.styles.includes(st))) return false;
  // The custom template stays visible for any route choice: every route can be tailored.
  if (e.kind === "custom") return true;
  return s.routes.every((r) => e.regions.includes(r));
}

export const destinationMatches = (d: AntarcticaDestination, s: PolarFilterState) => s.region === "all" || d.region === s.region;

/**
 * "Customize" on a card hands its details to the trip builder. Kept separate
 * from the filters so customizing never changes what is listed.
 */
export interface BuilderPrefill {
  title: string;
  styles?: ExpeditionStyle[];
  region?: string;
}

let prefill: BuilderPrefill | null = null;
const prefillListeners = new Set<() => void>();

export function setBuilderPrefill(p: BuilderPrefill | null) {
  prefill = p;
  prefillListeners.forEach((l) => l());
}

export function useBuilderPrefill() {
  return useSyncExternalStore(
    (l) => {
      prefillListeners.add(l);
      return () => prefillListeners.delete(l);
    },
    () => prefill,
    () => null,
  );
}

export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
}

/** Customize: prefill the builder and scroll to it. */
export function customize(p: BuilderPrefill) {
  setBuilderPrefill(p);
  scrollToId("plan-trip");
}
