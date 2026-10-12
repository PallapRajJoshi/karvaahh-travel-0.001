"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, MessageCircle, RotateCcw } from "lucide-react";
import { activeRussiaPackages } from "@/data/russia/packages";
import { RUSSIA_ENQUIRY } from "@/lib/russia/config";
import { packageMatches, resetRussiaFilters, ruFiltering, useRussiaFilters } from "@/lib/russia/explorer";
import FilterStatus from "./FilterStatus";
import RuPackageCard from "./RuPackageCard";

const COLLAPSED = 6;

/** "Popular Russia Tour Packages": featured first, filtered by the shared store. */
export default function PopularPackages() {
  const s = useRussiaFilters();
  const filtering = ruFiltering(s);
  const [expanded, setExpanded] = useState(false);
  const list = useMemo(
    () => activeRussiaPackages.filter((p) => packageMatches(p, s)).sort((a, b) => Number(!!b.featured) - Number(!!a.featured)),
    [s],
  );
  const open = filtering || expanded;
  const shown = open ? list : list.slice(0, COLLAPSED);

  return (
    <div>
      <FilterStatus className="ru-status--inline" />
      {list.length === 0 ? (
        <div className="asia-empty">
          <p className="asia-empty__title">No packages match yet.</p>
          <p>We can still build this trip for you as a customized Russia tour.</p>
          <div className="asia-empty__cta">
            <button type="button" className="pkg-btn pkg-btn--outline" onClick={resetRussiaFilters}>
              <RotateCcw size={16} aria-hidden="true" /> Reset Filters
            </button>
            <a className="pkg-btn asia-btn--navy" href={RUSSIA_ENQUIRY} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={16} aria-hidden="true" /> Customize a Trip
            </a>
          </div>
        </div>
      ) : (
        <motion.ul layout className="asia-grid ru-pgrid">
          <AnimatePresence mode="popLayout" initial={false}>
            {shown.map((p, i) => (
              <motion.li
                key={p.id}
                layout
                className="asia-grid__item"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, delay: Math.min(i, 6) * 0.04 }}
              >
                <RuPackageCard p={p} sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw" />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      )}
      {!filtering && list.length > COLLAPSED && (
        <button type="button" className="asia-more" aria-expanded={open} onClick={() => setExpanded((v) => !v)}>
          {open ? "Show fewer packages" : `Show all ${list.length} packages`}
          {!open && <span className="asia-more__n">+{list.length - COLLAPSED}</span>}
          <ChevronDown size={18} aria-hidden="true" className={open ? "is-flipped" : ""} />
        </button>
      )}
    </div>
  );
}
