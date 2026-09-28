"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import Icon from "./Icon";

/**
 * CSS scroll-snap carousel. Works with touch, trackpad and keyboard on its own;
 * this client island only adds prev/next buttons and their disabled state.
 */
export default function PeaksRail({ children, label }: { children: ReactNode; label: string }) {
  const ref = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const step = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("li");
    const amount = card ? card.offsetWidth + 20 : el.clientWidth * 0.8;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * amount, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <div className="etp-rail">
      <ul className="etp-rail__track" ref={ref} tabIndex={0} aria-label={label}>
        {children}
      </ul>
      <div className="etp-wrap etp-rail__controls">
        <button type="button" className="etp-rail__btn" onClick={() => step(-1)} disabled={atStart} aria-label="Previous peaks">
          <Icon name="arrow" className="etp-rail__flip" />
        </button>
        <button type="button" className="etp-rail__btn" onClick={() => step(1)} disabled={atEnd} aria-label="Next peaks">
          <Icon name="arrow" />
        </button>
      </div>
    </div>
  );
}
