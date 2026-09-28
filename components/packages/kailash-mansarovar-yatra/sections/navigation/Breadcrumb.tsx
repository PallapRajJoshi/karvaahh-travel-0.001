import Link from "next/link";
import { breadcrumbs } from "../../config";
import "./Navigation.css";

/** Visible breadcrumb. The matching BreadcrumbList JSON-LD is emitted by the page. */
export default function Breadcrumb() {
  const last = breadcrumbs.length - 1;
  return (
    <nav aria-label="Breadcrumb" className="km-breadcrumb">
      <ol className="km-container km-breadcrumb__list">
        {breadcrumbs.map((c, i) => (
          <li key={c.href} className="km-breadcrumb__item">
            {i < last ? (
              <>
                <Link href={c.href}>{c.name}</Link>
                <span className="km-breadcrumb__sep" aria-hidden="true">
                  →
                </span>
              </>
            ) : (
              <span aria-current="page">{c.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
