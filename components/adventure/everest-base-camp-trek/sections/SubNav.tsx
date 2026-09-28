"use client";

/**
 * Sticky in-page navigation with active-section highlighting.
 * Horizontal scroll on small screens; the active link is kept in view.
 */
import { useEffect, useRef, useState } from "react";
import { ebcSite, isSectionEnabled } from "../config/site";
import "../styles/navigation.css";

export default function SubNav() {
  const links = ebcSite.subnav.filter((l) => isSectionEnabled(l.id));
  const [active, setActive] = useState<string>(links[0]?.id ?? "");
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const targets = links.map((l) => document.getElementById(l.id)).filter(Boolean) as HTMLElement[];
    if (!targets.length || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const list = listRef.current;
    const el = list?.querySelector<HTMLElement>(`[data-id="${active}"]`);
    if (list && el && list.scrollWidth > list.clientWidth) {
      list.scrollTo({ left: el.offsetLeft - 16, behavior: "smooth" });
    }
  }, [active]);

  return (
    <nav className="ebc-subnav" aria-label="On this page">
      <div className="ebc-container ebc-subnav__inner">
        <ul ref={listRef} className="ebc-subnav__list">
          {links.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} data-id={l.id} className={`ebc-subnav__link${active === l.id ? " is-active" : ""}`} aria-current={active === l.id ? "location" : undefined}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#packages" className="ebc-subnav__cta">
          View Packages
        </a>
      </div>
    </nav>
  );
}
