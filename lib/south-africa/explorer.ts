// lib/south-africa/explorer.ts
// One client store for the South Africa page. The experience bar, map,
// destination explorer, experience strip, style filter, package grid and
// trip builder all read/write it, so every entry point agrees.

import { useSyncExternalStore } from "react";
import type { SAExperience } from "@/data/south-africa/experiences";
import type { SouthAfricaDestination, SouthAfricaPackage, SouthAfricaRegion, SouthAfricaTravelStyle } from "@/data/south-africa/types";

export interface SAFilterState {
  /** Multi-select styles: a result must match every selected style. */
  styles: SouthAfricaTravelStyle[];
  region: SouthAfricaRegion | "all";
  /** Destination selected on the map or in the explorer. */
  destination: string | "all";
}

export const DEFAULT_SA_STATE: SAFilterState = { styles: [], region: "all", destination: "all" };

let state = DEFAULT_SA_STATE;
const listeners = new Set<() => void>();
const subscribe = (l: () => void) => {
  listeners.add(l);
  return () => listeners.delete(l);
};

export function setSAFilter(patch: Partial<SAFilterState>) {
  state = { ...state, ...patch };
  listeners.forEach((l) => l());
}

export const clearSAStyles = () => setSAFilter({ styles: [] });

export function toggleSAStyle(s: SouthAfricaTravelStyle) {
  setSAFilter({ styles: state.styles.includes(s) ? state.styles.filter((x) => x !== s) : [...state.styles, s] });
}

export function useSAFilters() {
  return useSyncExternalStore(subscribe, () => state, () => DEFAULT_SA_STATE);
}

const matchesStyles = (have: SouthAfricaTravelStyle[], want: SouthAfricaTravelStyle[]) => want.every((s) => have.includes(s));

export const destinationMatches = (d: SouthAfricaDestination, s: SAFilterState) =>
  (s.region === "all" || d.region === s.region) && matchesStyles(d.travelStyles, s.styles);

/** Packages follow styles and the selected destination (the custom template always stays). */
export function packageMatches(p: SouthAfricaPackage, s: SAFilterState) {
  if (p.kind === "custom") return true;
  if (s.destination !== "all" && !p.destinations.includes(s.destination)) return false;
  return matchesStyles(p.styles, s.styles);
}

export const experienceMatches = (e: SAExperience, s: SAFilterState) => s.styles.length === 0 || s.styles.some((st) => e.styles.includes(st));

/** "Customize" hands a starting point to the trip builder without touching filters. */
export interface BuilderPrefill {
  title: string;
  destinations?: string[];
  styles?: SouthAfricaTravelStyle[];
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

/** Package shown in the shared "View Details" dialog (any card on the page can open it). */
let detail: string | null = null;
const detailListeners = new Set<() => void>();

export function openPackageDetail(id: string | null) {
  detail = id;
  detailListeners.forEach((l) => l());
}

export function usePackageDetail() {
  return useSyncExternalStore(
    (l) => {
      detailListeners.add(l);
      return () => detailListeners.delete(l);
    },
    () => detail,
    () => null,
  );
}

export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
}

export function customize(p: BuilderPrefill) {
  setBuilderPrefill(p);
  scrollToId("plan-trip");
}
