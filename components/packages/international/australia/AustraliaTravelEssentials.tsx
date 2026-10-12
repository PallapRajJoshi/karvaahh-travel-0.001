import {
  BadgeDollarSign,
  Car,
  Check,
  ChevronDown,
  Clock3,
  CreditCard,
  HandCoins,
  Leaf,
  Minus,
  Plane,
  Receipt,
  ShieldCheck,
  Signal,
  Siren,
  Sun,
  Ticket,
  Trees,
  Waves,
  type LucideIcon,
} from "lucide-react";
import { australiaEssentials, inclusionGuide, type EssentialIcon } from "@/data/australia/travelEssentials";

const ICONS: Record<EssentialIcon, LucideIcon> = {
  currency: BadgeDollarSign,
  card: CreditCard,
  tip: HandCoins,
  plane: Plane,
  car: Car,
  shield: ShieldCheck,
  receipt: Receipt,
  ticket: Ticket,
  sun: Sun,
  clock: Clock3,
  signal: Signal,
  tree: Trees,
  waves: Waves,
  siren: Siren,
  leaf: Leaf,
};

/** Essentials as native <details> cards (keyboard and no-JS friendly) plus the package transparency table. */
export default function AustraliaTravelEssentials() {
  return (
    <section className="pkg-section" id="essentials" aria-labelledby="essentials-h">
      <div className="pkg-container">
        <div className="pkg-section__head">
          <p className="asia-eyebrow">Australia travel essentials</p>
          <h2 id="essentials-h" className="pkg-h2">Good to Know Before You Go</h2>
          <p className="pkg-lede">Money, driving, weather, safety and the small things that make a big difference on the ground.</p>
        </div>
        <ul className="us-ess">
          {australiaEssentials.map((e) => {
            const Icon = ICONS[e.icon];
            return (
              <li key={e.id}>
                <details className="us-ess__item">
                  <summary>
                    <span className="us-ess__icon"><Icon size={20} aria-hidden="true" /></span>
                    <span className="us-ess__head">
                      <strong>{e.title}</strong>
                      <span>{e.summary}</span>
                    </span>
                    <ChevronDown size={18} className="us-ess__chev" aria-hidden="true" />
                  </summary>
                  <ul className="us-ess__points">
                    {e.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </details>
              </li>
            );
          })}
        </ul>

        <div className="au-transp">
          <h3 className="au-transp__h">What&apos;s in an Australia package?</h3>
          <p className="au-transp__lede">Nothing is assumed. Your quote lists exactly what is included; anything not listed is quoted separately.</p>
          <table className="au-transp__table">
            <caption className="pkg-sr">Package inclusions guide</caption>
            <thead>
              <tr>
                <th scope="col">Item</th>
                <th scope="col">Status</th>
                <th scope="col">Details</th>
              </tr>
            </thead>
            <tbody>
              {inclusionGuide.map((r) => (
                <tr key={r.item}>
                  <th scope="row">{r.item}</th>
                  <td>
                    <span className={`au-status au-status--${r.status}`}>
                      {r.status === "listed" ? <Check size={13} aria-hidden="true" /> : <Minus size={13} aria-hidden="true" />}
                      {r.status === "listed" ? "Included when listed" : "Quoted separately"}
                    </span>
                  </td>
                  <td>{r.text}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
