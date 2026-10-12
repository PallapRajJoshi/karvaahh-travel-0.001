import { Car, Info, Plane, TrainFront, type LucideIcon } from "lucide-react";
import { russiaDestinationById } from "@/data/russia/destinations";
import { moscowSpbRail, transSiberian, transportModes } from "@/data/russia/transport";
import { LIMITED_NOTE } from "@/lib/russia/config";
import Reveal from "../../Reveal";
import FilterButton from "./FilterButton";

const ICONS: Record<(typeof transportModes)[number]["icon"], LucideIcon> = { plane: Plane, train: TrainFront, car: Car };

export default function TransportSection() {
  return (
    <section className="pkg-section" id="transport" aria-labelledby="transport-h">
      <div className="pkg-container">
        <div className="pkg-section__head">
          <p className="asia-eyebrow">Flights & transportation</p>
          <h2 id="transport-h" className="pkg-h2">Getting Around Russia</h2>
          <p className="pkg-lede">Distances are large, so the right mix of flights, trains and transfers shapes the whole trip.</p>
        </div>

        <ul className="ru-modes">
          {transportModes.map((m, i) => {
            const Icon = ICONS[m.icon];
            return (
              <li key={m.title} style={{ "--i": i } as React.CSSProperties}>
                <Reveal className="asia-feature">
                  <span className="asia-feature__icon"><Icon size={22} aria-hidden="true" /></span>
                  <h3 className="asia-feature__title">{m.title}</h3>
                  <p className="asia-feature__text">{m.text}</p>
                </Reveal>
              </li>
            );
          })}
        </ul>

        <Reveal className="ru-rail">
          <div className="ru-rail__track" aria-hidden="true">
            <span className="ru-rail__city">Moscow</span>
            <span className="ru-rail__line"><span className="ru-rail__train"><TrainFront size={18} /></span></span>
            <span className="ru-rail__city">St Petersburg</span>
          </div>
          <div>
            <h3 className="ru-rail__title">{moscowSpbRail.title}</h3>
            <p>{moscowSpbRail.text}</p>
            <ul className="ru-rail__points">
              {moscowSpbRail.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </Reveal>

        <div className="ru-tsr" id="trans-siberian">
          <div className="ru-tsr__head">
            <h3 className="ru-tsr__title">{transSiberian.title}</h3>
            <p>{transSiberian.intro}</p>
          </div>
          <Reveal className="ru-tsr__wrap">
            <ol className="ru-tsr__stops" aria-label="Example Trans-Siberian route">
              {transSiberian.stops.map((s, i) => {
                const d = russiaDestinationById(s.id);
                const limited = d?.operationalStatus === "limited";
                return (
                  <li key={s.id} className="ru-tsr__stop" style={{ "--i": i } as React.CSSProperties}>
                    <span className="ru-tsr__dot" aria-hidden="true" />
                    <strong>{s.name}</strong>
                    <span>{s.note}</span>
                    {limited && <em className="ru-tsr__limited">{LIMITED_NOTE}</em>}
                  </li>
                );
              })}
            </ol>
          </Reveal>
          <ul className="ru-tsr__notes">
            {transSiberian.notes.map((n) => (
              <li key={n}><Info size={14} aria-hidden="true" /> {n}</li>
            ))}
          </ul>
          <FilterButton filter={{ experience: "trans-siberian" }} className="pkg-btn asia-btn--navy">
            See Trans-Siberian journeys
          </FilterButton>
        </div>
      </div>
    </section>
  );
}
