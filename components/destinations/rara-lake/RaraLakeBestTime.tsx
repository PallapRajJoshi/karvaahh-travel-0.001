import SectionHeading from "@/components/shared/SectionHeading";
import { bestTimeIntro, seasons } from "@/data/destinations/rara-lake/content";
import "./RaraLakeBestTime.css";

export default function RaraLakeBestTime() {
  return (
    <section className="rara-best-time" aria-labelledby="rara-best-time-heading">
      <SectionHeading
        eyebrow="Plan Ahead"
        title="Best Time to Visit Rara Lake"
        description={bestTimeIntro}
      />
      <div className="rara-best-time__grid">
        {seasons.map((season) => (
          <article key={season.id} className="rara-best-time__card">
            <span className="rara-best-time__months">{season.months}</span>
            <h3 className="rara-best-time__season">{season.season}</h3>
            <p className="rara-best-time__description">{season.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
