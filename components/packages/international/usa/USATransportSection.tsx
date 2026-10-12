import { Car, KeyRound, Mountain, Plane, PlaneTakeoff, TrainFront, UserRound, type LucideIcon } from "lucide-react";
import { scaleFacts, transportModes, type TransportIcon } from "@/data/usa/transport";
import CountUp from "../../CountUp";
import Reveal from "../../Reveal";

const ICONS: Record<TransportIcon, LucideIcon> = { plane: PlaneTakeoff, domestic: Plane, train: TrainFront, car: Car, key: KeyRound, user: UserRound, mountain: Mountain };

export default function USATransportSection() {
  return (
    <section className="pkg-section" id="transport" aria-labelledby="transport-h">
      <div className="pkg-container">
        <div className="us-transport__head">
          <div className="pkg-section__head">
            <p className="asia-eyebrow">Flights & domestic transportation</p>
            <h2 id="transport-h" className="pkg-h2">Getting Around a Vast Country</h2>
            <p className="pkg-lede">
              The USA is geographically vast, so flying between major regions is often more practical than connecting everything by road.
              We mix flights, rail, transfers and drivers to suit each route.
            </p>
          </div>
          <dl className="us-scale">
            {scaleFacts.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd><CountUp value={f.value} />{f.suffix}</dd>
              </div>
            ))}
          </dl>
        </div>

        <ul className="us-modes">
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
      </div>
    </section>
  );
}
