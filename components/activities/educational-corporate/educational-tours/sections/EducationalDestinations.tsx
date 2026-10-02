import { DESTINATIONS, DESTINATIONS_SECTION } from "../data/destinations";
import { LINKS } from "../data/content";
import { CtaLink } from "../shared/CtaLink";
import { Reveal } from "../shared/Reveal";
import { SectionHeading } from "../shared/SectionHeading";
import { DestinationMap } from "./DestinationMap";
import "./EducationalDestinations.css";

const ROWS = DESTINATIONS.flatMap((d) => d.table);

export function EducationalDestinations() {
  return (
    <section id="destinations" className="et-section" aria-labelledby="et-dest-title">
      <div className="et-container">
        <SectionHeading eyebrow={DESTINATIONS_SECTION.eyebrow} title={DESTINATIONS_SECTION.title} lead={DESTINATIONS_SECTION.lead} id="et-dest-title" />
        <Reveal>
          <DestinationMap note={DESTINATIONS_SECTION.mapNote} />
        </Reveal>

        <div className="et-dest__compare">
          <Reveal>
            <h3 className="et-dest__sub">Learning by Destination</h3>
          </Reveal>

          {/* Desktop / tablet: real table */}
          <Reveal className="et-dest__table-wrap">
            <table className="et-dest__table">
              <caption className="et-sr-only">Learning focus and example experiences by destination</caption>
              <thead>
                <tr>
                  <th scope="col">Destination</th>
                  <th scope="col">Learning focus</th>
                  <th scope="col">Example experiences</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row) => (
                  <tr key={row.place}>
                    <th scope="row">{row.place}</th>
                    <td>{row.focus}</td>
                    <td>{row.experiences}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>

          {/* Mobile: cards instead of a cramped table */}
          <ul className="et-dest__cards">
            {ROWS.map((row, i) => (
              <Reveal as="li" key={row.place} index={i % 3} className="et-dest__card">
                <h4>{row.place}</h4>
                <p className="et-dest__card-focus">{row.focus}</p>
                <p>{row.experiences}</p>
              </Reveal>
            ))}
          </ul>
        </div>

        <div className="et-cta-band">
          <CtaLink href={LINKS.inquiry} variant="dark">
            {DESTINATIONS_SECTION.ctaCopy}
          </CtaLink>
        </div>
      </div>
    </section>
  );
}
