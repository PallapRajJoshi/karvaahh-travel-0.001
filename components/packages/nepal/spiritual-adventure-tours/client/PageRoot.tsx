"use client";

import { useRef, type CSSProperties, type ReactNode } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

interface PageRootProps {
  children: ReactNode;
  style: CSSProperties;
}

/**
 * The page's <main>. It carries the theme's CSS variables and owns the single
 * reveal observer. Children stay Server Components: only this thin shell
 * ships to the client.
 */
export function PageRoot({ children, style }: PageRootProps) {
  const ref = useRef<HTMLElement>(null);
  useScrollReveal(ref);

  return (
    <main ref={ref} id="main-content" className="nsa-page" style={style}>
      {children}
    </main>
  );
}
