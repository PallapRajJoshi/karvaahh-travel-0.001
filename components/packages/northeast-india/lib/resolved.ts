import "server-only";
import { resolveImages } from "@/components/activities/experience/resolve-images";
import { experiences, finalCta, hero, states } from "../data/content";
import { destinations } from "../data/destinations";
import { journeys } from "../data/journeys";

/**
 * Page data with every missing planned photo swapped for `src: null`, so the
 * sections render a designed placeholder instead of a broken image.
 * Checked once per server start / build; a newly added photo appears on the
 * next build.
 */
export const resolved = resolveImages({ hero, states, destinations, experiences, journeys, finalCta });
