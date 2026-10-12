import type { CSSProperties } from "react";
import { HERO, IMAGES } from "@/lib/contact/content";
import type { Channels } from "@/lib/contact/channels";
import { Backdrop } from "./Backdrop";
import { ChannelCta } from "./ChannelCta";
import { ContactIcon } from "./ContactIcon";

type Props = { channels: Channels };

export function ContactHero({ channels }: Props) {
  return (
    <section className="ct-hero" aria-labelledby="ct-hero-title">
      <div className="ct-hero__bg" aria-hidden={IMAGES.hero ? undefined : true}>
        <div className="ct-hero__parallax">
          <div className="ct-hero__zoom">
            <Backdrop image={IMAGES.hero} variant="dawn" priority />
          </div>
        </div>
        <div className="ct-hero__shade" />
      </div>

      {/* Quiet floating travel motifs — decorative, hidden on small screens */}
      <div className="ct-hero__floats" aria-hidden="true">
        <span className="ct-float ct-float--compass">
          <ContactIcon name="compass" size={56} strokeWidth={1.1} />
        </span>
        <svg className="ct-float ct-float--route" viewBox="0 0 220 120" fill="none">
          <path d="M6 108C48 100 62 54 104 60s52 36 84-26" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 7" strokeLinecap="round" />
          <circle cx="188" cy="34" r="5" fill="currentColor" />
          <circle cx="188" cy="34" r="12" stroke="currentColor" strokeWidth="1" opacity=".5" />
        </svg>
      </div>

      <div className="ct-container ct-hero__inner">
        <p className="ct-eyebrow ct-rise" style={{ "--i": 0 } as CSSProperties}>
          {HERO.eyebrow}
        </p>
        <h1 id="ct-hero-title" className="ct-hero__title ct-rise" style={{ "--i": 1 } as CSSProperties}>
          {HERO.title}
        </h1>
        <p className="ct-hero__text ct-rise" style={{ "--i": 2 } as CSSProperties}>
          {HERO.text}
        </p>
        <div className="ct-hero__actions ct-rise" style={{ "--i": 3 } as CSSProperties}>
          <a className="ct-btn ct-btn--gold" href="#enquiry">
            {HERO.primaryCta}
            <ContactIcon name="arrow-right" size={20} />
          </a>
          <ChannelCta channels={channels} />
        </div>
      </div>
    </section>
  );
}
