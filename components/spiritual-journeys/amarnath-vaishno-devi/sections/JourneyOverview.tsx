import { OVERVIEW_FACTS } from "../data/content";
import { OfficialNotice } from "../OfficialNotice";
import { SectionHeading } from "../SectionHeading";
import { AltitudeProfile } from "./AltitudeProfile";
import "./JourneyOverview.css";

export function JourneyOverview() {
  return (
    <section id="overview" className="avd-section avd-overview" aria-labelledby="avd-overview-title">
      <div className="avd-wrap">
        <SectionHeading
          id="avd-overview-title"
          title="The Yatra at a glance"
          lede="Two shrines, two very different journeys. Vaishno Devi is a long mountain walk; Amarnath is a seasonal, high-altitude pilgrimage more than twice as high."
        />

        <div className="avd-overview__grid">
          <div className="avd-overview__visual">
            <div className="avd-overview__shrines">
              <div className="avd-overview__shrine">
                <span className="avd-tag avd-tag--vaishno">Vaishno Devi</span>
                <p className="avd-overview__alt">
                  <span className="avd-overview__num">1,580</span> m approx.
                </p>
                <p className="avd-overview__sub">Trikuta Hills, from Katra</p>
              </div>
              <div className="avd-overview__shrine">
                <span className="avd-tag avd-tag--amarnath">Amarnath</span>
                <p className="avd-overview__alt">
                  <span className="avd-overview__num">3,888</span> m approx.
                </p>
                <p className="avd-overview__sub">High Himalayas, from Pahalgam or Baltal</p>
              </div>
            </div>
            <AltitudeProfile />
          </div>

          <dl className="avd-overview__facts">
            {OVERVIEW_FACTS.map((f) => (
              <div key={f.label} className="avd-overview__fact">
                <dt>{f.label}</dt>
                <dd>
                  {Array.isArray(f.value) ? (
                    <ul>
                      {f.value.map((v) => (
                        <li key={v}>{v}</li>
                      ))}
                    </ul>
                  ) : (
                    f.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <OfficialNotice strong>
          Pilgrimage conditions, registration procedures, route access, medical requirements, transport services and
          operating dates may change. Follow the latest official instructions before departure.
        </OfficialNotice>
      </div>
    </section>
  );
}
