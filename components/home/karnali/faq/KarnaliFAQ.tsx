import FAQAccordion from "@/components/shared/FAQAccordion";
import KarnaliSectionHeading from "../heading/KarnaliSectionHeading";
import { karnaliFaqs } from "@/data/karnali/travel-info";
import "../info/karnali-info.css";

export default function KarnaliFAQ() {
  return (
    <section
      id="karnali-faq"
      className="karnali-root karnali-section karnali-info-soft"
      aria-labelledby="karnali-faq-heading"
    >
      <div className="karnali-section-inner">
        <KarnaliSectionHeading
          id="karnali-faq-heading"
          eyebrow="GOOD TO KNOW"
          heading="Frequently asked"
          goldWord="questions."
          sectionNumber="14 / FAQ"
          align="center"
        />
        <FAQAccordion items={karnaliFaqs} idPrefix="karnali-faq" />
      </div>
    </section>
  );
}
