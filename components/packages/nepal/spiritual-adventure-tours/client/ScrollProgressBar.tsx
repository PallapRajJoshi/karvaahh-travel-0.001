"use client";

import { useRef } from "react";
import { useScrollProgress } from "../hooks/useScrollProgress";

/**
 * Thin reading-progress bar pinned to the top of the viewport.
 * Animates with transform: scaleX only (compositor-friendly, no layout).
 * Purely decorative, so it's hidden from assistive tech.
 */
export function ScrollProgressBar() {
  const bar = useRef<HTMLDivElement>(null);

  useScrollProgress(({ progress }) => {
    if (bar.current) bar.current.style.transform = `scaleX(${progress})`;
  });

  return (
    <div className="nsa-progress" aria-hidden="true">
      <div ref={bar} className="nsa-progress__bar" />
    </div>
  );
}
