/**
 * Langtang Valley Trek — single source of truth for the page.
 *
 * Everything that can go stale (elevations, walking times, permits, fees,
 * guide rules, packages, links) lives here so it can be updated without
 * touching components. Values marked `checked` were cross-checked against
 * published trekking sources in Sept 2026 — they are NOT official figures.
 * Confirm with the Nepal Tourism Board / DNPWC before relying on them.
 */

import type {
  CultureItem,
  Experience,
  FaqItem,
  GalleryItem,
  HeroBadge,
  Highlight,
  InfoCard,
  ItineraryDay,
  LandscapeZone,
  Link,
  PermitFee,
  PrepItem,
  Season,
  TrekImage,
  TrekPackage,
} from "@/types/trek-destination";

/* ------------------------------------------------------------------ */
/* Routes & links — verify every href against the live site           */
/* ------------------------------------------------------------------ */

export const SITE_URL = "https://karvaahh.in";
export const ROUTE = "/adventure/langtang-valley-trek";
export const CANONICAL = `${SITE_URL}${ROUTE}`;

export const links = {
  home: "/",
  /** Breadcrumb "Adventure" target. Existing activity pages live under
   *  /activities/adventure/… — change to "/adventure" if that index exists. */
  adventure: "/activities/adventure",
  contact: "/contact",
  /** Customise CTA → contact page with the trek pre-selected */
  customize: "/contact?trip=langtang-valley-trek&type=custom",
  enquire: "/contact?trip=langtang-valley-trek",
} as const;

export const relatedLinks: (Link & { note: string })[] = [
  { label: "Bagmati Province", href: "/destinations/bagmati-province", note: "Langtang lies in Rasuwa district, Bagmati" },
  { label: "Camping in Nepal", href: "/activities/adventure/camping", note: "Wild nights under Himalayan skies" },
  { label: "Paragliding in Nepal", href: "/activities/adventure/paragliding", note: "Add a flying day in Pokhara" },
];

/* ------------------------------------------------------------------ */
/* Images — one registry, referenced by key everywhere                 */
/* Placeholders are generated files; see README image manifest.        */
/* ------------------------------------------------------------------ */

const IMG = "/images/adventure/langtang-valley-trek";
const img = (file: string, alt: string, brief: string, w = 1600, h = 1067): TrekImage => ({
  src: `${IMG}/${file}`,
  alt,
  brief,
  width: w,
  height: h,
  placeholder: true,
});

export const images = {
  hero: img("langtang-valley-hero.webp", "Langtang Lirung rising above the upper Langtang Valley near Kyanjin Gompa", "Wide panorama of the upper valley with Langtang Lirung; landscape 16:9, subject in upper-right third so text sits left", 2400, 1350),
  overview: img("langtang-valley-trail-overview.webp", "Trekking trail winding through the Langtang Valley beneath snow peaks", "Trekkers on the trail between Langtang Village and Kyanjin Gompa, portrait-friendly crop", 1200, 1500),
  lirung: img("langtang-lirung-mountain-view.webp", "Langtang Lirung summit seen from the valley floor", "Langtang Lirung at golden hour from Kyanjin"),
  kyanjinGompa: img("kyanjin-gompa-monastery.webp", "Kyanjin Gompa monastery with prayer flags and mountains behind", "The monastery building with prayer flags"),
  kyanjinRi: img("kyanjin-ri-himalayan-panorama.webp", "View from Kyanjin Ri over glaciers and Himalayan peaks", "Summit view from Kyanjin Ri with prayer flags"),
  tserkoRi: img("tserko-ri-viewpoint.webp", "Prayer flags on Tserko Ri with a wide Himalayan panorama", "Tserko Ri summit ridge, early morning"),
  village: img("langtang-village-nepal.webp", "Stone houses of Langtang Village beneath mountain slopes", "Rebuilt Langtang Village houses and fields"),
  tamang: img("tamang-culture-langtang.webp", "Local woman in traditional dress outside a stone house in the Langtang region", "People/culture shot — only with the subject's consent"),
  meadows: img("langtang-alpine-meadows.webp", "Yaks grazing on alpine meadows in the upper Langtang Valley", "Yak pastures above Kyanjin"),
  glacial: img("langtang-glacial-river.webp", "Glacial river rushing through a rocky Langtang gorge", "Langtang Khola with boulders / waterfall"),
  forest: img("langtang-forest-trail.webp", "Forest trail with moss-covered trees below Lama Hotel", "Oak/rhododendron/bamboo forest on the lower trail"),
  syabrubesi: img("syabrubesi-trailhead.webp", "Suspension bridge near Syabrubesi at the start of the Langtang trek", "Syabrubesi bridge / trailhead"),
  prayerFlags: img("langtang-prayer-flags-mani-wall.webp", "Mani wall with carved stones and prayer flags on the Langtang trail", "Carved mani stones along the trail"),
  teahouse: img("langtang-teahouse-lodge.webp", "Simple mountain tea house lodge on the Langtang trek", "Exterior of a tea house with mountains"),
  diningRoom: img("langtang-teahouse-dining.webp", "Warm tea house dining room with a stove and trekkers", "Communal dining room around the stove"),
  photography: img("langtang-photography-sunrise.webp", "Sunrise light on snow peaks above the Langtang Valley", "Alpenglow on the peaks"),
  moraine: img("langtang-glacier-moraine.webp", "Glacier moraine and ice above Kyanjin Gompa", "Lirung glacier / moraine walls"),
  cta: img("langtang-valley-panorama-cta.webp", "Wide panorama of the Langtang Himalaya at dusk", "Wide dusk panorama for the closing CTA", 2400, 1200),
} satisfies Record<string, TrekImage>;

export type LangtangImageKey = keyof typeof images;

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

export const hero = {
  eyebrow: "Nepal • Himalayan Trekking",
  title: "Langtang Valley Trek",
  subtitle: "Journey into the Heart of the Himalayas",
  text: "Discover spectacular Himalayan peaks, traditional Tamang villages, glacial valleys, and peaceful alpine landscapes on an unforgettable journey through Langtang.",
  primaryCta: { label: "Explore Trek Packages", href: "#packages" },
  secondaryCta: { label: "Discover the Journey", href: "#itinerary" },
  image: "hero" as LangtangImageKey,
  /** Set `show: false` to hide the badges entirely. */
  badges: {
    show: true,
    items: [
      { label: "Duration", fact: { value: "7–10 days", qualifier: "typical" } },
      { label: "Difficulty", fact: { value: "Moderate" } },
      { label: "Highest point", fact: { value: "4,984 m", qualifier: "Tserko Ri, optional", checked: "2026-09" } },
      { label: "Best seasons", fact: { value: "Spring & Autumn" } },
    ] satisfies HeroBadge[],
  },
};

/* ------------------------------------------------------------------ */
/* Overview                                                            */
/* ------------------------------------------------------------------ */

export const overview = {
  label: "A Journey Through Nepal’s Himalayan Wilderness",
  heading: "Discover the Beauty of Langtang Valley",
  // Supplied copy — keep verbatim.
  text: "Langtang Valley Trek is a breathtaking Himalayan adventure in the heart of Nepal, offering a beautiful blend of spectacular mountain scenery, traditional Tamang culture, and peaceful alpine landscapes. Journey through the scenic villages of Syabrubesi, Lama Hotel, Langtang Village, and Kyanjin Gompa, surrounded by lush forests, cascading waterfalls, glacial rivers, and magnificent snow-capped peaks. Explore the charming settlements of the Langtang region, experience the rich Tibetan-influenced traditions of local communities, and visit the sacred Kyanjin Gompa Monastery. Trek toward Kyanjin Ri and Tserko Ri for panoramic views of Langtang Lirung, Dorje Lakpa, and other Himalayan giants, while discovering the beauty of alpine meadows, yak pastures, and dramatic glacial valleys. Combining adventure, cultural exploration, natural beauty, and serene mountain experiences, Langtang Valley offers an unforgettable Himalayan journey for trekkers seeking tranquility and breathtaking landscapes.",
  image: "overview" as LangtangImageKey,
  facts: [
    { label: "Region", value: "Rasuwa, Bagmati Province" },
    { label: "Trailhead", value: "Syabrubesi" },
    { label: "Protected area", value: "Langtang National Park" },
  ],
};

/* ------------------------------------------------------------------ */
/* Highlights                                                          */
/* ------------------------------------------------------------------ */

export const highlights: Highlight[] = [
  { title: "Langtang Lirung", text: "Experience magnificent views of the region’s iconic Himalayan peak.", image: "lirung", meta: "≈ 7,227 m" },
  { title: "Kyanjin Gompa", text: "Discover a peaceful mountain settlement and its sacred monastery.", image: "kyanjinGompa", meta: "≈ 3,870 m" },
  { title: "Kyanjin Ri", text: "Trek to a scenic viewpoint overlooking the surrounding Himalayan peaks.", image: "kyanjinRi", meta: "≈ 4,773 m" },
  { title: "Tserko Ri", text: "Experience a challenging high-altitude viewpoint with sweeping mountain panoramas.", image: "tserkoRi", meta: "≈ 4,984 m" },
  { title: "Langtang Village", text: "Explore a traditional Himalayan settlement surrounded by dramatic mountain scenery.", image: "village", meta: "≈ 3,430 m" },
  { title: "Tamang Culture", text: "Discover local traditions, architecture, food, and Tibetan-influenced cultural heritage.", image: "tamang" },
  { title: "Alpine Meadows & Yak Pastures", text: "Enjoy peaceful high-altitude landscapes and grazing grounds.", image: "meadows" },
  { title: "Glacial Valleys & Rivers", text: "Witness the natural beauty of glacial streams, rugged valleys, and waterfalls.", image: "glacial" },
];

/* ------------------------------------------------------------------ */
/* Experiences                                                         */
/* ------------------------------------------------------------------ */

export const experiences: Experience[] = [
  {
    title: "Himalayan Trekking Adventure",
    text: "Walk through forest trails, mountain paths, river valleys, and high-altitude landscapes.",
    points: ["Forest to glacier in a few days", "Steady climb that suits acclimatisation", "Quieter trails than many classic routes"],
    image: "forest",
  },
  {
    title: "Traditional Tamang Villages",
    text: "Explore the settlements of the Langtang region and experience local hospitality, traditions, and mountain life.",
    points: ["Family-run tea houses", "Stone houses and terraced fields", "Butter tea and local cooking"],
    image: "village",
  },
  {
    title: "Spiritual Serenity at Kyanjin Gompa",
    text: "Visit the monastery and experience the peaceful atmosphere of this mountain settlement.",
    points: ["Prayer flags and mani walls", "Quiet mornings at 3,870 m", "Respectful visits — ask before photographing"],
    image: "kyanjinGompa",
  },
  {
    title: "Panoramic Mountain Viewpoints",
    text: "Discover the Himalayan panorama from Kyanjin Ri and Tserko Ri, subject to weather and trekking conditions.",
    points: ["Kyanjin Ri: a half-day climb", "Tserko Ri: a long, early-start day", "Clear mornings give the best views"],
    image: "kyanjinRi",
  },
  {
    title: "Alpine Landscapes & Yak Pastures",
    text: "Experience open meadows, rugged mountain terrain, and the distinctive high-altitude environment.",
    points: ["Yak herds on summer pastures", "Wide glacial valley floor", "Easy side walks from Kyanjin"],
    image: "meadows",
  },
  {
    title: "Himalayan Photography",
    text: "Capture snow-covered peaks, traditional settlements, prayer flags, glacial rivers, and scenic mountain trails.",
    points: ["Alpenglow at sunrise and sunset", "Spare batteries — cold drains them fast", "Always ask before photographing people"],
    image: "photography",
  },
];

/* ------------------------------------------------------------------ */
/* Itinerary — SAMPLE route, not a fixed schedule                      */
/* Elevations: approx., cross-checked 2026-09. Walking times: typical. */
/* ------------------------------------------------------------------ */

export const itinerarySettings = {
  /** Set false to hide approximate walking times and elevations. */
  showEstimates: true,
  note: "This is a sample itinerary, not a fixed schedule. Duration, overnight stops, walking hours and route can change with fitness, weather, trail conditions, acclimatisation needs and local arrangements. Elevations and walking times are approximate.",
};

export const itinerary: ItineraryDay[] = [
  { day: 1, title: "Arrival in Kathmandu", from: "Kathmandu", to: "Kathmandu", mode: "arrival", sleepElevationM: 1400, text: "Arrive in Kathmandu, meet your Karvaahh team, check gear and complete trek paperwork." },
  { day: 2, title: "Drive to Syabrubesi", from: "Kathmandu", to: "Syabrubesi", mode: "drive", sleepElevationM: 1500, walking: "7–8 hr drive", text: "A long, scenic road journey north through the hills via Dhunche to the trailhead at Syabrubesi. Road conditions vary with season.", image: "syabrubesi" },
  { day: 3, title: "Syabrubesi to Lama Hotel", from: "Syabrubesi", to: "Lama Hotel", mode: "trek", sleepElevationM: 2470, walking: "5–6 hr", text: "Follow the Langtang Khola upstream on a steady climb through forest, crossing suspension bridges and passing small waterfalls.", image: "forest" },
  { day: 4, title: "Lama Hotel to Langtang Village", from: "Lama Hotel", to: "Langtang Village", mode: "trek", sleepElevationM: 3430, walking: "6–7 hr", text: "The forest thins and the valley opens up; the first big views of Langtang Lirung appear as you climb towards Langtang Village.", image: "village" },
  { day: 5, title: "Langtang Village to Kyanjin Gompa", from: "Langtang Village", to: "Kyanjin Gompa", mode: "trek", sleepElevationM: 3870, walking: "3–4 hr", text: "A shorter day past mani walls and yak pastures to Kyanjin Gompa, giving time to rest and acclimatise.", image: "kyanjinGompa" },
  { day: 6, title: "Explore Kyanjin — Kyanjin Ri or Tserko Ri", from: "Kyanjin Gompa", to: "Kyanjin Gompa", mode: "explore", sleepElevationM: 3870, highPointM: 4984, walking: "3–4 hr (Kyanjin Ri) · 7–8 hr (Tserko Ri)", text: "Choose Kyanjin Ri (about 4,773 m) for a shorter climb, or the more demanding Tserko Ri (about 4,984 m) with an early start — decided on the day with your guide, based on weather and how you feel.", image: "tserkoRi" },
  { day: 7, title: "Trek back towards Lama Hotel", from: "Kyanjin Gompa", to: "Lama Hotel", mode: "trek", sleepElevationM: 2470, walking: "6–7 hr", text: "Retrace the valley downhill, with a different light on the mountains behind you." },
  { day: 8, title: "Lama Hotel to Syabrubesi", from: "Lama Hotel", to: "Syabrubesi", mode: "trek", sleepElevationM: 1500, walking: "4–5 hr", text: "Descend through the forest to Syabrubesi for a final evening in the hills." },
  { day: 9, title: "Return to Kathmandu", from: "Syabrubesi", to: "Kathmandu", mode: "drive", sleepElevationM: 1400, walking: "7–8 hr drive", text: "Drive back to Kathmandu." },
];

/* ------------------------------------------------------------------ */
/* Culture                                                             */
/* ------------------------------------------------------------------ */

export const culture = {
  heading: "Discover the Cultural Heart of Langtang",
  intro: "The Langtang Valley is home to Tamang and other Tibetan-influenced communities whose lives are closely tied to the mountains. Traditions differ from village to village and family to family — the best way to understand them is to ask, listen, and follow your hosts’ lead.",
  items: [
    { title: "Tamang communities & hospitality", text: "Many tea houses along the route are family homes as well as lodges. Staying with local hosts is one of the most direct ways your trek supports the valley." },
    { title: "Tibetan-influenced traditions", text: "Architecture, dress, food and faith in the upper valley show strong Tibetan Buddhist influence, alongside local customs particular to each settlement." },
    { title: "Monasteries, prayer flags & mani walls", text: "Walk clockwise around mani walls and chortens, keeping them on your right. Ask before entering a monastery or photographing ceremonies." },
    { title: "Mountain food & tea houses", text: "Expect dal bhat, Tibetan bread, noodle soups and butter tea. Kyanjin Gompa is known for its locally made yak cheese." },
    { title: "Living with the mountains", text: "Herding, farming and trekking tourism shape the seasons here. Langtang Village was devastated in the 2015 earthquake and has since been rebuilt by its community — travelling respectfully helps that recovery continue." },
  ] satisfies CultureItem[],
  images: ["tamang", "prayerFlags"] as LangtangImageKey[],
};

/* ------------------------------------------------------------------ */
/* Nature — landscape zones by altitude                                 */
/* ------------------------------------------------------------------ */

export const landscapeZones: LandscapeZone[] = [
  { band: "≈ 1,500–2,500 m", title: "River gorges & forest", text: "Oak, rhododendron and bamboo forest along the Langtang Khola, with waterfalls and suspension bridges.", image: "forest" },
  { band: "≈ 2,500–3,500 m", title: "The valley opens", text: "Trees give way to open slopes, stone villages, mani walls and the first full views of the peaks.", image: "village" },
  { band: "≈ 3,500–4,000 m", title: "Alpine meadows & pastures", text: "Broad glacial valley floor, yak pastures and the settlement of Kyanjin Gompa.", image: "meadows" },
  { band: "≈ 4,000–5,000 m", title: "Glaciers & high viewpoints", text: "Moraine, ice and the viewpoints of Kyanjin Ri and Tserko Ri, surrounded by snow peaks.", image: "moraine" },
];

/* ------------------------------------------------------------------ */
/* Seasons                                                             */
/* ------------------------------------------------------------------ */

export const bestTime = {
  /** Configurable recommendation shown above the season cards */
  recommended: "Spring (March–May) and Autumn (September–November)",
  note: "Mountain weather is unpredictable in every season. Visibility, trail conditions and access can change quickly — your guide will adjust plans on the ground.",
  seasons: [
    { name: "Spring", months: "Mar – May", tone: "recommended", summary: "Milder days and rhododendron forests in bloom on the lower trail, subject to local weather.", points: ["Warming temperatures", "Flowering forests at lower altitude", "Haze can build later in the season"] },
    { name: "Autumn", months: "Sep – Nov", tone: "recommended", summary: "Generally popular for mountain trekking, often with clearer views after the monsoon — conditions vary.", points: ["Often stable, clear weather", "Busiest trekking season", "Cold nights at Kyanjin"] },
    { name: "Winter", months: "Dec – Feb", tone: "good", summary: "Colder temperatures and possible snow; quieter trails for well-equipped trekkers.", points: ["Sub-zero nights higher up", "Snow may close high viewpoints", "Warm gear essential"] },
    { name: "Monsoon", months: "Jun – Aug", tone: "caution", summary: "Rainfall, wet and slippery trails, leeches, and possible disruption from landslides.", points: ["Clouds often hide the peaks", "Road and trail disruption possible", "Flexible dates advised"] },
  ] satisfies Season[],
};

/* ------------------------------------------------------------------ */
/* Preparation                                                         */
/* ------------------------------------------------------------------ */

export const preparation = {
  difficulty: {
    rating: "Moderate",
    text: "Suited to reasonably fit walkers, including first-time Himalayan trekkers who prepare well. Expect several days of 4–7 hours on uneven trails, with longer climbs if you attempt Tserko Ri.",
  },
  items: [
    { icon: "boot", title: "Physical preparation", text: "Build up with hill walks, stairs and cardio over 6–8 weeks, ideally carrying a light pack." },
    { icon: "mountain", title: "Altitude & acclimatisation", text: "Ascend gradually, rest when needed and tell your guide about any headache, nausea or dizziness. Descending is the most reliable treatment for altitude sickness." },
    { icon: "layers", title: "Footwear & layers", text: "Broken-in trekking boots, a warm insulated jacket, fleece, waterproof shell and a good sleeping bag for cold nights." },
    { icon: "sun", title: "Weather protection", text: "Sunglasses, sun cream, hat, gloves and a headtorch. Sun is strong at altitude even on cold days." },
    { icon: "drop", title: "Hydration, food & pacing", text: "Drink regularly, eat well and walk at a steady pace. Use a purification method rather than buying bottled water." },
    { icon: "shield", title: "Insurance & emergencies", text: "Carry travel insurance that covers trekking to your maximum altitude and helicopter evacuation." },
    { icon: "leaf", title: "Responsible trekking", text: "Carry out your rubbish, dress modestly in villages and ask before photographing people or religious sites." },
  ] satisfies PrepItem[],
  riskNote: "High-altitude trekking carries real risks. If you have a medical condition or any concerns, consult a qualified doctor before booking.",
};

/* ------------------------------------------------------------------ */
/* Permits & travel info — CONFIRM before departure                    */
/* ------------------------------------------------------------------ */

export const travelInfo = {
  lastReviewed: "September 2026",
  cards: [
    { icon: "permit", confirm: true, title: "Trekking permits", text: "Trekkers currently need a Langtang National Park entry permit and a TIMS card. Karvaahh arranges both as part of your trek.", points: ["Issued in Kathmandu or at checkpoints on the route", "Carry your passport and copies"] },
    { icon: "park", confirm: true, title: "National park entry", text: "The trek lies within Langtang National Park. Entry is checked on the way in — keep your permit with you throughout." },
    { icon: "guide", confirm: true, title: "Guide requirements", text: "Current Nepal rules require foreign trekkers to be accompanied by a licensed guide on this route. Independent trekking without a guide is not permitted." },
    { icon: "road", title: "Getting to Syabrubesi", text: "By road from Kathmandu via Dhunche — local bus or private jeep. It is a long day and can be disrupted by landslides in the monsoon." },
    { icon: "bed", title: "Accommodation", text: "Tea houses and lodges in each overnight settlement. Standards are simple and availability varies by season." },
    { icon: "signal", title: "Connectivity", text: "Mobile coverage is patchy. Some lodges offer paid Wi-Fi and phone charging; expect to be offline for stretches." },
    { icon: "sos", title: "Emergencies & insurance", text: "Your guide carries emergency contacts. Insurance should cover trekking up to about 5,000 m and helicopter rescue." },
  ] satisfies InfoCard[],
  /**
   * Fees as reported by trekking operators in Sept 2026 — NOT official.
   * Keep `showFees: false` until confirmed with the Nepal Tourism Board / DNPWC.
   */
  showFees: false,
  fees: [
    { permit: "Langtang National Park entry", foreign: "NPR 3,000", saarc: "NPR 1,500", nepali: "NPR 100" },
    { permit: "TIMS card", foreign: "NPR 1,000–2,000", saarc: "NPR 600–1,000", nepali: "—" },
  ] satisfies PermitFee[],
};

/* ------------------------------------------------------------------ */
/* Accommodation                                                       */
/* ------------------------------------------------------------------ */

export const accommodation = {
  heading: "Stay Close to the Mountains",
  intro: "Nights on the Langtang trek are spent in family-run tea houses — simple, warm and welcoming, with the mountains just outside the door.",
  items: [
    { title: "Mountain tea houses", text: "Twin-share rooms with basic beds and blankets; bring a sleeping bag for warmth." },
    { title: "Local lodges & guesthouses", text: "In larger settlements some lodges offer attached bathrooms or hot showers, often for a small charge." },
    { title: "Dining & communal spaces", text: "Evenings gather around a stove in the dining room — the social heart of trekking life." },
    { title: "Mountain hospitality", text: "Your hosts are often the families who have lived in the valley for generations." },
  ],
  note: "Accommodation standards and availability vary by location and season. Rooms are allocated on arrival in most settlements.",
  images: ["teahouse", "diningRoom"] as LangtangImageKey[],
};

/* ------------------------------------------------------------------ */
/* Packages — DRAFT. No verified pricing yet → enquiry CTAs.           */
/* Replace inclusions/exclusions with Karvaahh's confirmed terms.      */
/* ------------------------------------------------------------------ */

export const packages: TrekPackage[] = [
  {
    id: "langtang-classic",
    title: "Langtang Valley Classic",
    duration: "9 days (sample)",
    difficulty: "Moderate",
    route: "Kathmandu · Syabrubesi · Lama Hotel · Langtang Village · Kyanjin Gompa",
    accommodation: "Tea houses on trek",
    includes: ["Licensed trekking guide", "Permits arranged", "Ground transport to and from Syabrubesi", "Tea house accommodation on trek"],
    excludes: ["International flights", "Travel insurance", "Personal expenses"],
    price: null,
    detailsHref: null,
    featured: true,
  },
  {
    id: "langtang-tserko-ri",
    title: "Langtang with Tserko Ri",
    duration: "10 days (sample)",
    difficulty: "Moderate to challenging",
    route: "Classic route plus an extra acclimatisation day and Tserko Ri viewpoint",
    accommodation: "Tea houses on trek",
    includes: ["Licensed trekking guide", "Permits arranged", "Extra day at Kyanjin Gompa", "Tea house accommodation on trek"],
    excludes: ["International flights", "Travel insurance", "Personal expenses"],
    price: null,
    detailsHref: null,
  },
  {
    id: "langtang-private",
    title: "Private & Customised Trek",
    duration: "Your dates",
    difficulty: "Tailored to you",
    route: "Shape the pace, extra days and side trips around your group",
    accommodation: "Best available on the route",
    includes: ["Private guide (and porter if needed)", "Flexible pace and rest days", "Help with permits and transport"],
    excludes: ["International flights", "Travel insurance"],
    price: null,
    detailsHref: null,
  },
];

/* ------------------------------------------------------------------ */
/* Gallery                                                             */
/* ------------------------------------------------------------------ */

export const gallery: GalleryItem[] = [
  // Order + sizes tile a gap-free 3-column grid (and 2-column on tablet).
  { image: "lirung", caption: "Langtang Lirung above the valley", size: "wide" },
  { image: "kyanjinGompa", caption: "Kyanjin Gompa", size: "tall" },
  { image: "village", caption: "Langtang Village" },
  { image: "syabrubesi", caption: "The trail near Syabrubesi" },
  { image: "kyanjinRi", caption: "Panorama from Kyanjin Ri", size: "tall" },
  { image: "meadows", caption: "Yak pastures above Kyanjin" },
  { image: "prayerFlags", caption: "Mani stones and prayer flags" },
  { image: "moraine", caption: "Glacial moraine" },
  { image: "tserkoRi", caption: "Tserko Ri at first light" },
];

/* ------------------------------------------------------------------ */
/* FAQ — rendered visibly AND used for FAQPage JSON-LD                 */
/* ------------------------------------------------------------------ */

export const faqs: FaqItem[] = [
  { q: "Where is Langtang Valley located?", a: "Langtang Valley is in Rasuwa district, Bagmati Province, north of Kathmandu and close to the Tibetan border. The trek starts at Syabrubesi, reached by road from Kathmandu, and lies within Langtang National Park." },
  { q: "How many days are required for the Langtang Valley Trek?", a: "Most itineraries take 7 to 10 days including the drives to and from Kathmandu. Adding a day at Kyanjin Gompa for Tserko Ri or extra acclimatisation is common." },
  { q: "What is the best season for trekking in Langtang Valley?", a: "Spring (March–May) and autumn (September–November) are generally the most popular seasons. Winter is possible with good gear; the monsoon (June–August) brings rain and possible landslides. Conditions always vary." },
  { q: "How difficult is the Langtang Valley Trek?", a: "It is usually rated moderate. You walk around 4–7 hours on most days on uneven mountain trails, with a gradual gain in altitude. Tserko Ri is a harder optional climb." },
  { q: "Do I need permits for Langtang Valley Trek?", a: "Yes. Trekkers currently need a Langtang National Park entry permit and a TIMS card. Karvaahh arranges these for you. Requirements and fees change, so confirm the latest before you travel." },
  { q: "Is a trekking guide required?", a: "Current Nepal rules require foreign trekkers to be accompanied by a licensed guide on this route. Please check the latest regulations before departure." },
  { q: "What is the highest point of the Langtang Valley Trek?", a: "Kyanjin Gompa, the main overnight stop, is about 3,870 m. The optional viewpoints of Kyanjin Ri (about 4,773 m) and Tserko Ri (about 4,984 m) are the highest points most trekkers reach." },
  { q: "Can beginners trek in Langtang Valley?", a: "Yes — fit beginners who prepare well and take the ascent steadily often do this as their first Himalayan trek. A guide, sensible pacing and good acclimatisation matter more than previous experience." },
  { q: "What type of accommodation is available along the route?", a: "Simple family-run tea houses and lodges. Rooms are usually twin-share with basic beds; hot showers, Wi-Fi and charging may cost extra. Standards vary by village and season." },
  { q: "Is altitude sickness a concern during the trek?", a: "It can be, as the route climbs above 3,500 m. Ascend gradually, stay hydrated and tell your guide about any symptoms. Descending is the most reliable treatment. Consult a doctor before travelling if you have health concerns." },
  { q: "What should I pack for Langtang Valley Trek?", a: "Broken-in boots, layered clothing, a warm down jacket, waterproof shell, sleeping bag, sun protection, a headtorch, water purification and a basic first-aid kit. Your guide can share a full kit list when you book." },
  { q: "Can I customize my Langtang Valley trekking itinerary?", a: "Yes. Karvaahh can adjust the pace, add rest days, include Tserko Ri or combine Langtang with nearby routes, and arrange private treks for your group." },
];

/* ------------------------------------------------------------------ */
/* Closing CTA & SEO                                                   */
/* ------------------------------------------------------------------ */

export const cta = {
  heading: "Your Himalayan Journey Begins in Langtang",
  text: "Discover traditional mountain villages, spectacular Himalayan panoramas, and peaceful alpine landscapes on a memorable journey through Langtang Valley.",
  image: "cta" as LangtangImageKey,
  buttons: [
    { label: "Explore Trek Packages", href: "#packages", variant: "primary" },
    { label: "Customize Your Trek", href: links.customize, variant: "secondary" },
    { label: "Contact Karvaahh", href: links.contact, variant: "ghost" },
  ] as const,
};

export const seo = {
  title: "Langtang Valley Trek, Nepal | Himalayan Trekking with Karvaahh",
  description:
    "Explore the Langtang Valley Trek in Nepal with Karvaahh. Discover Himalayan mountain views, traditional Tamang villages, Kyanjin Gompa, alpine landscapes, and customizable trekking experiences.",
  ogImage: images.hero.src,
  keywords: ["Langtang Valley Trek", "Langtang trek Nepal", "Kyanjin Gompa", "Tserko Ri", "Kyanjin Ri", "Langtang National Park", "Himalayan trekking Nepal"],
};
