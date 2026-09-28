"use client";

import { useEffect } from "react";
import { animation } from "../data/config";

/**
 * One IntersectionObserver for every [data-reveal] element on the page,
 * so sections stay Server Components and only add a data attribute.
 *
 * Order matters: anything already on screen is marked visible *before*
 * .is-reveal-ready is applied, so there is no flash on first paint.
 */
export default function RevealRoot({ rootId }: { rootId: string }) {
  useEffect(() => {
    const root = document.getElementById(rootId);
    if (!root) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nodes = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal]"));

    if (reduce || !("IntersectionObserver" in window)) {
      nodes.forEach((n) => n.classList.add("is-visible"));
      return;
    }

    const vh = window.innerHeight;
    nodes.forEach((n) => {
      const r = n.getBoundingClientRect();
      // On screen or already above it (e.g. page restored mid-scroll) → show immediately.
      if (r.top < vh) n.classList.add("is-visible");
    });
    root.classList.add("is-reveal-ready");

    const pending = new Set(nodes.filter((n) => !n.classList.contains("is-visible")));
    const show = (el: Element) => {
      el.classList.add("is-visible");
      pending.delete(el as HTMLElement);
      io.unobserve(el);
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) show(e.target);
      },
      { threshold: animation.reveal.threshold, rootMargin: animation.reveal.rootMargin },
    );
    pending.forEach((n) => io.observe(n));

    // Safety net: IO only fires when intersection *changes*, so an anchor jump
    // can carry an element from below the fold to above it without a callback.
    // Release anything that is now at or above the viewport. Cheap: the set only shrinks.
    let frame = 0;
    const sweep = () => {
      frame = 0;
      const limit = window.innerHeight;
      pending.forEach((n) => {
        if (n.getBoundingClientRect().top < limit) show(n);
      });
      if (!pending.size) window.removeEventListener("scroll", onScroll);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(sweep);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [rootId]);

  return null;
}
