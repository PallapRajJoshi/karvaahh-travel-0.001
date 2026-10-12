import { MessageCircle, Phone, Send, SlidersHorizontal } from "lucide-react";
import { AU_ENQUIRY, contact } from "@/lib/australia/config";

/** Call-to-action strip closing the "Why book Australia with Karvaahh" section. */
export default function WhyKarvaahhCta() {
  return (
    <div className="pkg-section--sand au-why-cta">
      <div className="pkg-container au-why-cta__inner">
        <a href="#plan-trip" className="pkg-btn pkg-btn--lg asia-btn--navy">
          <SlidersHorizontal size={18} aria-hidden="true" /> Customize Your Australia Trip
        </a>
        <a href={AU_ENQUIRY} target="_blank" rel="noopener noreferrer" className="pkg-btn pkg-btn--outline">
          <MessageCircle size={16} aria-hidden="true" /> WhatsApp Karvaahh<span className="pkg-sr"> (opens WhatsApp)</span>
        </a>
        <a href={contact.nepalPhoneHref} className="pkg-btn pkg-btn--outline">
          <Phone size={16} aria-hidden="true" /> Call Karvaahh
        </a>
        <a href="#gateways" className="pkg-btn pkg-btn--text">
          <Send size={16} aria-hidden="true" /> Enquire Now
        </a>
      </div>
    </div>
  );
}
