import SectionHeading from "./SectionHeading";
import Icon from "./Icon";
import { preparation, safetyNotice } from "@/data/adventure/everest-three-passes-trek/content";
import "./Preparation.css";

export default function Preparation() {
  return (
    <section className="etp-section etp-prep" id="prepare" aria-labelledby="etp-prep-title">
      <div className="etp-wrap">
        <SectionHeading
          id="etp-prep-title"
          eyebrow="Difficulty & preparation"
          title="Prepare for a Demanding Himalayan Adventure"
          intro="This is a challenging, high-altitude expedition intended for experienced trekkers. Preparation starts months before you land in Kathmandu."
        />

        <div className="etp-prep__layout">
          <aside className="etp-safety" role="note" aria-labelledby="etp-safety-title" data-reveal>
            <div className="etp-safety__icon" aria-hidden="true">
              <Icon name="shield" />
            </div>
            <h3 className="etp-safety__title" id="etp-safety-title">
              {safetyNotice.title}
            </h3>
            <p className="etp-safety__body">{safetyNotice.body}</p>
            <p className="etp-safety__foot">{safetyNotice.footnote}</p>
            <div className="etp-safety__scale" aria-label="Difficulty: challenging">
              <span className="etp-safety__scale-label">Difficulty</span>
              <span className="etp-safety__bars" aria-hidden="true">
                <i className="on" />
                <i className="on" />
                <i className="on" />
                <i className="on" />
                <i />
              </span>
              <strong>Challenging</strong>
            </div>
          </aside>

          <ul className="etp-prep__grid">
            {preparation.map((p, i) => (
              <li key={p.id} className="etp-prep__item" data-reveal style={{ "--i": i % 4 } as React.CSSProperties}>
                <Icon name={p.icon} className="etp-prep__icon" />
                <div>
                  <h3 className="etp-prep__title">{p.title}</h3>
                  <p className="etp-prep__text">{p.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
