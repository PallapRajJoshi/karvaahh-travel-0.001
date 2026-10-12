"use client";

import { useEffect } from "react";

/**
 * The only global client script on /about (≈0.4 KB). Adds `.is-in` to every
 * [data-reveal] element the first time it scrolls into view. The hidden starting
 * state lives in CSS and only applies when scripting is enabled and the visitor has
 * not asked for reduced motion; a CSS failsafe reveals anything this never reaches.
 */
export function RevealController() {
  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (targets.length === 0) return;

    if (!("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("is-in"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
