import { faqHeading, faqs } from "../../data/faqs";
import Accordion, { type AccordionItem } from "../../shared/Accordion";
import CtaButton from "../../shared/CtaButton";
import { ctas } from "../../config";
import SectionHeading from "../../shared/SectionHeading";
import "./Faq.css";

export default function Faq() {
  const items: AccordionItem[] = faqs.map((f) => ({
    id: f.id,
    title: f.question,
    content: (
      <>
        <p>{f.answer}</p>
        {f.requiresConfirmation ? (
          <p className="km-faq__confirm">Rules and availability change — we confirm current details when you enquire.</p>
        ) : null}
      </>
    ),
  }));

  return (
    <section id="faq" className="km-section km-section--tint" aria-labelledby="km-faq-title">
      <div className="km-container km-faq">
        <SectionHeading id="km-faq-title" {...faqHeading} />
        <Accordion items={items} defaultOpen={[faqs[0].id]} />
        <div className="km-faq__more">
          <p>Have a question we haven&rsquo;t answered?</p>
          <CtaButton cta={{ ...ctas.contact, label: "Ask Karvaahh", variant: "secondary" }} />
        </div>
      </div>
    </section>
  );
}
