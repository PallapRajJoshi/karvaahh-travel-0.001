import Image from "next/image";
import type { EnquiryContent } from "./types";
import { enquiryHref, whatsappHref } from "./contact.config";
import { WhatsAppIcon } from "./icons";
import "./enquiry-cta.css";

export default function EnquiryCta({ content, slug }: { content: EnquiryContent; slug: string }) {
  const wa = whatsappHref(content.whatsappMessage);

  return (
    <section id="enquire" className="ae-enquire" aria-labelledby="ae-enquire-title">
      <div className="ae-enquire__media" aria-hidden="true">
        <Image src={content.image.src} alt="" fill sizes="100vw" className="ae-enquire__img" />
      </div>
      <div className="ae-container ae-enquire__inner">
        <div className="ae-enquire__panel">
          <h2 id="ae-enquire-title" className="ae-enquire__title">
            {content.heading}
          </h2>
          <p className="ae-enquire__body">{content.body}</p>
          <div className="ae-enquire__ctas">
            <a href={enquiryHref({ activity: slug })} className="ae-btn ae-btn--gold">
              {content.primaryLabel}
            </a>
            {wa ? (
              <a href={wa} className="ae-btn ae-btn--ghost-light" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon />
                {content.whatsappLabel}
                <span className="ae-sr-only"> (opens WhatsApp)</span>
              </a>
            ) : null}
          </div>
          <ul className="ae-enquire__brand">
            {content.brandLines.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
