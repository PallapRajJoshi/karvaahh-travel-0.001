import { khaptadFaqs } from "@/data/destinations/khaptad/khaptad-faq";
import KhaptadSectionHeading from "../shared/KhaptadSectionHeading";
import KhaptadFaqAccordion from "../shared/KhaptadFaqAccordion";

export default function KhaptadFaq() {
  return (
    <section className="khaptad-faq-section" aria-labelledby="khaptad-faq-heading">
      <div className="khaptad-page__container">
        <KhaptadSectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          description="Answers to common questions — details needing current verification are noted where relevant."
          align="center"
        />
        <KhaptadFaqAccordion items={khaptadFaqs} />
      </div>
    </section>
  );
}
