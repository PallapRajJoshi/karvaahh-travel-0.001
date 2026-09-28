import Link from "next/link";
import "./ActivityBreadcrumbs.css";

export interface Crumb {
  name: string;
  href: string;
}

interface ActivityBreadcrumbsProps {
  crumbs: Crumb[];
  /** Absolute site origin, used to build the BreadcrumbList item ids. */
  origin?: string;
}

export default function ActivityBreadcrumbs({
  crumbs,
  origin = "https://karvaahh.in",
}: ActivityBreadcrumbsProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: `${origin}${crumb.href}`,
    })),
  };

  return (
    <>
      <nav className="act-crumbs" aria-label="Breadcrumb">
        <ol className="act-crumbs__list">
          {crumbs.map((crumb, index) => {
            const isLast = index === crumbs.length - 1;
            return (
              <li className="act-crumbs__item" key={crumb.href}>
                {isLast ? (
                  <span aria-current="page">{crumb.name}</span>
                ) : (
                  <Link className="act-crumbs__link" href={crumb.href}>
                    {crumb.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
