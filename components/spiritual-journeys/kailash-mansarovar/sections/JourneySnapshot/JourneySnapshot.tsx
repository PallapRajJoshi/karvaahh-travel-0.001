import Icon from "../../shared/Icon";
import { SNAPSHOT } from "../../data/snapshot";
import "./JourneySnapshot.css";

export default function JourneySnapshot() {
  return (
    <section className="km-snapshot" aria-labelledby="km-snapshot-title">
      <div className="km-container">
        <h2 id="km-snapshot-title" className="km-sr-only">
          Journey snapshot
        </h2>
        <dl className="km-snapshot__list">
          {SNAPSHOT.map((fact) => (
            <div key={fact.label} className="km-snapshot__item">
              <dt className="km-snapshot__label">
                <Icon name={fact.icon} className="km-snapshot__icon" />
                {fact.label}
              </dt>
              <dd className="km-snapshot__value">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
