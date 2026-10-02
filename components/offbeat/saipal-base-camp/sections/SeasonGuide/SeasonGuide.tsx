import SectionHeading from "../../shared/SectionHeading";
import Reveal from "../../shared/Reveal";
import { seasons, seasonNote } from "@/data/seasons";
import "./SeasonGuide.css";

export default function SeasonGuide() {
  return (
    <section className="saipal-page__section saipal-seasons">
      <div className="saipal-page__inner">
        <SectionHeading eyebrow="Trip Planning" title="Choose Your Season for the Expedition" align="center" />
        <div className="saipal-seasons__grid">
          {seasons.map((season, index) => (
            <Reveal
              key={season.id}
              delay={index * 90}
              className={`saipal-seasons__card ${season.recommended ? "saipal-seasons__card--recommended" : ""}`}
            >
              {season.recommended ? <span className="saipal-seasons__badge">Preferred</span> : null}
              <h3 className="saipal-seasons__name">{season.name}</h3>
              <span className="saipal-seasons__months">{season.months}</span>
              <p className="saipal-seasons__desc">{season.description}</p>
            </Reveal>
          ))}
        </div>
        <p className="saipal-seasons__footnote">{seasonNote}</p>
      </div>
    </section>
  );
}
