"use client";

import { useEffect, useRef } from "react";

/**
 * Lightweight IntersectionObserver-driven scroll reveal, preferred over
 * Framer Motion for this page per Karvaahh's established convention.
 * Attach the returned ref to a container; any descendant with
 * `data-reveal` receives an `is-visible` class once it enters the viewport.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>() {
  const containerRef = useRef<T | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const targets = container.hasAttribute("data-reveal")
      ? [container, ...Array.from(container.querySelectorAll("[data-reveal]"))]
      : Array.from(container.querySelectorAll("[data-reveal]"));

    if (targets.length === 0) return;

    if (typeof IntersectionObserver === "undefined") {
      targets.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return containerRef;
}
