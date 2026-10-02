"use client";

import type { ReactNode } from "react";
import { buildFilterHref, resetFilters, scrollToResults, setFilters } from "@/lib/packages/filter-store";
import type { FilterState } from "@/lib/packages/query";

/**
 * A link that applies a filter preset to the All Packages explorer in place.
 * Without JS it degrades to /packages?category=…#all-packages, which the
 * explorer reads on load.
 */
export default function ApplyFilter({
  filters,
  className,
  children,
  ariaLabel,
}: {
  filters: Partial<FilterState>;
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
}) {
  return (
    <a
      href={buildFilterHref(filters)}
      className={className}
      aria-label={ariaLabel}
      onClick={(e) => {
        e.preventDefault();
        resetFilters();
        setFilters(filters);
        scrollToResults();
      }}
    >
      {children}
    </a>
  );
}
