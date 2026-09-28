/* ---------------------------------------------------------------------------
 * Bungee Jumping in Nepal — page content
 * All prices are INDICATIVE (as supplied in the brief) and must be confirmed
 * with the operator before booking. Heights are kept exactly as supplied.
 * ------------------------------------------------------------------------- */

export const PAGE_PATH = "/activities/adventure/bungee-jumping";
const IMG = "/images/activities/bungee-jumping";

/* Values used by the enquiry form. CTAs across the page pre-select these. */
export type DestinationValue = "kushma" | "pokhara" | "last-resort";
export type ActivityValue =
  | "bungee"
  | "canyon-swing"
  | "sky-cycling"
  | "sky-bridge"
  | "water-touch"
  | "combo";

export interface EnquiryPreset {
  destination?: DestinationValue;
  activity?: ActivityValue;
}

export interface Cta {
  label: string;
  href: string;
  preset?: EnquiryPreset;
}

const ask = (label: string, preset: EnquiryPreset): Cta => ({
  label,
  href: "#enquiry",
  preset,
});

/* ------------------------------ Hero ------------------------------------ */
export const hero = {
  eyebrow: "Adventure activities · Nepal",
  title: "Bungee Jumping in Nepal",
  highlight: "Kushma · Parbat",
  subtitle:
    "Take the leap above the Kaligandaki gorge at Kushma — Nepal's standout high-altitude bungee destination.",
  supporting:
    "Located roughly two hours from Pokhara, Kushma combines a purpose-built bridge, dramatic gorge scenery and several adventure products in the same area.",
  location: "Kushma, Parbat, Gandaki Province",
  badges: ["Kushma · ~228 m", "Kaligandaki Gorge", "From NPR 9,000"],
  image: {
    src: `${IMG}/kushma-bungee-jumping.jpg`,
    alt: "Bungee jumper leaping from the Kushma bridge above the Kaligandaki gorge in Parbat, Nepal",
  },
  primaryCta: { label: "Explore Bungee Options", href: "#sites" } as Cta,
  secondaryCta: { label: "Plan From Pokhara", href: "#from-pokhara" } as Cta,
};

/* -------------------------- Kushma feature ------------------------------ */
export const kushmaFeature = {
  heading: "Why Kushma Leads the Bungee Experience",
  paragraphs: [
    "Kushma sits above the Kaligandaki gorge and offers one of Nepal's most dramatic bungee settings. The main jump is approximately 228 metres and operates from a purpose-built bridge over the gorge.",
    "The same area also offers canyon swing, sky cycling and access to the Kushma sky bridge, making it possible to build a full adventure day rather than a single jump.",
  ],
  image: {
    src: `${IMG}/kaligandaki-gorge.jpg`,
    alt: "The Kaligandaki gorge below the Kushma bungee bridge in Parbat District",
  },
  points: [
    { title: "~228 metres", text: "High-altitude bungee setting above the Kaligandaki gorge." },
    { title: "Multiple products", text: "Bungee, canyon swing, sky cycling and sky bridge experiences can be combined." },
    { title: "From Pokhara", text: "A practical day-trip option for travelers already staying in Pokhara." },
  ],
};

/* ---------------------------- Bungee sites ------------------------------ */
export interface BungeeSite {
  id: string;
  name: string;
  subtitle?: string;
  region: string;
  height: string;
  /** Upper numeric height in metres — only used to scale the drop gauge. */
  heightMetres: number;
  setting: string;
  description: string;
  distinctive: string;
  comparisonDistinctive: string;
  price: string;
  status: "ESTABLISHED";
  primary?: boolean;
  image: { src: string; alt: string };
  cta: Cta;
}

export const bungeeSites: BungeeSite[] = [
  {
    id: "kushma",
    name: "Kushma",
    subtitle: "The Cliff / Kushma Bungee",
    region: "Gandaki / Parbat",
    height: "~228 m",
    heightMetres: 228,
    setting: "Kaligandaki Gorge",
    description:
      "Among the world's highest bungee jumps, from a purpose-built bridge over one of the deepest gorges on earth.",
    distinctive: "Two operators, several products from the same span.",
    comparisonDistinctive: "Purpose-built bridge, multiple adventure products",
    price: "NPR 9,000–15,000",
    status: "ESTABLISHED",
    primary: true,
    image: {
      src: `${IMG}/kushma-bungee.jpg`,
      alt: "Kushma bungee bridge spanning the Kaligandaki gorge in Parbat, Gandaki Province",
    },
    cta: { label: "Explore Kushma", href: "#kushma" },
  },
  {
    id: "last-resort",
    name: "The Last Resort",
    region: "Bagmati / Sindhupalchok",
    height: "160 m",
    heightMetres: 160,
    setting: "Bhote Koshi",
    description: "Nepal's original bungee, from a suspension bridge on the Tibet highway.",
    distinctive: "Resort stay, rafting and canyoning on the same site.",
    comparisonDistinctive: "Original Nepal bungee, resort + rafting + canyoning",
    price: "US$95–150",
    status: "ESTABLISHED",
    image: {
      src: `${IMG}/last-resort-bungee.jpg`,
      alt: "The Last Resort suspension bridge bungee over the Bhote Koshi river in Sindhupalchok",
    },
    cta: { label: "Explore The Last Resort", href: "#last-resort" },
  },
  {
    id: "pokhara",
    name: "Hemja / Pokhara",
    region: "Gandaki / Kaski",
    height: "70–80 m",
    heightMetres: 80,
    setting: "Tower-based",
    description: "The convenient Pokhara option — no travel day required.",
    distinctive:
      "Water-touch jump available and suitable for groups looking for a convenient local option.",
    comparisonDistinctive: "Convenient Pokhara option, water-touch jump",
    price: "US$60–90",
    status: "ESTABLISHED",
    image: {
      src: `${IMG}/pokhara-bungee.jpg`,
      alt: "Tower-based bungee jump at Hemja near Pokhara, Kaski District",
    },
    cta: { label: "Explore Pokhara Bungee", href: "#pokhara" },
  },
];

/* ------------------------- Adventure products --------------------------- */
export interface AdventureProduct {
  id: string;
  name: string;
  meta?: { label: string; value: string }[];
  description: string;
  price: string;
  status?: string;
  cta?: Cta;
}

export const kushmaProducts: AdventureProduct[] = [
  {
    id: "kushma-bungee",
    name: "Kushma Bungee",
    meta: [{ label: "Height", value: "~228 m" }],
    description: "A high-altitude bungee jump above the Kaligandaki gorge.",
    price: "NPR 9,000–15,000",
    cta: ask("Ask About Bungee", { destination: "kushma", activity: "bungee" }),
  },
  {
    id: "kushma-swing",
    name: "Kushma Canyon Swing",
    meta: [{ label: "Height", value: "~228 m" }],
    description:
      "A swing arc across the gorge with a longer sensation and a less abrupt start than a traditional bungee.",
    price: "NPR 6,000–11,000",
    cta: ask("Ask About Swing", { destination: "kushma", activity: "canyon-swing" }),
  },
  {
    id: "kushma-sky-cycling",
    name: "Kushma Sky Cycling",
    description: "Pedal a bicycle along a cable strung across the gorge.",
    price: "NPR 3,500–7,000",
    cta: ask("Ask About Sky Cycling", { destination: "kushma", activity: "sky-cycling" }),
  },
  {
    id: "kushma-sky-bridge",
    name: "Kushma Sky Bridge",
    description:
      "One of the world's longest pedestrian suspension bridges and a major attraction in the area.",
    price: "Free–NPR 500",
    cta: ask("Explore Sky Bridge", { destination: "kushma", activity: "sky-bridge" }),
  },
];

export const pokharaProducts: AdventureProduct[] = [
  {
    id: "pokhara-water-touch",
    name: "Pokhara Water-Touch Jump",
    meta: [
      { label: "Location", value: "Gandaki / Kaski" },
      { label: "Height", value: "~70 m" },
      { label: "Setting", value: "Pond" },
    ],
    description: "A lower-commitment version that dips participants into water at the bottom.",
    price: "NPR 5,500–8,500",
    status: "ESTABLISHED",
    cta: ask("Ask About Water-Touch Jump", { destination: "pokhara", activity: "water-touch" }),
  },
  {
    id: "pokhara-bungee",
    name: "Pokhara Bungee",
    meta: [
      { label: "Location", value: "Hemja" },
      { label: "Height", value: "70–80 m" },
    ],
    description:
      "A convenient tower-based option without needing a separate travel day from Pokhara.",
    price: "US$60–90",
    cta: ask("Check Pokhara Availability", { destination: "pokhara", activity: "bungee" }),
  },
];

export const lastResortFeature = {
  heading: "The Last Resort: More Than Bungee",
  text: "The Last Resort in Sindhupalchok combines its 160-metre bungee experience with other adventure activities and resort facilities.",
  image: {
    src: `${IMG}/last-resort-bungee.jpg`,
    alt: "Bungee bridge at The Last Resort above the Bhote Koshi in Sindhupalchok, Bagmati Province",
  },
  products: [
    {
      id: "lr-bungee",
      name: "Bungee",
      description: "160 m above the Bhote Koshi",
      price: "US$95–150",
      cta: ask("Ask About Bungee", { destination: "last-resort", activity: "bungee" }),
    },
    {
      id: "lr-swing",
      name: "Canyon Swing",
      description: "A large free-fall swing arc over the river.",
      price: "US$110–160",
      cta: ask("Ask About Swing", { destination: "last-resort", activity: "canyon-swing" }),
    },
    {
      id: "lr-canyoning",
      name: "Canyoning",
      description: "Combine the bungee experience with canyoning at the same destination.",
      price: "Enquire",
      cta: ask("Ask About Canyoning", { destination: "last-resort", activity: "combo" }),
    },
  ] as AdventureProduct[],
};

/* ---------------------------- Canyon swing ------------------------------ */
export const canyonSwing = {
  heading: "Canyon Swing",
  text: "A canyon swing creates a longer swinging sensation than a conventional bungee jump and can appeal to travelers looking for a different type of free-fall experience.",
  sites: [
    {
      id: "swing-kushma",
      name: "Kushma",
      height: "~228 m free-fall setting",
      river: "Kaligandaki",
      price: "NPR 6,000–11,000",
      cta: ask("Ask About Kushma Swing", { destination: "kushma", activity: "canyon-swing" }),
    },
    {
      id: "swing-last-resort",
      name: "The Last Resort",
      height: "160 m",
      river: "Bhote Koshi",
      price: "NPR/US$ pricing varies — indicative range US$110–160",
      cta: ask("Ask About Last Resort Swing", { destination: "last-resort", activity: "canyon-swing" }),
    },
  ],
};

/* ------------------------------- Combos --------------------------------- */
export interface ComboProduct {
  sku: string;
  name: string;
  parts: string[];
  description: string;
  price: string;
  cta: Cta;
}

export const combos: ComboProduct[] = [
  {
    sku: "KSH-BNG-SWG",
    name: "Kushma Bungee + Swing",
    parts: ["Bungee", "Canyon swing"],
    description: "Combine the main bungee with the Kushma canyon swing.",
    price: "Enquire for current combo rate",
    cta: ask("Ask About Combo", { destination: "kushma", activity: "combo" }),
  },
  {
    sku: "KSH-BNG-CYC-BRG",
    name: "Kushma Bungee + Sky Cycling + Sky Bridge",
    parts: ["Bungee", "Sky cycling", "Sky bridge"],
    description: "A multi-activity Kushma day combining the bungee, sky cycling and sky bridge.",
    price: "Enquire for current combo rate",
    cta: ask("Plan Kushma Adventure Day", { destination: "kushma", activity: "combo" }),
  },
  {
    sku: "TLR-BNG-SWG-CNY",
    name: "Last Resort Bungee + Swing + Canyoning",
    parts: ["Bungee", "Canyon swing", "Canyoning"],
    description: "Combine three adventure experiences at The Last Resort.",
    price: "Enquire for current combo rate",
    cta: ask("Ask About Last Resort Combo", { destination: "last-resort", activity: "combo" }),
  },
  {
    sku: "PKR-BNG-ZIP-PGL",
    name: "Pokhara Bungee + Zip Flyer + Paragliding",
    parts: ["Bungee", "Zip flyer", "Paragliding"],
    description:
      "A same-day Pokhara adventure combination for travelers who want multiple aerial experiences.",
    price: "Enquire for current combo rate",
    cta: ask("Plan Pokhara Adventure Day", { destination: "pokhara", activity: "combo" }),
  },
];

/* ---------------------------- Price driver ------------------------------ */
export const priceDriver = {
  heading: "What Determines the Price?",
  statement: ["Site", "product", "media package"],
  text: "Adventure pricing varies according to the site, the selected activity and any photo or video/media package included.",
  factors: [
    { title: "Site", text: "Kushma, The Last Resort and Pokhara have different pricing structures." },
    { title: "Product", text: "Bungee, swing, sky cycling and combo packages have separate rates." },
    { title: "Media package", text: "Photo and video packages can add to the experience cost." },
  ],
};

/* ------------------------------ Transport ------------------------------- */
export const transport = {
  heading: "Kushma From Pokhara",
  message: "Turn your Pokhara stay into an adventure day.",
  text: "Kushma is roughly two hours from Pokhara, making it a practical day-trip destination for travelers already staying in the city.",
  costLabel: "Transport from Pokhara",
  cost: "NPR 3,000–6,000",
  costNote:
    "This is an indicative transport cost and may vary by vehicle, group size and itinerary.",
  journey: ["Pokhara", "Kushma", "Adventure", "Return to Pokhara"],
  cta: ask("Plan Kushma Day Trip", { destination: "kushma" }),
};

/* ---------------------------- Who is it for ----------------------------- */
export const audiences = [
  { title: "First-time adventure travelers", text: "Choose between bungee, swing and lower-commitment options depending on your preferred experience." },
  { title: "Thrill seekers", text: "Kushma offers a dramatic high-altitude gorge setting." },
  { title: "Groups", text: "Combine multiple activities and create a full adventure day." },
  { title: "Photographers", text: "Add available photo/video packages to selected activities." },
  { title: "Pokhara travelers", text: "Kushma can be added as a day trip from Pokhara." },
];

/* ----------------------------- Quick facts ------------------------------ */
export const quickFacts = [
  { label: "Main destination", value: "Kushma, Parbat" },
  { label: "Height", value: "~228 m" },
  { label: "Gorge", value: "Kaligandaki" },
  { label: "From Pokhara", value: "~2 hours" },
  { label: "Bungee price", value: "NPR 9,000–15,000" },
  { label: "Other activities", value: "Swing · Sky Cycling · Sky Bridge" },
  { label: "Booking type", value: "Availability / enquiry" },
];

/* ------------------------------- Gallery -------------------------------- */
export const gallery = [
  { src: `${IMG}/kushma-bungee-jump.jpg`, alt: "Jumper in free fall from the Kushma bungee bridge, Parbat, Nepal", caption: "Kushma bungee" },
  { src: `${IMG}/kaligandaki-gorge.jpg`, alt: "Steep walls of the Kaligandaki gorge at Kushma, Gandaki Province", caption: "Kaligandaki gorge" },
  { src: `${IMG}/kushma-canyon-swing.jpg`, alt: "Canyon swing arc across the Kaligandaki gorge at Kushma", caption: "Kushma canyon swing" },
  { src: `${IMG}/kushma-sky-cycling.jpg`, alt: "Sky cycling on a cable strung across the gorge at Kushma", caption: "Sky cycling" },
  { src: `${IMG}/kushma-sky-bridge.jpg`, alt: "Kushma sky bridge, a long pedestrian suspension bridge in Parbat District", caption: "Kushma sky bridge" },
  { src: `${IMG}/pokhara-bungee.jpg`, alt: "Tower bungee at Hemja near Pokhara, Nepal", caption: "Hemja / Pokhara" },
  { src: `${IMG}/last-resort-bungee.jpg`, alt: "Bungee from the suspension bridge at The Last Resort over the Bhote Koshi", caption: "The Last Resort" },
];

/* ---------------------------- How it works ------------------------------ */
export const steps = [
  { title: "Choose Your Site", text: "Kushma, Pokhara or The Last Resort." },
  { title: "Choose Your Product", text: "Bungee, swing, sky cycling or a combo." },
  { title: "Confirm Availability", text: "We check the current operator schedule, pricing and selected media package." },
  { title: "Arrange Transport", text: "For Kushma, add transport from Pokhara if required." },
];

/* ---------------------------- Enquiry form ------------------------------ */
export const enquiryOptions = {
  destinations: [
    { value: "kushma", label: "Kushma" },
    { value: "pokhara", label: "Pokhara" },
    { value: "last-resort", label: "The Last Resort" },
  ] as { value: DestinationValue; label: string }[],
  activities: [
    { value: "bungee", label: "Bungee Jump" },
    { value: "canyon-swing", label: "Canyon Swing" },
    { value: "sky-cycling", label: "Sky Cycling" },
    { value: "sky-bridge", label: "Sky Bridge" },
    { value: "water-touch", label: "Water-Touch Jump" },
    { value: "combo", label: "Combo Package" },
  ] as { value: ActivityValue; label: string }[],
  media: ["Yes", "No", "Not Sure"],
  transport: ["From Pokhara", "Already Arranged", "Not Required"],
};

/* --------------------------------- FAQ ---------------------------------- */
export const faqs = [
  {
    q: "Where is the highest bungee experience in Nepal?",
    a: "Kushma in Parbat District, Gandaki Province, has a bungee setting of approximately 228 metres above the Kaligandaki gorge.",
  },
  {
    q: "How far is Kushma from Pokhara?",
    a: "Kushma is roughly two hours from Pokhara, making it practical as a day-trip adventure for travelers staying in Pokhara.",
  },
  {
    q: "How much does Kushma bungee jumping cost?",
    a: "The supplied indicative range is approximately NPR 9,000–15,000. Confirm the current operator price and any media package before booking.",
  },
  {
    q: "What other activities are available in Kushma?",
    a: "Depending on current operation, options include canyon swing, sky cycling and the Kushma sky bridge.",
  },
  {
    q: "Is there bungee jumping in Pokhara?",
    a: "Yes. The Hemja / Pokhara option is a tower-based experience with an indicative height of around 70–80 metres.",
  },
  {
    q: "What is the water-touch jump?",
    a: "It is a lower-commitment style of jump that dips the participant into water at the bottom. The supplied indicative price is NPR 5,500–8,500.",
  },
  {
    q: "What is The Last Resort bungee?",
    a: "The Last Resort in Sindhupalchok offers a 160-metre bungee over the Bhote Koshi and also has other adventure activities such as rafting and canyoning.",
  },
  {
    q: "Can I visit Kushma from Pokhara?",
    a: "Yes. Kushma can be arranged as a day trip from Pokhara. Indicative additional transport is approximately NPR 3,000–6,000 depending on the vehicle and group.",
  },
  {
    q: "Can I combine multiple activities?",
    a: "Yes. Suggested combinations include Kushma bungee + swing, Kushma bungee + sky cycling + sky bridge, The Last Resort bungee + swing + canyoning, and Pokhara bungee + zip flyer + paragliding.",
  },
];

export const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Activities", href: "/activities" },
  { name: "Adventure", href: "/activities/adventure" },
  { name: "Bungee Jumping", href: PAGE_PATH },
];

export const PRICE_NOTE = "Prices are indicative and should be confirmed before booking.";
