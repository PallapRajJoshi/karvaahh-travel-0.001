import { conciergeServices } from "../data/guests";
import "./WeddingConcierge.css";

export default function WeddingConcierge() {
  return (
    <section className="dw-concierge dw-maroon" aria-labelledby="dw-concierge-title">
      <div className="dw-container dw-concierge__inner">
        <div className="dw-concierge__card" data-reveal="">
          <p className="dw-concierge__seal" aria-hidden="true">
            <span>K</span>
          </p>
          <p className="dw-eyebrow">A Karvaahh signature</p>
          <h2 id="dw-concierge-title" className="dw-h2 dw-concierge__title">
            Karvaahh <em>Wedding Concierge</em>
          </h2>
          <p className="dw-concierge__lede">One dedicated coordination point for your destination wedding journey.</p>
          <p className="dw-concierge__body">
            A hospitality desk at the guest hotel and a single contact for families, scaled to your
            plan — so no aunt, uncle or college friend has to message the couple asking which bus to take.
          </p>
        </div>

        <ul className="dw-concierge__services">
          {conciergeServices.map((s) => (
            <li key={s.title} data-reveal="fade">
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
