"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** Stagger in ms. */
  delay?: number;
  className?: string;
}

/**
 * Scroll-reveal wrapper.
 * - Content is fully visible without JS and above the fold (no flash of hidden content).
 * - Below-the-fold elements are armed on mount, then revealed once via IntersectionObserver.
 * - Classes are toggled on the DOM node directly (no state → no re-render, no hydration mismatch).
 * - Skipped entirely for prefers-reduced-motion.
 */
export function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return;

    el.classList.add("wn-reveal--armed");
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // next frame so the armed (hidden) state is painted before transitioning
          requestAnimationFrame(() => el.classList.add("wn-reveal--in"));
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={delay ? ({ "--wn-delay": `${delay}ms` } as React.CSSProperties) : undefined}
    >
      {children}
    </div>
  );
}
