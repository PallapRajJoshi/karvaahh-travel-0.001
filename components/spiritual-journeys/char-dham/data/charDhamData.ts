import type {
  ChapterLink,
  CtaLink,
  Destination,
  Dham,
  Faq,
  ImageAsset,
  ListGroup,
  OptionCard,
  PackageConfig,
  RelatedLink,
  RouteStop,
  Season,
  TimelineStage,
} from "./types";

/* ------------------------------------------------------------------ */
/* Site + routes — VERIFY every href against the live app router.      */
/* ------------------------------------------------------------------ */

export const SITE_URL = "https://karvaahh.in";
export const PAGE_PATH = "/spiritual-journeys/char-dham-yatra-uttarakhand";
export const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

/** Single source for every enquiry CTA on the page. */
export const LINKS = {
  /** VERIFY: existing enquiry/contact route. */
  enquiry: "/contact",
  /** Parent hub used in breadcrumbs. VERIFY it exists. */
  spiritualJourneys: "/spiritual-journeys",
  home: "/",
} as const;

const IMG = "/images/spiritual-journeys/char-dham";

const img = (
  file: string,
  alt: string,
  extra: Partial<ImageAsset> = {},
): ImageAsset => ({
  src: `${IMG}/${file}`,
  alt,
  // Flip to true per image once the file is in /public/images/spiritual-journeys/char-dham/
  available: false,
  ...extra,
});

/* ------------------------------------------------------------------ */
/* Page + hero                                                         */
/* ------------------------------------------------------------------ */

export const page = {
  name: "Char Dham Yatra Uttarakhand",
  breadcrumbParent: "Spiritual Journeys",
};

export const hero = {
  eyebrow: "Spiritual Journeys • Uttarakhand",
  title: "Char Dham Yatra Uttarakhand",
  dhamLine: ["Yamunotri", "Gangotri", "Kedarnath", "Badrinath"],
  copy: "Embark on a sacred Himalayan pilgrimage through the four revered Dhams of Uttarakhand, combining devotion, Darshan and extraordinary mountain landscapes.",
  primaryCta: { label: "Plan Your Yatra", href: `${LINKS.enquiry}?interest=char-dham-yatra` },
  secondaryCta: { label: "Explore the Journey", href: "#four-dhams" },
  image: img(
    "char-dham-yatra-uttarakhand.jpg",
    "Snow-covered Garhwal Himalaya peaks above a pilgrimage valley in Uttarakhand",
    { focus: "50% 40%" },
  ),
};

export const chapters: ChapterLink[] = [
  { id: "dhams", label: "The four Dhams", href: "#four-dhams" },
  { id: "guide", label: "Pilgrimage guide", href: "#introduction" },
  { id: "route", label: "Route & stages", href: "#route-destinations" },
  { id: "package", label: "Package", href: "#package" },
  { id: "prepare", label: "Prepare", href: "#registration" },
  { id: "gallery", label: "Gallery", href: "#gallery" },
  { id: "faq", label: "FAQ", href: "#faq" },
];

export const quickFacts = [
  { label: "Shrines", value: "Four Dhams" },
  { label: "State", value: "Uttarakhand, Garhwal Himalaya" },
  { label: "Traditional order", value: "West to east" },
  { label: "Shrine altitude", value: "Around 3,000 m and above" },
  { label: "Walking sections", value: "Yamunotri and Kedarnath" },
  { label: "Season", value: "Seasonal — dates announced yearly" },
];

/* ------------------------------------------------------------------ */
/* The four Dhams                                                      */
/* ------------------------------------------------------------------ */

export const dhams: Dham[] = [
  {
    slug: "yamunotri",
    order: 1,
    numeral: "१",
    name: "Yamunotri",
    deity: "Goddess Yamuna",
    district: "Uttarkashi district",
    river: "Yamuna",
    quickLine: "The westernmost Dham and traditionally the first, near the source region of the Yamuna.",
    heading: "Yamunotri Dham – Source of Devotion to Goddess Yamuna",
    lead: "Yamunotri opens the Char Dham Yatra. The temple of Goddess Yamuna stands high in a narrow Himalayan gorge in the western Garhwal, close to the glacial source region of the river that carries her name.",
    paragraphs: [
      "In Hindu tradition, Yamuna is revered as the daughter of Surya, the Sun, and a bathe or offering in her waters is believed to carry deep spiritual merit. Pilgrims begin the four-Dham circuit here, which is why many families treat the first Darshan at Yamunotri as the true start of the Yatra.",
      "The temple sits in steep, forested terrain beneath snow peaks. Near the shrine are natural hot springs; Surya Kund is traditionally used by pilgrims to cook rice and potatoes tied in cloth, which are then offered and taken home as prasad.",
      "Road travel ends before the temple. The final approach is on foot, with pony, palki and porter services usually available through local arrangements.",
    ],
    highlights: [
      { title: "Goddess Yamuna", text: "Temple dedicated to the river goddess, the first shrine of the traditional sequence." },
      { title: "Hot springs", text: "Surya Kund and bathing springs around the temple area." },
      { title: "Walking approach", text: "A mountain walk from the road head to the shrine." },
    ],
    accessNote: "The approach involves mountain travel and a walking section; exact conditions can vary.",
    comparison: { tradition: "Goddess Yamuna", region: "Uttarkashi region", experience: "Temple pilgrimage with a walking approach" },
    image: img("yamunotri-temple-yatra.jpg", "Yamunotri Temple beside the Yamuna in a narrow Himalayan gorge", { focus: "50% 55%" }),
    secondaryImage: img("yamunotri-himalayas.jpg", "Forested Himalayan slopes and snow peaks on the Yamunotri route"),
  },
  {
    slug: "gangotri",
    order: 2,
    numeral: "२",
    name: "Gangotri",
    deity: "Goddess Ganga",
    district: "Uttarkashi district",
    river: "Bhagirathi",
    quickLine: "The temple of Goddess Ganga above the Bhagirathi, in the high valley linked with the Ganga's origin.",
    heading: "Gangotri Dham – Sacred Source Region of the Ganga",
    lead: "Gangotri is a major pilgrimage centre associated with the origin of the River Ganga, while the traditional source is associated with Gaumukh further upstream.",
    paragraphs: [
      "The white granite Gangotri Temple is dedicated to Goddess Ganga and stands on the banks of the Bhagirathi, the headstream the Ganga is known by in these upper valleys. Tradition holds that King Bhagirath's penance brought the Ganga down from the heavens here.",
      "Pilgrims take Darshan, offer prayers on the ghats and often carry Gangajal home. Evening aarti by the river, with cold water racing over rocks below deodar and pine slopes, is for many travellers one of the quietest moments of the whole Yatra.",
      "Gangotri is reached by road through the Bhagirathi valley from Uttarkashi, which makes it one of the less physically demanding Dhams — though the altitude is still significant.",
    ],
    highlights: [
      { title: "Goddess Ganga", text: "Temple of Ganga on the Bhagirathi river bank." },
      { title: "Bhagirathi valley", text: "A deep Himalayan valley of deodar forest and granite." },
      { title: "Road accessible", text: "Reached by road; Gaumukh lies further upstream." },
    ],
    accessNote: "Gangotri is road accessible. Treks towards Gaumukh are a separate undertaking with their own permits and are not part of a standard Yatra.",
    comparison: { tradition: "Goddess Ganga", region: "Uttarkashi region", experience: "Temple and river valley" },
    image: img("gangotri-temple-uttarakhand.jpg", "Gangotri Temple of Goddess Ganga in the Bhagirathi valley, Uttarakhand"),
    secondaryImage: img("gangotri-bhagirathi-river.jpg", "Bhagirathi River flowing over rocks near Gangotri"),
  },
  {
    slug: "kedarnath",
    order: 3,
    numeral: "३",
    name: "Kedarnath",
    deity: "Lord Shiva",
    district: "Rudraprayag district",
    river: "Mandakini",
    quickLine: "The stone temple of Lord Shiva at the head of the Mandakini valley, reached on foot or by air.",
    heading: "Kedarnath Dham – Sacred Temple of Lord Shiva",
    lead: "Kedarnath is traditionally revered as one of the twelve Jyotirlingas of Lord Shiva. Its stone temple stands in a wide glacial valley near the head of the Mandakini, ringed by high Himalayan peaks.",
    paragraphs: [
      "Kedarnath is also the foremost of the Panch Kedar shrines of Lord Shiva in the Garhwal Himalaya. Tradition links the temple to the Pandavas and to Adi Shankaracharya, and it remains one of the most emotionally significant destinations in Hindu pilgrimage.",
      "No road reaches the temple. Pilgrims travel by road to Sonprayag, take local transport onward to Gaurikund, and continue along a long mountain walking route. Pony, palki and helicopter services may be available, subject to regulation, weather and booking conditions.",
      "Kedarnath is the highest and most physically demanding stop of the Yatra. Temperatures can fall sharply, weather shifts quickly, and crowds on peak days can mean long waits. Darshan timings and queues depend on temple administration and cannot be guaranteed.",
    ],
    highlights: [
      { title: "Jyotirlinga", text: "One of the twelve Jyotirlingas of Lord Shiva." },
      { title: "High-altitude valley", text: "The highest point of the four-Dham circuit." },
      { title: "Walking route", text: "A long trek from Gaurikund, with pony, palki or helicopter alternatives." },
    ],
    accessNote: "The final approach is on foot or by alternatives that depend on regulation, weather and availability.",
    comparison: { tradition: "Lord Shiva", region: "Rudraprayag region", experience: "Himalayan temple pilgrimage" },
    image: img("kedarnath-temple-yatra.jpg", "Kedarnath Temple of Lord Shiva against snow-covered Himalayan peaks", { focus: "50% 45%" }),
    secondaryImage: img("kedarnath-himalayan-valley.jpg", "Glacial Kedarnath valley and the Mandakini headwaters"),
  },
  {
    slug: "badrinath",
    order: 4,
    numeral: "४",
    name: "Badrinath",
    deity: "Lord Vishnu",
    district: "Chamoli district",
    river: "Alaknanda",
    quickLine: "The temple of Badrinarayan on the Alaknanda, between the Nar and Narayan ranges.",
    heading: "Badrinath Dham – Sacred Vishnu Pilgrimage",
    lead: "Badrinath completes the Yatra. The temple of Lord Vishnu as Badrinarayan stands on the banks of the Alaknanda, in a high valley between the Nar and Narayan mountain ranges.",
    paragraphs: [
      "Badrinath holds a rare place in Hindu tradition: it is one of the four Dhams of Uttarakhand and also one of the four Dhams of the all-India Char Dham pilgrimage. It is counted among the Divya Desams revered in Vaishnava tradition, and its re-establishment is associated with Adi Shankaracharya.",
      "The brightly painted temple facade faces the river. Before Darshan, many pilgrims bathe at Tapt Kund, a natural hot spring below the temple. Mana village, a short distance beyond, is often visited alongside the Dham.",
      "Badrinath is reached by road through Joshimath, and the drive follows the Alaknanda through some of the most dramatic valley scenery in Uttarakhand.",
    ],
    highlights: [
      { title: "Lord Vishnu", text: "Worshipped here as Badrinarayan." },
      { title: "Alaknanda river", text: "Tapt Kund hot spring on the riverbank below the temple." },
      { title: "Road accessible", text: "Reached by road via Joshimath." },
    ],
    accessNote: "Road accessible, but mountain roads in the Alaknanda valley are vulnerable to landslides, especially in monsoon.",
    comparison: { tradition: "Lord Vishnu", region: "Chamoli region", experience: "Temple and Himalayan pilgrimage" },
    image: img("badrinath-temple-uttarakhand.jpg", "Colourful facade of Badrinath Temple on the Alaknanda in Uttarakhand"),
    secondaryImage: img("badrinath-himalayas.jpg", "Himalayan peaks above the Badrinath valley and the Alaknanda river"),
  },
];

/* ------------------------------------------------------------------ */
/* Introduction + what is Char Dham                                    */
/* ------------------------------------------------------------------ */

export const introduction = {
  heading: "Char Dham Yatra Uttarakhand – A Sacred Himalayan Pilgrimage",
  paragraphs: [
    "Char Dham Yatra Uttarakhand is one of the most revered Hindu pilgrimage journeys in India. It visits four sacred shrines in the Garhwal Himalaya — Yamunotri, Gangotri, Kedarnath and Badrinath — each linked to a sacred river or a principal deity.",
    "Two of the Dhams honour rivers worshipped as goddesses: Yamunotri, dedicated to Goddess Yamuna, and Gangotri, dedicated to Goddess Ganga. Kedarnath is the abode of Lord Shiva and Badrinath of Lord Vishnu. Completing all four is regarded by many devotees as one of the most meaningful pilgrimages of a lifetime.",
    "The journey is as much a Himalayan crossing as it is a pilgrimage. Traditional routes follow the Yamuna, Bhagirathi, Mandakini and Alaknanda valleys, past confluence towns, terraced villages, cedar forests and glacier-fed rivers, before reaching temples set among snow peaks.",
    "Travellers can combine Darshan with the living culture of the Garhwal hills — riverside aartis, mountain hospitality and the shared rhythm of thousands of pilgrims moving through the valleys each season.",
  ],
};

export const whatIsCharDham = {
  heading: "What is the Char Dham Yatra?",
  paragraphs: [
    "“Char Dham” means “four abodes” — four sacred destinations visited as one pilgrimage. When people speak of the Char Dham Yatra in India today, they most often mean the Uttarakhand circuit.",
    "The term is also used for a second, older pilgrimage that spans the whole of India. The two share one temple, Badrinath, which is why they are often confused.",
  ],
  uttarakhand: {
    title: "Char Dham of Uttarakhand",
    text: "Also called the Chota Char Dham. Four Himalayan shrines in the Garhwal region of Uttarakhand, traditionally visited from west to east.",
    items: ["Yamunotri", "Gangotri", "Kedarnath", "Badrinath"],
  },
  allIndia: {
    title: "All-India Char Dham",
    text: "Four shrines at the four corners of India, a pilgrimage associated with Adi Shankaracharya. This page does not cover this circuit.",
    items: ["Badrinath (north)", "Dwarka (west)", "Puri (east)", "Rameswaram (south)"],
  },
};

export const story = {
  heading: "From Sacred Rivers to Himalayan Temples",
  intro: "The order of the Yatra is not arbitrary. It carries pilgrims from the rivers worshipped as goddesses to the great temples of Shiva and Vishnu, moving from west to east across the Garhwal Himalaya.",
  movements: [
    { title: "The Yamuna", text: "The journey begins in the steep gorge of the Yamuna, where hot springs steam beside the shrine and the first Darshan sets the tone for everything that follows." },
    { title: "The Ganga", text: "Across the ridges lies the Bhagirathi valley. At Gangotri the Ganga is still young and fast, and pilgrims fill vessels with water they will carry home." },
    { title: "Shiva", text: "The road turns towards the Mandakini and the long climb to Kedarnath. The walk itself becomes part of the devotion, ending at a stone temple under the snow." },
    { title: "Vishnu", text: "Along the Alaknanda, through confluence towns and deep valleys, the Yatra closes at Badrinath — the shrine where the Uttarakhand and all-India pilgrimages meet." },
  ],
  closing: "Between the four temples are the prayags, the ghats and the mountain towns where pilgrims rest, share meals and prepare for the next stage. They are the connective tissue of the Yatra.",
};

/* ------------------------------------------------------------------ */
/* Route                                                                */
/* ------------------------------------------------------------------ */

export const route = {
  heading: "Common Char Dham Journey Flow",
  note: "The exact route and starting/ending point depend on the selected itinerary.",
  stops: [
    { name: "Haridwar / Rishikesh", kind: "gateway" },
    { name: "Barkot", kind: "base" },
    { name: "Yamunotri", kind: "dham", dham: "yamunotri" },
    { name: "Uttarkashi", kind: "base" },
    { name: "Gangotri", kind: "dham", dham: "gangotri" },
    { name: "Guptkashi / Sonprayag", kind: "base" },
    { name: "Kedarnath", kind: "dham", dham: "kedarnath" },
    { name: "Joshimath", kind: "base" },
    { name: "Badrinath", kind: "dham", dham: "badrinath" },
    { name: "Return", kind: "return" },
  ] satisfies RouteStop[],
};

export const destinations = {
  heading: "Towns Along the Char Dham Route",
  label: "Common route destinations – itinerary dependent.",
  items: [
    { name: "Haridwar", role: "Pilgrimage gateway", text: "A historic pilgrimage city on the Ganga, known for Har Ki Pauri and its evening Ganga Aarti. Many Yatras begin or end here." },
    { name: "Rishikesh", role: "Spiritual and Himalayan gateway", text: "Where the Ganga leaves the mountains — ashrams, riverside ghats and the road into the Garhwal hills." },
    { name: "Barkot", role: "Base for Yamunotri", text: "A common overnight stop in the Yamuna valley before the approach to Yamunotri." },
    { name: "Uttarkashi", role: "Gateway to Gangotri", text: "A temple town on the Bhagirathi, home to the Kashi Vishwanath Temple and a usual halt en route to Gangotri." },
    { name: "Guptkashi", role: "Kedarnath route base", text: "A hillside town facing the Chaukhamba peaks, commonly used as an overnight base for Kedarnath." },
    { name: "Sonprayag", role: "Access point for Kedarnath", text: "At the confluence of the Mandakini and Basuki rivers — the point where private vehicles stop and local transport continues to Gaurikund." },
    { name: "Joshimath", role: "Gateway to Badrinath", text: "Also known as Jyotirmath, a gateway town for Badrinath and the surrounding Himalayan valleys." },
  ] satisfies Destination[],
};

export const itinerary = {
  heading: "Char Dham Pilgrimage Journey Stages",
  label: "Illustrative pilgrimage flow",
  note: "Stages are not days. The number of days, overnight stops and order depend on the selected itinerary, travel dates and conditions on the ground.",
  stages: [
    { stage: 1, title: "Haridwar / Rishikesh Arrival", text: "Meet at the starting point, confirm registration and documents, and prepare for the mountain road." },
    { stage: 2, title: "Journey toward Barkot", text: "Drive into the Yamuna valley for an overnight halt near the Yamunotri road head." },
    { stage: 3, title: "Yamunotri Darshan", text: "Walk or ride to Yamunotri Temple for Darshan, then return to the valley.", dham: "yamunotri" },
    { stage: 4, title: "Journey toward Uttarkashi", text: "Cross into the Bhagirathi valley and continue to Uttarkashi." },
    { stage: 5, title: "Gangotri Darshan", text: "Drive up the Bhagirathi valley to Gangotri Temple for Darshan and return.", dham: "gangotri" },
    { stage: 6, title: "Journey toward Guptkashi / Sonprayag", text: "A long mountain drive towards the Mandakini valley and the Kedarnath base." },
    { stage: 7, title: "Kedarnath Darshan", text: "From Sonprayag and Gaurikund, walk or use available alternatives to reach Kedarnath.", dham: "kedarnath" },
    { stage: 8, title: "Return toward Guptkashi", text: "Descend from Kedarnath and rest at the base." },
    { stage: 9, title: "Journey toward Joshimath", text: "Drive towards the Alaknanda valley and Joshimath." },
    { stage: 10, title: "Badrinath Darshan", text: "Darshan at Badrinath Temple, with time for Tapt Kund and nearby sites where possible.", dham: "badrinath" },
    { stage: 11, title: "Return Journey", text: "Drive back towards the ending point of the selected itinerary." },
  ] satisfies TimelineStage[],
};

/* ------------------------------------------------------------------ */
/* Package — data-driven. Do not invent commercial values.             */
/* ------------------------------------------------------------------ */

export const packageConfig: PackageConfig = {
  name: "Char Dham Yatra Uttarakhand",
  duration: "",
  departure: "",
  returnDate: "",
  price: null,
  priceFrom: null,
  priceBasis: "per person",
  priceVerifiedOn: "",
  startPoint: "",
  endPoint: "",
  vehicle: "",
  mealPlan: "Breakfast & Dinner",
  accommodation: "",
  customNote:
    "Package details can be customized according to travel dates, group size, hotel category and transportation requirements.",
};

export const packageHeading = {
  heading: "Char Dham Yatra Package",
  intro: "A private, road-based Char Dham itinerary covering all four Dhams, planned around your dates, pace and group.",
};

export const inclusions: ListGroup[] = [
  {
    id: "accommodation",
    title: "Accommodation",
    items: [
      "Accommodation in selected hotels/guesthouses on twin/triple-sharing basis",
      "Accommodation and meals as specified in the selected package",
    ],
  },
  { id: "meals", title: "Meals", items: ["Breakfast and dinner as per selected package"] },
  {
    id: "transport",
    title: "Transportation",
    items: [
      "Private transportation throughout the itinerary",
      "Pickup and drop-off from designated starting and ending point",
      "Driver allowance",
      "Fuel",
      "Parking",
      "Applicable road taxes",
    ],
  },
  {
    id: "sightseeing",
    title: "Sightseeing & Transfers",
    items: [
      "Sightseeing and transfers mentioned in itinerary",
      "Local transportation for Kedarnath and other restricted-route transfers as specifically mentioned",
    ],
  },
  {
    id: "assistance",
    title: "Pilgrimage Assistance",
    items: [
      "Assistance with Char Dham registration and pilgrimage formalities, where applicable",
      "Tour coordinator/driver assistance throughout the journey",
    ],
  },
  {
    id: "permits",
    title: "Permits / Charges",
    items: ["Applicable permits and entry charges specifically mentioned in the package"],
  },
];

export const exclusions: ListGroup[] = [
  { id: "tickets", title: "Travel Tickets", items: ["Train or flight tickets unless specifically mentioned"] },
  { id: "helicopter", title: "Helicopter", items: ["Helicopter tickets for Kedarnath or other sectors unless specifically included"] },
  { id: "pony", title: "Pony / Palki / Horse / Porter", items: ["Pony", "Palki", "Horse", "Porter", "Personal trekking services"] },
  { id: "religious", title: "Religious Expenses", items: ["VIP/special Darshan", "Temple donations", "Puja/ritual expenses"] },
  { id: "personal", title: "Personal Expenses", items: ["Laundry", "Telephone calls", "Room service", "Shopping"] },
  { id: "food", title: "Food", items: ["Lunch, snacks and beverages unless specifically included"] },
  { id: "insurance", title: "Insurance / Medical", items: ["Travel insurance", "Medical expenses"] },
  {
    id: "unforeseen",
    title: "Unforeseen Expenses",
    items: [
      "Additional accommodation or transportation caused by weather",
      "Landslides",
      "Road closures",
      "Flight delays",
      "Other unforeseen circumstances",
    ],
  },
  {
    id: "disruptions",
    title: "Natural / Government Disruptions",
    items: ["Expenses caused by natural disasters", "Government restrictions", "Changes in pilgrimage operations"],
  },
  { id: "other", title: "Other", items: ["Tips", "Gratuities", "Anything not specifically mentioned under Package Inclusions"] },
];

export const packageDisclaimer =
  "Package inclusions and exclusions may vary by itinerary, travel dates, accommodation category, vehicle type and operational requirements. Please confirm the final inclusions before booking.";

export const packageTerms =
  "Package inclusions, exclusions, transportation, accommodation and pilgrimage arrangements may vary depending on the selected itinerary, travel dates, group size and operational conditions. Final package details should be confirmed before booking.";

/* ------------------------------------------------------------------ */
/* Kedarnath transport                                                  */
/* ------------------------------------------------------------------ */

export const kedarnathOptions = {
  heading: "Kedarnath Transport Options: Trek, Pony, Palki & Helicopter",
  intro: "Road travel ends at Sonprayag, with local transport onward to Gaurikund. From there, every pilgrim chooses how to cover the final approach. None of these options is part of the standard package unless specifically included.",
  options: [
    {
      title: "Trek / walking route",
      text: "The Kedarnath approach involves a significant walking section on a paved but steep mountain path. Most pilgrims walk up in one long day, and many stay overnight near the temple before descending.",
      conditions: ["Good walking fitness", "Warm and rain layers", "Start early in the day"],
    },
    {
      title: "Pony / horse",
      text: "Available through local arrangements where operationally permitted. Rates and rules are set locally and paid directly.",
      conditions: ["Local operator availability", "Operational permissions on the day"],
    },
    {
      title: "Palki",
      text: "A carried palanquin that may be available through local operators — often chosen by elderly travellers or those with limited mobility.",
      conditions: ["Local operator availability", "Booked and paid locally"],
    },
    {
      title: "Helicopter",
      text: "Helicopter services have operated towards Kedarnath in recent seasons. Book only through official or government-authorised channels, and treat any unofficial seller with caution.",
      conditions: ["Weather", "Aviation operations", "Government regulations", "Availability", "Booking conditions"],
    },
  ] satisfies OptionCard[],
  note: "No option is guaranteed on a given day. Plan buffer time for Kedarnath.",
};

/* ------------------------------------------------------------------ */
/* Registration                                                         */
/* ------------------------------------------------------------------ */

export const registration = {
  heading: "Char Dham Registration & Formalities",
  intro: "In recent seasons the Uttarakhand government has required pilgrims to register before undertaking the Char Dham Yatra. Procedures are set by the authorities and can change between years.",
  points: [
    { title: "Registration may be required", text: "Check whether registration is required for your travel year and complete it through the official government system before you travel." },
    { title: "Procedures can change", text: "Registration methods, verification points and daily limits have changed between seasons. Always follow the current rules." },
    { title: "Identity documents", text: "Carry the identity documents used for registration. Foreign nationals should carry their passport and any documents required for the year." },
    { title: "Karvaahh assistance", text: "Where included in your selected package, Karvaahh can assist with registration and pilgrimage formalities. Approval rests with the authorities." },
  ],
};

/* ------------------------------------------------------------------ */
/* Altitude, difficulty, weather                                       */
/* ------------------------------------------------------------------ */

export const altitude = {
  heading: "Prepare for the Himalayan Conditions",
  intro: "All four Dhams sit at high altitude, and the journey between them involves long days on mountain roads. Preparation makes a real difference to how the Yatra feels.",
  conditions: [
    { title: "High altitude", text: "Thinner air at the shrines can cause breathlessness, headache and fatigue, especially after quick ascents." },
    { title: "Long road journeys", text: "Mountain roads are winding and slow. Several days involve many hours in the vehicle." },
    { title: "Walking and steep terrain", text: "Yamunotri and Kedarnath include steep walking sections; there are steps and slopes at every Dham." },
    { title: "Cold and changing weather", text: "Mornings and nights are cold even in summer, and rain or snow can arrive quickly." },
    { title: "Limited facilities", text: "Medical care, ATMs and connectivity become limited in remote stretches." },
    { title: "Fatigue", text: "Early starts, queues and consecutive travel days add up. Rest is part of the plan." },
  ],
  recommendations: [
    "Acclimatize gradually and avoid rushing ascents",
    "Drink water steadily through the day",
    "Rest properly between long travel days",
    "Wear comfortable, broken-in walking footwear",
    "Carry warm layers even on sunny days",
    "Consult a doctor before travel where appropriate",
    "Carry your personal medicines with prescriptions",
  ],
  healthNote:
    "Travellers should consider their individual health and fitness requirements before undertaking a high-altitude pilgrimage and consult a qualified healthcare professional where appropriate.",
  difficulty: {
    heading: "Physically Demanding Himalayan Pilgrimage",
    text: "The Char Dham Yatra is not a technical trek, but it is physically demanding. The challenge comes from the combination of factors below rather than any single one.",
    factors: [
      { title: "Walking", text: "Long uphill walks at Yamunotri and especially Kedarnath." },
      { title: "Elevation", text: "Shrines at around 3,000 metres and above." },
      { title: "Mountain roads", text: "Winding roads with landslide-prone stretches." },
      { title: "Weather", text: "Cold, rain and rapid change at any time of the season." },
      { title: "Long travel days", text: "Early starts and many hours on the road." },
      { title: "Restricted facilities", text: "Simpler rooms, food and services near the shrines." },
    ],
  },
};

export const weather = {
  heading: "Weather & Road Conditions",
  intro: "The Dhams are open seasonally, typically from around late April or May until around October or November, with exact dates announced by temple authorities each year.",
  seasons: [
    {
      id: "summer",
      label: "Summer",
      window: "Around May – June",
      tone: "good",
      summary: "The main pilgrimage season opens. Conditions may be suitable for pilgrimage, but mountain weather remains changeable.",
      points: ["Pleasant days, cold nights at the shrines", "Peak crowds, especially at Kedarnath", "Book accommodation and registration early"],
    },
    {
      id: "monsoon",
      label: "Monsoon",
      window: "Around July – August",
      tone: "caution",
      summary: "Heavy rain affects mountain roads across Garhwal. Travel is possible but disruption is common.",
      points: ["Landslides", "Road delays", "Reduced visibility", "Transportation and helicopter disruptions"],
    },
    {
      id: "autumn",
      label: "Autumn",
      window: "Around September – October",
      tone: "good",
      summary: "Often popular for Himalayan pilgrimage travel, with clearer skies after the rains — but weather can still change.",
      points: ["Clearer mountain views", "Colder nights as the season ends", "Closing dates approach — confirm them"],
    },
    {
      id: "winter",
      label: "Winter",
      window: "Around November – April",
      tone: "closed",
      summary: "Many high-altitude routes and temples have seasonal operational restrictions or closures.",
      points: ["Heavy snow at the shrines", "Shrines close for the winter", "Winter worship traditionally moves to lower seats"],
    },
  ] satisfies Season[],
  note: "Temple opening dates, road status and pilgrimage operations should be confirmed for the relevant travel year.",
  operational: "Subject to weather, road conditions, government regulations and pilgrimage operations.",
};

/* ------------------------------------------------------------------ */
/* Packing, etiquette, travellers, stay, food, responsibility          */
/* ------------------------------------------------------------------ */

export const packing: ListGroup[] = [
  { id: "clothing", title: "Clothing", items: ["Thermal layers", "Warm jacket", "Fleece", "Windproof/rainproof outer layer", "Warm trousers", "Woollen socks", "Gloves", "Warm cap", "Sun hat"] },
  { id: "footwear", title: "Footwear", items: ["Comfortable trekking/walking shoes", "Extra socks", "Lightweight footwear"] },
  { id: "personal", title: "Personal", items: ["Personal medicines", "Sunscreen", "Sunglasses", "Lip balm", "Toiletries", "Reusable water bottle"] },
  { id: "documents", title: "Documents", items: ["ID/passport as applicable", "Registration details", "Travel documents", "Insurance documents"] },
  { id: "electronics", title: "Electronics", items: ["Phone", "Power bank", "Charging cables"] },
];

export const etiquette = {
  heading: "Temple Etiquette",
  items: [
    "Dress respectfully",
    "Follow temple instructions",
    "Respect worshippers",
    "Maintain cleanliness",
    "Follow photography restrictions",
    "Avoid disturbing rituals",
    "Follow security procedures",
    "Do not enter restricted areas",
    "Respect local communities",
  ],
};

export const travellerTypes = {
  heading: "Senior Citizens & Family Travellers",
  intro: "Many families undertake the Yatra together, often with parents or grandparents. A realistic plan matters more than a fast one.",
  points: [
    { title: "Walking requirements", text: "Consider pony, palki or helicopter alternatives for Yamunotri and Kedarnath, subject to availability." },
    { title: "Altitude", text: "Older travellers can feel altitude more strongly. Avoid rushing between high points." },
    { title: "Cold weather", text: "Pack extra warm layers, including for nights in basic rooms." },
    { title: "Long road journeys", text: "Plan comfort breaks and avoid back-to-back very long drives where possible." },
    { title: "Rest requirements", text: "Build in rest or buffer days, especially around Kedarnath." },
    { title: "Medication planning", text: "Carry enough medicine for the whole trip plus spare, with prescriptions." },
    { title: "Travel insurance", text: "Choose cover that suits high-altitude travel and medical emergencies." },
    { title: "Realistic itinerary", text: "Tell us about mobility or health needs so the plan fits the traveller." },
  ],
  medicalNote:
    "Travellers with medical conditions or concerns about high-altitude travel should consult a qualified medical professional before departure.",
};

export const accommodation = {
  heading: "Accommodation on the Yatra",
  paragraphs: [
    "Stays are in hotels, guesthouses and mountain lodges on a twin- or triple-sharing basis, according to the selected package and hotel category.",
    "Gateway towns such as Haridwar and Rishikesh offer a wide range of hotels. Closer to the shrines, rooms become simpler and facilities more basic.",
  ],
  expectations: [
    { title: "Hot water", text: "May be limited or available at set times." },
    { title: "Electricity", text: "Power cuts can happen in remote areas." },
    { title: "Internet", text: "Mobile data and Wi-Fi are patchy or absent in places." },
    { title: "Room types", text: "Twin or triple sharing; single rooms on request where available." },
  ],
};

export const food = {
  heading: "Meals During the Yatra",
  paragraphs: [
    "Breakfast and dinner are provided according to the selected package. Lunch is usually excluded, and there are dhabas and eateries along the main routes.",
    "Vegetarian meals are the norm along much of the pilgrimage route. Food options vary by destination, and mountain locations often have simpler choices — typically dal, rice, roti and seasonal vegetables.",
  ],
};

export const responsible = {
  heading: "Travel Responsibly Through the Himalayas",
  intro: "Hundreds of thousands of pilgrims pass through fragile mountain valleys each season. Small habits keep them sacred and clean.",
  items: [
    "Do not litter",
    "Minimize plastic",
    "Respect sacred areas",
    "Respect local communities",
    "Avoid damaging natural areas",
    "Follow waste-management instructions",
    "Use designated paths",
    "Respect wildlife",
    "Conserve water",
  ],
};

/* ------------------------------------------------------------------ */
/* Gallery                                                              */
/* ------------------------------------------------------------------ */

export const gallery: ImageAsset[] = [
  img("yamunotri-temple-yatra.jpg", "Yamunotri Temple in the Yamuna gorge", { caption: "Yamunotri Temple" }),
  img("yamunotri-himalayas.jpg", "Himalayan landscape on the Yamunotri route", { caption: "Yamunotri, Himalayan landscape" }),
  img("gangotri-temple-uttarakhand.jpg", "Gangotri Temple of Goddess Ganga", { caption: "Gangotri Temple" }),
  img("gangotri-bhagirathi-river.jpg", "Bhagirathi River near Gangotri", { caption: "Bhagirathi River" }),
  img("kedarnath-temple-yatra.jpg", "Kedarnath Temple beneath snow peaks", { caption: "Kedarnath Temple" }),
  img("kedarnath-himalayan-valley.jpg", "Kedarnath valley and surrounding peaks", { caption: "Kedarnath valley", wide: true }),
  img("badrinath-temple-uttarakhand.jpg", "Badrinath Temple facade on the Alaknanda", { caption: "Badrinath Temple" }),
  img("badrinath-himalayas.jpg", "Alaknanda River and peaks near Badrinath", { caption: "Alaknanda River" }),
  img("haridwar-ganga-aarti.jpg", "Evening Ganga Aarti at Har Ki Pauri, Haridwar", { caption: "Haridwar" }),
  img("rishikesh-ganga-ghats.jpg", "Ganga ghats in Rishikesh", { caption: "Rishikesh" }),
  img("uttarkashi-bhagirathi-town.jpg", "Uttarkashi town on the Bhagirathi", { caption: "Uttarkashi" }),
  img("sonprayag-confluence.jpg", "Confluence of the Mandakini and Basuki rivers at Sonprayag", { caption: "Sonprayag" }),
  img("joshimath-himalayan-town.jpg", "Joshimath town on the road to Badrinath", { caption: "Joshimath" }),
  img("char-dham-himalayan-road.jpg", "Mountain road through a Garhwal Himalaya valley on the Char Dham route", { caption: "Himalayan roads", wide: true }),
];

/* ------------------------------------------------------------------ */
/* FAQ — rendered verbatim AND used for FAQPage JSON-LD.               */
/* ------------------------------------------------------------------ */

export const faqs: Faq[] = [
  { q: "What is Char Dham Yatra Uttarakhand?", a: "It is a Hindu pilgrimage to four sacred shrines in the Garhwal Himalaya of Uttarakhand: Yamunotri, Gangotri, Kedarnath and Badrinath. It is different from the all-India Char Dham of Badrinath, Dwarka, Puri and Rameswaram." },
  { q: "Which four temples are included in Char Dham Yatra?", a: "Yamunotri Temple (Goddess Yamuna), Gangotri Temple (Goddess Ganga), Kedarnath Temple (Lord Shiva) and Badrinath Temple (Lord Vishnu as Badrinarayan)." },
  { q: "What is the traditional Char Dham sequence?", a: "Traditionally the Yatra moves from west to east: Yamunotri, then Gangotri, then Kedarnath and finally Badrinath. Most complete itineraries follow this order." },
  { q: "Where is Yamunotri located?", a: "Yamunotri is in Uttarkashi district in the western Garhwal Himalaya, near the source region of the Yamuna. Road travel ends before the temple and the final approach is on foot or by pony or palki." },
  { q: "Where is Gangotri located?", a: "Gangotri is in Uttarkashi district on the Bhagirathi river. It is reached by road. The traditional source of the Ganga is associated with Gaumukh, further upstream." },
  { q: "Where is Kedarnath located?", a: "Kedarnath is in Rudraprayag district near the head of the Mandakini valley. It is reached by a walking route from Gaurikund, with pony, palki or helicopter options subject to availability and regulation." },
  { q: "Where is Badrinath located?", a: "Badrinath is in Chamoli district on the Alaknanda river, between the Nar and Narayan ranges. It is reached by road via Joshimath." },
  { q: "What is the best time for Char Dham Yatra?", a: "The shrines are typically open from around late April or May to around October or November. May–June and September–October are generally preferred; the July–August monsoon brings a higher risk of landslides and delays. Confirm opening dates for your travel year." },
  { q: "How difficult is Char Dham Yatra?", a: "It is physically demanding rather than technical. Expect high altitude at the shrines, long mountain road journeys, steep walking at Yamunotri and Kedarnath, cold temperatures and changeable weather." },
  { q: "How should I prepare for the Yatra?", a: "Build walking fitness in the weeks before travel, consult a doctor where appropriate, plan a realistic pace with rest, pack warm and rainproof layers, and carry personal medicines." },
  { q: "Is Char Dham registration required?", a: "In recent seasons the Uttarakhand government has required pilgrims to register. Procedures can change, so confirm the current requirement for your travel year. Karvaahh can assist where included in the selected package." },
  { q: "What is included in a Char Dham package?", a: "It depends on the selected package. Inclusions typically cover twin/triple-sharing accommodation, breakfast and dinner, private transportation with fuel, driver allowance, parking and road taxes, and registration assistance where applicable. Confirm final inclusions before booking." },
  { q: "Is helicopter service available for Kedarnath?", a: "Helicopter services have operated towards Kedarnath in recent seasons, subject to weather, aviation operations, government regulations and availability. Tickets are not included unless specifically mentioned. Book only through official or authorised channels." },
  { q: "Are pony and palki services included?", a: "No. Pony, horse, palki and porter services are excluded unless specifically mentioned. They can usually be arranged locally where operationally permitted." },
  { q: "What happens if roads close due to weather?", a: "The itinerary may be delayed, adjusted or rerouted for traveller safety. Extra accommodation or transport costs caused by weather, landslides or road closures are not included in the package." },
  { q: "What should senior citizens know before travelling?", a: "Consult a doctor before departure, consider pony, palki or helicopter alternatives for walking sections, allow rest days, carry sufficient medicines and warm clothing, and take suitable travel insurance." },
  { q: "What should I pack?", a: "Thermal layers, a warm jacket, a rainproof outer layer, walking shoes, woollen socks, gloves, a warm cap, personal medicines, sunscreen, identity documents, registration details and a power bank." },
  { q: "Are meals included?", a: "Breakfast and dinner are included as per the selected package. Lunch, snacks and beverages are excluded unless specifically mentioned. Vegetarian meals are the norm along much of the route." },
  { q: "Is travel insurance included?", a: "No. Travel insurance and medical expenses are not included. Insurance that covers high-altitude travel and medical emergencies is strongly recommended." },
  { q: "Can the itinerary be customized?", a: "Yes. Dates, pace, hotel category, vehicle, starting and ending points and group size can be tailored, subject to availability and conditions on the route." },
];

/* ------------------------------------------------------------------ */
/* Karvaahh + CTA                                                       */
/* ------------------------------------------------------------------ */

export const karvaahh = {
  heading: "Plan Your Char Dham Yatra with Karvaahh",
  intro: "We plan the practical side of the Yatra so your attention can stay on the pilgrimage.",
  services: [
    { title: "Customized pilgrimage planning", text: "An itinerary paced for your group, dates and fitness." },
    { title: "Private transportation", text: "A dedicated vehicle and driver for the road journey." },
    { title: "Accommodation coordination", text: "Hotels and guesthouses arranged to your chosen category." },
    { title: "Route planning", text: "Sensible overnight stops and buffer time for mountain conditions." },
    { title: "Registration assistance", text: "Help with Char Dham registration where included." },
    { title: "Pilgrimage support", text: "Coordination for Darshan days and local arrangements." },
    { title: "Travel coordination", text: "One point of contact before and during the journey." },
    { title: "Pre-trip guidance", text: "Advice on packing, preparation and what to expect." },
  ],
};

export const finalCta = {
  heading: "Ready to Begin Your Char Dham Yatra?",
  copy: "Plan your journey through Yamunotri, Gangotri, Kedarnath and Badrinath with a carefully organized Himalayan pilgrimage itinerary.",
  buttons: [
    { label: "Request Package Details", href: `${LINKS.enquiry}?interest=char-dham-yatra&topic=package`, variant: "primary" },
    { label: "Plan My Yatra", href: `${LINKS.enquiry}?interest=char-dham-yatra&topic=plan`, variant: "secondary" },
    { label: "Talk to Karvaahh", href: LINKS.enquiry, variant: "ghost" },
  ] satisfies CtaLink[],
  travelDisclaimer:
    "Mountain travel is subject to weather, road conditions, landslides, traffic restrictions, government regulations and local pilgrimage operations. Itineraries may be adjusted when necessary for traveller safety and operational reasons.",
};

/**
 * Related journeys. Only `enabled: true` links render — enable each one
 * after confirming the route exists, so nothing ships as a broken link.
 */
export const relatedLinks: RelatedLink[] = [
  { label: "All spiritual journeys", href: "/spiritual-journeys", enabled: false },
  { label: "Muktinath", href: "/spiritual-journeys/muktinath", enabled: false },
  { label: "Pashupatinath", href: "/spiritual-journeys/pashupatinath", enabled: false },
  { label: "Kailash Mansarovar", href: "/spiritual-journeys/kailash-mansarovar", enabled: false },
];

/* ------------------------------------------------------------------ */
/* SEO                                                                  */
/* ------------------------------------------------------------------ */

export const seo = {
  title: "Char Dham Yatra Uttarakhand | Yamunotri Gangotri Kedarnath Badrinath | Karvaahh",
  description:
    "Explore the Char Dham Yatra in Uttarakhand covering Yamunotri, Gangotri, Kedarnath and Badrinath. View route information, package inclusions, exclusions, preparation and travel guidance.",
  ogImage: `${IMG}/char-dham-yatra-uttarakhand.jpg`,
  ogImageAlt: "Char Dham Yatra Uttarakhand — Himalayan pilgrimage to Yamunotri, Gangotri, Kedarnath and Badrinath",
};
