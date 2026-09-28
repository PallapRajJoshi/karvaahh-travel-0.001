"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Lightweight IntersectionObserver reveal.
 * Content is fully visible by default (server HTML, no JS, reduced motion).
 * After hydration, below-the-fold content is "armed" (hidden) and revealed
 * once it enters the viewport. State lives on the DOM — no re-renders.
 */
export default function RevealOnView({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Already on screen (e.g. deep link to #badrinath) → never hide it.
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return;

    el.dataset.reveal = "armed";
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          el.dataset.reveal = "visible";
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.05 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`bcd-reveal ${className}`.trim()}>
      {children}
    </div>
  );
}
