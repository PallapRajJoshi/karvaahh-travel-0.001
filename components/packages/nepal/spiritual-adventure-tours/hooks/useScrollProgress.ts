"use client";

import { useEffect, useRef } from "react";

/**
 * One shared, passive, rAF-throttled scroll listener for the whole page.
 *
 * Any number of components can subscribe (progress bar, hero parallax…) and
 * the browser still sees a single `scroll` listener doing at most one unit
 * of work per frame. Subscribers get the current scroll metrics and should
 * write to the DOM directly (style / CSS vars) rather than set React state,
 * so scrolling never triggers re-renders.
 */
export interface ScrollMetrics {
  y: number;
  /** 0 → 1 across the whole document. */
  progress: number;
  viewportHeight: number;
}

type Subscriber = (m: ScrollMetrics) => void;

const subscribers = new Set<Subscriber>();
let frame = 0;
let attached = false;

function read(): ScrollMetrics {
  const y = window.scrollY;
  const viewportHeight = window.innerHeight;
  const max = document.documentElement.scrollHeight - viewportHeight;
  return { y, viewportHeight, progress: max > 0 ? Math.min(1, Math.max(0, y / max)) : 0 };
}

function flush() {
  frame = 0;
  const m = read();
  subscribers.forEach((fn) => fn(m));
}

function schedule() {
  if (!frame) frame = requestAnimationFrame(flush);
}

function attach() {
  if (attached) return;
  attached = true;
  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", schedule, { passive: true });
}

function detach() {
  if (!attached || subscribers.size > 0) return;
  attached = false;
  window.removeEventListener("scroll", schedule);
  window.removeEventListener("resize", schedule);
  if (frame) cancelAnimationFrame(frame);
  frame = 0;
}

export function useScrollProgress(onScroll: Subscriber, enabled = true) {
  // Keep the latest callback without resubscribing on every render.
  const ref = useRef(onScroll);
  useEffect(() => {
    ref.current = onScroll;
  });

  useEffect(() => {
    if (!enabled) return;
    const sub: Subscriber = (m) => ref.current(m);
    subscribers.add(sub);
    attach();
    sub(read()); // paint the initial state immediately
    return () => {
      subscribers.delete(sub);
      detach();
    };
  }, [enabled]);
}
