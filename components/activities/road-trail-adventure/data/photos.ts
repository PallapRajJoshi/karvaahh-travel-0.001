/**
 * Photo registry.
 *
 * No verified photography ships with this page. Every image slot in the data
 * files names a `file`; a slot renders as a neutral landscape placeholder until
 * its filename is listed here.
 *
 * To go live with a photo:
 *   1. Save it to public/images/road-trail-adventure/<file>
 *   2. Add "<file>" to AVAILABLE_PHOTOS below
 *
 * Only add a photo that genuinely shows the named place and activity. See the
 * README image manifest for what each slot must depict.
 */
export const IMAGE_BASE = "/images/road-trail-adventure";

export const AVAILABLE_PHOTOS: ReadonlySet<string> = new Set<string>([
  // "hero-himalayan-highway.jpg",
]);

/** Optional social share image. Only emitted in metadata once it is listed above. */
export const OG_IMAGE_FILE = "og-road-trail-adventure.jpg";
