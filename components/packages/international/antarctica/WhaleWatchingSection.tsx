import { whaleExperiences, whaleSpecies } from "@/data/antarctica/experiences";
import Reveal from "../../Reveal";
import PolarIcon from "./PolarIcon";
import PolarMedia from "./PolarMedia";
import SectionHead from "./SectionHead";

/** Marine-life section: photo stack, possible species and how you watch. */
export default function WhaleWatchingSection() {
  return (
    <section className="pkg-section pkg-section--sand an-whales" id="whales" aria-labelledby="whales-h">
      <div className="pkg-container an-whales__layout">
        <Reveal className="an-whales__photos">
          <div className="an-whales__photo an-whales__photo--main"><PolarMedia id="fluke-mountains" sizes="(min-width: 1024px) 40vw, 100vw" /></div>
          <div className="an-whales__photo an-whales__photo--b"><PolarMedia id="kayak-whale" sizes="(min-width: 1024px) 22vw, 50vw" /></div>
          <div className="an-whales__photo an-whales__photo--c"><PolarMedia id="orcas" sizes="(min-width: 1024px) 22vw, 50vw" /></div>
        </Reveal>
        <div>
          <SectionHead
            id="whales-h"
            eyebrow="Whale watching"
            title="Giants of the Southern Ocean"
            lede="Krill-rich summer waters draw whales to the Peninsula. Encounters are often more frequent later in the season, but they are never guaranteed."
          />
          <h3 className="an-h4">Possible species may include</h3>
          <ul className="an-species">
            {whaleSpecies.map((s) => (
              <li key={s.name}><strong>{s.name}</strong><span>{s.text}</span></li>
            ))}
          </ul>
          <ul className="an-iconlist">
            {whaleExperiences.map((x) => (
              <li key={x.id}>
                <PolarIcon name={x.icon} size={18} />
                <div><strong>{x.title}</strong> <span>{x.text}</span></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
