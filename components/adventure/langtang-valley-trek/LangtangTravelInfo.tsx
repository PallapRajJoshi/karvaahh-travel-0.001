import { travelInfo } from "@/data/adventure/langtang-valley-trek";
import SectionHeading from "./SectionHeading";
import LangtangIcon from "./LangtangIcon";
import "./LangtangTravelInfo.css";

export default function LangtangTravelInfo() {
  return (
    <section className="lt-section lt-info" id="travel-info" aria-labelledby="lt-info-title">
      <div className="lt-container">
        <SectionHeading id="lt-info-title" eyebrow="Permits & Logistics" title="Essential Travel Information"
          intro="Rules and requirements in Nepal change. Karvaahh handles the paperwork, but please confirm the latest requirements before you travel." />
        <ul className="lt-info__grid" role="list">
          {travelInfo.cards.map((c, i) => (
            <li key={c.title} className="lt-info__card" data-reveal style={{ ["--i" as string]: i % 4 }}>
              <div className="lt-info__top">
                <span className="lt-info__icon"><LangtangIcon name={c.icon} /></span>
                {c.confirm ? <span className="lt-info__confirm">Check latest</span> : null}
              </div>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
              {c.points ? <ul className="lt-info__points">{c.points.map((p) => <li key={p}>{p}</li>)}</ul> : null}
            </li>
          ))}
        </ul>

        {travelInfo.showFees ? (
          <div className="lt-info__fees" data-reveal>
            <table>
              <caption>Permit fees (per person) — last reviewed {travelInfo.lastReviewed}. Subject to change.</caption>
              <thead><tr><th scope="col">Permit</th><th scope="col">Foreign nationals</th><th scope="col">SAARC nationals</th><th scope="col">Nepali citizens</th></tr></thead>
              <tbody>
                {travelInfo.fees.map((f) => (
                  <tr key={f.permit}><th scope="row">{f.permit}</th><td>{f.foreign}</td><td>{f.saarc}</td><td>{f.nepali}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : null}

        <p className="lt-note" data-reveal>
          <LangtangIcon name="info" size={18} />
          Information last reviewed {travelInfo.lastReviewed}. Permit types, fees, guide rules and entry procedures are set by the Nepal government and can change at short notice — check with Karvaahh or the Nepal Tourism Board before departure.
        </p>
      </div>
    </section>
  );
}
