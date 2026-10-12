import { Info } from "lucide-react";
import { peninsulaExperiences } from "@/data/antarctica/experiences";
import Reveal from "../../Reveal";
import { ExpeditionRail } from "./AntarcticaPackageGrid";
import PolarMedia from "./PolarMedia";
import SectionHead from "./SectionHead";

const TEMPLATES = ["peninsula-9n", "cruise-10n", "discovery-11n", "peninsula-12n", "photography"];

/** Flagship collection: editorial mosaic of Peninsula experiences + templates. */
export default function AntarcticPeninsulaSection() {
  return (
    <section className="pkg-section an-peninsula" id="antarctic-peninsula" aria-labelledby="peninsula-h">
      <div className="pkg-container">
        <SectionHead
          id="peninsula-h"
          eyebrow="Flagship region · Antarctic Peninsula"
          title={<>Antarctic Peninsula <span className="an-h2__soft">Into the Heart of the White Continent</span></>}
          lede="Most Antarctic expeditions spend their days here: navigating ice-filled channels, landing at permitted sites and cruising beneath glaciers by Zodiac. Every day is shaped by ice, weather and wildlife."
        />

        <ul className="an-mosaic">
          {peninsulaExperiences.map((x, i) => (
            <li key={x.id} className={`an-mosaic__item an-mosaic__item--${i}`}>
              <Reveal className="an-mosaic__card">
                <PolarMedia id={x.image} decorative sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
                <div className="an-mosaic__caption">
                  <h3>{x.title}</h3>
                  <p>{x.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>

        <div className="an-subhead">
          <h3 className="an-h3">Antarctic Peninsula expedition templates</h3>
          <p className="an-note">
            <Info size={16} aria-hidden="true" />
            Configurable expedition templates, not fixed itineraries. We match each to real operator departures; landings and routing are decided on board.
          </p>
        </div>
        <ExpeditionRail ids={TEMPLATES} label="Antarctic Peninsula expedition templates" />
      </div>
    </section>
  );
}
