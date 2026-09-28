"use client";

import { useEffect } from "react";

/**
 * One IntersectionObserver for the whole page instead of a wrapper component
 * per element. Server components just add `data-reveal` (and optionally
 * style={{ "--i": n }} for stagger).
 *
 * Motion is opted *in* only after we know it's allowed, so content is never
 * hidden when JS fails or the user prefers reduced motion. Elements already in
 * view are marked visible before motion turns on, avoiding a flash.
 */
export default function RevealController({ rootSelector }: { rootSelector: string }) {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(rootSelector);
    if (!root) return;
    if (!("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const items = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal]"));
    const vh = window.innerHeight;
    for (const el of items) {
      const r = el.getBoundingClientRect();
      if (r.top < vh && r.bottom > 0) el.classList.add("is-in");
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    for (const el of items) if (!el.classList.contains("is-in")) io.observe(el);
    root.dataset.motion = "on";

    return () => io.disconnect();
  }, [rootSelector]);

  return null;
}
