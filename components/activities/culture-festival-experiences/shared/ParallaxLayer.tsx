"use client";

import { useEffect, useRef } from "react";

interface ParallaxLayerProps {
  children: React.ReactNode;
  /** Fraction of scroll distance the layer trails by. Keep subtle. */
  speed?: number;
  className?: string;
}

/**
 * Subtle parallax for one background layer. Disabled for reduced motion and
 * stops once the layer is scrolled well out of view. Transform-only, so it
 * causes no layout shift.
 */
export default function ParallaxLayer({ children, speed = 0.18, className }: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      if (y > window.innerHeight * 1.2) return;
      el.style.transform = `translate3d(0, ${(y * speed).toFixed(1)}px, 0) scale(1.08)`;
    };
    const onScroll = () => {
      if (!raf) raf = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, [speed]);

  return (
    <div ref={ref} className={["cx-parallax", className].filter(Boolean).join(" ")}>
      {children}
    </div>
  );
}
