"use client";

import type { ReactNode } from "react";
import { resetRussiaFilters, scrollToId, setRussiaFilter, type RussiaFilterState } from "@/lib/russia/explorer";

/**
 * Applies a filter preset and scrolls to a results section. Lets server-rendered
 * cards (destinations, experiences, winter tiles) drive the shared filter store.
 */
export default function FilterButton({
  filter,
  target = "packages",
  className,
  label,
  children,
}: {
  filter: Partial<RussiaFilterState>;
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
        resetRussiaFilters();
        setRussiaFilter(filter);
        scrollToId(target);
      }}
    >
      {children}
    </button>
  );
}
