/**
 * Single source of truth for adventure-activity routes.
 *
 * `available` marks pages that exist in the project today. Data stays
 * route-ready for the rest, but the UI renders those as plain text instead of
 * a dead link. Flip `available` to true the moment a page ships — nothing else
 * needs to change.
 */

export type ActivityKey =
  | "paragliding"
  | "ultra-light"
  | "hot-air-balloon"
  | "bungee"
  | "skydiving"
  | "zipline"
  | "rafting"
  | "boating"
  | "kayaking"
  | "camping";

export interface ActivityRoute {
  label: string;
  href: string;
  available: boolean;
}

export const ACTIVITY_ROUTES: Record<ActivityKey, ActivityRoute> = {
  paragliding: {
    label: "Paragliding",
    href: "/activities/adventure/paragliding",
    available: true,
  },
  "ultra-light": {
    label: "Ultra-Light Flight",
    href: "/activities/adventure/ultra-light-flight",
    available: true,
  },
  "hot-air-balloon": {
    label: "Hot Air Balloon",
    href: "/activities/adventure/hot-air-balloon",
    available: false,
  },
  bungee: {
    label: "Bungee Jumping",
    href: "/activities/adventure/bungee-jumping",
    available: false,
  },
  skydiving: {
    label: "Skydiving",
    href: "/activities/adventure/skydiving",
    available: false,
  },
  zipline: {
    label: "Zipline",
    href: "/activities/adventure/zip-flying",
    available: false,
  },
  rafting: {
    label: "Rafting",
    href: "/activities/adventure/rafting",
    available: true,
  },
  boating: {
    label: "Boating",
    href: "/activities/adventure/boating",
    available: true,
  },
  kayaking: {
    label: "Kayaking",
    href: "/activities/adventure/kayaking",
    available: false,
  },
  camping: {
    label: "Camping",
    href: "/activities/adventure/camping",
    available: true,
  },
};

export function resolveActivity(key: ActivityKey): ActivityRoute {
  return ACTIVITY_ROUTES[key];
}
