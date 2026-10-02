import Image from "next/image";
import { khaptadWildlife, khaptadConservationMessage } from "@/data/destinations/khaptad/khaptad-facts";
import KhaptadSectionHeading from "../shared/KhaptadSectionHeading";
import { useKhaptadReveal } from "../shared/useKhaptadReveal";

export default function KhaptadWildlife() {
  const revealRef = useKhaptadReveal<HTMLDivElement>();

  return (
    <section className="khaptad-wildlife" aria-labelledby="khaptad-wildlife-heading">
      <div className="khaptad-page__container khaptad-wildlife__grid">
        <div className="khaptad-wildlife__media">
          <Image
            src="/images/destinations/khaptad/wildlife/khaptad-wildlife.jpg"
            alt="Wildlife and forest habitat within Khaptad National Park"
            fill
            sizes="(max-width: 900px) 100vw, 45vw"
          />
        </div>

        <div ref={revealRef} className="khaptad-reveal khaptad-wildlife__content">
          <KhaptadSectionHeading
            eyebrow="Wildlife & Biodiversity"
            title="Wildlife & Biodiversity"
            description="Khaptad's forests and grasslands support a rich mix of Himalayan wildlife and plant life."
          />
          <ul className="khaptad-wildlife__list">
            {khaptadWildlife.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="khaptad-wildlife__conservation">{khaptadConservationMessage}</p>
        </div>
      </div>
    </section>
  );
}
