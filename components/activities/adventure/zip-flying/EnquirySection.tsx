import EnquiryForm from "./EnquiryForm";
import { enquiry, WHATSAPP_NUMBER } from "./data/zipFlyingData";

export default function EnquirySection() {
  const wa = WHATSAPP_NUMBER
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Karvaahh, I'd like to plan the Pokhara ZipFlyer.")}`
    : null;

  return (
    <section id="enquiry" className="zf-sec zf-enq" aria-labelledby="zf-enq-title">
      <div className="zf-wrap zf-enq__grid">
        <div className="zf-enq__intro">
          <h2 id="zf-enq-title" className="zf-h2 zf-h2--light">{enquiry.heading}</h2>
          <p className="zf-lead zf-lead--light">{enquiry.text}</p>
          <div className="zf-enq__actions">
            <a className="zf-btn zf-btn--signal" href="#zf-form">{enquiry.primaryCta}</a>
            {wa ? (
              <a className="zf-btn zf-btn--ghost" href={wa} target="_blank" rel="noopener noreferrer">
                {enquiry.secondaryCta}
              </a>
            ) : (
              /* INTEGRATION PLACEHOLDER: set WHATSAPP_NUMBER in zipFlyingData.ts */
              <span className="zf-btn zf-btn--ghost is-disabled" aria-disabled="true" title="WhatsApp number not configured">
                {enquiry.secondaryCta}
              </span>
            )}
          </div>
        </div>
        <EnquiryForm />
      </div>
    </section>
  );
}
