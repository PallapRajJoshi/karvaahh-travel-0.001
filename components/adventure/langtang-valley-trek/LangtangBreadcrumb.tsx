import { links, hero } from "@/data/adventure/langtang-valley-trek";

export default function LangtangBreadcrumb() {
  return (
    <nav className="lt-crumbs" aria-label="Breadcrumb">
      <ol className="lt-container lt-crumbs__list">
        <li><a href={links.home}>Home</a></li>
        <li><a href={links.adventure}>Adventure</a></li>
        <li aria-current="page">{hero.title}</li>
      </ol>
    </nav>
  );
}
