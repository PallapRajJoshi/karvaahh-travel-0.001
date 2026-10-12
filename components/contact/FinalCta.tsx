import { FINAL_CTA, IMAGES } from "@/lib/contact/content";
import type { Channels } from "@/lib/contact/channels";
import { Backdrop } from "./Backdrop";
import { ChannelCta } from "./ChannelCta";
import { ContactIcon } from "./ContactIcon";

type Props = { channels: Channels };

export function FinalCta({ channels }: Props) {
  return (
    <section className="ct-final" aria-labelledby="ct-final-title">
      <div className="ct-final__bg" aria-hidden={IMAGES.finalCta ? undefined : true}>
        <div className="ct-final__drift">
          <Backdrop image={IMAGES.finalCta} variant="dusk" />
        </div>
        <div className="ct-final__shade" />
      </div>

      <div className="ct-container ct-final__inner" data-reveal>
        <svg className="ct-final__route" viewBox="0 0 320 40" fill="none" aria-hidden="true" focusable="false">
          <path d="M2 30C50 8 92 8 140 22s96 6 124-12 54-6 54-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 8" />
          <circle cx="318" cy="4" r="3.5" fill="currentColor" />
        </svg>
        <h2 id="ct-final-title" className="ct-final__title">
          {FINAL_CTA.title}
        </h2>
        <p className="ct-final__text">{FINAL_CTA.text}</p>
        <div className="ct-final__actions">
          <a className="ct-btn ct-btn--gold ct-btn--lg" href="#enquiry">
            {FINAL_CTA.primary}
            <ContactIcon name="arrow-right" size={20} />
          </a>
          <ChannelCta channels={channels} className="ct-btn ct-btn--ghost ct-btn--lg" />
        </div>
      </div>
    </section>
  );
}
