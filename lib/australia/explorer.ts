// lib/australia/explorer.ts
// One client store for the Australia page. The region navigator, the
// interactive map, the destination filters, the travel-style filter, the
// destination grid and the package grid all read/write it, so every entry
// point shows the same results.

import { useSyncExternalStore } from "react";
import type { AustraliaDestination } from "@/data/australia/destinations";
import { australiaDestinationById } from "@/data/australia/destinations";
import type { AustraliaPackage } from "@/data/australia/packages";
import type { AustraliaRegion } from "@/data/australia/regions";
import type { AustraliaTravelStyle } from "@/data/australia/travel-styles";

export interface AUFilterState {
  region: AustraliaRegion | "all";
  /** Multiple styles narrow the results (a card must match every one). */
  styles: AustraliaTravelStyle[];
  destination: string | "all";
}

export const DEFAULT_AU_STATE: AUFilterState = { region: "all", styles: [], destination: "all" };

let state = DEFAULT_AU_STATE;
const listeners = new Set<() => void>();
const subscribe = (l: () => void) => {
  listeners.add(l);
  return () => listeners.delete(l);
};

export function setAUFilter(patch: Partial<AUFilterState>) {
  state = { ...state, ...patch };
  listeners.forEach((l) => l());
}

export const resetAUFilters = () => setAUFilter(DEFAULT_AU_STATE);

export function toggleAUStyle(style: AustraliaTravelStyle) {
  const on = state.styles.includes(style);
  setAUFilter({ styles: on ? state.styles.filter((s) => s !== style) : [...state.styles, style] });
}

export function useAUFilters() {
  return useSyncExternalStore(subscribe, () => state, () => DEFAULT_AU_STATE);
}

export const auFiltering = (s: AUFilterState) => s.region !== "all" || s.styles.length > 0 || s.destination !== "all";

export function destinationMatches(d: AustraliaDestination, s: AUFilterState) {
  if (s.region !== "all" && d.region !== s.region) return false;
  if (s.destination !== "all" && d.id !== s.destination) return false;
  return s.styles.every((st) => d.travelStyles.includes(st));
}

export function packageMatches(p: AustraliaPackage, s: AUFilterState) {
  if (s.region !== "all" && !p.destinations.some((id) => australiaDestinationById(id)?.region === s.region)) return false;
  if (s.destination !== "all" && !p.destinations.includes(s.destination)) return false;
  return s.styles.every((st) => p.styles.includes(st));
}

/** Experiences carry a style list and a destination list; same rules. */
export function experienceMatches(e: { styles: AustraliaTravelStyle[]; destinations: string[] }, s: AUFilterState) {
  if (s.region !== "all" && !e.destinations.some((id) => australiaDestinationById(id)?.region === s.region)) return false;
  if (s.destination !== "all" && !e.destinations.includes(s.destination)) return false;
  return s.styles.every((st) => e.styles.includes(st));
}

/**
 * "Customize" on a package, circuit or hotel category hands its details to the
 * trip builder. Kept separate from the filters so customizing never changes
 * what is listed.
 */
export interface BuilderPrefill {
  title: string;
  destinations: string[];
  hotel?: string;
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
