import Link from "next/link";
import type { ReactNode } from "react";
import "./Buttons.css";

type Variant = "primary" | "ghost" | "light" | "outline";

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const cls = `ykw-btn ykw-btn--${variant} ${className}`;
  // In-page anchors use a plain <a> so smooth scroll + hash behave predictably.
  if (href.startsWith("#")) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
