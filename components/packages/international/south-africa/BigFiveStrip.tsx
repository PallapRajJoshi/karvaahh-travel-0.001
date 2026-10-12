import { bigFive, SIGHTINGS_NOTE } from "@/data/south-africa/safari";
import Reveal from "../../Reveal";
import { ZaMedia } from "./ZaPrimitives";

/** The Big Five, framed as possible encounters. */
export default function BigFiveStrip() {
  return (
    <div className="za-big5">
      <h3 className="za-big5__h">Possible Big Five encounters</h3>
      <ul className="za-big5__list">
        {bigFive.map((a) => (
          <li key={a.id}>
            <Reveal className="za-big5__card">
              <ZaMedia id={a.image} sizes="(min-width: 1024px) 20vw, 50vw" />
              <div className="za-big5__body">
                <strong>{a.name}</strong>
                <span>{a.text}</span>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
      <p className="za-fine za-fine--light">{SIGHTINGS_NOTE}</p>
    </div>
  );
}
