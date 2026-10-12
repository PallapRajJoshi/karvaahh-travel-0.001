"use client";

import type { ReactNode } from "react";
import { DEFAULT_STATE, scrollToId, setExplorer, type ExplorerState } from "@/lib/europe/explorer";

/**
 * Applies a filter preset (replacing current filters) and scrolls to a section.
 * Lets server-rendered sections offer "show me these" buttons without hydrating
 * their content.
 */
export default function FilterButton({
  filter,
  target = "explore",
  className,
  children,
  label,
}: {
  filter: Partial<ExplorerState>;
  target?: string;
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
        setExplorer({ ...DEFAULT_STATE, ...filter });
        scrollToId(target);
      }}
    >
      {children}
    </button>
  );
}
