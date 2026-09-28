"use client";

import { useEffect, useRef, useState } from "react";
import { SECTION_NAV } from "../data/content";
import "./SectionNav.css";

/**
 * Sticky "on this page" navigation for a long guide. Plain anchor links (work without JS);
 * JS only adds the active-section highlight (rAF-throttled passive scroll) and keeps the
 * active chip in view on mobile.
 */
export function SectionNav() {
  const [active, setActive] = useState<string>("");
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const targets = SECTION_NAV.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (!targets.length) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      // Active = the last section whose top has passed ~35% of the viewport; none while above the first.
      const line = window.innerHeight * 0.35;
      let current = "";
      for (const t of targets) {
        if (t.getBoundingClientRect().top <= line) current = t.id;
        else break;
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!active || !listRef.current) return;
    const link = listRef.current.querySelector<HTMLAnchorElement>(`a[href="#${active}"]`);
    const list = listRef.current;
    if (link && list.scrollWidth > list.clientWidth) {
      list.scrollTo({ left: link.offsetLeft - 16, behavior: "smooth" });
    }
  }, [active]);

  return (
    <nav className="avd-secnav" aria-label="On this page">
      <div className="avd-wrap">
        <ul ref={listRef} className="avd-secnav__list">
          {SECTION_NAV.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="avd-secnav__link"
                aria-current={active === s.id ? "location" : undefined}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
