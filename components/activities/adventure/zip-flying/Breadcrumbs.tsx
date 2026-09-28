import Link from "next/link";

interface Crumb {
  name: string;
  href: string;
}

export default function Breadcrumbs({ items, className = "" }: { items: Crumb[]; className?: string }) {
  return (
    <nav aria-label="Breadcrumb" className={`zf-crumbs ${className}`}>
      <ol>
        {items.map((c, i) => {
          const last = i === items.length - 1;
          return (
            <li key={c.href}>
              {last ? (
                <span aria-current="page">{c.name}</span>
              ) : (
                <Link href={c.href}>{c.name}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
