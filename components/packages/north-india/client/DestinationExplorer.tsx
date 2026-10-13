"use client";

import { useState, type CSSProperties } from "react";
import Link from "next/link";
import { ArrowRight, MapPin, MessageCircle } from "lucide-react";
import { CATEGORY_LABEL, CATEGORY_ORDER, type Destination, type DestinationCategory, type Region } from "../data/filters";
import { Photo } from "../ui/Photo";

type Filter = "all" | DestinationCategory;

/**
 * Filterable destination grid, grouped by region. The first render shows every
 * destination, so all links are in the server HTML and stay crawlable.
 */
export function DestinationExplorer({ items, regions }: { items: Destination[]; regions: Region[] }) {
  const [filter, setFilter] = useState<Filter>("all");
  const visible = filter === "all" ? items : items.filter((d) => d.categories.includes(filter));
  const groups = regions
    .map((r) => ({ region: r, items: visible.filter((d) => d.region === r.id) }))
    .filter((g) => g.items.length > 0);

  return (
    <>
      <div className="nin-filters" role="group" aria-label="Filter North India destinations">
        {(["all", ...CATEGORY_ORDER] as Filter[]).map((id) => (
          <button key={id} type="button" className="nin-chip" aria-pressed={filter === id} onClick={() => setFilter(id)}>
            {id === "all" ? "All Destinations" : CATEGORY_LABEL[id]}
          </button>
        ))}
      </div>

      <p className="nin-sr-only" aria-live="polite">
        {`Showing ${visible.length} ${visible.length === 1 ? "destination" : "destinations"}`}
      </p>

      {/* Re-keying on filter replays the staggered entrance for the new set. */}
      <div className="nin-regions" key={filter}>
        {groups.map(({ region, items: list }) => (
          <section key={region.id} className="nin-region" aria-labelledby={`region-${region.id}`}>
            <header className="nin-region__head">
              <h3 id={`region-${region.id}`} className="nin-region__name">
                {region.name}
                <span> — {region.theme}</span>
              </h3>
              <p className="nin-region__intro">{region.intro}</p>
            </header>

            <ul className="nin-dests">
              {list.map((d, i) => (
                <li key={d.id} className="nin-dest" style={{ "--nin-i": i } as CSSProperties}>
                  <article aria-labelledby={`dest-${d.id}`}>
                    <div className="nin-dest__media">
                      <Photo image={d.image} sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw" />
                    </div>
                    <div className="nin-dest__body">
                      <p className="nin-dest__area">
                        <MapPin aria-hidden="true" size={13} /> {d.area}
                      </p>
                      <h4 id={`dest-${d.id}`} className="nin-dest__name">
                        {d.name}
                      </h4>
                      <p className="nin-dest__text">{d.highlight}</p>
                      <ul className="nin-tags" aria-label={`Experiences in ${d.name}`}>
                        {d.tags.map((t) => (
                          <li key={t}>{t}</li>
                        ))}
                      </ul>
                      <Link href={d.link.href} className="nin-link">
                        {d.link.kind === "enquiry" ? <MessageCircle aria-hidden="true" size={15} /> : null}
                        {d.link.label}
                        <ArrowRight aria-hidden="true" size={15} />
                      </Link>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}
