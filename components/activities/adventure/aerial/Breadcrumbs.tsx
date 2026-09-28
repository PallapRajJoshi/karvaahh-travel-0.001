import Link from "next/link";
import type { Crumb } from "./types";
import "./breadcrumbs.css";

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav className="ae-crumbs" aria-label="Breadcrumb">
      <ol className="ae-crumbs__list">
        {items.map((c, i) => {
          const last = i === items.length - 1;
          return (
            <li key={c.href} className="ae-crumbs__item">
              {last ? (
                <span aria-current="page" className="ae-crumbs__current">
                  {c.label}
                </span>
              ) : (
                <Link href={c.href} className="ae-crumbs__link">
                  {c.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
