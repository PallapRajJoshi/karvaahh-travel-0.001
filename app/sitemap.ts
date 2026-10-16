import fs from "node:fs";
import path from "node:path";
import type { MetadataRoute } from "next";
import { CHAR_DHAM_PAGES } from "@/data/char-dham";
import { HELICOPTER_TOUR_SLUGS } from "@/data/helicopter-tours";
import { siteConfig } from "@/lib/site-config";

/** Generated once at build time. */
export const dynamic = "force-static";

const APP_DIR = path.join(process.cwd(), "app");

/** Dynamic segments and the canonical slugs they render (aliases redirect, so they are omitted). */
const DYNAMIC_ROUTES: Record<string, readonly string[]> = {
  "/activities/char-dham-yatra/[slug]": Object.keys(CHAR_DHAM_PAGES),
  "/activities/helicopter-tours/[slug]": HELICOPTER_TOUR_SLUGS,
};

/** Walks app/ and returns every static route that has a page file. */
function collectRoutes(dir: string, route = ""): string[] {
  const routes: string[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  if (entries.some((e) => e.isFile() && /^page\.(tsx|ts|jsx|js|mdx)$/.test(e.name))) {
    routes.push(route || "/");
  }
  for (const e of entries) {
    if (!e.isDirectory()) continue;
    const name = e.name;
    // Skip private folders, API routes and parallel/intercepting segments.
    if (name.startsWith("_") || name.startsWith("@") || name.startsWith("(.") || name === "api") continue;
    // Route groups "(name)" do not add a URL segment.
    const segment = name.startsWith("(") && name.endsWith(")") ? "" : `/${name}`;
    routes.push(...collectRoutes(path.join(dir, name), route + segment));
  }
  return routes;
}

function priorityFor(route: string): number {
  if (route === "/") return 1;
  if (route === "/packages" || route === "/contact" || route === "/destinations") return 0.9;
  if (/^\/(cookies|privacy-policy|terms-and-conditions|cancellation-policy)$/.test(route)) return 0.3;
  return 0.7;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const urls = collectRoutes(APP_DIR).flatMap((route) => {
    if (!route.includes("[")) return [route];
    return (DYNAMIC_ROUTES[route] ?? []).map((slug) => route.replace("[slug]", slug));
  });

  return [...new Set(urls)].sort().map((route) => ({
    url: `${siteConfig.url}${route === "/" ? "" : route}`,
    lastModified,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: priorityFor(route),
  }));
}
