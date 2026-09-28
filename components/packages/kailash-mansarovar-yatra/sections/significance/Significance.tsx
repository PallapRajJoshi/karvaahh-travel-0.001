import { significance } from "../../data/significance";
import Icon from "../../shared/Icon";
import Reveal from "../../shared/Reveal";
import SectionHeading from "../../shared/SectionHeading";
import "./Significance.css";

export default function Significance() {
  return (
    <section id="significance" className="km-section km-section--dark km-sig" aria-labelledby="km-sig-title">
      <div className="km-container">
        <SectionHeading
          id="km-sig-title"
          eyebrow={significance.eyebrow}
          heading={significance.heading}
          intro={significance.intro}
          tone="dark"
        />

        <ul className="km-sig__grid">
          {significance.traditions.map((t, i) => (
            <Reveal as="li" key={t.id} index={i} className={`km-trad km-trad--${t.id}`}>
              <h3 className="km-trad__name">{t.name}</h3>
              <p className="km-trad__known">
                Kailash is <em>{t.kailashName}</em>
              </p>
              <dl className="km-trad__list">
                <div>
                  <dt>Mount Kailash</dt>
                  <dd>{t.kailash}</dd>
                </div>
                <div>
                  <dt>Lake Mansarovar</dt>
                  <dd>{t.mansarovar}</dd>
                </div>
                <div>
                  <dt>Circumambulation</dt>
                  <dd>{t.kora}</dd>
                </div>
              </dl>
            </Reveal>
          ))}
        </ul>

        <ul className="km-sig__shared">
          {significance.shared.map((s, i) => (
            <Reveal as="li" key={s.title} index={i}>
              <h3 className="km-sig__shared-title">{s.title}</h3>
              <p>{s.body}</p>
            </Reveal>
          ))}
        </ul>

        <p className="km-sig__respect">
          <Icon name="lotus" size={20} />
          <span>
            <strong>Pilgrimage etiquette.</strong> {significance.respectNote}
          </span>
        </p>
      </div>
    </section>
  );
}
