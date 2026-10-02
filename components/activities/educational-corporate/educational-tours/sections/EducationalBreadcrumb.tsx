import Link from "next/link";
import { BREADCRUMB } from "../data/content";
import "./Breadcrumb.css";

/** Replace with the site's existing breadcrumb component if one is available. */
export function EducationalBreadcrumb() {
  return (
    <nav className="et-crumbs" aria-label="Breadcrumb">
      <ol className="et-container et-crumbs__list">
        {BREADCRUMB.map((item, i) => (
          <li key={item.label} className="et-crumbs__item">
            {item.href ? (
              <Link href={item.href}>{item.label}</Link>
            ) : (
              <span aria-current="page">{item.label}</span>
            )}
            {i < BREADCRUMB.length - 1 ? <span className="et-crumbs__sep" aria-hidden="true">→</span> : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
