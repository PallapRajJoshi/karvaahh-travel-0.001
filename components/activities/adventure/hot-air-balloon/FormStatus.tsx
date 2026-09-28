import Link from "next/link";
import { CONTACT_FALLBACK_HREF } from "@/lib/enquiry";
import type { SubmitState } from "./useEnquirySubmit";

/** Honest post-submit messaging. Never shows a fake confirmation. */
export default function FormStatus({ state, error, sentText }: { state: SubmitState; error: string; sentText: string }) {
  return (
    <div className="hab-form__status" role="status" aria-live="polite">
      {state === "sent" && <p className="hab-form__msg hab-form__msg--ok">{sentText}</p>}
      {state === "not-connected" && (
        <p className="hab-form__msg hab-form__msg--warn">
          Your enquiry has not been sent — online enquiries are not connected yet.
          Please <Link href={CONTACT_FALLBACK_HREF}>contact Karvaahh directly</Link> with
          these details and we will check availability for you.
        </p>
      )}
      {state === "error" && (
        <p className="hab-form__msg hab-form__msg--error">{error} Your details are still in the form.</p>
      )}
    </div>
  );
}
