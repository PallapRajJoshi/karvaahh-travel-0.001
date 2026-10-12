"use client";

import { useMemo, useState } from "react";
import { flushSync } from "react-dom";
import { ANCHORS } from "../data/config";
import { regions, weddingDestinations } from "../data/destinations";
import { styleFilters, weddingStyles } from "../data/styles";
import type { StyleFilter } from "../data/types";
import Arrow from "../shared/Arrow";
import "./StyleFinder.css";

type FilterId = StyleFilter["id"];

const regionLabel = (id: string) => regions.find((r) => r.id === id)?.label ?? "";

export default function StyleFinder() {
  const [filter, setFilter] = useState<FilterId>("all");

  const styles = useMemo(
    () => (filter === "all" ? weddingStyles : weddingStyles.filter((s) => s.tags.includes(filter))),
    [filter],
  );

  const matches = useMemo(
    () => (filter === "all" ? [] : weddingDestinations.filter((d) => d.styles.includes(filter))),
    [filter],
  );

  const choose = (id: FilterId) => {
    if (id === filter) return;
    const doc = document as Document & { startViewTransition?: (cb: () => void) => unknown };
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (doc.startViewTransition && !reduce) {
      doc.startViewTransition(() => flushSync(() => setFilter(id)));
    } else {
      setFilter(id);
    }
  };

  const activeLabel = styleFilters.find((f) => f.id === filter)?.label ?? "All";

  return (
    <section id={ANCHORS.styles} className="dw-section dw-styles" aria-labelledby="dw-styles-title">
      <div className="dw-container">
        <div className="dw-styles__head" data-reveal="">
          <p className="dw-eyebrow">Find your wedding style</p>
          <h2 id="dw-styles-title" className="dw-h2">
            The size of the party. <em>The shape of the place.</em>
          </h2>
          <p className="dw-lede">
            Most couples choose one of each — a scale and a setting. Pick a style to see which destinations suit it.
          </p>
        </div>

        <div className="dw-styles__filters" role="group" aria-label="Filter wedding styles">
          {styleFilters.map((f) => (
            <button
              key={f.id}
              type="button"
              className={`dw-styles__chip${f.id === filter ? " is-active" : ""}`}
              aria-pressed={f.id === filter}
              onClick={() => choose(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <p className="dw-sr-only" aria-live="polite">
          {filter === "all"
            ? `Showing all ${styles.length} wedding styles`
            : `${activeLabel}: ${matches.length} matching destinations`}
        </p>

        <ul className={`dw-styles__grid${filter !== "all" ? " is-filtered" : ""}`}>
          {styles.map((s) => (
            <li
              key={s.id}
              className="dw-styles__card"
              style={{ viewTransitionName: `dw-style-${s.id}` }}
            >
              <h3 className="dw-styles__name">{s.name}</h3>
              <p className="dw-styles__line">{s.line}</p>
              <p className="dw-styles__desc">{s.description}</p>
            </li>
          ))}
        </ul>

        {filter !== "all" && (
          <div className="dw-styles__matches" style={{ viewTransitionName: "dw-style-matches" }}>
            <p className="dw-styles__matches-title">
              <span>{matches.length}</span> destinations for a {activeLabel.toLowerCase()} wedding
            </p>
            <ul className="dw-styles__match-list">
              {matches.map((d) => (
                <li key={d.slug}>
                  <span className="dw-styles__match-name">{d.name}</span>
                  <span className="dw-styles__match-region">{regionLabel(d.region)}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="dw-styles__cta">
          <a href={`#${ANCHORS.plan}`} className="dw-btn">
            Find My Wedding Style <Arrow />
          </a>
          <a href={`#${ANCHORS.destinations}`} className="dw-link">
            Browse all destinations <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}
