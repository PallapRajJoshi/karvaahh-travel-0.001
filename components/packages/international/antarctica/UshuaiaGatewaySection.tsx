import { Info } from "lucide-react";
import { ushuaiaServices } from "@/data/antarctica/gateways";
import Reveal from "../../Reveal";
import PolarIcon from "./PolarIcon";
import PolarMedia from "./PolarMedia";
import SectionHead from "./SectionHead";

/** Ushuaia as the expedition gateway: what Karvaahh arranges either side of the voyage. */
export default function UshuaiaGatewaySection() {
  return (
    <section className="pkg-section an-ushuaia" id="ushuaia" aria-labelledby="ushuaia-h">
      <div className="pkg-container an-ushuaia__layout">
        <Reveal className="an-ushuaia__photos">
          <div className="an-ushuaia__photo an-ushuaia__photo--main"><PolarMedia id="ushuaia-harbour" sizes="(min-width: 1024px) 45vw, 100vw" /></div>
          <div className="an-ushuaia__photo an-ushuaia__photo--b"><PolarMedia id="ushuaia-waterfront" sizes="(min-width: 1024px) 22vw, 50vw" /></div>
        </Reveal>
        <div>
          <SectionHead
            id="ushuaia-h"
            eyebrow="Expedition gateway"
            title="Begin Your Antarctic Journey from Ushuaia"
            lede="Set between the Martial Mountains and the Beagle Channel, Ushuaia is the departure port for most Antarctic Peninsula voyages. We plan the days around embarkation so the voyage starts calmly."
          />
          <ul className="an-iconlist an-iconlist--grid">
            {ushuaiaServices.map((s) => (
              <li key={s.id}>
                <PolarIcon name={s.icon} size={18} />
                <div><strong>{s.title}</strong> <span>{s.text}</span></div>
              </li>
            ))}
          </ul>
          <p className="an-note"><Info size={16} aria-hidden="true" /> Hotels, transfer times and embarkation schedules are confirmed per booking and per operator.</p>
        </div>
      </div>
    </section>
  );
}
