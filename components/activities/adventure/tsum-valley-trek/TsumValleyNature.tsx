import Image from "next/image";
import { NATURE } from "@/data/destinations/tsum-valley/content";
import SectionHeading from "./shared/SectionHeading";
import Reveal from "./shared/Reveal";
import "./TsumValleyNature.css";

export default function TsumValleyNature() {
  return (
    <section className="tsum-section tsum-section--dark tsum-nature" id="nature" aria-labelledby="tsum-nature-title">
      <div className="tsum-container">
        <SectionHeading
          id="tsum-nature-title"
          eyebrow="Landscapes"
          title="A Remote Valley of Mountains, Forests, and Rivers"
          intro="Tsum climbs from subtropical gorge to high, dry pastures in a few days — every stage has its own scenery."
          tone="dark"
        />
        <ul className="tsum-nature__grid">
          {NATURE.map((n, i) => (
            <Reveal as="li" key={n.id} className={`tsum-nature__item tsum-nature__item--${n.size}`} delay={(i % 3) * 90}>
              <figure className="tsum-nature__figure">
                <div className="tsum-media tsum-nature__media">
                  <Image
                    src={n.image.src}
                    alt={n.image.alt}
                    fill
                    sizes={n.size === "wide" ? "(max-width: 760px) 100vw, 66vw" : "(max-width: 760px) 100vw, 33vw"}
                  />
                </div>
                <figcaption className="tsum-nature__caption">
                  <h3>{n.title}</h3>
                  <p>{n.description}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
