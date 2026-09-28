import React from "react";
import Image from "next/image";
import BagmatiSectionHeading from "../heading/BagmatiSectionHeading";
import "./bagmati-wildlife.css";

const wildlifeActivities = [
  "Jungle safari",
  "Birdwatching",
  "Canoeing",
  "Nature walks",
  "Wildlife photography",
];

export default function BagmatiWildlife() {
  return (
    <section className="bagmati-wildlife" aria-label="Wildlife and nature in Bagmati">
      <div className="bagmati-wildlife__media">
        <Image
          src="/images/bagmati/one-horned-rhinoceros-chitwan-national-park-jungle-wildlife-nepal.jpg"
          alt="Wildlife along the Rapti River in Chitwan National Park, Bagmati Province"
          fill
          sizes="100vw"
          className="bagmati-wildlife__image"
        />
        <div className="bagmati-wildlife__overlay" aria-hidden="true" />
      </div>

      <div className="bagmati-wildlife__content">
        <BagmatiSectionHeading
          eyebrow="Chitwan & Beyond"
          heading={
            <>
              Where the wild
              <br />
              still <em>breathes</em>.
            </>
          }
          description="From subtropical forests and jungle rivers to high Himalayan valleys, Bagmati contains remarkable ecological diversity within a single province — anchored by Chitwan, Langtang and Shivapuri National Parks."
          light
        />

        <ul className="bagmati-wildlife__activities" role="list">
          {wildlifeActivities.map((activity) => (
            <li key={activity}>{activity}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
