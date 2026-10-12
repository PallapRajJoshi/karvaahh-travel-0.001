import { ExternalLink } from "lucide-react";
import { responsiblePrinciples } from "@/data/antarctica/travelEssentials";
import { OFFICIAL_LINKS } from "@/lib/antarctica/config";
import Reveal from "../../Reveal";
import PolarIcon from "./PolarIcon";
import PolarMedia from "./PolarMedia";
import SectionHead from "./SectionHead";

/** Trust section: principles for visiting, with links to the official guidelines. */
export default function ResponsibleTravelSection() {
  return (
    <section className="pkg-section an-responsible" id="responsible" aria-labelledby="resp-h">
      <div className="an-responsible__bg" aria-hidden="true"><PolarMedia id="penguins-slope" decorative sizes="100vw" /></div>
      <div className="pkg-container">
        <SectionHead
          id="resp-h"
          light
          center
          eyebrow="Responsible Antarctica travel"
          title="Travel Responsibly. Leave Antarctica Wild."
          lede="Antarctica belongs to no one and matters to everyone. Every visit should leave it exactly as you found it."
        />
        <ul className="an-principles">
          {responsiblePrinciples.map((p, i) => (
            <li key={p.title} style={{ "--i": i } as React.CSSProperties}>
              <Reveal className="an-principle">
                <span className="an-principle__icon"><PolarIcon name={p.icon} size={20} /></span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </Reveal>
            </li>
          ))}
        </ul>
        <p className="an-fine an-fine--light an-responsible__links">
          Read more:{" "}
          <a href={OFFICIAL_LINKS.iaato} target="_blank" rel="noopener noreferrer">IAATO visitor guidelines <ExternalLink size={12} aria-hidden="true" /></a>
          {" · "}
          <a href={OFFICIAL_LINKS.antarcticTreaty} target="_blank" rel="noopener noreferrer">Antarctic Treaty Secretariat <ExternalLink size={12} aria-hidden="true" /></a>
        </p>
      </div>
    </section>
  );
}
