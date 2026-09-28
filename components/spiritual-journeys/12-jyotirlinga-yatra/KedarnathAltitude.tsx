import Link from "next/link";
import SectionHeading from "./SectionHeading";
import { getRoute, kedarnathPrep } from "./data/jyotirlingaData";
import "./InfoSections.css";

export default function KedarnathAltitude() {
  const kedarnathPage = getRoute("kedarnath");

  return (
    <section id="prepare" className="jyl-section jyl-section--night jyl-info jyl-altitude" aria-labelledby="jyl-altitude-title">
      <div className="jyl-container">
        <SectionHeading id="jyl-altitude-title" title={kedarnathPrep.heading} lead={kedarnathPrep.intro} />
        <dl className="jyl-info__tiles jyl-info__tiles--four">
          {kedarnathPrep.points.map((p) => (
            <div key={p.title} className="jyl-info__tile">
              <dt>{p.title}</dt>
              <dd>{p.text}</dd>
            </div>
          ))}
        </dl>
        <p className="jyl-note jyl-info__note">{kedarnathPrep.disclaimer}</p>
        {kedarnathPage ? (
          <p className="jyl-info__more">
            <Link href={kedarnathPage.href} className="jyl-btn jyl-btn--secondary">
              Plan the Kedarnath leg in detail
            </Link>
          </p>
        ) : null}
      </div>
    </section>
  );
}
