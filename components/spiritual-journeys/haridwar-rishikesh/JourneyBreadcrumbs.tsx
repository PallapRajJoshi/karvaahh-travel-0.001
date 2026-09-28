import Link from "next/link";
import { BREADCRUMB_TRAIL } from "./data/config";
import "./journey-breadcrumbs.css";

export default function JourneyBreadcrumbs() {
  return (
    <nav aria-label="Breadcrumb" className="hry-crumbs">
      <ol className="hry-crumbs__list hry-container">
        {BREADCRUMB_TRAIL.map((item) => (
          <li key={item.name} className="hry-crumbs__item">
            {item.href ? (
              <Link href={item.href} className="hry-crumbs__link">
                {item.name}
              </Link>
            ) : (
              <span aria-current="page" className="hry-crumbs__current">
                {item.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
