import Link from "next/link";
import { BREADCRUMBS } from "@/data/destinations/tsum-valley/content";
import { ChevronRight } from "./shared/Icons";
import "./TsumValleyBreadcrumb.css";

export default function TsumValleyBreadcrumb() {
  return (
    <nav className="tsum-crumbs" aria-label="Breadcrumb">
      <ol className="tsum-container tsum-crumbs__list">
        {BREADCRUMBS.map((crumb, i) => {
          const isLast = i === BREADCRUMBS.length - 1;
          return (
            <li key={crumb.href} className="tsum-crumbs__item">
              {isLast ? (
                <span aria-current="page">{crumb.label}</span>
              ) : (
                <>
                  <Link href={crumb.href}>{crumb.label}</Link>
                  <ChevronRight className="tsum-crumbs__sep" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
