"use client";

import React, { useState } from "react";
import Image from "next/image";
import BagmatiSectionHeading from "../heading/BagmatiSectionHeading";
import { bagmatiDistricts } from "@/data/bagmati/destinations";
import "./bagmati-destinations.css";

export default function BagmatiDestinations() {
  const [activeId, setActiveId] = useState(bagmatiDistricts[0].id);
  const active =
    bagmatiDistricts.find((d) => d.id === activeId) ?? bagmatiDistricts[0];

  return (
    <section className="bagmati-destinations" aria-label="Places to go in Bagmati">
      <BagmatiSectionHeading
        eyebrow="Places to Go"
        heading={
          <>
            The many faces
            <br />
            of <em>Bagmati</em>
          </>
        }
      />

      <div className="bagmati-destinations__layout">
        <div className="bagmati-destinations__list" role="tablist" aria-label="Bagmati districts">
          {bagmatiDistricts.map((district) => (
            <button
              key={district.id}
              role="tab"
              aria-selected={district.id === activeId}
              className={`bagmati-destinations__item ${
                district.id === activeId ? "bagmati-destinations__item--active" : ""
              }`}
              onClick={() => setActiveId(district.id)}
            >
              <span className="bagmati-destinations__item-name">{district.name}</span>
              <span className="bagmati-destinations__item-count">
                {district.places.length} places
              </span>
            </button>
          ))}
        </div>

        <div className="bagmati-destinations__panel" role="tabpanel">
          <div className="bagmati-destinations__panel-media">
            <Image
              src={active.image}
              alt={`Landscape of ${active.name}, Bagmati Province`}
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="bagmati-destinations__panel-image"
            />
          </div>
          <div className="bagmati-destinations__panel-body">
            <h3 className="bagmati-destinations__panel-title">{active.name}</h3>
            <p className="bagmati-destinations__panel-summary">{active.summary}</p>
            <ul className="bagmati-destinations__panel-places">
              {active.places.map((place) => (
                <li key={place.name}>{place.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
