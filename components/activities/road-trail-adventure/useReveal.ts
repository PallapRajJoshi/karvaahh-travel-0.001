"use client";

import { useEffect, useRef, useState } from "react";
import type { RefObject } from "react";

/**
 * Scroll-reveal hook. Returns a plain tuple [ref, visible] rather than an
 * object, so the react-hooks `refs` lint rule sees independent bindings.
 *
 * The reveal styles only hide content under `prefers-reduced-motion:
 * no-preference` (see road-trail.css), so reduced-motion users never wait for
 * this observer.
 */
export function useReveal<T extends HTMLElement>(
  threshold = 0.15,
): [RefObject<T | null>, boolean] {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      // Old browsers: reveal via a microtask-free observer fallback.
      const id = window.setTimeout(() => setVisible(true), 0);
      return () => window.clearTimeout(id);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}
