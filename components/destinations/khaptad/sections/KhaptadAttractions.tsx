import Image from "next/image";
import { khaptadAttractions } from "@/data/destinations/khaptad/khaptad-attractions";
import KhaptadSectionHeading from "../shared/KhaptadSectionHeading";
import { useKhaptadReveal } from "../shared/useKhaptadReveal";

function AttractionCard({ attraction }: { attraction: (typeof khaptadAttractions)[number] }) {
  const revealRef = useKhaptadReveal<HTMLDivElement>();
  return (
    <div ref={revealRef} className="khaptad-reveal khaptad-attraction-card">
      <div className="khaptad-attraction-card__media">
        <Image
          src={attraction.image}
          alt={attraction.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <span
          className={`khaptad-attraction-card__badge ${
            attraction.withinPark ? "khaptad-attraction-card__badge--within" : "khaptad-attraction-card__badge--nearby"
          }`}
        >
          {attraction.withinPark ? "Within the Park" : "Nearby Destination"}
        </span>
      </div>
      <div className="khaptad-attraction-card__body">
        <h3 className="khaptad-attraction-card__title">{attraction.name}</h3>
        <p className="khaptad-attraction-card__location">{attraction.locationNote}</p>
        <p className="khaptad-attraction-card__description">{attraction.description}</p>
        <ul className="khaptad-attraction-card__activities">
          {attraction.activities.map((activity) => (
            <li key={activity}>{activity}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function KhaptadAttractions() {
  return (
    <section className="khaptad-attractions" aria-labelledby="khaptad-attractions-heading">
      <div className="khaptad-page__container">
        <KhaptadSectionHeading
          eyebrow="Top Attractions"
          title="Top Attractions Around Khaptad"
          description="Sacred sites, meadows, and landmarks within the park — clearly distinguished from nearby destinations that require separate travel."
        />
        <div className="khaptad-attractions__grid">
          {khaptadAttractions.map((attraction) => (
            <AttractionCard key={attraction.id} attraction={attraction} />
          ))}
        </div>
      </div>
    </section>
  );
}
