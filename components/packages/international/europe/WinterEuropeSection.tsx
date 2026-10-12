import { ArrowRight, Info, Snowflake } from "lucide-react";
import { winterEurope } from "@/data/europe/content";
import Reveal from "../../Reveal";
import DestMedia from "../asia/DestMedia";
import FilterButton from "./FilterButton";

/** Light, icy section with a gentle CSS snowfall. Disabled under reduced motion. */
export default function WinterEuropeSection() {
  return (
    <section className="pkg-section eu-winter" id="winter" aria-labelledby="winter-h">
      <div className="eu-winter__snow" aria-hidden="true" />
      <div className="pkg-container eu-winter__inner">
        <div className="pkg-section__head pkg-section__head--split">
          <div>
            <p className="asia-eyebrow"><Snowflake size={14} aria-hidden="true" /> Christmas &amp; winter</p>
            <h2 id="winter-h" className="pkg-h2">Europe in Winter</h2>
            <p className="pkg-lede">
              Festive markets in historic squares, snow-covered Alpine villages and Arctic adventures. Winter is Europe at its
              most atmospheric.
            </p>
          </div>
          <div className="eu-winter__cta">
            <FilterButton filter={{ styles: ["winter"] }} target="explore" className="pkg-btn asia-btn--navy">
              Winter Trips <ArrowRight size={16} className="pkg-arrow" aria-hidden="true" />
            </FilterButton>
            <FilterButton filter={{ styles: ["christmas-markets"] }} target="explore" className="pkg-btn pkg-btn--outline">
              Christmas Markets
            </FilterButton>
          </div>
        </div>

        <ul className="eu-winter__grid">
          {winterEurope.items.map((w, i) => (
            <li key={w.title} className={i === 0 ? "eu-winter__lead" : undefined} style={{ "--i": i } as React.CSSProperties}>
              <Reveal className="eu-wcard">
                <div className="eu-wcard__media">
                  <DestMedia
                    image={w.image}
                    iso="eu"
                    label={w.title}
                    tone={["#4f7ca8", "#a9c7e0"]}
                    sizes={i === 0 ? "(min-width: 1024px) 50vw, 92vw" : "(min-width: 1024px) 25vw, 46vw"}
                  />
                </div>
                <div className="eu-wcard__body">
                  <h3 className="eu-wcard__title">{w.title}</h3>
                  <p className="eu-wcard__text">{w.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
        <p className="eu-col__foot eu-winter__note"><Info size={14} aria-hidden="true" /> {winterEurope.note}</p>
      </div>
    </section>
  );
}
