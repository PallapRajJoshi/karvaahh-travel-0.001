"use client";

import { useState, type CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Clock, MapPin } from "lucide-react";
import { GROUP_LABEL, type Getaway, type GetawayGroup } from "../data/groups";

type Filter = "all" | GetawayGroup;

/**
 * Filterable getaway grid. The first render shows every card, so all package
 * links are in the server HTML and stay crawlable.
 */
export function GetawayExplorer({ items, groups }: { items: Getaway[]; groups: GetawayGroup[] }) {
  const [filter, setFilter] = useState<Filter>("all");
  const visible = filter === "all" ? items : items.filter((g) => g.groups.includes(filter));

  return (
    <>
      <div className="cpl-filters" role="group" aria-label="Filter couple getaways">
        {(["all", ...groups] as Filter[]).map((id) => (
          <button
            key={id}
            type="button"
            className="cpl-chip"
            aria-pressed={filter === id}
            onClick={() => setFilter(id)}
          >
            {id === "all" ? "All Getaways" : GROUP_LABEL[id]}
          </button>
        ))}
      </div>

      <p className="cpl-sr-only" aria-live="polite">
        {`Showing ${visible.length} ${visible.length === 1 ? "getaway" : "getaways"}`}
      </p>

      {/* Re-keying on filter replays the staggered entrance for the new set. */}
      <ul className="cpl-getaways" key={filter}>
        {visible.map((g, i) => (
          <li key={g.id} className="cpl-getaway" style={{ "--cpl-i": i } as CSSProperties}>
            <article aria-labelledby={`getaway-${g.id}`}>
              <div className="cpl-getaway__media">
                <Image
                  src={g.image.src}
                  alt={g.image.alt}
                  fill
                  sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  className="cpl-zoom"
                />
                <span className="cpl-getaway__kind">{g.kind}</span>
              </div>

              <div className="cpl-getaway__body">
                <h3 id={`getaway-${g.id}`} className="cpl-getaway__title">
                  {g.title}
                </h3>

                <dl className="cpl-getaway__facts">
                  {g.duration ? (
                    <div>
                      <dt>
                        <Clock aria-hidden="true" size={15} />
                        <span className="cpl-sr-only">Duration</span>
                      </dt>
                      <dd>{g.duration}</dd>
                    </div>
                  ) : null}
                  <div>
                    <dt>
                      <MapPin aria-hidden="true" size={15} />
                      <span className="cpl-sr-only">Destinations</span>
                    </dt>
                    <dd>{g.destinations.join(" · ")}</dd>
                  </div>
                </dl>

                <ul className="cpl-getaway__highlights" aria-label="Highlights">
                  {g.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>

                {g.inclusions?.length ? (
                  <div className="cpl-getaway__incl">
                    <p className="cpl-getaway__label">Included</p>
                    <ul>
                      {g.inclusions.map((inc) => (
                        <li key={inc}>
                          <Check aria-hidden="true" size={14} />
                          {inc}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <p className="cpl-getaway__label cpl-getaway__label--muted">
                    Inclusions confirmed with your quote
                  </p>
                )}

                <div className="cpl-getaway__foot">
                  <p className="cpl-getaway__price">{g.price}</p>
                  <div className="cpl-getaway__ctas">
                    <Link href={g.primary.href} className="cpl-btn cpl-btn--primary cpl-btn--sm">
                      {g.primary.label}
                      <ArrowRight aria-hidden="true" size={15} />
                    </Link>
                    <Link href={g.enquire.href} className="cpl-btn cpl-btn--text cpl-btn--sm">
                      {g.enquire.label}
                      <span className="cpl-sr-only">{` about ${g.title}`}</span>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}
