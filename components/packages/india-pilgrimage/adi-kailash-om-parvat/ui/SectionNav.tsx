"use client";

import { useEffect, useRef, useState } from "react";

interface NavItem {
  id: string;
  label: string;
}

/**
 * Sticky "On this page" bar. Links are plain anchors (work without JS);
 * JavaScript only adds the active-section highlight (a rAF-throttled scroll check) and keeps the active
 * chip scrolled into view on narrow screens.
 */
export function SectionNav({ items }: { items: NavItem[] }) {
  const [active, setActive] = useState<string | null>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const targets = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);
    if (targets.length === 0) return;

    // Active = the last section whose top has passed 40% of the viewport,
    // as long as that section is still on screen. Throttled to one read per frame.
    let frame = 0;
    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.4;
      let current: string | null = null;
      for (const el of targets) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= line) current = rect.bottom > line ? el.id : null;
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [items]);

  useEffect(() => {
    if (!active || !listRef.current) return;
    const link = listRef.current.querySelector<HTMLElement>(`[data-target="${active}"]`);
    const list = listRef.current;
    if (link && list.scrollWidth > list.clientWidth) {
      list.scrollTo({ left: link.offsetLeft - 16, behavior: "smooth" });
    }
  }, [active]);

  return (
    <nav className="akop-section-nav" aria-label="On this page">
      <div className="akop-container akop-section-nav__inner">
        <ul ref={listRef} className="akop-section-nav__list">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                data-target={item.id}
                className={`akop-section-nav__link${active === item.id ? " is-active" : ""}`}
                aria-current={active === item.id ? "location" : undefined}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
