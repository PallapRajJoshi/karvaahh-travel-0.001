import Link from "next/link";
import { BREADCRUMBS } from "@/data/adventure/everest-three-passes-trek/config";
import "./Breadcrumb.css";

export default function Breadcrumb() {
  const last = BREADCRUMBS.length - 1;
  return (
    <nav className="etp-crumbs" aria-label="Breadcrumb">
      <ol className="etp-wrap etp-crumbs__list">
        {BREADCRUMBS.map((c, i) => (
          <li key={c.href} className="etp-crumbs__item">
            {i < last ? (
              <Link href={c.href}>{c.label}</Link>
            ) : (
              <span aria-current="page">{c.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
