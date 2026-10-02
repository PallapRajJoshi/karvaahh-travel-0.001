"use client";

import { Children, useCallback, useEffect, useRef, type ReactNode } from "react";

/**
 * Lightweight accessible carousel: native scroll-snap (swipe + trackpad),
 * focusable track (arrow keys scroll it), previous/next buttons. No autoplay.
 * Button disabled-state is written straight to the DOM, so scrolling never re-renders.
 */
export default function Carousel({ label, children, tone = "light" }: { label: string; children: ReactNode; tone?: "light" | "dark" }) {
  const track = useRef<HTMLUListElement>(null);
  const prev = useRef<HTMLButtonElement>(null);
  const next = useRef<HTMLButtonElement>(null);

  const sync = useCallback(() => {
    const t = track.current;
    if (!t) return;
    if (prev.current) prev.current.disabled = t.scrollLeft <= 2;
    if (next.current) next.current.disabled = t.scrollLeft + t.clientWidth >= t.scrollWidth - 2;
  }, []);

  useEffect(() => {
    const t = track.current;
    if (!t) return;
    sync();
    t.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      t.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, [sync]);

  const page = (dir: 1 | -1) => {
    const t = track.current;
    if (!t) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    t.scrollBy({ left: dir * t.clientWidth * 0.9, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <div className={`pkg-carousel pkg-carousel--${tone}`} role="region" aria-roledescription="carousel" aria-label={label}>
      <div className="pkg-carousel__controls">
        <button ref={prev} type="button" className="pkg-carousel__btn" onClick={() => page(-1)} aria-label={`Previous ${label}`}>
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false"><path d="M15 6l-6 6 6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
        <button ref={next} type="button" className="pkg-carousel__btn" onClick={() => page(1)} aria-label={`Next ${label}`}>
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
      </div>
      <ul ref={track} className="pkg-carousel__track" tabIndex={0} aria-label={`${label}, scrollable`}>
        {Children.map(children, (child) => (
          <li className="pkg-carousel__item">{child}</li>
        ))}
      </ul>
    </div>
  );
}
