import type { ReactNode } from "react";
import type { IconName } from "../types";
import Icon from "./Icon";

interface NoticeProps {
  tone?: "caution" | "info";
  title?: string;
  icon?: IconName;
  children: ReactNode;
  className?: string;
}

/** Safety / verification callout. `role="note"` keeps it discoverable to AT. */
export default function Notice({ tone = "caution", title, icon, children, className }: NoticeProps) {
  return (
    <aside role="note" className={`km-notice km-notice--${tone}${className ? ` ${className}` : ""}`}>
      <Icon name={icon ?? (tone === "caution" ? "alert" : "compass")} size={22} className="km-notice__icon" />
      <div>
        {title ? <p className="km-notice__title">{title}</p> : null}
        <div className="km-notice__body">{children}</div>
      </div>
    </aside>
  );
}
