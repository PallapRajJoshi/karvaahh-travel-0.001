"use client";

import { useEffect, useRef, useState } from "react";
import { LINKS } from "@/data/adventure/everest-three-passes-trek/config";
import "./SectionNav.css";

const ITEMS = [
  { id: "overview", label: "Overview" },
  { id: "passes", label: "The Passes" },
  { id: "route", label: "Itinerary" },
  { id: "peaks", label: "Peaks" },
  { id: "culture", label: "Culture" },
  { id: "seasons", label: "When to Go" },
  { id: "prepare", label: "Preparation" },
  { id: "essentials", label: "Essentials" },
  { id: "packages", label: "Packages" },
  { id: "faq", label: "FAQ" },
];

/**
 * Sticky in-page navigation. Highlights the section in view and keeps the
 * active link scrolled into view on narrow screens (scrolls inside the bar,
 * never the page).
 */
export default function SectionNav() {
  const [active, setActive] = useState<string>("");
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const targets = ITEMS.map((i) => document.getElementById(i.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-35% 0px -55% 0px" },
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const list = listRef.current;
    const link = list?.querySelector<HTMLElement>(`[data-id="${active}"]`);
    if (!list || !link) return;
    const left = link.offsetLeft - list.clientWidth / 2 + link.clientWidth / 2;
    list.scrollTo({ left, behavior: "smooth" });
  }, [active]);

  return (
    <nav className="etp-snav" aria-label="On this page">
      <div className="etp-wrap etp-snav__inner">
        <ul className="etp-snav__list" ref={listRef}>
          {ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                data-id={item.id}
                className={`etp-snav__link${active === item.id ? " is-active" : ""}`}
                aria-current={active === item.id ? "location" : undefined}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a className="etp-snav__cta" href={LINKS.customize}>
          Plan my trek
        </a>
      </div>
    </nav>
  );
}
