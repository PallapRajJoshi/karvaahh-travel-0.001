import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { anchors, enquiryHref } from "../config";
import { faqs } from "../data/content";
import { SectionHeading } from "./SectionHeading";

/** Native <details> accordions: accessible and fully functional without JavaScript. */
export function Faq() {
  return (
    <section id={anchors.faq} className="nbc-section" aria-labelledby="nbc-faq-title">
      <div className="nbc-container nbc-container--narrow">
        <SectionHeading
          id="nbc-faq-title"
          eyebrow="Questions"
          title="Frequently Asked Questions"
          subtitle="Can’t find your answer? Our trekking team is happy to help."
        />
        <div className="nbc-faq">
          {faqs.map((f, i) => (
            <details key={f.q} className="nbc-faq__item" data-reveal="" open={i === 0}>
              <summary>
                <h3>{f.q}</h3>
                <ChevronDown aria-hidden="true" size={20} className="nbc-faq__chevron" />
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="nbc-cta" aria-labelledby="nbc-cta-title">
      <Image
        src="/images/gandaki/high-altitude-trekking-trail-annapurna-gandaki-nepal.jpg"
        alt=""
        fill
        sizes="100vw"
        style={{ objectPosition: "50% 40%" }}
      />
      <div className="nbc-cta__shade" aria-hidden="true" />
      <div className="nbc-container nbc-cta__inner" data-reveal="">
        <p className="nbc-heading__eyebrow">Karvaahh Travels — Live to Travel</p>
        <h2 id="nbc-cta-title">Your Base Camp Journey Starts Here</h2>
        <p>
          Tell us which mountain is calling you. We will help you choose the right trek, plan safe acclimatisation and
          arrange the details from Kathmandu to base camp.
        </p>
        <div className="nbc-hero__actions">
          <Link href={enquiryHref("Nepal base camp trek")} className="nbc-btn nbc-btn--light">
            Plan Your Expedition
            <ArrowRight aria-hidden="true" size={18} className="nbc-btn__arrow" />
          </Link>
          <a href={`#${anchors.compare}`} className="nbc-btn nbc-btn--ghost">
            Compare Treks
          </a>
        </div>
      </div>
    </section>
  );
}
