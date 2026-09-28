import Link from "next/link";
import "./Breadcrumbs.css";

export default function Breadcrumbs({ items }: { items: { name: string; href: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="hab-crumbs">
      <ol className="hab-crumbs__list">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.href} className="hab-crumbs__item">
              {last ? (
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
