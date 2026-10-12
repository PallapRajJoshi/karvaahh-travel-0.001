"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, MessageCircle, RotateCcw } from "lucide-react";
import { usaDestinationById, visibleUSADestinations } from "@/data/usa/destinations";
import { USA_ENQUIRY, destAnchor } from "@/lib/usa/config";
import { destinationMatches, resetUSAFilters, scrollToId, setUSAFilter, usFiltering, useUSAFilters } from "@/lib/usa/explorer";
import USADestinationCard from "./USADestinationCard";
import USADestinationModal from "./USADestinationModal";
import { FilterStatus } from "./USAFilterControls";

const COLLAPSED = 8;

/**
 * "Explore USA Destinations": every active destination, filtered by the
 * shared store (region, styles, destination). Also the non-map way to reach
 * every destination.
 */
export default function USADestinationExplorer({ packageCounts }: { packageCounts: Record<string, number> }) {
  const s = useUSAFilters();
  const filtering = usFiltering(s);
  const [expanded, setExpanded] = useState(false);
  const [openId, setOpenId] = useState<string | null>(null);

  const list = useMemo(
    () => visibleUSADestinations.filter((d) => destinationMatches(d, s)).sort((a, b) => Number(!!b.featured) - Number(!!a.featured)),
    [s],
  );
  const open = filtering || expanded;
  const shown = open ? list : list.slice(0, COLLAPSED);

  const viewPackages = (id: string) => {
    setOpenId(null);
    resetUSAFilters();
    setUSAFilter({ destination: id });
    scrollToId("packages");
  };

  // Deep links (#dest-miami) from seasons and other sections reveal collapsed cards.
  useEffect(() => {
    const reveal = () => {
      if (!window.location.hash.startsWith("#dest-")) return;
      const id = window.location.hash.slice(6);
      if (!visibleUSADestinations.some((d) => d.id === id)) return;
      resetUSAFilters();
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
      <FilterStatus className="us-status--inline" />
      {list.length === 0 ? (
        <div className="asia-empty">
          <p className="asia-empty__title">No destinations match these filters.</p>
          <p>Try fewer travel styles, or ask us. Most USA trips are built to order.</p>
          <div className="asia-empty__cta">
            <button type="button" className="pkg-btn pkg-btn--outline" onClick={resetUSAFilters}>
              <RotateCcw size={16} aria-hidden="true" /> Reset filters
            </button>
            <a className="pkg-btn asia-btn--navy" href={USA_ENQUIRY} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={16} aria-hidden="true" /> Ask Karvaahh
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
                <USADestinationCard
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
      <USADestinationModal d={openId ? usaDestinationById(openId) ?? null : null} onClose={() => setOpenId(null)} onPackages={viewPackages} />
    </div>
  );
}
