import { badaCharDhamData as d } from "./data/badaCharDhamData";
import { DirectionArrow } from "./shared/icons";
import "./FourDirections.css";

/**
 * Four Directions band — directly under the hero. Doubles as the in-page
 * quick navigation to each Dham (the brief's DhamQuickNav).
 */
export default function FourDirections() {
  return (
    <section id="four-directions" className="bcd-directions" aria-labelledby="bcd-directions-title">
      <div className="bcd-container">
        <div className="bcd-directions__head">
          <h2 id="bcd-directions-title" className="bcd-directions__title">
            The four Dhams, one in each direction
          </h2>
          <p className="bcd-directions__line" aria-hidden="true">
            North • West • East • South
          </p>
        </div>

        <ol className="bcd-directions__list">
          {d.directions.map((dir) => (
            <li key={dir.dhamId} className={`bcd-directions__item bcd-dir--${dir.direction}`}>
              <a href={`#${dir.dhamId}`} className="bcd-directions__link">
                <DirectionArrow direction={dir.direction} className="bcd-directions__icon" size={28} />
                <span className="bcd-directions__dir">{dir.direction}</span>
                <span className="bcd-directions__name">{dir.name}</span>
                <span className="bcd-directions__meta">
                  {dir.state}
                  <span className="bcd-directions__env">{dir.environment}</span>
                </span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
