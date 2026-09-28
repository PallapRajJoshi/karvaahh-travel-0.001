"use client";

import { useEffect, type RefObject } from "react";

/**
 * Scroll-triggered reveals for every `[data-reveal]` element inside `rootRef`,
 * using ONE IntersectionObserver for the whole page.
 *
 * Progressive enhancement:
 *  - Server HTML renders everything fully visible.
 *  - Only once this hook runs does the root get `data-reveal-ready`, which
 *    lets the CSS hide not-yet-revealed elements. If JS fails or is slow,
 *    nothing is ever stuck invisible.
 *  - Under `prefers-reduced-motion`, elements are revealed at once (no motion).
 *
 * Stagger: give an element `style={{ "--nsa-i": index }}` and the CSS turns
 * it into a capped animation delay. No JS timers.
 */
export function useScrollReveal(rootRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const targets = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal]"));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce || !("IntersectionObserver" in window)) {
      targets.forEach((el) => el.setAttribute("data-revealed", ""));
      return;
    }

    // Anything already on screen at load is revealed without waiting.
    const vh = window.innerHeight;
    targets.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < vh * 0.95 && r.bottom > 0) el.setAttribute("data-revealed", "");
    });

    root.setAttribute("data-reveal-ready", "");

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-revealed", "");
            io.unobserve(entry.target); // reveal once, then stop observing
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    targets.forEach((el) => {
      if (!el.hasAttribute("data-revealed")) io.observe(el);
    });

    return () => io.disconnect();
  }, [rootRef]);
}
