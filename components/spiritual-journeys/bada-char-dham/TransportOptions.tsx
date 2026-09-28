import type { ReactNode } from "react";
import { badaCharDhamData as d } from "./data/badaCharDhamData";
import SectionHeading from "./shared/SectionHeading";
import { CarIcon, PlaneIcon, RouteIcon, TrainIcon } from "./shared/icons";
import "./JourneyPlanning.css";

const ICONS: Record<string, ReactNode> = {
  Flights: <PlaneIcon size={26} />,
  Trains: <TrainIcon size={26} />,
  "Private Vehicle": <CarIcon size={26} />,
  "Mixed Transportation": <RouteIcon size={26} />,
};

export default function TransportOptions() {
  const t = d.transport;
  return (
    <section className="bcd-section bcd-section--ivory bcd-section--flush-top" aria-labelledby="bcd-transport-title">
      <div className="bcd-container">
        <SectionHeading id="bcd-transport-title" title={t.heading} />
        <ul className="bcd-transport">
          {t.items.map((item) => (
            <li key={item.title} className={`bcd-transport__item ${item.title === "Mixed Transportation" ? "is-recommended" : ""}`}>
              <span className="bcd-transport__icon">{ICONS[item.title]}</span>
              <h3 className="bcd-transport__title">{item.title}</h3>
              <p className="bcd-transport__text">{item.text}</p>
            </li>
          ))}
        </ul>
        <div className="bcd-transport__depends">
          <p className="bcd-transport__depends-label">Transport choices depend on</p>
          <ul className="bcd-chips">
            {t.dependsOn.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>
        <p className="bcd-transport__small">{t.note}</p>
      </div>
    </section>
  );
}
