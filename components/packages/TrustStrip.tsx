import type { TravelPackage } from "@/data/packages/package-types";
import CountUp from "./CountUp";
import Reveal from "./Reveal";

/** Every number comes from the real package data. Nothing is hard-coded. */
export default function TrustStrip({ packages }: { packages: TravelPackage[] }) {
  const regions = new Set(packages.map((p) => p.country)).size;
  const experiences = new Set(packages.flatMap((p) => p.categories)).size;
  return (
    <section className="pkg-strip" aria-label="Karvaahh packages at a glance">
      <Reveal>
        <dl className="pkg-container pkg-strip__grid">
          <div><dt>Curated journeys</dt><dd><CountUp value={packages.length} /></dd></div>
          <div><dt>Travel {regions === 1 ? "region" : "regions"}</dt><dd><CountUp value={regions} /></dd></div>
          <div><dt>Travel experiences</dt><dd><CountUp value={experiences} /></dd></div>
          <div><dt>Trip planning</dt><dd>Custom</dd></div>
        </dl>
      </Reveal>
    </section>
  );
}
