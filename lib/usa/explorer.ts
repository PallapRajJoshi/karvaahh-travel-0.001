// lib/usa/explorer.ts
// One client store for the USA page. The region navigator, the interactive
// map, the travel-style filter, the destination grid and the package grid all
// read/write it, so every entry point shows the same results.

import { useSyncExternalStore } from "react";
import type { USADestination } from "@/data/usa/destinations";
import { usaDestinationById } from "@/data/usa/destinations";
import type { USATourPackage } from "@/data/usa/packages";
import type { USRegion } from "@/data/usa/regions";
import type { TravelStyle } from "@/data/usa/travel-styles";

export interface USAFilterState {
  region: USRegion | "all";
  /** Multiple styles narrow the results (a package must match every one). */
  styles: TravelStyle[];
  destination: string | "all";
}

export const DEFAULT_US_STATE: USAFilterState = { region: "all", styles: [], destination: "all" };

let state = DEFAULT_US_STATE;
const listeners = new Set<() => void>();
const subscribe = (l: () => void) => {
  listeners.add(l);
  return () => listeners.delete(l);
};

export function setUSAFilter(patch: Partial<USAFilterState>) {
  state = { ...state, ...patch };
  listeners.forEach((l) => l());
}

export const resetUSAFilters = () => setUSAFilter(DEFAULT_US_STATE);

export function toggleUSAStyle(style: TravelStyle) {
  const on = state.styles.includes(style);
  setUSAFilter({ styles: on ? state.styles.filter((s) => s !== style) : [...state.styles, style] });
}

export function useUSAFilters() {
  return useSyncExternalStore(subscribe, () => state, () => DEFAULT_US_STATE);
}

export const usFiltering = (s: USAFilterState) => s.region !== "all" || s.styles.length > 0 || s.destination !== "all";

export function destinationMatches(d: USADestination, s: USAFilterState) {
  if (s.region !== "all" && d.region !== s.region) return false;
  if (s.destination !== "all" && d.id !== s.destination) return false;
  return s.styles.every((st) => d.travelStyles.includes(st));
}

export function packageMatches(p: USATourPackage, s: USAFilterState) {
  if (s.region !== "all" && !p.destinations.some((id) => usaDestinationById(id)?.region === s.region)) return false;
  if (s.destination !== "all" && !p.destinations.includes(s.destination)) return false;
  // "Customized" matches the fully custom templates; every other style must be tagged.
  return s.styles.every((st) => p.styles.includes(st));
}

/**
 * "Customize" on a package or circuit hands its details to the trip builder.
 * Kept separate from the filters so customizing never changes what is listed.
 */
export interface BuilderPrefill {
  title: string;
  destinations: string[];
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
