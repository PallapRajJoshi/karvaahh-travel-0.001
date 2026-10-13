import { NEPAL_JOURNEY } from "@/data/journey/nepalJourney";
import { annapurnaHelicopterTour } from "@/data/helicopter-tours/annapurna";
import { upperMustangHelicopterTour } from "@/data/helicopter-tours/upper-mustang";
import type { HelicopterTour } from "@/components/activities/experience/product-types";
import { enquiryHref, links } from "./content";
import type { Getaway, GetawayGroup } from "./groups";
import { GROUP_LABEL } from "./groups";

/**
 * Couple getaways shown in "Find Your Perfect Couple Getaway".
 *
 * Karvaahh has no dedicated couple / honeymoon package records yet
 * (see data/packages/packages.ts), so this list is built from products that
 * already have a live page. Facts are read from those products' own data
 * wherever it exists (journey nights, helicopter duration and inclusions),
 * so this page can't drift from them.
 *
 *  - `duration` / `inclusions` are null when the source page doesn't state them.
 *  - `price` is always a request label: no prices are published for these.
 */

/* ---------- derived from the classic Nepal Journey (/journey) ---------- */

// Lumbini is a pilgrimage stop rather than a couple highlight, but it is part of
// the published route, so the totals keep it.
const journeyNights = NEPAL_JOURNEY.reduce((sum, stop) => sum + stop.nights, 0);
const journeyNote = (id: string) => NEPAL_JOURNEY.find((s) => s.id === id)?.notes[0];

const classicJourney: Getaway = {
  id: "classic-nepal-journey",
  title: "The Classic Nepal Journey",
  kind: "Multi-stop journey",
  groups: ["mountain", "lakeside", "cultural"],
  image: {
    src: "/images/gandaki/bandipur-ghandruk-heritage-hill-villages-gandaki-nepal.jpg",
    alt: "Heritage hill village in Gandaki with terraced hillsides",
  },
  duration: `${journeyNights} nights on the typical route`,
  destinations: NEPAL_JOURNEY.map((s) => s.name),
  highlights: [journeyNote("nagarkot"), journeyNote("pokhara"), journeyNote("chitwan")].filter(
    (n): n is string => Boolean(n),
  ),
  inclusions: null,
  price: "Quote on request",
  primary: { label: "Explore the Journey", href: links.journey },
  enquire: { label: "Enquire Now", href: enquiryHref("Classic Nepal Journey") },
};

/* ---------- derived from helicopter tour records ---------- */

function fromHelicopter(
  tour: HelicopterTour,
  extra: Pick<Getaway, "id" | "groups" | "image" | "highlights">,
): Getaway {
  return {
    ...extra,
    title: tour.title,
    kind: "Experience",
    duration: tour.duration,
    destinations: [tour.startingPoint, tour.region].filter(Boolean),
    inclusions: tour.inclusions.filter((i) => i.status === "included").map((i) => i.text),
    price: "Price on request",
    primary: { label: "Explore Package", href: tour.path },
    enquire: { label: "Enquire Now", href: enquiryHref(tour.title) },
  };
}

const annapurnaHeli = fromHelicopter(annapurnaHelicopterTour, {
  id: "annapurna-helicopter",
  groups: ["luxury", "adventure", "mountain"],
  image: {
    src: "/images/home/annapurna-view.jpg",
    alt: "The Annapurna range under clear skies",
  },
  highlights: [
    "Aerial views of Annapurna, Machhapuchhre and Hiunchuli",
    "Private charter option for couples",
    "Landing near Annapurna Base Camp when weather allows",
  ],
});

const mustangHeli = fromHelicopter(upperMustangHelicopterTour, {
  id: "upper-mustang-helicopter",
  groups: ["luxury", "adventure"],
  image: {
    src: "/images/gandaki/lo-manthang-walled-city-upper-mustang-gandaki-nepal.jpg",
    alt: "The walled city of Lo Manthang in Upper Mustang",
  },
  highlights: [
    "Through the Kali Gandaki corridor",
    "High desert valleys and cliff villages",
    "Lo Manthang, with landings only where permitted",
  ],
});

/* ---------- experiences with their own pages ---------- */

export const getaways: Getaway[] = [
  classicJourney,
  {
    id: "pokhara-lakeside",
    title: "Phewa Lake Boating, Pokhara",
    kind: "Experience",
    groups: ["lakeside"],
    image: {
      src: "/images/home/pokhara-phewa-lake.jpg",
      alt: "Wooden boats on Phewa Lake in Pokhara",
    },
    duration: null,
    destinations: ["Pokhara", "Phewa Lake"],
    highlights: ["Row out to Tal Barahi temple", "Annapurna reflections on calm mornings", "Easy to add to any Pokhara stay"],
    inclusions: null,
    price: "Price on request",
    primary: { label: "Explore Experience", href: links.boating },
    enquire: { label: "Enquire Now", href: enquiryHref("Pokhara lakeside getaway") },
  },
  annapurnaHeli,
  {
    id: "pokhara-paragliding",
    title: "Paragliding in Pokhara",
    kind: "Experience",
    groups: ["adventure", "lakeside"],
    image: {
      src: "/images/home/pokhara.jpg",
      alt: "Pokhara and Phewa Lake seen from the hills above the valley",
    },
    duration: null,
    destinations: ["Sarangkot", "Pokhara"],
    highlights: [journeyNote("pokhara") ?? "Launches from Sarangkot", "Views over Phewa Lake", "Weather dependent"],
    inclusions: null,
    price: "Price on request",
    primary: { label: "Explore Experience", href: links.paragliding },
    enquire: { label: "Enquire Now", href: enquiryHref("Paragliding in Pokhara for two") },
  },
  {
    id: "chitwan-wildlife",
    title: "Chitwan Wildlife & Nature",
    kind: "Experience",
    groups: ["adventure", "cultural"],
    image: {
      src: "/images/home/chitwan-view.jpg",
      alt: "Riverside forest in Chitwan National Park",
    },
    duration: null,
    destinations: ["Chitwan National Park"],
    highlights: [
      journeyNote("chitwan") ?? "Canoe and jungle walks",
      "Greater one-horned rhino habitat",
      "Tharu villages on the park edge",
    ],
    inclusions: null,
    price: "Price on request",
    primary: { label: "Explore Experience", href: links.wildlife },
    enquire: { label: "Enquire Now", href: enquiryHref("Chitwan couple trip") },
  },
  mustangHeli,
  {
    id: "mustang-circuit",
    title: "Mustang Circuit Trek",
    kind: "Multi-stop journey",
    groups: ["adventure", "mountain", "cultural"],
    image: {
      src: "/images/gandaki/kagbeni-ancient-walled-settlement-mustang-gandaki-nepal.jpg",
      alt: "The ancient walled settlement of Kagbeni in Mustang",
    },
    duration: "Planned around your dates and fitness",
    destinations: ["Jomsom", "Kagbeni", "Mustang"],
    highlights: ["High desert landscapes", "Walled villages and monasteries", "Non-technical trekking"],
    inclusions: null,
    price: "Quote on request",
    primary: { label: "Explore Package", href: links.mustangTrek },
    enquire: { label: "Enquire Now", href: enquiryHref("Mustang trip for two") },
  },
  {
    id: "custom-honeymoon",
    title: "Customized Nepal Honeymoon",
    kind: "Tailor-made",
    groups: ["honeymoon", "custom", "luxury"],
    image: {
      src: "/images/gandaki/sarangkot-sunrise-annapurna-mountain-view-kaski-nepal.jpg",
      alt: "Sunrise over the Annapurna range from Sarangkot",
    },
    duration: "Your dates",
    destinations: ["Your choice of destinations"],
    highlights: ["Route and pace built around you", "Your preferred style of stay", "Special arrangements on request"],
    inclusions: null,
    price: "Quote on request",
    primary: { label: "Enquire Now", href: enquiryHref("Customized Nepal honeymoon") },
    enquire: { label: "Contact Us", href: links.contact },
  },
];

/** Groups in display order, dropping any group that has no getaways. */
export const getawayGroups = (Object.keys(GROUP_LABEL) as GetawayGroup[]).filter((g) =>
  getaways.some((item) => item.groups.includes(g)),
);
