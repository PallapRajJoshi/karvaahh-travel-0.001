"use client";

/**
 * Drifts the hero background slower than the page for a subtle parallax.
 * transform-only, rAF-throttled, passive listener, stops once the hero is
 * off-screen, and disabled for reduced-motion users.
 */
import { useEffect, useRef, type ReactNode } from "react";
import { motion } from "../../config";

export default function HeroParallax({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const factor = motion.heroParallax;
    if (!el || !factor) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      if (y > window.innerHeight * 1.2) return;
      el.style.transform = `translate3d(0, ${(y * factor).toFixed(1)}px, 0) scale(1.08)`;
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
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
