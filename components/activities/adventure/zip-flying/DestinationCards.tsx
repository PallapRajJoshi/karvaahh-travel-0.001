import ZiplineDestinationCard from "./ZiplineDestinationCard";
import { otherSites } from "./data/zipFlyingData";

export default function DestinationCards() {
  return (
    <section id="destinations" className="zf-sec zf-dest" aria-labelledby="zf-dest-title">
      <div className="zf-wrap">
        <header className="zf-head">
          <h2 id="zf-dest-title" className="zf-h2">Zipline Experiences Across Nepal</h2>
          <p className="zf-lead">
            Pokhara&apos;s ZipFlyer is the headline experience, but zipline activities are available in several other destinations.
          </p>
        </header>
        <div className="zf-dest__grid">
          {otherSites.map((s) => (
            <ZiplineDestinationCard key={s.id} site={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
