import Media from "../shared/Media";
import Reveal from "../shared/Reveal";
import SectionHeading from "../shared/SectionHeading";
import PrefillLink from "../shared/PrefillLink";
import { ArrowRight } from "../shared/Icons";
import { CATEGORIES_ANCHOR } from "../config";
import { CATEGORIES } from "../data/content";
import "./CruiseCategoryGrid.css";

export default function CruiseCategoryGrid() {
  return (
    <section
      id={CATEGORIES_ANCHOR}
      className="cr-section cr-cats"
      aria-labelledby="cr-cats-title"
    >
      <div className="cr-container">
        <SectionHeading
          id="cr-cats-title"
          eyebrow="Explore by journey type"
          title="Find Your Kind of Water Journey"
          lead="Six ways to experience the water, from open ocean to a quiet Himalayan lake."
        />
        <ul className="cr-cats__grid">
          {CATEGORIES.map((c, i) => (
            <Reveal as="li" key={c.id} delay={(i % 3) * 90} className="cr-cats__item">
              <article className="cr-cat">
                <div className="cr-cat__media">
                  <Media
                    image={c.image}
                    sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 380px"
                  />
                </div>
                <div className="cr-cat__body">
                  <h3 className="cr-cat__title">{c.title}</h3>
                  <p className="cr-cat__text">{c.description}</p>
                  <PrefillLink
                    prefill={{ cruiseType: c.cruiseType }}
                    className="cr-cat__cta"
                  >
                    Explore Experience <ArrowRight />
                  </PrefillLink>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
