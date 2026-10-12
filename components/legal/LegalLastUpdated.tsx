import { LEGAL_LAST_UPDATED, LEGAL_LAST_UPDATED_ISO } from "@/lib/legal/config";
import { LegalIcon } from "./LegalIcon";

interface LegalLastUpdatedProps {
  variant?: "badge" | "line";
}

/** Shows the single central LEGAL_LAST_UPDATED value (never a per-request date). */
export function LegalLastUpdated({ variant = "badge" }: LegalLastUpdatedProps) {
  return (
    <p className={`legal-updated legal-updated--${variant}`}>
      {variant === "badge" ? <LegalIcon name="calendar" size={16} /> : null}
      <span className="legal-updated__label">Last Updated:</span>{" "}
      <time dateTime={LEGAL_LAST_UPDATED_ISO}>{LEGAL_LAST_UPDATED}</time>
    </p>
  );
}
