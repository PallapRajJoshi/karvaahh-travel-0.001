import Link from "next/link";
import { breadcrumbs } from "../data/bungeeJumpingData";

export default function Breadcrumbs() {
  return (
    <nav className="bj-crumbs" aria-label="Breadcrumb">
      <ol>
        {breadcrumbs.map((c, i) => {
          const last = i === breadcrumbs.length - 1;
          return (
            <li key={c.href}>
              {last ? <span aria-current="page">{c.name}</span> : <Link href={c.href}>{c.name}</Link>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
