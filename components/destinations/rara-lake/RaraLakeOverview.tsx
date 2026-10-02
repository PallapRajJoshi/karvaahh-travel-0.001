import Image from "next/image";
import { overviewContent } from "@/data/destinations/rara-lake/content";
import "./RaraLakeOverview.css";

export default function RaraLakeOverview() {
  return (
    <section className="rara-overview" aria-labelledby="rara-overview-heading">
      <div className="rara-overview__grid">
        <div className="rara-overview__media">
          <Image
            src={overviewContent.image.src}
            alt={overviewContent.image.alt}
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            className="rara-overview__image"
          />
        </div>
        <div className="rara-overview__text">
          <h2 id="rara-overview-heading" className="rara-overview__heading">
            {overviewContent.heading}
          </h2>
          <p className="rara-overview__paragraph">{overviewContent.paragraph}</p>
        </div>
      </div>
    </section>
  );
}
