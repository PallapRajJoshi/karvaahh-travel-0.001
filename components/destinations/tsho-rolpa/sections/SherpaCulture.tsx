"use client";

import MediaFrame from "../shared/MediaFrame";
import SectionHeading from "../shared/SectionHeading";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import "./SherpaCulture.css";

const cultureItems = [
  {
    id: "hospitality",
    title: "Sherpa Hospitality",
    description: "Traditional mountain hospitality shapes the experience of travelling through Rolwaling.",
  },
  {
    id: "village-life",
    title: "Village Life in Bedhing & Na",
    description: "Everyday life, architecture, and community rhythms of the valley's two principal settlements.",
  },
  {
    id: "monasteries",
    title: "Buddhist Monasteries",
    description: "Spiritual heritage reflected in the region's monasteries and mountain shrines.",
  },
  {
    id: "architecture",
    title: "Traditional Architecture",
    description: "Stone-and-timber mountain settlements built for the high-altitude environment.",
  },
  {
    id: "food",
    title: "Local Food & Culture",
    description: "Everyday food and cultural experiences shared along the trekking route.",
  },
  {
    id: "responsible-tourism",
    title: "Responsible Cultural Tourism",
    description: "Community interactions grounded in respect for local customs and daily life.",
  },
];

export default function SherpaCulture() {
  const containerRef = useRevealOnScroll<HTMLDivElement>();

  return (
    <section className="tsho-culture tsho-section" ref={containerRef}>
      <div className="tsho-container">
        <SectionHeading
          eyebrow="Living Heritage"
          title="Sherpa Culture & Spiritual Heritage"
          description="The traditions and local life of the Rolwaling region, shared respectfully with visitors passing through."
        />

        <div className="tsho-culture__grid">
          <div className="tsho-culture__media tsho-reveal">
            <MediaFrame
              src="/images/tsho-rolpa/culture/sherpa-heritage.jpg"
              alt="Traditional Sherpa architecture and Buddhist heritage in the Rolwaling Valley"
              ratio="wide"
            />
          </div>

          <ul className="tsho-culture__list">
            {cultureItems.map((item, index) => (
              <li
                key={item.id}
                className="tsho-culture__item tsho-reveal"
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <h3 className="tsho-culture__item-title">{item.title}</h3>
                <p className="tsho-culture__item-description">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
