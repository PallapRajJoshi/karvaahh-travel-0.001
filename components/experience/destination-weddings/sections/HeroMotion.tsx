"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Gentle parallax for the hero photograph only. Transform-only, rAF-batched,
 * stops once the hero has left the viewport, and is skipped entirely for
 * visitors who prefer reduced motion.
 */
export default function HeroMotion({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const apply = () => {
      frame = 0;
      const y = window.scrollY;
      if (y > window.innerHeight * 1.2) return;
      el.style.transform = `translate3d(0, ${y * 0.18}px, 0)`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(apply);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={ref} className="dw-hero__media">
      {children}
    </div>
  );
}
