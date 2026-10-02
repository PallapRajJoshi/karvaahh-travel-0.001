"use client";

import { useEffect, useRef } from "react";

/**
 * Lightweight IntersectionObserver-based scroll reveal.
 * Preferred over Framer Motion for lightweight destination pages
 * (see Karvaahh build practices). Adds `.is-visible` to any
 * descendant carrying the `.tsho-reveal` class once it enters the
 * viewport, then stops observing it.
 */
export function useRevealOnScroll<T extends HTMLElement>(
  options: IntersectionObserverInit = { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
) {
  const containerRef = useRef<T | null>(null);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const targets = root.classList.contains("tsho-reveal")
      ? [root, ...Array.from(root.querySelectorAll(".tsho-reveal"))]
      : Array.from(root.querySelectorAll(".tsho-reveal"));

    if (targets.length === 0) return;

    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, options);

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return containerRef;
}
