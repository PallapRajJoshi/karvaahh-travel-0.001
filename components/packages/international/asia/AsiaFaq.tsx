import { MessageCircle } from "lucide-react";
import FAQAccordion from "@/components/shared/FAQAccordion";
import { asiaFaqs } from "@/data/asia-content";
import { GENERAL_ENQUIRY } from "@/lib/asia/config";

/**
 * Reuses the site's native <details> accordion; asia.css adds the open/close
 * motion. Shared by the international pages; defaults render the Asia FAQ.
 */
export default function AsiaFaq({
  items = asiaFaqs,
  title = "Asia Tour Packages: Your Questions",
  intro = "Straight answers on planning, visas, flights and what is included.",
  enquiryHref = GENERAL_ENQUIRY,
}: {
  items?: { question: string; answer: string }[];
  title?: string;
  intro?: string;
  enquiryHref?: string;
}) {
  const half = Math.ceil(items.length / 2);
  return (
    <section className="pkg-section" id="faq" aria-labelledby="faq-h">
      <div className="pkg-container asia-faq">
        <div className="asia-faq__intro">
          <p className="asia-eyebrow">FAQ</p>
          <h2 id="faq-h" className="pkg-h2">{title}</h2>
          <p className="pkg-lede">{intro}</p>
          <a href={enquiryHref} target="_blank" rel="noopener noreferrer" className="pkg-btn pkg-btn--outline">
            <MessageCircle size={16} aria-hidden="true" /> Ask another question
            <span className="pkg-sr"> (opens WhatsApp)</span>
          </a>
        </div>
        <div className="asia-faq__cols">
          <FAQAccordion items={items.slice(0, half)} idPrefix="faq-a" />
          <FAQAccordion items={items.slice(half)} idPrefix="faq-b" />
        </div>
      </div>
    </section>
  );
}
