import { HERO } from "@/lib/contact/content";
import type { Channels } from "@/lib/contact/channels";
import { ContactIcon } from "./ContactIcon";

type Props = { channels: Channels; className?: string };

/**
 * The "WhatsApp Us" secondary button. If WhatsApp isn't configured it falls
 * back to a phone link, and if that's missing too it renders nothing — a
 * dead button is worse than no button.
 */
export function ChannelCta({ channels, className = "ct-btn ct-btn--ghost" }: Props) {
  if (channels.whatsapp) {
    return (
      <a className={className} href={channels.whatsapp.href} target="_blank" rel="noopener noreferrer">
        <ContactIcon name="message" size={20} />
        {HERO.whatsappCta}
        <span className="sr-only"> (opens WhatsApp in a new tab)</span>
      </a>
    );
  }
  if (channels.phone) {
    return (
      <a className={className} href={channels.phone.href}>
        <ContactIcon name="phone" size={20} />
        {HERO.callCta}
      </a>
    );
  }
  return null;
}
