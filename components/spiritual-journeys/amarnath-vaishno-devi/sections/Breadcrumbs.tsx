import Link from "next/link";

export interface Crumb {
  name: string;
  href: string;
}

/** Visible breadcrumb. BreadcrumbList JSON-LD is emitted from the route (same data). */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="avd-crumbs">
      <ol className="avd-crumbs__list">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.href} className="avd-crumbs__item">
              {isLast ? (
                <span aria-current="page">{item.name}</span>
              ) : (
                <Link href={item.href}>{item.name}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
