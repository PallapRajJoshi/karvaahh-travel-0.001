import { WHY } from "../data/content";
import { Icon } from "../shared/Icon";
import { MediaFrame } from "../shared/MediaFrame";
import { Reveal } from "../shared/Reveal";
import { SectionHeading } from "../shared/SectionHeading";
import "./WhyKarvaahh.css";

export function WhyKarvaahh() {
  return (
    <section id="why" className="et-section" aria-labelledby="et-why-title">
      <div className="et-container">
        <SectionHeading eyebrow={WHY.eyebrow} title={WHY.title} id="et-why-title" />
        <ul className="et-why__grid">
          {WHY.cards.map((card, i) => (
            <Reveal as="li" key={card.title} index={i % 3} className="et-why__card">
              <div className="et-why__media">
                <MediaFrame mediaKey={card.media} showCaption={false} sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw" />
              </div>
              <div className="et-why__body">
                <span className="et-icon-badge et-why__icon">
                  <Icon name={card.icon} size={24} />
                </span>
                <h3 className="et-why__title">{card.title}</h3>
                <p className="et-why__text">{card.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
