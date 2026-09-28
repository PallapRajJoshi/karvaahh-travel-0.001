import { EXCLUSIONS, INCLUSIONS } from "../data/content";
import "./Cards.css";

/**
 * Inclusions and exclusions side by side — the two lists a traveller compares, so they share one view.
 * Each keeps its own H2 as specified in the brief.
 */
export function PackageDetails() {
  return (
    <div id="package" className="avd-anchor avd-section avd-pkg">
      <div className="avd-wrap avd-pkg__grid">
        <section className="avd-pkg__col avd-pkg__col--in" aria-labelledby="avd-in-title">
          <h2 id="avd-in-title" className="avd-pkg__title">
            What&rsquo;s included in your Yatra?
          </h2>
          <p className="avd-pkg__lede">Inclusions vary by package. Your quotation lists exactly what yours covers.</p>
          <ul className="avd-pkg__list">
            {INCLUSIONS.map((i) => (
              <li key={i}>
                <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true" focusable="false">
                  <path d="M4 10.5l4 4 8-9" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {i}
              </li>
            ))}
          </ul>
        </section>

        <section className="avd-pkg__col avd-pkg__col--out" aria-labelledby="avd-out-title">
          <h2 id="avd-out-title" className="avd-pkg__title">
            What&rsquo;s not included?
          </h2>
          <p className="avd-pkg__lede">
            Official registration, Darshan, route services and special Puja are never assumed to be included.
          </p>
          <ul className="avd-pkg__list">
            {EXCLUSIONS.map((i) => (
              <li key={i}>
                <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true" focusable="false">
                  <path d="M5 5l10 10M15 5L5 15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                {i}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
