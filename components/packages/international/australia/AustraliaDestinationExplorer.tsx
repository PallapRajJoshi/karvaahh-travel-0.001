"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, ChevronDown, MessageCircle, RotateCcw, SlidersHorizontal } from "lucide-react";
import { australiaDestinationById, visibleAustraliaDestinations } from "@/data/australia/destinations";
import { destinationFilters } from "@/data/australia/travel-styles";
import { AU_ENQUIRY, destAnchor } from "@/lib/australia/config";
import {
  auFiltering,
  destinationMatches,
  resetAUFilters,
  scrollToId,
  setAUFilter,
  toggleAUStyle,
  useAUFilters,
} from "@/lib/australia/explorer";
import AustraliaDestinationCard from "./AustraliaDestinationCard";
import AustraliaDestinationModal from "./AustraliaDestinationModal";
import { FilterStatus } from "./AustraliaFilterControls";

const COLLAPSED = 8;

/**
 * "Explore Australia Destinations": discovery chips (multi-select, they share
 * the travel-style filter), then every active destination filtered by the
 * shared store. Also the non-map way to reach every destination.
 */
export default function AustraliaDestinationExplorer({ packageCounts }: { packageCounts: Record<string, number> }) {
  const s = useAUFilters();
  const filtering = auFiltering(s);
  const [expanded, setExpanded] = useState(false);
  const [openId, setOpenId] = useState<string | null>(null);

  const list = useMemo(
    () => visibleAustraliaDestinations.filter((d) => destinationMatches(d, s)).sort((a, b) => Number(!!b.featured) - Number(!!a.featured)),
    [s],
  );
  const open = filtering || expanded;
  const shown = open ? list : list.slice(0, COLLAPSED);

  const viewPackages = (id: string) => {
    setOpenId(null);
    resetAUFilters();
    setAUFilter({ destination: id });
    scrollToId("packages");
  };

  // Deep links (#dest-uluru) from seasons and other sections reveal collapsed cards.
  useEffect(() => {
    const reveal = () => {
      if (!window.location.hash.startsWith("#dest-")) return;
      const id = window.location.hash.slice(6);
      if (!visibleAustraliaDestinations.some((d) => d.id === id)) return;
      resetAUFilters();
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
      <div className="us-styles au-dfilters">
        <p className="us-styles__label"><SlidersHorizontal size={15} aria-hidden="true" /> What are you looking for? Choose one or more</p>
        <ul className="us-styles__chips" role="group" aria-label="Destination filters">
          {destinationFilters.map((f) => {
            const on = s.styles.includes(f.id);
            const n = visibleAustraliaDestinations.filter((d) => d.travelStyles.includes(f.id) && (s.region === "all" || d.region === s.region)).length;
            return (
              <li key={f.id}>
                <button
                  type="button"
                  className={`us-chip${on ? " is-active" : ""}${n === 0 ? " is-empty" : ""}`}
                  aria-pressed={on}
                  onClick={() => toggleAUStyle(f.id)}
                >
                  <motion.span className="us-chip__check" aria-hidden="true" animate={{ width: on ? 16 : 0, opacity: on ? 1 : 0 }} transition={{ duration: 0.2 }}>
                    <Check size={14} />
                  </motion.span>
                  {f.label}
                  <span className="us-chip__n" aria-label={`${n} destinations`}>{n}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <FilterStatus className="us-status--inline" />
      {list.length === 0 ? (
        <div className="asia-empty">
          <p className="asia-empty__title">No destinations match these filters.</p>
          <p>Try fewer filters, or ask us. Most Australia trips are built to order.</p>
          <div className="asia-empty__cta">
            <button type="button" className="pkg-btn pkg-btn--outline" onClick={resetAUFilters}>
              <RotateCcw size={16} aria-hidden="true" /> Reset filters
            </button>
            <a className="pkg-btn asia-btn--navy" href={AU_ENQUIRY} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={16} aria-hidden="true" /> Ask Karvaahh<span className="pkg-sr"> (opens WhatsApp)</span>
            </a>
          </div>
        </div>
      ) : (
        <motion.ul layout className="us-dgrid">
          <AnimatePresence mode="popLayout" initial={false}>
            {shown.map((d, i) => (
              <motion.li
                key={d.id}
                layout
                className="us-dgrid__item"
                initial={{ opacity: 0, y: 18, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, delay: Math.min(i, 8) * 0.03, ease: [0.2, 0.7, 0.2, 1] }}
              >
                <AustraliaDestinationCard
                  d={d}
                  packageCount={packageCounts[d.id] ?? 0}
                  onExplore={() => setOpenId(d.id)}
                  onPackages={() => viewPackages(d.id)}
                />
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
      <AustraliaDestinationModal d={openId ? australiaDestinationById(openId) ?? null : null} onClose={() => setOpenId(null)} onPackages={viewPackages} />
    </div>
  );
}
