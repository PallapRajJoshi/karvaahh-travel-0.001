import JyImage from "./JyImage";
import SectionHeading from "./SectionHeading";
import { anchorFor, bySlug, experiences } from "./data/jyotirlingaData";
import "./PilgrimageExperience.css";

export default function PilgrimageExperience() {
  return (
    <section className="jyl-section jyl-section--white jyl-exp" aria-labelledby="jyl-exp-title">
      <div className="jyl-container">
        <SectionHeading id="jyl-exp-title" title={experiences.heading} />
        <ul className="jyl-exp__grid">
          {experiences.items.map((item) => (
            <li key={item} className="jyl-exp__item">
              {item}
            </li>
          ))}
        </ul>

        <div className="jyl-exp__highlights">
          <h3 className="jyl-exp__subtitle">{experiences.highlightsHeading}</h3>
          <p className="jyl-exp__subnote">{experiences.highlightsNote}</p>
          <ul className="jyl-exp__cards">
            {experiences.highlights.map((h) => {
              const t = bySlug[h.slug];
              return (
                <li key={h.slug} className="jyl-exp__card">
                  <a href={`#${anchorFor(h.slug)}`} className="jyl-exp__card-link">
                    <JyImage
                      image={t.image}
                      sizes="(max-width: 640px) 70vw, (max-width: 1024px) 33vw, 20vw"
                      className="jyl-exp__card-img"
                      label={t.name}
                    />
                    <span className="jyl-exp__card-text">
                      <span className="jyl-exp__card-name">{t.name}</span>
                      <span className="jyl-exp__card-title">{h.title}</span>
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
