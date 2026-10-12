"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, MessageCircle, RotateCcw } from "lucide-react";
import { europeCountries } from "@/data/europe/countries";
import { groupRegions, type EuropeRegionId } from "@/data/europe/regions";
import { countryAnchor, enquireAbout } from "@/lib/europe/config";
import { countryMatches, hasActiveFilters, resetFilters, useExplorer } from "@/lib/europe/explorer";
import CountryCard from "./CountryCard";

/** Cards shown per region before "Show all" when no filter is applied. */
const COLLAPSED = 4;

export default function CountryDirectory({ packageCounts }: { packageCounts: Record<string, number> }) {
  const state = useExplorer();
  const [expanded, setExpanded] = useState<Set<EuropeRegionId>>(new Set());
  const filtering = hasActiveFilters(state);

  const groups = useMemo(() => {
    const hits = europeCountries.filter((c) => countryMatches(c, state));
    return groupRegions
      .map((r) => ({
        region: r,
        items: hits
          .filter((c) => c.region === r.id)
          // Bookable first, then by popularity; advisories sink to the end.
          .sort((a, b) => Number(a.operationalStatus !== "active") - Number(b.operationalStatus !== "active") || b.popularity - a.popularity),
      }))
      .filter((g) => g.items.length > 0);
  }, [state]);

  const total = groups.reduce((n, g) => n + g.items.filter((c) => c.operationalStatus !== "inactive").length, 0);

  // Deep links (#dest-france) from the map, seasons and related links: make sure
  // the card is rendered (filters cleared, region expanded) before scrolling to it.
  useEffect(() => {
    const reveal = () => {
      if (!window.location.hash.startsWith("#dest-")) return;
      const id = window.location.hash.slice("#dest-".length);
      const c = europeCountries.find((x) => x.id === id);
      if (!c) return;
      resetFilters();
      setExpanded((prev) => new Set(prev).add(c.region));
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          const el = document.getElementById(countryAnchor(c.id));
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

  const toggleRegion = (id: EuropeRegionId) =>
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  return (
    <div className="asia-explorer eu-directory">
      {total === 0 && (
        <div className="asia-empty">
          <p className="asia-empty__title">No destinations match this combination yet.</p>
          <p>Try removing a filter, or tell us what you have in mind. Karvaahh can often plan trips to places that are not listed here.</p>
          <div className="asia-empty__cta">
            <button type="button" className="pkg-btn pkg-btn--outline" onClick={resetFilters}>
              <RotateCcw size={16} aria-hidden="true" /> Reset Filters
            </button>
            <a className="pkg-btn asia-btn--navy" href={enquireAbout("a custom route")} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={16} aria-hidden="true" /> Ask Karvaahh
              <span className="pkg-sr"> (opens WhatsApp)</span>
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
                {shown.map((c, i) => (
                  <motion.li
                    key={c.id}
                    layout
                    initial={{ opacity: 0, y: 18, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.35, delay: Math.min(i, 8) * 0.03, ease: [0.2, 0.7, 0.2, 1] }}
                    className="asia-grid__item"
                  >
                    <CountryCard c={c} packageCount={packageCounts[c.id] ?? 0} />
                  </motion.li>
                ))}
              </AnimatePresence>
            </motion.ul>

            {!filtering && items.length > COLLAPSED && (
              <button type="button" className="asia-more" aria-expanded={open} onClick={() => toggleRegion(region.id)}>
                {open ? "Show fewer" : `Show all ${items.length} in ${region.name}`}
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
