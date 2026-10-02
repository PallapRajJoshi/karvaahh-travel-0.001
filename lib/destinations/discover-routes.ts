import "server-only";

import fs from "node:fs";
import path from "node:path";
import { cache } from "react";
import { DESTINATIONS, KNOWN_PAGES } from "./data";
import { PROVINCES } from "./taxonomy";
import { IMAGE_DIR, IMAGE_OVERRIDES, ROUTE_OVERRIDES, ROUTE_PREFIX_PRIORITY } from "./routes";
import type { ProvinceId, ResolveContext } from "./types";

/*
 * This module only runs at build time to discover which pages and images exist.
 * The turbopackIgnore markers stop the bundler from tracing the whole project
 * into the server output because of these deliberately dynamic file-system reads.
 */
const PAGE_FILE = /^page\.(tsx|ts|jsx|js|mdx)$/;
const IMAGE_EXT = ["avif", "webp", "jpg", "jpeg", "png"];

function appRoots(): string[] {
  const cwd = process.cwd();
  return [path.join(cwd, "app"), path.join(cwd, "src", "app")].filter((p) => fs.existsSync(/*turbopackIgnore: true*/ p));
}

interface RouteScan {
  /** every static page path, e.g. "/offbeat-unexplored/rara-lake" */
  staticPaths: Set<string>;
  /** does app/destinations/[something]/page exist (province pages)? */
  hasDynamicProvinceRoute: boolean;
}

function scanApp(): RouteScan {
  const staticPaths = new Set<string>();
  let hasDynamicProvinceRoute = false;

  const walk = (dir: string, segments: string[], dynamic: boolean) => {
    let entries: fs.Dirent[];
    try {
      entries = fs.readdirSync(/*turbopackIgnore: true*/ dir, { withFileTypes: true });
    } catch {
      return;
    }
    if (entries.some((e) => e.isFile() && PAGE_FILE.test(e.name))) {
      const url = "/" + segments.join("/");
      if (!dynamic) staticPaths.add(url === "/" ? "/" : url);
      if (segments.length === 2 && segments[0] === "destinations" && /^\[[^.\]]+\]$/.test(segments[1])) {
        hasDynamicProvinceRoute = true;
      }
    }
    for (const e of entries) {
      if (!e.isDirectory()) continue;
      const name = e.name;
      if (name.startsWith("_") || name.startsWith("@") || name.startsWith("(.")) continue;
      // Route groups "(marketing)" do not appear in the URL.
      const isGroup = /^\(.+\)$/.test(name);
      const isDynamic = /^\[.*\]$/.test(name);
      walk(path.join(dir, name), isGroup ? segments : [...segments, name], dynamic || isDynamic);
    }
  };

  for (const root of appRoots()) walk(root, [], false);
  return { staticPaths, hasDynamicProvinceRoute };
}

function slugify(s: string): string {
  return s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function priority(url: string): number {
  const i = ROUTE_PREFIX_PRIORITY.findIndex((p) => url.startsWith(p));
  return i === -1 ? ROUTE_PREFIX_PRIORITY.length : i;
}

function findImage(publicDir: string, base: string): string | undefined {
  for (const ext of IMAGE_EXT) {
    const rel = `${IMAGE_DIR}/${base}.${ext}`;
    if (fs.existsSync(/*turbopackIgnore: true*/ path.join(publicDir, rel))) return `/${rel}`;
  }
  return undefined;
}

export interface HubContext extends ResolveContext {
  provinceRoutes: Partial<Record<ProvinceId, string>>;
  knownPages: { href: string; label: string; blurb: string }[];
  /** Hero / OG images if supplied (images["_hero"], images["_og"]). */
  hero?: string;
  og?: string;
}

/**
 * Resolves, once per build/request, which destinations have pages and images.
 * Cached per render pass; the page itself is statically generated.
 */
export const getHubContext = cache((): HubContext => {
  const { staticPaths, hasDynamicProvinceRoute } = scanApp();

  // --- routes -------------------------------------------------------------
  const bySegment = new Map<string, string[]>();
  for (const url of staticPaths) {
    const last = url.split("/").filter(Boolean).pop();
    if (!last || url === "/destinations") continue;
    bySegment.set(last, [...(bySegment.get(last) ?? []), url]);
  }

  const routes: Record<string, string> = {};
  for (const d of DESTINATIONS) {
    const keys = [d.slug, slugify(d.name), ...d.aliases.map(slugify)];
    const hits = keys.flatMap((k) => bySegment.get(k) ?? []);
    if (hits.length) routes[d.slug] = [...new Set(hits)].sort((a, b) => priority(a) - priority(b))[0];
  }
  for (const [slug, href] of Object.entries(ROUTE_OVERRIDES)) {
    const pagePath = href.split(/[?#]/)[0];
    if (staticPaths.has(pagePath)) routes[slug] = href;
    else if (process.env.NODE_ENV !== "test") {
      console.warn(`[destinations] ROUTE_OVERRIDES["${slug}"] → ${href} not found in app/, ignoring`);
    }
  }

  const provinceRoutes: HubContext["provinceRoutes"] = {};
  for (const p of PROVINCES) {
    const href = `/destinations/${p.routeSlug}`;
    if (hasDynamicProvinceRoute || staticPaths.has(href)) provinceRoutes[p.id] = href;
  }

  const knownPages = KNOWN_PAGES.filter((k) => staticPaths.has(k.href));

  // --- images -------------------------------------------------------------
  const publicDir = path.join(process.cwd(), "public");
  const images: Record<string, string> = {};
  for (const d of DESTINATIONS) {
    const found = findImage(publicDir, d.slug);
    if (found) images[d.slug] = found;
  }
  for (const [key, rel] of Object.entries(IMAGE_OVERRIDES)) {
    if (fs.existsSync(/*turbopackIgnore: true*/ path.join(publicDir, rel))) images[key] = rel;
  }
  for (const key of ["country-nepal", "country-india", "country-international", ...PROVINCES.map((p) => `province-${p.id}`)]) {
    const found = findImage(publicDir, key);
    if (found) images[key] = found;
  }

  if (process.env.NEXT_PHASE === "phase-production-build") {
    const linked = Object.keys(routes).length;
    console.info(
      `[destinations] ${linked} of ${DESTINATIONS.length} destinations link to an existing page, ` +
        `${Object.keys(images).length} images found, ${Object.keys(provinceRoutes).length}/${PROVINCES.length} province pages found`,
    );
  }

  return {
    routes,
    images,
    provinceRoutes,
    knownPages,
    hero: findImage(publicDir, "hero"),
    og: findImage(publicDir, "og"),
  };
});
