"use client";

import type { ReactNode } from "react";
import type { CategoryId, RegionFilterId } from "@/data/campingDestinations";

export const FILTER_EVENT = "cmp:filter";
export type FilterEventDetail = { region?: RegionFilterId; category?: CategoryId | null };

type Props = FilterEventDetail & { children: ReactNode; className?: string; ariaLabel?: string };

/**
 * A link to the destination grid that also pre-sets its filter.
 * Without JS it still works as a plain in-page anchor.
 */
export default function FilterLink({ region, category, children, className, ariaLabel }: Props) {
  return (
    <a
      href="#destinations"
      className={className}
      aria-label={ariaLabel}
      onClick={() => {
        window.dispatchEvent(new CustomEvent<FilterEventDetail>(FILTER_EVENT, { detail: { region, category } }));
      }}
    >
      {children}
    </a>
  );
}
