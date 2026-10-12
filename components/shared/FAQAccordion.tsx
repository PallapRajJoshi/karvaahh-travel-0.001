import Icon from "./Icon";
import "./shared-cards.css";

type FAQAccordionProps = { items: { question: string; answer: string }[]; idPrefix?: string };

/** Accessible FAQ list built on native <details>/<summary> — keyboard and screen-reader friendly without JS. */
export default function FAQAccordion({ items, idPrefix = "faq" }: FAQAccordionProps) {
  return (
    <div className="faq-accordion">
      {items.map((item, i) => (
        <details key={item.question} className="faq-accordion__item" id={`${idPrefix}-${i + 1}`}>
          <summary className="faq-accordion__question">
            <span>{item.question}</span>
            <Icon name="chevron-down" className="faq-accordion__chevron" />
          </summary>
          <p className="faq-accordion__answer">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
