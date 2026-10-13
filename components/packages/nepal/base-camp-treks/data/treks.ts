import type { Trek, TrekFilter } from "../types";
import { enquiryHref } from "../config";

/**
 * Base camp treks shown on /packages/nepal/base-camp-treks.
 *
 * Accuracy rules for this file:
 *  - Altitudes are commonly cited approximate figures ("≈"). Durations are typical
 *    ranges for the walking itinerary and change with route, pace and transport.
 *  - `href` is set ONLY when Karvaahh has a dedicated page for the trek. Everything
 *    else goes to the enquiry form, pre-filled with the trek name — never to an
 *    invented route.
 *  - Categories drive the filter bar; "high-altitude" means the route's highest
 *    point is above 5,000 m.
 */
export const treks: Trek[] = [
  {
    id: "everest",
    name: "Everest Base Camp Trek",
    region: "Khumbu · Koshi Province",
    summary:
      "The legendary Khumbu trail climbs through Sherpa villages, prayer-flag-draped suspension bridges and Tengboche Monastery to the foot of the Khumbu Icefall. Most itineraries add the pre-dawn climb to Kala Patthar for the clearest view of Everest’s summit.",
    tags: ["Mountain Panorama", "Sherpa Culture", "Glacier Views"],
    duration: "≈ 12–16 days",
    difficulty: "Strenuous",
    maxAltitude: "≈ 5,545 m",
    altitudeNote: "Kala Patthar · base camp ≈ 5,364 m",
    experience: "Classic teahouse trek",
    idealFor: "Fit trekkers ready for long days and nights above 4,000 m",
    categories: ["classic", "challenging", "high-altitude"],
    href: "/adventure/everest-base-camp-trek",
    image: {
      src: "/koshi/everest-base-camp.jpg",
      alt: "Everest, Nuptse and the Khumbu Glacier at dawn from above Gorakshep",
      focus: "28% 50%",
    },
  },
  {
    id: "annapurna",
    name: "Annapurna Base Camp Trek",
    region: "Annapurna Sanctuary · Gandaki Province",
    summary:
      "Climb from terraced Gurung villages such as Ghandruk and Chhomrong through bamboo and rhododendron forest into the Annapurna Sanctuary — a glacial amphitheatre ringed by Annapurna I, Annapurna South and Machhapuchhre.",
    tags: ["Mountain Panorama", "Forest Trails", "Cultural Trails"],
    duration: "≈ 7–12 days",
    difficulty: "Moderate",
    maxAltitude: "≈ 4,130 m",
    experience: "Teahouse trek into a mountain amphitheatre",
    idealFor: "First high-altitude trek with good stamina for stone steps",
    categories: ["classic", "moderate"],
    enquiryLabel: "Annapurna Base Camp Trek",
    related: { label: "Explore Gandaki Province", href: "/destinations/gandaki-province" },
    image: {
      src: "/koshi/everest.jpg",
      alt: "Trekker on a ridge trail facing Annapurna South and Machhapuchhre",
      focus: "40% 40%",
    },
  },
  {
    id: "mardi",
    name: "Mardi Himal Base Camp Trek",
    region: "Annapurna region · Gandaki Province",
    summary:
      "A shorter ridge trek that leaves moss-hung forest for open alpine ridgelines with close views of Machhapuchhre and the Annapurna range. Many itineraries turn back at High Camp or the upper viewpoint; continuing to base camp adds a long, exposed day.",
    tags: ["Mountain Panorama", "Forest Trails", "Ridge Walking"],
    duration: "≈ 5–7 days",
    difficulty: "Moderate",
    maxAltitude: "≈ 4,500 m",
    altitudeNote: "Base camp · High Camp ≈ 3,580 m",
    experience: "Short ridge trek, quieter trail",
    idealFor: "Trekkers with limited time who want big views",
    categories: ["moderate"],
    enquiryLabel: "Mardi Himal Trek",
    related: { label: "Explore Gandaki Province", href: "/destinations/gandaki-province" },
    image: {
      src: "/images/home/annapurna-view.jpg",
      alt: "Annapurna range and the pointed summit of Machhapuchhre above the Pokhara valley",
      focus: "42% 30%",
    },
  },
  {
    id: "ama-dablam",
    name: "Ama Dablam Base Camp Trek",
    region: "Khumbu · Koshi Province",
    summary:
      "Follow the Everest trail to Pangboche, then climb to the meadow beneath Ama Dablam’s sweeping ridges. A shorter, quieter Khumbu objective that still crosses high suspension bridges and passes Tengboche Monastery.",
    tags: ["Mountain Panorama", "Sherpa Culture", "Monasteries"],
    duration: "≈ 10–13 days",
    difficulty: "Moderate–Challenging",
    maxAltitude: "≈ 4,570 m",
    experience: "Khumbu teahouse trek to a viewpoint base camp",
    idealFor: "Khumbu scenery without the highest-altitude nights",
    categories: ["classic", "moderate"],
    enquiryLabel: "Ama Dablam Base Camp Trek",
    related: { label: "Everest Base Camp Trek", href: "/adventure/everest-base-camp-trek" },
    image: {
      src: "/koshi/cholatse-peak.jpg",
      alt: "Taboche and Cholatse above a glacial valley in the Khumbu",
      focus: "35% 40%",
    },
  },
  {
    id: "makalu",
    name: "Makalu Base Camp Trek",
    region: "Makalu Barun · Koshi Province",
    summary:
      "A remote wilderness route from the Arun valley over the Shipton La into the Barun valley, ending beneath the granite south face of Makalu. Facilities are basic and sections may need camping, so it suits trekkers who are well prepared and self-reliant.",
    tags: ["Remote Wilderness", "Glacier Views", "Alpine Terrain"],
    duration: "≈ 16–20 days",
    difficulty: "Challenging",
    maxAltitude: "≈ 4,870 m",
    experience: "Remote lodge-and-camping expedition",
    idealFor: "Experienced trekkers seeking solitude",
    categories: ["remote", "challenging"],
    enquiryLabel: "Makalu Base Camp Trek",
    related: { label: "Explore Koshi Province", href: "/destinations/koshi-province" },
    image: {
      src: "/koshi/makalu-base-camp.jpg",
      alt: "Makalu Base Camp signpost at 4,870 m with Makalu rising behind",
      focus: "50% 35%",
    },
  },
  {
    id: "kanchenjunga",
    name: "Kanchenjunga Base Camp Trek",
    region: "Taplejung · Koshi Province",
    summary:
      "A long journey through Limbu and Sherpa villages to the base of Kanchenjunga, the world’s third-highest mountain. Itineraries visit the North Base Camp at Pangpema, the South Base Camp near Oktang, or both — this is a restricted area that needs a special permit and an organised group.",
    tags: ["Remote Wilderness", "Glacier Views", "Cultural Trails"],
    duration: "≈ 20–25+ days",
    difficulty: "Challenging",
    maxAltitude: "≈ 5,143 m",
    altitudeNote: "Pangpema (north) · Oktang (south) ≈ 4,730 m",
    experience: "Long remote expedition, restricted area",
    idealFor: "Seasoned trekkers with time and patience",
    categories: ["remote", "challenging", "high-altitude"],
    enquiryLabel: "Kanchenjunga Base Camp Trek",
    related: { label: "Explore Koshi Province", href: "/destinations/koshi-province" },
    image: {
      src: "/koshi/kanchenjunga.jpg",
      alt: "The Kanchenjunga massif glowing orange at sunrise",
      focus: "45% 35%",
    },
  },
  {
    id: "manaslu",
    name: "Manaslu Circuit & Base Camp Side Trip",
    region: "Gorkha · Gandaki Province",
    summary:
      "The Manaslu Circuit is a loop around the mountain over the Larkya La — it does not end at a base camp. Manaslu Base Camp is a separate, steep day hike from Samagaun that some itineraries add for acclimatisation. Both lie in a restricted area.",
    tags: ["Remote Wilderness", "High Pass", "Cultural Trails"],
    duration: "≈ 14–18 days",
    difficulty: "Challenging",
    maxAltitude: "≈ 5,106 m",
    altitudeNote: "Larkya La · base camp side trip ≈ 4,800 m",
    experience: "Circuit trek with optional base camp hike",
    idealFor: "Trekkers wanting a quieter alternative to the Annapurna Circuit",
    categories: ["remote", "challenging", "high-altitude"],
    enquiryLabel: "Manaslu Circuit with Base Camp side trip",
    related: { label: "Tsum Valley Trek (Manaslu region)", href: "/adventure/tsum-valley-trek" },
    image: {
      src: "/images/gandaki/manaslu-circuit-trekking-mountain-massif-gorkha-nepal.jpg",
      alt: "Two trekkers on a high trail in the Manaslu region beneath snow-covered peaks",
      focus: "50% 55%",
    },
  },
  {
    id: "dhaulagiri",
    name: "Dhaulagiri Base Camp Trek",
    region: "Myagdi · Gandaki Province",
    summary:
      "A rugged, camping-supported route up the Myagdi Khola and onto the Chhonbardan Glacier to the base of Dhaulagiri’s north face. Many parties continue over French Pass into Hidden Valley; glacier walking and rockfall-prone sections make it one of Nepal’s tougher treks.",
    tags: ["Glacier Views", "Remote Wilderness", "Camping"],
    duration: "≈ 14–18 days",
    difficulty: "Challenging",
    maxAltitude: "≈ 5,360 m",
    altitudeNote: "French Pass (circuit) · base camp ≈ 4,750 m",
    experience: "Camping expedition with glacier sections",
    idealFor: "Experienced trekkers comfortable on rough terrain",
    categories: ["remote", "challenging", "high-altitude"],
    enquiryLabel: "Dhaulagiri Base Camp Trek",
    related: { label: "Explore Gandaki Province", href: "/destinations/gandaki-province" },
    image: {
      src: "/images/gandaki/poon-hill-sunrise-dhaulagiri-myagdi-gandaki-nepal.jpg",
      alt: "Dhaulagiri towering above the lodges of Ghorepani in Myagdi",
      focus: "55% 30%",
    },
  },
];

export const filters: TrekFilter[] = [
  { id: "all", label: "All Treks" },
  { id: "classic", label: "Classic Base Camp Treks" },
  { id: "remote", label: "Remote Expeditions" },
  { id: "moderate", label: "Moderate Adventures" },
  { id: "challenging", label: "Challenging Treks" },
  { id: "high-altitude", label: "Above 5,000 m" },
];

/** Where a trek card's main CTA goes: its own page, or a pre-filled enquiry. */
export function trekCta(trek: Trek) {
  return trek.href
    ? { label: "Explore Trek", href: trek.href }
    : { label: "Request This Trek", href: enquiryHref(trek.enquiryLabel ?? trek.name) };
}
