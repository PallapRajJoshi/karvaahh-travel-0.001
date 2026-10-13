"use client";

import { useRef, type ReactNode } from "react";
import { useScrollReveal } from "@/components/packages/nepal/spiritual-adventure-tours/hooks/useScrollReveal";

/**
 * The page's <main>. Owns the single IntersectionObserver that reveals every
 * `[data-reveal]` element (shared hook from the sibling Nepal package page).
 * Children stay Server Components.
 */
export function PageRoot({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLElement>(null);
  useScrollReveal(ref);

  return (
    <main ref={ref} id="main-content" className="nbc-page">
      {children}
    </main>
  );
}
