import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
import { img } from "@/data/europe/images";
import { GENERAL_ENQUIRY } from "@/lib/europe/config";

export default function EuropeCTA() {
  return (
    <section className="asia-final eu-final" id="europe-final" aria-labelledby="final-h">
      <div className="asia-final__media" aria-hidden="true">
        <Image src={img.santoriniCaldera.src} alt="" fill sizes="100vw" className="asia-final__img" />
      </div>
      <div className="asia-final__scrim" aria-hidden="true" />
      <div className="pkg-container asia-final__inner">
        <p className="asia-eyebrow asia-eyebrow--light">Karvaahh – Live to Travel</p>
        <h2 id="final-h" className="asia-final__title">Your Europe Story Starts Here.</h2>
        <p className="asia-final__lede">
          Whether you dream of Alpine landscapes, romantic cities, Mediterranean beaches, historic capitals or a
          multi-country European adventure, Karvaahh can help shape the journey around you.
        </p>
        <div className="asia-final__cta">
          <a href="#packages" className="pkg-btn pkg-btn--lg asia-btn--gold">
            Explore Europe Packages <ArrowRight size={18} className="pkg-arrow" aria-hidden="true" />
          </a>
          <a href="#plan-trip" className="pkg-btn pkg-btn--lg pkg-btn--ghost">Customize My Europe Trip</a>
          <a href={GENERAL_ENQUIRY} target="_blank" rel="noopener noreferrer" className="pkg-btn pkg-btn--lg pkg-btn--ghost">
            <MessageCircle size={18} aria-hidden="true" /> WhatsApp Karvaahh
            <span className="pkg-sr"> (opens WhatsApp)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
