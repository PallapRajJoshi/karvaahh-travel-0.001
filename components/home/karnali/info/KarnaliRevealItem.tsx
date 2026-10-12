"use client";

import type { ReactNode, RefObject } from "react";
import { useReveal, type RevealVariant } from "@/components/shared/useReveal";

type KarnaliRevealItemProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: RevealVariant;
};

/** Scroll-revealed <li>, so lists stay valid markup (shared Reveal wraps in a <div>). */
export default function KarnaliRevealItem({
  children,
  className = "",
  delay = 0,
  variant = "fade-up",
}: KarnaliRevealItemProps) {
  const [ref, revealClassName, style] = useReveal({ variant, delay });

  return (
    <li
      ref={ref as RefObject<HTMLLIElement>}
      className={`${revealClassName} ${className}`.trim()}
      style={style}
    >
      {children}
    </li>
  );
}
