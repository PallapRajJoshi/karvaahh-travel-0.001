import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { VALUE_PROPS } from "./data/preparation";
import { HEADINGS } from "./data/copy";
import { ANCHORS } from "./data/site";
import "./AdventureWhyKarvaahh.css";

/**
 * Value propositions, limited to what the brief allows. No exclusive-partner,
 * certified-guide, availability or safety claims.
 */
export default function AdventureWhyKarvaahh() {
  const h = HEADINGS.why;
  return (
    <section
      id={ANCHORS.why}
      className="rt-section rt-section--dark"
      aria-labelledby="rt-why-title"
    >
      <div className="rt-container">
        <SectionHeading
          id="rt-why-title"
          eyebrow={h.eyebrow}
          title={h.title}
          align="center"
        />

        <ul className="rt-why">
          {VALUE_PROPS.map((v, i) => (
            <Reveal as="li" key={v.title} index={i % 3} className="rt-why__item">
              <span className="rt-why__icon">
                <Icon name={v.icon} />
              </span>
              <h3 className="rt-why__title">{v.title}</h3>
              <p className="rt-why__text">{v.body}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
