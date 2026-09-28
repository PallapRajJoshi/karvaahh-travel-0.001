"use client";

import { useEffect, useRef, useState } from "react";
import type { ChapterLink } from "../data/types";

interface ChapterNavProps {
  chapters: ChapterLink[];
  cta: { label: string; href: string };
}

/**
 * Sticky chapter navigation for a long guide. Active state is derived from the
 * last chapter anchor that has scrolled past the nav — chapters are sequential,
 * so this never flickers between non-adjacent sections.
 */
export default function ChapterNav({ chapters, cta }: ChapterNavProps) {
  const [active, setActive] = useState<string | null>(null);
  const [stuck, setStuck] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const targets = chapters
      .map((c) => ({ id: c.id, el: document.querySelector<HTMLElement>(c.href) }))
      .filter((t): t is { id: string; el: HTMLElement } => t.el !== null);

    let frame = 0;
    const update = () => {
      frame = 0;
      const line = nav.getBoundingClientRect().bottom + 24;
      let current: string | null = null;
      for (const t of targets) {
        if (t.el.getBoundingClientRect().top <= line) current = t.id;
      }
      setActive(current);
      setStuck(nav.getBoundingClientRect().top <= parseFloat(getComputedStyle(nav).top || "0") + 1);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [chapters]);

  // Keep the active chip visible on narrow screens without scrolling the page.
  useEffect(() => {
    const list = listRef.current;
    if (!list || !active) return;
    const item = list.querySelector<HTMLElement>(`[data-chapter="${active}"]`);
    if (!item) return;
    const max = list.scrollWidth - list.clientWidth;
    const left = Math.min(max, Math.max(0, item.offsetLeft - list.clientWidth / 2 + item.clientWidth / 2));
    list.scrollTo({ left, behavior: "smooth" });
  }, [active]);

  return (
    <nav ref={navRef} className={`cd-chapters${stuck ? " is-stuck" : ""}`} aria-label="Char Dham guide sections">
      <div className="cd-chapters__inner">
        <ol ref={listRef} className="cd-chapters__list">
          {chapters.map((c) => (
            <li key={c.id} data-chapter={c.id}>
              <a
                href={c.href}
                className={`cd-chapters__link${active === c.id ? " is-active" : ""}`}
                aria-current={active === c.id ? "location" : undefined}
              >
                {c.label}
              </a>
            </li>
          ))}
        </ol>
        <a href={cta.href} className="cd-btn cd-btn--primary cd-btn--sm cd-chapters__cta">
          {cta.label}
        </a>
      </div>
    </nav>
  );
}
