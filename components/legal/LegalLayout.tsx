import type { ReactNode } from "react";
import type { LegalSection } from "@/lib/legal/types";
import { LegalMobileToc } from "./LegalMobileToc";
import { LegalSidebar } from "./LegalSidebar";

interface LegalLayoutProps {
  sections: Pick<LegalSection, "id" | "number" | "title">[];
  /** DOM id of the content column (target of the hero's scroll indicator). */
  contentId: string;
  tocHeading?: string;
  children: ReactNode;
}

/**
 * Two-column layout on desktop (sticky TOC | reading column), single column on
 * mobile with a sticky collapsible "On this page" control.
 */
export function LegalLayout({ sections, contentId, tocHeading, children }: LegalLayoutProps) {
  return (
    <div className="legal-shell">
      <LegalMobileToc sections={sections} />
      <div className="legal-shell__grid">
        <aside className="legal-shell__aside">
          <LegalSidebar sections={sections} heading={tocHeading} />
        </aside>
        <div id={contentId} className="legal-shell__content">
          {children}
        </div>
      </div>
    </div>
  );
}
