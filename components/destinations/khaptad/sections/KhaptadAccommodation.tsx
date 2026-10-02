import { khaptadAccommodation } from "@/data/destinations/khaptad/khaptad-facts";
import KhaptadSectionHeading from "../shared/KhaptadSectionHeading";
import { useKhaptadReveal } from "../shared/useKhaptadReveal";

function AccommodationCard({ option }: { option: (typeof khaptadAccommodation)[number] }) {
  const revealRef = useKhaptadReveal<HTMLDivElement>();
  return (
    <div ref={revealRef} className="khaptad-reveal khaptad-accommodation-card">
      <h3>{option.title}</h3>
      <p>{option.description}</p>
    </div>
  );
}

export default function KhaptadAccommodation() {
  return (
    <section className="khaptad-accommodation" aria-labelledby="khaptad-accommodation-heading">
      <div className="khaptad-page__container">
        <KhaptadSectionHeading
          eyebrow="Where to Stay"
          title="Accommodation & Stay Options"
          description="Accommodation and amenities may be limited within the park and in remote areas — plan and confirm in advance."
        />
        <div className="khaptad-accommodation__grid">
          {khaptadAccommodation.map((option) => (
            <AccommodationCard key={option.id} option={option} />
          ))}
        </div>
      </div>
    </section>
  );
}
