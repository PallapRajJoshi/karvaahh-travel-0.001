// lib/europe/explorer.ts
// Shared client state for the Europe page. The quick filter bar, travel-style
// grid, collections, map, country directory and package carousel all read and
// write this one store, so the mostly server-rendered page needs no context
// provider (same pattern as lib/asia/explorer.ts).
//
// Filter logic: region AND every selected style AND country. Examples that work:
// Central Europe + Honeymoon, Mediterranean + Beach, Northern Lights + Winter,
// Budget + Balkans, Luxury + Switzerland, Multi-Country + First-Time Europe.

import { useSyncExternalStore } from "react";
import { countryById, inRegion, type EuropeCountry } from "@/data/europe/countries";
import type { EuropePackage } from "@/data/europe/packages";
import type { EuropeRegionId } from "@/data/europe/regions";
import type { EuropeStyleId } from "@/data/europe/travel-styles";

export interface ExplorerState {
  region: EuropeRegionId | "all";
  styles: EuropeStyleId[];
  /** Country id, or "all". */
  country: string;
}

export const DEFAULT_STATE: ExplorerState = { region: "all", styles: [], country: "all" };

let state = DEFAULT_STATE;
const listeners = new Set<() => void>();

const subscribe = (l: () => void) => {
  listeners.add(l);
  return () => listeners.delete(l);
};

export function setExplorer(patch: Partial<ExplorerState>) {
  state = { ...state, ...patch };
  listeners.forEach((l) => l());
}

export function toggleStyle(id: EuropeStyleId) {
  setExplorer({ styles: state.styles.includes(id) ? state.styles.filter((s) => s !== id) : [...state.styles, id] });
}

/** Replace all filters with a single style (used by collection and style cards). */
export function showStyle(id: EuropeStyleId) {
  setExplorer({ ...DEFAULT_STATE, styles: [id] });
}

export const resetFilters = () => setExplorer(DEFAULT_STATE);

export function useExplorer() {
  return useSyncExternalStore(subscribe, () => state, () => DEFAULT_STATE);
}

export const hasActiveFilters = (s: ExplorerState) => s.region !== "all" || s.styles.length > 0 || s.country !== "all";

export function countryMatches(c: EuropeCountry, s: ExplorerState) {
  if (c.operationalStatus === "inactive") return !hasActiveFilters(s);
  if (s.country !== "all" && c.id !== s.country) return false;
  if (s.region !== "all" && !inRegion(c, s.region)) return false;
  return s.styles.every((st) => c.travelStyles.includes(st));
}

export function packageMatches(p: EuropePackage, s: ExplorerState) {
  if (!p.active) return false;
  if (p.custom) return true;
  if (s.country !== "all" && !p.countries.includes(s.country)) return false;
  if (s.region !== "all") {
    const region = s.region;
    if (!p.countries.some((id) => {
      const c = countryById(id);
      return c ? inRegion(c, region) : false;
    })) return false;
  }
  return s.styles.every((st) => p.travelStyles.includes(st));
}

/** Smoothly bring a section into view (instant for reduced motion). */
export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
}
