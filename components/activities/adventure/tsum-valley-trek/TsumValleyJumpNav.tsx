"use client";

import { useEffect, useRef, useState } from "react";
import { JUMP_LINKS, ROUTES } from "@/data/destinations/tsum-valley/content";
import "./TsumValleyJumpNav.css";

/**
 * Sticky in-page navigation. A long destination page (17 sections) needs a way
 * to jump straight to itinerary, permits or packages — this also keeps the
 * enquiry CTA one tap away on mobile.
 */
export default function TsumValleyJumpNav() {
  const [active, setActive] = useState<string>("");
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const ids = JUMP_LINKS.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) {
          const top = visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
          setActive(top.target.id);
        }
      },
      { rootMargin: "-35% 0px -60% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Keep the active pill visible inside the horizontally scrolling list.
  useEffect(() => {
    if (!active || !listRef.current) return;
    const link = listRef.current.querySelector<HTMLAnchorElement>(`a[href="#${active}"]`);
    if (!link) return;
    const list = listRef.current;
    const left = link.offsetLeft - list.clientWidth / 2 + link.clientWidth / 2;
    list.scrollTo({ left, behavior: "smooth" });
  }, [active]);

  return (
    <nav className="tsum-jump" aria-label="On this page">
      <div className="tsum-container tsum-jump__inner">
        <ul className="tsum-jump__list" ref={listRef}>
          {JUMP_LINKS.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`tsum-jump__link${isActive ? " is-active" : ""}`}
                  aria-current={isActive ? "location" : undefined}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
        <a className="tsum-btn tsum-btn--primary tsum-jump__cta" href={ROUTES.customize}>
          Enquire
        </a>
      </div>
    </nav>
  );
}
