"use client";

import { useEffect } from "react";

/**
 * One IntersectionObserver for the whole page instead of one hook per
 * section — keeps almost every section a Server Component.
 *
 * Content is visible by default; the hidden-until-revealed state is only
 * switched on (via `.dw-motion`) once JS runs and the visitor has not asked
 * for reduced motion. No JS / reduced motion → everything simply renders.
 */
export default function MotionController({ rootId }: { rootId: string }) {
  useEffect(() => {
    const root = document.getElementById(rootId);
    if (!root || typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const targets = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal]"));
    root.classList.add("dw-motion");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    targets.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      root.classList.remove("dw-motion");
    };
  }, [rootId]);

  return null;
}
