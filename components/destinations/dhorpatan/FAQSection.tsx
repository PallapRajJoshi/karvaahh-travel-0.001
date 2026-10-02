import { faqs } from "@/data/dhorpatan";
import SectionHeading from "@/components/shared/SectionHeading";
import FAQAccordion from "@/components/shared/FAQAccordion";
import "./FAQSection.css";

export default function FAQSection() {
  return (
    <section className="faq-section" id="faq">
      <div className="dhorpatan-page__container">
        <SectionHeading eyebrow="Good to Know" heading="Frequently Asked Questions" />
        <FAQAccordion items={faqs} idPrefix="dhorpatan-faq" />
      </div>
    </section>
  );
}
