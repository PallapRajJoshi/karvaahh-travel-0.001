"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import SectionHeading from "../shared/SectionHeading";
import FilterLink from "../shared/FilterLink";
import { IconArrow, IconCompass, IconPin } from "../shared/Icons";
import { mapRegions } from "@/data/campingContent";
import "./RegionExplorer.css";

const NepalCampingMap = dynamic(() => import("./NepalCampingMap"), {
  ssr: false,
  loading: () => <div className="cmp-map__loading">Loading map…</div>,
});

export default function RegionExplorer() {
  const [active, setActive] = useState<string | null>("annapurna");
  const [mountMap, setMountMap] = useState(false);
  const host = useRef<HTMLDivElement>(null);

  // Defer Leaflet until the section is close to the viewport.
  useEffect(() => {
    const el = host.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setMountMap(true); io.disconnect(); }
    }, { rootMargin: "400px 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const region = mapRegions.find((r) => r.id === active) ?? null;

  return (
    <section id="regions" className="cmp-section cmp-section--night cmp-regions" aria-labelledby="cmp-regions-title">
      <div className="cmp-container">
        <SectionHeading
          id="cmp-regions-title"
          tone="light"
          kicker="Region explorer"
          title="Explore Camping Across Nepal"
          lead="Pick a region on the map or from the list to see where you can camp there."
        />

        <div className="cmp-map">
          <nav className="cmp-map__list" aria-label="Camping regions">
            <ul>
              {mapRegions.map((r) => (
                <li key={r.id}>
                  <button
                    type="button"
                    className="cmp-map__region"
                    aria-pressed={active === r.id}
                    aria-controls="cmp-map-panel"
                    onClick={() => setActive(r.id)}
                  >
                    <IconPin size={15} /> {r.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="cmp-map__stage" ref={host}>
            {mountMap ? (
              <NepalCampingMap regions={mapRegions} activeId={active} onSelect={setActive} />
            ) : (
              <div className="cmp-map__loading">Map loads as you scroll</div>
            )}

            <div id="cmp-map-panel" className="cmp-map__panel" aria-live="polite">
              {region ? (
                <>
                  <h3 className="cmp-map__panel-title">{region.name}</h3>
                  <p className="cmp-map__panel-places">{region.places.join(" • ")}</p>
                  <div className="cmp-map__panel-actions">
                    <a href={`#${region.anchor}`} className="cmp-btn cmp-btn--primary">
                      Explore Region <IconArrow size={16} />
                    </a>
                    <FilterLink region={region.filter} className="cmp-map__panel-link">
                      See featured destinations
                    </FilterLink>
                  </div>
                </>
              ) : (
                <p className="cmp-map__panel-places">Select a region to see its camping spots.</p>
              )}
              <button type="button" className="cmp-map__reset" onClick={() => setActive(null)}>
                <IconCompass size={15} /> Show all of Nepal
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
