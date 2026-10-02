import { TRAVELERS } from "@/data/activities/wildlife-nature/travelers";
import { WildImage } from "./shared/WildImage";
import { Reveal } from "./shared/Reveal";
import { SectionHeading } from "./shared/SectionHeading";
import { Icon } from "./shared/Icon";
import { PlanLink } from "./shared/PlanLink";
import "./TravelerNatureSection.css";

export function TravelerNatureSection() {
  return (
    <section className="wn-section wn-section--white" aria-labelledby="wn-trav-title">
      <div className="wn-container">
        <SectionHeading
          id="wn-trav-title"
          eyebrow="For every traveler"
          title="Wildlife & Nature Experiences for Every Traveler"
          align="center"
        />

        <ul className="wn-trav__grid">
          {TRAVELERS.map((t, i) => (
            <li key={t.id}>
              <Reveal delay={i * 90} className="wn-trav__reveal">
                <article className="wn-trav__card">
                  <div className="wn-media wn-trav__media">
                    <WildImage name={t.image} sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 280px" />
                    <div className="wn-trav__shade" aria-hidden="true" />
                    <p className="wn-trav__who">{t.title}</p>
                  </div>
                  <div className="wn-trav__body">
                    <h3 className="wn-trav__heading">{t.heading}</h3>
                    <p className="wn-trav__desc">{t.description}</p>
                    <PlanLink className="wn-link" prefill={t.prefill}>
                      {t.cta} <Icon name="arrow-right" size={16} />
                    </PlanLink>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
