"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

interface ParallaxProps {
  children: ReactNode;
  /** Max travel in px in each direction. Keep small: this is subtle by design. */
  strength?: number;
}

/**
 * Gentle vertical parallax for a background image. The wrapper is oversized by
 * `strength` so movement never reveals an edge. Disabled for reduced motion,
 * and only runs while its parent is near the viewport.
 */
export default function Parallax({ children, strength = 36 }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const host = el?.parentElement;
    if (!el || !host) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let active = false;

    const update = () => {
      frame = 0;
      const rect = host.getBoundingClientRect();
      const viewport = window.innerHeight || 1;
      const progress = (rect.top + rect.height / 2 - viewport / 2) / viewport;
      const clamped = Math.max(-1, Math.min(1, progress));
      el.style.transform = `translate3d(0, ${(-clamped * strength).toFixed(1)}px, 0)`;
    };

    const onScroll = () => {
      if (!active || frame) return;
      frame = window.requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        active = entry.isIntersecting;
        if (active) onScroll();
      },
      { rootMargin: "20% 0px 20% 0px" },
    );
    observer.observe(host);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [strength]);

  return (
    <div
      ref={ref}
      className="rt-parallax"
      style={{ inset: `-${strength}px 0` }}
    >
      {children}
    </div>
  );
}
