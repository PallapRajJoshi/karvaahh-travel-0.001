import { khaptadSeasons } from "@/data/destinations/khaptad/khaptad-facts";
import KhaptadSectionHeading from "../shared/KhaptadSectionHeading";
import { useKhaptadReveal } from "../shared/useKhaptadReveal";

function SeasonCard({ season }: { season: (typeof khaptadSeasons)[number] }) {
  const revealRef = useKhaptadReveal<HTMLDivElement>();
  return (
    <div ref={revealRef} className="khaptad-reveal khaptad-season-card">
      <div className="khaptad-season-card__header">
        <h3>{season.season}</h3>
        <span>{season.months}</span>
      </div>
      <ul>
        {season.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </div>
  );
}

export default function KhaptadSeasons() {
  return (
    <section className="khaptad-seasons" aria-labelledby="khaptad-seasons-heading">
      <div className="khaptad-page__container">
        <KhaptadSectionHeading
          eyebrow="Plan Your Visit"
          title="Best Time to Visit Khaptad"
          description="Actual weather, road conditions, and trail accessibility vary each year — plan with flexibility."
          align="center"
        />
        <div className="khaptad-seasons__grid">
          {khaptadSeasons.map((season) => (
            <SeasonCard key={season.id} season={season} />
          ))}
        </div>
      </div>
    </section>
  );
}
