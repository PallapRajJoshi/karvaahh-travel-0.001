"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Adds `data-reveal="armed"` on mount, then `"shown"` when scrolled into view.
 * Server HTML has no attribute, so content is fully visible without JS —
 * the CSS only hides/animates while the attribute is "armed".
 */
export default function RevealOnView({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      return;
    }
    el.dataset.reveal = "armed";
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          el.dataset.reveal = "shown";
          io.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
