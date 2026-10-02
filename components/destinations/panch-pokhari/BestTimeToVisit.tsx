import Icon from "@/components/shared/Icon";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";
import { seasonRecommendation, seasons } from "@/data/panch-pokhari/seasons";
import "./best-time-to-visit.css";

export default function BestTimeToVisit() {
  return (
    <section className="pp-seasons" aria-labelledby="seasons-heading">
      <div className="pp-container">
        <SectionHeading
          eyebrow="Trip Planning"
          title="Choose Your Season for the Himalayan Journey"
        />

        <div className="pp-seasons__grid">
          {seasons.map((season, index) => (
            <Reveal
              key={season.id}
              variant="fade-up"
              delay={index * 90}
              className={`pp-seasons__card pp-seasons__card--${season.id}`}
            >
              <div className="pp-seasons__icon">
                <Icon name={season.icon} />
              </div>
              <h3 className="pp-seasons__name">{season.name}</h3>
              <p className="pp-seasons__months">{season.months}</p>
              <p className="pp-seasons__body">{season.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal variant="fade-in" className="pp-seasons__recommendation">
          <Icon name="calendar" className="pp-seasons__recommendation-icon" />
          <p>
            <strong>Recommended Planning Period: </strong>
            {seasonRecommendation}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
