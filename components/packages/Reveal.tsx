"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Scroll reveal. Content is visible by default (no-JS, reduced motion, or already
 * in the viewport at mount). It is only "armed" (hidden) when it is below the fold,
 * so there is no flash and no layout shift.
 */
export default function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;
    el.dataset.reveal = "armed";
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.reveal = "done";
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`pkg-reveal ${className}`.trim()}>
      {children}
    </div>
  );
}
