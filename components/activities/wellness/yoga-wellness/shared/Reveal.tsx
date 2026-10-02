"use client";

import type { ElementType, ReactNode, CSSProperties } from "react";
import { useReveal } from "./useReveal";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
  style?: CSSProperties;
};

/** Thin client wrapper so server-rendered sections can reveal on scroll. */
export default function Reveal({ children, className, delay = 0, as, style }: Props) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useReveal<HTMLElement>(delay);
  return (
    <Tag ref={ref} className={className} style={style}>
      {children}
    </Tag>
  );
}
