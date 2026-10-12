"use client";

import type { ReactNode } from "react";
import { openPreferences } from "@/lib/cookie/consent";

interface CookieSettingsButtonProps {
  className?: string;
  children?: ReactNode;
}

/**
 * Drop-in "Cookie settings" control that reopens the preferences dialog.
 * Put it in the site footer so visitors can change their choice at any time.
 * It needs <CookieConsentRoot /> mounted once in the root layout.
 */
export function CookieSettingsButton({
  className,
  children = "Cookie settings",
}: CookieSettingsButtonProps) {
  return (
    <button
      type="button"
      className={className ?? "cookie-settings-button"}
      onClick={openPreferences}
      aria-haspopup="dialog"
    >
      {children}
    </button>
  );
}
