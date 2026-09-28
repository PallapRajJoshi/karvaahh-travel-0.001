import Link from "next/link";
import { breadcrumbs } from "../config/page.config";

/**
 * Visible breadcrumb trail. The matching BreadcrumbList JSON-LD is generated
 * from the same config in lib/seo.ts, so the two can't drift apart.
 */
export function Breadcrumbs() {
  return (
    <nav className="nsa-breadcrumbs" aria-label="Breadcrumb">
      <ol className="nsa-container nsa-breadcrumbs__list">
        {breadcrumbs.map((crumb, i) => {
          const isLast = i === breadcrumbs.length - 1;
          return (
            <li key={crumb.label} className="nsa-breadcrumbs__item">
              {crumb.href && !isLast ? (
                <Link href={crumb.href} className="nsa-breadcrumbs__link">
                  {crumb.label}
                </Link>
              ) : (
                <span aria-current={isLast ? "page" : undefined} className="nsa-breadcrumbs__current">
                  {crumb.label}
                </span>
              )}
              {!isLast ? (
                <svg className="nsa-breadcrumbs__sep" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path d="m9 6 6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
