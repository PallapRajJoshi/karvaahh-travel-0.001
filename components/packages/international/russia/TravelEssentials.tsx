import { BookUser, FileCheck2, Info, MessageCircle, ShieldAlert } from "lucide-react";
import { essentials } from "@/data/russia/content";
import { RUSSIA_VISA_ENQUIRY } from "@/lib/russia/config";
import Reveal from "../../Reveal";

export default function TravelEssentials() {
  return (
    <section className="pkg-section" id="visa" aria-labelledby="visa-h">
      <div className="pkg-container asia-visa">
        <Reveal className="asia-visa__intro">
          <span className="asia-visa__icon" aria-hidden="true"><BookUser size={28} /></span>
          <p className="asia-eyebrow">Visa & documents</p>
          <h2 id="visa-h" className="pkg-h2">Russia Travel Essentials</h2>
          <p className="pkg-lede">Visa and entry requirements depend on:</p>
          <ul className="ru-depends">
            {essentials.requirementsDependOn.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
          <p className="ru-assist"><FileCheck2 size={18} aria-hidden="true" /> Visa / Document Assistance Available Where Offered</p>
          <p className="ru-warn"><ShieldAlert size={18} aria-hidden="true" /> Visa approval is determined by the relevant authority and cannot be guaranteed by Karvaahh.</p>
          <a href={RUSSIA_VISA_ENQUIRY} target="_blank" rel="noopener noreferrer" className="pkg-btn pkg-btn--lg asia-btn--navy">
            <MessageCircle size={18} aria-hidden="true" /> Ask About Documents
            <span className="pkg-sr"> (opens WhatsApp)</span>
          </a>
        </Reveal>
        <div>
          <ul className="asia-visa__list">
            {essentials.documents.map((d, i) => (
              <li key={d.title} style={{ "--i": i } as React.CSSProperties}>
                <Reveal className="asia-visa__item">
                  <span className="asia-visa__n" aria-hidden="true">{i + 1}</span>
                  <p><strong>{d.title}.</strong> {d.text}</p>
                </Reveal>
              </li>
            ))}
          </ul>
          <p className="ru-note ru-note--strong"><Info size={15} aria-hidden="true" /> Verify the latest requirements before booking and before travel.</p>
        </div>
      </div>
    </section>
  );
}
