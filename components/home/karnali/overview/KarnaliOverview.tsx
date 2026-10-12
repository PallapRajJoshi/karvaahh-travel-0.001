import Reveal from "@/components/shared/Reveal";
import KarnaliSectionHeading from "../heading/KarnaliSectionHeading";
import { karnaliDistricts, karnaliFacts, karnaliWhyVisit } from "@/data/karnali/travel-info";
import "../info/karnali-info.css";

export default function KarnaliOverview() {
  return (
    <section
      id="karnali-overview"
      className="karnali-root karnali-section karnali-info-light"
      aria-labelledby="karnali-overview-heading"
    >
      <span className="karnali-num karnali-num-dark">02</span>

      <div className="karnali-section-inner karnali-overview-grid">
        <Reveal>
          <KarnaliSectionHeading
            id="karnali-overview-heading"
            eyebrow="PROVINCE OVERVIEW"
            heading="Nepal's largest province,"
            goldWord="and its wildest."
            sectionNumber="02 / OVERVIEW"
          />
          <div className="karnali-prose">
            <p>
              Karnali Province covers the remote north-west of Nepal and takes its name from the
              Karnali, the country&rsquo;s longest river. The land climbs from the warm, subtropical
              Surkhet Valley through forested mid-hills to the trans-Himalayan plateaus of Dolpo
              and Humla, which lie in the rain shadow on the edge of the Tibetan Plateau.
            </p>
            <p>
              It is Nepal&rsquo;s largest and least densely populated province. Khas, Thakuri,
              Magar and Tibetan-influenced Bhotia communities live alongside two national parks,
              deep river gorges and high Himalayan lakes. Many valleys are reached only by small
              aircraft or long mountain roads, so journeys here reward advance planning.
            </p>
          </div>

          <h3 className="karnali-info-subheading">Why visit Karnali</h3>
          <ul className="karnali-check-list">
            {karnaliWhyVisit.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal variant="slide-right" delay={120} className="karnali-facts-card">
          <h3 className="karnali-facts-title">Karnali at a glance</h3>
          <dl className="karnali-facts">
            {karnaliFacts.map((fact) => (
              <div key={fact.label} className="karnali-fact">
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
          <p className="karnali-facts-label">The 10 districts</p>
          <ul className="karnali-district-list">
            {karnaliDistricts.map((d) => (
              <li key={d} className="karnali-chip">
                {d}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
