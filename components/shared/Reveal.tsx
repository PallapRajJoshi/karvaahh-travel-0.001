"use client";

import type { ReactNode, RefObject } from "react";
import { useReveal, type RevealVariant } from "./useReveal";

type RevealProps = {
  children: ReactNode;
  /** BEM-friendly extra class name(s) applied to the wrapper */
  className?: string;
  /** Animation style applied once the element intersects the viewport */
  variant?: RevealVariant;
  /** Stagger delay in milliseconds */
  delay?: number;
  /** Only fire once (default) or reset when scrolled out of view */
  once?: boolean;
};

/**
 * Div-wrapper convenience component built on useReveal. For a reveal that
 * must attach to a specific native element (a <li>, <dl>, <button> — so it
 * doesn't introduce an invalid wrapping <div>), use the useReveal hook
 * directly instead; see ItineraryTimeline, HowToReach, and QuickFacts.
 */
export default function Reveal({
  children,
  className = "",
  variant = "fade-up",
  delay = 0,
  once = true,
}: RevealProps) {
  const [ref, revealClassName, style] = useReveal({ variant, delay, once });

  return (
    <div
      ref={ref as RefObject<HTMLDivElement>}
      className={`${revealClassName} ${className}`.trim()}
      style={style}
    >
      {children}
    </div>
  );
}
