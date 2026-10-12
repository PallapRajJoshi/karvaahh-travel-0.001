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

const trails = [
  {
    title: "Hindu pilgrimage",
    text: "Pashupatinath is one of the most sacred Shiva shrines in South Asia, drawing pilgrims for darshan, evening aarati and Maha Shivaratri. Many continue to Guhyeshwari, Budhanilkantha, Dakshinkali and Changu Narayan, while the Janai Purnima pilgrimage climbs to the holy lakes of Gosaikunda.",
  },
  {
    title: "Buddhist heritage trail",
    text: "Swayambhunath and Boudhanath anchor the valley's Buddhist world — one an ancient hilltop stupa, the other a vast mandala ringed by Tibetan monasteries. Further east, Namo Buddha near Dhulikhel is among the most revered Buddhist pilgrimage sites in Nepal.",
  },
];

export default function BagmatiPilgrimage() {
  return (
    <section className="bagmati-pilgrimage" id="pilgrimage" aria-label="Pilgrimage in Bagmati">
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

        <div className="bagmati-pilgrimage__trails">
          {trails.map((trail) => (
            <div className="bagmati-pilgrimage__trail" key={trail.title}>
              <h3 className="bagmati-pilgrimage__trail-title">{trail.title}</h3>
              <p className="bagmati-pilgrimage__trail-text">{trail.text}</p>
            </div>
          ))}
        </div>

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
          alt="Pashupatinath Temple above the sacred Bagmati River in Kathmandu"
          fill
          sizes="(max-width: 1024px) 100vw, 40vw"
          className="bagmati-pilgrimage__image"
        />
      </div>
    </section>
  );
}
