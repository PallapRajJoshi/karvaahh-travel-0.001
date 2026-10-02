import Link from "next/link";
import { BREADCRUMB } from "../data";
import "./Breadcrumb.css";

// Follows the site's existing breadcrumb component and URL conventions.
// If Karvaahh already has a shared <Breadcrumb /> component, prefer that one
// over this local copy — see the README integration notes.
export default function Breadcrumb() {
  return (
    <nav className="phoksundo-breadcrumb" aria-label="Breadcrumb">
      <ol className="phoksundo-breadcrumb__list">
        {BREADCRUMB.map((crumb, index) => {
          const isLast = index === BREADCRUMB.length - 1;
          return (
            <li key={crumb.href} className="phoksundo-breadcrumb__item">
              {isLast ? (
                <span aria-current="page">{crumb.label}</span>
              ) : (
                <Link href={crumb.href}>{crumb.label}</Link>
              )}
              {!isLast ? (
                <span className="phoksundo-breadcrumb__separator" aria-hidden="true">
                  →
                </span>
              ) : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
