import { CircleCheck, CircleDashed, CircleMinus, ExternalLink } from "lucide-react";
import { costItems, costLegend, essentialTopics } from "@/data/south-africa/travelEssentials";
import { OFFICIAL_LINKS } from "@/lib/south-africa/config";
import { ZaHead, ZaIcon } from "./ZaPrimitives";

const STATUS_ICON = { quoted: CircleCheck, optional: CircleDashed, separate: CircleMinus } as const;

/** Practical essentials and a clear "what a quote covers" table. Nothing is implied as included. */
export default function SouthAfricaTravelEssentials() {
  return (
    <section className="pkg-section za-essentials" id="essentials" aria-labelledby="ess-h">
      <div className="pkg-container">
        <ZaHead id="ess-h" eyebrow="South Africa travel essentials" title="Good to Know Before You Go" lede="Money, driving, connectivity and the small things that make a trip smoother." />
        <ul className="za-topics">
          {essentialTopics.map((t) => (
            <li key={t.id}>
              <span className="za-topics__icon"><ZaIcon name={t.icon} size={18} /></span>
              <div><strong>{t.title}</strong><span>{t.text}</span></div>
            </li>
          ))}
        </ul>

        <div className="za-costs">
          <h3 className="za-h3">What your quote covers</h3>
          <p className="za-costs__lede">Every cost is itemised. Nothing on this list is included unless your quote says so.</p>
          <table className="za-costs__table">
            <caption className="pkg-sr">How each cost is handled in a Karvaahh quote</caption>
            <thead><tr><th scope="col">Item</th><th scope="col">How it&apos;s handled</th></tr></thead>
            <tbody>
              {costItems.map((c) => {
                const Icon = STATUS_ICON[c.status];
                return (
                  <tr key={c.item}>
                    <th scope="row">{c.item}</th>
                    <td className={`is-${c.status}`}><Icon size={16} aria-hidden="true" /> {costLegend[c.status]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="za-fine">
          Park information:{" "}
          <a href={OFFICIAL_LINKS.sanparks} target="_blank" rel="noopener noreferrer">SANParks <ExternalLink size={12} aria-hidden="true" /></a>
          {" · "}Official tourism:{" "}
          <a href={OFFICIAL_LINKS.tourism} target="_blank" rel="noopener noreferrer">South African Tourism <ExternalLink size={12} aria-hidden="true" /></a>
        </p>
      </div>
    </section>
  );
}
