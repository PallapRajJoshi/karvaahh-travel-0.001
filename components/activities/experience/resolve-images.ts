import "server-only";
import fs from "node:fs";
import path from "node:path";

/**
 * Replaces every local image whose file is not in /public with `src: null`,
 * so the page renders a designed placeholder instead of a broken image.
 * Planned photos therefore appear automatically once the file is added —
 * no data change needed. A missing `ogImage` is removed entirely.
 *
 * Runs on the server at build/render time only.
 */
const cache = new Map<string, boolean>();

function exists(src: string) {
  let hit = cache.get(src);
  if (hit === undefined) {
    hit = fs.existsSync(path.join(process.cwd(), "public", decodeURIComponent(src)));
    cache.set(src, hit);
  }
  return hit;
}

function walk(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(walk);
  if (!value || typeof value !== "object") return value;
  const obj = value as Record<string, unknown>;
  const out: Record<string, unknown> = {};
  for (const [key, v] of Object.entries(obj)) {
    if (key === "ogImage" && v && typeof v === "object") {
      const src = (v as { src?: unknown }).src;
      if (typeof src === "string" && src.startsWith("/") && !exists(src)) continue;
    }
    out[key] = walk(v);
  }
  if (typeof out.src === "string" && out.src.startsWith("/") && "alt" in out && !exists(out.src)) out.src = null;
  return out;
}

export function resolveImages<T>(data: T): T {
  return walk(data) as T;
}
