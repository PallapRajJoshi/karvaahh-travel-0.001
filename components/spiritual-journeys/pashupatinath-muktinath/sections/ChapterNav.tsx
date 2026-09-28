"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface ChapterNavProps {
  chapters: ReadonlyArray<{ id: string; label: string }>;
  cta: { label: string; href: string };
}

/** Sticky in-page navigation for a long page. Highlights the current chapter. */
export function ChapterNav({ chapters, cta }: ChapterNavProps) {
  const [active, setActive] = useState<string | null>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const sections = chapters
      .map((c) => document.getElementById(c.id))
      .filter((el): el is HTMLElement => el !== null);
    if (!sections.length || !("IntersectionObserver" in window)) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        const first = visible[0];
        if (first) setActive(first.target.id);
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [chapters]);

  // Keep the active link in view inside the horizontally scrolling list.
  useEffect(() => {
    const list = listRef.current;
    if (!list || !active) return;
    const link = list.querySelector<HTMLElement>(`[data-chapter="${active}"]`);
    if (!link) return;
    const target = link.offsetLeft - list.clientWidth / 2 + link.clientWidth / 2;
    list.scrollTo({ left: target, behavior: "smooth" });
  }, [active]);

  return (
    <nav className="pmy-chapters" aria-label="On this page">
      <div className="pmy-container pmy-chapters__inner">
        <ul ref={listRef} className="pmy-chapters__list">
          {chapters.map((c) => (
            <li key={c.id}>
              <a
                href={`#${c.id}`}
                data-chapter={c.id}
                className={`pmy-chapters__link${active === c.id ? " is-active" : ""}`}
                aria-current={active === c.id ? "location" : undefined}
              >
                {c.label}
              </a>
            </li>
          ))}
        </ul>
        <Link href={cta.href} className="pmy-btn pmy-btn--primary pmy-chapters__cta">
          {cta.label}
        </Link>
      </div>
    </nav>
  );
}
