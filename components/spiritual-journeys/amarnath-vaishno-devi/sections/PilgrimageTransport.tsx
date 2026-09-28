import { TRANSPORT_OPTIONS } from "../data/content";
import { Icon } from "../Icon";
import { OfficialNotice } from "../OfficialNotice";
import { SectionHeading } from "../SectionHeading";
import "./PilgrimageTransport.css";

export function PilgrimageTransport() {
  return (
    <section className="avd-section avd-section--paper avd-ptrans" aria-labelledby="avd-ptrans-title">
      <div className="avd-wrap">
        <SectionHeading
          id="avd-ptrans-title"
          title="Travel options for the pilgrimage"
          lede="Walking is the traditional way. Other services exist on parts of the routes, but none is guaranteed on any given day."
        />
        <ul className="avd-ptrans__list">
          {TRANSPORT_OPTIONS.map((t) => (
            <li key={t.name} className="avd-ptrans__item">
              <Icon name={t.icon} size={28} className="avd-ptrans__icon" />
              <h3 className="avd-ptrans__name">{t.name}</h3>
              <p className="avd-ptrans__applies">{t.appliesTo}</p>
              <p className="avd-ptrans__body">{t.body}</p>
            </li>
          ))}
        </ul>
        <OfficialNotice>
          Transport options, operating schedules, booking rules and availability may change. Confirm current arrangements
          before travel. We don&rsquo;t publish prices for route services because they are set locally and change.
        </OfficialNotice>
      </div>
    </section>
  );
}
