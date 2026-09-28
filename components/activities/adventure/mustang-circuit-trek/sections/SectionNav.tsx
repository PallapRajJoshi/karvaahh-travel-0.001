"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { links } from "../data/config";
import "./section-nav.css";

interface SectionNavProps {
  items: { id: string; label: string }[];
}

/**
 * Sticky in-page navigation. Highlights the section in view and keeps the
 * active chip visible on narrow screens. Plain anchor links, so it works without JS.
 */
export default function SectionNav({ items }: SectionNavProps) {
  const [active, setActive] = useState<string | null>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const targets = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => el !== null);
    if (!targets.length) return;

    const visible = new Map<string, number>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) visible.set(e.target.id, e.boundingClientRect.top);
          else visible.delete(e.target.id);
        }
        // Topmost visible section wins.
        let best: string | null = null;
        let bestTop = Infinity;
        visible.forEach((top, id) => {
          if (top < bestTop) {
            bestTop = top;
            best = id;
          }
        });
        setActive(best);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 },
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, [items]);

  // Keep the active chip in view on mobile without scrolling the page.
  useEffect(() => {
    const list = listRef.current;
    if (!list || !active) return;
    const link = list.querySelector<HTMLElement>(`[data-target="${active}"]`);
    if (!link) return;
    const left = link.offsetLeft - list.clientWidth / 2 + link.clientWidth / 2;
    list.scrollTo({ left, behavior: "smooth" });
  }, [active]);

  return (
    <nav className="mc-subnav" aria-label="On this page">
      <div className="mc-container mc-subnav__inner">
        <ul ref={listRef} className="mc-subnav__list">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                data-target={item.id}
                className={`mc-subnav__link${active === item.id ? " is-active" : ""}`}
                aria-current={active === item.id ? "location" : undefined}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <Link href={links.customize} className="mc-subnav__cta">
          Enquire
        </Link>
      </div>
    </nav>
  );
}
