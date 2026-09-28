"use client";

import { useEffect, useRef, useState } from "react";

const fmt = new Intl.NumberFormat("en-IN");

type Props = { to: number; from?: number; duration?: number; suffix?: string; className?: string };

/** Counts from `from` to `to` the first time it scrolls into view. */
export default function Counter({ to, from = 0, duration = 1600, suffix = "", className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(to);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setValue(from);
    let raf = 0;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        setValue(Math.round(from + (to - from) * eased));
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [to, from, duration]);

  return (
    <span ref={ref} className={className}>
      {fmt.format(value)}{suffix}
    </span>
  );
}
