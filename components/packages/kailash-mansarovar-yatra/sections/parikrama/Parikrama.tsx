import { parikrama } from "../../data/parikrama";
import Icon from "../../shared/Icon";
import Notice from "../../shared/Notice";
import SectionHeading from "../../shared/SectionHeading";
import ParikramaExplorer from "./ParikramaExplorer";
import "./Parikrama.css";

export default function Parikrama() {
  const summary = [
    { label: "Duration", value: `${parikrama.stages.length} days` },
    { label: "Circuit", value: parikrama.totalDistance ?? "To be confirmed" },
    { label: "Highest point", value: parikrama.highestPoint ?? "To be confirmed" },
  ];

  return (
    <section id="parikrama" className="km-section km-section--dark km-parikrama" aria-labelledby="km-parikrama-title">
      <div className="km-container">
        <SectionHeading
          id="km-parikrama-title"
          eyebrow={parikrama.eyebrow}
          heading={parikrama.heading}
          intro={parikrama.subtitle}
          tone="dark"
        />

        <dl className="km-parikrama__summary">
          {summary.map((s) => (
            <div key={s.label}>
              <dt>{s.label}</dt>
              <dd>{s.value}</dd>
            </div>
          ))}
          <div className="km-parikrama__summary-dir">
            <dt>Direction</dt>
            <dd>{parikrama.direction}</dd>
          </div>
        </dl>

        <Notice tone="caution" title="A demanding high-altitude trek" className="km-parikrama__safety">
          <p>{parikrama.safetyNote}</p>
        </Notice>

        <ParikramaExplorer data={parikrama} />

        <p className="km-parikrama__figures">
          <Icon name="document" size={16} />
          {parikrama.figuresNote}
        </p>
      </div>
    </section>
  );
}
