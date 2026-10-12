import {
  BadgeDollarSign,
  BedDouble,
  Car,
  ChevronDown,
  Clock3,
  CreditCard,
  HandCoins,
  Plane,
  Receipt,
  ShieldCheck,
  Siren,
  Sun,
  Ticket,
  Trees,
  type LucideIcon,
} from "lucide-react";
import { usaEssentials, type EssentialIcon } from "@/data/usa/travelEssentials";

const ICONS: Record<EssentialIcon, LucideIcon> = {
  currency: BadgeDollarSign,
  tip: HandCoins,
  card: CreditCard,
  shield: ShieldCheck,
  plane: Plane,
  hotel: BedDouble,
  receipt: Receipt,
  tree: Trees,
  ticket: Ticket,
  sun: Sun,
  car: Car,
  clock: Clock3,
  siren: Siren,
};

/** Interactive essentials: native <details> cards (keyboard and no-JS friendly). */
export default function USATravelEssentials() {
  return (
    <section className="pkg-section" id="essentials" aria-labelledby="essentials-h">
      <div className="pkg-container">
        <div className="pkg-section__head">
          <p className="asia-eyebrow">USA travel essentials</p>
          <h2 id="essentials-h" className="pkg-h2">Good to Know Before You Go</h2>
          <p className="pkg-lede">
            The USA uses the U.S. dollar. Costs vary significantly by city, season, hotel category, attractions and transport, and hotel
            resort fees, parking, taxes and attraction charges may be additional unless explicitly included.
          </p>
        </div>
        <ul className="us-ess">
          {usaEssentials.map((e) => {
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
      </div>
    </section>
  );
}
