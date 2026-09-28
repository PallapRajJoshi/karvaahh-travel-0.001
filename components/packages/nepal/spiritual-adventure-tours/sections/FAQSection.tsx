import { headings, links } from "../config/page.config";
import { faqs } from "../data/faqs";
import { SectionHeading } from "../ui/SectionHeading";
import { Accordion } from "../client/Accordion";
import { CtaLink } from "../ui/CtaLink";
import "./info.css";

export function FAQSection({ anchor }: { anchor: string }) {
  const h = headings.faq;
  return (
    <section id={anchor} className="nsa-section nsa-section--muted nsa-faq" aria-labelledby="nsa-faq-title">
      <div className="nsa-container nsa-faq__inner">
        <SectionHeading id="nsa-faq-title" eyebrow={h.eyebrow} title={h.title} subtitle={h.subtitle} />
        <div data-reveal="">
          <Accordion items={faqs} idPrefix="nsa-faq" allowMultiple={false} />
        </div>
        <div className="nsa-section__footer" data-reveal="">
          <CtaLink href={links.contact} variant="text" arrow>
            Still have a question? Talk to our team
          </CtaLink>
        </div>
      </div>
    </section>
  );
}
