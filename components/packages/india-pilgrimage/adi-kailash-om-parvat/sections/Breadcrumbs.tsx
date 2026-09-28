import Link from "next/link";
import { breadcrumb } from "@/data/india-pilgrimage/adi-kailash-om-parvat/page";
import "./breadcrumbs.css";

/** Section 2 — Breadcrumb (BreadcrumbList JSON-LD is emitted from the same data). */
export function Breadcrumbs() {
  const last = breadcrumb.length - 1;
  return (
    <nav className="akop-breadcrumbs" aria-label="Breadcrumb">
      <ol className="akop-container akop-breadcrumbs__list">
        {breadcrumb.map((crumb, i) => (
          <li key={crumb.href} className="akop-breadcrumbs__item">
            {i === last ? (
              <span aria-current="page">{crumb.name}</span>
            ) : (
              <Link href={crumb.href}>{crumb.name}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
