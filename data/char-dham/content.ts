/* ============================================================
   CHAR DHAM YATRA — SHARED CONTENT BLOCKS
   ------------------------------------------------------------
   Every Char Dham page is composed from these blocks (see
   pages.ts). Edit content here; no component code changes.

   ► SAMPLE VALUES — replace before publishing:
     - SAMPLE dates and booking defaults (labelled SAMPLE on page).
     - Itineraries are SAMPLE itineraries.
     - Prices: add `pricing.price` to a package to show it;
       until then every card shows "Price on Request".

   CONTENT RULES (keep when editing):
   - Never hardcode temple opening/closing dates unless verified
     for that year; they are announced annually.
   - No helipad names, flight schedules, aircraft or approvals.
   - Registration requirements: confirm each season before
     stating them as current.
   - Altitudes are approximate. Beliefs are presented as tradition.
   - No reviews, ratings or awards unless real and verified.
   ============================================================ */

import type { Departure, Dham, HelicopterTour, ItineraryOption, Place, Spotlight } from "@/components/activities/experience/product-types";
import {
  alaknandaBadrinath,
  badrinathHelicopter,
  badrinathTemple,
  bhagirathiHarsil,
  familyYatra,
  gangotriTemple,
  haridwarAarti,
  helicopterYatra,
  heroPanorama,
  himalayanLandscape,
  kedarnathHelicopter,
  kedarnathTemple,
  manaVillage,
  mandakiniValley,
  muktinath,
  omkareshwarUkhimath,
  pashupatinath,
  roadYatra,
  seniorPilgrims,
  sunriseTemple,
  yamunaJankiChatti,
  yamunotriTemple,
} from "./images";
import { kailash } from "../helicopter-tours/images";

export const BASE = "/activities/char-dham-yatra";
export const href = (slug: string) => `${BASE}/${slug}`;

/* ============================================================
   SAMPLE VALUES (edit here)
   ============================================================ */

export const SAMPLE_DATE = "2027-05-15";

export const SAMPLE_DEPARTURES: Departure[] = [
  { date: "2027-05-15", status: "open" },
  { date: "2027-05-22", status: "open" },
  { date: "2027-05-29", status: "limited" },
  { date: "2027-06-05", status: "enquire" },
  { date: "2027-06-12", status: "enquire" },
];

export const departures = (title = "Upcoming Sample Yatra Dates"): HelicopterTour["departures"] => ({
  title,
  intro: "Choose a date to check availability. Departures are confirmed only after the season's temple opening dates are announced.",
  sample: true,
  notice: "Sample dates — actual departure dates subject to confirmation",
  dates: SAMPLE_DEPARTURES,
});

export const bookingWidget = (tourType: string, duration: string): HelicopterTour["bookingWidget"] => ({
  destination: "Char Dham",
  departures: ["Dehradun", "Haridwar", "Rishikesh", "Delhi (on request)"],
  tourTypes: ["Helicopter Yatra", "Road Yatra", "Do Dham (Kedarnath + Badrinath)", "Custom Yatra"],
  travelerOptions: ["1 Adult", "2 Adults", "3 Adults", "4 Adults", "Family (5+)", "Group (10+)"],
  defaults: {
    date: SAMPLE_DATE,
    travelers: "2 Adults",
    departure: tourType === "Road Yatra" ? "Haridwar" : "Dehradun",
    tourType,
    message: "We would like to plan a Char Dham Yatra.",
  },
  duration,
  labels: { departure: "Starting Point", tourType: "Yatra Type" },
  sample: true,
  sampleNotice: "Sample date — actual departure dates subject to confirmation",
});

/* ============================================================
   THE FOUR DHAMS
   ============================================================ */

export const DHAMS: Dham[] = [
  {
    id: "yamunotri",
    name: "Yamunotri",
    temple: "Yamunotri Temple",
    deity: "Goddess Yamuna",
    region: "Uttarkashi",
    altitude: "Approx. 3,290 m",
    text: "Traditionally the first Dham, set in a narrow Himalayan gorge near the source region of the Yamuna.",
    image: yamunotriTemple,
    href: href("yamunotri"),
  },
  {
    id: "gangotri",
    name: "Gangotri",
    temple: "Gangotri Temple",
    deity: "Goddess Ganga",
    region: "Uttarkashi",
    altitude: "Approx. 3,100 m",
    text: "The second Dham, dedicated to Goddess Ganga on the banks of the Bhagirathi among the Garhwal Himalaya.",
    image: gangotriTemple,
    href: href("gangotri"),
  },
  {
    id: "kedarnath",
    name: "Kedarnath",
    temple: "Kedarnath Temple",
    deity: "Lord Shiva",
    region: "Rudraprayag",
    altitude: "Approx. 3,580 m",
    text: "The revered Himalayan abode of Lord Shiva, at the head of the Mandakini valley beneath snow peaks.",
    image: kedarnathTemple,
    href: href("kedarnath"),
  },
  {
    id: "badrinath",
    name: "Badrinath",
    temple: "Badrinath Temple",
    deity: "Lord Vishnu (Badrinarayan)",
    region: "Chamoli",
    altitude: "Approx. 3,130 m",
    text: "Traditionally the final Dham, dedicated to Lord Vishnu on the Alaknanda between the Nar and Narayan ranges.",
    image: badrinathTemple,
    href: href("badrinath"),
  },
];

export const dhamsSection = (title = "Explore the Four Sacred Dhams"): HelicopterTour["dhams"] => ({
  title,
  intro: "Yamunotri, Gangotri, Kedarnath and Badrinath — four sacred shrines of the Garhwal Himalaya, traditionally visited from west to east.",
  items: DHAMS,
});

/* ============================================================
   PLACES & MAP (approximate coordinates)
   ============================================================ */

export const PLACES: Place[] = [
  { id: "haridwar", name: "Haridwar", group: "Gateway", lat: 29.945, lon: 78.164, elevation: "Approx. 310 m", label: "right", text: "The sacred Ganga city where many road yatras traditionally begin.", image: haridwarAarti },
  { id: "rishikesh", name: "Rishikesh", group: "Gateway", lat: 30.087, lon: 78.268, text: "The yoga town on the Ganga, an optional start or extension." },
  { id: "dehradun", name: "Dehradun", group: "Gateway", lat: 30.316, lon: 78.032, elevation: "Approx. 640 m", label: "left", text: "Uttarakhand's capital and the usual base for helicopter yatras." },
  { id: "barkot", name: "Barkot", group: "Yamunotri Valley", lat: 30.809, lon: 78.205, elevation: "Approx. 1,220 m", label: "left", text: "A valley town and common overnight stop on the way to Yamunotri." },
  { id: "janki-chatti", name: "Janki Chatti", group: "Yamunotri Valley", lat: 30.973, lon: 78.437, text: "The starting point of the walk to Yamunotri; ponies and palanquins are available locally." },
  { id: "kharsali", name: "Kharsali", group: "Yamunotri Valley", lat: 30.98, lon: 78.443, text: "A village near Janki Chatti, associated with the winter worship of Goddess Yamuna and served by helicopter yatras." },
  { id: "yamunotri", name: "Yamunotri", group: "Yamunotri Valley", lat: 31.014, lon: 78.46, elevation: "Approx. 3,290 m", label: "top", text: "The first Dham, dedicated to Goddess Yamuna, reached on foot, by pony or by palanquin.", image: yamunotriTemple },
  { id: "uttarkashi", name: "Uttarkashi", group: "Gangotri Valley", lat: 30.727, lon: 78.435, elevation: "Approx. 1,160 m", label: "bottom", text: "A pilgrimage town on the Bhagirathi, between the Yamunotri and Gangotri valleys." },
  { id: "harsil", name: "Harsil", group: "Gangotri Valley", lat: 31.038, lon: 78.743, elevation: "Approx. 2,620 m", label: "top", text: "A scenic Bhagirathi valley village, used as a base for Gangotri on helicopter yatras.", image: bhagirathiHarsil },
  { id: "gangotri", name: "Gangotri", group: "Gangotri Valley", lat: 30.994, lon: 78.94, elevation: "Approx. 3,100 m", label: "right", text: "The second Dham, dedicated to Goddess Ganga, reached by road.", image: gangotriTemple },
  { id: "guptkashi", name: "Guptkashi", group: "Kedarnath Valley", lat: 30.525, lon: 79.082, elevation: "Approx. 1,320 m", label: "bottom", text: "A Mandakini valley town and common base for the Kedarnath journey." },
  { id: "phata", name: "Phata", group: "Kedarnath Valley", lat: 30.585, lon: 79.03, text: "A village in the Kedarnath valley; helicopter services for Kedarnath operate from this area." },
  { id: "sersi", name: "Sersi", group: "Kedarnath Valley", lat: 30.6, lon: 79.035, text: "A village in the Kedarnath valley; helicopter services for Kedarnath also operate from this area." },
  { id: "kedarnath", name: "Kedarnath", group: "Kedarnath Valley", lat: 30.735, lon: 79.067, elevation: "Approx. 3,580 m", label: "left", text: "The third Dham, abode of Lord Shiva, reached on foot, by pony or palanquin, or by helicopter service.", image: kedarnathTemple },
  { id: "ukhimath", name: "Ukhimath", group: "Kedarnath Valley", lat: 30.517, lon: 79.098, text: "Home of the Omkareshwar Temple, the winter seat of Kedarnath worship.", image: omkareshwarUkhimath },
  { id: "joshimath", name: "Joshimath", group: "Badrinath Valley", lat: 30.556, lon: 79.565, elevation: "Approx. 1,890 m", text: "A mountain town on the way to Badrinath, associated with its winter worship traditions." },
  { id: "badrinath", name: "Badrinath", group: "Badrinath Valley", lat: 30.744, lon: 79.493, elevation: "Approx. 3,130 m", label: "right", text: "The fourth Dham, dedicated to Lord Vishnu (Badrinarayan), on the banks of the Alaknanda.", image: badrinathTemple },
  { id: "mana", name: "Mana", group: "Badrinath Valley", lat: 30.773, lon: 79.497, text: "A village near Badrinath, close to the Indo-Tibetan border.", image: manaVillage },
];

/** Map with road, helicopter and Do Dham routes; `first` sets the route shown initially. */
export const mapSection = (selected = "kedarnath", first: "road" | "helicopter" | "do-dham" = "road"): HelicopterTour["map"] => {
  const m = baseMap(selected);
  return { ...m, routes: [...(m.routes ?? [])].sort((x, y) => Number(y.id === first) - Number(x.id === first)) };
};

const baseMap = (selected: string): NonNullable<HelicopterTour["map"]> => ({
  title: "The Char Dham Yatra Map",
  intro: "Switch between road, helicopter and Do Dham routes, then tap a marker to learn about each place.",
  note: "Illustrative routes only. Actual roads, helipads and flight paths depend on the selected package, the operator, weather and local regulations.",
  bounds: { west: 77.9, east: 79.75, south: 29.8, north: 31.15 },
  route: ["haridwar", "barkot", "yamunotri", "uttarkashi", "gangotri", "guptkashi", "kedarnath", "badrinath", "haridwar"],
  routes: [
    {
      id: "road",
      label: "Road route",
      style: "road",
      places: ["haridwar", "barkot", "yamunotri", "uttarkashi", "gangotri", "guptkashi", "kedarnath", "badrinath", "haridwar"],
      note: "Yamunotri and Kedarnath are reached on foot, by pony, palanquin or helicopter service from the nearest road head.",
    },
    {
      id: "helicopter",
      label: "Helicopter route",
      style: "air",
      places: ["dehradun", "yamunotri", "harsil", "kedarnath", "badrinath", "dehradun"],
      note: "Helicopter yatras typically serve the Yamunotri (Kharsali) area, the Harsil area for Gangotri, the Kedarnath sector and Badrinath; arcs are not flight paths.",
    },
    {
      id: "do-dham",
      label: "Do Dham route",
      style: "custom",
      places: ["haridwar", "guptkashi", "kedarnath", "badrinath", "haridwar"],
      note: "Do Dham covers Kedarnath and Badrinath only.",
    },
  ],
  selected,
});

export const explorer: HelicopterTour["explorer"] = {
  title: "Places Along the Char Dham Route",
  intro: "Gateways, valley towns and sacred sites of the four Dham valleys. Filter by valley and swipe through.",
  note: "A regional guide, not an itinerary: which places you visit or stay at depends on the package you choose.",
};

/* ============================================================
   SACRED ROUTE (scroll journey)
   ============================================================ */

export const journey: HelicopterTour["journey"] = {
  title: "Travel the Sacred Circuit",
  intro: "Scroll to follow the traditional sequence, from the source of the Yamuna to the abode of Badrinarayan.",
  note: "The traditional order runs west to east. Actual routing depends on the selected package, weather and road or flight conditions.",
  marker: "dot",
  stages: [
    { name: "Yamunotri", kicker: "01 · Goddess Yamuna", text: "Begin in the narrow gorge of the Yamuna, where pilgrims walk up to the temple from Janki Chatti.", image: yamunotriTemple, elevation: "Approx. 3,290 m" },
    { name: "Gangotri", kicker: "02 · Goddess Ganga", text: "Continue to the Bhagirathi valley and the temple of Goddess Ganga among pine and deodar forests.", image: gangotriTemple, elevation: "Approx. 3,100 m" },
    { name: "Kedarnath", kicker: "03 · Lord Shiva", text: "Journey up the Mandakini valley to the stone temple of Lord Shiva beneath snow peaks.", image: kedarnathTemple, elevation: "Approx. 3,580 m" },
    { name: "Badrinath", kicker: "04 · Lord Vishnu", text: "Complete the circuit at Badrinath on the Alaknanda, between the Nar and Narayan ranges.", image: badrinathTemple, elevation: "Approx. 3,130 m" },
  ],
};

/* ============================================================
   SPOTLIGHTS
   ============================================================ */

export const S: Record<string, Spotlight> = {
  helicopter: {
    id: "helicopter",
    eyebrow: "Helicopter Yatra",
    title: "Char Dham Yatra by Helicopter",
    paragraphs: [
      "A helicopter-based yatra can significantly reduce the long road journeys and trekking of the traditional circuit. It suits travellers with limited time, families and senior pilgrims who want to complete all four Dhams in comfort.",
      "Uttarakhand Tourism itself lists an air-based Char Dham itinerary, typically run from Dehradun through the Yamunotri, Gangotri, Kedarnath and Badrinath sectors.",
    ],
    points: ["Sample 5N / 6D from Dehradun", "Far less road travel", "Suited to seniors and families", "Ground transfers arranged locally"],
    image: helicopterYatra,
    cta: { label: "Explore Helicopter Yatra", href: href("helicopter") },
    note: "Helicopter schedules, helipads and timings are set by the operator and depend on weather and aviation requirements.",
    variant: "split",
  },
  road: {
    id: "road",
    eyebrow: "Road Yatra",
    title: "Char Dham Yatra by Road",
    paragraphs: [
      "The classic way to travel the Char Dham: through river valleys, confluence towns and terraced villages, with time to pause and absorb the journey between the shrines.",
      "Uttarakhand Tourism's own road itinerary covers Haridwar, Yamunotri, Gangotri, Kedarnath and Badrinath over several days. We plan the pace, stops and comfort level around you.",
    ],
    points: ["Scenic Himalayan road travel", "Flexible sightseeing", "A longer, deeper pilgrimage", "Ideal for families and groups", "Fully customisable itinerary", "Private vehicle with driver"],
    image: roadYatra,
    cta: { label: "Explore Road Yatra", href: href("by-road") },
    variant: "split",
    reverse: true,
  },
  senior: {
    id: "senior",
    eyebrow: "For Senior Pilgrims",
    title: "Designed for Senior Pilgrims",
    paragraphs: [
      "Many devotees wish to complete the Char Dham with their parents or grandparents. We plan the journey around their comfort: less travel per day, comfortable stays and help at every step.",
    ],
    cards: [
      { icon: "helicopter", title: "Reduced travel burden", text: "Helicopter options and shorter daily drives." },
      { icon: "bed", title: "Comfortable stays", text: "Accommodation chosen for comfort, subject to availability." },
      { icon: "users", title: "Ground assistance", text: "Help with transfers, ponies and palanquins where needed." },
      { icon: "clock", title: "Flexible pacing", text: "Rest days and unhurried darshan planning." },
      { icon: "heart", title: "Family coordination", text: "We keep the whole family informed and together." },
      { icon: "headset", title: "Dedicated support", text: "A Karvaahh contact throughout the yatra." },
    ],
    cta: { label: "Plan a Senior Citizen Yatra", href: href("senior-citizens") },
    note: "We do not provide medical services. Please consult a doctor before travelling to high altitude.",
    variant: "cards",
  },
  family: {
    id: "family",
    eyebrow: "Family Yatra",
    title: "A Meaningful Family Journey",
    paragraphs: ["Share the Char Dham across generations, with planning that works for every age — from grandparents to children."],
    cards: [
      { icon: "heart", title: "Parents", text: "Comfortable planning so you can focus on the family." },
      { icon: "sun", title: "Children", text: "Flexible schedules with time to rest and explore." },
      { icon: "users", title: "Grandparents", text: "Helicopter options, assistance and gentle pacing." },
      { icon: "car", title: "Family groups", text: "Private vehicles, family rooms and personalised support." },
    ],
    cta: { label: "Plan a Family Yatra", href: href("family") },
    variant: "cards",
    dark: true,
  },
  doDham: {
    id: "do-dham",
    eyebrow: "Do Dham Yatra",
    title: "Short on Time? Choose Do Dham",
    paragraphs: [
      "The Do Dham Yatra covers Kedarnath and Badrinath — the abodes of Lord Shiva and Lord Vishnu — in a shorter journey for travellers who cannot complete all four shrines.",
    ],
    points: ["Kedarnath + Badrinath", "By road or helicopter", "Shorter duration", "Ideal for a first Himalayan yatra"],
    image: kedarnathHelicopter,
    cta: { label: "Explore Do Dham", href: href("do-dham") },
    variant: "split",
  },
  winter: {
    id: "winter",
    eyebrow: "Winter Char Dham",
    title: "Discover Winter Char Dham",
    paragraphs: [
      "The four high-altitude shrines close each winter because of snow and severe conditions. During these months, worship traditionally continues at lower-altitude winter seats.",
      "Uttarakhand Tourism describes Ukhimath's Omkareshwar Temple as the winter seat of Kedarnath worship. Winter worship of Badrinath is associated with Pandukeshwar and Joshimath, of Gangotri with Mukhba, and of Yamunotri with Kharsali.",
    ],
    points: ["Omkareshwar Temple, Ukhimath (Kedarnath)", "Pandukeshwar & Joshimath (Badrinath)", "Mukhba (Gangotri)", "Kharsali (Yamunotri)"],
    image: omkareshwarUkhimath,
    cta: { label: "Explore Winter Pilgrimage", message: "Hello Karvaahh, I'd like to plan a winter Char Dham pilgrimage to the winter seats." },
    note: "Winter seats and access are confirmed for your dates; mountain roads can be affected by snow.",
    variant: "immersive",
  },
  crossBorder: {
    id: "cross-border",
    eyebrow: "India + Nepal",
    title: "Extend Your Spiritual Journey",
    paragraphs: [
      "Because Karvaahh operates in both India and Nepal, we can join your Char Dham Yatra with Nepal's great pilgrimages in one seamless, customised journey.",
    ],
    cards: [
      { icon: "landmark", title: "Pashupatinath + Char Dham", text: "Kathmandu's sacred Shiva temple with the four Dhams." },
      { icon: "mountainSnow", title: "Muktinath + Char Dham", text: "The Himalayan shrine of Mustang with the Garhwal Dhams." },
      { icon: "heart", title: "Lumbini + Char Dham", text: "The birthplace of the Buddha with the Himalayan circuit." },
      { icon: "compass", title: "Kathmandu + Char Dham", text: "Heritage Kathmandu and the Char Dham in one trip." },
    ],
    cta: { label: "Create Custom Spiritual Journey", href: href("custom") },
    note: "These are customised itineraries, planned on request — not fixed packages.",
    variant: "cards",
  },
};

/** The four immersive Dham features. */
export const DHAM_FEATURES: Record<string, Spotlight> = {
  yamunotri: {
    id: "yamunotri-feature",
    eyebrow: "01 · Yamunotri",
    title: "Begin With Yamunotri",
    paragraphs: [
      "Yamunotri is traditionally the starting point of the Char Dham circuit and is associated with Goddess Yamuna. The temple lies in a dramatic Himalayan setting near the source region of the Yamuna.",
      "Pilgrims walk up from Janki Chatti, or travel by pony or palanquin. Near the temple, the hot spring of Surya Kund is traditionally used to cook rice as a prasad offering.",
    ],
    points: ["Yamunotri Temple", "Yamuna river", "Janki Chatti", "Himalayan valley"],
    image: yamunotriTemple,
    cta: { label: "Explore Yamunotri", href: href("yamunotri") },
    variant: "immersive",
  },
  gangotri: {
    id: "gangotri-feature",
    eyebrow: "02 · Gangotri",
    title: "Seek Blessings at Gangotri",
    paragraphs: [
      "Gangotri is dedicated to Goddess Ganga and sits among the Garhwal Himalaya on the banks of the Bhagirathi. Uttarakhand Tourism identifies it as the second stop in the traditional Char Dham sequence.",
      "The temple is reached by road. Tradition holds that King Bhagirath meditated here to bring the Ganga to earth; the river's glacial source at Gaumukh lies further upstream.",
    ],
    points: ["Gangotri Temple", "Bhagirathi river", "Mountain landscape", "Harsil valley"],
    image: gangotriTemple,
    cta: { label: "Explore Gangotri", href: href("gangotri") },
    variant: "immersive",
  },
  kedarnath: {
    id: "kedarnath-feature",
    eyebrow: "03 · Kedarnath",
    title: "Journey to the Abode of Lord Shiva",
    paragraphs: [
      "Kedarnath is one of the most revered Himalayan temple destinations, dedicated to Lord Shiva and counted among the twelve Jyotirlingas. It is also one of the Char Dham destinations.",
      "The stone temple stands at the head of the Mandakini valley. Pilgrims reach it on foot from Gaurikund, by pony or palanquin, or by helicopter services operating in the valley.",
    ],
    points: ["Kedarnath Temple", "Snow peaks", "Mandakini river", "Himalayan valley"],
    image: kedarnathTemple,
    cta: { label: "Explore Kedarnath", href: href("kedarnath") },
    variant: "immersive",
  },
  badrinath: {
    id: "badrinath-feature",
    eyebrow: "04 · Badrinath",
    title: "Complete Your Sacred Journey at Badrinath",
    paragraphs: [
      "Badrinath is dedicated to Lord Vishnu as Badrinarayan and is traditionally the final shrine in the Char Dham sequence. It is reached by road along the Alaknanda.",
      "Pilgrims traditionally bathe in the hot spring of Tapt Kund before darshan. The Nar and Narayan ranges rise on either side, and Mana village lies close by.",
    ],
    points: ["Badrinath Temple", "Alaknanda river", "Nar-Narayan peaks", "Tapt Kund", "Mana village"],
    image: badrinathTemple,
    cta: { label: "Explore Badrinath", href: href("badrinath") },
    variant: "immersive",
  },
};

/* ============================================================
   ITINERARIES (SAMPLE)
   ============================================================ */

export const HELI_DAYS = [
  { title: "Day 1 · Dehradun Arrival", text: "Arrival, hotel check-in, yatra briefing and documentation / registration check. Dinner and overnight in Dehradun." },
  { title: "Day 2 · Dehradun → Kharsali → Yamunotri", text: "Helicopter departure to the Kharsali area. Ground transfer, palanquin or walk according to the selected arrangement for Yamunotri darshan. Return and overnight at Kharsali." },
  { title: "Day 3 · Kharsali → Harsil → Gangotri", text: "Helicopter flight to the Harsil area, ground transfer to Gangotri for darshan, return to Harsil. Local sightseeing where included. Overnight Harsil." },
  { title: "Day 4 · Harsil → Kedarnath Sector", text: "Helicopter journey towards the Kedarnath sector, transfer according to the operational arrangement and Kedarnath darshan. Overnight as per the selected package." },
  { title: "Day 5 · Kedarnath Sector → Badrinath", text: "Helicopter transfer to Badrinath, hotel check-in and Badrinath Temple darshan, with an evening spiritual experience. Overnight Badrinath." },
  { title: "Day 6 · Badrinath → Dehradun", text: "Morning darshan where applicable, breakfast and helicopter return to Dehradun. Yatra completion." },
];

export const ROAD_DAYS = [
  { title: "Day 1 · Haridwar", text: "Arrival in Haridwar and evening Ganga Aarti where time allows. Overnight Haridwar." },
  { title: "Day 2 · Haridwar → Barkot", text: "Drive via Dehradun and Mussoorie hills to Barkot in the Yamuna valley." },
  { title: "Day 3 · Barkot → Yamunotri → Barkot", text: "Drive to Janki Chatti, walk, pony or palanquin to Yamunotri for darshan, return to Barkot." },
  { title: "Day 4 · Barkot → Uttarkashi", text: "Drive to Uttarkashi on the Bhagirathi; visit local temples where time allows." },
  { title: "Day 5 · Uttarkashi → Gangotri → Uttarkashi", text: "Day trip along the Bhagirathi valley to Gangotri for darshan." },
  { title: "Day 6 · Uttarkashi → Guptkashi", text: "A long scenic drive into the Mandakini valley." },
  { title: "Day 7 · Kedarnath", text: "Trek, pony, palanquin or helicopter service (booked separately where applicable) to Kedarnath for darshan." },
  { title: "Day 8 · Kedarnath → Guptkashi", text: "Return to the valley after morning darshan where possible." },
  { title: "Day 9 · Guptkashi → Badrinath", text: "Drive via Joshimath to Badrinath; Tapt Kund and evening darshan." },
  { title: "Day 10 · Badrinath → Rudraprayag / Haridwar", text: "Visit Mana village where time allows and begin the return journey." },
];

export const DO_DHAM_DAYS = [
  { title: "Day 1 · Haridwar → Guptkashi", text: "Drive along the Ganga and Alaknanda to Guptkashi in the Mandakini valley." },
  { title: "Day 2 · Kedarnath", text: "Trek, pony, palanquin or helicopter service to Kedarnath for darshan." },
  { title: "Day 3 · Kedarnath → Guptkashi", text: "Return to the valley after morning darshan where possible." },
  { title: "Day 4 · Guptkashi → Badrinath", text: "Drive via Joshimath to Badrinath for evening darshan." },
  { title: "Day 5 · Badrinath → Haridwar", text: "Morning darshan, Mana village where time allows, and the return drive." },
];

export const itineraryOptions: Record<"helicopter" | "road" | "doDham", ItineraryOption> = {
  helicopter: {
    id: "helicopter",
    tab: "Helicopter · 5N / 6D",
    title: "Char Dham by Helicopter — Sample 5N / 6D",
    tag: "Sample itinerary",
    summary: "From Dehradun through the Yamunotri, Gangotri, Kedarnath and Badrinath sectors, returning to Dehradun.",
    steps: HELI_DAYS,
    notice: "Sample itinerary. Exact helipads, aircraft changes, timings and temple access depend on the operator, weather, aviation requirements and local conditions.",
    availability: "standard",
  },
  road: {
    id: "road",
    tab: "Road · 9N / 10D",
    title: "Char Dham by Road — Sample 9N / 10D",
    tag: "Sample itinerary",
    summary: "The classic road circuit from Haridwar through all four Dham valleys and back.",
    steps: ROAD_DAYS,
    notice: "Sample itinerary. The route, overnight stops and pace are customised; road and weather conditions can change plans.",
    availability: "standard",
  },
  doDham: {
    id: "do-dham",
    tab: "Do Dham · 4N / 5D",
    title: "Do Dham (Kedarnath + Badrinath) — Sample 4N / 5D",
    tag: "Sample itinerary",
    summary: "A shorter yatra to the abodes of Lord Shiva and Lord Vishnu.",
    steps: DO_DHAM_DAYS,
    notice: "Sample itinerary. Helicopter options to Kedarnath can shorten the journey, subject to availability.",
    availability: "on-request",
  },
};

export const heliDayWise: HelicopterTour["dayWise"] = {
  title: "Helicopter Yatra, Day by Day",
  intro: "A sample of how the six days are paced.",
  note: "Sample itinerary — actual route and accommodation depend on the selected operator/package, weather, aviation requirements and local conditions.",
  days: HELI_DAYS.map((d, i) => ({
    day: `Day ${i + 1}`,
    title: d.title.replace(/^Day \d+ · /, ""),
    text: d.text,
    meta: [
      { label: "Stay", value: i === 5 ? "—" : "As per selected package" },
      { label: "Meals", value: "As per selected package" },
      { label: "Transport", value: i === 0 ? "Ground transfer" : "Helicopter + ground transfer" },
    ],
  })),
};

/* ============================================================
   SEASONS
   ============================================================ */

export const seasons: HelicopterTour["seasons"] = {
  title: "Best Time for Char Dham Yatra",
  intro: "The high-altitude shrines operate seasonally. Uttarakhand Tourism describes them as closed for roughly six months each winter, opening in spring or summer.",
  note: "Opening and closing dates are announced each year — we confirm them for your season before booking. Weather can affect roads and helicopter operations at any time.",
  items: [
    { name: "Pre-season", months: "Opening period (spring)", rating: "Fresh & quieter", icon: "leaf", text: "Pilgrimage begins once the temples open for the season." },
    { name: "Peak season", months: "May – June", rating: "Most popular", icon: "sun", text: "Pleasant days and the busiest time — plan early." },
    { name: "Monsoon", months: "July – August", rating: "Weather-sensitive", icon: "rain", text: "Rain and landslides can disrupt roads and flights." },
    { name: "Post-monsoon", months: "September – October", rating: "Clear views", icon: "mountainSnow", text: "Crisp air and clear mountain views before closure." },
    { name: "Winter", months: "Main shrines closed", rating: "Winter seats", icon: "snow", text: "Worship continues at the lower-altitude winter seats." },
  ],
};

/* ============================================================
   PACKAGES (prices only when real Karvaahh pricing is entered)
   ============================================================ */

type Pkg = HelicopterTour["options"]["items"][number];

export const PACKAGES: Record<string, Pkg> = {
  helicopter: {
    name: "Char Dham by Helicopter",
    basis: "Helicopter yatra",
    duration: "Sample 5N / 6D",
    price: "Price on Request",
    pricing: { currency: "INR", basis: "perPerson" },
    points: ["All four Dhams by helicopter", "From and to Dehradun", "Ground transfers locally"],
    idealFor: "Seniors, families and limited time",
    featured: true,
    image: helicopterYatra,
    href: href("helicopter"),
    whatsappMessage: "Hello Karvaahh, please share the current price for the Char Dham Yatra by helicopter.",
  },
  road: {
    name: "Char Dham by Road",
    basis: "Road yatra",
    duration: "Sample 9N / 10D",
    price: "Price on Request",
    pricing: { currency: "INR", basis: "perPerson" },
    points: ["Private vehicle with driver", "From and to Haridwar", "Flexible sightseeing"],
    idealFor: "Families and groups",
    image: roadYatra,
    href: href("by-road"),
    whatsappMessage: "Hello Karvaahh, please share the current price for the Char Dham Yatra by road.",
  },
  private: {
    name: "Char Dham Private",
    basis: "Private yatra",
    duration: "Custom duration",
    price: "Price on Request",
    points: ["Your dates and pace", "Choice of stays", "Road, helicopter or both"],
    idealFor: "Couples and private groups",
    image: himalayanLandscape,
    href: href("custom"),
    whatsappMessage: "Hello Karvaahh, I'd like a private Char Dham Yatra. Here are our details:",
  },
  senior: {
    name: "Senior Citizen Char Dham",
    basis: "Senior yatra",
    duration: "Customised",
    price: "Price on Request",
    points: ["Reduced travel burden", "Assistance at every stop", "Flexible pacing"],
    idealFor: "Senior pilgrims and their families",
    image: seniorPilgrims,
    href: href("senior-citizens"),
    whatsappMessage: "Hello Karvaahh, I'd like to plan a Char Dham Yatra for senior citizens.",
  },
  family: {
    name: "Family Char Dham",
    basis: "Family yatra",
    duration: "Customised",
    price: "Price on Request",
    points: ["Family rooms", "Private vehicles", "Personalised support"],
    idealFor: "Multi-generation families",
    image: familyYatra,
    href: href("family"),
    whatsappMessage: "Hello Karvaahh, I'd like to plan a family Char Dham Yatra.",
  },
  doDham: {
    name: "Do Dham",
    basis: "Kedarnath + Badrinath",
    duration: "Sample 4N / 5D",
    price: "Price on Request",
    pricing: { currency: "INR", basis: "perPerson" },
    points: ["Kedarnath and Badrinath", "By road or helicopter", "Shorter journey"],
    idealFor: "Travellers short on time",
    image: kedarnathHelicopter,
    href: href("do-dham"),
    whatsappMessage: "Hello Karvaahh, please share the details for the Do Dham Yatra (Kedarnath + Badrinath).",
  },
};

export const packages = (keys: (keyof typeof PACKAGES)[], title = "Choose Your Char Dham Package"): HelicopterTour["options"] => ({
  title,
  intro: "Every package is tailored to your dates. We confirm availability, inclusions and the current price before you book.",
  note: "Prices depend on season, group size, hotels, transport and helicopter availability. Shown only once current Karvaahh pricing is entered.",
  ctaLabel: "Request Current Price",
  items: keys.map((k) => PACKAGES[k]),
});

/* ============================================================
   INCLUSIONS / EXCLUSIONS
   ============================================================ */

export const HELI_INCLUSIONS: HelicopterTour["inclusions"] = [
  { text: "Helicopter flights as per the selected itinerary", status: "package" },
  { text: "Accommodation according to package", status: "package" },
  { text: "Meals according to package", status: "package" },
  { text: "Ground transfers where applicable", status: "package" },
  { text: "Temple visit arrangements where specified", status: "package" },
  { text: "Local assistance", status: "included" },
  { text: "Applicable permits / fees where included", status: "package" },
  { text: "Travel coordination", status: "included" },
];

export const ROAD_INCLUSIONS: HelicopterTour["inclusions"] = [
  { text: "Private vehicle", status: "package" },
  { text: "Accommodation", status: "package" },
  { text: "Meals according to package", status: "package" },
  { text: "Transfers", status: "package" },
  { text: "Driver", status: "package" },
  { text: "Sightseeing according to itinerary", status: "package" },
  { text: "Travel coordination", status: "included" },
];

export const inclusionSets = [
  { label: "Helicopter package", items: HELI_INCLUSIONS },
  { label: "Road package", items: ROAD_INCLUSIONS },
];

export const EXCLUSIONS = [
  "Personal expenses",
  "Insurance",
  "Additional meals",
  "Additional transportation",
  "Donations",
  "Pujas unless specified",
  "Porter / palanquin / pony where not included",
  "Additional hotel nights",
  "Weather-related additional costs",
  "Anything not specifically mentioned",
];

/* ============================================================
   BEFORE YOU TRAVEL
   ============================================================ */

export const beforeYouTravel: HelicopterTour["safety"] = {
  eyebrow: "Travel Information",
  title: "Before You Travel",
  intro: "Please read before booking. The Char Dham lies in the high Himalaya, where conditions change quickly.",
  points: [
    { icon: "file", title: "Yatra registration", text: "Registration requirements are set each season by the authorities. We confirm the current requirements for your dates and help you complete them." },
    { icon: "passport", title: "Identification", text: "Carry valid photo ID; it may be required for registration, hotels and helicopter boarding." },
    { icon: "cloud", title: "Weather", text: "Himalayan weather can affect road and helicopter operations; plans may change at short notice." },
    { icon: "mountainSnow", title: "Altitude", text: "All four shrines lie above 3,000 m. Take it slowly and understand the effects of high altitude." },
    { icon: "snow", title: "Clothing", text: "Warm, layered and weather-appropriate clothing, rain protection and comfortable footwear." },
    { icon: "luggage", title: "Baggage", text: "Helicopter baggage and weight restrictions apply; pack light." },
    { icon: "landmark", title: "Temple rules", text: "Follow temple and local guidelines on dress, photography and conduct." },
    { icon: "heart", title: "Health", text: "Consider your physical condition and consult a medical professional before travelling, especially seniors." },
  ],
};

/* ============================================================
   EXPERIENCES, TRUST, GALLERY, CTA
   ============================================================ */

export const experiences: HelicopterTour["whyHelicopter"] = {
  title: "What Makes the Char Dham Journey Special?",
  intro: "More than four temples — a journey through faith, landscape and tradition.",
  items: [
    { icon: "landmark", title: "Temple Darshan", text: "Darshan at four of the most revered Himalayan shrines.", image: kedarnathTemple },
    { icon: "mountainSnow", title: "Himalayan Landscapes", text: "Snow peaks, glaciers and deep river valleys.", image: himalayanLandscape },
    { icon: "sun", title: "Spiritual Reflection", text: "Quiet mornings and time for prayer and reflection.", image: sunriseTemple },
    { icon: "waves", title: "Sacred Rivers", text: "The Yamuna, Bhagirathi, Mandakini and Alaknanda.", image: bhagirathiHarsil },
    { icon: "flag", title: "Ancient Traditions", text: "Rituals and customs handed down over centuries.", image: badrinathTemple },
    { icon: "compass", title: "Mountain Villages", text: "Terraced fields and stone villages along the way.", image: manaVillage },
    { icon: "users", title: "Local Culture", text: "The warmth and traditions of the Garhwal hills.", image: yamunaJankiChatti },
    { icon: "heart", title: "Family Bonding", text: "A shared journey families remember for life.", image: familyYatra },
  ],
};

export const trust: HelicopterTour["trust"] = {
  title: "Why Travellers Choose Karvaahh",
  intro: "Karvaahh Tours & Travels is a Nepal and India travel specialist with teams in Kathmandu and Delhi NCR.",
  points: [
    { title: "Nepal & India travel specialists", text: "Pilgrimages across both countries, from Kailash and Muktinath to the Char Dham." },
    { title: "Customised yatras", text: "Road, helicopter or combined journeys planned around your family and dates." },
    { title: "Personal coordination", text: "One team handling hotels, transport, helicopter bookings and registration support." },
  ],
};

export const gallery: HelicopterTour["gallery"] = {
  title: "Char Dham Gallery",
  intro: "Scenes from the four Dhams and the journey. Filter by destination and tap any photo to view it larger.",
  items: [
    { image: yamunotriTemple, caption: "Yamunotri Temple", group: "Yamunotri" },
    { image: yamunaJankiChatti, caption: "The Yamuna valley near Janki Chatti", group: "Yamunotri" },
    { image: gangotriTemple, caption: "Gangotri Temple", group: "Gangotri" },
    { image: bhagirathiHarsil, caption: "The Bhagirathi at Harsil", group: "Gangotri" },
    { image: kedarnathTemple, caption: "Kedarnath Temple", group: "Kedarnath" },
    { image: mandakiniValley, caption: "The Mandakini valley", group: "Kedarnath" },
    { image: badrinathTemple, caption: "Badrinath Temple", group: "Badrinath" },
    { image: alaknandaBadrinath, caption: "The Alaknanda at Badrinath", group: "Badrinath" },
    { image: manaVillage, caption: "Mana village", group: "Mountain villages" },
    { image: himalayanLandscape, caption: "The Garhwal Himalaya", group: "Himalayan landscapes" },
    { image: helicopterYatra, caption: "Helicopter yatra", group: "Helicopter experience" },
    { image: kedarnathHelicopter, caption: "Helicopter in the Kedarnath valley", group: "Helicopter experience" },
    { image: badrinathHelicopter, caption: "Helicopter near Badrinath", group: "Helicopter experience" },
    { image: seniorPilgrims, caption: "Pilgrims on the yatra", group: "Pilgrims" },
  ],
};

export const video: HelicopterTour["video"] = {
  title: "Experience Char Dham From Above",
  intro: "A moving glimpse of the four Dhams. Add Karvaahh video footage (`src`) when it is available.",
  frames: [
    { image: heroPanorama, caption: "The Garhwal Himalaya" },
    { image: yamunotriTemple, caption: "Yamunotri" },
    { image: gangotriTemple, caption: "Gangotri" },
    { image: kedarnathTemple, caption: "Kedarnath" },
    { image: badrinathTemple, caption: "Badrinath" },
  ],
};

export const cta = (primaryLabel = "Plan My Char Dham Yatra"): HelicopterTour["cta"] => ({
  title: "Your Sacred Journey Begins Here",
  text: "Travel through the sacred Himalayan landscape with Karvaahh and experience Yamunotri, Gangotri, Kedarnath and Badrinath with thoughtfully planned pilgrimage support.",
  image: sunriseTemple,
  animated: true,
  primaryLabel,
  primaryHref: "#book",
  quoteLabel: "Get a Custom Quote",
  whatsappLabel: "WhatsApp Us",
  planMessage: "Hello Karvaahh, I'd like to plan a Char Dham Yatra.",
  quoteSubject: "Quote request: Char Dham Yatra",
});

/** Related journeys: other Char Dham pages + Karvaahh pilgrimages. */
export const related = (exclude: string): HelicopterTour["relatedTours"] =>
  [
    { slug: "helicopter", title: "Char Dham by Helicopter", text: "All four Dhams by helicopter, sample 5N / 6D.", image: helicopterYatra },
    { slug: "by-road", title: "Char Dham by Road", text: "The classic road circuit from Haridwar.", image: roadYatra },
    { slug: "do-dham", title: "Do Dham Yatra", text: "Kedarnath and Badrinath in a shorter journey.", image: kedarnathHelicopter },
    { slug: "senior-citizens", title: "Senior Citizen Char Dham", text: "A gentler yatra designed for elders.", image: seniorPilgrims },
    { slug: "family", title: "Family Char Dham", text: "A meaningful journey across generations.", image: familyYatra },
    { slug: "custom", title: "Custom Spiritual Journey", text: "Char Dham with Nepal's great pilgrimages.", image: pashupatinath },
  ]
    .filter((r) => r.slug !== exclude)
    .map(({ slug, ...r }) => ({ ...r, href: href(slug) }))
    .concat([
      { title: "Muktinath Helicopter Tour", text: "A helicopter pilgrimage to Muktinath in Nepal.", href: "/activities/helicopter-tours/muktinath-temple", image: muktinath },
      { title: "Kailash Mansarovar Yatra", text: "The great Himalayan yatra to Mount Kailash.", href: "/activities/helicopter-tours/kailash-mansarovar", image: kailash },
    ]);

/* ============================================================
   FAQ POOL
   ============================================================ */

export const FAQ = {
  what: { question: "What is Char Dham Yatra?", answer: "The Char Dham Yatra is a Hindu pilgrimage to four sacred shrines in the Garhwal Himalaya of Uttarakhand: Yamunotri, Gangotri, Kedarnath and Badrinath." },
  which: { question: "Which four temples are included?", answer: "Yamunotri Temple (Goddess Yamuna), Gangotri Temple (Goddess Ganga), Kedarnath Temple (Lord Shiva) and Badrinath Temple (Lord Vishnu as Badrinarayan)." },
  route: { question: "What is the traditional Char Dham route?", answer: "Traditionally west to east: Yamunotri, then Gangotri, Kedarnath and finally Badrinath. Road yatras usually start from Haridwar, Rishikesh or Dehradun." },
  when: { question: "When does Char Dham Yatra operate?", answer: "The shrines open seasonally, generally from spring until around the start of winter, and stay closed for roughly six months. Exact opening and closing dates are announced each year; we confirm them before booking." },
  heli: { question: "What is Char Dham Yatra by helicopter?", answer: "A yatra in which helicopter flights connect the four Dham sectors, greatly reducing road travel. Ground transfers, walks, ponies or palanquins may still be needed for the last stretch, depending on the shrine." },
  heliDays: { question: "How many days is the helicopter yatra?", answer: "Our sample helicopter itinerary is 5 nights / 6 days. Actual duration depends on the operator, the package and the weather." },
  heliStart: { question: "Where does the helicopter yatra start?", answer: "Helicopter Char Dham yatras usually start and end in Dehradun." },
  dehradun: { question: "Is Dehradun the starting point?", answer: "For helicopter yatras, usually yes. Road yatras commonly start from Haridwar, Rishikesh or Dehradun, and we can arrange travel from Delhi." },
  heliTickets: { question: "Are helicopter tickets included?", answer: "In helicopter packages, the flights in the selected itinerary are included. For road packages, a Kedarnath helicopter service is optional and booked separately where available. We confirm everything in writing." },
  hotels: { question: "Are hotels included?", answer: "Accommodation is included according to the selected package; we confirm the hotels and room type before you book." },
  meals: { question: "Are meals included?", answer: "Meals are included according to the selected package. Additional meals are not included." },
  permits: { question: "Are permits included?", answer: "Applicable permits or fees are included where stated in your package. We confirm which ones apply for your dates." },
  seniors: { question: "Can senior citizens join?", answer: "Yes. Helicopter options, assistance and flexible pacing make the yatra more comfortable for seniors. Please consult a doctor before travelling to high altitude." },
  children: { question: "Can children join?", answer: "Yes, with appropriate planning. Helicopter operators may have their own rules for infants and children, which we confirm when booking." },
  heliCancel: { question: "What happens if the helicopter cannot fly?", answer: "Flights may be delayed, rescheduled or cancelled for weather or operational reasons. Rescheduling, alternative arrangements and refunds follow the operator's and package terms, which we explain before booking." },
  weather: { question: "What happens during bad weather?", answer: "Roads and flights can be affected by rain, landslides or snow. Safety comes first; plans may change, and additional costs from delays may apply as per package terms." },
  customise: { question: "Can I customise the itinerary?", answer: "Yes. Dates, pace, hotels, transport and add-ons such as Haridwar, Rishikesh or Nepal can all be tailored." },
  onlyTwo: { question: "Can I do only Kedarnath and Badrinath?", answer: "Yes — that is the Do Dham Yatra, available by road or with helicopter options." },
  doDham: { question: "What is Do Dham Yatra?", answer: "A shorter yatra to two of the four Dhams. Our Do Dham covers Kedarnath and Badrinath." },
  registration: { question: "Is registration required?", answer: "Pilgrim registration requirements are set by the authorities each season. We confirm the current requirements for your dates and help you complete them." },
  documents: { question: "What documents should I carry?", answer: "Valid photo ID, your registration confirmation if required, booking documents and any medical prescriptions you need." },
} satisfies Record<string, { question: string; answer: string }>;

export const ALL_FAQS = Object.values(FAQ);

/* ============================================================
   CORE PAGE BASE
   ============================================================ */

export const charDhamBase = {
  description:
    "A Char Dham Yatra with Karvaahh covering Yamunotri, Gangotri, Kedarnath and Badrinath by helicopter, road or a customised pilgrimage journey.",
  touristType: ["Pilgrims", "Families", "Senior citizens", "Spiritual travellers"],
  startingPoint: "Dehradun / Haridwar",
  endingPoint: "Dehradun / Haridwar",
  region: "Garhwal Himalaya, Uttarakhand",
  bestSeason: "May – June & September – October (seasonal)",
  transportation: "Helicopter, road or both",
  tourTypes: "Private / Group / Custom",
  groupSize: "Private or group, subject to package",
  landingNote: "Helicopter access depends on operator, weather and regulations",
  labels: { why: "The Journey", journey: "The Sacred Route", related: "More Pilgrimages", relatedTitle: "Related Journeys", glance: "Yatra at a Glance", nav: { safety: "Before You Travel", book: "Packages" } },
  stickyPlan: { label: "Plan Yatra", href: "#book" },
  places: PLACES,
  explorer,
  journey,
  seasons,
  trust,
  gallery,
  video,
  inclusions: HELI_INCLUSIONS,
  inclusionSets,
  exclusions: EXCLUSIONS,
  safety: beforeYouTravel,
  whyHelicopter: experiences,
  travelerTypes: {
    title: "Who Is the Char Dham Yatra For?",
    intro: "Thoughtfully planned journeys for every pilgrim.",
    items: [
      { icon: "heart", title: "Devotees", text: "A complete four-Dham pilgrimage." },
      { icon: "users", title: "Families", text: "Comfortable planning across generations." },
      { icon: "shield", title: "Senior Citizens", text: "Helicopter options and gentle pacing." },
      { icon: "clock", title: "Short on Time", text: "Helicopter yatra or Do Dham." },
      { icon: "compass", title: "Spiritual Travellers", text: "Faith, reflection and Himalayan landscapes." },
      { icon: "car", title: "Road Travellers", text: "The classic scenic circuit by road." },
    ],
  },
  route: {
    title: "The Char Dham Route",
    intro: "The traditional sequence of the four Dhams.",
    note: "Illustrative sequence. Actual routing depends on the package, weather and road or flight conditions.",
    stops: [
      { name: "Haridwar / Dehradun", detail: "Start", mode: "landing" as const },
      { name: "Yamunotri", detail: "Goddess Yamuna", mode: "landing" as const },
      { name: "Gangotri", detail: "Goddess Ganga", mode: "landing" as const },
      { name: "Kedarnath", detail: "Lord Shiva", mode: "landing" as const },
      { name: "Badrinath", detail: "Lord Vishnu", mode: "landing" as const },
    ],
  },
} satisfies Partial<HelicopterTour>;

export { heroPanorama };
