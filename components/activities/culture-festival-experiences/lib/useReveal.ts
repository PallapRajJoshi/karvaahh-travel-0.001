"use client";

import { useEffect, useRef } from "react";

/**
 * Scroll-reveal via IntersectionObserver.
 *
 * Content is visible by default (SSR, no-JS, reduced motion). On mount, only
 * elements that start below the fold are hidden and then revealed as they
 * approach the viewport, so nothing flashes and nothing depends on JS to be
 * readable. Returns a single ref (not an object) to keep the react-hooks
 * `refs` lint rule happy.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      return;
    }
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return;

    el.setAttribute("data-reveal", "pending");
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          el.setAttribute("data-reveal", "visible");
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return ref;
}
