"use client";

/**
 * Scroll reveal with a safe first-visible state.
 *
 * Server HTML renders content fully visible. After hydration, only elements
 * that are still *below* the viewport are set to `pending` and then revealed
 * by IntersectionObserver. So: no hidden content without JS, no flash for
 * above-the-fold content, no layout shift (transform/opacity only), and
 * nothing happens at all under `prefers-reduced-motion`.
 */
import { useEffect, useRef, type ElementType, type ReactNode } from "react";
import { motion } from "../config";

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** Position in a staggered group (0-based). */
  index?: number;
  id?: string;
}

export default function Reveal({ children, as: Tag = "div", className, index = 0, id }: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Already on (or above) screen at hydration → leave it alone.
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return;

    el.dataset.reveal = "pending";
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.dataset.reveal = "shown";
            io.disconnect();
          }
        }
      },
      { rootMargin: motion.revealRootMargin, threshold: motion.revealThreshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const delay = Math.min(index * motion.staggerMs, motion.staggerMaxMs);

  return (
    <Tag
      ref={ref}
      id={id}
      className={className ? `km-reveal ${className}` : "km-reveal"}
      style={delay ? ({ "--km-delay": `${delay}ms` } as React.CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}
