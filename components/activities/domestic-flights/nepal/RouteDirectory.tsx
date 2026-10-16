"use client";

import { useMemo, useState } from "react";
import SectionHeading from "@/components/activities/shared/SectionHeading";
import ActivityFilters from "@/components/activities/shared/ActivityFilters";
import {
  ROUTES_VERIFIED,
  STATUS_LABEL,
  filterRoutes,
  routeFilters,
  routes,
  type RouteFilterId,
} from "@/data/domestic-flights/nepal-domestic-flights";

export default function RouteDirectory() {
  const [filter, setFilter] = useState<RouteFilterId>("all");
  const [query, setQuery] = useState("");

  const results = useMemo(() => filterRoutes(routes, filter, query), [filter, query]);

  return (
    <section aria-labelledby="route-directory">
      <SectionHeading
        title="Nepal Domestic Flight Routes"
        lead={`Every route below is listed on an operator's own website or timetable, checked ${ROUTES_VERIFIED}. Durations are what the airline states; distances are approximate straight-line kilometres between airports, not the distance flown.`}
        id="route-directory"
      />

      <div className="nf-search">
        <label className="nf-search__label" htmlFor="nf-route-search">
          Search by city, airport code or airline
        </label>
        <input
          id="nf-route-search"
          className="nf-search__input"
          type="search"
          placeholder="e.g. Pokhara, LUA, Buddha Air"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoComplete="off"
        />
      </div>

      <ActivityFilters
        label="Filter flight routes"
        options={routeFilters}
        value={filter}
        onChange={setFilter}
        resultCount={results.length}
        resultNoun={results.length === 1 ? "route" : "routes"}
      />

      {results.length === 0 ? (
        <p className="nf-empty">
          No listed route matches. Try another city or filter — or ask us, as some airstrips are served by charter only.
        </p>
      ) : (
        <div className="nf-table-wrap">
          <table className="nf-table">
            <caption className="nf-sr">
              Domestic flight routes in Nepal with airlines, duration, approximate distance and service status
            </caption>
            <thead>
              <tr>
                <th scope="col">Route</th>
                <th scope="col">Airlines</th>
                <th scope="col">Service</th>
                <th scope="col">Approx. duration</th>
                <th scope="col">Straight-line distance</th>
                <th scope="col">Status</th>
                <th scope="col">Good for</th>
                <th scope="col">Source</th>
              </tr>
            </thead>
            <tbody>
              {results.map((r) => (
                <tr key={r.id} data-group={r.group}>
                  <th scope="row" className="nf-table__route">
                    <span className="nf-route">
                      <span>
                        {r.from.city} <span className="nf-code">{r.from.code}</span>
                      </span>
                      <span className="nf-route__arrow" aria-label="to">
                        →
                      </span>
                      <span>
                        {r.to.city} <span className="nf-code">{r.to.code}</span>
                      </span>
                    </span>
                  </th>
                  <td data-label="Airlines">{r.airlines.join(", ")}</td>
                  <td data-label="Service">{r.service}</td>
                  <td data-label="Duration">{r.duration}</td>
                  <td data-label="Distance">≈ {r.distanceKm} km</td>
                  <td data-label="Status">
                    <span className={`nf-status nf-status--${r.status}`}>{STATUS_LABEL[r.status]}</span>
                    <span className="nf-table__note">{r.statusNote}</span>
                  </td>
                  <td data-label="Good for">{r.purpose}</td>
                  <td data-label="Source" className="nf-table__sources">
                    {r.sources.map((s) => (
                      <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer">
                        {s.label}
                      </a>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <p className="nf-footnote">
        Schedules change monthly and by season. A listed route is not a guarantee of a seat or a daily flight —
        we confirm the current operator, timing and fare before you book.
      </p>
    </section>
  );
}
