import { ArrowUpRight } from "lucide-react";
import { activeDestinations, destinationById } from "@/data/asia-destinations";
import { regionById } from "@/data/asia-regions";
import { travelStyles } from "@/data/travel-styles";
import Reveal from "../../Reveal";
import DestMedia from "./DestMedia";
import StyleButton from "./StyleButton";

export default function TravelStyleSection() {
  const cards = travelStyles.filter((s) => s.cardTitle);

  return (
    <section className="pkg-section" id="travel-styles" aria-labelledby="travel-styles-h">
      <div className="pkg-container">
        <div className="pkg-section__head">
          <p className="asia-eyebrow">Travel your way</p>
          <h2 id="travel-styles-h" className="pkg-h2">Choose the Kind of Journey You Want</h2>
          <p className="pkg-lede">Start with how you like to travel. We will match the destinations, hotels and pace to it.</p>
        </div>

        <ul className="asia-stylegrid">
          {cards.map((s, i) => {
            const d = destinationById(s.cardImageFrom ?? "") ?? activeDestinations[0];
            const count = activeDestinations.filter((x) => x.travelStyles.includes(s.id)).length;
            return (
              <li key={s.id} className={`asia-stylegrid__item asia-stylegrid__item--${i + 1}`}>
                <Reveal className="asia-stylecard-wrap">
                  <StyleButton style={s.id} className="asia-stylecard" label={`Show ${s.cardTitle} destinations`}>
                    <DestMedia
                      image={d.image}
                      iso={d.iso}
                      label={d.country}
                      tone={regionById(d.region).tone}
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="asia-stylecard__media"
                    />
                    <span className="asia-stylecard__body">
                      <span className="asia-stylecard__n">{count} destinations</span>
                      <span className="asia-stylecard__title">{s.cardTitle}</span>
                      <span className="asia-stylecard__text">{s.cardText}</span>
                      <span className="asia-stylecard__go" aria-hidden="true">
                        <ArrowUpRight size={18} />
                      </span>
                    </span>
                  </StyleButton>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
