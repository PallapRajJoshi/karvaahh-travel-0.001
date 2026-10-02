"use client";

import { resetFilters, setFilters, toggleFilter } from "@/lib/packages/filter-store";
import { formatMoney, type Facet, type Facets, type FilterState } from "@/lib/packages/query";

type ListKey = "countries" | "categories" | "durations" | "styles" | "meals" | "transports";

function Group({ legend, items, k, f, idp }: { legend: string; items: Facet[]; k: ListKey; f: FilterState; idp: string }) {
  if (!items.length) return null;
  return (
    <fieldset className="pkg-filter__group">
      <legend>{legend}</legend>
      <ul>
        {items.map((it) => {
          const id = `${idp}-${k}-${it.id}`;
          return (
            <li key={it.id}>
              <input id={id} type="checkbox" checked={f[k].includes(it.id)} onChange={() => toggleFilter(k, it.id)} />
              <label htmlFor={id}>
                {it.label} <span className="pkg-filter__count">{it.count}</span>
              </label>
            </li>
          );
        })}
      </ul>
    </fieldset>
  );
}

export default function FilterPanel({ f, facets, idp }: { f: FilterState; facets: Facets; idp: string }) {
  return (
    <div className="pkg-filter">
      <Group legend="Country" items={facets.countries} k="countries" f={f} idp={idp} />
      <Group legend="Category" items={facets.categories} k="categories" f={f} idp={idp} />
      <Group legend="Duration" items={facets.durations} k="durations" f={f} idp={idp} />
      {facets.price && (
        <fieldset className="pkg-filter__group">
          <legend>Budget (INR packages)</legend>
          <label htmlFor={`${idp}-budget`} className="pkg-filter__range-label">
            Up to <strong>{formatMoney(f.maxPrice ?? facets.price.max, "INR")}</strong>
          </label>
          <input
            id={`${idp}-budget`}
            type="range"
            min={facets.price.min}
            max={facets.price.max}
            step={1000}
            value={f.maxPrice ?? facets.price.max}
            onChange={(e) => {
              const v = Number(e.target.value);
              setFilters({ maxPrice: v >= facets.price!.max ? null : v });
            }}
          />
        </fieldset>
      )}
      <Group legend="Travel style" items={facets.styles} k="styles" f={f} idp={idp} />
      <Group legend="Meal plan" items={facets.meals} k="meals" f={f} idp={idp} />
      <Group legend="Transport" items={facets.transports} k="transports" f={f} idp={idp} />
      <button type="button" className="pkg-btn pkg-btn--text pkg-filter__reset" onClick={resetFilters}>
        Clear all filters
      </button>
    </div>
  );
}
