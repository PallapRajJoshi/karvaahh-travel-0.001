"use client";

import type { ReactNode } from "react";
import type { TravelStyleId } from "@/data/travel-styles";
import { resetFilters, scrollToId, setExplorer } from "@/lib/asia/explorer";

/** Applies a travel style to the destination explorer and scrolls to it. Children stay server-rendered. */
export default function StyleButton({
  style,
  className,
  children,
  label,
}: {
  style: TravelStyleId;
  className?: string;
  children: ReactNode;
  label?: string;
}) {
  return (
    <button
      type="button"
      className={className}
      aria-label={label}
      onClick={() => {
        resetFilters();
        setExplorer({ style });
        scrollToId("destinations");
      }}
    >
      {children}
    </button>
  );
}
