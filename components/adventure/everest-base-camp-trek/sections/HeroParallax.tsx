"use client";

/**
 * Subtle hero parallax: translates the background layer only while the hero
 * is on screen. Transform-only, rAF-throttled, disabled for reduced motion.
 */
import { useEffect, useRef, type ReactNode } from "react";
import { ebcTheme } from "../config/theme";

export default function HeroParallax({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const strength = ebcTheme.motion.parallax;
    if (!el || !strength || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      if (y > window.innerHeight * 1.2) return;
      el.style.transform = `translate3d(0, ${y * strength}px, 0) scale(1.08)`;
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
    <div ref={ref} className="ebc-hero__media">
      {children}
    </div>
  );
}
