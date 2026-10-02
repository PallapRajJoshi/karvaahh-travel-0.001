import { DESTINATIONS } from "@/lib/destinations/data";
import { EXPERIENCES, PROVINCES, REGIONS } from "@/lib/destinations/taxonomy";
import "./sections.css";

/** Static, computed-from-data numbers (no JS counter: zero layout shift, correct without scripts). */
export function StatsSection() {
  const rounded = Math.floor(DESTINATIONS.length / 10) * 10;
  const stats = [
    { value: `${rounded}+`, label: "Destinations" },
    { value: String(REGIONS.length), label: "World regions" },
    { value: String(EXPERIENCES.length), label: "Travel experiences" },
    { value: String(PROVINCES.length), label: "Nepal provinces" },
  ];
  return (
    <section className="dstats" aria-label="Karvaahh destinations at a glance">
      <dl className="dh-container dstats__grid">
        {stats.map((s) => (
          <div key={s.label} className="dstats__item dh-reveal">
            <dt className="dstats__label">{s.label}</dt>
            <dd className="dstats__value">{s.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
