"use client";

import { useState, type CSSProperties } from "react";
import Link from "next/link";
import { ArrowRight, MapPin, MessageCircle } from "lucide-react";
import { CATEGORY_LABEL, CATEGORY_ORDER, type Destination, type DestinationCategory } from "../data/filters";
import { Photo } from "../ui/Photo";

type Filter = "all" | DestinationCategory;

/**
 * Filterable destination grid. The first render shows every destination, so
 * all links are in the server HTML and stay crawlable.
 */
export function DestinationExplorer({ items }: { items: Destination[] }) {
  const [filter, setFilter] = useState<Filter>("all");
  const visible = filter === "all" ? items : items.filter((d) => d.categories.includes(filter));
  const count = (id: Filter) => (id === "all" ? items.length : items.filter((d) => d.categories.includes(id)).length);

  return (
    <>
      <div className="nei-filters" role="group" aria-label="Filter Northeast India destinations">
        {(["all", ...CATEGORY_ORDER] as Filter[]).map((id) => (
          <button key={id} type="button" className="nei-chip" aria-pressed={filter === id} onClick={() => setFilter(id)}>
            {id === "all" ? "All Destinations" : CATEGORY_LABEL[id]}
            <span className="nei-chip__count" aria-hidden="true">
              {count(id)}
            </span>
          </button>
        ))}
      </div>

      <p className="nei-sr-only" aria-live="polite">
        {`Showing ${visible.length} ${visible.length === 1 ? "destination" : "destinations"}`}
      </p>

      {/* Re-keying on filter replays the staggered entrance for the new set. */}
      <ul className="nei-dests" key={filter}>
        {visible.map((d, i) => (
          <li key={d.id} className="nei-dest" style={{ "--nei-i": i } as CSSProperties}>
            <article aria-labelledby={`dest-${d.id}`}>
              <div className="nei-dest__media">
                <Photo image={d.image} sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw" />
                <span className="nei-dest__state">
                  <MapPin aria-hidden="true" size={12} /> {d.stateName}
                </span>
              </div>
              <div className="nei-dest__body">
                <h3 id={`dest-${d.id}`} className="nei-dest__name">
                  {d.name}
                </h3>
                <p className="nei-dest__text">{d.highlight}</p>
                <ul className="nei-tags" aria-label={`Experiences in ${d.name}`}>
                  {d.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <Link href={d.link.href} className="nei-link">
                  {d.link.kind === "enquiry" ? <MessageCircle aria-hidden="true" size={15} /> : null}
                  {d.link.label}
                  <ArrowRight aria-hidden="true" size={15} />
                </Link>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}
