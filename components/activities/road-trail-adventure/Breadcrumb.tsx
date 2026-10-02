import Link from "next/link";
import { BREADCRUMBS } from "./data/site";

/** Breadcrumb trail (matches the BreadcrumbList JSON-LD in the route). */
export default function Breadcrumb({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <nav aria-label="Breadcrumb" className={`rt-crumbs rt-crumbs--${tone}`}>
      <ol className="rt-crumbs__list">
        {BREADCRUMBS.map((crumb, i) => {
          const last = i === BREADCRUMBS.length - 1;
          return (
            <li key={crumb.href} className="rt-crumbs__item">
              {last ? (
                <span aria-current="page">{crumb.name}</span>
              ) : (
                <Link href={crumb.href}>{crumb.name}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
