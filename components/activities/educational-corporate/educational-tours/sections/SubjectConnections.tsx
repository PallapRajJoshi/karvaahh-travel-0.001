import { CURRICULUM_SECTION, SUBJECTS } from "../data/content";
import { Icon } from "../shared/Icon";
import { Reveal } from "../shared/Reveal";
import { SectionHeading } from "../shared/SectionHeading";
import "./SubjectConnections.css";

/** 3×3 network: eight subject cards orbit a central "Your curriculum" hub. */
export function SubjectConnections() {
  const cards = [...SUBJECTS.slice(0, 4), null, ...SUBJECTS.slice(4)];

  return (
    <section id="curriculum" className="et-section" aria-labelledby="et-cur-title">
      <div className="et-container">
        <SectionHeading eyebrow={CURRICULUM_SECTION.eyebrow} title={CURRICULUM_SECTION.title} id="et-cur-title" />
        <ul className="et-cur__net">
          {cards.map((s, i) =>
            s ? (
              <Reveal as="li" key={s.title} index={i % 3} className="et-cur__card">
                <span className="et-icon-badge">
                  <Icon name={s.icon} size={24} />
                </span>
                <h3 className="et-cur__title">{s.title}</h3>
                <p className="et-cur__text">{s.text}</p>
              </Reveal>
            ) : (
              <Reveal as="li" key="hub" index={1} className="et-cur__hub" aria-hidden>
                <span className="et-cur__hub-ring" />
                <span className="et-cur__hub-core">
                  <Icon name="cap" size={30} />
                  <strong>Your curriculum</strong>
                </span>
              </Reveal>
            ),
          )}
        </ul>
      </div>
    </section>
  );
}
