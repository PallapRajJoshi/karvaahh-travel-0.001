"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { TravelPackage } from "@/data/packages/package-types";
import { CUSTOM_TRIP_ROUTE } from "@/lib/packages/config";
import {
  activeFilterCount,
  hydrateFiltersFromUrl,
  resetFilters,
  RESULTS_ANCHOR,
  setFilters,
  toggleFilter,
  useFilters,
} from "@/lib/packages/filter-store";
import {
  applyFilters,
  SORT_OPTIONS,
  sortPackages,
  type Facets,
  type SortKey,
} from "@/lib/packages/query";
import FilterPanel from "./FilterPanel";
import PackageCard from "./PackageCard";
import QuickView from "./QuickView";
import Sheet from "./Sheet";

const PAGE_SIZE = 12;

export default function PackageExplorer({ packages, facets }: { packages: TravelPackage[]; facets: Facets }) {
  const f = useFilters();
  const [quick, setQuick] = useState<TravelPackage | null>(null);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [limit, setLimit] = useState<{ sig: string; n: number }>({ sig: "", n: PAGE_SIZE });

  useEffect(() => {
    hydrateFiltersFromUrl();
  }, []);

  const results = useMemo(() => sortPackages(applyFilters(packages, f), f.sort), [packages, f]);
  const sig = JSON.stringify(f);
  const shown = limit.sig === sig ? limit.n : PAGE_SIZE;
  const visible = results.slice(0, shown);
  const active = activeFilterCount(f);

  const chips: { key: string; label: string; remove: () => void }[] = [];
  if (f.q) chips.push({ key: "q", label: `“${f.q}”`, remove: () => setFilters({ q: "" }) });
  (
    [
      ["countries", facets.countries],
      ["categories", facets.categories],
      ["durations", facets.durations],
      ["styles", facets.styles],
      ["meals", facets.meals],
      ["transports", facets.transports],
    ] as const
  ).forEach(([k, items]) =>
    f[k].forEach((id) => {
      const label = items.find((i) => i.id === id)?.label ?? id;
      chips.push({ key: `${k}-${id}`, label, remove: () => toggleFilter(k, id) });
    }),
  );
  if (f.maxPrice !== null) chips.push({ key: "max", label: `Up to ₹${f.maxPrice.toLocaleString("en-IN")}`, remove: () => setFilters({ maxPrice: null }) });

  return (
    <section id={RESULTS_ANCHOR} className="pkg-section pkg-explorer" aria-labelledby="pkg-all-h">
      <div className="pkg-container">
        <header className="pkg-section__head">
          <p className="pkg-eyebrow">All journeys</p>
          <h2 id="pkg-all-h" className="pkg-h2">Find your next complete journey</h2>
          <p className="pkg-lede">Search, filter and compare every Karvaahh package in one place.</p>
        </header>

        <div className="pkg-explorer__layout">
          <aside className="pkg-explorer__aside" aria-label="Package filters">
            <FilterPanel f={f} facets={facets} idp="d" />
          </aside>

          <div className="pkg-explorer__main">
            <div className="pkg-toolbar">
              <div className="pkg-toolbar__search">
                <label htmlFor="pkg-q" className="pkg-sr">Search packages</label>
                <input
                  id="pkg-q"
                  type="search"
                  className="pkg-input"
                  placeholder="Search packages, destinations or experiences..."
                  value={f.q}
                  onChange={(e) => setFilters({ q: e.target.value })}
                  autoComplete="off"
                />
              </div>
              <button type="button" className="pkg-btn pkg-btn--outline pkg-toolbar__filters" onClick={() => setSheetOpen(true)} aria-haspopup="dialog">
                Filters{active > 0 ? ` (${active})` : ""}
              </button>
              <div className="pkg-toolbar__sort">
                <label htmlFor="pkg-sort">Sort by</label>
                <select id="pkg-sort" className="pkg-input" value={f.sort} onChange={(e) => setFilters({ sort: e.target.value as SortKey })}>
                  {SORT_OPTIONS.map((o) => <option key={o.id} value={o.id}>{o.label}</option>)}
                </select>
              </div>
            </div>

            <p className="pkg-count" role="status" aria-live="polite">
              {results.length} {results.length === 1 ? "journey" : "journeys"} found
            </p>

            {chips.length > 0 && (
              <ul className="pkg-chips" aria-label="Active filters">
                {chips.map((c) => (
                  <li key={c.key}>
                    <button type="button" className="pkg-chip" onClick={c.remove} aria-label={`Remove filter ${c.label}`}>
                      {c.label} <span aria-hidden="true">×</span>
                    </button>
                  </li>
                ))}
                <li><button type="button" className="pkg-btn pkg-btn--text" onClick={resetFilters}>Clear all</button></li>
              </ul>
            )}

            {results.length === 0 ? (
              <div className="pkg-empty">
                <h3>No journeys match yet</h3>
                <p>Try removing a filter, or tell us what you have in mind and we will plan it for you.</p>
                <div className="pkg-card__actions">
                  <button type="button" className="pkg-btn pkg-btn--outline" onClick={resetFilters}>Clear filters</button>
                  <Link className="pkg-btn pkg-btn--primary" href={CUSTOM_TRIP_ROUTE}>Plan a custom trip</Link>
                </div>
              </div>
            ) : (
              <ul className="pkg-grid pkg-grid--results">
                {visible.map((p, i) => (
                  <li key={p.id} className="pkg-grid__item" style={{ ["--i" as string]: Math.min(i, 8) }}>
                    <PackageCard pkg={p} onQuickView={setQuick} priority={false} />
                  </li>
                ))}
              </ul>
            )}

            {results.length > shown && (
              <div className="pkg-more">
                <button type="button" className="pkg-btn pkg-btn--outline" onClick={() => setLimit({ sig, n: shown + PAGE_SIZE })}>
                  Show more journeys ({results.length - shown} more)
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Sheet open={sheetOpen} onClose={() => setSheetOpen(false)} label="Filters" variant="filters">
        <div className="pkg-sheet__scroll">
          <h2 className="pkg-sheet__title">Filters</h2>
          <FilterPanel f={f} facets={facets} idp="m" />
        </div>
        <div className="pkg-sheet__footer">
          <button type="button" className="pkg-btn pkg-btn--primary pkg-btn--block" onClick={() => setSheetOpen(false)}>
            Show {results.length} {results.length === 1 ? "journey" : "journeys"}
          </button>
        </div>
      </Sheet>

      <QuickView pkg={quick} onClose={() => setQuick(null)} />
    </section>
  );
}
