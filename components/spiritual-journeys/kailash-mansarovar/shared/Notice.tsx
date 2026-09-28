import type { ReactNode } from "react";
import Icon from "./Icon";

interface NoticeProps {
  children: ReactNode;
  variant?: "info" | "caution";
  onDark?: boolean;
  className?: string;
}

/** Disclaimers and safety notes. Uses role="note" so assistive tech announces it as supplementary. */
export default function Notice({ children, variant = "info", onDark = false, className = "" }: NoticeProps) {
  const classes = [
    "km-notice",
    variant === "caution" ? "km-notice--caution" : "",
    onDark ? "km-notice--on-dark" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} role="note">
      <Icon name={variant === "caution" ? "alert" : "info"} className="km-notice__icon" />
      <div className="km-notice__body">{children}</div>
    </div>
  );
}
