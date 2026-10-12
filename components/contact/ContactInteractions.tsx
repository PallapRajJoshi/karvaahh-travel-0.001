"use client";

import { useEffect } from "react";
import { parsePrefill, requestPrefill } from "@/lib/contact/prefill";

/**
 * The page's only global client behaviour — renders nothing.
 *
 *  1. Scroll reveal: ONE IntersectionObserver for every [data-reveal] element
 *     (instead of a client component per card). Content is fully visible
 *     without JavaScript, with reduced motion, and when already in view.
 *  2. Click delegation for [data-prefill] elements → pre-fills the enquiry form.
 *
 * This lets every section stay a server component.
 */
export function ContactInteractions({ rootId }: { rootId: string }) {
  useEffect(() => {
    const root = document.getElementById(rootId);
    if (!root) return;

    const onClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target.closest<HTMLElement>("[data-prefill]") : null;
      if (!target || !root.contains(target)) return;
      const prefill = parsePrefill({
        type: target.dataset.prefillType,
        budget: target.dataset.prefillBudget,
        method: target.dataset.prefillMethod,
        destination: target.dataset.prefillDestination,
      });
      if (prefill) requestPrefill(prefill);
    };
    root.addEventListener("click", onClick);

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const items = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal]"));
    let observer: IntersectionObserver | null = null;

    if (!reduceMotion && "IntersectionObserver" in window) {
      const viewport = window.innerHeight;
      // Anything already on screen never gets hidden → no flash on load.
      for (const el of items) {
        if (el.getBoundingClientRect().top < viewport * 0.92) el.dataset.revealed = "true";
      }
      root.classList.add("is-motion");

      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            (entry.target as HTMLElement).dataset.revealed = "true";
            observer?.unobserve(entry.target);
          }
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
      );
      for (const el of items) if (el.dataset.revealed !== "true") observer.observe(el);
    }

    return () => {
      root.removeEventListener("click", onClick);
      observer?.disconnect();
      root.classList.remove("is-motion");
    };
  }, [rootId]);

  return null;
}
