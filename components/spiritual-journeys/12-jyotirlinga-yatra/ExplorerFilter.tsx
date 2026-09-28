"use client";

import { useState, type ReactNode } from "react";
import type { Region } from "./data/types";

type Filter = "All" | Region;

interface ExplorerFilterProps {
  regions: Region[];
  counts: Record<Filter, number>;
  children: ReactNode;
}

/**
 * The only client state in the explorer: which region is selected.
 * Cards are server-rendered; CSS hides non-matching cards via data-filter.
 */
export default function ExplorerFilter({ regions, counts, children }: ExplorerFilterProps) {
  const [filter, setFilter] = useState<Filter>("All");
  const options: Filter[] = ["All", ...regions];

  return (
    <div className="jyl-explorer__wrap">
      <div className="jyl-explorer__filters" role="group" aria-label="Filter temples by region">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            className="jyl-explorer__chip"
            aria-pressed={filter === option}
            onClick={() => setFilter(option)}
          >
            {option}
            <span className="jyl-explorer__count" aria-hidden="true">
              {counts[option]}
            </span>
          </button>
        ))}
      </div>
      <p className="jyl-sr-only" aria-live="polite">
        {filter === "All"
          ? `Showing all ${counts.All} Jyotirlingas`
          : `Showing ${counts[filter]} Jyotirlinga${counts[filter] === 1 ? "" : "s"} in the ${filter} region`}
      </p>
      <div className="jyl-explorer__grid-wrap" data-filter={filter}>
        {children}
      </div>
    </div>
  );
}
