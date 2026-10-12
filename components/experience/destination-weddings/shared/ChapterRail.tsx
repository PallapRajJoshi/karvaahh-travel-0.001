"use client";

import { useEffect, useState } from "react";
import { CHAPTERS } from "../data/config";
import "./shared.css";

/**
 * Fixed chapter navigation on wide screens. Doubles as a progress indicator
 * through the seven chapters of the story. Hidden below 1180px, where the
 * sticky mobile CTA takes over.
 */
export default function ChapterRail() {
  const [active, setActive] = useState<string>("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const sections = CHAPTERS.map((c) => document.getElementById(c.id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (hit) setActive(hit.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5] },
    );
    sections.forEach((s) => observer.observe(s));

    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const activeIndex = CHAPTERS.findIndex((c) => c.id === active);

  return (
    <nav className={`dw-rail${visible ? " is-visible" : ""}`} aria-label="Wedding story chapters">
      <ol className="dw-rail__list">
        {CHAPTERS.map((c, i) => (
          <li key={c.id}>
            <a
              href={`#${c.id}`}
              className={`dw-rail__link${i === activeIndex ? " is-active" : ""}${
                i < activeIndex ? " is-past" : ""
              }`}
              aria-current={i === activeIndex ? "true" : undefined}
            >
              <span className="dw-rail__numeral">{c.numeral}</span>
              <span className="dw-rail__label">{c.label}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
