import { travellerTypes as t } from "../data/charDhamData";
import SectionHeading from "../shared/SectionHeading";
import { IconInfo } from "../shared/icons";

export default function TravellerTypes() {
  return (
    <section id="senior-family-travel" className="cd-section cd-travellers" aria-labelledby="travellers-title">
      <div className="cd-container">
        <SectionHeading id="travellers-title" title={t.heading} intro={<p>{t.intro}</p>} />
        <ul className="cd-travellers__grid">
          {t.points.map((p) => (
            <li key={p.title} data-reveal>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </li>
          ))}
        </ul>
        <p className="cd-note cd-note--strong" role="note" data-reveal>
          <IconInfo className="cd-note__icon" />
          <span>{t.medicalNote}</span>
        </p>
      </div>
    </section>
  );
}
