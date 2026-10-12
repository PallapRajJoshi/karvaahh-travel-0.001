"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, MessageCircle, RotateCcw } from "lucide-react";
import { activeUSAPackages } from "@/data/usa/packages";
import { USA_ENQUIRY } from "@/lib/usa/config";
import { packageMatches, resetUSAFilters, usFiltering, useUSAFilters } from "@/lib/usa/explorer";
import USAPackageCard from "./USAPackageCard";

const COLLAPSED = 9;

/**
 * "Popular USA Tour Packages": popular templates first, then everything else.
 * Follows the shared store, so region, destination and travel-style filters
 * from anywhere on the page update it.
 */
export default function USAPackageGrid() {
  const s = useUSAFilters();
  const filtering = usFiltering(s);
  const [expanded, setExpanded] = useState(false);
  const list = useMemo(
    () => activeUSAPackages.filter((p) => packageMatches(p, s)).sort((a, b) => Number(!!b.popular) - Number(!!a.popular)),
    [s],
  );
  const open = filtering || expanded;
  const shown = open ? list : list.slice(0, COLLAPSED);

  return (
    <div>
      {list.length === 0 ? (
        <div className="asia-empty">
          <p className="asia-empty__title">No packages match this combination yet.</p>
          <p>We can still build it for you as a customized USA tour.</p>
          <div className="asia-empty__cta">
            <button type="button" className="pkg-btn pkg-btn--outline" onClick={resetUSAFilters}>
              <RotateCcw size={16} aria-hidden="true" /> Reset filters
            </button>
            <a className="pkg-btn asia-btn--navy" href={USA_ENQUIRY} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={16} aria-hidden="true" /> Customize a trip
            </a>
          </div>
        </div>
      ) : (
        <motion.ul layout className="us-pgrid">
          <AnimatePresence mode="popLayout" initial={false}>
            {shown.map((p, i) => (
              <motion.li
                key={p.id}
                layout
                className="us-pgrid__item"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, delay: Math.min(i, 6) * 0.04 }}
              >
                <USAPackageCard p={p} sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw" />
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
