"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { useScrollProgress } from "../hooks/useScrollProgress";

interface HeroParallaxProps {
  children: ReactNode;
  /** Fraction of scroll distance the background lags by (0 disables). */
  strength: number;
  className?: string;
}

/**
 * Subtle background parallax for the hero. It only does work while the hero
 * is on screen, moves with translate3d (no layout), and is off entirely under
 * prefers-reduced-motion.
 */
export function HeroParallax({ children, strength, className }: HeroParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setEnabled(strength > 0 && !mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [strength]);

  useScrollProgress(({ y, viewportHeight }) => {
    const el = ref.current;
    if (!el || y > viewportHeight * 1.2) return; // hero is off screen, so skip the work
    el.style.transform = `translate3d(0, ${(y * strength).toFixed(1)}px, 0)`;
  }, enabled);

  useEffect(() => {
    if (!enabled && ref.current) ref.current.style.transform = "";
  }, [enabled]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
