"use client";

/**
 * Sticky in-page navigation. A long pilgrimage page needs wayfinding:
 * visitors jump straight to Packages, Prepare or FAQ.
 *
 * Active link tracked with one IntersectionObserver; the active chip is
 * scrolled into view inside the horizontal rail on small screens.
 */
import { useEffect, useRef, useState } from "react";
import { ctas } from "../../config";
import CtaButton from "../../shared/CtaButton";

interface SectionNavProps {
  items: { id: string; label: string }[];
}

export default function SectionNav({ items }: SectionNavProps) {
  const [active, setActive] = useState<string | null>(null);
  const railRef = useRef<HTMLUListElement>(null);

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
        // The topmost intersecting section wins.
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
      { rootMargin: "-20% 0px -60% 0px" },
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, [items]);

  useEffect(() => {
    if (!active || !railRef.current) return;
    const link = railRef.current.querySelector<HTMLElement>(`[data-target="${active}"]`);
    if (!link) return;
    const rail = railRef.current;
    const left = link.offsetLeft - rail.clientWidth / 2 + link.clientWidth / 2;
    rail.scrollTo({ left, behavior: "smooth" });
  }, [active]);

  return (
    <nav className="km-secnav" aria-label="On this page">
      <div className="km-container km-secnav__inner">
        <ul ref={railRef} className="km-secnav__rail">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                data-target={item.id}
                className={`km-secnav__link${active === item.id ? " is-active" : ""}`}
                aria-current={active === item.id ? "location" : undefined}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <CtaButton cta={{ ...ctas.contact, label: "Enquire", variant: "primary" }} className="km-secnav__cta" />
      </div>
    </nav>
  );
}
