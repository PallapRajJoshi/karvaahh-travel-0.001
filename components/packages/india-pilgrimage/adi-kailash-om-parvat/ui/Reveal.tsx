"use client";

import { createElement, useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { motion } from "@/data/india-pilgrimage/adi-kailash-om-parvat/theme";

/**
 * Scroll reveal driven by ONE shared IntersectionObserver for the whole page.
 *
 * Robust first-visible state (see build-practices):
 *  - Server HTML renders `.akop-reveal` hidden, but a CSS fail-safe animation
 *    shows it after ~2.5s if JavaScript never runs.
 *  - On hydration the element is "armed" (fail-safe removed) and revealed by
 *    the observer. Reduced-motion users get content immediately.
 */

let sharedObserver: IntersectionObserver | null = null;

function getObserver(): IntersectionObserver {
  if (sharedObserver) return sharedObserver;
  sharedObserver = new IntersectionObserver(
    (entries, observer) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }
    },
    { rootMargin: motion.reveal.rootMargin, threshold: motion.reveal.threshold },
  );
  return sharedObserver;
}

type RevealTag = "div" | "li" | "article" | "figure" | "header" | "aside";

interface RevealProps {
  children: ReactNode;
  as?: RevealTag;
  className?: string;
  /** Position within a staggered group (0, 1, 2…). Capped in config. */
  index?: number;
  /** "up" (default) or "fade" for elements that shouldn't move. */
  variant?: "up" | "fade";
  id?: string;
}

export function Reveal({ children, as = "div", className, index = 0, variant = "up", id }: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || typeof IntersectionObserver === "undefined") {
      el.classList.add("is-visible");
      return;
    }
    el.classList.add("is-armed");
    const observer = getObserver();
    observer.observe(el);
    return () => observer.unobserve(el);
  }, []);

  const step = Math.min(index, motion.reveal.maxStaggerSteps);
  const style = { "--akop-i": step } as CSSProperties;
  const classes = ["akop-reveal", variant === "fade" ? "akop-reveal--fade" : "", className ?? ""]
    .filter(Boolean)
    .join(" ");

  return createElement(as, { ref, className: classes, style, id }, children);
}
