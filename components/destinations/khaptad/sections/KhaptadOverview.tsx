import Image from "next/image";
import { khaptadDestinationHighlight, khaptadQuickFacts } from "@/data/destinations/khaptad/khaptad-facts";
import { useKhaptadReveal } from "../shared/useKhaptadReveal";

export default function KhaptadOverview() {
  const revealRef = useKhaptadReveal<HTMLDivElement>();

  return (
    <section className="khaptad-overview" aria-labelledby="khaptad-overview-heading">
      <div className="khaptad-page__container khaptad-overview__grid">
        <div className="khaptad-overview__media">
          <Image
            src="/images/destinations/khaptad/overview/khaptad-meadow-overview.jpg"
            alt="Large open meadow landscape at Khaptad National Park"
            fill
            sizes="(max-width: 900px) 100vw, 45vw"
            className="khaptad-overview__image"
          />
        </div>

        <div ref={revealRef} className="khaptad-reveal khaptad-overview__content">
          <span className="khaptad-page__eyebrow">Discover Khaptad</span>
          <h2 id="khaptad-overview-heading" className="khaptad-overview__heading">
            Discover the Peaceful Beauty of Khaptad
          </h2>
          <p className="khaptad-overview__text">{khaptadDestinationHighlight}</p>

          <dl className="khaptad-overview__facts">
            {khaptadQuickFacts.map((fact) => (
              <div className="khaptad-overview__fact" key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
