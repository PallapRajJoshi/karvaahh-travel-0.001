import { khaptadTrekCategories, khaptadTrekDisclaimer } from "@/data/destinations/khaptad/khaptad-experiences";
import KhaptadSectionHeading from "../shared/KhaptadSectionHeading";
import { useKhaptadReveal } from "../shared/useKhaptadReveal";

function TrekCategoryCard({ category }: { category: (typeof khaptadTrekCategories)[number] }) {
  const revealRef = useKhaptadReveal<HTMLDivElement>();
  return (
    <div ref={revealRef} className="khaptad-reveal khaptad-trek-card">
      <h3 className="khaptad-trek-card__title">{category.title}</h3>
      <p className="khaptad-trek-card__description">{category.description}</p>
      <ul className="khaptad-trek-card__list">
        {category.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function KhaptadTrekking() {
  return (
    <section className="khaptad-trekking" aria-labelledby="khaptad-trekking-heading">
      <div className="khaptad-page__container">
        <KhaptadSectionHeading
          eyebrow="Trails & Trekking"
          title="Trekking & Hiking in Khaptad"
          description="From short meadow walks to extended regional treks, organized by pace and commitment."
        />
        <div className="khaptad-trekking__grid">
          {khaptadTrekCategories.map((category) => (
            <TrekCategoryCard key={category.id} category={category} />
          ))}
        </div>
        <p className="khaptad-trekking__disclaimer">{khaptadTrekDisclaimer}</p>
      </div>
    </section>
  );
}
