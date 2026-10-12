"use client";

import { RotateCcw } from "lucide-react";
import { visibleDestinations } from "@/data/russia/destinations";
import { activeRussiaPackages } from "@/data/russia/packages";
import { destinationMatches, packageMatches, resetRussiaFilters, ruFiltering, useRussiaFilters } from "@/lib/russia/explorer";

/** "XX destinations / XX packages" + Reset, shared by every filter UI on the page. */
export default function FilterStatus({ className = "" }: { className?: string }) {
  const s = useRussiaFilters();
  const d = visibleDestinations.filter((x) => destinationMatches(x, s)).length;
  const p = activeRussiaPackages.filter((x) => packageMatches(x, s)).length;
  return (
    <div className={`asia-toolbar__status ru-status ${className}`.trim()}>
      <p className="asia-count" aria-live="polite">
        <strong>{d}</strong> {d === 1 ? "destination" : "destinations"} <span aria-hidden="true">/</span>
        <span className="pkg-sr">and</span> <strong>{p}</strong> {p === 1 ? "package" : "packages"}
      </p>
      {ruFiltering(s) && (
        <button type="button" className="pkg-btn pkg-btn--text asia-reset" onClick={resetRussiaFilters}>
          <RotateCcw size={15} aria-hidden="true" /> Reset Filters
        </button>
      )}
    </div>
  );
}
