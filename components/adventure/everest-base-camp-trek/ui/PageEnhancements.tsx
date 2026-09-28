"use client";

/**
 * One lightweight client island for the whole page:
 *  1. Scroll-reveal — a single IntersectionObserver for every [data-reveal] element
 *     (sections stay Server Components; no per-section JS).
 *  2. Smooth in-page anchor navigation for links such as "#packages".
 *  3. Scroll progress bar (rAF-throttled, transform-only → no layout work).
 * Everything respects prefers-reduced-motion.
 */
import { useEffect, useRef } from "react";
import { ebcTheme } from "../config/theme";

export default function PageEnhancements({ rootId }: { rootId: string }) {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = document.getElementById(rootId);
    if (!root) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* 1 — Reveal */
    let observer: IntersectionObserver | undefined;
    const pending = new Set<Element>();
    const reveal = (el: Element) => {
      el.classList.add("is-visible");
      pending.delete(el);
      observer?.unobserve(el);
    };
    if (!reduce && "IntersectionObserver" in window) {
      root.classList.add("ebc-js");
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            // Also reveal anything already scrolled past (fast scrolls, anchor
            // jumps, restored scroll position) so content is never left hidden.
            if (entry.isIntersecting || entry.boundingClientRect.bottom < 0) reveal(entry.target);
          }
        },
        { rootMargin: ebcTheme.motion.revealRootMargin, threshold: 0.12 },
      );
      root.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
        pending.add(el);
        observer!.observe(el);
      });
    }

    // A jump straight past an element (End key, anchor, fast fling) may never
    // produce an intersection — sweep once scrolling settles.
    let sweepTimer = 0;
    const sweep = () => {
      for (const el of pending) if (el.getBoundingClientRect().top < window.innerHeight) reveal(el);
    };

    /* 2 — Smooth anchors */
    const onClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
      if (!link || !root.contains(link)) return;
      const id = link.getAttribute("href")!.slice(1);
      const target = id ? document.getElementById(id) : null;
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
      history.replaceState(null, "", `#${id}`);
      // Move focus for keyboard and screen-reader users without a second scroll jump.
      if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
      target.focus({ preventScroll: true });
    };
    root.addEventListener("click", onClick);

    /* 3 — Progress */
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      if (barRef.current) barRef.current.style.transform = `scaleX(${p})`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
      if (pending.size) {
        window.clearTimeout(sweepTimer);
        sweepTimer = window.setTimeout(sweep, 150);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      observer?.disconnect();
      root.removeEventListener("click", onClick);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
      window.clearTimeout(sweepTimer);
    };
  }, [rootId]);

  return (
    <div className="ebc-progress" aria-hidden="true">
      <div ref={barRef} className="ebc-progress__bar" />
    </div>
  );
}
