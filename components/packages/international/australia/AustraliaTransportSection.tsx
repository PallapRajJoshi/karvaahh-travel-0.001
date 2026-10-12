import { Bus, Car, Info, KeyRound, Plane, PlaneLanding, Ship, TrainFront, UserRound, type LucideIcon } from "lucide-react";
import { OPEN_JAW_TIP, arrivalGateways, scaleFacts, transportModes, travelLegs, type TransportIcon, type Verdict } from "@/data/australia/transport";
import CountUp from "../../CountUp";
import Reveal from "../../Reveal";

const ICONS: Record<TransportIcon, LucideIcon> = { domestic: Plane, car: Car, key: KeyRound, user: UserRound, bus: Bus, ferry: Ship, train: TrainFront };
const VERDICT: Record<Verdict, string> = { fly: "Fly", drive: "Drive", either: "Drive or fly" };
const MAX_KM = Math.max(...travelLegs.map((l) => l.roadKm ?? 0));

/**
 * "Getting around Australia": the scale message, transport modes and
 * travel-time indicators. Each bar is the road distance to scale, so the
 * cross-country legs make it obvious why short holidays fly them.
 */
export default function AustraliaTransportSection() {
  return (
    <section className="pkg-section" id="transport" aria-labelledby="transport-h">
      <div className="pkg-container">
        <div className="us-transport__head">
          <div className="pkg-section__head">
            <p className="asia-eyebrow">Australia transportation</p>
            <h2 id="transport-h" className="pkg-h2">A Very Big Country</h2>
            <p className="pkg-lede">
              Australia is geographically enormous. Cities that look close on a map can be a two-day drive apart, so most holidays fly
              between regions and drive only the scenic parts.
            </p>
          </div>
          <dl className="us-scale au-scale">
            {scaleFacts.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd><CountUp value={f.value} />{f.suffix}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="au-legs">
          <div className="au-legs__head">
            <h3 className="au-legs__h">How long does it take?</h3>
            <p className="au-legs__key" aria-hidden="true">
              <span className="au-legs__swatch au-legs__swatch--drive" /> Sensible to drive
              <span className="au-legs__swatch au-legs__swatch--fly" /> Better to fly
            </p>
          </div>
          <ul className="au-legs__list">
            {travelLegs.map((l, i) => (
              <li key={`${l.from}-${l.to}`} className={`au-leg au-leg--${l.verdict}`} style={{ "--i": i } as React.CSSProperties}>
                <span className="au-leg__pair">
                  <strong>{l.from} → {l.to}</strong>
                  <span className="au-leg__verdict">{VERDICT[l.verdict]}</span>
                </span>
                <span className="au-leg__bar" aria-hidden="true">
                  {l.roadKm ? <span style={{ "--w": `${Math.max(3, (l.roadKm / MAX_KM) * 100)}%` } as React.CSSProperties} /> : <span className="is-sea" />}
                </span>
                <span className="au-leg__times">
                  {l.roadKm ? <span><Car size={13} aria-hidden="true" /> ≈ {l.roadKm.toLocaleString("en-IN")} km · {l.road}</span> : <span><Ship size={13} aria-hidden="true" /> {l.other}</span>}
                  {l.flight && <span><Plane size={13} aria-hidden="true" /> {l.flight}</span>}
                </span>
              </li>
            ))}
          </ul>
          <p className="us-note">
            <Info size={14} aria-hidden="true" /> Approximate road distances and driving times without stops, and typical nonstop flight
            times. Schedules, routes and road conditions vary.
          </p>
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

        <div className="au-openjaw">
          <PlaneLanding size={22} aria-hidden="true" />
          <div>
            <p className="au-openjaw__h">Common international arrival cities</p>
            <ul>
              {arrivalGateways.map((g) => (
                <li key={g.code}><strong>{g.city}</strong> {g.code}</li>
              ))}
            </ul>
            <p>{OPEN_JAW_TIP}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
