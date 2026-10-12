/* ============================================================
   CHAR DHAM YATRA — PAGES
   ------------------------------------------------------------
   The master page and every sub-page, composed from the shared
   blocks in content.ts. `layout` sets each page's section order.
   ============================================================ */

import type { HelicopterTour, SectionKey } from "@/components/activities/experience/product-types";
import type { PageImage } from "@/components/activities/experience/types";
import {
  BASE,
  DHAMS,
  DHAM_FEATURES,
  FAQ,
  ALL_FAQS,
  HELI_INCLUSIONS,
  ROAD_INCLUSIONS,
  S,
  bookingWidget,
  charDhamBase,
  cta,
  departures,
  dhamsSection,
  heliDayWise,
  itineraryOptions,
  journey,
  mapSection,
  packages,
  related,
} from "./content";
import {
  alaknandaBadrinath,
  badrinathTemple,
  bhagirathiHarsil,
  familyYatra,
  gangotriTemple,
  helicopterYatra,
  heroPanorama,
  himalayanLandscape,
  kedarnathTemple,
  mandakiniValley,
  roadYatra,
  seniorPilgrims,
  yamunaJankiChatti,
  yamunotriTemple,
} from "./images";

const ROUTE_CHAIN = ["Yamunotri", "Gangotri", "Kedarnath", "Badrinath"];
const COLLECTION = { label: "Char Dham Yatra", href: BASE };

type PageInput = Omit<HelicopterTour, keyof typeof charDhamBase | "path" | "collection"> & Partial<HelicopterTour>;

const page = (input: PageInput): HelicopterTour => ({
  ...charDhamBase,
  collection: COLLECTION,
  path: input.slug === "char-dham-yatra" ? BASE : `${BASE}/${input.slug}`,
  ...input,
});

const seo = (title: string, socialTitle: string, description: string, keywords: string[], ogImage: PageImage): HelicopterTour["seo"] => ({
  title,
  socialTitle,
  description,
  keywords,
  // Removed automatically at render time while the photo file is missing.
  ogImage: ogImage as HelicopterTour["seo"]["ogImage"],
});

const facts = (duration: string, start: string, type: string): HelicopterTour["quickFacts"] => [
  { icon: "landmark", label: "Dhams", value: "Yamunotri · Gangotri · Kedarnath · Badrinath" },
  { icon: "compass", label: "Region", value: "Garhwal Himalaya, Uttarakhand" },
  { icon: "route", label: "Yatra type", value: type },
  { icon: "clock", label: "Sample duration", value: duration },
  { icon: "mapPin", label: "Starting point", value: start },
  { icon: "sun", label: "Season", value: "Seasonal (spring – autumn)", note: "Dates announced each year" },
  { icon: "users", label: "Ideal for", value: "Families, seniors, groups" },
  { icon: "file", label: "Registration", value: "Confirmed for your dates" },
];

/* ============================================================
   MASTER PAGE
   ============================================================ */

const MASTER_LAYOUT: SectionKey[] = [
  "hero",
  "booking",
  "nav",
  "facts",
  "trust-bar",
  "story",
  "dhams",
  "journey",
  "map",
  "spotlight:helicopter",
  "itinerary",
  "spotlight:road",
  "spotlight:senior",
  "spotlight:family",
  "spotlight:yamunotri-feature",
  "spotlight:gangotri-feature",
  "spotlight:kedarnath-feature",
  "spotlight:badrinath-feature",
  "why",
  "seasons",
  "spotlight:winter",
  "dates",
  "book",
  "spotlight:do-dham",
  "spotlight:cross-border",
  "inclusions",
  "safety",
  "gallery",
  "video",
  "trust",
  "faq",
  "cta",
  "related",
];

export const charDhamYatra = page({
  title: "Char Dham Yatra",
  slug: "char-dham-yatra",
  breadcrumbLabel: "Char Dham Yatra",
  collection: null,
  layout: MASTER_LAYOUT,
  seo: seo(
    "Char Dham Yatra 2027 | Yamunotri Gangotri Kedarnath Badrinath | Karvaahh",
    "Char Dham Yatra 2027 – A Sacred Journey Through the Himalayas",
    "Plan your Char Dham Yatra with Karvaahh covering Yamunotri, Gangotri, Kedarnath and Badrinath by helicopter, road or customized pilgrimage journey.",
    [
      "Char Dham Yatra",
      "Char Dham Yatra 2027",
      "Char Dham Yatra by Helicopter",
      "Char Dham Helicopter Package",
      "Yamunotri Gangotri Kedarnath Badrinath",
      "Char Dham Tour Package",
      "Char Dham Yatra from Dehradun",
      "Char Dham Yatra from Delhi",
      "Char Dham Yatra for Senior Citizens",
      "Char Dham Yatra by Road",
      "Do Dham Yatra",
      "Char Dham Pilgrimage Tour",
    ],
    heroPanorama,
  ),
  duration: "Sample 5N / 6D (helicopter) · 9N / 10D (road)",
  elevation: "Approx. 3,100 – 3,580 m (shrines)",
  hero: {
    badge: "Char Dham Yatra • Uttarakhand • India",
    titleLead: "Char Dham Yatra",
    titleAccent: "A Sacred Journey Through the Himalayas",
    description:
      "Journey through Yamunotri, Gangotri, Kedarnath and Badrinath with thoughtfully planned pilgrimage experiences by helicopter, road or customized travel.",
    image: heroPanorama,
    primaryCta: { label: "Plan Your Yatra" },
    secondaryCta: { label: "Explore the Four Dhams", href: "#dhams" },
    routeChain: ROUTE_CHAIN,
    strip: [],
    trust: [
      { icon: "heart", label: "Faith" },
      { icon: "bed", label: "Comfort" },
      { icon: "shield", label: "Safety-First Planning" },
      { icon: "helicopter", label: "Helicopter & Road Yatras" },
    ],
  },
  bookingWidget: bookingWidget("Helicopter Yatra", "5N / 6D (sample)"),
  quickFacts: facts("5N / 6D heli · 9N / 10D road", "Dehradun / Haridwar", "Helicopter / Road / Custom"),
  editorial: {
    eyebrow: "Why Char Dham",
    title: "A Journey of Faith Through the Himalayas",
    paragraphs: [
      "For generations, devotees have dreamed of completing the Char Dham — four [[sacred]] shrines in the Garhwal Himalaya, each linked to a holy river or a principal deity: Goddess Yamuna, Goddess Ganga, Lord Shiva and Lord Vishnu.",
      "Many pilgrims regard completing the circuit as one of the most meaningful journeys of a lifetime — an act of [[devotion]] and reflection, undertaken with family, through ancient temples and living traditions.",
      "It is also a journey through extraordinary [[Himalayan]] landscapes: glacier-fed rivers, cedar forests, terraced villages and snow peaks. Karvaahh plans every detail, so you can focus on darshan and the experience itself.",
    ],
    image: himalayanLandscape,
    inset: kedarnathTemple,
    fact: { label: "Four Dhams", value: "One circuit", text: "Traditionally visited west to east, from Yamunotri to Badrinath." },
  },
  dhams: dhamsSection(),
  journey,
  map: mapSection("kedarnath", "road"),
  spotlights: [S.helicopter, S.road, S.senior, S.family, DHAM_FEATURES.yamunotri, DHAM_FEATURES.gangotri, DHAM_FEATURES.kedarnath, DHAM_FEATURES.badrinath, S.winter, S.doDham, S.crossBorder],
  itinerary: {
    title: "Sample Char Dham Itineraries",
    intro: "Compare our sample helicopter and road yatras. Every itinerary is customised to your dates and pace.",
    options: [itineraryOptions.helicopter, itineraryOptions.road, itineraryOptions.doDham],
  },
  dayWise: heliDayWise,
  departures: departures(),
  options: packages(["helicopter", "road", "private", "senior", "family", "doDham"]),
  faqs: ALL_FAQS,
  cta: cta(),
  relatedTours: related(""),
});

/* ============================================================
   DESTINATION PAGES
   ============================================================ */

const DHAM_LAYOUT: SectionKey[] = [
  "hero",
  "booking",
  "nav",
  "facts",
  "story",
  "highlights",
  "dhams",
  "map",
  "itinerary",
  "seasons",
  "spotlight:winter",
  "spotlight:helicopter",
  "dates",
  "book",
  "inclusions",
  "safety",
  "gallery",
  "trust",
  "faq",
  "cta",
  "related",
];

type DhamPage = {
  id: "yamunotri" | "gangotri" | "kedarnath" | "badrinath";
  order: string;
  keywordName: string;
  heroText: string;
  image: PageImage;
  secondary: PageImage;
  story: string[];
  highlights: NonNullable<HelicopterTour["highlights"]>["items"];
  winter: string;
  reach: string;
  faqs: { question: string; answer: string }[];
};

const dhamPage = (d: DhamPage) => {
  const dham = DHAMS.find((x) => x.id === d.id)!;
  return page({
    title: `${dham.name} Yatra`,
    slug: d.id,
    breadcrumbLabel: dham.name,
    layout: DHAM_LAYOUT,
    seo: seo(
      `${dham.name} Yatra 2027 | ${dham.temple} – Char Dham | Karvaahh`,
      `${dham.name} Yatra – ${dham.temple}, ${dham.deity}`,
      `Plan your ${dham.name} Yatra with Karvaahh: ${dham.temple} of ${dham.deity} in ${dham.region}, as part of the Char Dham by helicopter or road, or as a customised pilgrimage.`,
      [`${dham.name} Yatra`, `${dham.name} Yatra 2027`, `${dham.temple}`, `${dham.name} Char Dham`, `${d.keywordName} tour package`, "Char Dham Yatra"],
      d.image,
    ),
    duration: "Part of the Char Dham, or custom",
    elevation: dham.altitude ?? "",
    hero: {
      badge: `${d.order} Dham • ${dham.region} • Uttarakhand`,
      titleLead: `${dham.name}`,
      titleAccent: dham.deity,
      description: d.heroText,
      image: d.image,
      primaryCta: { label: "Plan Your Yatra" },
      secondaryCta: { label: "All Four Dhams", href: "#dhams" },
      strip: [
        { label: "Temple", value: dham.temple },
        { label: "Deity", value: dham.deity },
        { label: "Region", value: dham.region },
        { label: "Altitude", value: dham.altitude ?? "—" },
      ],
    },
    bookingWidget: bookingWidget("Helicopter Yatra", "Char Dham 5N / 6D (sample)"),
    quickFacts: [
      { icon: "landmark", label: "Temple", value: dham.temple },
      { icon: "heart", label: "Deity", value: dham.deity },
      { icon: "compass", label: "Region", value: `${dham.region}, Uttarakhand` },
      { icon: "mountainSnow", label: "Altitude", value: dham.altitude ?? "—" },
      { icon: "route", label: "Circuit order", value: `${d.order} of four Dhams` },
      { icon: "footprints", label: "How to reach", value: d.reach },
      { icon: "sun", label: "Season", value: "Seasonal", note: "Opening dates announced each year" },
      { icon: "snow", label: "Winter seat", value: d.winter },
    ],
    editorial: {
      eyebrow: `${d.order} Dham`,
      title: DHAM_FEATURES[d.id].title,
      paragraphs: d.story,
      image: d.image,
      inset: d.secondary,
      fact: { label: dham.temple, value: dham.altitude?.replace("Approx. ", "≈") ?? dham.region, text: `${dham.deity} · ${dham.region}` },
    },
    highlights: { title: `Highlights of ${dham.name}`, intro: "Places and traditions pilgrims experience here.", items: d.highlights },
    dhams: dhamsSection("Continue the Sacred Circuit"),
    map: mapSection(d.id, "road"),
    spotlights: [S.winter, S.helicopter],
    itinerary: {
      title: `${dham.name} in a Char Dham Itinerary`,
      intro: `${dham.name} is part of every full Char Dham Yatra. Compare our sample itineraries.`,
      options: [itineraryOptions.helicopter, itineraryOptions.road, ...(d.id === "kedarnath" || d.id === "badrinath" ? [itineraryOptions.doDham] : [])],
    },
    departures: departures(),
    options: packages(d.id === "kedarnath" || d.id === "badrinath" ? ["helicopter", "road", "doDham"] : ["helicopter", "road", "private"], `Visit ${dham.name} With Karvaahh`),
    faqs: [...d.faqs, FAQ.what, FAQ.route, FAQ.when, FAQ.heli, FAQ.registration, FAQ.seniors],
    cta: { ...cta(`Plan My ${dham.name} Yatra`), title: `Begin Your Journey to ${dham.name}` },
    relatedTours: [
      ...DHAMS.filter((x) => x.id !== d.id).map((x) => ({ title: `${x.name} Yatra`, text: `${x.temple} · ${x.deity}`, href: x.href, image: x.image })),
      ...related("").slice(0, 3),
    ],
  });
};

export const yamunotri = dhamPage({
  id: "yamunotri",
  order: "First",
  keywordName: "Yamunotri",
  heroText: "Begin the Char Dham at the temple of Goddess Yamuna, set in a dramatic Himalayan gorge near the source region of the Yamuna.",
  image: yamunotriTemple,
  secondary: yamunaJankiChatti,
  story: [
    "Yamunotri is traditionally the starting point of the Char Dham circuit and is associated with Goddess [[Yamuna]]. The temple lies in a dramatic Himalayan setting near the source region of the river.",
    "The final approach is on foot from [[Janki Chatti]], or by pony or palanquin. Near the temple, the hot spring of Surya Kund is traditionally used to cook rice as prasad.",
    "Helicopter yatras serve the nearby Kharsali area, reducing the long road journey. In winter, the worship of Goddess Yamuna is traditionally associated with Kharsali.",
  ],
  highlights: [
    { name: "Yamunotri Temple", text: "The shrine of Goddess Yamuna.", elevation: "Approx. 3,290 m", image: yamunotriTemple },
    { name: "Surya Kund", text: "A hot spring near the temple, traditionally used to cook rice as prasad." },
    { name: "Janki Chatti", text: "The starting point of the walk to the temple.", image: yamunaJankiChatti },
    { name: "Kharsali", text: "A village associated with the winter worship of Goddess Yamuna." },
  ],
  winter: "Kharsali",
  reach: "Walk, pony or palanquin from Janki Chatti",
  faqs: [
    { question: "How do I reach Yamunotri Temple?", answer: "By road to Janki Chatti, then on foot, by pony or by palanquin. Helicopter yatras serve the nearby Kharsali area." },
    { question: "Is Yamunotri the first Dham?", answer: "Yes. Traditionally the Char Dham begins at Yamunotri and continues to Gangotri, Kedarnath and Badrinath." },
  ],
});

export const gangotri = dhamPage({
  id: "gangotri",
  order: "Second",
  keywordName: "Gangotri",
  heroText: "Seek the blessings of Goddess Ganga at her temple on the Bhagirathi, among the deodar forests and peaks of the Garhwal Himalaya.",
  image: gangotriTemple,
  secondary: bhagirathiHarsil,
  story: [
    "Gangotri is dedicated to Goddess [[Ganga]] and sits among the Garhwal Himalaya on the banks of the Bhagirathi. Uttarakhand Tourism identifies it as the second stop in the traditional Char Dham sequence.",
    "Tradition holds that King [[Bhagirath]] meditated here to bring the Ganga to earth. The river's glacial source at Gaumukh lies further upstream.",
    "The temple is reached by road. Helicopter yatras use the scenic Harsil valley as a base. In winter, worship of Goddess Ganga is traditionally associated with Mukhba village.",
  ],
  highlights: [
    { name: "Gangotri Temple", text: "The temple of Goddess Ganga.", elevation: "Approx. 3,100 m", image: gangotriTemple },
    { name: "Bhagirath Shila", text: "The rock traditionally associated with King Bhagirath's penance." },
    { name: "Harsil valley", text: "A scenic Bhagirathi valley village near Gangotri.", image: bhagirathiHarsil },
    { name: "Mukhba", text: "The village associated with the winter worship of Goddess Ganga." },
  ],
  winter: "Mukhba",
  reach: "By road",
  faqs: [
    { question: "Can I reach Gangotri Temple by road?", answer: "Yes. Gangotri is reached by road via Uttarkashi; helicopter yatras use the Harsil area with a road transfer." },
    { question: "Is Gaumukh part of the Gangotri visit?", answer: "No. Gaumukh, the glacial source of the Bhagirathi, is a separate high-altitude trek beyond Gangotri and needs its own planning and permits." },
  ],
});

export const kedarnath = dhamPage({
  id: "kedarnath",
  order: "Third",
  keywordName: "Kedarnath",
  heroText: "Journey to the abode of Lord Shiva — the stone temple of Kedarnath at the head of the Mandakini valley, beneath the snow peaks of the Garhwal Himalaya.",
  image: kedarnathTemple,
  secondary: mandakiniValley,
  story: [
    "Kedarnath is one of the most revered Himalayan temple destinations, dedicated to Lord [[Shiva]] and counted among the twelve Jyotirlingas. It is also one of the Char Dham destinations.",
    "The temple stands at the head of the [[Mandakini]] valley. Pilgrims walk up from Gaurikund, travel by pony or palanquin, or use helicopter services that operate in the valley from the Phata, Sersi and Guptkashi area.",
    "In winter, the worship of Kedarnath traditionally moves to the Omkareshwar Temple in [[Ukhimath]].",
  ],
  highlights: [
    { name: "Kedarnath Temple", text: "The abode of Lord Shiva and one of the twelve Jyotirlingas.", elevation: "Approx. 3,580 m", image: kedarnathTemple },
    { name: "Mandakini valley", text: "The glacial valley at the foot of the temple.", image: mandakiniValley },
    { name: "Bhairavnath Temple", text: "A hilltop shrine near Kedarnath visited by many pilgrims." },
    { name: "Omkareshwar, Ukhimath", text: "The winter seat of Kedarnath worship." },
  ],
  winter: "Omkareshwar Temple, Ukhimath",
  reach: "Trek, pony, palanquin or helicopter service",
  faqs: [
    { question: "How do I reach Kedarnath?", answer: "On foot from Gaurikund, by pony or palanquin, or by helicopter services operating from the Phata, Sersi and Guptkashi area, subject to availability and weather." },
    { question: "Are Kedarnath helicopter tickets included?", answer: "In our helicopter Char Dham packages, flights in the selected itinerary are included. For road packages, the Kedarnath helicopter service is optional and booked separately where available." },
  ],
});

export const badrinath = dhamPage({
  id: "badrinath",
  order: "Fourth",
  keywordName: "Badrinath",
  heroText: "Complete your sacred journey at the temple of Lord Vishnu as Badrinarayan, on the Alaknanda between the Nar and Narayan ranges.",
  image: badrinathTemple,
  secondary: alaknandaBadrinath,
  story: [
    "Badrinath is dedicated to Lord [[Vishnu]] as Badrinarayan and is traditionally the final shrine in the Char Dham sequence. It is also one of the four Dhams of the all-India Char Dham pilgrimage.",
    "Pilgrims traditionally bathe in the hot spring of [[Tapt Kund]] before darshan. The Nar and Narayan ranges rise on either side of the Alaknanda, and Mana village lies close by.",
    "Badrinath is reached by road via Joshimath. In winter, its worship is traditionally associated with Pandukeshwar and Joshimath.",
  ],
  highlights: [
    { name: "Badrinath Temple", text: "The temple of Lord Vishnu as Badrinarayan.", elevation: "Approx. 3,130 m", image: badrinathTemple },
    { name: "Tapt Kund", text: "A hot spring where pilgrims traditionally bathe before darshan." },
    { name: "Nar & Narayan ranges", text: "The mountains that frame the Badrinath valley.", image: alaknandaBadrinath },
    { name: "Mana village", text: "A village close to Badrinath near the Indo-Tibetan border." },
  ],
  winter: "Pandukeshwar & Joshimath",
  reach: "By road via Joshimath",
  faqs: [
    { question: "Can I reach Badrinath by road?", answer: "Yes. Badrinath is reached by road via Joshimath; helicopter yatras also include a Badrinath sector." },
    { question: "Is Mana village included?", answer: "A visit to Mana village can be included where time and conditions allow; we confirm it in your itinerary." },
  ],
});

/* ============================================================
   YATRA TYPE PAGES
   ============================================================ */

export const helicopter = page({
  title: "Char Dham Yatra by Helicopter",
  slug: "helicopter",
  breadcrumbLabel: "By Helicopter",
  layout: ["hero", "booking", "nav", "facts", "trust-bar", "story", "journey", "itinerary", "map", "dhams", "spotlight:senior", "seasons", "dates", "book", "inclusions", "safety", "gallery", "video", "trust", "faq", "cta", "related"],
  seo: seo(
    "Char Dham Yatra by Helicopter 2027 – Sample 5N/6D from Dehradun | Karvaahh",
    "Char Dham Yatra by Helicopter – All Four Dhams From Dehradun",
    "Plan a Char Dham Yatra by helicopter with Karvaahh: Yamunotri, Gangotri, Kedarnath and Badrinath in a sample 5N/6D from Dehradun. Availability and price on request.",
    ["Char Dham Yatra by Helicopter", "Char Dham Helicopter Package", "Char Dham Helicopter Yatra 2027", "Char Dham Yatra from Dehradun", "Char Dham helicopter 5N 6D"],
    helicopterYatra,
  ),
  duration: "Sample 5N / 6D",
  elevation: "Approx. 3,100 – 3,580 m (shrines)",
  hero: {
    badge: "Helicopter Yatra • Char Dham • Uttarakhand",
    titleLead: "Char Dham Yatra",
    titleAccent: "by Helicopter",
    description:
      "Complete all four Dhams — Yamunotri, Gangotri, Kedarnath and Badrinath — in a sample 5 nights / 6 days from Dehradun, with far less road travel and trekking.",
    image: helicopterYatra,
    primaryCta: { label: "Check Availability" },
    secondaryCta: { label: "View Sample Itinerary", href: "#itinerary" },
    routeChain: ROUTE_CHAIN,
    strip: [],
    trust: [
      { icon: "helicopter", label: "Helicopter Between Dhams" },
      { icon: "clock", label: "Sample 5N / 6D" },
      { icon: "users", label: "Ideal for Seniors & Families" },
      { icon: "cloud", label: "Weather-Based Operations" },
    ],
  },
  bookingWidget: bookingWidget("Helicopter Yatra", "5N / 6D (sample)"),
  quickFacts: facts("5N / 6D", "Dehradun", "Helicopter yatra"),
  editorial: {
    eyebrow: "Helicopter Yatra",
    title: "Four Dhams, Fewer Hours on the Road",
    paragraphs: [
      "A helicopter-based pilgrimage can significantly [[reduce]] the road and trekking burden of the Char Dham. It is particularly attractive for travellers with limited time, families and senior pilgrims.",
      "Uttarakhand Tourism lists an air-based Char Dham itinerary that runs from Dehradun through the [[Yamunotri]] (Kharsali), [[Gangotri]] (Harsil), Kedarnath and Badrinath sectors and back to Dehradun.",
      "Karvaahh coordinates the helicopter operator, hotels, ground transfers and registration support, so the family can focus on darshan.",
    ],
    image: helicopterYatra,
    inset: kedarnathTemple,
    fact: { label: "Sample itinerary", value: "5N / 6D", text: "Dehradun → four Dhams → Dehradun" },
  },
  journey: { ...journey!, marker: "helicopter", title: "The Helicopter Circuit", intro: "Scroll to follow the four Dham sectors of a sample helicopter yatra." },
  itinerary: { title: "Sample Helicopter Itinerary", intro: "A sample 5N / 6D from Dehradun.", options: [itineraryOptions.helicopter] },
  dayWise: heliDayWise,
  map: mapSection("kedarnath", "helicopter"),
  dhams: dhamsSection(),
  spotlights: [S.senior],
  departures: departures(),
  options: packages(["helicopter", "doDham", "senior"], "Helicopter Yatra Packages"),
  inclusions: HELI_INCLUSIONS,
  inclusionSets: undefined,
  faqs: [FAQ.heli, FAQ.heliDays, FAQ.heliStart, FAQ.dehradun, FAQ.heliTickets, FAQ.hotels, FAQ.meals, FAQ.permits, FAQ.seniors, FAQ.children, FAQ.heliCancel, FAQ.weather, FAQ.registration, FAQ.documents],
  cta: { ...cta("Book Helicopter Yatra"), title: "Fly to the Four Dhams" },
  relatedTours: related("helicopter"),
});

export const byRoad = page({
  title: "Char Dham Yatra by Road",
  slug: "by-road",
  breadcrumbLabel: "By Road",
  layout: ["hero", "booking", "nav", "facts", "trust-bar", "story", "journey", "map", "itinerary", "dhams", "spotlight:family", "seasons", "dates", "book", "inclusions", "safety", "gallery", "trust", "faq", "cta", "related"],
  seo: seo(
    "Char Dham Yatra by Road 2027 – Sample 9N/10D from Haridwar | Karvaahh",
    "Char Dham Yatra by Road – The Classic Himalayan Circuit",
    "Travel the Char Dham by road with Karvaahh: Yamunotri, Gangotri, Kedarnath and Badrinath in a sample 9N/10D from Haridwar with private vehicle and flexible sightseeing.",
    ["Char Dham Yatra by Road", "Char Dham Tour Package", "Char Dham Yatra from Haridwar", "Char Dham Yatra from Delhi", "Char Dham road package 2027"],
    roadYatra,
  ),
  duration: "Sample 9N / 10D",
  elevation: "Approx. 3,100 – 3,580 m (shrines)",
  hero: {
    badge: "Road Yatra • Char Dham • Uttarakhand",
    titleLead: "Char Dham Yatra",
    titleAccent: "by Road",
    description:
      "The classic pilgrimage through river valleys, confluence towns and Himalayan villages — Yamunotri, Gangotri, Kedarnath and Badrinath at an unhurried pace.",
    image: roadYatra,
    primaryCta: { label: "Plan Your Yatra" },
    secondaryCta: { label: "View Sample Itinerary", href: "#itinerary" },
    routeChain: ["Haridwar", ...ROUTE_CHAIN],
    strip: [],
    trust: [
      { icon: "car", label: "Private Vehicle & Driver" },
      { icon: "clock", label: "Sample 9N / 10D" },
      { icon: "users", label: "Family & Group Friendly" },
      { icon: "route", label: "Fully Customisable" },
    ],
  },
  bookingWidget: bookingWidget("Road Yatra", "9N / 10D (sample)"),
  quickFacts: facts("9N / 10D", "Haridwar", "Road yatra"),
  editorial: {
    eyebrow: "Road Yatra",
    title: "The Classic Way to Travel the Char Dham",
    paragraphs: [
      "Travelling by road lets the pilgrimage unfold slowly: the [[Yamuna]], Bhagirathi, Mandakini and Alaknanda valleys, the confluence towns of the Garhwal hills and the villages in between.",
      "Uttarakhand Tourism's own road itinerary covers Haridwar, Yamunotri, Gangotri, Kedarnath and Badrinath over several days. We tailor the pace, stops and comfort level to your [[family]].",
      "Kedarnath and Yamunotri are reached on foot, by pony or palanquin from the road head; a Kedarnath helicopter service can be added where available.",
    ],
    image: roadYatra,
    inset: bhagirathiHarsil,
    fact: { label: "Sample itinerary", value: "9N / 10D", text: "Haridwar → four Dhams → Haridwar" },
  },
  journey: { ...journey!, title: "The Road Circuit" },
  map: mapSection("yamunotri", "road"),
  itinerary: { title: "Sample Road Itinerary", intro: "A sample 9N / 10D from Haridwar.", options: [itineraryOptions.road] },
  dhams: dhamsSection(),
  spotlights: [S.family],
  departures: departures(),
  options: packages(["road", "family", "private", "doDham"], "Road Yatra Packages"),
  inclusions: ROAD_INCLUSIONS,
  inclusionSets: undefined,
  faqs: [FAQ.what, FAQ.route, FAQ.when, FAQ.hotels, FAQ.meals, FAQ.permits, FAQ.customise, FAQ.onlyTwo, FAQ.weather, FAQ.registration, FAQ.documents],
  cta: { ...cta("Plan My Road Yatra"), title: "Take the Road to the Four Dhams" },
  relatedTours: related("by-road"),
});

export const seniorCitizens = page({
  title: "Char Dham Yatra for Senior Citizens",
  slug: "senior-citizens",
  breadcrumbLabel: "Senior Citizens",
  layout: ["hero", "booking", "nav", "facts", "spotlight:senior", "spotlight:helicopter", "dhams", "itinerary", "seasons", "dates", "book", "inclusions", "safety", "trust", "faq", "cta", "related"],
  seo: seo(
    "Char Dham Yatra for Senior Citizens 2027 | Helicopter & Road | Karvaahh",
    "Char Dham Yatra for Senior Citizens – Comfortable, Assisted Pilgrimage",
    "A Char Dham Yatra planned for senior citizens: helicopter options, comfortable stays, ground assistance and flexible pacing with Karvaahh.",
    ["Char Dham Yatra for Senior Citizens", "Char Dham for elderly", "Senior citizen Char Dham package", "Char Dham helicopter for seniors"],
    seniorPilgrims,
  ),
  duration: "Customised",
  elevation: "Approx. 3,100 – 3,580 m (shrines)",
  hero: {
    badge: "Senior Citizen Yatra • Char Dham",
    titleLead: "Char Dham Yatra",
    titleAccent: "for Senior Pilgrims",
    description: "A gentler way for parents and grandparents to complete the Char Dham — with helicopter options, comfortable stays, assistance and flexible pacing.",
    image: seniorPilgrims,
    primaryCta: { label: "Plan a Senior Yatra" },
    secondaryCta: { label: "How We Help", href: "#senior" },
    routeChain: ROUTE_CHAIN,
    strip: [],
    trust: [
      { icon: "helicopter", label: "Helicopter Options" },
      { icon: "users", label: "Ground Assistance" },
      { icon: "clock", label: "Flexible Pacing" },
      { icon: "headset", label: "Dedicated Support" },
    ],
  },
  bookingWidget: bookingWidget("Helicopter Yatra", "Flexible"),
  quickFacts: facts("Customised", "Dehradun / Haridwar", "Helicopter or road"),
  dhams: dhamsSection(),
  spotlights: [S.senior, S.helicopter],
  itinerary: { title: "Sample Itineraries", intro: "Choose the pace that suits your family.", options: [itineraryOptions.helicopter, itineraryOptions.road, itineraryOptions.doDham] },
  departures: departures(),
  options: packages(["senior", "helicopter", "doDham"], "Senior Citizen Packages"),
  faqs: [FAQ.seniors, FAQ.heli, FAQ.heliCancel, FAQ.hotels, FAQ.meals, FAQ.onlyTwo, FAQ.customise, FAQ.registration, FAQ.documents],
  cta: { ...cta("Plan a Senior Citizen Yatra"), title: "A Comfortable Yatra for Your Elders" },
  relatedTours: related("senior-citizens"),
});

export const family = page({
  title: "Family Char Dham Yatra",
  slug: "family",
  breadcrumbLabel: "Family",
  layout: ["hero", "booking", "nav", "facts", "spotlight:family", "dhams", "spotlight:road", "spotlight:helicopter", "itinerary", "seasons", "dates", "book", "inclusions", "safety", "trust", "faq", "cta", "related"],
  seo: seo(
    "Family Char Dham Yatra 2027 | Private Family Packages | Karvaahh",
    "Family Char Dham Yatra – A Meaningful Journey Across Generations",
    "Plan a family Char Dham Yatra with Karvaahh: private vehicles, family rooms, flexible schedules and helicopter or road options for every generation.",
    ["Family Char Dham Yatra", "Char Dham family package", "Char Dham with kids", "Private Char Dham Yatra"],
    familyYatra,
  ),
  duration: "Customised",
  elevation: "Approx. 3,100 – 3,580 m (shrines)",
  hero: {
    badge: "Family Yatra • Char Dham",
    titleLead: "Family Char Dham",
    titleAccent: "A Journey Across Generations",
    description: "Share the four Dhams with parents, children and grandparents — private vehicles, family rooms and flexible schedules, by road or helicopter.",
    image: familyYatra,
    primaryCta: { label: "Plan a Family Yatra" },
    secondaryCta: { label: "Explore the Four Dhams", href: "#dhams" },
    routeChain: ROUTE_CHAIN,
    strip: [],
    trust: [
      { icon: "car", label: "Private Vehicles" },
      { icon: "bed", label: "Family Rooms" },
      { icon: "clock", label: "Flexible Schedules" },
      { icon: "heart", label: "Personalised Support" },
    ],
  },
  bookingWidget: bookingWidget("Road Yatra", "Flexible"),
  quickFacts: facts("Customised", "Haridwar / Dehradun", "Road or helicopter"),
  dhams: dhamsSection(),
  spotlights: [S.family, S.road, S.helicopter],
  itinerary: { title: "Sample Itineraries", intro: "Road, helicopter or Do Dham — tailored to your family.", options: [itineraryOptions.road, itineraryOptions.helicopter, itineraryOptions.doDham] },
  departures: departures(),
  options: packages(["family", "road", "helicopter"], "Family Packages"),
  faqs: [FAQ.children, FAQ.seniors, FAQ.customise, FAQ.hotels, FAQ.meals, FAQ.onlyTwo, FAQ.weather, FAQ.registration, FAQ.documents],
  cta: { ...cta("Plan My Family Yatra"), title: "Begin Your Family's Sacred Journey" },
  relatedTours: related("family"),
});

export const custom = page({
  title: "Custom Char Dham & Spiritual Journeys",
  slug: "custom",
  breadcrumbLabel: "Custom Yatra",
  layout: ["hero", "booking", "nav", "facts", "spotlight:cross-border", "dhams", "explorer", "map", "itinerary", "spotlight:winter", "seasons", "book", "inclusions", "safety", "trust", "faq", "cta", "related"],
  seo: seo(
    "Custom Char Dham Yatra & India–Nepal Pilgrimages | Karvaahh",
    "Custom Char Dham Yatra – Private and India–Nepal Spiritual Journeys",
    "Design a private Char Dham Yatra or combine it with Pashupatinath, Muktinath, Lumbini or Kathmandu in a custom India–Nepal spiritual journey with Karvaahh.",
    ["Custom Char Dham Yatra", "Private Char Dham package", "Char Dham and Nepal tour", "Pashupatinath and Char Dham", "Muktinath and Char Dham"],
    himalayanLandscape,
  ),
  duration: "Custom duration",
  elevation: "Approx. 3,100 – 3,580 m (shrines)",
  hero: {
    badge: "Custom Yatra • India & Nepal",
    titleLead: "Your Char Dham,",
    titleAccent: "Your Way",
    description: "A private Char Dham Yatra planned around your dates and pace — or a wider spiritual journey joining Uttarakhand with Nepal's great pilgrimages.",
    image: himalayanLandscape,
    primaryCta: { label: "Plan a Custom Yatra" },
    secondaryCta: { label: "Combine With Nepal", href: "#cross-border" },
    routeChain: ROUTE_CHAIN,
    strip: [],
    trust: [
      { icon: "route", label: "Your Dates & Pace" },
      { icon: "compass", label: "India & Nepal" },
      { icon: "helicopter", label: "Road or Helicopter" },
      { icon: "headset", label: "One Coordinating Team" },
    ],
  },
  bookingWidget: bookingWidget("Custom Yatra", "Custom"),
  quickFacts: facts("Custom", "Your choice", "Private / custom"),
  dhams: dhamsSection(),
  map: mapSection("kedarnath", "road"),
  spotlights: [S.crossBorder, S.winter],
  itinerary: { title: "Starting Points for Your Itinerary", intro: "Use a sample itinerary as the base for your own.", options: [itineraryOptions.road, itineraryOptions.helicopter, itineraryOptions.doDham] },
  options: packages(["private", "helicopter", "road"], "Build Your Journey"),
  faqs: [FAQ.customise, FAQ.onlyTwo, FAQ.doDham, FAQ.heli, FAQ.when, FAQ.registration, FAQ.documents],
  cta: { ...cta("Create My Custom Journey"), title: "Design Your Sacred Journey" },
  relatedTours: related("custom"),
});

export const doDham = page({
  title: "Do Dham Yatra (Kedarnath + Badrinath)",
  slug: "do-dham",
  breadcrumbLabel: "Do Dham",
  layout: ["hero", "booking", "nav", "facts", "spotlight:do-dham", "dhams", "map", "itinerary", "spotlight:kedarnath-feature", "spotlight:badrinath-feature", "seasons", "dates", "book", "inclusions", "safety", "trust", "faq", "cta", "related"],
  seo: seo(
    "Do Dham Yatra 2027 – Kedarnath & Badrinath | Karvaahh",
    "Do Dham Yatra – Kedarnath and Badrinath in a Shorter Pilgrimage",
    "Plan a Do Dham Yatra to Kedarnath and Badrinath with Karvaahh by road or helicopter — a shorter pilgrimage to the abodes of Lord Shiva and Lord Vishnu.",
    ["Do Dham Yatra", "Kedarnath Badrinath Yatra", "Do Dham package 2027", "Kedarnath Badrinath by helicopter", "Kedarnath Badrinath tour from Haridwar"],
    kedarnathTemple,
  ),
  duration: "Sample 4N / 5D",
  elevation: "Approx. 3,130 – 3,580 m (shrines)",
  hero: {
    badge: "Do Dham Yatra • Kedarnath • Badrinath",
    titleLead: "Do Dham Yatra",
    titleAccent: "Kedarnath & Badrinath",
    description: "Short on time? Visit the abodes of Lord Shiva and Lord Vishnu in a shorter Himalayan pilgrimage, by road or with helicopter options.",
    image: kedarnathTemple,
    primaryCta: { label: "Plan Do Dham" },
    secondaryCta: { label: "View Sample Itinerary", href: "#itinerary" },
    routeChain: ["Haridwar", "Kedarnath", "Badrinath"],
    strip: [],
    trust: [
      { icon: "clock", label: "Sample 4N / 5D" },
      { icon: "helicopter", label: "Helicopter Options" },
      { icon: "users", label: "Family Friendly" },
      { icon: "route", label: "Customisable" },
    ],
  },
  bookingWidget: { ...bookingWidget("Do Dham (Kedarnath + Badrinath)", "4N / 5D (sample)"), destination: "Kedarnath & Badrinath" },
  quickFacts: [
    { icon: "landmark", label: "Dhams", value: "Kedarnath · Badrinath" },
    { icon: "compass", label: "Region", value: "Garhwal Himalaya, Uttarakhand" },
    { icon: "route", label: "Yatra type", value: "Road or helicopter options" },
    { icon: "clock", label: "Sample duration", value: "4N / 5D" },
    { icon: "mapPin", label: "Starting point", value: "Haridwar / Dehradun" },
    { icon: "sun", label: "Season", value: "Seasonal", note: "Dates announced each year" },
    { icon: "users", label: "Ideal for", value: "Short on time" },
    { icon: "file", label: "Registration", value: "Confirmed for your dates" },
  ],
  dhams: { title: "The Two Dhams", intro: "The abodes of Lord Shiva and Lord Vishnu.", items: DHAMS.filter((d) => d.id === "kedarnath" || d.id === "badrinath") },
  map: mapSection("kedarnath", "do-dham"),
  spotlights: [{ ...S.doDham, cta: undefined }, DHAM_FEATURES.kedarnath, DHAM_FEATURES.badrinath],
  itinerary: { title: "Sample Do Dham Itinerary", intro: "A sample 4N / 5D from Haridwar.", options: [itineraryOptions.doDham] },
  departures: departures(),
  options: packages(["doDham", "helicopter", "road"], "Do Dham & Upgrade Options"),
  inclusions: ROAD_INCLUSIONS,
  faqs: [FAQ.doDham, FAQ.onlyTwo, FAQ.heliTickets, FAQ.hotels, FAQ.meals, FAQ.seniors, FAQ.weather, FAQ.registration, FAQ.documents],
  cta: { ...cta("Plan My Do Dham Yatra"), title: "Kedarnath and Badrinath Await" },
  relatedTours: related("do-dham"),
});
