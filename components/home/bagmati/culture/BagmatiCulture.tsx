import React from "react";
import Image from "next/image";
import BagmatiSectionHeading from "../heading/BagmatiSectionHeading";
import "./bagmati-culture.css";

const cultureGroups = [
  {
    number: "01",
    title: "Newar Heritage",
    description:
      "Ancient cities, courtyards, temples, architecture and festivals shaped over a thousand years.",
    image: "/images/bagmati/bhaktapur-durbar-square-newar-heritage-temple-courtyard-Nepal.jpg",
  },
  {
    number: "02",
    title: "Tamang & Himalayan Cultures",
    description:
      "Mountain villages, monasteries, music, food and traditions of the high valleys.",
    image: "/images/bagmati/tamang-village-langtang-himalayan-culture-bagmati-Nepal.jpg",
  },
  {
    number: "03",
    title: "Living Villages",
    description:
      "Homestays, local cuisine, crafts, farming and community experiences across the province.",
    image: "/images/bagmati/chitlang-village-homestay-rural-life-bagmati-Nepal.jpg",
  },
];

export default function BagmatiCulture() {
  return (
    <section className="bagmati-culture" aria-label="Culture of Bagmati">
      <BagmatiSectionHeading
        eyebrow="People & Tradition"
        heading={
          <>
            Meet the soul
            <br />
            of <em>Bagmati</em>.
          </>
        }
        description="Newar, Tamang, Sherpa, Gurung and Tharu communities each hold a distinct thread of Bagmati's cultural fabric — in architecture, monasteries, temples, crafts, folk music and everyday village life."
      />

      <div className="bagmati-culture__grid">
        {cultureGroups.map((group) => (
          <div className="bagmati-culture-card" key={group.number}>
            <div className="bagmati-culture-card__media">
              <Image
                src={group.image}
                alt={group.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="bagmati-culture-card__image"
              />
            </div>
            <span className="bagmati-culture-card__number">{group.number}</span>
            <h3 className="bagmati-culture-card__title">{group.title}</h3>
            <p className="bagmati-culture-card__description">{group.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
