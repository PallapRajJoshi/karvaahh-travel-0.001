import SectionHeading from "../../shared/SectionHeading";
import Notice from "../../shared/Notice";
import Icon from "../../shared/Icon";
import AltitudeProfile from "./AltitudeProfile";
import {
  ACCLIMATISATION,
  DIFFICULTY_FACTORS,
  DIFFICULTY_LEVEL,
  DIFFICULTY_SCALE,
  MEDICAL_SAFETY,
  PREPARE_CAREFULLY,
} from "../../data/preparation";
import "./Preparation.css";

export default function Preparation() {
  return (
    <section id="preparation" className="km-section km-section--snow km-prep" aria-labelledby="preparation-title">
      <div className="km-container">
        <SectionHeading
          id="preparation-title"
          marker="Most of the journey is above 4,500 m"
          title="High-Altitude Preparation"
          intro="Kailash Mansarovar involves travel through very high-altitude environments. How well you prepare, and how carefully you acclimatise, matters more than anything else on this journey."
        />

        <AltitudeProfile />

        <Notice variant="caution" className="km-prep__warning">
          <p>
            <strong>Dolma La Pass: approximately 5,630 metres.</strong> High-altitude travel can be physically
            demanding. Individual suitability should be assessed with a qualified medical professional before
            departure.
          </p>
        </Notice>

        <div className="km-prep__grid">
          <div className="km-prep__block">
            <h3 className="km-prep__title">Travel difficulty</h3>
            <div className="km-scale" role="img" aria-label={`Difficulty: ${DIFFICULTY_SCALE[DIFFICULTY_LEVEL]}`}>
              {DIFFICULTY_SCALE.map((level, i) => (
                <span
                  key={level}
                  className={`km-scale__step ${i === DIFFICULTY_LEVEL ? "is-current" : ""} ${i < DIFFICULTY_LEVEL ? "is-below" : ""}`}
                  aria-hidden="true"
                >
                  {level}
                </span>
              ))}
            </div>
            <p className="km-prep__text">
              This is a <strong>high-altitude, physically demanding</strong> journey. The challenge comes from a
              combination of factors rather than any single day:
            </p>
            <ul className="km-factors">
              {DIFFICULTY_FACTORS.map((f) => (
                <li key={f.title} className="km-factor">
                  <Icon name={f.icon} className="km-factor__icon" />
                  <div>
                    <p className="km-factor__title">{f.title}</p>
                    <p className="km-factor__text">{f.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="km-prep__block">
            <h3 className="km-prep__title">Acclimatisation essentials</h3>
            <p className="km-prep__text">
              Altitude sickness can affect anyone, regardless of age or fitness. Gradual acclimatisation reduces
              the risk.
            </p>
            <ul className="km-checklist">
              {ACCLIMATISATION.map((item) => (
                <li key={item}>
                  <Icon name="check" className="km-checklist__icon" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="km-prep__grid km-prep__grid--lower">
          <div className="km-prep__panel">
            <div className="km-prep__panel-head">
              <Icon name="firstaid" className="km-prep__panel-icon" />
              <h3 className="km-prep__title">Medical & safety information</h3>
            </div>
            <ul className="km-checklist">
              {MEDICAL_SAFETY.map((item) => (
                <li key={item}>
                  <Icon name="check" className="km-checklist__icon" />
                  {item}
                </li>
              ))}
            </ul>
            <Notice className="km-prep__remote">
              <p>
                The journey takes place in a remote and high-altitude environment. Emergency facilities may be
                limited compared with major cities.
              </p>
            </Notice>
          </div>

          <div className="km-prep__panel">
            <div className="km-prep__panel-head">
              <Icon name="heart" className="km-prep__panel-icon" />
              <h3 className="km-prep__title">Who should prepare carefully</h3>
            </div>
            <p className="km-prep__text">
              Additional medical planning may be appropriate for travellers with:
            </p>
            <ul className="km-bullets">
              {PREPARE_CAREFULLY.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="km-prep__consult">Consult a qualified medical professional before undertaking the journey.</p>
            <p className="km-prep__text km-prep__small">
              Please tell us about any relevant medical conditions when you enquire, so that the itinerary and
              acclimatisation plan can take them into account.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
