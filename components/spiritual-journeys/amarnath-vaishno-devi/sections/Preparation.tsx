import { ALTITUDE_SYMPTOMS, PHYSICAL_PREP, SAFETY_GUIDELINES, SEASONS, WEATHER_KIT } from "../data/content";
import { OfficialNotice } from "../OfficialNotice";
import { SectionHeading } from "../SectionHeading";
import "./Preparation.css";

export function FitnessPreparation() {
  return (
    <section id="preparation" className="avd-section avd-prep" aria-labelledby="avd-prep-title">
      <div className="avd-wrap">
        <SectionHeading
          id="avd-prep-title"
          title="Prepare for a high-altitude pilgrimage"
          lede="Amarnath is reached on foot through thin air, cold and changeable weather. Preparation starts weeks before you travel."
        />

        <div className="avd-prep__grid">
          <article className="avd-prep__card" aria-labelledby="avd-prep-body">
            <h3 id="avd-prep-body" className="avd-prep__title">Physical preparation</h3>
            <ul className="avd-prep__list">
              {PHYSICAL_PREP.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </article>

          <article className="avd-prep__card avd-prep__card--alert" aria-labelledby="avd-prep-alt">
            <h3 id="avd-prep-alt" className="avd-prep__title">Altitude awareness</h3>
            <p>
              High altitude affects people differently, regardless of fitness. Stop, tell your group and seek medical
              assistance at the nearest medical post if you notice:
            </p>
            <ul className="avd-prep__symptoms" aria-label="Symptoms that need attention">
              {ALTITUDE_SYMPTOMS.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <p className="avd-prep__small">
              Follow official medical guidance on the route. This page is not medical advice — speak to your doctor
              before travelling.
            </p>
          </article>

          <article className="avd-prep__card" aria-labelledby="avd-prep-kit">
            <h3 id="avd-prep-kit" className="avd-prep__title">Weather kit</h3>
            <ul className="avd-prep__kit">
              {WEATHER_KIT.map((k) => (
                <li key={k}>{k}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

export function SafetyGuidelines() {
  return (
    <section className="avd-section avd-section--dark avd-safety" aria-labelledby="avd-safety-title">
      <div className="avd-wrap">
        <SectionHeading id="avd-safety-title" tone="dark" title="Important safety guidelines" />
        <ul className="avd-safety__list">
          {SAFETY_GUIDELINES.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        <OfficialNotice strong>
          Pilgrimage routes can change because of weather, security conditions, landslides, snow, crowd management and
          official decisions.
        </OfficialNotice>
      </div>
    </section>
  );
}

export function BestTime() {
  return (
    <section className="avd-section avd-section--paper avd-season" aria-labelledby="avd-season-title">
      <div className="avd-wrap">
        <SectionHeading
          id="avd-season-title"
          title="When to plan your Yatra"
          lede="The Amarnath Yatra is seasonal: its opening and closing dates and registration window are announced officially and vary each year. The Vaishno Devi pilgrimage runs year-round, though weather and crowds change with the seasons."
        />
        <ol className="avd-season__track" aria-label="Seasons in Jammu and Kashmir">
          {SEASONS.map((s, i) => (
            <li key={s.title} className={`avd-season__item${i === 1 ? " is-yatra" : ""}`}>
              <h3 className="avd-season__name">{s.title}</h3>
              <p>{s.body}</p>
            </li>
          ))}
        </ol>
        <OfficialNotice>
          Always verify the current year&rsquo;s pilgrimage calendar and official travel advisories before booking.
        </OfficialNotice>
      </div>
    </section>
  );
}
