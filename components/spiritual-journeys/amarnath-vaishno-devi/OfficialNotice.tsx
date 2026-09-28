import type { ReactNode } from "react";

/** The page's one recurring "verify officially" device — maroon rule, never a modal or banner. */
export function OfficialNotice({ children, strong = false }: { children: ReactNode; strong?: boolean }) {
  return (
    <aside className={`avd-notice${strong ? " avd-notice--strong" : ""}`} role="note">
      <svg className="avd-notice__icon" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
        <path d="M12 3l10 18H2z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M12 10v5M12 18v.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
      <p className="avd-notice__text">{children}</p>
    </aside>
  );
}
