"use client";

import { useEffect, useRef, type ElementType, type ReactNode, type CSSProperties } from "react";

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** Stagger delay in ms. */
  delay?: number;
  id?: string;
  "aria-labelledby"?: string;
  "aria-label"?: string;
}

/**
 * Lightweight scroll reveal (IntersectionObserver, no animation library).
 * Content renders visible on the server; it is only hidden once JS confirms
 * motion is allowed and the element is still below the fold, so there is
 * never a blank page if JS fails.
 */
export default function Reveal({ children, as: Tag = "div", className = "", delay = 0, id, ...aria }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92) return; // already in view — leave as is

    el.dataset.reveal = "pending";
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).dataset.reveal = "shown";
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const style = delay ? ({ "--tsum-delay": `${delay}ms` } as CSSProperties) : undefined;

  return (
    <Tag ref={ref} id={id} {...aria} className={`tsum-reveal ${className}`.trim()} style={style}>
      {children}
    </Tag>
  );
}
