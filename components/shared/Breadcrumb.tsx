import Link from "next/link";
import Icon from "./Icon";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
  className?: string;
};

/**
 * Reusable breadcrumb trail. Also emits BreadcrumbList JSON-LD is handled
 * separately at the route level (app/offbeat-unexplored/panch-pokhari/page.tsx)
 * so the structured data always matches what a crawler can see rendered here.
 */
export default function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  return (
    <nav
      className={`pp-breadcrumb ${className}`.trim()}
      aria-label="Breadcrumb"
    >
      <ol className="pp-breadcrumb__list">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.label} className="pp-breadcrumb__item">
              {item.href && !isLast ? (
                <Link href={item.href} className="pp-breadcrumb__link">
                  {item.label}
                </Link>
              ) : (
                <span
                  className="pp-breadcrumb__current"
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              )}
              {!isLast && (
                <Icon name="arrow-right" className="pp-breadcrumb__separator" />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
