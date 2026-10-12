import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Renders plain legal text with optional inline links written as
 * `[label](/internal-path)` or `[label](https://external.example)`.
 * Nothing else is interpreted, so content stays safe and predictable.
 */
const LINK_PATTERN = /\[([^\]]+)\]\(([^)\s]+)\)/g;

export function RichText({ text }: { text: string }) {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let key = 0;

  for (const match of text.matchAll(LINK_PATTERN)) {
    const [full, label, href] = match;
    const start = match.index ?? 0;
    if (start > lastIndex) nodes.push(text.slice(lastIndex, start));

    const isInternal = href.startsWith("/");
    const isSafe = isInternal || href.startsWith("https://") || href.startsWith("mailto:");
    if (!isSafe) {
      nodes.push(full);
    } else if (isInternal) {
      nodes.push(
        <Link key={key++} href={href} className="legal-link">
          {label}
        </Link>,
      );
    } else {
      nodes.push(
        <a key={key++} href={href} className="legal-link" rel="noopener noreferrer">
          {label}
        </a>,
      );
    }
    lastIndex = start + full.length;
  }

  if (lastIndex < text.length) nodes.push(text.slice(lastIndex));
  return <>{nodes}</>;
}
