import type { CSSProperties } from "react";
import { ENQUIRY_INTRO } from "@/lib/contact/content";
import type { Channels } from "@/lib/contact/channels";
import { ContactPanel } from "./ContactPanel";
import { EnquiryForm } from "./EnquiryForm";

type Props = { channels: Channels };

/** Two-column layout: enquiry form (left) + contact panel (right, sticky on desktop). */
export function EnquirySection({ channels }: Props) {
  return (
    <section className="ct-section ct-enquiry" id="enquiry" aria-labelledby="ct-enquiry-title">
      <div className="ct-container ct-enquiry__grid">
        <div className="ct-enquiry__main" data-reveal>
          <p className="ct-eyebrow ct-eyebrow--dark">Send an enquiry</p>
          <h2 id="ct-enquiry-title" className="ct-h2">
            {ENQUIRY_INTRO.title}
          </h2>
          <p className="ct-lead">{ENQUIRY_INTRO.text}</p>
          <div className="ct-card ct-enquiry__card">
            <EnquiryForm
              fallback={{
                whatsappHref: channels.whatsapp?.href ?? null,
                phoneHref: channels.phone?.href ?? null,
                phoneDisplay: channels.phone?.display ?? null,
              }}
            />
          </div>
        </div>

        <div className="ct-enquiry__side" data-reveal style={{ "--i": 2 } as CSSProperties}>
          <ContactPanel channels={channels} />
        </div>
      </div>
    </section>
  );
}
