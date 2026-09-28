import SectionHeading from "./SectionHeading";
import "./FAQSection.css";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  heading?: string;
  lead?: string;
  items: FAQItem[];
  id?: string;
  /** Emit FAQPage structured data. One FAQPage per URL. */
  structuredData?: boolean;
}

export default function FAQSection({
  heading = "Frequently asked questions",
  lead,
  items,
  id = "faq",
  structuredData = true,
}: FAQSectionProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <section className="act-faq" aria-labelledby={id} id={id}>
      <SectionHeading title={heading} lead={lead} id={id} />
      <div className="act-faq__list">
        {items.map((item) => (
          <details className="act-faq__item" key={item.question}>
            <summary className="act-faq__question">
              <span>{item.question}</span>
              <span className="act-faq__marker" aria-hidden="true" />
            </summary>
            <p className="act-faq__answer">{item.answer}</p>
          </details>
        ))}
      </div>
      {structuredData ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      ) : null}
    </section>
  );
}
