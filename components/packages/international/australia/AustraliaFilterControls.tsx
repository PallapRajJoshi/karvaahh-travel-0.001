"use client";

import type { ReactNode } from "react";
import { RotateCcw } from "lucide-react";
import { australiaDestinationName, visibleAustraliaDestinations } from "@/data/australia/destinations";
import { activeAustraliaPackages } from "@/data/australia/packages";
import { australiaRegionById } from "@/data/australia/regions";
import { styleLabel } from "@/data/australia/travel-styles";
import {
  auFiltering,
  destinationMatches,
  packageMatches,
  resetAUFilters,
  scrollToId,
  setAUFilter,
  setBuilderPrefill,
  useAUFilters,
  type AUFilterState,
} from "@/lib/australia/explorer";

/** "XX destinations / XX packages", the active filters and Reset. Shared by every filter UI. */
export function FilterStatus({ className = "", light = false }: { className?: string; light?: boolean }) {
  const s = useAUFilters();
  const d = visibleAustraliaDestinations.filter((x) => destinationMatches(x, s)).length;
  const p = activeAustraliaPackages.filter((x) => packageMatches(x, s)).length;
  const active = [
    s.region !== "all" ? australiaRegionById(s.region).name : null,
    s.destination !== "all" ? australiaDestinationName(s.destination) : null,
    ...s.styles.map(styleLabel),
  ].filter(Boolean) as string[];

  return (
    <div className={`us-status${light ? " us-status--light" : ""} ${className}`.trim()}>
      <p className="us-status__count" aria-live="polite">
        <strong>{d}</strong> {d === 1 ? "destination" : "destinations"} <span aria-hidden="true">·</span>
        <span className="pkg-sr">and</span> <strong>{p}</strong> {p === 1 ? "package" : "packages"}
      </p>
      {active.length > 0 && (
        <ul className="us-status__tags" aria-label="Active filters">
          {active.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
      )}
      {auFiltering(s) && (
        <button type="button" className="pkg-btn pkg-btn--text us-status__reset" onClick={resetAUFilters}>
          <RotateCcw size={15} aria-hidden="true" /> Reset filters
        </button>
      )}
    </div>
  );
}

/**
 * Applies a filter preset and scrolls to a results section. Lets
 * server-rendered cards drive the shared filter store.
 */
export function FilterButton({
  filter,
  target = "packages",
  className,
  label,
  children,
}: {
  filter: Partial<AUFilterState>;
  target?: string;
  className?: string;
  label?: string;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      className={className}
      aria-label={label}
      onClick={() => {
        resetAUFilters();
        setAUFilter(filter);
        scrollToId(target);
      }}
    >
      {children}
    </button>
  );
}

/** Sends a package, circuit or hotel category to the trip builder and scrolls there. */
export function CustomizeButton({
  title,
  destinations,
  hotel,
  className,
  children,
}: {
  title: string;
  destinations: string[];
  hotel?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        setBuilderPrefill({ title, destinations, hotel });
        scrollToId("plan-trip");
      }}
    >
      {children}
    </button>
  );
}
