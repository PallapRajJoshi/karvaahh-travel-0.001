"use client";

import type { MouseEvent, ReactNode } from "react";
import type { ExplorerParams } from "@/lib/destinations/present";
import { scrollToExplorer, useExplorerParams } from "@/lib/destinations/url-state";

interface Props {
  /** Filters to apply in the explorer. Anything omitted is cleared. */
  filters?: Partial<Pick<ExplorerParams, "country" | "exp" | "region" | "q" | "sort">>;
  className?: string;
  children: ReactNode;
}

function hrefFor(filters: NonNullable<Props["filters"]>): string {
  const sp = new URLSearchParams();
  if (filters.country) sp.set("country", filters.country);
  if (filters.exp) sp.set("exp", filters.exp);
  if (filters.region) sp.set("region", filters.region);
  if (filters.sort && filters.sort !== "featured") sp.set("sort", filters.sort);
  if (filters.q) sp.set("q", filters.q);
  const qs = sp.toString();
  return `/destinations${qs ? `?${qs}` : ""}#explore`;
}

/**
 * A real link (works without JavaScript and is crawlable) that, with JavaScript,
 * applies the filters to the explorer in place and scrolls to it — no navigation.
 */
export function ExplorerLink({ filters = {}, className, children }: Props) {
  const [, update] = useExplorerParams();

  const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    update({
      country: filters.country,
      exp: filters.exp,
      region: filters.region,
      sort: filters.sort ?? "featured",
      q: filters.q ?? "",
    });
    scrollToExplorer();
  };

  return (
    <a href={hrefFor(filters)} className={className} onClick={onClick}>
      {children}
    </a>
  );
}
