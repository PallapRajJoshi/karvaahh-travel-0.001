"use client";

import { useEffect, useRef } from "react";

/**
 * Lightweight IntersectionObserver-driven scroll reveal, matching the site's
 * convention of preferring IntersectionObserver over Framer Motion for
 * lightweight pages. Attach the returned ref to any element carrying the
 * `.khaptad-reveal` class; `.is-visible` is added once it enters the viewport.
 */
export function useKhaptadReveal<T extends HTMLElement = HTMLDivElement>(
  options?: IntersectionObserverInit
) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Respect prefers-reduced-motion: show immediately, skip the observer.
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      node.classList.add("is-visible");
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
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px", ...options }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [options]);

  return ref;
}
