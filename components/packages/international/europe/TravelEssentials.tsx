import { AlertCircle, BookUser, CheckCircle2, Coins, MessageCircle } from "lucide-react";
import { currencyIntro, documentChecklist, membershipCompare, visaDisclaimer, visaFactors } from "@/data/europe/content";
import { bookableCountries, usesEuro } from "@/data/europe/countries";
import { VISA_ENQUIRY } from "@/lib/europe/config";
import Reveal from "../../Reveal";
import Flag from "../asia/Flag";

/** Visa explainer, document checklist and currency guide. All server-rendered. */
export default function TravelEssentials() {
  const euro = bookableCountries.filter((c) => usesEuro(c) && c.eu);
  const euroOutsideZone = bookableCountries.filter((c) => usesEuro(c) && !c.eu);
  const otherCurrencies = bookableCountries.filter((c) => !usesEuro(c));
  const schengen = bookableCountries.filter((c) => c.schengen);

  return (
    <>
      <section className="pkg-section eu-visa" id="visa" aria-labelledby="visa-h">
        <div className="pkg-container">
          <div className="pkg-section__head asia-head--center">
            <p className="asia-eyebrow">Europe travel essentials</p>
            <h2 id="visa-h" className="pkg-h2">There Is No Single &ldquo;Europe Visa&rdquo;</h2>
            <p className="pkg-lede">
              Many European destinations share the Schengen short-stay visa, but the United Kingdom, Ireland and other
              non-Schengen countries set their own entry rules. What you need depends on:
            </p>
            <ul className="eu-visa__factors">
              {visaFactors.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>

          <ol className="eu-compare" aria-label="EU, Schengen and Europe are different things">
            {membershipCompare.map((m, i) => (
              <li key={m.id} className={`eu-compare__item eu-compare__item--${m.id}`} style={{ "--i": i } as React.CSSProperties}>
                <Reveal className="eu-compare__card">
                  <h3 className="eu-compare__title">{m.title}</h3>
                  <p>{m.text}</p>
                  <p className="eu-compare__ex">{m.examples}</p>
                </Reveal>
                {i < membershipCompare.length - 1 && (
                  <span className="eu-compare__ne" aria-label="is not the same as">≠</span>
                )}
              </li>
            ))}
          </ol>

          <details className="eu-schengen">
            <summary>
              Schengen countries on this page ({schengen.length})
            </summary>
            <ul>
              {schengen.map((c) => (
                <li key={c.id}><Flag iso={c.iso} size={16} /> {c.name}</li>
              ))}
            </ul>
          </details>

          <p className="eu-disclaimer" role="note">
            <AlertCircle size={16} aria-hidden="true" /> {visaDisclaimer}
          </p>
        </div>
      </section>

      <section className="pkg-section pkg-section--sand" id="before-you-travel" aria-labelledby="checklist-h">
        <div className="pkg-container asia-visa">
          <Reveal className="asia-visa__intro">
            <span className="asia-visa__icon" aria-hidden="true"><BookUser size={28} /></span>
            <p className="asia-eyebrow">Visa &amp; document checklist</p>
            <h2 id="checklist-h" className="pkg-h2">Before You Travel</h2>
            <p className="pkg-lede">
              A typical document set for a Europe trip. Embassies can ask for more, and requirements change, so we confirm
              the exact list for your passport and route.
            </p>
            <a href={VISA_ENQUIRY} target="_blank" rel="noopener noreferrer" className="pkg-btn pkg-btn--lg asia-btn--navy">
              <MessageCircle size={18} aria-hidden="true" /> Ask About Visa Assistance
              <span className="pkg-sr"> (opens WhatsApp)</span>
            </a>
            <p className="eu-visa__fine">
              Karvaahh assists with documentation only. Visa decisions are made by embassies and consulates, and approval is
              never guaranteed.
            </p>
          </Reveal>
          <ul className="eu-checklist">
            {documentChecklist.map((d, i) => (
              <li key={d.title} style={{ "--i": i } as React.CSSProperties}>
                <Reveal className="eu-checklist__item">
                  <CheckCircle2 size={20} aria-hidden="true" />
                  <span>
                    <strong>{d.title}</strong>
                    <small>{d.text}</small>
                  </span>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="pkg-section eu-currency" id="currency" aria-labelledby="currency-h">
        <div className="pkg-container">
          <div className="pkg-section__head">
            <p className="asia-eyebrow"><Coins size={14} aria-hidden="true" /> Currency &amp; payments</p>
            <h2 id="currency-h" className="pkg-h2">Understanding European Currency</h2>
            <p className="pkg-lede">{currencyIntro}</p>
          </div>
          <div className="eu-currency__grid">
            <div className="eu-currency__euro">
              <h3 className="eu-currency__h"><span className="eu-currency__sym" aria-hidden="true">€</span> Euro countries</h3>
              <ul className="eu-currency__flags">
                {euro.map((c) => (
                  <li key={c.id}><Flag iso={c.iso} size={18} /> {c.name}</li>
                ))}
              </ul>
              {euroOutsideZone.length > 0 && (
                <p className="eu-currency__note">
                  {euroOutsideZone.map((c) => c.name).join(" and ")} also use the euro without being eurozone members.
                </p>
              )}
            </div>
            <div className="eu-currency__other">
              <h3 className="eu-currency__h">Non-euro destinations</h3>
              <table className="eu-currency__table">
                <thead>
                  <tr>
                    <th scope="col">Country</th>
                    <th scope="col">Currency</th>
                  </tr>
                </thead>
                <tbody>
                  {otherCurrencies.map((c) => (
                    <tr key={c.id}>
                      <th scope="row"><Flag iso={c.iso} size={16} /> {c.name}</th>
                      <td>{c.currency.name} <span className="eu-currency__code">{c.currency.code}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
