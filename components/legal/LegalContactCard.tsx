import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { contactPageHref, getContactChannels } from "@/lib/legal/contact";
import type { LegalIconName } from "@/lib/legal/types";
import { LegalIcon } from "./LegalIcon";

const CHANNEL_ICONS: Record<string, LegalIconName> = {
  email: "mail",
  phone: "phone",
  whatsapp: "whatsapp",
  address: "pin",
};

/**
 * "Need help?" card. Only shows official contact details that exist in
 * `lib/site-config.ts` — empty fields are never rendered.
 */
export function LegalContactCard() {
  const channels = getContactChannels();

  return (
    <div className="legal-contact">
      <div className="legal-contact__head">
        <span className="legal-contact__icon">
          <LegalIcon name="users" size={22} />
        </span>
        <div>
          <p className="legal-contact__title">Need help?</p>
          <p className="legal-contact__lead">
            The {siteConfig.brandName} travel team is happy to help.
          </p>
        </div>
      </div>

      {siteConfig.legalEntityName || siteConfig.registrationNumber ? (
        <dl className="legal-contact__entity">
          {siteConfig.legalEntityName ? (
            <div>
              <dt>Registered name</dt>
              <dd>{siteConfig.legalEntityName}</dd>
            </div>
          ) : null}
          {siteConfig.registrationNumber ? (
            <div>
              <dt>Registration</dt>
              <dd>{siteConfig.registrationNumber}</dd>
            </div>
          ) : null}
        </dl>
      ) : null}

      {channels.length > 0 ? (
        <ul className="legal-contact__list">
          {channels.map((channel) => (
            <li key={channel.kind} className="legal-contact__row">
              <LegalIcon name={CHANNEL_ICONS[channel.kind]} size={18} className="legal-contact__row-icon" />
              <span className="legal-contact__row-label">{channel.label}</span>
              {channel.href ? (
                <a href={channel.href} className="legal-contact__row-value">
                  {channel.value}
                </a>
              ) : (
                <span className="legal-contact__row-value">{channel.value}</span>
              )}
            </li>
          ))}
        </ul>
      ) : null}

      <Link href={contactPageHref} className="legal-btn legal-btn--gold">
        <span>Contact {siteConfig.brandName}</span>
        <LegalIcon name="arrow" size={18} />
      </Link>
    </div>
  );
}
