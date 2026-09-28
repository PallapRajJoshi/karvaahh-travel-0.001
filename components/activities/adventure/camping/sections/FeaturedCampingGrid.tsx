"use client";

import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import SectionHeading from "../shared/SectionHeading";
import CampingDestinationCard from "./CampingDestinationCard";
import { FILTER_EVENT, type FilterEventDetail } from "../shared/FilterLink";
import { IconClose, IconSearch } from "../shared/Icons";
import {
  campingDestinations,
  filterDestinations,
  regionFilters,
  type CategoryId,
  type RegionFilterId,
} from "@/data/campingDestinations";
import { campingCategories } from "@/data/campingContent";
import "./FeaturedCampingGrid.css";

const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";
const categoryName = (id: CategoryId) => campingCategories.find((c) => c.id === id)?.name ?? id;

const MOBILE_PREVIEW = 12;

export default function FeaturedCampingGrid() {
  const [region, setRegion] = useState<RegionFilterId>("all");
  const [category, setCategory] = useState<CategoryId | null>(null);
  const [search, setSearch] = useState("");
  /** Mobile only (CSS-gated): show the first MOBILE_PREVIEW cards until expanded. */
  const [expanded, setExpanded] = useState(false);

  const results = useMemo(
    () => filterDestinations(campingDestinations, { region, category, search }),
    [region, category, search],
  );

  /* ---------- FLIP layout transitions (no animation library) ---------- */
  const nodes = useRef(new Map<string, HTMLElement>());
  const before = useRef<Map<string, DOMRect> | null>(null);

  const capture = useCallback(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const snap = new Map<string, DOMRect>();
    nodes.current.forEach((el, key) => snap.set(key, el.getBoundingClientRect()));
    before.current = snap;
  }, []);

  useLayoutEffect(() => {
    const prev = before.current;
    if (!prev) return;
    before.current = null;
    let fresh = 0;
    nodes.current.forEach((el, key) => {
      const now = el.getBoundingClientRect();
      const was = prev.get(key);
      if (was) {
        const dx = was.left - now.left;
        const dy = was.top - now.top;
        if (Math.abs(dx) > 1 || Math.abs(dy) > 1) {
          el.animate(
            [{ transform: `translate(${dx}px, ${dy}px)` }, { transform: "translate(0, 0)" }],
            { duration: 600, easing: EASE },
          );
        }
      } else if (now.top < window.innerHeight + 200) {
        el.animate(
          [{ opacity: 0, transform: "translateY(18px) scale(0.97)" }, { opacity: 1, transform: "none" }],
          { duration: 500, easing: EASE, delay: 80 + Math.min(fresh++, 8) * 45, fill: "backwards" },
        );
      }
    });
  }, [results]);

  /* ---------- external filter requests (category cards, map) ---------- */
  useEffect(() => {
    const onFilter = (e: Event) => {
      const { region: r, category: c } = (e as CustomEvent<FilterEventDetail>).detail;
      capture();
      setSearch("");
      if (r) { setRegion(r); setCategory(null); }
      if (c !== undefined) { setCategory(c); if (!r) setRegion("all"); }
    };
    window.addEventListener(FILTER_EVENT, onFilter);
    return () => window.removeEventListener(FILTER_EVENT, onFilter);
  }, [capture]);

  const chooseRegion = (id: RegionFilterId) => { capture(); setRegion(id); };
  const clearAll = () => { capture(); setRegion("all"); setCategory(null); setSearch(""); };

  return (
    <section id="destinations" className="cmp-section cmp-section--snow cmp-featured" aria-labelledby="cmp-featured-title">
      <div className="cmp-container">
        <SectionHeading
          id="cmp-featured-title"
          kicker="Featured destinations"
          title="Nepal's Most Inspiring Camping Destinations"
          lead="Start with the places that turn an ordinary night into an unforgettable Himalayan memory."
        />
      </div>

      <div className="cmp-filter" role="search">
        <div className="cmp-container cmp-filter__inner">
          <div className="cmp-filter__chips" role="group" aria-label="Filter destinations by region">
            {regionFilters.map((f) => (
              <button
                key={f.id}
                type="button"
                className="cmp-filter__chip"
                aria-pressed={region === f.id}
                onClick={() => chooseRegion(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>
          <label className="cmp-filter__search">
            <IconSearch size={17} />
            <span className="sr-only">Search destinations</span>
            <input
              type="search"
              placeholder="Search a place"
              value={search}
              onChange={(e) => { capture(); setSearch(e.target.value); }}
            />
          </label>
        </div>
      </div>

      <div className="cmp-container">
        <div className="cmp-featured__status">
          <p aria-live="polite" className="cmp-featured__count">
            Showing {results.length} of {campingDestinations.length} destinations
          </p>
          {category && (
            <button type="button" className="cmp-featured__active" onClick={() => { capture(); setCategory(null); }}>
              {categoryName(category)} <IconClose size={14} />
              <span className="sr-only">Remove experience filter</span>
            </button>
          )}
        </div>

        {results.length > 0 ? (
          <ul className={`cmp-masonry${!expanded && results.length > MOBILE_PREVIEW ? " cmp-masonry--collapsed" : ""}`}>
            {results.map((d) => (
              <li
                key={d.slug}
                className={`cmp-masonry__item cmp-masonry__item--${d.size}`}
                ref={(el) => { if (el) nodes.current.set(d.slug, el); else nodes.current.delete(d.slug); }}
              >
                <CampingDestinationCard d={d} />
              </li>
            ))}
          </ul>
        ) : null}
        {results.length > MOBILE_PREVIEW && !expanded && (
          <button type="button" className="cmp-btn cmp-btn--dark cmp-featured__more" onClick={() => setExpanded(true)}>
            Show all {results.length} destinations
          </button>
        )}
        {results.length === 0 && (
          <div className="cmp-featured__empty">
            <p>No destinations match this combination yet. Try another region or clear the filters.</p>
            <button type="button" className="cmp-btn cmp-btn--dark" onClick={clearAll}>Clear filters</button>
          </div>
        )}
      </div>
    </section>
  );
}
