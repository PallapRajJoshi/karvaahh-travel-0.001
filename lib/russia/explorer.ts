// lib/russia/explorer.ts
// One client store for the Russia page. The quick filter bar, experience
// cards, map, destination grid and package grid all read/write it.

import { useSyncExternalStore } from "react";
import type { RussiaDestination } from "@/data/russia/destinations";
import type { RussiaExperienceId } from "@/data/russia/experiences";
import type { RussiaPackage } from "@/data/russia/packages";

export interface RussiaFilterState {
  destination: string | "all";
  experience: RussiaExperienceId | "all";
}

export const DEFAULT_RU_STATE: RussiaFilterState = { destination: "all", experience: "all" };

let state = DEFAULT_RU_STATE;
const listeners = new Set<() => void>();
const subscribe = (l: () => void) => {
  listeners.add(l);
  return () => listeners.delete(l);
};

export function setRussiaFilter(patch: Partial<RussiaFilterState>) {
  state = { ...state, ...patch };
  listeners.forEach((l) => l());
}

export const resetRussiaFilters = () => setRussiaFilter(DEFAULT_RU_STATE);

export function useRussiaFilters() {
  return useSyncExternalStore(subscribe, () => state, () => DEFAULT_RU_STATE);
}

export const ruFiltering = (s: RussiaFilterState) => s.destination !== "all" || s.experience !== "all";

/** A destination matches its own id and, for a parent like the Golden Ring, its parts. */
export function destinationMatches(d: RussiaDestination, s: RussiaFilterState) {
  if (s.destination !== "all" && d.id !== s.destination && d.partOf !== s.destination) return false;
  if (s.experience !== "all" && !d.travelStyles.includes(s.experience)) return false;
  return true;
}

export function packageMatches(p: RussiaPackage, s: RussiaFilterState) {
  if (s.destination !== "all" && !p.destinations.includes(s.destination)) return false;
  if (s.experience !== "all" && !p.travelStyles.includes(s.experience)) return false;
  return true;
}

export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
}
