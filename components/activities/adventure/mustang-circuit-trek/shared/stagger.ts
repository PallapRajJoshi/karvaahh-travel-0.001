import type { CSSProperties } from "react";
import { animation } from "../data/config";

/**
 * Inline style for staggered siblings in a grid.
 * Lives outside the "use client" module so Server Components can call it.
 */
export function staggerStyle(index: number): CSSProperties {
  const delay = Math.min(index * animation.staggerMs, animation.maxStaggerMs);
  return { "--mc-delay": `${delay}ms` } as CSSProperties;
}
