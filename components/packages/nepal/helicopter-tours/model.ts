import "server-only";
import type { HelicopterTour, RouteStop } from "@/components/activities/experience/product-types";
import type { PageImage } from "@/components/activities/experience/types";
import { formatPrice } from "@/components/activities/experience/format";
import { resolveImages } from "@/components/activities/experience/resolve-images";
import { HELICOPTER_CATALOG, type CatalogSlug } from "@/data/helicopter-tours/catalog";
import { FEATURED_PACKAGES, HUB_TOURS, PRIVATE_CHARTER, type HubCategory } from "@/data/helicopter-tours/nepal-hub";

/** A serialisable experience card: every fact is derived from the tour's own data file. */
export type HubCard = {
  id: string;
  title: string;
  text: string;
  tags: string[];
  categories: HubCategory[];
  image: PageImage;
  aircraft: string;
  region: string;
  from: string;
  duration: string;
  landing: string;
  arrangement: string;
  price: string;
  highlights: string[];
  /** Tour page; absent when the card only opens the enquiry form. */
  href?: string;
  enquiryType: string;
};

export type HubPackage = HubCard & {
  stops: Pick<RouteStop, "name" | "detail" | "mode" | "elevation">[];
  inclusions: string[];
  options: { name: string; basis: string; price: string }[];
  landingNote: string;
};

const PRICE_ON_REQUEST = "Price on Request";

/** The stops between departure and return. */
const enRoute = (t: HelicopterTour) => t.route.stops.slice(1, -1);

function landing(t: HelicopterTour) {
  return enRoute(t).some((s) => s.mode === "landing" || s.mode === "optional") ? "Landing where permitted" : "Aerial sightseeing only";
}

function arrangement(t: HelicopterTour) {
  const bases = t.options.items.map((o) => o.basis.toLowerCase());
  const shared = bases.some((b) => /per (person|seat)/.test(b));
  const priv = bases.some((b) => /private|charter/.test(b));
  if (shared && priv) return "Shared or private";
  if (priv) return "Private";
  return "Shared seat";
}

function price(t: HelicopterTour) {
  return t.options.items.map((o) => formatPrice(o.pricing)).find(Boolean) ?? PRICE_ON_REQUEST;
}

function toCard({ tour: t, text, tags, categories, aircraft, image }: (typeof HUB_TOURS)[number]): HubCard {
  const catalog = HELICOPTER_CATALOG[t.slug as CatalogSlug] as (typeof HELICOPTER_CATALOG)[CatalogSlug] | undefined;
  return {
    id: t.slug,
    title: t.title,
    text,
    tags,
    categories,
    image: image ?? catalog?.image ?? t.hero.image,
    aircraft: aircraft ?? "Helicopter",
    region: catalog?.region ?? t.region,
    from: t.startingPoint,
    duration: t.duration,
    landing: landing(t),
    arrangement: arrangement(t),
    price: price(t),
    highlights: enRoute(t)
      .map((s) => s.name)
      .slice(0, 3),
    href: t.path,
    enquiryType: t.title,
  };
}

/** Every experience card, including the private charter, with missing photos resolved. */
export function hubCards(): HubCard[] {
  const charter: HubCard = { ...PRIVATE_CHARTER, aircraft: "Helicopter", price: PRICE_ON_REQUEST, highlights: ["Route of your choice", "Private cabin", "Multi-region itineraries"] };
  return resolveImages([...HUB_TOURS.map(toCard), charter]);
}

/** Full package cards for the flagship tours. */
export function hubPackages(): HubPackage[] {
  return resolveImages(
    FEATURED_PACKAGES.map((slug) => {
      const entry = HUB_TOURS.find((e) => e.tour.slug === slug);
      if (!entry) throw new Error(`Featured package not in HUB_TOURS: ${slug}`);
      const t = entry.tour;
      return {
        ...toCard(entry),
        stops: enRoute(t).map(({ name, detail, mode, elevation }) => ({ name, detail, mode, elevation })),
        inclusions: t.inclusions.filter((i) => i.status === "included").map((i) => i.text),
        options: t.options.items.map((o) => ({ name: o.name, basis: o.basis, price: formatPrice(o.pricing) ?? o.price })),
        landingNote: t.landingNote,
      };
    }),
  );
}
