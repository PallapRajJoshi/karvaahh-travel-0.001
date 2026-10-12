import { CircleAlert, ExternalLink, FileCheck, MessageCircle } from "lucide-react";
import { visaPoints } from "@/data/south-africa/travelEssentials";
import { OFFICIAL_LINKS, SA_VISA_ENQUIRY } from "@/lib/south-africa/config";
import { ZaHead } from "./ZaPrimitives";

/** Visa + documentation guidance. No fees, timelines or approval guarantees. */
export default function SouthAfricaVisaSection() {
  return (
    <section className="pkg-section za-visa" id="visa" aria-labelledby="visa-h">
      <div className="pkg-container">
        <ZaHead id="visa-h" eyebrow="South Africa visa + documentation" title="Entry Requirements, Clearly Explained" lede={visaPoints.intro} />
        <div className="za-visa__grid">
          <div className="za-visa__card">
            <h3>Requirements depend on</h3>
            <ul className="za-tags za-tags--soft">{visaPoints.dependsOn.map((x) => <li key={x}>{x}</li>)}</ul>
            <p className="za-visa__flag"><CircleAlert size={18} aria-hidden="true" /> {visaPoints.nepalIndia}</p>
          </div>
          <div className="za-visa__card za-visa__card--accent">
            <h3>How Karvaahh can help</h3>
            <ul className="za-checks">{visaPoints.karvaahhHelps.map((x) => <li key={x}><FileCheck size={15} aria-hidden="true" /> {x}</li>)}</ul>
            <a href={SA_VISA_ENQUIRY} target="_blank" rel="noopener noreferrer" className="pkg-btn za-btn--earth">
              <MessageCircle size={16} aria-hidden="true" /> Ask about documents<span className="pkg-sr"> (opens WhatsApp)</span>
            </a>
          </div>
        </div>
        <p className="za-note"><CircleAlert size={16} aria-hidden="true" /> {visaPoints.disclaimer}</p>
        <p className="za-fine">
          Official reference:{" "}
          <a href={OFFICIAL_LINKS.dha} target="_blank" rel="noopener noreferrer">Department of Home Affairs <ExternalLink size={12} aria-hidden="true" /></a>
        </p>
      </div>
    </section>
  );
}
