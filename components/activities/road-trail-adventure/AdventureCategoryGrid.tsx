import AdventureImage from "./AdventureImage";
import Icon from "./Icon";
import PlanLink from "./PlanLink";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { ADVENTURE_CATEGORIES } from "./data/categories";
import { HEADINGS } from "./data/copy";
import { ANCHORS } from "./data/site";
import "./AdventureCategoryGrid.css";

/** Six experience cards. CTAs jump to the matching section on this page. */
export default function AdventureCategoryGrid() {
  const h = HEADINGS.categories;
  return (
    <section
      id={ANCHORS.categories}
      className="rt-section rt-section--alt"
      aria-labelledby="rt-categories-title"
    >
      <div className="rt-container">
        <SectionHeading
          id="rt-categories-title"
          eyebrow={h.eyebrow}
          title={h.title}
          intro={h.intro}
          align="center"
        />

        <ul className="rt-categories">
          {ADVENTURE_CATEGORIES.map((c, i) => (
            <Reveal as="li" key={c.id} index={i % 3} className="rt-categories__item">
              <article className="rt-card rt-categories__card">
                <div className="rt-card__media">
                  <AdventureImage
                    image={c.image}
                    sizes="(min-width: 1100px) 380px, (min-width: 640px) 45vw, 100vw"
                  />
                </div>
                <div className="rt-card__body">
                  <h3 className="rt-card__title">{c.title}</h3>
                  <p className="rt-card__text">{c.description}</p>
                  <ul className="rt-checklist" aria-label={`${c.title} highlights`}>
                    {c.highlights.map((item) => (
                      <li key={item}>
                        <Icon name="check" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <PlanLink
                    href={c.cta.href}
                    className="rt-link rt-categories__cta"
                  >
                    <span>
                      {c.cta.label}
                      <span className="rt-sr-only">: {c.title}</span>
                    </span>
                    <Icon name="arrow" />
                  </PlanLink>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
