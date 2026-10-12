import Link from "next/link";
import { emailHref, contactPageHref, whatsappHref } from "@/lib/legal/contact";
import { legalDocumentOrder, legalDocuments } from "@/lib/legal";
import type { LegalDocumentSlug } from "@/lib/legal/types";
import { siteConfig } from "@/lib/site-config";
import { LegalIcon } from "./LegalIcon";
import { LegalLastUpdated } from "./LegalLastUpdated";

interface LegalFooterProps {
  currentSlug: LegalDocumentSlug;
}

/**
 * Closing block of every legal page: "Still have questions?" call to action,
 * the last-updated line and links to the other policies. The site's existing
 * global footer renders after this (it lives in the root layout).
 */
export function LegalFooter({ currentSlug }: LegalFooterProps) {
  const others = legalDocumentOrder.filter((slug) => slug !== currentSlug);

  return (
    <footer className="legal-footer">
      <section className="legal-cta" aria-labelledby="legal-cta-heading">
        <div className="legal-cta__inner">
          <p className="legal-cta__eyebrow">
            <LegalIcon name="compass" size={16} />
            <span>We’re here to help</span>
          </p>
          <h2 id="legal-cta-heading" className="legal-cta__title">
            Still have questions?
          </h2>
          <p className="legal-cta__text">Our travel team is here to help.</p>
          <div className="legal-cta__actions">
            <Link href={contactPageHref} className="legal-btn legal-btn--gold">
              <span>Contact {siteConfig.brandName}</span>
              <LegalIcon name="arrow" size={18} />
            </Link>
            {whatsappHref ? (
              <a
                href={whatsappHref}
                className="legal-btn legal-btn--ghost"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LegalIcon name="whatsapp" size={18} />
                <span>WhatsApp Us</span>
                <span className="legal-visually-hidden"> (opens in a new tab)</span>
              </a>
            ) : null}
            {emailHref ? (
              <a href={emailHref} className="legal-btn legal-btn--ghost">
                <LegalIcon name="mail" size={18} />
                <span>Email Us</span>
              </a>
            ) : null}
          </div>
        </div>
      </section>

      <div className="legal-footer__meta">
        <LegalLastUpdated variant="line" />
        <nav className="legal-footer__related" aria-label="Other policies">
          <span className="legal-footer__related-label">Also read:</span>
          <ul>
            {others.map((slug) => (
              <li key={slug}>
                <Link href={legalDocuments[slug].path} className="legal-link">
                  {legalDocuments[slug].shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
