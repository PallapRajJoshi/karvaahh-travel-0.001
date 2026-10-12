"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import type { NavItem } from "./constants";

/**
 * Sticky in-page navigation under the hero. Highlights the section in view,
 * scrolls smoothly on click and stays horizontally scrollable on mobile.
 */
export default function TourNav({ items }: { items: NavItem[] }) {
  const [active, setActive] = useState<string>(items[0]?.id ?? "");
  const [top, setTop] = useState<number | null>(null);
  const listRef = useRef<HTMLUListElement>(null);

  // Stick directly under the site header, whatever its current height.
  useEffect(() => {
    const header = document.querySelector("header");
    if (!header) return;
    const update = () => setTop(Math.round(header.getBoundingClientRect().height));
    update();
    const ro = new ResizeObserver(update);
    ro.observe(header);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const sections = items.map((n) => document.getElementById(n.id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-210px 0px -55% 0px", threshold: 0 },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [items]);

  // Keep the active tab visible inside the horizontally scrolling bar.
  useEffect(() => {
    const list = listRef.current;
    const link = list?.querySelector<HTMLElement>(`[data-id="${active}"]`);
    if (!list || !link) return;
    const left = link.offsetLeft - list.clientWidth / 2 + link.clientWidth / 2;
    list.scrollTo({ left, behavior: "smooth" });
  }, [active]);

  const onClick = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    history.replaceState(null, "", `#${id}`);
    setActive(id);
  };

  return (
    <nav
      aria-label="Tour sections"
      style={top !== null ? { top } : undefined}
      className="sticky top-[93px] z-40 border-b border-[#0B2942]/10 bg-white/90 backdrop-blur-md md:top-[137px]"
    >
      <ul
        ref={listRef}
        className="mx-auto flex max-w-[1400px] gap-1 overflow-x-auto px-3 [scrollbar-width:none] sm:px-6 lg:justify-between lg:px-8 [&::-webkit-scrollbar]:hidden"
      >
        {items.map((n) => {
          const isActive = active === n.id;
          const isBook = n.id === "book";
          return (
            <li key={n.id} className="shrink-0">
              <a
                href={`#${n.id}`}
                data-id={n.id}
                onClick={(e) => onClick(e, n.id)}
                aria-current={isActive ? "true" : undefined}
                className={`relative flex items-center whitespace-nowrap text-[14px] font-medium transition-colors ${
                  isBook
                    ? "my-2 h-10 rounded-full bg-[#0B2942] px-5 text-white hover:bg-[#123653]"
                    : `h-14 px-3.5 ${isActive ? "text-[#0B2942]" : "text-[#5B6B7B] hover:text-[#0B2942]"}`
                }`}
              >
                {n.label}
                {!isBook && (
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-3 bottom-0 h-[2px] rounded-full bg-[#F4A300] transition-transform duration-300 ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                )}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
