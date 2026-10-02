"use client";

import type { ElementType, ReactNode } from "react";
import { useReveal } from "./useReveal";

type Props = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
};

export default function Reveal({
  children,
  as: Tag = "div",
  className = "",
  delay = 0,
}: Props) {
  const [ref, state] = useReveal();
  return (
    <Tag
      ref={ref}
      data-reveal={state}
      className={`cr-reveal ${className}`.trim()}
      style={{ ["--cr-delay" as string]: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
