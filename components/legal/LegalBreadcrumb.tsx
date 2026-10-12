import Link from "next/link";
import { LegalIcon } from "./LegalIcon";

interface LegalBreadcrumbProps {
  /** Label of the current page, e.g. "Privacy Policy". */
  current: string;
}

/**
 * Home → Legal → {current page}.
 * There is no /legal landing page, so "Legal" is a plain label rather than a dead link.
 * (Swap it for a <Link> if you add a /legal hub.)
 */
export function LegalBreadcrumb({ current }: LegalBreadcrumbProps) {
  return (
    <nav className="legal-breadcrumb" aria-label="Breadcrumb">
      <ol className="legal-breadcrumb__list">
        <li className="legal-breadcrumb__item">
          <Link href="/" className="legal-breadcrumb__link">
            Home
          </Link>
          <LegalIcon name="chevron" size={14} className="legal-breadcrumb__sep" />
        </li>
        <li className="legal-breadcrumb__item">
          <span className="legal-breadcrumb__static">Legal</span>
          <LegalIcon name="chevron" size={14} className="legal-breadcrumb__sep" />
        </li>
        <li className="legal-breadcrumb__item">
          <span className="legal-breadcrumb__current" aria-current="page">
            {current}
          </span>
        </li>
      </ol>
    </nav>
  );
}
