import type { SiteStatus } from "./data/zipFlyingData";

export default function StatusBadge({ status, tone = "light" }: { status: SiteStatus; tone?: "light" | "dark" }) {
  return (
    <span className={`zf-status zf-status--${status.toLowerCase()} zf-status--on-${tone}`}>{status}</span>
  );
}
