import Link from "next/link";
import { faqs } from "../data/faqs";
import { ebcSite } from "../config/site";
import SectionHeading from "../ui/SectionHeading";
import Accordion from "../ui/Accordion";
import "../styles/faq.css";

export default function FAQSection() {
  return (
    <section id="faq" className="ebc-section ebc-section--alt ebc-faq" aria-labelledby="ebc-faq-title">
      <div className="ebc-container ebc-faq__inner">
        <SectionHeading
          id="ebc-faq-title"
          eyebrow="Good to Know"
          title="Frequently Asked Questions"
          subtitle="Quick answers to the questions trekkers ask us most."
          align="center"
        />
        <Accordion items={faqs} multiple />
        <p className="ebc-faq__more" data-reveal="">
          Still have a question? <Link href={ebcSite.links.contact}>Talk to our trek specialists</Link>.
        </p>
        <nav className="ebc-faq__related" aria-label="Related Karvaahh pages" data-reveal="">
          <span>Explore more:</span>
          <ul>
            {ebcSite.related.map((r) => (
              <li key={r.href}>
                <Link href={r.href}>{r.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
