import KoshiSectionHeading from "../heading/KoshiSectionHeading";
import { koshiFaqs } from "@/data/koshi/faqs";
import "./koshi-guide.css";

/** Native <details> accordion — no client JavaScript needed. */
export default function KoshiFaq() {
  return (
    <section
      id="faq"
      className="koshi-guide"
      aria-labelledby="koshi-faq-title"
    >
      <div className="koshi-shell koshi-guide__faq-shell">
        <KoshiSectionHeading
          eyebrow="QUESTIONS"
          titleId="koshi-faq-title"
          title={
            <>
              Frequently asked <em>questions.</em>
            </>
          }
        />

        <div className="koshi-guide__faq">
          {koshiFaqs.map((faq, index) => (
            <details key={faq.question} className="koshi-guide__faq-item" open={index === 0}>
              <summary>
                <h3>{faq.question}</h3>
                <span aria-hidden="true">+</span>
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
