import { CircleAlert, ExternalLink, FileCheck, MessageCircle } from "lucide-react";
import { visaPoints } from "@/data/antarctica/travelEssentials";
import { ANTARCTICA_VISA_ENQUIRY, OFFICIAL_LINKS } from "@/lib/antarctica/config";
import SectionHead from "./SectionHead";

/** Documentation guidance. No fees, processing times or approval guarantees. */
export default function AntarcticaVisaSection() {
  return (
    <section className="pkg-section an-visa" id="visa" aria-labelledby="visa-h">
      <div className="pkg-container">
        <SectionHead id="visa-h" eyebrow="Visa + documentation" title="Documents for a Journey to Antarctica" lede={visaPoints.intro} />
        <div className="an-visa__grid">
          <div className="an-visa__card">
            <h3>You may need documentation for</h3>
            <ul className="an-list">{visaPoints.needs.map((x) => <li key={x}>{x}</li>)}</ul>
          </div>
          <div className="an-visa__card">
            <h3>Requirements depend on</h3>
            <ul className="an-tags an-tags--soft">{visaPoints.dependsOn.map((x) => <li key={x}>{x}</li>)}</ul>
            <p className="an-visa__flag"><CircleAlert size={18} aria-hidden="true" /> {visaPoints.nepalIndia}</p>
          </div>
          <div className="an-visa__card an-visa__card--accent">
            <h3>How Karvaahh can help</h3>
            <ul className="an-checks">{visaPoints.karvaahhHelps.map((x) => <li key={x}><FileCheck size={15} aria-hidden="true" /> {x}</li>)}</ul>
            <a href={ANTARCTICA_VISA_ENQUIRY} target="_blank" rel="noopener noreferrer" className="pkg-btn an-btn--navy">
              <MessageCircle size={16} aria-hidden="true" /> Ask about documents<span className="pkg-sr"> (opens WhatsApp)</span>
            </a>
          </div>
        </div>
        <p className="an-note"><CircleAlert size={16} aria-hidden="true" /> {visaPoints.disclaimer}</p>
        <p className="an-fine">
          Official references:{" "}
          <a href={OFFICIAL_LINKS.argentinaVisa} target="_blank" rel="noopener noreferrer">Argentina visas <ExternalLink size={12} aria-hidden="true" /></a>
          {" · "}
          <a href={OFFICIAL_LINKS.chileVisa} target="_blank" rel="noopener noreferrer">Government of Chile <ExternalLink size={12} aria-hidden="true" /></a>
        </p>
      </div>
    </section>
  );
}
