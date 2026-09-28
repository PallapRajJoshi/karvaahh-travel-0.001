"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import LumbiniSectionHeading from "../heading/LumbiniSectionHeading";
import { lumbiniDestinations } from "@/data/lumbini/destinations";
import "./lumbini-destinations.css";

export default function LumbiniDestinations() {
  const districts = useMemo(() => {
    const unique = Array.from(
      new Set(lumbiniDestinations.map((item) => item.district))
    );
    return ["All Districts", ...unique];
  }, []);

  const [activeDistrict, setActiveDistrict] = useState("All Districts");

  const filtered = useMemo(() => {
    if (activeDistrict === "All Districts") return lumbiniDestinations;
    return lumbiniDestinations.filter(
      (item) => item.district === activeDistrict
    );
  }, [activeDistrict]);

  return (
    <section
      className="lumbini-destinations"
      id="destinations"
      aria-label="Places to go in Lumbini Province"
    >
      <div className="lumbini-destinations__inner">
        <LumbiniSectionHeading
          index="03"
          eyebrow="Places to Go"
          heading="The many faces"
          emphasis="of Lumbini."
          description="Twelve districts spanning sacred plains, ancient kingdoms, hill heritage towns and wild Terai frontiers."
        />

        <div
          className="lumbini-destinations__filters"
          role="tablist"
          aria-label="Filter destinations by district"
        >
          {districts.map((district) => (
            <button
              key={district}
              type="button"
              role="tab"
              aria-selected={activeDistrict === district}
              className={`lumbini-destinations__filter ${
                activeDistrict === district
                  ? "lumbini-destinations__filter--active"
                  : ""
              }`}
              onClick={() => setActiveDistrict(district)}
            >
              {district}
            </button>
          ))}
        </div>

        <ul className="lumbini-destinations__grid">
          {filtered.map((destination) => (
            <li
              key={destination.name}
              className={`lumbini-destination-card lumbini-destination-card--${destination.size}`}
            >
              <div className="lumbini-destination-card__media">
                <Image
                  src={destination.image}
                  alt={destination.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="lumbini-destination-card__image"
                />
                <span
                  className="lumbini-destination-card__category"
                  aria-hidden="true"
                >
                  {destination.category}
                </span>
              </div>

              <div className="lumbini-destination-card__body">
                <div className="lumbini-destination-card__heading-row">
                  <span
                    className="lumbini-destination-card__number"
                    aria-hidden="true"
                  >
                    {destination.number}
                  </span>
                  <h3 className="lumbini-destination-card__title">
                    {destination.name}
                  </h3>
                </div>
                <p className="lumbini-destination-card__location">
                  {destination.location}
                </p>
                <p className="lumbini-destination-card__description">
                  {destination.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
