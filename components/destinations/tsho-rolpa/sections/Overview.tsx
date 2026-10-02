"use client";

import MediaFrame from "../shared/MediaFrame";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import "./Overview.css";

/**
 * Section 3 — Destination Overview.
 * Body copy is the Destination Highlight paragraph reproduced verbatim
 * from the brief (Section 1) — do not edit this text without sign-off.
 */
export default function Overview() {
  const containerRef = useRevealOnScroll<HTMLDivElement>();

  return (
    <section className="tsho-overview tsho-section" ref={containerRef}>
      <div className="tsho-container tsho-overview__grid">
        <div className="tsho-overview__media tsho-reveal">
          <MediaFrame
            src="/images/tsho-rolpa/overview/tsho-rolpa-overview.jpg"
            alt="Tsho Rolpa Lake's turquoise waters framed by rugged Himalayan peaks"
            ratio="portrait"
          />
        </div>

        <div className="tsho-overview__copy">
          <p className="tsho-eyebrow tsho-reveal">Destination Overview</p>
          <h2 className="tsho-overview__title tsho-reveal">
            Discover the Glacial Beauty of Tsho Rolpa
          </h2>

          <p className="tsho-overview__paragraph tsho-reveal">
            Tsho Rolpa Lake, nestled in the Rolwaling Valley of Dolakha district in Nepal&rsquo;s
            Bagmati Province, is one of Nepal&rsquo;s largest glacial lakes, renowned for its
            turquoise waters, dramatic Himalayan landscapes, and remote alpine wilderness.
            Situated at an altitude of approximately 4,580 meters, the lake is surrounded by
            towering snow-capped peaks, rugged mountain terrain, and pristine glaciers. Explore
            the scenic beauty of Bedhing Village, Na Village, Rolwaling Valley, Trakarding
            Glacier, and the breathtaking Tashi Lapcha Pass. Discover the traditional Sherpa
            culture, ancient Buddhist monasteries, and peaceful mountain settlements while
            enjoying high-altitude trekking, camping, photography, and panoramic Himalayan views.
          </p>

          <p className="tsho-overview__paragraph tsho-reveal">
            The destination is ideal for offbeat travelers seeking remote Himalayan adventures,
            high-altitude trekking, peaceful alpine landscapes, and authentic Sherpa hospitality.
            Accessible via Kathmandu–Charikot–Chetchet, the trek passes through scenic villages,
            forests, waterfalls, and mountain trails, with spring (March–May) and autumn
            (September–November) offering popular trekking seasons. Nearby highlights include
            Dudh Kunda (Omi Tso), Gaurishankar Himal, Yalung Ri, and the challenging Tashi Lapcha
            Pass, which connects the Rolwaling Valley with the Everest region.
          </p>

          <div className="tsho-overview__facts tsho-reveal">
            <div className="tsho-overview__fact">
              <span className="tsho-overview__fact-label">Location</span>
              <span className="tsho-overview__fact-value">
                Rolwaling Valley, Dolakha District, Bagmati Province
              </span>
            </div>
            <div className="tsho-overview__fact">
              <span className="tsho-overview__fact-label">Approx. Altitude</span>
              <span className="tsho-overview__fact-value">4,580 m</span>
            </div>
            <div className="tsho-overview__fact">
              <span className="tsho-overview__fact-label">Trekking Region</span>
              <span className="tsho-overview__fact-value">Rolwaling Valley / Gaurishankar Conservation Area</span>
            </div>
            <div className="tsho-overview__fact">
              <span className="tsho-overview__fact-label">Best Seasons</span>
              <span className="tsho-overview__fact-value">Spring (Mar–May) &amp; Autumn (Sep–Nov)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
