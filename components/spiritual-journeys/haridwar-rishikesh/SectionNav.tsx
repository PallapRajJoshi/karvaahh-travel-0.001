"use client";

import { useEffect, useRef, useState } from "react";
import type { NavItem } from "./data/types";
import "./section-nav.css";

interface SectionNavProps {
  items: NavItem[];
}

/**
 * Sticky table of contents with scroll-spy.
 * Plain anchor links — works without JavaScript; JS only adds the active state.
 */
export default function SectionNav({ items }: SectionNavProps) {
  const [active, setActive] = useState<string | null>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const targets = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);
    if (!targets.length || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 },
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [items]);

  // Keep the active chip visible inside the horizontally scrolling list
  // without scrolling the page itself.
  useEffect(() => {
    const list = listRef.current;
    if (!list || !active) return;
    const link = list.querySelector<HTMLAnchorElement>(`a[href="#${active}"]`);
    if (!link) return;
    const offset = link.offsetLeft - list.clientWidth / 2 + link.clientWidth / 2;
    list.scrollTo({ left: Math.max(0, offset), behavior: "smooth" });
  }, [active]);

  return (
    <nav className="hry-subnav" aria-label="On this page">
      <div className="hry-container hry-subnav__inner">
        <ul ref={listRef} className="hry-subnav__list">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="hry-subnav__link"
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
