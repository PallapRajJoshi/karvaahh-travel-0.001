"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { useClientValue } from "@/lib/useClientValue";

interface RevealProps {
  children: ReactNode;
  className?: string;
}

/** True when the browser can observe scrolling and the visitor allows motion. */
function canAnimateReveal(): boolean {
  return (
    "IntersectionObserver" in window &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/**
 * One quiet fade-up as a section enters view.
 * Without JavaScript the element simply renders visible — the hidden state is
 * only ever applied from the client, and `prefers-reduced-motion` opts out in CSS.
 */
export default function Reveal({ children, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const animate = useClientValue(canAnimateReveal, false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || !animate) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.05 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [animate]);

  return (
    <div
      ref={ref}
      className={className ? `reveal ${className}` : "reveal"}
      data-reveal={animate ? (shown ? "shown" : "pending") : undefined}
    >
      {children}
    </div>
  );
}
