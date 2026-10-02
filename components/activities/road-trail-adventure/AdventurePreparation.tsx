import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { PACKING_ESSENTIALS, PREP_ITEMS } from "./data/preparation";
import { HEADINGS } from "./data/copy";
import { ANCHORS } from "./data/site";
import "./AdventurePreparation.css";

/** Practical, general guidance. No medical guarantees, no route-safety claims. */
export default function AdventurePreparation() {
  const h = HEADINGS.prepare;
  return (
    <section
      id={ANCHORS.prepare}
      className="rt-section rt-section--alt"
      aria-labelledby="rt-prepare-title"
    >
      <div className="rt-container">
        <SectionHeading
          id="rt-prepare-title"
          eyebrow={h.eyebrow}
          title={h.title}
          intro={h.intro}
        />

        <ul className="rt-prep">
          {PREP_ITEMS.map((item, i) => (
            <Reveal as="li" key={item.id} index={i % 3} className="rt-prep__item">
              <span className="rt-prep__icon">
                <Icon name={item.icon} />
              </span>
              <h3 className="rt-prep__title">{item.title}</h3>
              <p className="rt-prep__text">{item.body}</p>
            </Reveal>
          ))}

          <Reveal as="li" index={2} className="rt-prep__item rt-prep__item--packing">
            <span className="rt-prep__icon">
              <Icon name="backpack" />
            </span>
            <h3 className="rt-prep__title">Packing Essentials</h3>
            <ul className="rt-prep__pack">
              {PACKING_ESSENTIALS.map((p) => (
                <li key={p.label}>
                  <Icon name={p.icon} />
                  <span>{p.label}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </ul>
      </div>
    </section>
  );
}
