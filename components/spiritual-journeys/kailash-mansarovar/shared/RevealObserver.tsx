"use client";

import { useEffect } from "react";

/**
 * One IntersectionObserver for the whole page. Elements marked [data-reveal]
 * receive data-revealed="true" once on screen. The .km-js class is added only
 * after JS runs, so the default (no-JS / pre-hydration) state is fully visible.
 */
export default function RevealObserver() {
  useEffect(() => {
    const root = document.getElementById("km-page");
    if (!root) return;

    const targets = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!("IntersectionObserver" in window)) return;

    root.classList.add("km-js");

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).dataset.revealed = "true";
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.3 },
    );

    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
