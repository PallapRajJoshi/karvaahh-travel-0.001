import { existsSync } from "node:fs";
import path from "node:path";
import { IMAGE_BASE_PATH } from "./config";
import { IMAGE_SPECS, type ImageKey } from "./images";
import type { ArtRef, ResolvedImage } from "./types";

/**
 * Server-only (uses fs) – import from server components and the route file only.
 *
 * Returns the photo if the file exists in public/images/about/, otherwise null,
 * in which case <Pic> draws the built-in mountain illustration. This keeps the page
 * complete and shippable while photography is still being collected, and upgrades
 * itself the moment a file is dropped in.
 */
export function resolveImage(key: ImageKey): ResolvedImage | null {
  const spec = IMAGE_SPECS[key];
  const absolute = path.join(process.cwd(), "public", ...IMAGE_BASE_PATH.split("/").filter(Boolean), spec.file);
  if (!existsSync(absolute)) return null;
  return {
    src: `${IMAGE_BASE_PATH}/${spec.file}`,
    alt: spec.alt,
    focal: "focal" in spec && spec.focal ? spec.focal : "50% 50%",
  };
}

export function artFor(key: ImageKey): ArtRef {
  const spec = IMAGE_SPECS[key];
  return { tone: spec.art, seed: spec.seed };
}
