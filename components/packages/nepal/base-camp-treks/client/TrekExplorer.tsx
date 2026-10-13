"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type CSSProperties } from "react";
import { ArrowRight, Clock, Gauge, MountainSnow } from "lucide-react";
import { filters, treks, trekCta } from "../data/treks";
import type { TrekFilter } from "../types";

/**
 * Filter bar + destination cards. Every card is in the server HTML; filtering
 * only toggles `hidden`, so crawlers and no-JS visitors see the full list.
 */
export function TrekExplorer() {
  const [active, setActive] = useState<TrekFilter["id"]>("all");
  const visible = treks.filter((t) => active === "all" || t.categories.includes(active));

  return (
    <>
      <div className="nbc-filters" role="group" aria-label="Filter base camp treks" data-reveal="">
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            className="nbc-filter"
            aria-pressed={active === f.id}
            onClick={() => setActive(f.id)}
          >
            {f.label}
          </button>
        ))}
      </div>
      <p className="nbc-sr-only" aria-live="polite">
        Showing {visible.length} of {treks.length} treks
      </p>

      <ul className="nbc-trek-grid">
        {treks.map((trek, i) => {
          const cta = trekCta(trek);
          const shown = visible.includes(trek);
          return (
            <li
              key={trek.id}
              hidden={!shown}
              className="nbc-trek"
              data-reveal=""
              style={{ "--nbc-i": i % 3 } as CSSProperties}
            >
              <article className="nbc-trek__card" aria-labelledby={`trek-${trek.id}`}>
                <div className="nbc-trek__media">
                  <Image
                    src={trek.image.src}
                    alt={trek.image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                    style={trek.image.focus ? { objectPosition: trek.image.focus } : undefined}
                  />
                  <span className="nbc-trek__difficulty">{trek.difficulty}</span>
                </div>

                <div className="nbc-trek__body">
                  <p className="nbc-trek__region">{trek.region}</p>
                  <h3 id={`trek-${trek.id}`} className="nbc-trek__title">
                    {trek.name}
                  </h3>
                  <p className="nbc-trek__summary">{trek.summary}</p>

                  <ul className="nbc-tags" aria-label="Experiences">
                    {trek.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>

                  <dl className="nbc-trek__facts">
                    <div>
                      <dt>
                        <Clock aria-hidden="true" size={16} /> Typical duration
                      </dt>
                      <dd>{trek.duration}</dd>
                    </div>
                    <div>
                      <dt>
                        <MountainSnow aria-hidden="true" size={16} /> Max altitude
                      </dt>
                      <dd>
                        {trek.maxAltitude}
                        {trek.altitudeNote ? <small>{trek.altitudeNote}</small> : null}
                      </dd>
                    </div>
                    <div>
                      <dt>
                        <Gauge aria-hidden="true" size={16} /> Difficulty
                      </dt>
                      <dd>{trek.difficulty}</dd>
                    </div>
                  </dl>

                  <div className="nbc-trek__actions">
                    <Link
                      href={cta.href}
                      className="nbc-btn nbc-btn--primary nbc-btn--sm"
                      aria-label={`${cta.label}: ${trek.name}`}
                    >
                      {cta.label}
                      <ArrowRight aria-hidden="true" size={16} className="nbc-btn__arrow" />
                    </Link>
                    {trek.related ? (
                      <Link href={trek.related.href} className="nbc-text-link">
                        {trek.related.label}
                      </Link>
                    ) : null}
                  </div>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </>
  );
}
