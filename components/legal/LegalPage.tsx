import type { LegalDocument } from "@/lib/legal/types";
import { LegalFooter } from "./LegalFooter";
import { LegalHero } from "./LegalHero";
import { LegalInfoCard } from "./LegalInfoCard";
import { LegalJsonLd } from "./LegalJsonLd";
import { LegalLayout } from "./LegalLayout";
import { LegalMotion } from "./LegalMotion";
import { LegalSection } from "./LegalSection";
import { ScrollProgress } from "./ScrollProgress";
import "./legal.css";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

interface LegalPageProps {
  doc: LegalDocument;
  /**
   * Wrapper element. Defaults to a plain <div> because the root layout usually
   * already provides <main>. Pass "main" if your layout does not.
   */
  as?: "div" | "main";
}

const CONTENT_ID = "legal-content";

/**
 * The single template behind all four legal routes. Pages only pick a
 * document from `lib/legal`; everything visual lives here and in the
 * components it composes.
 */
export function LegalPage({ doc, as: Wrapper = "div" }: LegalPageProps) {
  return (
    <Wrapper className="legal-page">
      <Navbar />
      <LegalJsonLd doc={doc} />
      <ScrollProgress />
      <LegalMotion />

      <LegalHero
        breadcrumbLabel={doc.shortTitle}
        title={doc.title}
        headline={doc.headline}
        subtitle={doc.subtitle}
        contentId={CONTENT_ID}
      />

      <LegalLayout sections={doc.sections} contentId={CONTENT_ID}>
        {doc.highlights && doc.highlights.length > 0 ? (
          <div className="legal-highlights">
            {doc.highlights.map((card) => (
              <LegalInfoCard key={card.title} {...card} />
            ))}
          </div>
        ) : null}

        <article className="legal-article" aria-label={doc.title}>
          {doc.sections.map((section) => (
            <LegalSection key={section.id} section={section} />
          ))}
        </article>
      </LegalLayout>

      <LegalFooter currentSlug={doc.slug} />
      <Footer />
    </Wrapper>
  );
}
