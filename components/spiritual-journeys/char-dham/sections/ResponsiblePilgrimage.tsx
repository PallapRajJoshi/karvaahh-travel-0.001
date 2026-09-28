import { responsible as r } from "../data/charDhamData";

export default function ResponsiblePilgrimage() {
  return (
    <section id="responsible-pilgrimage" className="cd-responsible" aria-labelledby="responsible-title">
      <div className="cd-container cd-responsible__grid">
        <header data-reveal>
          <h2 id="responsible-title" className="cd-responsible__title">
            {r.heading}
          </h2>
          <p>{r.intro}</p>
        </header>
        <ul className="cd-responsible__list" data-reveal>
          {r.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
