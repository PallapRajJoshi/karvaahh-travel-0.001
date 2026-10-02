import CultureImage from "../shared/CultureImage";
import Reveal from "../shared/Reveal";
import CtaLink from "../shared/CtaLink";
import SectionHeading from "../shared/SectionHeading";
import { HERITAGE, HERITAGE_HEADING, HERITAGE_LEDE, HERITAGE_NOTE } from "../data/heritage";
import { IDS } from "../data/page";
import "./HeritageDestinations.css";

export default function HeritageDestinations() {
  return (
    <section id={IDS.heritage} className="culture-heritage" aria-labelledby="culture-heritage-title">
      <div className="cx-container">
        <Reveal>
          <SectionHeading id="culture-heritage-title" title={HERITAGE_HEADING} lede={HERITAGE_LEDE} align="center" tone="dark" />
        </Reveal>

        <div className="culture-heritage__list">
          {HERITAGE.map((d, i) => (
            <Reveal as="article" key={d.id} className={`heritage-card${i % 2 === 1 ? " heritage-card--flip" : ""}`}>
              <div className="heritage-card__media">
                <CultureImage id={d.media} sizes="(max-width: 900px) 100vw, 60vw" />
                <span className="heritage-card__index" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="heritage-card__body">
                <h3 className="heritage-card__name">{d.name}</h3>
                <p className="heritage-card__intro">{d.intro}</p>

                <h4 className="heritage-card__label">Highlights</h4>
                <ul className="heritage-card__sites">
                  {d.sites.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>

                <h4 className="heritage-card__label">Signature experiences</h4>
                <ul className="heritage-card__exps">
                  {d.experiences.map((e) => (
                    <li key={e}>{e}</li>
                  ))}
                </ul>

                <CtaLink variant="gold" href={d.href} prefill={d.prefill} ariaLabel={`Discover ${d.name}`}>
                  Discover Destination
                </CtaLink>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="culture-heritage__note">{HERITAGE_NOTE}</p>
      </div>
    </section>
  );
}
