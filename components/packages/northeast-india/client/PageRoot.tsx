"use client";

import { useRef, type ReactNode } from "react";
import { useScrollReveal } from "@/components/packages/nepal/spiritual-adventure-tours/hooks/useScrollReveal";

/**
 * The page's <main>. Owns the single IntersectionObserver that reveals every
 * `[data-reveal]` child (shared hook with the other package pages).
 * Content is fully visible until JS runs, and reduced-motion reveals at once.
 */
export function PageRoot({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLElement>(null);
  useScrollReveal(ref);

  return (
    <main ref={ref} id="main-content" className="nei-page">
      {children}
    </main>
  );
}
