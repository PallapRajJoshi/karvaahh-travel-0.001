import { ArrowRight, MessageCircle, Phone, Send } from "lucide-react";
import { SA_ENQUIRY, contact } from "@/lib/south-africa/config";

/** Call-to-action row that closes the "Why Karvaahh" trust section. */
export default function WhyKarvaahhCTA() {
  return (
    <div className="za-whycta-band">
      <div className="pkg-container za-whycta">
      <a href="#plan-trip" className="pkg-btn pkg-btn--lg za-btn--earth">Customize Your South Africa Trip <ArrowRight size={18} className="pkg-arrow" aria-hidden="true" /></a>
      <a href={SA_ENQUIRY} target="_blank" rel="noopener noreferrer" className="pkg-btn pkg-btn--lg pkg-btn--outline">
        <MessageCircle size={18} aria-hidden="true" /> WhatsApp Karvaahh<span className="pkg-sr"> (opens WhatsApp)</span>
      </a>
      <a href={contact.nepalPhoneHref} className="pkg-btn pkg-btn--lg pkg-btn--outline"><Phone size={18} aria-hidden="true" /> Call Karvaahh</a>
      <a href="#plan-trip" className="pkg-btn pkg-btn--lg pkg-btn--outline"><Send size={18} aria-hidden="true" /> Enquire Now</a>
      </div>
    </div>
  );
}
