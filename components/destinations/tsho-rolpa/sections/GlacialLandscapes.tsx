"use client";

import MediaFrame from "../shared/MediaFrame";
import SectionHeading from "../shared/SectionHeading";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import "./GlacialLandscapes.css";

const environmentPoints = [
  "Tsho Rolpa's glacial lake landscape",
  "Surrounding glaciers and rugged alpine terrain",
  "Snow-covered Himalayan peaks",
  "Alpine vegetation and high-altitude ecosystems",
  "Mountain rivers, streams, and waterfalls",
];

export default function GlacialLandscapes() {
  const containerRef = useRevealOnScroll<HTMLDivElement>();

  return (
    <section className="tsho-environment tsho-section tsho-section--dark" ref={containerRef}>
      <div className="tsho-container tsho-environment__grid">
        <div className="tsho-environment__copy">
          <SectionHeading
            eyebrow="Natural Environment"
            title="Glacial Landscapes &amp; Alpine Wilderness"
            tone="dark"
          />

          <ul className="tsho-environment__list tsho-reveal">
            {environmentPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>

          <div className="tsho-environment__notice tsho-reveal">
            <p>
              Glacial lakes like Tsho Rolpa sit within a changing high-altitude environment.
              Natural hazards associated with glacial lakes and shifting mountain conditions are
              a real consideration in this region. Responsible trekking means staying on
              designated routes and following local guidance at all times.
            </p>
            <p className="tsho-environment__warning">
              Visitors should not approach unstable shorelines, glacier fronts, or hazardous
              terrain.
            </p>
          </div>
        </div>

        <div className="tsho-environment__media tsho-reveal">
          <MediaFrame
            src="/images/tsho-rolpa/environment/glacial-landscape.jpg"
            alt="Glacial and alpine terrain surrounding Tsho Rolpa Lake"
            ratio="portrait"
          />
        </div>
      </div>
    </section>
  );
}
