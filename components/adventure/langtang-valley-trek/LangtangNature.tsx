import { landscapeZones } from "@/data/adventure/langtang-valley-trek";
import SectionHeading from "./SectionHeading";
import LangtangImage from "./LangtangImage";
import "./LangtangNature.css";

export default function LangtangNature() {
  return (
    <section className="lt-section lt-section--tint lt-nature" id="landscapes" aria-labelledby="lt-nature-title">
      <div className="lt-container">
        <SectionHeading id="lt-nature-title" eyebrow="Landscapes by Altitude" title="A Valley of Mountains, Forests, and Glaciers"
          intro="In a few days of walking, the trail climbs through four distinct worlds — each one a little higher, colder and wider than the last." />
        <ol className="lt-zones" role="list">
          {landscapeZones.map((z, i) => (
            <li key={z.title} className="lt-zone" data-reveal style={{ ["--i" as string]: i, ["--step" as string]: landscapeZones.length - 1 - i }}>
              <div className="lt-zone__media"><LangtangImage id={z.image} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="lt-zoom" /></div>
              <div className="lt-zone__body">
                <span className="lt-zone__band">{z.band}</span>
                <h3 className="lt-zone__title">{z.title}</h3>
                <p className="lt-zone__text">{z.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
