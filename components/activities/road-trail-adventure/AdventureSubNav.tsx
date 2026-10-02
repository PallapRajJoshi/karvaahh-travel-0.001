"use client";

import { useEffect, useState } from "react";
import PlanLink from "./PlanLink";
import { SUBNAV } from "./data/site";
import "./AdventureSubNav.css";

/**
 * Sticky in-page navigation. This is a long page; jump links make each section
 * discoverable without scrolling. Set --rt-nav-offset if the global navbar is
 * also sticky.
 */
export default function AdventureSubNav() {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const targets = SUBNAV.map((item) => document.getElementById(item.id)).filter(
      (el): el is HTMLElement => el !== null,
    );

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-35% 0px -60% 0px" },
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="rt-subnav" aria-label="On this page">
      <div className="rt-container rt-subnav__inner">
        <ul className="rt-subnav__list">
          {SUBNAV.map((item) => (
            <li key={item.id}>
              <PlanLink
                href={`#${item.id}`}
                className={`rt-subnav__link${active === item.id ? " is-active" : ""}`}
              >
                {item.label}
              </PlanLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
