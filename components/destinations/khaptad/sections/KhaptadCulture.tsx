import { khaptadCulture } from "@/data/destinations/khaptad/khaptad-facts";
import KhaptadSectionHeading from "../shared/KhaptadSectionHeading";
import { useKhaptadReveal } from "../shared/useKhaptadReveal";

function CultureItemCard({ item }: { item: (typeof khaptadCulture)[number] }) {
  const revealRef = useKhaptadReveal<HTMLDivElement>();
  return (
    <div ref={revealRef} className="khaptad-reveal khaptad-culture-card">
      <h3 className="khaptad-culture-card__title">{item.title}</h3>
      <p className="khaptad-culture-card__description">{item.description}</p>
    </div>
  );
}

export default function KhaptadCulture() {
  return (
    <section className="khaptad-culture" aria-labelledby="khaptad-culture-heading">
      <div className="khaptad-page__container">
        <KhaptadSectionHeading
          eyebrow="Spiritual Heritage & Local Culture"
          title="Spiritual Heritage & Local Culture"
          description="Khaptad's identity is inseparable from its spiritual legacy and the far-western communities around it."
        />
        <div className="khaptad-culture__grid">
          {khaptadCulture.map((item) => (
            <CultureItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
