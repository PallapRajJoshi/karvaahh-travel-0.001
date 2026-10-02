import Reveal from "../shared/Reveal";
import Icon from "../shared/Icons";
import SectionHeading from "../shared/SectionHeading";
import { VALUES, VALUES_HEADING } from "../data/values-gallery-respect";
import { IDS } from "../data/page";
import "./WhyKarvaahh.css";

export default function WhyKarvaahh() {
  return (
    <section id={IDS.why} className="culture-why" aria-labelledby="culture-why-title">
      <div className="cx-container">
        <Reveal>
          <SectionHeading
            id="culture-why-title"
            eyebrow="Why Karvaahh"
            title={VALUES_HEADING}
            align="center"
          />
        </Reveal>
        <ul className="culture-why__grid">
          {VALUES.map((v, i) => (
            <Reveal as="li" key={v.id} delay={(i % 3) * 90} className="why-item">
              <span className="why-item__icon">
                <Icon name={v.icon} />
              </span>
              <h3 className="why-item__title">{v.title}</h3>
              <p className="why-item__body">{v.body}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
