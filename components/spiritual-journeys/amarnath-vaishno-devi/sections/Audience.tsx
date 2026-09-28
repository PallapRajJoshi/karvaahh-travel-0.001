import { TRAVELLERS } from "../data/content";
import { PILGRIMAGE_COMPARISON } from "../data/routes";
import { Icon } from "../Icon";
import { SectionHeading } from "../SectionHeading";
import "./Cards.css";

export function SuitableTravellers() {
  return (
    <section className="avd-section avd-section--paper" aria-labelledby="avd-who-title">
      <div className="avd-wrap">
        <SectionHeading
          id="avd-who-title"
          title="Who can plan this Yatra?"
          lede="Many people make this journey, but it isn't automatically suitable for everyone. The right plan depends on the traveller."
        />
        <ul className="avd-cards avd-cards--5">
          {TRAVELLERS.map((t) => (
            <li key={t.title} className="avd-card avd-card--line">
              {t.icon ? <Icon name={t.icon} size={28} className="avd-card__icon" /> : null}
              <h3 className="avd-card__title">{t.title}</h3>
              <p className="avd-card__body">{t.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function PilgrimageComparison() {
  return (
    <section className="avd-section" aria-labelledby="avd-compare-title">
      <div className="avd-wrap">
        <SectionHeading
          id="avd-compare-title"
          title="Understanding the two pilgrimages"
          lede="Different shrines, traditions and demands — neither ranked above the other."
        />
        <div className="avd-table-scroll" tabIndex={0} role="region" aria-labelledby="avd-compare-cap">
          <table className="avd-table">
            <caption id="avd-compare-cap">Amarnath Yatra and Vaishno Devi Yatra compared. Elevations are approximate.</caption>
            <thead>
              <tr>
                <th scope="col">Feature</th>
                <th scope="col" className="avd-table__col--amarnath">Amarnath Yatra</th>
                <th scope="col" className="avd-table__col--vaishno">Vaishno Devi Yatra</th>
              </tr>
            </thead>
            <tbody>
              {PILGRIMAGE_COMPARISON.map((row) => (
                <tr key={row.feature}>
                  <th scope="row">{row.feature}</th>
                  <td>{row.a}</td>
                  <td>{row.b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
