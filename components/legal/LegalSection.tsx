import type { LegalSection as LegalSectionData } from "@/lib/legal/types";
import { LegalBlockView } from "./LegalBlocks";
import { LegalSectionHeading } from "./LegalSectionHeading";
import { RichText } from "./RichText";

/**
 * One numbered legal section. `id` matches the table-of-contents entry, so the
 * TOC is generated from the same data and can never drift out of sync.
 */
export function LegalSection({ section }: { section: LegalSectionData }) {
  return (
    <section
      id={section.id}
      className="legal-section"
      aria-labelledby={`${section.id}-heading`}
    >
      <LegalSectionHeading id={section.id} number={section.number} title={section.title} />
      <div className="legal-section__body">
        {section.content.map((text) => (
          <p key={text}>
            <RichText text={text} />
          </p>
        ))}
        {section.blocks?.map((block, index) => (
          <LegalBlockView key={`${section.id}-${index}`} block={block} />
        ))}
      </div>
    </section>
  );
}
