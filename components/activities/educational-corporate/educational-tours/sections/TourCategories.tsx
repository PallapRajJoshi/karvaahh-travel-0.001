import { CATEGORIES, CATEGORIES_SECTION, LINKS } from "../data/content";
import { CtaLink } from "../shared/CtaLink";
import { Icon } from "../shared/Icon";
import { MediaFrame } from "../shared/MediaFrame";
import { Reveal } from "../shared/Reveal";
import { SectionHeading } from "../shared/SectionHeading";
import "./TourCategories.css";

export function TourCategories() {
  return (
    <section id="categories" className="et-section et-section--white" aria-labelledby="et-cat-title">
      <div className="et-container">
        <SectionHeading eyebrow={CATEGORIES_SECTION.eyebrow} title={CATEGORIES_SECTION.title} lead={CATEGORIES_SECTION.lead} id="et-cat-title" />
        <div className="et-cat__grid">
          {CATEGORIES.map((cat, i) => (
            <Reveal as="article" key={cat.id} index={i % 2} className="et-cat__card">
              <div className="et-cat__media">
                <MediaFrame mediaKey={cat.media} showCaption={false} sizes="(min-width: 900px) 45vw, 100vw" />
                <span className="et-cat__letter" aria-hidden="true">{cat.letter}</span>
              </div>
              <div className="et-cat__body">
                <div className="et-cat__head">
                  <span className="et-icon-badge">
                    <Icon name={cat.icon} size={24} />
                  </span>
                  <h3 className="et-cat__title">{cat.title}</h3>
                </div>
                <p className="et-cat__label">Explore</p>
                <ul className="et-cat__list">
                  {cat.explore.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="et-cat__label">Learning themes</p>
                <p className="et-cat__themes">
                  {cat.themes.map((t) => (
                    <span key={t} className="et-chip">{t}</span>
                  ))}
                </p>
                {cat.note ? <p className="et-note">{cat.note}</p> : null}
              </div>
            </Reveal>
          ))}
        </div>
        <div className="et-cta-band">
          <CtaLink href={LINKS.customize} variant="dark">
            Build Your Custom Tour
          </CtaLink>
        </div>
      </div>
    </section>
  );
}
