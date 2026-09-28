import Icon from "./Icon";
import { SECTION } from "./data/config";
import { EXCLUSIONS, INCLUSIONS, INCLUSIONS_NOTE } from "./data/package";
import "./package-scope.css";

/** Sections 9 and 10 of the brief, rendered side by side on desktop. */
export default function PackageScope() {
  return (
    <div className="hry-section hry-scope">
      <div className="hry-container hry-scope__grid">
        <section
          id={SECTION.inclusions}
          className="hry-scope__panel hry-scope__panel--in"
          aria-labelledby="hry-in-title"
        >
          <h2 id="hry-in-title" className="hry-scope__title">
            What&rsquo;s included in your Haridwar &amp; Rishikesh Yatra?
          </h2>
          <ul className="hry-scope__list">
            {INCLUSIONS.map((item) => (
              <li key={item} className="hry-scope__item">
                <Icon name="check" size={18} className="hry-scope__mark" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="hry-scope__note">
            <Icon name="info" size={16} />
            <span>{INCLUSIONS_NOTE}</span>
          </p>
        </section>

        <section
          id={SECTION.exclusions}
          className="hry-scope__panel hry-scope__panel--out"
          aria-labelledby="hry-out-title"
        >
          <h2 id="hry-out-title" className="hry-scope__title">
            What&rsquo;s not included in your package?
          </h2>
          <ul className="hry-scope__list">
            {EXCLUSIONS.map((item) => (
              <li key={item} className="hry-scope__item">
                <Icon name="cross" size={18} className="hry-scope__mark" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
