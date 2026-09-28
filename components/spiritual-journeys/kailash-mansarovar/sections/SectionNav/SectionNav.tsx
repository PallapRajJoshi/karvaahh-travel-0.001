"use client";

import { useEffect, useRef, useState } from "react";
import { SECTION_NAV } from "../../data/navigation";
import "./SectionNav.css";

/**
 * Sticky "On this page" bar. Tracks the section in view with a single
 * IntersectionObserver and keeps the active link scrolled into view on
 * narrow screens (horizontal scroll only, never moves the page).
 */
export default function SectionNav() {
  const [active, setActive] = useState<string>(SECTION_NAV[0].id);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const sections = SECTION_NAV.map((item) => document.getElementById(item.id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (!sections.length || !("IntersectionObserver" in window)) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (!visible.length) return;
        visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        setActive(visible[0].target.id);
      },
      { rootMargin: "-25% 0px -65% 0px" },
    );

    sections.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const list = listRef.current;
    const link = list?.querySelector<HTMLAnchorElement>('[aria-current="location"]');
    if (!list || !link) return;
    const target = link.offsetLeft - list.clientWidth / 2 + link.clientWidth / 2;
    list.scrollTo({ left: Math.max(0, target), behavior: "smooth" });
  }, [active]);

  return (
    <nav className="km-secnav" aria-label="On this page">
      <div className="km-container km-secnav__inner">
        <ul ref={listRef} className="km-secnav__list">
          {SECTION_NAV.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="km-secnav__link"
                aria-current={active === item.id ? "location" : undefined}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#plan-your-yatra" className="km-btn km-btn--primary km-secnav__cta">
          Plan Your Yatra
        </a>
      </div>
    </nav>
  );
}
