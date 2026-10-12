import Link from "next/link";
import { CookieSettingsButton } from "@/components/cookie/CookieSettingsButton";
import { legalLinks } from "@/lib/legal";

interface FooterLegalLinksProps {
  className?: string;
  linkClassName?: string;
  /** Adds a "Cookie settings" control that reopens the preferences dialog. */
  showCookieSettings?: boolean;
}

/**
 * Drop this into your EXISTING footer (do not add a second footer):
 *
 *   <FooterLegalLinks />
 *
 * Pass `className` / `linkClassName` to match your footer's own link styles.
 */
export function FooterLegalLinks({
  className,
  linkClassName,
  showCookieSettings = true,
}: FooterLegalLinksProps) {
  return (
    <nav aria-label="Legal" className={className}>
      <ul style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem 1.25rem", margin: 0, padding: 0, listStyle: "none" }}>
        {legalLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className={linkClassName}>
              {link.label}
            </Link>
          </li>
        ))}
        {showCookieSettings ? (
          <li>
            <CookieSettingsButton className={linkClassName} />
          </li>
        ) : null}
      </ul>
    </nav>
  );
}
