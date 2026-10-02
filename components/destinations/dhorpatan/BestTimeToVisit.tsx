import { seasons, seasonDisclaimer } from "@/data/dhorpatan";
import SectionHeading from "@/components/shared/SectionHeading";
import SeasonCard from "@/components/shared/SeasonCard";
import Reveal from "@/components/shared/Reveal";
import "./BestTimeToVisit.css";

export default function BestTimeToVisit() {
  return (
    <section className="best-time-section" id="best-time">
      <div className="dhorpatan-page__container">
        <SectionHeading eyebrow="Seasons" heading="Best Time to Visit Dhorpatan" />

        <div className="best-time-section__grid">
          {seasons.map((season, i) => (
            <Reveal key={season.season} delay={i * 90}>
              <SeasonCard data={season} />
            </Reveal>
          ))}
        </div>

        <p className="best-time-section__disclaimer">{seasonDisclaimer}</p>
      </div>
    </section>
  );
}
