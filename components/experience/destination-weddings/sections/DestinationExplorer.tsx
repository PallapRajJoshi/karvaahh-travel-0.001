"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { ANCHORS } from "../data/config";
import { destinationsByRegion, regions } from "../data/destinations";
import type { RegionId, WeddingDestination } from "../data/types";
import Arrow from "../shared/Arrow";
import ChapterMark from "../shared/ChapterMark";
import WeddingImage from "../shared/WeddingImage";
import "./DestinationExplorer.css";

function FeaturedDestination({ d, flip }: { d: WeddingDestination; flip: boolean }) {
  return (
    <article className={`dw-feature${flip ? " dw-feature--flip" : ""}`} aria-labelledby={`dw-dest-${d.slug}`}>
      <div className="dw-feature__media">
        <WeddingImage image={d.image} sizes="(min-width: 960px) 55vw, 100vw" />
      </div>
      <div className="dw-feature__body">
        <p className="dw-feature__mood">{d.mood.join(" • ")}</p>
        <h3 id={`dw-dest-${d.slug}`} className="dw-feature__name dw-display">
          {d.name}
        </h3>
        <p className="dw-feature__title">{d.title}</p>
        <p className="dw-feature__desc">{d.description}</p>
        {d.places && <p className="dw-feature__places">{d.places.join(" · ")}</p>}
        <ul className="dw-dotlist">
          {d.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
        {d.note && <p className="dw-feature__note">{d.note}</p>}
        <div className="dw-feature__actions">
          {d.href ? (
            <a href={d.href} className="dw-link">
              {d.hrefLabel ?? "Explore Destination"} <Arrow />
            </a>
          ) : null}
          <a href={`#${ANCHORS.plan}`} className="dw-link">
            Plan a wedding in {d.name} <Arrow />
          </a>
        </div>
      </div>
    </article>
  );
}

function DestinationCard({ d }: { d: WeddingDestination }) {
  return (
    <article className="dw-dcard" aria-labelledby={`dw-dest-${d.slug}`}>
      <div className="dw-dcard__media">
        <WeddingImage image={d.image} sizes="(min-width: 1100px) 30vw, (min-width: 700px) 45vw, 80vw" />
      </div>
      <p className="dw-dcard__mood">{d.mood.join(" • ")}</p>
      <h3 id={`dw-dest-${d.slug}`} className="dw-dcard__name">
        {d.name}
      </h3>
      <p className="dw-dcard__title">{d.title}</p>
      <p className="dw-dcard__desc">{d.description}</p>
      {d.places && <p className="dw-dcard__places">{d.places.join(" · ")}</p>}
      <ul className="dw-dotlist dw-dcard__highlights">
        {d.highlights.slice(0, 4).map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
      {d.note && <p className="dw-dcard__note">{d.note}</p>}
      <a href={d.href ?? `#${ANCHORS.plan}`} className="dw-link dw-dcard__link">
        {d.href ? (d.hrefLabel ?? "Explore Destination") : `Plan in ${d.name}`} <Arrow />
      </a>
    </article>
  );
}

function InternationalIndex({ list }: { list: WeddingDestination[] }) {
  return (
    <ol className="dw-intl">
      {list.map((d, i) => (
        <li key={d.slug} className="dw-intl__item">
          <span className="dw-intl__n">{String(i + 1).padStart(2, "0")}</span>
          <div>
            <h3 className="dw-intl__name">{d.name}</h3>
            <p className="dw-intl__title">{d.title}</p>
            <p className="dw-intl__desc">{d.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export default function DestinationExplorer() {
  const [active, setActive] = useState<RegionId>("nepal");
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKey = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const last = regions.length - 1;
    let next = index;
    if (e.key === "ArrowRight") next = index === last ? 0 : index + 1;
    else if (e.key === "ArrowLeft") next = index === 0 ? last : index - 1;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = last;
    else return;
    e.preventDefault();
    setActive(regions[next].id);
    tabRefs.current[next]?.focus();
  };

  return (
    <section id={ANCHORS.destinations} className="dw-section dw-explorer dw-paper" aria-labelledby="dw-explorer-title">
      <div className="dw-container">
        <ChapterMark index={1} />
        <header className="dw-explorer__head" data-reveal="">
          <div>
            <p className="dw-eyebrow">Destination discovery</p>
            <h2 id="dw-explorer-title" className="dw-h2">
              Choose the place that <em>feels like you</em>
            </h2>
          </div>
          <p className="dw-lede">
            Twenty-three destinations across four collections. Each one changes the wedding — the light, the
            food, the rituals, the way your guests travel. Start with the feeling, and we will handle the logistics.
          </p>
        </header>

        <div className="dw-explorer__tabs" role="tablist" aria-label="Destination collections">
          {regions.map((r, i) => {
            const selected = r.id === active;
            return (
              <button
                key={r.id}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                type="button"
                role="tab"
                id={`dw-tab-${r.id}`}
                aria-selected={selected}
                aria-controls={`dw-panel-${r.id}`}
                tabIndex={selected ? 0 : -1}
                className={`dw-explorer__tab${selected ? " is-active" : ""}`}
                onClick={() => setActive(r.id)}
                onKeyDown={(e) => onKey(e, i)}
              >
                <span className="dw-explorer__tab-kicker">{r.kicker}</span>
                <span className="dw-explorer__tab-label">{r.label}</span>
                <span className="dw-explorer__tab-count">{destinationsByRegion(r.id).length}</span>
              </button>
            );
          })}
        </div>

        {regions.map((r) => {
          const list = destinationsByRegion(r.id);
          const featured = list.filter((d) => d.featured);
          const rest = list.filter((d) => !d.featured);
          return (
            <div
              key={r.id}
              role="tabpanel"
              id={`dw-panel-${r.id}`}
              aria-labelledby={`dw-tab-${r.id}`}
              hidden={r.id !== active}
              className="dw-explorer__panel"
            >
              <p className="dw-explorer__intro">{r.intro}</p>

              {featured.map((d, i) => (
                <FeaturedDestination key={d.slug} d={d} flip={i % 2 === 1} />
              ))}

              {r.id === "international" ? (
                <InternationalIndex list={list} />
              ) : (
                rest.length > 0 && (
                  <div className={`dw-explorer__rail${rest.length % 4 === 0 ? " dw-explorer__rail--4" : ""}`} tabIndex={0} aria-label={`More ${r.label} destinations`}>
                    {rest.map((d) => (
                      <DestinationCard key={d.slug} d={d} />
                    ))}
                  </div>
                )
              )}

              {r.note && <p className="dw-explorer__note">{r.note}</p>}
            </div>
          );
        })}
      </div>
    </section>
  );
}
