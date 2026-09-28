import Link from "next/link";
import { anchors, headings, links } from "../data/config";
import { faqs } from "../data/faqs";
import Accordion, { type AccordionItem } from "../shared/Accordion";
import SectionHeading from "../shared/SectionHeading";
import "./faq.css";

/** Visible FAQ. The FAQPage JSON-LD in seo.ts is generated from the same `faqs` array. */
export default function Faq() {
  const h = headings.faq;
  const items: AccordionItem[] = faqs.map((f) => ({
    id: f.id,
    title: f.question,
    content: f.answer.map((para, i) => <p key={i}>{para}</p>),
  }));

  return (
    <section id={anchors.faq.id} className="mc-section mc-section--white mc-faq" aria-labelledby="mc-faq-title">
      <div className="mc-container mc-faq__inner">
        <SectionHeading id="mc-faq-title" eyebrow={h.eyebrow} title={h.title} subtitle={h.subtitle} align="center" />
        <div data-reveal>
          <Accordion items={items} />
        </div>
        <p className="mc-faq__more" data-reveal>
          Still have a question? <Link href={links.contact}>Talk to our team</Link>
        </p>
      </div>
    </section>
  );
}
