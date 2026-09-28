"use client";

import { useEffect, useRef, useState, type CSSProperties, type ElementType, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** Stagger delay in ms. */
  delay?: number;
  id?: string;
};

/**
 * Lightweight scroll reveal (IntersectionObserver, no animation library).
 * Server HTML has no `data-reveal`, so content is fully visible without JS.
 * Elements already in view on mount are shown immediately — no flash.
 */
export default function Reveal({ children, as: Tag = "div", className, delay = 0, id }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [state, setState] = useState<"idle" | "pending" | "shown">("idle");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !("IntersectionObserver" in window)) return;

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92) return; // already visible — leave as-is

    setState("pending");
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setState("shown");
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const style = delay ? ({ "--an-delay": `${delay}ms` } as CSSProperties) : undefined;

  return (
    <Tag
      ref={ref}
      id={id}
      className={["an-reveal", className].filter(Boolean).join(" ")}
      data-reveal={state === "idle" ? undefined : state}
      style={style}
    >
      {children}
    </Tag>
  );
}
