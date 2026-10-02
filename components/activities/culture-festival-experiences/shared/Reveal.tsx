"use client";

import { useReveal } from "../lib/useReveal";

interface RevealProps {
  as?: "div" | "li" | "article" | "header" | "p" | "figure";
  /** Stagger delay in ms. */
  delay?: number;
  className?: string;
  children: React.ReactNode;
}

/** Fade-and-rise on scroll. See lib/useReveal.ts for the no-JS / reduced-motion behaviour. */
export default function Reveal({ as = "div", delay = 0, className, children }: RevealProps) {
  const ref = useReveal<HTMLElement>();
  const Tag = as as React.ElementType;
  return (
    <Tag
      ref={ref}
      className={["cx-reveal", className].filter(Boolean).join(" ")}
      style={delay ? ({ "--cx-delay": `${delay}ms` } as React.CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}
