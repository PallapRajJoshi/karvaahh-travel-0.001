import type { CSSProperties, ReactNode } from "react";
import { PANEL, type IconName } from "@/lib/contact/content";
import { BRAND_NAME, OFFICE_CITY, type Channels } from "@/lib/contact/channels";
import { ContactIcon } from "./ContactIcon";

type Props = { channels: Channels };

type Row = {
  id: string;
  icon: IconName;
  label: string;
  node: ReactNode;
};

export function ContactPanel({ channels }: Props) {
  const host = channels.siteUrl.replace(/^https?:\/\//, "");

  const rows: Row[] = [
    {
      id: "office",
      icon: "pin",
      label: "Office",
      node: (
        <>
          <span className="ct-panel__strong">{BRAND_NAME}</span>
          <span>{channels.address ?? OFFICE_CITY}</span>
          {channels.address ? <span>{OFFICE_CITY}</span> : null}
        </>
      ),
    },
    {
      id: "phone",
      icon: "phone",
      label: "Phone",
      node: channels.phone ? (
        <a className="ct-panel__link" href={channels.phone.href}>
          {channels.phone.display}
        </a>
      ) : (
        <a className="ct-panel__link" href="#enquiry" data-prefill="true" data-prefill-method="phone">
          Request a call back
        </a>
      ),
    },
    {
      id: "whatsapp",
      icon: "message",
      label: "WhatsApp",
      node: channels.whatsapp ? (
        <a className="ct-panel__link" href={channels.whatsapp.href} target="_blank" rel="noopener noreferrer">
          {channels.whatsapp.display}
          <span className="sr-only"> (opens WhatsApp in a new tab)</span>
        </a>
      ) : (
        <a className="ct-panel__link" href="#enquiry" data-prefill="true" data-prefill-method="whatsapp">
          Ask us to reply on WhatsApp
        </a>
      ),
    },
    {
      id: "email",
      icon: "mail",
      label: "Email",
      node: channels.email ? (
        <a className="ct-panel__link" href={channels.email.href}>
          {channels.email.display}
        </a>
      ) : (
        <a className="ct-panel__link" href="#enquiry" data-prefill="true" data-prefill-method="email">
          Write to us via the form
        </a>
      ),
    },
    {
      id: "web",
      icon: "globe",
      label: "Website",
      node: (
        <a className="ct-panel__link" href={channels.siteUrl}>
          {host}
        </a>
      ),
    },
  ];

  return (
    <aside className="ct-panel" aria-labelledby="ct-panel-title">
      <div className="ct-panel__inner">
        <p className="ct-eyebrow ct-eyebrow--light">Contact details</p>
        <h2 id="ct-panel-title" className="ct-panel__title">
          {PANEL.title}
        </h2>

        <ul className="ct-panel__list">
          {rows.map((row, i) => (
            <li className="ct-panel__row" key={row.id} data-reveal style={{ "--i": i + 1 } as CSSProperties}>
              <span className="ct-panel__icon">
                <ContactIcon name={row.icon} size={22} />
              </span>
              <span className="ct-panel__body">
                <span className="ct-panel__label">{row.label}</span>
                <span className="ct-panel__value">{row.node}</span>
              </span>
            </li>
          ))}
        </ul>

        {channels.social.length > 0 ? (
          <ul className="ct-panel__social" aria-label="Karvaahh on social media">
            {channels.social.map((s) => (
              <li key={s.key}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="ct-panel__social-link">
                  <ContactIcon name={s.key} size={20} />
                  <span className="sr-only">
                    {s.label} (opens in a new tab)
                  </span>
                </a>
              </li>
            ))}
          </ul>
        ) : null}

        <p className="ct-panel__note">{PANEL.note}</p>
      </div>
    </aside>
  );
}
