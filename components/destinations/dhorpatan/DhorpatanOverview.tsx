import Image from "next/image";
import { overviewContent } from "@/data/dhorpatan";
import Reveal from "@/components/shared/Reveal";
import "./DhorpatanOverview.css";

export default function DhorpatanOverview() {
  return (
    <section className="dhorpatan-overview" id="overview">
      <div className="dhorpatan-page__container dhorpatan-overview__grid">
        <Reveal className="dhorpatan-overview__media">
          <Image
            src={overviewContent.image.src}
            alt={overviewContent.image.alt}
            fill
            sizes="(max-width: 900px) 92vw, 45vw"
            className="dhorpatan-overview__image"
          />
        </Reveal>

        <Reveal className="dhorpatan-overview__text" delay={120}>
          <h2 className="dhorpatan-overview__heading">{overviewContent.heading}</h2>
          <p className="dhorpatan-overview__paragraph">{overviewContent.paragraph}</p>

          <dl className="dhorpatan-overview__facts">
            {overviewContent.factsPanel.map((fact) => (
              <div key={fact.label} className="dhorpatan-overview__fact">
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
