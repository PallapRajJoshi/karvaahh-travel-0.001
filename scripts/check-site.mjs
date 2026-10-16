#!/usr/bin/env node
/**
 * Site health check: run with `npm run check:site`.
 *
 * Reports
 *   1. Internal links (href="/...") that match no page and no redirect.
 *   2. Local images (/images/..., /videos/...) referenced in code but missing from /public.
 *
 * It only reads files — nothing is changed. Exit code 1 when problems are found.
 * Template-literal links (`/x/${slug}`) can't be resolved statically and are skipped.
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const SCAN_DIRS = ["app", "components", "lib", "data", "content"];
const CODE_EXT = /\.(tsx?|jsx?|mdx?|css)$/;

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (CODE_EXT.test(e.name)) out.push(p);
  }
  return out;
}

/* ---------- routes that exist ---------- */
const routes = new Set();
const dynamicPrefixes = [];
(function collect(dir, route) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  if (entries.some((e) => e.isFile() && /^page\.(tsx|ts|jsx|js|mdx)$/.test(e.name))) routes.add(route || "/");
  for (const e of entries) {
    if (!e.isDirectory() || e.name.startsWith("_") || e.name.startsWith("@")) continue;
    if (/^\[.+\]$/.test(e.name)) {
      dynamicPrefixes.push(`${route}/`);
      continue;
    }
    const seg = /^\(.+\)$/.test(e.name) ? "" : `/${e.name}`;
    collect(path.join(dir, e.name), route + seg);
  }
})(path.join(ROOT, "app"), "");

/* ---------- redirect sources (lib/route-redirects.ts) ---------- */
const redirectSrc = fs.readFileSync(path.join(ROOT, "lib/route-redirects.ts"), "utf8");
const exactRedirects = new Set();
const groupRedirects = [];
for (const [, source] of redirectSrc.matchAll(/^\s*"(\/[^"]*)":\s*"/gm)) {
  if (source.includes("/:")) groupRedirects.push(source.slice(0, source.indexOf("/:") + 1));
  else exactRedirects.add(source);
}

const resolves = (href) =>
  routes.has(href) ||
  exactRedirects.has(href) ||
  dynamicPrefixes.some((p) => href.startsWith(p) && href.length > p.length) ||
  groupRedirects.some((p) => href.startsWith(p) && href.length > p.length);

/* ---------- scan ---------- */
const brokenLinks = new Map();
const missingAssets = new Map();
const add = (map, key, where) => map.set(key, [...(map.get(key) ?? []), where]);

for (const file of SCAN_DIRS.flatMap((d) => walk(path.join(ROOT, d)))) {
  const rel = path.relative(ROOT, file).replaceAll("\\", "/");
  const lines = fs.readFileSync(file, "utf8").split("\n");
  lines.forEach((line, i) => {
    if (/^\s*(\/\/|\*|\/\*)/.test(line)) return; // commented-out examples
    const where = `${rel}:${i + 1}`;
    // Matches href=, href: and keys like detailsHref: / categoryHref:
    for (const m of line.matchAll(/\b(?:href|[a-z][A-Za-z]*Href)(?:=|:)\s*\{?\s*["'`](\/[^"'`#?\s]*)["'`]/g)) {
      let href = m[1];
      if (href.includes("${")) continue;
      if (href.length > 1) href = href.replace(/\/$/, "");
      if (/\.[a-z0-9]{2,5}$/i.test(href)) continue; // files such as /brochure.pdf
      if (!resolves(href)) add(brokenLinks, href, where);
    }
    for (const m of line.matchAll(/["'`(](\/(?:images|videos)\/[^"'`)\s]+?\.(?:jpe?g|png|webp|avif|gif|svg|mp4|webm))["'`)]/gi)) {
      if (m[1].includes("${")) continue;
      if (!fs.existsSync(path.join(ROOT, "public", decodeURI(m[1])))) add(missingAssets, m[1], where);
    }
  });
}

/* ---------- report ---------- */
const print = (title, map) => {
  console.log(`\n${title}: ${map.size}`);
  for (const [key, places] of [...map].sort()) {
    console.log(`  ${key}`);
    for (const p of places.slice(0, 3)) console.log(`      ${p}`);
    if (places.length > 3) console.log(`      … +${places.length - 3} more`);
  }
};

console.log(`Pages: ${routes.size}  ·  Redirects: ${exactRedirects.size + groupRedirects.length}`);
print("Broken internal links", brokenLinks);
print("Missing images / videos", missingAssets);
process.exitCode = brokenLinks.size || missingAssets.size ? 1 : 0;
