"use client";

import { useEffect, useRef, useState, type ReactNode, type ElementType } from "react";
import { useClientValue } from "@/lib/useClientValue";
import "./Reveal.css";

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  direction?: "up" | "fade" | "left" | "right";
  className?: string;
  threshold?: number;
}

/**
 * Lightweight scroll-reveal wrapper using IntersectionObserver.
 * Preferred over Framer Motion for this page per Karvaahh's lightweight-page
 * convention. Respects prefers-reduced-motion via CSS (see Reveal.css) and
 * gracefully renders content visible if IntersectionObserver is unavailable.
 */
export default function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  direction = "up",
  className = "",
  threshold = 0.2,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  // Without IntersectionObserver the content is simply shown.
  const noObserver = useClientValue(() => typeof IntersectionObserver === "undefined", false);
  const [seen, setSeen] = useState(false);
  const visible = seen || noObserver;

  useEffect(() => {
    const node = ref.current;
    if (!node || noObserver) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSeen(true);
            observer.disconnect();
          }
        });
      },
      { threshold, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, noObserver]);

  return (
    <Tag
      ref={ref as never}
      className={`saipal-reveal saipal-reveal--${direction} ${visible ? "saipal-reveal--visible" : ""} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </Tag>
  );
}
