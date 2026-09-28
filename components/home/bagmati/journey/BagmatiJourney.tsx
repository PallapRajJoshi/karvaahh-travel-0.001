import React from "react";
import Image from "next/image";
import Link from "next/link";
import BagmatiSectionHeading from "../heading/BagmatiSectionHeading";
import { bagmatiJourney } from "@/data/bagmati/journey";
import "./bagmati-journey.css";

export default function BagmatiJourney() {
  return (
    <section className="bagmati-journey" aria-label="A sample Bagmati journey">
      <BagmatiSectionHeading
        eyebrow="Suggested Route"
        heading={
          <>
            From ancient cities
            <br />
            to Himalayan <em>silence</em>.
          </>
        }
      />

      <div className="bagmati-journey__track">
        {bagmatiJourney.map((stop, index) => (
          <div className="bagmati-journey__stop" key={stop.id}>
            <div className="bagmati-journey__stop-media">
              <Image
                src={stop.image}
                alt={stop.title}
                fill
                sizes="(max-width: 768px) 100vw, 20vw"
                className="bagmati-journey__stop-image"
              />
            </div>
            <div className="bagmati-journey__stop-body">
              <span className="bagmati-journey__stop-number">{stop.number}</span>
              <h3 className="bagmati-journey__stop-title">{stop.title}</h3>
              <p className="bagmati-journey__stop-description">{stop.description}</p>
            </div>
            {index < bagmatiJourney.length - 1 && (
              <span className="bagmati-journey__connector" aria-hidden="true" />
            )}
          </div>
        ))}
      </div>

      <Link href="/contact?province=bagmati" className="bagmati-journey__cta">
        Plan your Bagmati journey
        <span aria-hidden="true">↗</span>
      </Link>
    </section>
  );
}
