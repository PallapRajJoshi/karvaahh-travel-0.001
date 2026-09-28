"use client";

import Image from "next/image";
import { useState } from "react";
import type { TsumItineraryDay } from "@/data/destinations/tsum-valley/types";
import { ChevronDown, Clock, Mountain, Route } from "./shared/Icons";

const MODE_LABEL: Record<TsumItineraryDay["mode"], string> = {
  arrival: "Arrival",
  drive: "Drive",
  trek: "Trek",
  explore: "Explore",
  departure: "Return",
};

interface Props {
  days: TsumItineraryDay[];
  showApprox: boolean;
}

export default function ItineraryAccordion({ days, showApprox }: Props) {
  const [open, setOpen] = useState<Set<number>>(() => new Set([1]));
  const allOpen = open.size === days.length;

  const toggle = (day: number) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(day)) next.delete(day);
      else next.add(day);
      return next;
    });

  return (
    <div className="tsum-itin__timeline">
      <div className="tsum-itin__toolbar">
        <p className="tsum-itin__count">{days.length} days · Kathmandu to Kathmandu</p>
        <button
          type="button"
          className="tsum-itin__toggle-all"
          onClick={() => setOpen(allOpen ? new Set() : new Set(days.map((d) => d.day)))}
        >
          {allOpen ? "Collapse all" : "Expand all"}
        </button>
      </div>

      <ol className="tsum-itin__list">
        {days.map((d) => {
          const isOpen = open.has(d.day);
          const panelId = `tsum-day-${d.day}-panel`;
          const btnId = `tsum-day-${d.day}-btn`;
          const hasMeta = d.walkingHours || d.distanceKm || d.elevationM;
          return (
            <li key={d.day} className={`tsum-itin__day tsum-itin__day--${d.mode}${isOpen ? " is-open" : ""}`}>
              <span className="tsum-itin__marker" aria-hidden="true">{d.day}</span>
              <div className="tsum-itin__card">
                <h3 className="tsum-itin__day-heading">
                  <button
                    id={btnId}
                    type="button"
                    className="tsum-itin__trigger"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(d.day)}
                  >
                    <span className="tsum-itin__day-label">
                      Day {d.day} <span className="tsum-itin__mode">{MODE_LABEL[d.mode]}</span>
                    </span>
                    <span className="tsum-itin__route">
                      {d.from === d.to || d.from === "Arrival" ? d.to : <>{d.from} <span aria-hidden="true">→</span><span className="tsum-sr-only"> to </span> {d.to}</>}
                    </span>
                    <ChevronDown className="tsum-itin__chev" />
                  </button>
                </h3>
                <p className="tsum-itin__summary">{d.summary}</p>

                <div id={panelId} role="region" aria-labelledby={btnId} className="tsum-itin__panel">
                  <div className="tsum-itin__panel-inner">
                    <div className="tsum-itin__panel-body">
                      {hasMeta && (
                        <ul className="tsum-itin__meta">
                          {d.walkingHours && (<li><Clock /> {d.walkingHours}</li>)}
                          {d.distanceKm && (<li><Route /> {d.distanceKm} km</li>)}
                          {d.elevationM && (
                            <li>
                              <Mountain /> {d.elevationM.toLocaleString("en-IN")} m
                              {showApprox && <span className="tsum-approx">approx.</span>}
                            </li>
                          )}
                        </ul>
                      )}
                      {d.details.length > 0 && (
                        <ul className="tsum-itin__details">
                          {d.details.map((t) => <li key={t}>{t}</li>)}
                        </ul>
                      )}
                      {!hasMeta && d.details.length === 0 && (
                        <p className="tsum-itin__empty">Walking time and details confirmed with your final itinerary.</p>
                      )}
                    </div>
                    {d.thumbnail && (
                      <div className="tsum-media tsum-itin__thumb">
                        <Image src={d.thumbnail.src} alt={d.thumbnail.alt} fill sizes="200px" loading="lazy" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
