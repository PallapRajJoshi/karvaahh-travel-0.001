// data/south-africa/content.ts
// Page-level copy: hero, why Karvaahh, FAQs and internal links. Answers are
// careful by design: no guarantees on wildlife, availability or visas.

import type { WhyItem } from "@/components/packages/international/asia/WhyKarvaahh";
import { SA_LINKS } from "@/lib/south-africa/config";
import type { SAImageId } from "./images";

export const saHero = {
  eyebrow: "South Africa Tour Packages · Karvaahh – Live to Travel",
  title: "Discover South Africa",
  titleAccent: "Where Wild Meets Wonderful",
  lede: "From Cape Town's iconic landscapes and spectacular Winelands to Big Five safaris, dramatic coastlines and unforgettable road trips, experience South Africa with Karvaahh.",
  background: "ct-aerial-wide" as SAImageId,
  /** Layered depth cards over the hero photo: Cape Town × safari × Winelands × coast. */
  layers: [
    { id: "lion-portrait" as SAImageId, caption: "Kruger" },
    { id: "vineyard-mountain" as SAImageId, caption: "Winelands" },
    { id: "elephant-road" as SAImageId, caption: "Big Five safari" },
    { id: "knysna-heads" as SAImageId, caption: "Garden Route" },
  ],
  route: ["Cape Town", "Winelands", "Garden Route", "Kruger"],
  facts: [
    { k: "Ideal trip", v: "8–12 nights" },
    { k: "Safari", v: "Kruger · Sabi Sand" },
    { k: "Gateways", v: "Johannesburg · Cape Town" },
  ],
};

export const whySA: readonly WhyItem[] = [
  { icon: "local", title: "Nepal & India-based support", text: "International travel assistance from teams in Nepal and India." },
  { icon: "route", title: "Customized itineraries", text: "Cities, coast and safari combined around you." },
  { icon: "compass", title: "Safari planning", text: "Kruger, Sabi Sand, Pilanesberg or Addo, matched to your style." },
  { icon: "hotel", title: "Hotel & lodge selection", text: "From 4★ city hotels to ultra-luxury lodges." },
  { icon: "plane", title: "Flight assistance", text: "International and domestic flights coordinated." },
  { icon: "passport", title: "Visa & document guidance", text: "Where available, with no approval guarantees." },
  { icon: "car", title: "Transfers & domestic travel", text: "Airport transfers, chauffeurs and self-drive." },
  { icon: "users", title: "Family, honeymoon & groups", text: "Private tours and group departures where available." },
  { icon: "headset", title: "Journey support", text: "One team to call from first idea to flight home." },
];

export const saFaqs: { question: string; answer: string }[] = [
  { question: "How can I plan a South Africa trip from Nepal?", answer: "Most travellers fly from Kathmandu via one or more international hubs to Johannesburg or Cape Town. Karvaahh plans the routing, domestic flights, hotels, safari and transfers, and can guide you on visa documents where offered." },
  { question: "How can I plan a South Africa trip from India?", answer: "From Delhi, Mumbai, Bengaluru, Kolkata and other cities, you typically fly to Johannesburg or Cape Town, with connections depending on dates and airline. We coordinate flights, hotels, safari and domestic travel around your preferences." },
  { question: "How many days are needed for South Africa?", answer: "Cape Town alone works well in 4–5 nights. Cape Town plus a safari typically needs 7–9 nights, and adding the Garden Route or Winelands usually brings a trip to 10–14 nights." },
  { question: "What is the best time for a safari?", answer: "The dry winter months (typically June to September) often make game viewing easier as vegetation thins and animals gather near water. Summer is green, with newborn animals and excellent birding. Sightings vary in every season." },
  { question: "Where can I experience a Big Five safari?", answer: "Kruger National Park, private reserves such as Sabi Sand, and the malaria-free Pilanesberg are popular Big Five areas. All five can be present, but encounters are never guaranteed." },
  { question: "Is Kruger suitable for families?", answer: "Yes, with planning. Many lodges welcome families but set minimum ages for game drives, and parts of the Kruger region are malaria areas. Malaria-free alternatives include Pilanesberg and Addo." },
  { question: "What is the difference between Kruger and Sabi Sand?", answer: "Kruger is a national park with rest camps, lodges and both guided and self-drive game viewing. Sabi Sand is a private reserve sharing an unfenced boundary with Kruger, where lodges run their own drives, often with off-road tracking where permitted, typically at a higher price point." },
  { question: "Can I combine Cape Town with a safari?", answer: "Yes. It's the most popular combination: a few nights in Cape Town, then a domestic flight to the Kruger area or another safari region." },
  { question: "Can I add the Garden Route?", answer: "Yes. The Garden Route fits naturally after Cape Town as a 3–5 night road trip, by self-drive or private chauffeur, and can end at Addo for a malaria-free safari." },
  { question: "Can I include the Winelands?", answer: "Yes. Stellenbosch and Franschhoek are under an hour from Cape Town and work as a day trip or a 1–2 night estate stay." },
  { question: "Are safari sightings guaranteed?", answer: "No. Wildlife sightings are naturally unpredictable. Experienced rangers improve your chances, but no sighting can be guaranteed." },
  { question: "Are safari lodge meals included?", answer: "Many safari lodges include meals and game drives in their rates, but policies vary. Your quote states exactly what each property includes." },
  { question: "Are domestic flights included?", answer: "Only if your quote says so. Domestic flights are itemised separately so you can see exactly what you are paying for." },
  { question: "Can I customize my South Africa itinerary?", answer: "Yes. Every package is a starting template. Change the destinations, length, hotels, safari style and pace, or use the trip builder to start from scratch." },
  { question: "Can Karvaahh help with visa documentation?", answer: "Karvaahh can provide visa guidance and document preparation assistance where offered. Visa approval and appointment availability rest with the authorities and cannot be guaranteed." },
  { question: "Is South Africa suitable for a honeymoon?", answer: "Very. Couples often combine Cape Town, a Winelands estate and a safari lodge, with private transfers and sunset experiences." },
  { question: "Is South Africa suitable for family travel?", answer: "Yes. Penguins, beaches, malaria-free safaris and resort stays make it a strong family destination when itineraries are kept manageable." },
  { question: "Can I arrange a private safari?", answer: "Yes, where lodges or operators offer it: private vehicles, guides or exclusive-use options can be arranged subject to availability." },
  { question: "Can I arrange luxury safari lodges?", answer: "Yes. We can propose luxury and ultra-luxury lodges in Kruger's private concessions and Sabi Sand, confirmed on availability." },
];

export const saInternalLinks = [
  { label: "International tour packages", href: SA_LINKS.international },
  { label: "Africa travel packages", href: SA_LINKS.africa },
  { label: "Cape Town tour packages", href: SA_LINKS.capeTown },
  { label: "Kruger safari packages", href: SA_LINKS.kruger },
  { label: "Garden Route tours", href: SA_LINKS.gardenRoute },
  { label: "Honeymoon packages", href: SA_LINKS.honeymoon },
  { label: "Family tour packages", href: SA_LINKS.family },
  { label: "Luxury tours", href: SA_LINKS.luxury },
  { label: "Visa assistance services", href: SA_LINKS.visa },
  { label: "International flight booking", href: SA_LINKS.flights },
  { label: "Antarctica expeditions", href: SA_LINKS.antarctica },
  { label: "Europe tour packages", href: SA_LINKS.europe },
  { label: "USA tour packages", href: SA_LINKS.usa },
  { label: "Asia tour packages", href: SA_LINKS.asia },
];
