import { registration as r } from "../data/charDhamData";
import SectionHeading from "../shared/SectionHeading";

export default function RegistrationSection() {
  return (
    <section id="registration" className="cd-section cd-registration" aria-labelledby="registration-title">
      <div className="cd-container cd-registration__grid">
        <SectionHeading id="registration-title" title={r.heading} intro={<p>{r.intro}</p>} />
        <ul className="cd-registration__list">
          {r.points.map((p) => (
            <li key={p.title} data-reveal>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
