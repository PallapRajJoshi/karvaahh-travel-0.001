"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, MessageCircle, RotateCcw } from "lucide-react";
import { visibleDestinations } from "@/data/russia/destinations";
import { RUSSIA_ENQUIRY, destAnchor } from "@/lib/russia/config";
import { destinationMatches, resetRussiaFilters, ruFiltering, useRussiaFilters } from "@/lib/russia/explorer";
import FilterStatus from "./FilterStatus";
import RuDestinationCard from "./RuDestinationCard";

const COLLAPSED = 8;
const STATUS_ORDER = { active: 0, limited: 1, inactive: 2 } as const;

/** "Explore Russia": every visible destination, filtered by the shared store. */
export default function DestinationGrid({ packageCounts }: { packageCounts: Record<string, number> }) {
  const s = useRussiaFilters();
  const filtering = ruFiltering(s);
  const [expanded, setExpanded] = useState(false);

  const list = useMemo(
    () =>
      visibleDestinations
        .filter((d) => destinationMatches(d, s))
        .sort((a, b) => STATUS_ORDER[a.operationalStatus] - STATUS_ORDER[b.operationalStatus] || Number(!!b.featured) - Number(!!a.featured)),
    [s],
  );
  const open = filtering || expanded;
  const shown = open ? list : list.slice(0, COLLAPSED);

  // Deep links (#dest-kazan) from seasons, map and winter tiles reveal collapsed cards.
  useEffect(() => {
    const reveal = () => {
      if (!window.location.hash.startsWith("#dest-")) return;
      const id = window.location.hash.slice(6);
      if (!visibleDestinations.some((d) => d.id === id)) return;
      resetRussiaFilters();
      setExpanded(true);
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          const el = document.getElementById(destAnchor(id));
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
  }, []);

  return (
    <div>
      <FilterStatus className="ru-status--inline" />
      {list.length === 0 ? (
        <div className="asia-empty">
          <p className="asia-empty__title">No destinations match these filters.</p>
          <p>Try another combination, or ask us. Many Russia trips are built to order.</p>
          <div className="asia-empty__cta">
            <button type="button" className="pkg-btn pkg-btn--outline" onClick={resetRussiaFilters}>
              <RotateCcw size={16} aria-hidden="true" /> Reset Filters
            </button>
            <a className="pkg-btn asia-btn--navy" href={RUSSIA_ENQUIRY} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={16} aria-hidden="true" /> Ask Karvaahh
            </a>
          </div>
        </div>
      ) : (
        <motion.ul layout className="asia-grid">
          <AnimatePresence mode="popLayout" initial={false}>
            {shown.map((d, i) => (
              <motion.li
                key={d.id}
                layout
                className="asia-grid__item"
                initial={{ opacity: 0, y: 18, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, delay: Math.min(i, 8) * 0.03, ease: [0.2, 0.7, 0.2, 1] }}
              >
                <RuDestinationCard d={d} packageCount={packageCounts[d.id] ?? 0} />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      )}
      {!filtering && list.length > COLLAPSED && (
        <button type="button" className="asia-more" aria-expanded={open} onClick={() => setExpanded((v) => !v)}>
          {open ? "Show fewer destinations" : `Show all ${list.length} destinations`}
          {!open && <span className="asia-more__n">+{list.length - COLLAPSED}</span>}
          <ChevronDown size={18} aria-hidden="true" className={open ? "is-flipped" : ""} />
        </button>
      )}
    </div>
  );
}
