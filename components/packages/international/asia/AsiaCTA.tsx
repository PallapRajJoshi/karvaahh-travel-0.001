import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
import { destinationById } from "@/data/asia-destinations";
import { GENERAL_ENQUIRY } from "@/lib/asia/config";

type CtaLink = { label: string; href: string };

/** Cinematic closing CTA, shared by the international pages. Defaults render the Asia copy. */
export default function AsiaCTA({
  title = "Your Asia Story Starts Here.",
  lede = "Tell Karvaahh where you want to go, how you want to travel and what you want to experience. We'll help shape the journey around you.",
  image = destinationById("nepal")?.image?.src,
  primary = { label: "Plan My Trip", href: "#plan-trip" },
  secondary,
  whatsappHref = GENERAL_ENQUIRY,
}: {
  title?: string;
  lede?: string;
  image?: string;
  primary?: CtaLink;
  secondary?: CtaLink;
  whatsappHref?: string;
}) {
  return (
    <section className="asia-final" id="asia-final" aria-labelledby="final-h">
      {image && (
        <div className="asia-final__media" aria-hidden="true">
          <Image src={image} alt="" fill sizes="100vw" className="asia-final__img" />
        </div>
      )}
      <div className="asia-final__scrim" aria-hidden="true" />
      <div className="pkg-container asia-final__inner">
        <p className="asia-eyebrow asia-eyebrow--light">Karvaahh – Live to Travel</p>
        <h2 id="final-h" className="asia-final__title">{title}</h2>
        <p className="asia-final__lede">{lede}</p>
        <div className="asia-final__cta">
          <a href={primary.href} className="pkg-btn pkg-btn--lg asia-btn--gold">
            {primary.label} <ArrowRight size={18} className="pkg-arrow" aria-hidden="true" />
          </a>
          {secondary && (
            <a href={secondary.href} className="pkg-btn pkg-btn--lg pkg-btn--light">
              {secondary.label}
            </a>
          )}
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="pkg-btn pkg-btn--lg pkg-btn--ghost">
            <MessageCircle size={18} aria-hidden="true" /> WhatsApp Karvaahh
            <span className="pkg-sr"> (opens WhatsApp)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
