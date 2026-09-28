import Link from "next/link";
import { ROUTES } from "./data/routes";
import { ChevronRight } from "./shared/icons";

const CRUMBS = [
  { label: "Home", href: ROUTES.home },
  { label: "Adventure", href: ROUTES.adventureIndex },
];

export default function ApiNampaBreadcrumb() {
  return (
    <nav className="an-crumbs" aria-label="Breadcrumb">
      <ol className="an-crumbs__list an-container">
        {CRUMBS.map((c) => (
          <li className="an-crumbs__item" key={c.href}>
            <Link href={c.href}>{c.label}</Link>
            <ChevronRight className="an-crumbs__sep" />
          </li>
        ))}
        <li className="an-crumbs__item">
          <span aria-current="page">Api Nampa Base Camp Trek</span>
        </li>
      </ol>
    </nav>
  );
}
