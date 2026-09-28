"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { IconChevron } from "./Icons";

type Props = { children: ReactNode; label: string; className?: string; tone?: "dark" | "light" };

/** Native horizontal scroll-snap rail with previous/next controls and a progress bar. */
export default function ScrollRail({ children, label, className = "", tone = "dark" }: Props) {
  const track = useRef<HTMLDivElement>(null);
  const [state, setState] = useState({ start: true, end: false, progress: 0 });

  const measure = useCallback(() => {
    const el = track.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setState({
      start: el.scrollLeft < 4,
      end: el.scrollLeft > max - 4,
      progress: max > 0 ? el.scrollLeft / max : 1,
    });
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  const go = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <div className={`cmp-rail cmp-rail--${tone} ${className}`}>
      <div ref={track} className="cmp-rail__track" onScroll={measure} role="region" aria-label={label} tabIndex={0}>
        {children}
      </div>
      <div className="cmp-container cmp-rail__controls">
        <div className="cmp-rail__progress" aria-hidden="true">
          <span style={{ transform: `scaleX(${Math.max(0.06, state.progress)})` }} />
        </div>
        <button type="button" className="cmp-rail__btn" onClick={() => go(-1)} disabled={state.start} aria-label="Scroll back">
          <IconChevron size={18} style={{ transform: "rotate(180deg)" }} />
        </button>
        <button type="button" className="cmp-rail__btn" onClick={() => go(1)} disabled={state.end} aria-label="Scroll forward">
          <IconChevron size={18} />
        </button>
      </div>
    </div>
  );
}
