"use client";

import { useEffect, useRef, useState } from "react";
import { ANCHORS, INQUIRY } from "./data/routes";

const LINKS = [
  { id: ANCHORS.overview, label: "Overview" },
  { id: ANCHORS.highlights, label: "Highlights" },
  { id: ANCHORS.itinerary, label: "Itinerary" },
  { id: ANCHORS.seasons, label: "Best time" },
  { id: ANCHORS.preparation, label: "Preparation" },
  { id: ANCHORS.essentials, label: "Permits & info" },
  { id: ANCHORS.packages, label: "Packages" },
  { id: ANCHORS.faq, label: "FAQ" },
];

/**
 * Sticky in-page navigation — the page is long, so this gives trekkers a
 * fast route to the practical sections and keeps the inquiry CTA in reach.
 */
export default function ApiNampaSubnav() {
  const [active, setActive] = useState<string>(LINKS[0].id);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (!sections.length || !("IntersectionObserver" in window)) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  // Keep the active link in view on narrow screens.
  useEffect(() => {
    const list = listRef.current;
    const link = list?.querySelector<HTMLAnchorElement>(`a[href="#${active}"]`);
    if (!list || !link) return;
    const left = link.offsetLeft - list.clientWidth / 2 + link.clientWidth / 2;
    list.scrollTo({ left, behavior: "smooth" });
  }, [active]);

  return (
    <nav className="an-subnav" aria-label="On this page">
      <div className="an-subnav__inner an-container">
        <ul className="an-subnav__list" ref={listRef}>
          {LINKS.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={`an-subnav__link${active === l.id ? " is-active" : ""}`}
                aria-current={active === l.id ? "location" : undefined}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a className="an-subnav__cta" href={INQUIRY.custom}>
          Plan this trek
        </a>
      </div>
    </nav>
  );
}
