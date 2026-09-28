import { traditions } from "../data/pashupatinathMuktinathData";
import { JourneyImage } from "../ui/JourneyImage";
import { SectionHeading } from "../ui/SectionHeading";
import "./muktinath.css";

export function TraditionsSection() {
  const sides = [traditions.hindu, traditions.buddhist];
  return (
    <section className="pmy-section pmy-traditions" aria-labelledby="pmy-traditions-title">
      <div className="pmy-container">
        <SectionHeading
          id="pmy-traditions-title"
          align="center"
          title={traditions.heading}
          intro={<p>{traditions.intro}</p>}
        />
        <div className="pmy-traditions__split" data-reveal>
          {sides.map((side) => (
            <div key={side.title} className="pmy-traditions__side">
              <h3 className="pmy-traditions__title">{side.title}</h3>
              <ul className="pmy-ticklist">
                {side.points.map((pt) => <li key={pt}>{pt}</li>)}
              </ul>
            </div>
          ))}
          <div className="pmy-traditions__shared">
            <div className="pmy-traditions__shared-media">
              <JourneyImage image={traditions.image} sizes="(max-width: 900px) 100vw, 30vw" />
            </div>
            <p>{traditions.shared}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
