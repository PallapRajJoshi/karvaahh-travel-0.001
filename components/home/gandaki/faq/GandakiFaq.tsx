import Link from "next/link";
import GandakiSectionHeading from "../heading/GandakiSectionHeading";
import { gandakiFaqs } from "@/data/gandaki/faqs";
import "./gandaki-faq.css";

/** Native <details>/<summary> accordion: keyboard and screen-reader friendly with no client JS. */
export default function GandakiFaq() {
  return (
    <section className="gandaki-faq" id="faq" aria-labelledby="gandaki-faq-title">
      <div className="gandaki-faq__inner">
        <GandakiSectionHeading
          index="13"
          eyebrow="QUESTIONS"
          heading="Frequently asked"
          emphasis="questions."
          titleId="gandaki-faq-title"
          description="Straight answers for trekkers, pilgrims, families and first-time visitors planning Gandaki."
        />

        <div className="gandaki-faq__list">
          {gandakiFaqs.map((faq, index) => (
            <details key={faq.question} className="gandaki-faq__item" open={index === 0}>
              <summary className="gandaki-faq__question">
                <span>{faq.question}</span>
                <span className="gandaki-faq__icon" aria-hidden="true">
                  +
                </span>
              </summary>
              <p className="gandaki-faq__answer">{faq.answer}</p>
            </details>
          ))}
        </div>

        <p className="gandaki-faq__more">
          Heading further west? Explore{" "}
          <Link href="/destinations/karnali-province">Karnali Province</Link> and{" "}
          <Link href="/offbeat-unexplored/rara-lake">Rara Lake</Link>, or{" "}
          <Link href="/contact">ask us anything</Link>.
        </p>
      </div>
    </section>
  );
}
