import { Camera, ShieldCheck } from "lucide-react";
import { SIGHTINGS_NOTE, photographyPrinciples, photographySubjects } from "@/data/south-africa/safari";
import Reveal from "../../Reveal";
import { ZaHead, ZaMedia } from "./ZaPrimitives";

/** Wildlife photography: a gallery of subjects, where to find them, and how to shoot responsibly. */
export default function WildlifeExplorer() {
  const [lead, ...rest] = photographySubjects;
  return (
    <section className="pkg-section za-photo" id="photography" aria-labelledby="photo-h">
      <div className="pkg-container">
        <ZaHead
          id="photo-h"
          light
          eyebrow="Wildlife photography"
          title="Through the Long Lens"
          lede="From leopards in a marula tree to whales off the Cape coast. Golden-hour drives, patient guides and responsible distance make for photographs worth the journey."
        />
        <ul className="za-photo__grid">
          <li className="za-photo__lead">
            <Reveal className="za-photo__tile">
              <ZaMedia id={lead.image} sizes="(min-width: 1024px) 50vw, 100vw" />
              <span className="za-photo__cap"><strong>{lead.name}</strong>{lead.where}</span>
            </Reveal>
          </li>
          {rest.map((s) => (
            <li key={s.id}>
              <Reveal className="za-photo__tile">
                <ZaMedia id={s.image} label={s.name} sizes="(min-width: 1024px) 20vw, 50vw" />
                <span className="za-photo__cap"><strong>{s.name}</strong>{s.where}</span>
              </Reveal>
            </li>
          ))}
        </ul>
        <div className="za-photo__principles">
          <p className="za-photo__ph"><ShieldCheck size={18} aria-hidden="true" /> Responsible wildlife photography</p>
          <ul>{photographyPrinciples.map((p) => <li key={p}><Camera size={14} aria-hidden="true" /> {p}</li>)}</ul>
        </div>
        <p className="za-fine za-fine--light">{SIGHTINGS_NOTE}</p>
      </div>
    </section>
  );
}
