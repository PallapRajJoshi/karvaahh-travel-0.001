"use client";

import { useEffect, useRef, useState, type CSSProperties, type ElementType, type ReactNode } from "react";

/**
 * Returns [ref, seen]. `seen` flips to true once the element enters the viewport.
 * Tuple return (not an object) keeps the newer react-hooks `refs` lint rule happy.
 */
export function useReveal<T extends HTMLElement>(threshold = 0.15): [React.RefObject<T | null>, boolean] {
  const ref = useRef<T | null>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      const raf = requestAnimationFrame(() => setSeen(true));
      return () => cancelAnimationFrame(raf);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setSeen(true);
            observer.disconnect();
            break;
          }
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, seen];
}

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** Stagger index — each step adds 80ms */
  index?: number;
  variant?: "fade" | "clip";
  style?: CSSProperties;
  id?: string;
  "aria-hidden"?: boolean;
};

export function Reveal({ children, as, className = "", index = 0, variant = "fade", style, id, "aria-hidden": ariaHidden }: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const [ref, seen] = useReveal<HTMLElement>();
  const base = variant === "clip" ? "et-reveal--clip" : "et-reveal";

  return (
    <Tag
      ref={ref}
      id={id}
      aria-hidden={ariaHidden}
      className={`${base} ${seen ? "is-in" : ""} ${className}`.trim()}
      style={{ ...style, ["--i" as string]: index }}
    >
      {children}
    </Tag>
  );
}
