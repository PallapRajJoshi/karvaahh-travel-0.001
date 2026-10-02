"use client";

import { useEffect, useRef, useState, type CSSProperties, type RefObject } from "react";

export type RevealVariant = "fade-up" | "fade-in" | "scale-in" | "slide-left" | "slide-right";

type UseRevealOptions = {
  variant?: RevealVariant;
  delay?: number;
  once?: boolean;
};

function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
}

/**
 * Scroll-reveal primitive built on IntersectionObserver (see Reveal.tsx for
 * the div-wrapper convenience component). Use this hook directly whenever
 * the reveal needs to attach to a specific native element — a <li>, <dl>,
 * <button> — rather than an extra wrapping <div>, which keeps markup valid
 * (e.g. avoids a <div> inside a <ul>/<ol>).
 *
 * Returns a plain tuple, deliberately not a single object bundling the ref
 * together with derived values — keep each destructured at the call site
 * into its own local binding (`const [ref, className, style] = ...`) so the
 * ref and the render-time values never appear behind the same member
 * expression.
 */
export function useReveal({
  variant = "fade-up",
  delay = 0,
  once = true,
}: UseRevealOptions = {}): [RefObject<HTMLElement | null>, string, CSSProperties] {
  const ref = useRef<HTMLElement | null>(null);
  const [reducedMotion] = useState(prefersReducedMotion);
  const [visible, setVisible] = useState(reducedMotion);

  useEffect(() => {
    if (reducedMotion) return;

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once, reducedMotion]);

  const className = `pp-reveal pp-reveal--${variant} ${visible ? "pp-reveal--visible" : ""}`.trim();
  const style: CSSProperties = { transitionDelay: visible ? `${delay}ms` : "0ms" };

  return [ref, className, style];
}
