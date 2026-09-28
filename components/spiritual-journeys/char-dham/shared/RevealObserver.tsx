"use client";

import { useEffect } from "react";

/**
 * One observer for the whole page. Sections stay server components and opt in
 * with `data-reveal`. Content is visible by default (CSS only hides it once
 * `.cd-js` is on the root), so nothing is lost if JS fails.
 */
export default function RevealObserver({ rootId }: { rootId: string }) {
  useEffect(() => {
    const root = document.getElementById(rootId);
    if (!root) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal]"));

    if (reduce || !("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("is-revealed"));
      root.classList.add("cd-js");
      return;
    }

    root.classList.add("cd-js");
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [rootId]);

  return null;
}
