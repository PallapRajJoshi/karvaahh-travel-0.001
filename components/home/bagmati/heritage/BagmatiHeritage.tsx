import React from "react";
import Image from "next/image";
import BagmatiSectionHeading from "../heading/BagmatiSectionHeading";
import "./bagmati-heritage.css";

const heritageSites = [
  { name: "Kathmandu Durbar Square", tag: "UNESCO World Heritage Site" },
  { name: "Patan Durbar Square", tag: "UNESCO World Heritage Site" },
  { name: "Bhaktapur Durbar Square", tag: "UNESCO World Heritage Site" },
  { name: "Swayambhunath", tag: "UNESCO World Heritage Site" },
  { name: "Boudhanath", tag: "UNESCO World Heritage Site" },
  { name: "Pashupatinath", tag: "UNESCO World Heritage Site" },
  { name: "Changu Narayan", tag: "UNESCO World Heritage Site" },
  { name: "Kirtipur", tag: "Historic Newar town" },
  { name: "Bungamati", tag: "Historic Newar town" },
  { name: "Khokana", tag: "Historic Newar town" },
  { name: "Panauti", tag: "Historic Newar town" },
  { name: "Nuwakot Durbar", tag: "Historic palace complex" },
  { name: "Sindhuli Gadhi", tag: "Historic hill fortress" },
];

export default function BagmatiHeritage() {
  return (
    <section className="bagmati-heritage" aria-label="Heritage of Bagmati">
      <div className="bagmati-heritage__media">
        <Image
          src="/images/bagmati/swayambhunath-stupa-kathmandu-valley-unesco-heritage-nepal.jpg"
          alt="Golden-hour view of ancient Newar temple architecture in Bagmati Province"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="bagmati-heritage__image"
        />
      </div>

      <div className="bagmati-heritage__content">
        <BagmatiSectionHeading
          eyebrow="Living History"
          heading={
            <>
              Centuries of stories,
              <br />
              still <em>alive</em>.
            </>
          }
          description="The Kathmandu Valley alone holds seven UNESCO World Heritage monument zones, while hill towns and river valleys across the province preserve their own layers of architecture and memory."
        />

        <ul className="bagmati-heritage__list">
          {heritageSites.map((site) => (
            <li className="bagmati-heritage__item" key={site.name}>
              <span className="bagmati-heritage__item-name">{site.name}</span>
              <span className="bagmati-heritage__item-tag">{site.tag}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
