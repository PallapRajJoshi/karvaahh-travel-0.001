"use client";

import { useEffect } from "react";

/**
 * One observer for the whole page. Server-rendered sections mark elements
 * with `data-reveal`; content stays visible if this never runs, because the
 * hidden starting state only applies once `.pmy--reveal` is on the root.
 */
export function RevealObserver({ rootId }: { rootId: string }) {
  useEffect(() => {
    const root = document.getElementById(rootId);
    if (!root) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !("IntersectionObserver" in window)) return;

    const targets = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal]"));
    // Elements already on screen are revealed immediately to avoid a flash.
    const viewportH = window.innerHeight;
    targets.forEach((el) => {
      if (el.getBoundingClientRect().top < viewportH * 0.9) el.classList.add("is-in");
    });
    root.classList.add("pmy--reveal");

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    targets.forEach((el) => {
      if (!el.classList.contains("is-in")) io.observe(el);
    });

    return () => io.disconnect();
  }, [rootId]);

  return null;
}
