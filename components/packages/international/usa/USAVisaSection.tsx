import Link from "next/link";
import { BookUser, Check, ExternalLink, FileCheck2, MessageCircle, ShieldAlert, X } from "lucide-react";
import { usaVisa } from "@/data/usa/content";
import { OFFICIAL_LINKS, USA_LINKS, USA_VISA_ENQUIRY, liveHref } from "@/lib/usa/config";
import Reveal from "../../Reveal";

/**
 * Visa & documentation panel. Explains the landscape without hard-coding
 * changing government rules: it points to the official sources and the
 * site's visa page (once live), and states what Karvaahh cannot guarantee.
 */
export default function USAVisaSection() {
  const visaPage = liveHref(USA_LINKS.visa);

  return (
    <section className="pkg-section pkg-section--sand" id="visa" aria-labelledby="visa-h">
      <div className="pkg-container us-visa">
        <Reveal className="us-visa__intro">
          <span className="asia-visa__icon" aria-hidden="true"><BookUser size={28} /></span>
          <p className="asia-eyebrow">USA visa & documentation</p>
          <h2 id="visa-h" className="pkg-h2">Entry Requirements, Explained Simply</h2>
          <p className="pkg-lede">{usaVisa.intro}</p>
          <ul className="us-visa__mech">
            {usaVisa.mechanisms.map((m) => (
              <li key={m.title}>
                <strong>{m.title}</strong>
                <span>{m.text}</span>
              </li>
            ))}
          </ul>
          <p className="us-visa__callout"><FileCheck2 size={18} aria-hidden="true" /> {usaVisa.callout}</p>

          <div className="us-visa__cols">
            <div>
              <p className="us-visa__h">Karvaahh may provide</p>
              <ul className="us-visa__yes">
                {usaVisa.assist.map((a) => (
                  <li key={a}><Check size={15} aria-hidden="true" /> {a}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="us-visa__h">We cannot guarantee</p>
              <ul className="us-visa__no">
                {usaVisa.noGuarantee.map((a) => (
                  <li key={a}><X size={15} aria-hidden="true" /> {a}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="us-visa__warn"><ShieldAlert size={18} aria-hidden="true" /> Visa decisions are made by U.S. authorities. Requirements change, so always verify them before applying and before travel.</p>

          <div className="us-visa__cta">
            {visaPage ? (
              <Link href={visaPage} className="pkg-btn pkg-btn--lg asia-btn--navy">Visa guidance from Karvaahh</Link>
            ) : (
              <a href={USA_VISA_ENQUIRY} target="_blank" rel="noopener noreferrer" className="pkg-btn pkg-btn--lg asia-btn--navy">
                <MessageCircle size={18} aria-hidden="true" /> Ask about visa guidance<span className="pkg-sr"> (opens WhatsApp)</span>
              </a>
            )}
            <a href={OFFICIAL_LINKS.visitorVisa} target="_blank" rel="noopener noreferrer" className="pkg-btn pkg-btn--outline">
              U.S. visitor visa (official) <ExternalLink size={15} aria-hidden="true" /><span className="pkg-sr"> (opens in a new tab)</span>
            </a>
            <a href={OFFICIAL_LINKS.esta} target="_blank" rel="noopener noreferrer" className="pkg-btn pkg-btn--text">
              ESTA (official) <ExternalLink size={14} aria-hidden="true" /><span className="pkg-sr"> (opens in a new tab)</span>
            </a>
          </div>
        </Reveal>

        <div>
          <p className="us-visa__h us-visa__h--topics">General preparation topics</p>
          <ul className="asia-visa__list">
            {usaVisa.topics.map((t, i) => (
              <li key={t.title} style={{ "--i": i } as React.CSSProperties}>
                <Reveal className="asia-visa__item">
                  <span className="asia-visa__n" aria-hidden="true">{i + 1}</span>
                  <p><strong>{t.title}.</strong> {t.text}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
