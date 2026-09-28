"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { animation } from "../data/config";

/**
 * Gentle hero drift. Transform-only, rAF-throttled, stops once the hero is
 * off screen, and disabled entirely for reduced-motion users.
 */
export default function HeroParallax({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const strength = animation.heroParallax;
    if (!el || strength <= 0) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      if (y > window.innerHeight * 1.2) return;
      el.style.transform = `translate3d(0, ${(y * strength).toFixed(1)}px, 0) scale(1.08)`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={ref} className="mc-hero__media mc-frame">
      {children}
    </div>
  );
}
