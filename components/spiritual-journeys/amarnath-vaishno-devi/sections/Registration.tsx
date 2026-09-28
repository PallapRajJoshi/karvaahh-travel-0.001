import type { ReactNode } from "react";
import {
  AMARNATH_REGISTRATION_POINTS,
  BEFORE_DEPARTURE,
  OFFICIAL_SOURCES,
  VAISHNO_REGISTRATION_POINTS,
} from "../data/content";
import { Icon } from "../Icon";
import "./Registration.css";

function OfficialLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="avd-btn avd-btn--dark avd-reg__cta">
      {children}
      <span className="avd-sr-only"> (official website, opens in a new tab)</span>
      <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M14 4h6v6M20 4l-9 9M18 14v6H4V6h6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}

export function Registration() {
  return (
    <div id="registration" className="avd-anchor avd-reg">
      <section
        id="amarnath-registration"
        className="avd-section avd-reg__block"
        aria-labelledby="avd-reg-amarnath-title"
      >
        <div className="avd-wrap avd-reg__grid">
          <div>
            <span className="avd-tag avd-tag--amarnath">Amarnath</span>
            <h2 id="avd-reg-amarnath-title" className="avd-reg__title">
              Amarnath Yatra registration &amp; preparation
            </h2>
            <p className="avd-reg__lede">
              The Amarnath Yatra is managed by the {OFFICIAL_SOURCES.amarnath.name}. Every pilgrim registers through its
              official process — a travel company can guide you, but cannot register on your behalf outside that process
              or bypass medical requirements, security checks or route restrictions.
            </p>
            <ul className="avd-reg__points">
              {AMARNATH_REGISTRATION_POINTS.map((p) => (
                <li key={p}>
                  <Icon name="shield" size={18} className="avd-reg__icon" />
                  {p}
                </li>
              ))}
            </ul>
            <OfficialLink href={OFFICIAL_SOURCES.amarnath.href}>Check current Yatra requirements</OfficialLink>
          </div>

          <div className="avd-reg__checklist">
            <h3 className="avd-reg__checktitle">Before departure</h3>
            <ol className="avd-reg__steps">
              {BEFORE_DEPARTURE.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section
        id="vaishno-registration"
        className="avd-section avd-section--paper avd-reg__block"
        aria-labelledby="avd-reg-vaishno-title"
      >
        <div className="avd-wrap avd-reg__grid avd-reg__grid--flip">
          <div>
            <span className="avd-tag avd-tag--vaishno">Vaishno Devi</span>
            <h2 id="avd-reg-vaishno-title" className="avd-reg__title">
              Vaishno Devi pilgrimage registration
            </h2>
            <p className="avd-reg__lede">
              Registration for the shrine pilgrimage is handled by the {OFFICIAL_SOURCES.vaishnoDevi.name} and is
              completed before you begin the walk from Katra. Rules on timing and route entry are set by the Board and
              can change, so check them close to your travel date.
            </p>
            <OfficialLink href={OFFICIAL_SOURCES.vaishnoDevi.href}>Check current Shrine Board guidance</OfficialLink>
          </div>
          <ul className="avd-reg__points avd-reg__points--panel">
            {VAISHNO_REGISTRATION_POINTS.map((p) => (
              <li key={p}>
                <Icon name="document" size={18} className="avd-reg__icon" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
