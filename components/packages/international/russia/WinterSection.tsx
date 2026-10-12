import Image from "next/image";
import { Snowflake } from "lucide-react";
import { winterItems } from "@/data/russia/content";
import { russiaDestinationById } from "@/data/russia/destinations";
import { russiaImages } from "@/data/russia/images";
import { destAnchor } from "@/lib/russia/config";
import Reveal from "../../Reveal";
import FilterButton from "./FilterButton";
import Snowfall from "./Snowfall";

export default function WinterSection() {
  const items = winterItems.filter((w) => russiaDestinationById(w.destination)?.operationalStatus === "active");

  return (
    <section className="ru-winter" id="winter" aria-labelledby="winter-h">
      <div className="ru-winter__media" aria-hidden="true">
        <Image src={russiaImages["winter-birch"].src} alt="" fill sizes="100vw" className="ru-winter__img" />
      </div>
      <div className="ru-winter__scrim" aria-hidden="true" />
      <Snowfall />
      <div className="pkg-container ru-winter__inner">
        <div className="pkg-section__head">
          <p className="asia-eyebrow asia-eyebrow--light">Winter in Russia</p>
          <h2 id="winter-h" className="pkg-h2 pkg-h2--light">Experience Russia in Winter</h2>
          <p className="pkg-lede pkg-lede--light">
            Snow on onion domes, frozen lakes, Arctic skies and ski slopes. Winter is when much of Russia looks its most
            magical, with short days and real cold to plan around.
          </p>
        </div>
        <ul className="ru-winter__grid">
          {items.map((w, i) => (
            <li key={w.title} style={{ "--i": i } as React.CSSProperties}>
              <Reveal className="ru-wtile">
                <Snowflake size={20} aria-hidden="true" />
                <h3>{w.title}</h3>
                <p>{w.text}</p>
                <a href={`#${destAnchor(w.destination)}`} className="ru-wtile__link">
                  About {russiaDestinationById(w.destination)?.name}
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
        <div className="ru-winter__cta">
          <FilterButton filter={{ experience: "winter" }} className="pkg-btn pkg-btn--lg asia-btn--gold">
            See winter packages
          </FilterButton>
          <FilterButton filter={{ experience: "ski" }} className="pkg-btn pkg-btn--lg pkg-btn--ghost">
            Ski destinations
          </FilterButton>
        </div>
      </div>
    </section>
  );
}
