import Reveal from "@/components/shared/Reveal";
import type { HelicopterProductTour } from "../product-types";
import { CONTACT } from "../site";
import { CONTAINER, SectionHeading } from "../ui";
import Accordion from "../sections/Accordion";
import { ANCHOR, SECTION_Y } from "./constants";

export default function ProductFaq({ tour }: { tour: HelicopterProductTour }) {
  const items = tour.faqs.map((f) => ({ title: f.question, body: f.answer }));
  const half = Math.ceil(items.length / 2);

  return (
    <section id="faqs" aria-labelledby="faqs-title" className={`${ANCHOR} ${SECTION_Y} bg-white`}>
      <div className={CONTAINER}>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <SectionHeading
              id="faqs-title"
              eyebrow="FAQs"
              title="Frequently Asked Questions"
              intro={`Everything travellers ask about the ${tour.title}.`}
            />
          </Reveal>
          <a
            href={CONTACT.whatsappHref(`Hello Karvaahh, I have a question about the ${tour.title}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[14.5px] font-semibold text-[#0B2942] underline decoration-[#F4A300] decoration-2 underline-offset-[6px] transition-colors hover:text-[#C98500]"
          >
            Still have a question? Ask us →
          </a>
        </div>

        <div className="mt-12 grid items-start gap-5 lg:grid-cols-2">
          <Reveal>
            <Accordion items={items.slice(0, half)} />
          </Reveal>
          <Reveal delay={120}>
            <Accordion items={items.slice(half)} openFirst={false} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
