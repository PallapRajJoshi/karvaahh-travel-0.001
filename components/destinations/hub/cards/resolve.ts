import { enquireHref, locationLine, artTheme } from "@/lib/destinations/present";
import type { ArtTheme, Destination, ResolveContext } from "@/lib/destinations/types";

export interface ResolvedCard {
  href: string;
  hasPage: boolean;
  label: string;
  src?: string;
  alt: string;
  theme: ArtTheme;
}

/** Everything a card needs to render: a real link or an enquiry link, image or artwork. */
export function resolveCard(d: Destination, ctx: ResolveContext): ResolvedCard {
  const page = ctx.routes[d.slug];
  return {
    href: page ?? enquireHref(d),
    hasPage: Boolean(page),
    label: page ? `Explore ${d.name}` : `Plan your ${d.name} journey`,
    src: ctx.images[d.slug],
    alt: `${d.name} — ${locationLine(d)}`,
    theme: artTheme(d),
  };
}
