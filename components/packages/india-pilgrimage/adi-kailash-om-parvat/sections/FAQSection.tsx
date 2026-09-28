import { faqs } from "@/data/india-pilgrimage/adi-kailash-om-parvat/faqs";
import { ctas, headings } from "@/data/india-pilgrimage/adi-kailash-om-parvat/page";
import { Accordion, type AccordionItem } from "../ui/Accordion";
import { CtaLink } from "../ui/CtaLink";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import "./faq.css";

/** Section 13 — FAQ. Answers come from the same strings as FAQPage JSON-LD. */
export function FAQSection() {
  const items: AccordionItem[] = faqs
    .filter((f) => f.enabled !== false)
    .map((faq) => ({
      id: faq.id,
      title: faq.question,
      badge: faq.needsVerification ? "Subject to current verification" : undefined,
      content: faq.answer.split(/\n\s*\n/).map((para, i) => (
        <p key={i} className="akop-faq__answer">
          {para}
        </p>
      )),
    }));

  return (
    <section id="faq" className="akop-section akop-faq" aria-labelledby="faq-title">
      <div className="akop-container akop-faq__grid">
        <div className="akop-faq__intro">
          <SectionHeading id="faq-title" {...headings.faq} />
          <Reveal className="akop-faq__help" variant="fade">
            <p>Can&rsquo;t find your answer? Our team will help you plan.</p>
            <CtaLink cta={ctas.contact} />
          </Reveal>
        </div>
        <Reveal className="akop-faq__list" variant="fade">
          <Accordion items={items} idPrefix="faq" />
        </Reveal>
      </div>
    </section>
  );
}
