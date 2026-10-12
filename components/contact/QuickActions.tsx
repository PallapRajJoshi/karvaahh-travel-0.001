import type { CSSProperties } from "react";
import type { IconName } from "@/lib/contact/content";
import type { Channels } from "@/lib/contact/channels";
import type { ContactMethodValue } from "@/lib/contact/options";
import { ContactIcon } from "./ContactIcon";

type Props = { channels: Channels };

type Card = {
  id: string;
  icon: IconName;
  title: string;
  description: string;
  cta: string;
  href: string;
  external: boolean;
  /** Set when the channel isn't configured and the card falls back to the form. */
  fallbackMethod?: ContactMethodValue;
};

function buildCards(c: Channels): Card[] {
  return [
    c.phone
      ? {
          id: "call",
          icon: "phone",
          title: "Call Us",
          description: "Speak directly with our travel experts",
          cta: "Call Now",
          href: c.phone.href,
          external: false,
        }
      : {
          id: "call",
          icon: "phone",
          title: "Call Us",
          description: "Speak directly with our travel experts",
          cta: "Request a Call Back",
          href: "#enquiry",
          external: false,
          fallbackMethod: "phone",
        },
    c.whatsapp
      ? {
          id: "whatsapp",
          icon: "message",
          title: "WhatsApp",
          description: "Get quick assistance for your trip",
          cta: "Chat With Us",
          href: c.whatsapp.href,
          external: true,
        }
      : {
          id: "whatsapp",
          icon: "message",
          title: "WhatsApp",
          description: "Get quick assistance for your trip",
          cta: "Request a Reply",
          href: "#enquiry",
          external: false,
          fallbackMethod: "whatsapp",
        },
    c.email
      ? {
          id: "email",
          icon: "mail",
          title: "Email Us",
          description: "Send us your travel requirements",
          cta: "Send Email",
          href: c.email.href,
          external: false,
        }
      : {
          id: "email",
          icon: "mail",
          title: "Email Us",
          description: "Send us your travel requirements",
          cta: "Write to Us",
          href: "#enquiry",
          external: false,
          fallbackMethod: "email",
        },
    {
      id: "visit",
      icon: "pin",
      title: "Visit Our Office",
      description: "Meet our travel team in person",
      cta: "Get Directions",
      href: c.directionsHref,
      external: true,
    },
  ];
}

export function QuickActions({ channels }: Props) {
  const cards = buildCards(channels);
  return (
    <section className="ct-actions" aria-labelledby="ct-actions-title">
      <div className="ct-container">
        <h2 id="ct-actions-title" className="sr-only">
          Ways to contact Karvaahh
        </h2>
        <ul className="ct-actions__grid">
          {cards.map((card, i) => (
            <li key={card.id} data-reveal style={{ "--i": i } as CSSProperties}>
              <a
                className="ct-action"
                href={card.href}
                {...(card.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                {...(card.fallbackMethod
                  ? { "data-prefill": "true", "data-prefill-method": card.fallbackMethod }
                  : {})}
              >
                <span className="ct-action__icon">
                  <ContactIcon name={card.icon} size={26} />
                </span>
                <span className="ct-action__title">{card.title}</span>
                <span className="ct-action__text">{card.description}</span>
                <span className="ct-action__cta">
                  {card.cta}
                  <ContactIcon name="arrow-right" size={18} />
                  {card.external ? <span className="sr-only"> (opens in a new tab)</span> : null}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
