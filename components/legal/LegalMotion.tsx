"use client";

import { useEffect } from "react";

/**
 * Subtle section reveal using IntersectionObserver (no animation library).
 *
 * Progressive enhancement: sections are fully visible in the server-rendered
 * HTML. After hydration, only sections that are still below the fold get a
 * short fade-up as they scroll in. Skipped entirely for users who prefer
 * reduced motion, so they get a static page.
 */
export function LegalMotion() {
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const sections = Array.from(document.querySelectorAll<HTMLElement>(".legal-section"));
    const viewportBottom = window.innerHeight;
    const pending = sections.filter((el) => el.getBoundingClientRect().top > viewportBottom);

    pending.forEach((el) => el.classList.add("is-pending"));

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          el.classList.remove("is-pending");
          el.classList.add("is-revealed");
          observer.unobserve(el);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.01 },
    );
    pending.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      pending.forEach((el) => el.classList.remove("is-pending", "is-revealed"));
    };
  }, []);

  return null;
}
