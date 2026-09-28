import React from "react";
import Image from "next/image";
import BagmatiSectionHeading from "../heading/BagmatiSectionHeading";
import "./bagmati-pilgrimage.css";

const sacredSites = [
  "Pashupatinath",
  "Swayambhunath",
  "Boudhanath",
  "Budhanilkantha",
  "Dakshinkali",
  "Namobuddha",
  "Changu Narayan",
  "Gosainkunda",
  "Kalinchowk Bhagwati",
  "Dolakha Bhimsen",
  "Indreshwar Mahadev",
  "Pathibhara Temple",
  "Kamalamai Temple",
];

export default function BagmatiPilgrimage() {
  return (
    <section className="bagmati-pilgrimage" aria-label="Pilgrimage in Bagmati">
      <div className="bagmati-pilgrimage__inner">
        <BagmatiSectionHeading
          eyebrow="Sacred Bagmati"
          heading={
            <>
              Sacred paths,
              <br />
              <em>timeless</em> devotion.
            </>
          }
          description="Bagmati is a landscape of living faith, where ancient temples, Buddhist monasteries, sacred lakes and pilgrimage traditions connect cities, hills and mountains."
          light
        />

        <div className="bagmati-pilgrimage__sites" role="list">
          {sacredSites.map((site) => (
            <span className="bagmati-pilgrimage__site" role="listitem" key={site}>
              {site}
            </span>
          ))}
        </div>
      </div>

      <div className="bagmati-pilgrimage__media">
        <Image
          src="/images/bagmati/pashupatinath-temple-bagmati-river-sacred-pilgrimage-nepal.jpg"
          alt="Prayer flags and golden spire at Boudhanath Stupa, Bagmati Province"
          fill
          sizes="(max-width: 1024px) 100vw, 40vw"
          className="bagmati-pilgrimage__image"
        />
      </div>
    </section>
  );
}
