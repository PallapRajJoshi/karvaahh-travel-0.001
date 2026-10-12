// data/antarctica/extensions.ts
// Optional South America extensions. These are configurable products: set
// `active: false` for any Karvaahh does not currently offer and it disappears
// from the page (including from honeymoon cards that reference it).

import type { AntarcticaImageId } from "./images";

export interface PolarExtension {
  id: string;
  title: string;
  country: string;
  image: AntarcticaImageId;
  text: string;
  ideas: string[];
  typicalNights: string;
  /** Future dedicated page, linked only when live. */
  href?: string;
  active: boolean;
}

export const extensions: PolarExtension[] = [
  {
    id: "ushuaia",
    title: "Antarctica + Ushuaia",
    country: "Argentina",
    image: "ushuaia-peak",
    text: "Extra nights at the end of the world: the Beagle Channel and Tierra del Fuego National Park.",
    ideas: ["Beagle Channel boat trip", "Tierra del Fuego National Park", "A buffer day before embarkation"],
    typicalNights: "1–3 nights",
    active: true,
  },
  {
    id: "buenos-aires",
    title: "Antarctica + Buenos Aires",
    country: "Argentina",
    image: "buenos-aires",
    text: "Tango, grand avenues and a soft landing after a long-haul flight.",
    ideas: ["City and neighbourhood touring", "Evening tango show", "Recovery days after the flight"],
    typicalNights: "2–4 nights",
    href: "/packages/international/argentina",
    active: true,
  },
  {
    id: "patagonia",
    title: "Antarctica + Patagonia",
    country: "Argentina & Chile",
    image: "perito-moreno",
    text: "Glaciers, granite peaks and wide steppe, from El Calafate to Torres del Paine.",
    ideas: ["Perito Moreno Glacier", "Torres del Paine", "Estancia stays"],
    typicalNights: "3–6 nights",
    href: "/packages/international/patagonia",
    active: true,
  },
  {
    id: "chile",
    title: "Antarctica + Chile",
    country: "Chile",
    image: "torres-del-paine",
    text: "Pairs naturally with air-cruise departures from Punta Arenas.",
    ideas: ["Santiago and the wine valleys", "Torres del Paine", "Punta Arenas"],
    typicalNights: "3–6 nights",
    href: "/packages/international/chile",
    active: true,
  },
  {
    id: "argentina",
    title: "Antarctica + Argentina",
    country: "Argentina",
    image: "buenos-aires-night",
    text: "A wider Argentina journey: Buenos Aires, Iguazú, Patagonia and more.",
    ideas: ["Iguazú Falls", "Mendoza wine country", "Salta and the north"],
    typicalNights: "5+ nights",
    href: "/packages/international/argentina",
    active: true,
  },
];

export const activeExtensions = extensions.filter((e) => e.active);
export const extensionById = (id: string) => activeExtensions.find((e) => e.id === id);
