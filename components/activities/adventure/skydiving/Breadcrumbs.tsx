import Link from "next/link";
import { breadcrumbs } from "./data/skydivingData";

export default function Breadcrumbs() {
  return (
    <nav className="sky-crumbs" aria-label="Breadcrumb">
      <ol className="sky-crumbs__list">
        {breadcrumbs.map((b, i) => {
          const last = i === breadcrumbs.length - 1;
          return (
            <li key={b.href} className="sky-crumbs__item">
              {last ? (
                <span aria-current="page">{b.name}</span>
              ) : (
                <Link href={b.href} className="sky-crumbs__link">
                  {b.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
