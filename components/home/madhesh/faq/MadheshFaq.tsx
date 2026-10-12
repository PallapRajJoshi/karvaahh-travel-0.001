import MadheshSectionHeading from "../heading/MadheshSectionHeading";
import { madheshFaqs } from "@/data/madhesh/faqs";
import "./madhesh-faq.css";

/**
 * Native <details> accordion — accessible and keyboard-friendly without
 * shipping client JavaScript.
 */
export default function MadheshFaq() {
  return (
    <section className="madhesh-faq" id="faq" aria-labelledby="madhesh-faq-title">
      <div className="madhesh-container madhesh-faq__inner">
        <MadheshSectionHeading
          eyebrow="Questions"
          titleId="madhesh-faq-title"
          heading={
            <>
              Frequently asked{" "}
              <span className="madhesh-gold-italic">questions.</span>
            </>
          }
          description="Clear answers for pilgrims, culture lovers, families and wildlife enthusiasts planning a Madhesh journey."
        />

        <div className="madhesh-faq__list">
          {madheshFaqs.map((faq, index) => (
            <details key={faq.question} className="madhesh-faq__item" open={index === 0}>
              <summary className="madhesh-faq__question">
                <span>{faq.question}</span>
                <span className="madhesh-faq__icon" aria-hidden="true">
                  +
                </span>
              </summary>
              <p className="madhesh-faq__answer">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
