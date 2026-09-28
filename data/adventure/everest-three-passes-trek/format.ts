import { ELEVATIONS_VERIFIED, IMAGE_BASE } from "./config";
import type { EtpImage } from "./types";

const metres = new Intl.NumberFormat("en-IN");

/** "5,535 m", prefixed with "≈" while elevations are unverified. */
export function elev(m: number, opts: { approx?: boolean } = {}): string {
  const approx = opts.approx ?? !ELEVATIONS_VERIFIED;
  return `${approx ? "≈" : ""}${metres.format(m)} m`;
}

/** Plain "5,535" for tight labels (profile chart). */
export function num(m: number): string {
  return metres.format(m);
}

export function imageSrc(img: EtpImage): string {
  return `${IMAGE_BASE}/${img.folder}/${img.file}`;
}

export function formatPrice(p: { amount: number; currency: "INR" | "USD" | "NPR" }): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: p.currency,
    maximumFractionDigits: 0,
  }).format(p.amount);
}
