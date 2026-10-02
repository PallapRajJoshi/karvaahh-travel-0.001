"use client";

import Link from "next/link";
import { useMemo } from "react";
import { scrollToResults, setFilters, useFilters } from "@/lib/packages/filter-store";
import { matchesText } from "@/lib/packages/query";

export interface SearchEntry {
  id: string;
  name: string;
  meta: string;
  text: string;
  href?: string;
}

export default function HeroSearch({ index, suggestions }: { index: SearchEntry[]; suggestions: string[] }) {
  const { q } = useFilters();
  const matches = useMemo(() => (q.trim() ? index.filter((e) => matchesText(e.text, q)) : []), [index, q]);

  return (
    <div className="pkg-search" role="search">
      <form
        className="pkg-search__form"
        onSubmit={(e) => {
          e.preventDefault();
          scrollToResults();
        }}
      >
        <label htmlFor="pkg-hero-q" className="pkg-sr">Search packages, destinations or experiences</label>
        <svg className="pkg-search__icon" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
          <circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M20 20l-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <input
          id="pkg-hero-q"
          type="search"
          className="pkg-search__input"
          placeholder="Search packages, destinations or experiences..."
          value={q}
          onChange={(e) => setFilters({ q: e.target.value })}
          autoComplete="off"
        />
        <button type="submit" className="pkg-btn pkg-btn--primary">Search</button>
      </form>

      {q.trim() ? (
        <div className="pkg-search__results" aria-live="polite">
          <p className="pkg-search__count">
            {matches.length} {matches.length === 1 ? "journey" : "journeys"} found
          </p>
          {matches.length > 0 && (
            <ul>
              {matches.slice(0, 5).map((m) => (
                <li key={m.id}>
                  {m.href ? (
                    <Link href={m.href}>
                      <strong>{m.name}</strong>
                      <span>{m.meta}</span>
                    </Link>
                  ) : (
                    <button type="button" onClick={scrollToResults}>
                      <strong>{m.name}</strong>
                      <span>{m.meta}</span>
                    </button>
                  )}
                </li>
              ))}
            </ul>
          )}
          {matches.length > 5 && (
            <button type="button" className="pkg-btn pkg-btn--text" onClick={scrollToResults}>
              See all {matches.length} results
            </button>
          )}
        </div>
      ) : (
        suggestions.length > 0 && (
          <p className="pkg-search__suggest">
            <span>Try:</span>
            {suggestions.map((s) => (
              <button key={s} type="button" className="pkg-chip pkg-chip--ghost" onClick={() => setFilters({ q: s })}>
                {s}
              </button>
            ))}
          </p>
        )
      )}
    </div>
  );
}
