import type { CalloutVariant, LegalIconName } from "@/lib/legal/types";
import { LegalIcon } from "./LegalIcon";
import { RichText } from "./RichText";

const VARIANTS: Record<CalloutVariant, { label: string; icon: LegalIconName }> = {
  important: { label: "Important", icon: "alert" },
  insurance: { label: "Travel insurance", icon: "shield" },
  booking: { label: "Booking-specific conditions", icon: "clipboard" },
  safety: { label: "Travel safety", icon: "heart" },
  supplier: { label: "Third-party services", icon: "users" },
  info: { label: "Note", icon: "info" },
};

interface LegalCalloutProps {
  variant: CalloutVariant;
  /** Optional heading; hidden when it only repeats the variant label. */
  title?: string;
  text: string;
}

export function LegalCallout({ variant, title, text }: LegalCalloutProps) {
  const { label, icon } = VARIANTS[variant];
  const showTitle = Boolean(title) && title!.trim().toLowerCase() !== label.toLowerCase();

  return (
    <div className={`legal-callout legal-callout--${variant}`} role="note" aria-label={label}>
      <span className="legal-callout__icon">
        <LegalIcon name={icon} size={22} />
      </span>
      <div className="legal-callout__body">
        <p className="legal-callout__label">{label}</p>
        {showTitle ? <p className="legal-callout__title">{title}</p> : null}
        <p className="legal-callout__text">
          <RichText text={text} />
        </p>
      </div>
    </div>
  );
}
