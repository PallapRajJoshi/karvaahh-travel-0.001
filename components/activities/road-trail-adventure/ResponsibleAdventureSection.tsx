import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { RESPONSIBLE_ITEMS } from "./data/gallery";
import { HEADINGS } from "./data/copy";
import { ANCHORS } from "./data/site";
import "./ResponsibleAdventureSection.css";

/** Practical responsible-travel guidance on a calm, natural-toned background. */
export default function ResponsibleAdventureSection() {
  const h = HEADINGS.responsible;
  return (
    <section
      id={ANCHORS.responsible}
      className="rt-section rt-responsible"
      aria-labelledby="rt-responsible-title"
    >
      <svg
        className="rt-responsible__ridge"
        viewBox="0 0 1200 160"
        preserveAspectRatio="none"
        aria-hidden="true"
        focusable="false"
      >
        <path
          fill="currentColor"
          d="M0 160V96l120-40 90 50 130-80 100 70 110-50 140 60 120-70 130 60 110-40 150 50v50Z"
        />
      </svg>

      <div className="rt-container rt-responsible__inner">
        <SectionHeading id="rt-responsible-title" eyebrow={h.eyebrow} title={h.title} />

        <ul className="rt-responsible__list">
          {RESPONSIBLE_ITEMS.map((item, i) => (
            <Reveal as="li" key={item.text} index={i % 2} className="rt-responsible__item">
              <span className="rt-responsible__icon">
                <Icon name={item.icon} />
              </span>
              <span>{item.text}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
