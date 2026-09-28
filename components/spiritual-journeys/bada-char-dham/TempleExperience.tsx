import { badaCharDhamData as d } from "./data/badaCharDhamData";
import SectionHeading from "./shared/SectionHeading";
import "./Temples.css";

export default function TempleExperience() {
  const t = d.templeExperience;
  return (
    <section className="bcd-section bcd-section--sand" aria-labelledby="bcd-temple-exp-title">
      <div className="bcd-container">
        <SectionHeading id="bcd-temple-exp-title" title={t.heading} intro={t.intro} />
        <ul className="bcd-texp">
          {t.items.map((i) => (
            <li key={i.title}>
              <h3 className="bcd-texp__title">{i.title}</h3>
              <p className="bcd-texp__text">{i.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
