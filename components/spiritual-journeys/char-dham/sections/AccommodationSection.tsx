import { accommodation as a, food as f } from "../data/charDhamData";
import SectionHeading from "../shared/SectionHeading";

/** Accommodation and Meals — two sibling sections sharing one layout band. */
export default function AccommodationSection() {
  return (
    <div className="cd-section cd-section--tint cd-stay">
      <div className="cd-container cd-stay__grid">
        <section id="accommodation" aria-labelledby="stay-title" className="cd-stay__col">
          <SectionHeading id="stay-title" title={a.heading} intro={a.paragraphs.map((p) => <p key={p.slice(0, 24)}>{p}</p>)} />
          <dl className="cd-stay__expect" data-reveal>
            {a.expectations.map((e) => (
              <div key={e.title}>
                <dt>{e.title}</dt>
                <dd>{e.text}</dd>
              </div>
            ))}
          </dl>
        </section>
        <section id="meals" aria-labelledby="food-title" className="cd-stay__col cd-stay__col--food">
          <SectionHeading id="food-title" title={f.heading} intro={f.paragraphs.map((p) => <p key={p.slice(0, 24)}>{p}</p>)} />
        </section>
      </div>
    </div>
  );
}
