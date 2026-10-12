"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "motion/react";
import { Check, RotateCcw, SlidersHorizontal, X } from "lucide-react";
import { bookableCountries, europeCountries } from "@/data/europe/countries";
import { activePackages } from "@/data/europe/packages";
import { filterRegions, regionById } from "@/data/europe/regions";
import { quickStyles, styleLabel } from "@/data/europe/travel-styles";
import {
  countryMatches,
  hasActiveFilters,
  packageMatches,
  resetFilters,
  scrollToId,
  setExplorer,
  toggleStyle,
  useExplorer,
} from "@/lib/europe/explorer";

const sortedCountries = [...bookableCountries].sort((a, b) => a.name.localeCompare(b.name));

/**
 * Quick filter bar under the hero. Mobile: horizontally scrolling chips.
 * Desktop: wrapped pills. Once it scrolls out of view, a slim sticky summary
 * (active filters, counts, edit, reset) follows the reader through the
 * directory, map and packages, which all live in the same wrapper.
 */
export default function EuropeFilters() {
  const s = useExplorer();
  const ref = useRef<HTMLDivElement>(null);
  const [past, setPast] = useState(false);
  const filtering = hasActiveFilters(s);

  const counts = useMemo(
    () => ({
      countries: europeCountries.filter((c) => c.operationalStatus !== "inactive" && countryMatches(c, s)).length,
      packages: activePackages.filter((p) => !p.custom && packageMatches(p, s)).length,
    }),
    [s],
  );

  // The summary strip sticks just below the site's sticky header, whatever its height.
  useEffect(() => {
    const header = document.querySelector<HTMLElement>("header.sticky");
    if (!header) return;
    const root = document.documentElement;
    const sync = () => root.style.setProperty("--eu-stick", `${Math.round(header.getBoundingClientRect().height)}px`);
    sync();
    const ro = new ResizeObserver(sync);
    ro.observe(header);
    return () => ro.disconnect();
  }, []);

  // Show the summary only after the full bar has scrolled up out of view.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setPast(!e.isIntersecting && e.boundingClientRect.top < 0));
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const summary = [
    s.region !== "all" ? regionById(s.region).short : null,
    ...s.styles.map(styleLabel),
    s.country !== "all" ? europeCountries.find((c) => c.id === s.country)?.name : null,
  ].filter(Boolean) as string[];

  // Styles chosen elsewhere (style grid, collections) that are not quick chips.
  const extraStyles = s.styles.filter((id) => !quickStyles.some((q) => q.id === id));

  return (
    <>
    <div ref={ref} id="europe-filters" className="eu-filters" role="search" aria-label="Filter Europe destinations and packages">
      <div className="pkg-container eu-filters__inner">
        <div className="eu-filters__group" role="group" aria-label="Region">
          <span className="eu-filters__label" aria-hidden="true">Region</span>
          <ul className="eu-filters__row">
            {[{ id: "all" as const, short: "All Europe" }, ...filterRegions].map((r) => {
              const active = s.region === r.id;
              return (
                <li key={r.id}>
                  <button
                    type="button"
                    className={`asia-chip eu-chip${active ? " is-active" : ""}`}
                    aria-pressed={active}
                    onClick={() => setExplorer({ region: r.id })}
                  >
                    {active && (
                      <motion.span layoutId="eu-region-pill" className="asia-chip__bg" transition={{ type: "spring", stiffness: 420, damping: 34 }} />
                    )}
                    <span className="asia-chip__text">{r.short}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="eu-filters__group" role="group" aria-label="Travel style (combine several)">
          <span className="eu-filters__label" aria-hidden="true">Style</span>
          <ul className="eu-filters__row">
            {quickStyles.map((st) => {
              const active = s.styles.includes(st.id);
              return (
                <li key={st.id}>
                  <button
                    type="button"
                    className={`asia-chip eu-chip eu-chip--style${active ? " is-active" : ""}`}
                    aria-pressed={active}
                    onClick={() => toggleStyle(st.id)}
                  >
                    {active && <Check size={14} aria-hidden="true" className="eu-chip__tick" />}
                    <span className="asia-chip__text">{st.label}</span>
                  </button>
                </li>
              );
            })}
            {extraStyles.map((id) => (
              <li key={id}>
                <button
                  type="button"
                  className="asia-chip eu-chip eu-chip--style is-active"
                  aria-label={`Remove ${styleLabel(id)} filter`}
                  onClick={() => toggleStyle(id)}
                >
                  <span className="asia-chip__text">{styleLabel(id)}</span>
                  <X size={14} aria-hidden="true" className="eu-chip__tick" />
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="eu-filters__status">
          <label className="asia-select eu-filters__country">
            <span className="pkg-sr">Country</span>
            <select value={s.country} onChange={(e) => setExplorer({ country: e.target.value })}>
              <option value="all">Any country</option>
              {sortedCountries.map((c) => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
          </label>
          <p className="asia-count eu-count" aria-live="polite">
            <a href="#explore"><strong>{counts.countries}</strong> {counts.countries === 1 ? "destination" : "destinations"}</a>
            <span aria-hidden="true"> / </span>
            <a href="#packages"><strong>{counts.packages}</strong> {counts.packages === 1 ? "package" : "packages"}</a>
          </p>
          {filtering && (
            <button type="button" className="pkg-btn pkg-btn--text asia-reset" onClick={resetFilters}>
              <RotateCcw size={15} aria-hidden="true" /> Reset Filters
            </button>
          )}
        </div>
      </div>
    </div>

    {/* Zero-height sticky anchor; the strip slides in from under the header. */}
    <div className="eu-mini" data-show={past || undefined} aria-hidden={!past}>
      <div className="eu-mini__bar">
        <div className="pkg-container eu-mini__inner">
          <p className="eu-mini__text">
            <span className="eu-mini__filters">{summary.length ? summary.join(" · ") : "All of Europe"}</span>
            <span className="eu-mini__counts">
              {counts.countries} destinations / {counts.packages} packages
            </span>
          </p>
          <button type="button" className="eu-mini__btn" tabIndex={past ? 0 : -1} onClick={() => scrollToId("europe-filters")}>
            <SlidersHorizontal size={15} aria-hidden="true" /> Edit
          </button>
          {filtering && (
            <button type="button" className="eu-mini__btn" tabIndex={past ? 0 : -1} onClick={resetFilters}>
              <RotateCcw size={15} aria-hidden="true" /> Reset
            </button>
          )}
        </div>
      </div>
    </div>
    </>
  );
}
