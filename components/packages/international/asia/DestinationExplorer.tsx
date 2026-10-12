"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, MessageCircle, RotateCcw, SlidersHorizontal } from "lucide-react";
import type { AsiaDestination, BudgetLevel } from "@/data/asia-destinations";
import { asiaRegions, type AsiaRegionId } from "@/data/asia-regions";
import { destAnchor, enquireAbout } from "@/lib/asia/config";
import {
  BUDGETS,
  DURATIONS,
  hasActiveFilters,
  matches,
  resetFilters,
  setExplorer,
  useExplorer,
  type DurationBucket,
} from "@/lib/asia/explorer";
import DestinationCard from "./DestinationCard";
import TravelStyleFilters from "./TravelStyleFilters";

/** Cards shown per region before "Show all" when no filter is applied. */
const COLLAPSED = 4;

export default function DestinationExplorer({
  destinations,
  packageCounts,
}: {
  destinations: AsiaDestination[];
  packageCounts: Record<string, number>;
}) {
  const state = useExplorer();
  const [expanded, setExpanded] = useState<Set<AsiaRegionId>>(new Set());
  const filtering = hasActiveFilters(state);

  const groups = useMemo(() => {
    const hits = destinations.filter((d) => matches(d, state));
    return asiaRegions
      .map((r) => ({
        region: r,
        items: hits.filter((d) => d.region === r.id).sort((a, b) => b.popularity - a.popularity),
      }))
      .filter((g) => g.items.length > 0);
  }, [destinations, state]);

  const total = groups.reduce((n, g) => n + g.items.length, 0);

  // Deep links (#dest-thailand) from the map, seasons and internal links: make
  // sure the card is rendered before the browser scrolls to it.
  useEffect(() => {
    const reveal = () => {
      const id = window.location.hash.replace(/^#dest-/, "");
      if (!window.location.hash.startsWith("#dest-")) return;
      const d = destinations.find((x) => x.id === id);
      if (!d) return;
      resetFilters();
      setExpanded((prev) => new Set(prev).add(d.region));
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          const el = document.getElementById(destAnchor(d.id));
          if (!el) return;
          const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
          el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" });
          el.classList.add("is-flash");
          window.setTimeout(() => el.classList.remove("is-flash"), 1600);
        }),
      );
    };
    reveal();
    window.addEventListener("hashchange", reveal);
    return () => window.removeEventListener("hashchange", reveal);
  }, [destinations]);

  const toggleRegion = (id: AsiaRegionId) =>
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  return (
    <div className="asia-explorer">
      <TravelStyleFilters />

      <div className="asia-toolbar" role="group" aria-label="More filters">
        <div className="asia-toolbar__regions" role="group" aria-label="Region">
          {[{ id: "all" as const, name: "All Regions" }, ...asiaRegions].map((r) => (
            <button
              key={r.id}
              type="button"
              className={`asia-tab${state.region === r.id ? " is-active" : ""}`}
              aria-pressed={state.region === r.id}
              onClick={() => setExplorer({ region: r.id })}
            >
              {r.name}
            </button>
          ))}
        </div>

        <div className="asia-toolbar__selects">
          <SlidersHorizontal size={18} aria-hidden="true" className="asia-toolbar__icon" />
          <label className="asia-select">
            <span className="pkg-sr">Budget level</span>
            <select value={state.budget} onChange={(e) => setExplorer({ budget: e.target.value as BudgetLevel | "all" })}>
              <option value="all">Any budget</option>
              {BUDGETS.map((b) => (
                <option key={b.id} value={b.id}>{b.label}</option>
              ))}
            </select>
          </label>
          <label className="asia-select">
            <span className="pkg-sr">Trip length</span>
            <select value={state.duration} onChange={(e) => setExplorer({ duration: e.target.value as DurationBucket | "all" })}>
              <option value="all">Any length</option>
              {DURATIONS.map((d) => (
                <option key={d.id} value={d.id}>{d.label}</option>
              ))}
            </select>
          </label>
          <label className="asia-toggle">
            <input type="checkbox" checked={state.featured} onChange={(e) => setExplorer({ featured: e.target.checked })} />
            <span className="asia-toggle__track" aria-hidden="true" />
            Featured only
          </label>
        </div>

        <div className="asia-toolbar__status">
          <p className="asia-count" aria-live="polite">
            <strong>{total}</strong> {total === 1 ? "destination" : "destinations"} found
            {state.query && (
              <>
                {" "}for <q>{state.query}</q>
              </>
            )}
          </p>
          {filtering && (
            <button type="button" className="pkg-btn pkg-btn--text asia-reset" onClick={resetFilters}>
              <RotateCcw size={15} aria-hidden="true" /> Reset filters
            </button>
          )}
        </div>
      </div>

      {total === 0 && (
        <div className="asia-empty">
          <p className="asia-empty__title">No destinations match these filters yet.</p>
          <p>
            Try a different combination, or tell us what you have in mind. Karvaahh can often customize trips to places that
            are not listed here.
          </p>
          <div className="asia-empty__cta">
            <button type="button" className="pkg-btn pkg-btn--outline" onClick={resetFilters}>
              <RotateCcw size={16} aria-hidden="true" /> Reset filters
            </button>
            <a
              className="pkg-btn asia-btn--navy"
              href={enquireAbout(state.query ? `a trip to ${state.query}` : "an Asia trip")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={16} aria-hidden="true" /> Ask Karvaahh
            </a>
          </div>
        </div>
      )}

      {groups.map(({ region, items }) => {
        const open = filtering || expanded.has(region.id);
        const shown = open ? items : items.slice(0, COLLAPSED);
        const hidden = items.length - shown.length;
        return (
          <section
            key={region.id}
            className="asia-region"
            aria-labelledby={`region-${region.id}`}
            style={{ "--tone-a": region.tone[0], "--tone-b": region.tone[1] } as React.CSSProperties}
          >
            <header className="asia-region__head">
              <span className="asia-region__bar" aria-hidden="true" />
              <div>
                <h3 id={`region-${region.id}`} className="asia-region__title">{region.name}</h3>
                <p className="asia-region__tag">{region.tagline}</p>
              </div>
              <span className="asia-region__n">
                {items.length} {items.length === 1 ? "country" : "countries"}
              </span>
            </header>

            <motion.ul layout className="asia-grid">
              <AnimatePresence mode="popLayout" initial={false}>
                {shown.map((d) => (
                  <motion.li
                    key={d.id}
                    layout
                    initial={{ opacity: 0, y: 18, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
                    className="asia-grid__item"
                  >
                    <DestinationCard d={d} packageCount={packageCounts[d.id] ?? 0} />
                  </motion.li>
                ))}
              </AnimatePresence>
            </motion.ul>

            {!filtering && items.length > COLLAPSED && (
              <button
                type="button"
                className="asia-more"
                aria-expanded={open}
                onClick={() => toggleRegion(region.id)}
              >
                {open ? `Show fewer` : `Show all ${items.length} in ${region.name}`}
                {!open && <span className="asia-more__n">+{hidden}</span>}
                <ChevronDown size={18} aria-hidden="true" className={open ? "is-flipped" : ""} />
              </button>
            )}
          </section>
        );
      })}
    </div>
  );
}
