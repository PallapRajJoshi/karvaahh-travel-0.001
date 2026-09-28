"use client";

import { useId, useState } from "react";
import { routeCopy } from "@/data/india-pilgrimage/adi-kailash-om-parvat/page";
import type { RouteMapConfig, RouteStage } from "@/data/india-pilgrimage/adi-kailash-om-parvat/types";
import { Icon } from "../ui/Icon";
import { KImage } from "../ui/KImage";
import { RouteMap } from "./RouteMap";

interface RouteExplorerProps {
  stages: RouteStage[];
  map: RouteMapConfig;
}

/**
 * Interactive route timeline + schematic map.
 * One stage is open at a time; selecting a stage (list or map) advances the
 * "travelled" line on the map. Collapsed panels are `inert`, so they are
 * skipped by keyboard and screen readers until opened.
 */
export function RouteExplorer({ stages, map }: RouteExplorerProps) {
  const [activeId, setActiveId] = useState(stages[0]?.id ?? "");
  const uid = useId();

  return (
    <div className="akop-route__layout">
      <div className="akop-route__map-col">
        <RouteMap stages={stages} config={map} activeId={activeId} onSelect={setActiveId} />
      </div>

      <ol className="akop-route__timeline">
        {stages.map((stage, i) => {
          const open = stage.id === activeId;
          const panelId = `${uid}-panel-${stage.id}`;
          const buttonId = `${uid}-btn-${stage.id}`;
          return (
            <li key={stage.id} className={`akop-stage${open ? " is-open" : ""}`}>
              <h3 className="akop-stage__heading">
                <button
                  id={buttonId}
                  type="button"
                  className="akop-stage__trigger"
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => setActiveId(stage.id)}
                >
                  <span className="akop-stage__num" aria-hidden="true">
                    {i + 1}
                  </span>
                  <span className="akop-stage__names">
                    <span className="akop-stage__name">{stage.name}</span>
                    <span className="akop-stage__role">{stage.role}</span>
                  </span>
                  <Icon name="chevron-down" size={20} className="akop-stage__chevron" />
                </button>
              </h3>

              <div id={panelId} role="region" aria-labelledby={buttonId} className="akop-stage__panel" inert={!open}>
                <div className="akop-stage__panel-inner">
                  <div className="akop-stage__media">
                    <KImage image={stage.image} sizes="(min-width: 1024px) 520px, 100vw" className="akop-stage__img" />
                  </div>
                  <p className="akop-stage__text">{stage.description}</p>
                  <dl className="akop-stage__meta">
                    <div>
                      <dt>{routeCopy.travelModeLabel}</dt>
                      <dd>{stage.travelMode ?? routeCopy.toBeConfirmed}</dd>
                    </div>
                    <div>
                      <dt>{routeCopy.durationLabel}</dt>
                      <dd>{stage.duration ?? routeCopy.toBeConfirmed}</dd>
                    </div>
                  </dl>
                  {stage.highlights?.length ? (
                    <ul className="akop-stage__tags" role="list">
                      {stage.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
