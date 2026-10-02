"use client";

import { useMemo, useState } from "react";
import { countBy, countExperience, pick, FEATURED } from "@/lib/destinations/data";
import { filterDestinations } from "@/lib/destinations/present";
import { COUNTRIES, EXPERIENCES, REGIONS } from "@/lib/destinations/taxonomy";
import type { CountryId, RegionId, ResolveContext, SortId } from "@/lib/destinations/types";
import { EXPLORER_ANCHOR, paramsKey, useExplorerParams } from "@/lib/destinations/url-state";
import { DestinationCard } from "./cards/DestinationCard";
import { DestinationCountryCard } from "./cards/DestinationCountryCard";
import { DestinationExperienceCard } from "./cards/DestinationExperienceCard";
import { CloseIcon } from "./Icons";
import { Section } from "./Section";
import "./explorer.css";

const PAGE_SIZE = 24;

const SORTS: { id: SortId; label: string }[] = [
  { id: "featured", label: "Featured" },
  { id: "popular", label: "Popular" },
  { id: "az", label: "A–Z" },
  { id: "new", label: "Recently added" },
];

/**
 * Interactive destination explorer: country selector, experience tiles, region + sort,
 * live result count and progressive "show more". All state lives in the URL.
 */
export function Explorer({ ctx }: { ctx: ResolveContext }) {
  const [params, update, clear] = useExplorerParams();
  const key = paramsKey(params);
  const [paging, setPaging] = useState({ key: "", extra: 0 });

  const results = useMemo(() => filterDestinations(params), [params]);
  const shown = PAGE_SIZE + (paging.key === key ? paging.extra : 0);
  const visible = results.slice(0, shown);
  const remaining = results.length - visible.length;
  const filtered = Boolean(params.country || params.exp || params.region || params.q.trim());

  const countryName = COUNTRIES.find((c) => c.id === params.country)?.label;
  const expName = EXPERIENCES.find((e) => e.id === params.exp)?.label;

  return (
    <Section
      id={EXPLORER_ANCHOR}
      tone="sand"
      eyebrow="Nepal · India · International"
      title="Explore the world, your way"
      lede="Start with a country, then narrow by the kind of journey you have in mind. Every filter updates instantly and can be shared as a link."
    >
      <div className="dx">
        <div className="dx__countries" role="group" aria-label="Choose a country">
          {COUNTRIES.map((c) => (
            <DestinationCountryCard
              key={c.id}
              country={c}
              count={countBy(c.id)}
              src={ctx.images[`country-${c.id}`]}
              pressed={params.country === c.id}
              onSelect={() =>
                update({
                  country: params.country === c.id ? undefined : (c.id as CountryId),
                  region: undefined,
                })
              }
            />
          ))}
        </div>

        <div className="dx__exps" role="group" aria-label="Filter by experience">
          {EXPERIENCES.map((e) => (
            <DestinationExperienceCard
              key={e.id}
              experience={e}
              count={countExperience(e.id, params.country)}
              pressed={params.exp === e.id}
              onSelect={() => update({ exp: params.exp === e.id ? undefined : e.id })}
            />
          ))}
        </div>

        <div className="dx__bar">
          <p className="dx__count" role="status" aria-live="polite">
            <strong>{results.length}</strong> {results.length === 1 ? "destination" : "destinations"}
            {countryName ? ` in ${countryName}` : ""}
            {expName ? ` · ${expName}` : ""}
          </p>

          <div className="dx__controls">
            {params.q.trim() ? (
              <button type="button" className="dx__chip" onClick={() => update({ q: "" })}>
                Search: “{params.q.trim()}”
                <CloseIcon />
                <span className="dh-sr-only">Clear search</span>
              </button>
            ) : null}

            <label className="dx__field">
              <span>Region</span>
              <select
                value={params.region ?? ""}
                onChange={(e) => update({ region: (e.target.value || undefined) as RegionId | undefined })}
              >
                <option value="">All regions</option>
                {REGIONS.map((r) => (
                  <option key={r.id} value={r.id}>
                    {r.label}
                  </option>
                ))}
              </select>
            </label>

            <label className="dx__field">
              <span>Sort</span>
              <select value={params.sort} onChange={(e) => update({ sort: e.target.value as SortId })}>
                {SORTS.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.label}
                  </option>
                ))}
              </select>
            </label>

            <button type="button" className="dx__clear" onClick={clear} disabled={!filtered && params.sort === "featured"}>
              Clear filters
            </button>
          </div>
        </div>

        {results.length ? (
          <>
            <ul key={key} className="dx__grid" role="list">
              {visible.map((d) => (
                <li key={d.slug}>
                  <DestinationCard destination={d} ctx={ctx} />
                </li>
              ))}
            </ul>
            {remaining > 0 ? (
              <div className="dx__more">
                <button
                  type="button"
                  className="dh-btn dh-btn--dark"
                  onClick={() => setPaging({ key, extra: (paging.key === key ? paging.extra : 0) + PAGE_SIZE })}
                >
                  Show {Math.min(PAGE_SIZE, remaining)} more
                </button>
                <p>
                  Showing {visible.length} of {results.length}
                </p>
              </div>
            ) : null}
          </>
        ) : (
          <div className="dx__empty">
            <h3>No destinations match those filters yet</h3>
            <p>Try removing a filter, or start from one of our most-loved places.</p>
            <button type="button" className="dh-btn dh-btn--dark" onClick={clear}>
              Clear filters
            </button>
            <ul className="dx__suggest" role="list">
              {pick(FEATURED.slice(0, 4)).map((d) => (
                <li key={d.slug}>
                  <button type="button" className="dx__chip" onClick={() => update({ country: undefined, exp: undefined, region: undefined, q: d.name })}>
                    {d.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Section>
  );
}
