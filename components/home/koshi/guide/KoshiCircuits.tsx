import Link from "next/link";
import KoshiSectionHeading from "../heading/KoshiSectionHeading";
import { koshiCircuits } from "@/data/koshi/guide";
import "./koshi-guide.css";

export default function KoshiCircuits() {
  return (
    <section
      id="circuits"
      className="koshi-guide koshi-guide--navy"
      aria-labelledby="koshi-circuits-title"
    >
      <div className="koshi-shell">
        <KoshiSectionHeading
          eyebrow="SUGGESTED TRAVEL CIRCUITS"
          titleId="koshi-circuits-title"
          light
          title={
            <>
              Routes to <em>shape your journey.</em>
            </>
          }
          description="Ideas to start from, not fixed itineraries. Durations depend on your pace, season, flights and road conditions — we tailor each route to you."
        />

        <ul className="koshi-guide__circuits">
          {koshiCircuits.map((circuit) => (
            <li key={circuit.name} className="koshi-guide__circuit koshi-reveal">
              <p className="koshi-guide__circuit-style">{circuit.style}</p>
              <h3>{circuit.name}</h3>
              <ol className="koshi-guide__route" aria-label={`${circuit.name} stops`}>
                {circuit.stops.map((stop) => (
                  <li key={stop}>{stop}</li>
                ))}
              </ol>
              <p>{circuit.text}</p>
              <Link
                href={circuit.href ?? "/contact"}
                className="koshi-guide__link"
                aria-label={
                  circuit.href
                    ? `Explore the ${circuit.name}`
                    : `Enquire about the ${circuit.name}`
                }
              >
                {circuit.href ? "Explore route" : "Plan this route"}{" "}
                <span aria-hidden="true">↗</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
