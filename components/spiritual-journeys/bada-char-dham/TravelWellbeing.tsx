import { badaCharDhamData as d } from "./data/badaCharDhamData";
import SectionHeading from "./shared/SectionHeading";
import { InfoIcon } from "./shared/icons";
import "./Practical.css";

/** Senior citizens & families, health & safety, and travel insurance. */
export default function TravelWellbeing() {
  const { seniorsAndFamilies: s, healthSafety: h, insurance: ins } = d;
  return (
    <>
      <section className="bcd-section bcd-section--ivory" aria-labelledby="bcd-seniors-title">
        <div className="bcd-container">
          <SectionHeading id="bcd-seniors-title" title={s.heading} intro={s.intro} />
          <ul className="bcd-seniors">
            {s.items.map((i) => (
              <li key={i.title}>
                <h3 className="bcd-seniors__title">{i.title}</h3>
                <p className="bcd-seniors__text">{i.text}</p>
              </li>
            ))}
          </ul>
          <p className="bcd-note bcd-seniors__note">
            <InfoIcon size={18} />
            <span>{s.medicalNote}</span>
          </p>
        </div>
      </section>

      <section id="health-safety" className="bcd-section bcd-section--navy" aria-labelledby="bcd-health-title">
        <div className="bcd-container bcd-health">
          <div>
            <SectionHeading id="bcd-health-title" title={h.heading} tone="dark" />
            <ul className="bcd-health__list">
              {h.items.map((i) => (
                <li key={i.title}>
                  <h3 className="bcd-health__title">{i.title}</h3>
                  <p className="bcd-health__text">{i.text}</p>
                </li>
              ))}
            </ul>
            <p className="bcd-health__small">{h.disclaimer}</p>
          </div>

          <aside className="bcd-insure" aria-labelledby="bcd-insure-title">
            <h3 id="bcd-insure-title" className="bcd-insure__title">
              {ins.heading}
            </h3>
            <p className="bcd-insure__text">{ins.text}</p>
            <p className="bcd-insure__note">{ins.note}</p>
          </aside>
        </div>
      </section>
    </>
  );
}
