import Icon, { type IconName } from "./Icon";
import SectionHeading from "./SectionHeading";
import { SECTION } from "./data/config";
import { ACCOMMODATION, TRANSPORT } from "./data/package";
import type { ServiceLine } from "./data/types";
import "./accommodation-transport.css";

interface PanelProps {
  id: string;
  title: string;
  icon: IconName;
  intro: string;
  lines: ServiceLine[];
}

function ServicePanel({ id, title, icon, intro, lines }: PanelProps) {
  return (
    <article className="hry-stay__panel" aria-labelledby={id}>
      <span className="hry-stay__icon">
        <Icon name={icon} size={26} />
      </span>
      <h3 id={id} className="hry-stay__title">
        {title}
      </h3>
      <p className="hry-stay__intro">{intro}</p>
      <ul className="hry-stay__lines">
        {lines.map((line) => (
          <li key={line.text} className="hry-stay__line">
            <Icon name="check" size={18} className="hry-stay__check" />
            <span>
              {line.text}
              {line.packageDependent ? (
                <span className="hry-tag hry-tag--package hry-stay__tag">Depends on package</span>
              ) : null}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function AccommodationTransport() {
  return (
    <section
      id={SECTION.stays}
      className="hry-section hry-section--paper hry-stay"
      aria-labelledby="hry-stay-title"
    >
      <div className="hry-container">
        <SectionHeading
          id="hry-stay-title"
          title="Comfortable stays & convenient travel arrangements"
          intro="What every booking includes, and what changes with the package you choose."
        />
        <div className="hry-stay__grid">
          <ServicePanel
            id="hry-stay-accommodation"
            title="Accommodation"
            icon="bed"
            intro={ACCOMMODATION.intro}
            lines={ACCOMMODATION.lines}
          />
          <ServicePanel
            id="hry-stay-transport"
            title="Transportation"
            icon="car"
            intro={TRANSPORT.intro}
            lines={TRANSPORT.lines}
          />
        </div>
      </div>
    </section>
  );
}
