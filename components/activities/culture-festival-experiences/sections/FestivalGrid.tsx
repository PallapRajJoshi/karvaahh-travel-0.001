import Reveal from "../shared/Reveal";
import SectionHeading from "../shared/SectionHeading";
import FestivalCard from "./FestivalCard";
import { FESTIVALS, FESTIVALS_DATE_NOTE, FESTIVALS_HEADING, FESTIVALS_LEDE } from "../data/festivals";
import { IDS } from "../data/page";
import "./FestivalGrid.css";

export default function FestivalGrid() {
  return (
    <section id={IDS.festivals} className="culture-festivals" aria-labelledby="culture-festivals-title">
      <div className="cx-container">
        <Reveal>
          <SectionHeading id="culture-festivals-title" title={FESTIVALS_HEADING} lede={FESTIVALS_LEDE} align="center" />
        </Reveal>
        <ul className="culture-festivals__grid">
          {FESTIVALS.map((f, i) => (
            <FestivalCard key={f.id} festival={f} index={i} />
          ))}
        </ul>
        <p className="culture-festivals__note">{FESTIVALS_DATE_NOTE}</p>
      </div>
    </section>
  );
}
