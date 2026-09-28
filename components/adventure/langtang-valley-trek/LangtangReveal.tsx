"use client";

import { useEffect } from "react";

/**
 * One IntersectionObserver for the whole page. Content is fully visible in the
 * server HTML; only after mount do we arm the reveal, so no-JS / crawlers see
 * everything. Respects prefers-reduced-motion.
 */
export default function LangtangReveal({ rootId }: { rootId: string }) {
  useEffect(() => {
    const root = document.getElementById(rootId);
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const targets = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal]"));
    const vh = window.innerHeight;
    // Anything already on screen stays visible — no flash on load.
    targets.forEach((el) => {
      if (el.getBoundingClientRect().top < vh * 0.92) el.classList.add("is-in");
    });
    root.classList.add("lt-reveal-armed");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    targets.filter((el) => !el.classList.contains("is-in")).forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [rootId]);

  return null;
}
