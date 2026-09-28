import SectionHeading from "./SectionHeading";
import Icon from "./Icon";
import { travelInfo } from "@/data/adventure/everest-three-passes-trek/content";
import { INFO_LAST_REVIEWED } from "@/data/adventure/everest-three-passes-trek/config";
import "./TravelInfo.css";

export default function TravelInfo() {
  return (
    <section className="etp-section etp-section--sand etp-info" id="essentials" aria-labelledby="etp-info-title">
      <div className="etp-wrap">
        <SectionHeading
          id="etp-info-title"
          eyebrow="Permits & practicalities"
          title="Essential Information Before You Trek"
          intro={
            <>
              Rules, fees and flight arrangements in Nepal change, sometimes at short notice. Treat this as a checklist and
              confirm current requirements with Karvaahh before you travel.{" "}
              <span className="etp-info__reviewed">Last reviewed: {INFO_LAST_REVIEWED}.</span>
            </>
          }
        />
        <ul className="etp-info__grid">
          {travelInfo.map((c, i) => (
            <li key={c.id} className="etp-info__card" data-reveal style={{ "--i": i % 3 } as React.CSSProperties}>
              <div className="etp-info__head">
                <span className="etp-info__icon" aria-hidden="true">
                  <Icon name={c.icon} />
                </span>
                {c.verifyBeforeTravel && <span className="etp-pill etp-pill--gold">Confirm before travel</span>}
              </div>
              <h3 className="etp-info__title">{c.title}</h3>
              <p className="etp-info__text">{c.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
