import type {
  InfoCard,
  JourneyStop,
  PackageExclusion,
  PackageInclusion,
  RelatedJourney,
  TransportOption,
  TravelTip,
} from "../types";
import { RELATED_IMAGES } from "./images";

/* ------------------------------------------------------------------ */
/* Official sources — verified Sep 2026. Re-verify before each season. */
/* ------------------------------------------------------------------ */
export const OFFICIAL_SOURCES = {
  amarnath: {
    name: "Shri Amarnathji Shrine Board",
    href: "https://jksasb.nic.in/",
  },
  vaishnoDevi: {
    name: "Shri Mata Vaishno Devi Shrine Board",
    href: "https://www.maavaishnodevi.org/",
  },
} as const;

export const PAGE_PATH = "/spiritual-journeys/amarnath-vaishno-devi-yatra";

/** In-page navigation — order mirrors the page. */
export const SECTION_NAV = [
  { id: "overview", label: "Overview" },
  { id: "explore-sacred-destinations", label: "Destinations" },
  { id: "amarnath-routes", label: "Amarnath routes" },
  { id: "vaishno-devi-journey", label: "Vaishno Devi" },
  { id: "registration", label: "Registration" },
  { id: "preparation", label: "Preparation" },
  { id: "itinerary", label: "Itinerary" },
  { id: "package", label: "Package" },
  { id: "faq", label: "FAQs" },
  { id: "enquiry", label: "Enquire" },
] as const;

export const HERO_BADGES = [
  "Shri Amarnath Cave",
  "Mata Vaishno Devi",
  "High-altitude pilgrimage",
  "Himalayan trek",
  "Sacred Darshan",
  "Katra & Kashmir",
];

/* ------------------------------ Overview ------------------------------ */
export const OVERVIEW_FACTS: { label: string; value: string | string[] }[] = [
  { label: "Region", value: "Jammu & Kashmir, India" },
  { label: "Category", value: "Spiritual & religious pilgrimage" },
  { label: "Pilgrimage sites", value: ["Shri Amarnath Cave Temple", "Shri Mata Vaishno Devi Temple"] },
  { label: "Main bases", value: ["Katra", "Pahalgam", "Baltal", "Srinagar"] },
  {
    label: "Amarnath access",
    value: "Traditional routes via Pahalgam and Baltal, subject to current official arrangements",
  },
  {
    label: "Vaishno Devi access",
    value: "Mountain pilgrimage from Katra, with additional transport subject to availability and current rules",
  },
  { label: "Difficulty", value: "Varies significantly with route, altitude, weather and individual fitness" },
  { label: "Registration", value: "Required under current official pilgrimage regulations" },
];

/* ------------------------ Vaishno Devi journey ------------------------ */
export const VAISHNO_STOPS: JourneyStop[] = [
  {
    name: "Katra",
    body: "The base town. Pilgrims register with the Shrine Board here and receive their Yatra authorisation before setting out.",
  },
  {
    name: "Banganga",
    body: "The first check post near the start of the pathway, where Yatra authorisation is checked.",
  },
  {
    name: "Charan Paduka and Adhkuwari",
    body: "Traditional stops on the ascent. Adhkuwari, roughly midway, is a revered halt with its own cave shrine.",
  },
  {
    name: "Upper pathway",
    body: "The route continues through the Trikuta Hills towards the Bhawan, with rest points, refreshments and medical posts along the way.",
  },
  {
    name: "Bhawan — Darshan",
    body: "The shrine complex. Darshan of the holy Pindies is regulated through a continuously moving queue.",
  },
  {
    name: "Return to Katra",
    body: "Many pilgrims also visit the Bhairon temple above the Bhawan by tradition before descending to Katra.",
  },
];

/* -------------------------- Transport options ------------------------- */
export const TRANSPORT_OPTIONS: TransportOption[] = [
  {
    name: "Walking",
    icon: "walk",
    appliesTo: "Both pilgrimages",
    body: "The traditional way to make the pilgrimage, at your own pace.",
  },
  {
    name: "Pony / horse",
    icon: "horse",
    appliesTo: "Both pilgrimages",
    body: "Available on parts of the routes, subject to current local rules and operating conditions.",
  },
  {
    name: "Palki",
    icon: "palki",
    appliesTo: "Both pilgrimages",
    body: "Carried palanquins, subject to local arrangements and availability.",
  },
  {
    name: "Battery car",
    icon: "car",
    appliesTo: "Vaishno Devi route",
    body: "On stretches of the Vaishno Devi route where operational and permitted.",
  },
  {
    name: "Helicopter",
    icon: "heli",
    appliesTo: "Where officially operating",
    body: "Only where officially approved and open for booking. Not guaranteed — services may not run in a given season.",
  },
];

/* ---------------------------- Registration ---------------------------- */
export const AMARNATH_REGISTRATION_POINTS = [
  "Advance registration is required under current official arrangements.",
  "Prescribed documents and a valid photo ID are needed.",
  "Medical fitness documentation is required as part of the official process.",
  "Security checks and route restrictions apply along the Yatra.",
  "Registration windows, quotas and procedures can change every year.",
];

export const BEFORE_DEPARTURE = [
  "Check the latest official pilgrimage notification.",
  "Register through the officially designated process.",
  "Obtain the documents required for your registration.",
  "Complete medical requirements that apply to you.",
  "Pack suitable warm and waterproof clothing.",
  "Prepare your body for high-altitude walking.",
  "Carry the identification the rules require.",
  "Confirm accommodation and transport.",
  "Check weather and route conditions.",
  "Follow official instructions on the day.",
];

export const VAISHNO_REGISTRATION_POINTS = [
  "Yatra registration is carried out by the Shri Mata Vaishno Devi Shrine Board — no private operator can issue it, including Karvaahh.",
  "Pilgrims receive a Yatra authorisation card on registration, which is checked on the route.",
  "Carry a valid identity document for registration.",
  "Route entry procedures, time limits and crowd-management rules are set by the Shrine Board and can change.",
  "Battery car, helicopter and accommodation bookings follow the Shrine Board's current rules.",
];

/* ---------------------------- Experiences ----------------------------- */
export const EXPERIENCES: InfoCard[] = [
  { title: "Amarnath Cave Darshan", icon: "diya", shrine: "amarnath", body: "A sacred pilgrimage moment at the cave shrine, high in the Himalayas." },
  { title: "Mata Vaishno Devi Darshan", icon: "lotus", shrine: "vaishno", body: "The devotional climb through the Trikuta Hills to the holy Pindies." },
  { title: "Himalayan pilgrimage trek", icon: "mountain", shrine: "amarnath", body: "Walk through the mountain landscapes that pilgrims have crossed for generations." },
  { title: "Pahalgam valley", icon: "leaf", shrine: "kashmir", body: "Riverside meadows and pine slopes around the traditional pilgrimage base." },
  { title: "Katra's pilgrim atmosphere", icon: "hands", shrine: "vaishno", body: "The devotional energy of a town that exists for the Vaishno Devi pilgrimage." },
  { title: "Kashmir scenic extension", icon: "compass", shrine: "kashmir", body: "Optional days in Srinagar, Sonamarg or Gulmarg after your Darshan." },
];

/* ----------------------------- Preparation ---------------------------- */
export const PHYSICAL_PREP = [
  "Walk regularly in the weeks before you travel.",
  "Increase your walking time gradually.",
  "Practise on slopes, stairs and uneven ground.",
];

export const ALTITUDE_SYMPTOMS = ["Headache", "Unusual fatigue", "Dizziness", "Nausea", "Breathlessness"];

export const WEATHER_KIT = [
  "Warm layers",
  "Waterproof outerwear",
  "Gloves",
  "Cap",
  "Sunglasses",
  "Comfortable trekking shoes",
  "Personal medication",
  "Basic personal essentials",
];

export const SAFETY_GUIDELINES = [
  "Follow official route instructions.",
  "Co-operate with security checks.",
  "Stay out of restricted areas.",
  "Avoid unsafe shortcuts.",
  "Stay with your group.",
  "Follow medical advice.",
  "Keep identification documents secure.",
  "Carry enough water and essential supplies.",
  "Don't push beyond your ability.",
  "Follow weather advisories.",
  "Never attempt unsafe river crossings.",
  "Follow local authorities and pilgrimage management teams.",
];

/* ------------------------------ Seasons ------------------------------- */
export const SEASONS: InfoCard[] = [
  { title: "Spring", body: "Weather and mountain conditions can vary significantly." },
  { title: "Summer — pilgrimage season", body: "The period generally associated with the Amarnath Yatra, when officially open." },
  { title: "Monsoon", body: "Rain can affect roads and travel conditions in parts of Jammu & Kashmir." },
  { title: "Autumn", body: "Often pleasant in many areas, though mountain weather stays variable." },
  { title: "Winter", body: "Heavy snow and cold can affect high-altitude routes and mountain access." },
];

/* ------------------------------ Tips --------------------------------- */
export const TRAVEL_TIPS: TravelTip[] = [
  { icon: "id", text: "Carry government-issued identification." },
  { icon: "document", text: "Keep registration documents easy to reach." },
  { icon: "copy", text: "Carry photocopies or digital backups." },
  { icon: "layers", text: "Dress in layers." },
  { icon: "boot", text: "Wear comfortable, broken-in trekking shoes." },
  { icon: "rain", text: "Pack rain protection." },
  { icon: "sun", text: "Use sunglasses and sun protection." },
  { icon: "pill", text: "Keep essential medicines with you." },
  { icon: "water", text: "Stay hydrated." },
  { icon: "pace", text: "Avoid overexertion." },
  { icon: "shield", text: "Follow official instructions." },
  { icon: "phone", text: "Keep emergency contacts accessible." },
  { icon: "bag", text: "Travel light." },
  { icon: "hands", text: "Respect religious customs." },
  { icon: "leaf", text: "Keep pilgrimage routes clean." },
];

/* ---------------------------- Who it's for ---------------------------- */
export const TRAVELLERS: InfoCard[] = [
  { title: "Families", icon: "family", body: "For families planning a shared spiritual journey, with pacing built around everyone in the group." },
  { title: "Devotees", icon: "diya", body: "For travellers seeking Darshan at two revered shrines in a single, well-planned journey." },
  { title: "Experienced trekkers", icon: "mountain", body: "For people comfortable with mountain walking and high-altitude environments." },
  { title: "Spiritual travellers", icon: "lotus", body: "For those seeking pilgrimage, reflection and Himalayan scenery together." },
  {
    title: "Senior travellers",
    icon: "senior",
    body: "Possible for some, not all. Planning must weigh mobility, altitude, walking distance, medical requirements and the transport actually available.",
  },
];

/* ---------------------- Accommodation & transport --------------------- */
export const STAYS: InfoCard[] = [
  { title: "Katra stay", shrine: "vaishno", body: "Hotel stay in the Vaishno Devi base town, in the room category of your package." },
  { title: "Pahalgam / Sonamarg stay", shrine: "amarnath", body: "Hotel stay near your Amarnath route base, arranged around your permitted Yatra date." },
  { title: "Srinagar stay", shrine: "kashmir", body: "Hotel or houseboat stay on the optional Kashmir extension." },
  {
    title: "Pilgrimage camp / route stay",
    shrine: "amarnath",
    body: "Tented camps along the Amarnath route are not hotels. They are basic, shared and run under official arrangements.",
  },
];

export const STAY_NOTES = [
  "Accommodation depends on the package you choose.",
  "Hotels vary by destination and room category.",
  "Availability near pilgrimage bases is limited in high season.",
  "Twin or triple sharing is offered where applicable.",
];

export const TRANSPORT_MODES = [
  { title: "Private vehicle", body: "For intercity transfers across Jammu and Kashmir." },
  { title: "Airport / railway pickup", body: "From designated arrival points such as Jammu or Katra." },
  { title: "Local transfers", body: "To registration points, route bases and sightseeing." },
  { title: "Pilgrimage-route services", body: "Pony, palki, battery car or helicopter only where permitted, available and booked." },
];

/* ----------------------------- Package -------------------------------- */
export const INCLUSIONS: PackageInclusion[] = [
  "Accommodation in selected hotels on a twin/triple-sharing basis",
  "Breakfast and dinner as per the selected package",
  "Private transport throughout the itinerary where applicable",
  "Pickup and drop-off at designated start and end points",
  "Sightseeing and transfers mentioned in the itinerary",
  "Driver allowance, fuel, parking and applicable road taxes where included",
  "Tour coordinator / driver assistance",
  "Basic pilgrimage travel coordination",
  "Guidance on registration requirements where applicable",
  "Permits and entry fees specifically mentioned in your package",
  "Basic travel assistance throughout the journey",
];

export const EXCLUSIONS: PackageExclusion[] = [
  "Train or flight tickets unless specifically mentioned",
  "Official Yatra registration fees, medical certificates and related costs",
  "Lunch, snacks and beverages unless specifically included",
  "Pony, palki, battery car or helicopter charges unless specifically included",
  "Porter and local guide charges",
  "Temple donations, special Darshan, Puja and ritual expenses",
  "Personal expenses — laundry, phone calls, room service, shopping",
  "Medical expenses and travel insurance",
  "Extra accommodation or transport caused by weather, route closures, delays or operational disruption",
  "Costs from government restrictions or changes in pilgrimage procedures",
  "Tips and gratuities",
  "Any service not listed under inclusions",
];

/* ----------------------------- Related -------------------------------- */
/** Only routes confirmed to exist. See README → Related journeys before adding more. */
export const RELATED_JOURNEYS: RelatedJourney[] = [
  {
    title: "12 Jyotirlinga Yatra",
    href: "/spiritual-journeys/12-jyotirlinga-yatra",
    region: "Across India",
    image: RELATED_IMAGES.jyotirlinga,
  },
  {
    title: "Haridwar & Rishikesh Yatra",
    href: "/spiritual-journeys/haridwar-rishikesh-yatra",
    region: "Uttarakhand, India",
    image: RELATED_IMAGES.haridwar,
  },
];
