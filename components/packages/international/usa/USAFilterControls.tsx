"use client";

import type { ReactNode } from "react";
import { RotateCcw } from "lucide-react";
import { visibleUSADestinations, usaDestinationName } from "@/data/usa/destinations";
import { activeUSAPackages } from "@/data/usa/packages";
import { usaRegionById } from "@/data/usa/regions";
import { styleLabel } from "@/data/usa/travel-styles";
import {
  destinationMatches,
  packageMatches,
  resetUSAFilters,
  scrollToId,
  setBuilderPrefill,
  setUSAFilter,
  usFiltering,
  useUSAFilters,
  type USAFilterState,
} from "@/lib/usa/explorer";

/** "XX destinations / XX packages", the active filters and Reset. Shared by every filter UI. */
export function FilterStatus({ className = "", light = false }: { className?: string; light?: boolean }) {
  const s = useUSAFilters();
  const d = visibleUSADestinations.filter((x) => destinationMatches(x, s)).length;
  const p = activeUSAPackages.filter((x) => packageMatches(x, s)).length;
  const active = [
    s.region !== "all" ? usaRegionById(s.region).name : null,
    s.destination !== "all" ? usaDestinationName(s.destination) : null,
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
      {usFiltering(s) && (
        <button type="button" className="pkg-btn pkg-btn--text us-status__reset" onClick={resetUSAFilters}>
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
  filter: Partial<USAFilterState>;
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
        resetUSAFilters();
        setUSAFilter(filter);
        scrollToId(target);
      }}
    >
      {children}
    </button>
  );
}

/** Sends a package or circuit to the trip builder and scrolls there. */
export function CustomizeButton({
  title,
  destinations,
  className,
  children,
}: {
  title: string;
  destinations: string[];
  className?: string;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        setBuilderPrefill({ title, destinations });
        scrollToId("plan-trip");
      }}
    >
      {children}
    </button>
  );
}
