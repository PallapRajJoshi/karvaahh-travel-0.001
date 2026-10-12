import Link from "next/link";
import { BookUser, Check, ExternalLink, FileCheck2, Info, MessageCircle, ShieldAlert, X } from "lucide-react";
import { australiaVisa as v } from "@/data/australia/content";
import { AU_LINKS, AU_VISA_ENQUIRY, OFFICIAL_LINKS, liveHref } from "@/lib/australia/config";
import Reveal from "../../Reveal";

/**
 * Visa & documentation. Explains the landscape without hard-coding changing
 * government rules, fees or processing times: it points to the official
 * sources and the site's visa page (once live), and states what Karvaahh
 * cannot guarantee.
 */
export default function AustraliaVisaSection() {
  const visaPage = liveHref(AU_LINKS.visa);

  return (
    <section className="pkg-section pkg-section--sand" id="visa" aria-labelledby="visa-h">
      <div className="pkg-container us-visa">
        <Reveal className="us-visa__intro">
          <span className="asia-visa__icon" aria-hidden="true"><BookUser size={28} /></span>
          <p className="asia-eyebrow">Australia visa & documentation</p>
          <h2 id="visa-h" className="pkg-h2">Entry Requirements, Explained Simply</h2>
          <p className="pkg-lede">{v.intro}</p>
          <ul className="us-visa__mech">
            {v.pathways.map((m) => (
              <li key={m.title}>
                <strong>{m.title}</strong>
                <span>{m.text}</span>
              </li>
            ))}
          </ul>
          <p className="us-visa__callout"><FileCheck2 size={18} aria-hidden="true" /> {v.callout}</p>

          <div className="us-visa__cols">
            <div>
              <p className="us-visa__h">Karvaahh may provide</p>
              <ul className="us-visa__yes">
                {v.assist.map((a) => (
                  <li key={a}><Check size={15} aria-hidden="true" /> {a}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="us-visa__h">We cannot guarantee</p>
              <ul className="us-visa__no">
                {v.noGuarantee.map((a) => (
                  <li key={a}><X size={15} aria-hidden="true" /> {a}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="us-visa__warn"><ShieldAlert size={18} aria-hidden="true" /> Visa decisions are made by Australian authorities. Requirements change, so always verify them before applying and before booking.</p>

          <div className="us-visa__cta">
            {visaPage ? (
              <Link href={visaPage} className="pkg-btn pkg-btn--lg asia-btn--navy">Australia Visa Assistance from Karvaahh</Link>
            ) : (
              <a href={AU_VISA_ENQUIRY} target="_blank" rel="noopener noreferrer" className="pkg-btn pkg-btn--lg asia-btn--navy">
                <MessageCircle size={18} aria-hidden="true" /> Ask about visa guidance<span className="pkg-sr"> (opens WhatsApp)</span>
              </a>
            )}
            <a href={OFFICIAL_LINKS.visaFinder} target="_blank" rel="noopener noreferrer" className="pkg-btn pkg-btn--outline">
              Official visa finder <ExternalLink size={15} aria-hidden="true" /><span className="pkg-sr"> (Australian Government, opens in a new tab)</span>
            </a>
            <a href={OFFICIAL_LINKS.visitorVisa} target="_blank" rel="noopener noreferrer" className="pkg-btn pkg-btn--text">
              Visitor visa (subclass 600) <ExternalLink size={14} aria-hidden="true" /><span className="pkg-sr"> (official, opens in a new tab)</span>
            </a>
          </div>
        </Reveal>

        <div>
          <p className="us-visa__h us-visa__h--topics">General preparation topics</p>
          <ul className="asia-visa__list">
            {v.topics.map((t, i) => (
              <li key={t.title} style={{ "--i": i } as React.CSSProperties}>
                <Reveal className="asia-visa__item">
                  <span className="asia-visa__n" aria-hidden="true">{i + 1}</span>
                  <p><strong>{t.title}.</strong> {t.text}</p>
                </Reveal>
              </li>
            ))}
          </ul>
          <p className="us-note"><Info size={14} aria-hidden="true" /> {v.feesNote}</p>
        </div>
      </div>
    </section>
  );
}
