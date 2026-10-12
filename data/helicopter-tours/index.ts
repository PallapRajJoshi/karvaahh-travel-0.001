/* ============================================================
   HELICOPTER TOURS — REGISTRY
   ------------------------------------------------------------
   Every destination page at /activities/helicopter-tours/<slug>
   is generated from this registry by one template
   (components/activities/helicopter-tours/HelicopterTourPage).

   To add a destination:
   1. Create data/helicopter-tours/<slug>.ts (copy a similar one).
   2. Register it below and add a card to catalog.ts.
   No component code needs to change.
   ============================================================ */

import type { HelicopterTour } from "@/components/activities/experience/product-types";
import { annapurnaHelicopterTour } from "./annapurna";
import { everestBaseCampHelicopterTour } from "./everest-base-camp";
import { gosaikundaHelicopterTour } from "./gosaikunda";
import { kailashAerialDarshanTour } from "./kailash-aerial-darshan";
import { kailashMansarovarHelicopterTour } from "./kailash-mansarovar";
import { langtangHelicopterTour } from "./langtang";
import { manasluHelicopterTour } from "./manaslu";
import { mardiHimalHelicopterTour } from "./mardi-himal";
import { mountainScenicFlight } from "./mountain-scenic-flight";
import { muktinathHelicopterTour } from "./muktinath-temple";
import { raraHelicopterTour } from "./rara";
import { upperMustangHelicopterTour } from "./upper-mustang";

const TOURS: HelicopterTour[] = [
  upperMustangHelicopterTour,
  muktinathHelicopterTour,
  annapurnaHelicopterTour,
  mardiHimalHelicopterTour,
  gosaikundaHelicopterTour,
  everestBaseCampHelicopterTour,
  langtangHelicopterTour,
  manasluHelicopterTour,
  raraHelicopterTour,
  kailashMansarovarHelicopterTour,
  kailashAerialDarshanTour,
  mountainScenicFlight,
];

export const HELICOPTER_TOURS: Record<string, HelicopterTour> = Object.fromEntries(TOURS.map((t) => [t.slug, t]));

export const HELICOPTER_TOUR_SLUGS = TOURS.map((t) => t.slug);

/** Short URLs that permanently redirect to a destination page. */
export const HELICOPTER_TOUR_ALIASES: Record<string, string> = {
  everest: "everest-base-camp",
};

export const getHelicopterTour = (slug: string): HelicopterTour | undefined => HELICOPTER_TOURS[slug];

export const listHelicopterTours = () => TOURS;
