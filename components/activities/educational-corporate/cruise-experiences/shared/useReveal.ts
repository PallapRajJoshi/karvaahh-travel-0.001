"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Scroll reveal. Returns a tuple (not an object) so the react-hooks `refs`
 * lint rule doesn't treat property access on the result as a ref read.
 * Content is visible by default; "pending" is only applied after mount and
 * only when the element is below the fold and motion is allowed.
 */
export function useReveal(): [
  React.RefObject<HTMLElement | null>,
  "pending" | "shown" | undefined,
] {
  const ref = useRef<HTMLElement | null>(null);
  const [state, setState] = useState<"pending" | "shown" | undefined>(
    undefined,
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || typeof IntersectionObserver === "undefined") {
      return;
    }
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.9) {
      return;
    }
    const raf = requestAnimationFrame(() => setState("pending"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setState("shown");
            io.disconnect();
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, []);

  return [ref, state];
}
