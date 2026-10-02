import { khaptadWhyVisit } from "@/data/destinations/khaptad/khaptad-facts";
import KhaptadSectionHeading from "../shared/KhaptadSectionHeading";
import { useKhaptadReveal } from "../shared/useKhaptadReveal";

function WhyVisitCard({ title, description }: { title: string; description: string }) {
  const revealRef = useKhaptadReveal<HTMLDivElement>();
  return (
    <div ref={revealRef} className="khaptad-reveal khaptad-why-visit__card">
      <h3 className="khaptad-why-visit__title">{title}</h3>
      <p className="khaptad-why-visit__description">{description}</p>
    </div>
  );
}

export default function KhaptadWhyVisit() {
  return (
    <section className="khaptad-why-visit" aria-labelledby="khaptad-why-visit-heading">
      <div className="khaptad-page__container">
        <KhaptadSectionHeading
          eyebrow="Why Khaptad"
          title="Why Visit Khaptad National Park?"
          description="Eight reasons this far-western sanctuary belongs on every offbeat traveler's list."
          align="center"
        />
        <div className="khaptad-why-visit__grid">
          {khaptadWhyVisit.map((card) => (
            <WhyVisitCard key={card.id} title={card.title} description={card.description} />
          ))}
        </div>
      </div>
    </section>
  );
}
