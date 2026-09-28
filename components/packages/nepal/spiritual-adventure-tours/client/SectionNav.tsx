"use client";

import { useEffect, useRef, useState } from "react";

interface SectionNavProps {
  items: { anchor: string; label: string }[];
}

/**
 * Sticky in-page navigation ("jump to"). Highlights the section in view
 * using one IntersectionObserver, with no scroll listeners. Anchor jumps use
 * native smooth scrolling (CSS `scroll-behavior`, disabled under reduced
 * motion) and `scroll-margin-top` on sections, so targets clear the bar.
 * Without JS it's still a working list of links.
 */
export function SectionNav({ items }: SectionNavProps) {
  const [active, setActive] = useState<string | null>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const sections = items
      .map((i) => document.getElementById(i.anchor))
      .filter((el): el is HTMLElement => el !== null);
    if (!sections.length) return;

    const visible = new Map<string, number>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) visible.set(e.target.id, e.boundingClientRect.top);
          else visible.delete(e.target.id);
        }
        // The section nearest the top of the band wins.
        let best: string | null = null;
        let bestTop = Infinity;
        visible.forEach((top, id) => {
          if (Math.abs(top) < bestTop) {
            bestTop = Math.abs(top);
            best = id;
          }
        });
        setActive(best);
      },
      // A band across the upper-middle of the viewport.
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 },
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [items]);

  // Keep the active chip visible on narrow screens, scrolling the list only (never the page).
  useEffect(() => {
    const list = listRef.current;
    if (!list || !active) return;
    const link = list.querySelector<HTMLElement>(`a[href="#${active}"]`);
    if (!link) return;
    const target = link.offsetLeft - (list.clientWidth - link.offsetWidth) / 2;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    list.scrollTo({ left: target, behavior: reduce ? "auto" : "smooth" });
  }, [active]);

  return (
    <nav className="nsa-sectionnav" aria-label="On this page">
      <div className="nsa-container nsa-sectionnav__inner">
        <ul ref={listRef} className="nsa-sectionnav__list">
          {items.map((item) => {
            const isActive = active === item.anchor;
            return (
              <li key={item.anchor}>
                <a
                  href={`#${item.anchor}`}
                  className={`nsa-sectionnav__link${isActive ? " is-active" : ""}`}
                  aria-current={isActive ? "location" : undefined}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
