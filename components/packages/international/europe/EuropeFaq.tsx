import { MessageCircle } from "lucide-react";
import FAQAccordion from "@/components/shared/FAQAccordion";
import { europeFaqs } from "@/data/europe/content";
import { GENERAL_ENQUIRY } from "@/lib/europe/config";

/** Reuses the site's native <details> accordion; asia.css adds the open/close motion. */
export default function EuropeFaq() {
  const half = Math.ceil(europeFaqs.length / 2);
  return (
    <section className="pkg-section" id="faq" aria-labelledby="faq-h">
      <div className="pkg-container asia-faq">
        <div className="asia-faq__intro">
          <p className="asia-eyebrow">FAQ</p>
          <h2 id="faq-h" className="pkg-h2">Europe Tour Packages: Your Questions</h2>
          <p className="pkg-lede">Straight answers on routes, visas, seasons, flights and what is included.</p>
          <a href={GENERAL_ENQUIRY} target="_blank" rel="noopener noreferrer" className="pkg-btn pkg-btn--outline">
            <MessageCircle size={16} aria-hidden="true" /> Ask another question
            <span className="pkg-sr"> (opens WhatsApp)</span>
          </a>
        </div>
        <div className="asia-faq__cols">
          <FAQAccordion items={europeFaqs.slice(0, half)} idPrefix="europe-faq" />
          <FAQAccordion items={europeFaqs.slice(half)} idPrefix="europe-faq-b" />
        </div>
      </div>
    </section>
  );
}
