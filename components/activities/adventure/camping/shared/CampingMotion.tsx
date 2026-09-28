"use client";

import { useEffect } from "react";

/**
 * One lightweight motion controller for the whole page, so the section
 * components can stay server components.
 *
 *  [data-reveal]         → gets .is-in when it enters the viewport
 *  [data-draw]           → same, used for SVG stroke drawing
 *  [data-parallax="0.1"] → translated on scroll while on screen
 *
 * Content is fully visible without JS: hidden start states only apply
 * once this component adds .cmp-js to the page root.
 */
export default function CampingMotion({ rootId }: { rootId: string }) {
  useEffect(() => {
    const root = document.getElementById(rootId);
    if (!root) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const SELECTOR = "[data-reveal],[data-draw]";
    if (reduced || !("IntersectionObserver" in window)) {
      root.querySelectorAll(SELECTOR).forEach((el) => el.classList.add("is-in"));
      return;
    }

    root.classList.add("cmp-js");

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    const watch = (scope: ParentNode) =>
      scope.querySelectorAll(SELECTOR).forEach((el) => {
        if (!el.classList.contains("is-in")) io.observe(el);
      });
    watch(root);

    // Client sections (filters, tabs) can insert new reveal targets.
    const mo = new MutationObserver((muts) => {
      for (const m of muts) m.addedNodes.forEach((n) => { if (n instanceof Element) { if (n.matches(SELECTOR)) io.observe(n); watch(n); } });
    });
    mo.observe(root, { childList: true, subtree: true });

    // Parallax — only elements currently near the viewport are updated.
    const layers = Array.from(root.querySelectorAll<HTMLElement>("[data-parallax]"));
    const visible = new Set<HTMLElement>();
    const pio = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        const el = e.target as HTMLElement;
        if (e.isIntersecting) visible.add(el); else visible.delete(el);
      }),
      { rootMargin: "20% 0px 20% 0px" },
    );
    layers.forEach((el) => pio.observe(el));

    let frame = 0;
    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      visible.forEach((el) => {
        const host = (el.parentElement ?? el).getBoundingClientRect();
        const speed = parseFloat(el.dataset.parallax || "0.1");
        const offset = (host.top + host.height / 2 - vh / 2) * -speed;
        el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
      });
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    const allowParallax = window.matchMedia("(min-width: 768px)").matches;
    if (allowParallax && layers.length) {
      window.addEventListener("scroll", onScroll, { passive: true });
      update();
    }

    return () => {
      io.disconnect(); mo.disconnect(); pio.disconnect();
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [rootId]);

  return null;
}
