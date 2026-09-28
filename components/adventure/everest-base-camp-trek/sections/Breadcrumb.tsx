import Link from "next/link";
import { ebcSite } from "../config/site";
import Icon from "../ui/Icon";
import "../styles/navigation.css";

/** Visible breadcrumb. The matching BreadcrumbList JSON-LD is emitted by lib/seo.ts. */
export const breadcrumbTrail = [
  { name: "Home", href: ebcSite.links.home },
  { name: "Adventure", href: ebcSite.links.adventure },
  { name: "Everest Base Camp Trek", href: ebcSite.route },
];

export default function Breadcrumb() {
  return (
    <nav className="ebc-breadcrumb" aria-label="Breadcrumb">
      <div className="ebc-container">
        <ol className="ebc-breadcrumb__list">
          {breadcrumbTrail.map((c, i) => {
            const last = i === breadcrumbTrail.length - 1;
            return (
              <li key={c.href} className="ebc-breadcrumb__item">
                {last ? (
                  <span aria-current="page">{c.name}</span>
                ) : (
                  <>
                    <Link href={c.href}>{c.name}</Link>
                    <Icon name="chevron-right" className="ebc-breadcrumb__sep" />
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
