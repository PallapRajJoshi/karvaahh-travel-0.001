import Link from "next/link";
import { breadcrumb } from "../data/config";
import "./breadcrumb.css";

/** Visible breadcrumb. The matching BreadcrumbList JSON-LD is built from the same data in seo.ts. */
export default function Breadcrumb() {
  const last = breadcrumb.length - 1;
  return (
    <nav className="mc-crumbs" aria-label="Breadcrumb">
      <ol className="mc-container mc-crumbs__list">
        {breadcrumb.map((item, i) => (
          <li key={item.href} className="mc-crumbs__item">
            {i < last ? (
              <Link href={item.href}>{item.label}</Link>
            ) : (
              <span aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
