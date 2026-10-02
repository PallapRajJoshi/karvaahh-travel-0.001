"use client";

import { useEffect, useRef } from "react";

/**
 * Scroll reveal via IntersectionObserver. Content renders visible by default
 * (no-JS safe); the effect arms the element only if it is below the fold,
 * then reveals it on intersection. Returns the ref alone so callers bind it
 * to any element (the newer react-hooks `refs` rule dislikes object bundles).
 */
export function useReveal<T extends HTMLElement>(delayMs = 0) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (typeof IntersectionObserver === "undefined") return;

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.9) return; // already in view

    if (delayMs) el.style.setProperty("--ykw-delay", `${delayMs}ms`);
    el.classList.add("ykw-rv-armed");

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delayMs]);

  return ref;
}
