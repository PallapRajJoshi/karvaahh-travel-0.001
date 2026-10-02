"use client";

import { createElement } from "react";
import type { CSSProperties, ReactNode } from "react";
import { useReveal } from "./useReveal";

type RevealTag = "div" | "li" | "article" | "section" | "p" | "header" | "figure";

interface RevealProps {
  as?: RevealTag;
  /** Index used to stagger siblings (70ms per step, capped). */
  index?: number;
  className?: string;
  children: ReactNode;
}

/** Fade + rise on first entering the viewport. Motion is CSS-only. */
export default function Reveal({
  as = "div",
  index = 0,
  className = "",
  children,
}: RevealProps) {
  const [ref, visible] = useReveal<HTMLElement>();
  const style = { "--rt-delay": `${Math.min(index, 6) * 70}ms` } as CSSProperties;

  return createElement(
    as,
    {
      ref,
      style,
      className: `rt-reveal${visible ? " is-visible" : ""}${className ? ` ${className}` : ""}`,
    },
    children,
  );
}
