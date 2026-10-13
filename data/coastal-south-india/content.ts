/* ============================================================
   COASTAL GETAWAYS OF SOUTH INDIA — CONTENT
   ------------------------------------------------------------
   Route concepts only. No prices, schedules, permit fees or
   guaranteed activities — these are confirmed per enquiry.
   Local photos point at public/images/coastal-south-india/;
   `resolveImages` renders designed artwork until each file is
   added, so a real photo appears with no data change.
   ============================================================ */

import type { IconName, PageImage } from "@/components/activities/experience/types";

export const PAGE_PATH = "/packages/coastal-getaways-of-south-india";
export const PAGE_TITLE = "Coastal Getaways of South India";

export const enquiryHref = (destination = PAGE_TITLE) =>
  `/contact?type=india-tours&destination=${encodeURIComponent(destination)}#enquiry`;

const unsplash = (id: string, label: string, alt: string, w = 2000, objectPosition?: string): PageImage => ({
  src: `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`,
  label,
  alt,
  ...(objectPosition ? { objectPosition } : {}),
});
const local = (file: string, label: string, alt: string): PageImage => ({ src: `/images/coastal-south-india/${file}`, label, alt });

/* Generic coastal photos already used on the Beach & Cruise page; alt text describes only what they show. */
export const HERO_IMAGE = unsplash("1547079631-442498027a07", "Turquoise coastline", "Aerial view of turquoise water and waves breaking along a tropical shoreline", 2400);
export const CTA_IMAGE = unsplash("1507525428034-b723cf961d3e", "Beach at golden hour", "Gentle waves on a sandy beach at golden hour", 2000);

export const SEO = {
  title: "Coastal Getaways of South India | Karvaahh Tours & Travels",
  description:
    "Explore South India with Karvaahh through hill-station escapes, tropical beaches, Kerala backwaters, ancient temples and customized coastal journeys.",
  keywords: [
    "South India tour packages",
    "Kerala backwaters tour",
    "Goa Kerala beach holiday",
    "Ooty Munnar hill station tour",
    "Tamil Nadu temple tour",
    "Rameswaram Kanyakumari tour",
    "Andaman island extension",
    "Karvaahh South India",
  ],
};

export const HERO_HIGHLIGHTS = ["Hill Escapes", "Beach Adventures", "Spiritual Heritage"];

export const INFO_STRIP: { icon: IconName; label: string }[] = [
  { icon: "route", label: "Customisable itineraries" },
  { icon: "car", label: "Private road transfers" },
  { icon: "users", label: "Private & group travel" },
  { icon: "headset", label: "Karvaahh planning support" },
];

/* ---------- Regional geography ---------- */

export type Region = { id: string; eyebrow: string; title: string; text: string; points: string[]; image: PageImage };

export const REGIONS: Region[] = [
  {
    id: "hills",
    eyebrow: "Inland · Western Ghats",
    title: "The Nilgiris & Western Ghats",
    text: "Mountain scenery, tea and coffee plantations, waterfalls and forest roads. Ooty and Munnar are inland hill stations — cool retreats, not coastal destinations.",
    points: ["Ooty & Coonoor — Tamil Nadu", "Munnar & Wayanad — Kerala", "Coorg — Karnataka (optional)"],
    image: local("munnar-tea-gardens.jpg", "Munnar tea gardens", "Rolling tea plantations on the hills around Munnar, Kerala"),
  },
  {
    id: "coast",
    eyebrow: "Western & Southern Coast",
    title: "Arabian Sea Shores & Backwaters",
    text: "Goa and coastal Karnataka belong to western India; Kerala carries the coast into the southern peninsula with beaches, fishing villages and backwaters.",
    points: ["Goa — western India", "Gokarna, Murudeshwar, Udupi — coastal Karnataka", "Kochi, Alappuzha, Varkala, Kovalam — Kerala"],
    image: local("alappuzha-backwaters.jpg", "Kerala backwaters", "A houseboat on the palm-lined backwaters of Alappuzha, Kerala"),
  },
  {
    id: "heritage",
    eyebrow: "Southern Peninsula · East Coast",
    title: "Sacred Temples & Historic Coastal Cities",
    text: "Tamil Nadu's temple towns and the shore at Kanyakumari, with optional extensions to Andhra Pradesh and Odisha on India's eastern coast.",
    points: ["Chennai, Mahabalipuram, Madurai — Tamil Nadu", "Rameswaram & Kanyakumari — Tamil Nadu", "Visakhapatnam, Puri, Konark — eastern coast"],
    image: local("mahabalipuram-shore-temple.jpg", "Mahabalipuram", "The granite Shore Temple at Mahabalipuram beside the Bay of Bengal"),
  },
];

/* ---------- The three packages ---------- */

export type CoastalPackage = {
  id: string;
  title: string;
  tagline: string;
  summary: string;
  duration: string;
  style: string;
  destinations: string[];
  highlights: string[];
  route: string[];
  routeNote: string;
  season: string;
  extension?: { title: string; text: string };
  cta: string;
  image: PageImage;
  accent: string;
};

export const PACKAGES: CoastalPackage[] = [
  {
    id: "hills-of-south-india",
    title: "Hills of South India",
    tagline: "Misty Mountains, Tea Gardens and Western Ghats.",
    summary: "A slower journey through the Nilgiris and the Western Ghats — heritage railways, plantation estates and cool forest air.",
    duration: "8–12 days",
    style: "Scenic · Relaxed · Nature",
    destinations: ["Ooty & Coonoor, Tamil Nadu", "Munnar, Kerala", "Wayanad, Kerala", "Coorg, Karnataka (optional)"],
    highlights: [
      "Nilgiri mountain scenery and viewpoints",
      "Tea plantations and the heritage mountain railway",
      "Waterfalls, forest landscapes and nature walks",
      "Coffee estates and local experiences",
      "Scenic hill-station road journeys",
    ],
    route: ["Coimbatore", "Ooty & Coonoor", "Munnar", "Wayanad or Coorg"],
    routeNote: "Final order is adjusted to your arrival airport, road conditions and departure city.",
    season: "Generally October–May; monsoon travel needs weather-aware planning.",
    cta: "Explore Hill Packages",
    image: local("ooty-nilgiri-hills.jpg", "Nilgiri Hills", "Tea estates and misty ridges of the Nilgiri Hills near Ooty"),
    accent: "#2F7D5B",
  },
  {
    id: "beaches-and-adventure",
    title: "Beaches & Adventure of South India",
    tagline: "Tropical Shores, Coastal Adventures and Backwater Escapes.",
    summary: "Down the Arabian Sea coast from Goa to Kerala — quiet beaches, temple towns by the sea and a night on the backwaters.",
    duration: "12–16 days",
    style: "Beach · Active · Couples & Families",
    destinations: ["Goa", "Gokarna & Murudeshwar", "Udupi & Malpe", "Kochi", "Alappuzha", "Varkala & Kovalam", "Kanyakumari (optional)"],
    highlights: [
      "Tropical beaches and coastal sunsets",
      "Coastal village experiences",
      "Murudeshwar's iconic Shiva statue and temple",
      "Kerala backwaters and houseboat stays",
      "Optional kayaking, surfing, snorkelling and diving where operationally available",
      "Kanyakumari's distinctive southern shoreline",
    ],
    route: ["Goa", "Gokarna", "Murudeshwar", "Udupi", "Kochi", "Alappuzha", "Varkala", "Kovalam"],
    routeNote: "Optional Kanyakumari finish. For shorter trips, a domestic flight between Goa and Kochi saves a long road day.",
    season: "Generally October–March. Sea conditions, monsoon weather and local safety rules decide water-activity availability.",
    cta: "Explore Beach Adventures",
    image: local("varkala-cliff-beach.jpg", "Varkala", "Red laterite cliffs above the beach at Varkala, Kerala"),
    accent: "#0E8A9A",
  },
  {
    id: "spiritual-and-historical",
    title: "Spiritual & Historical Circuit",
    tagline: "Sacred Temples, Ancient Kingdoms and Coastal Heritage.",
    summary: "Tamil Nadu's great temple towns, the sacred shores of Rameswaram and Kanyakumari, and Kerala's maritime heritage.",
    duration: "12–16 days",
    style: "Cultural · Pilgrimage · Heritage",
    destinations: ["Chennai", "Mahabalipuram", "Madurai", "Rameswaram", "Dhanushkodi", "Kanyakumari", "Thiruvananthapuram", "Kochi"],
    highlights: [
      "Mahabalipuram's UNESCO-listed monuments",
      "Meenakshi Amman Temple in Madurai",
      "Ramanathaswamy Temple in Rameswaram",
      "Dhanushkodi's coastal landscapes",
      "Vivekananda Rock Memorial at Kanyakumari",
      "Kerala's maritime heritage and historic waterfront",
      "Traditional architecture, regional cuisine and culture",
    ],
    route: ["Chennai", "Mahabalipuram", "Madurai", "Rameswaram", "Kanyakumari", "Kovalam / Thiruvananthapuram", "Kochi"],
    routeNote: "Temple timings and dress codes shape each day's plan.",
    season: "Generally October–March, subject to regional weather and temple schedules.",
    extension: {
      title: "Optional eastern extension",
      text: "Visakhapatnam, Bhubaneswar, Puri, Konark and Chilika Lake belong to eastern coastal India (Andhra Pradesh and Odisha) and need extra days or a flight connection.",
    },
    cta: "Explore Spiritual Journeys",
    image: local("madurai-meenakshi-temple.jpg", "Madurai", "Painted gopuram towers of the Meenakshi Amman Temple in Madurai"),
    accent: "#B5651D",
  },
];

/* ---------- Destination grid ---------- */

export type Destination = { name: string; region: string; text: string; image: PageImage };

const dest = (name: string, region: string, text: string, file: string, alt: string): Destination => ({
  name,
  region,
  text,
  image: local(file, name, alt),
});

export const DESTINATIONS: Destination[] = [
  dest("Ooty & Coonoor", "Nilgiris · Tamil Nadu", "Tea estates and the Nilgiri mountain railway.", "ooty-coonoor.jpg", "Tea gardens on the slopes around Coonoor in the Nilgiris"),
  dest("Munnar", "Western Ghats · Kerala", "High tea country and misty viewpoints.", "munnar.jpg", "Tea-covered hills of Munnar under low cloud"),
  dest("Wayanad", "Western Ghats · Kerala", "Forests, waterfalls and spice estates.", "wayanad.jpg", "Green forested hills of Wayanad, Kerala"),
  dest("Goa", "Western India", "Beaches, old churches and coastal food.", "goa.jpg", "Palm trees along a beach in Goa"),
  dest("Gokarna", "Coastal Karnataka", "Quiet coves and a temple town by the sea.", "gokarna.jpg", "A curved beach and headland at Gokarna, Karnataka"),
  dest("Murudeshwar", "Coastal Karnataka", "A giant Shiva statue above the Arabian Sea.", "murudeshwar.jpg", "The Shiva statue and temple tower at Murudeshwar on the coast"),
  dest("Udupi & Malpe", "Coastal Karnataka", "Krishna Temple and island boat trips.", "udupi-malpe.jpg", "Malpe beach near Udupi on the Karnataka coast"),
  dest("Kochi", "Kerala", "Chinese fishing nets and a historic port.", "kochi.jpg", "Chinese fishing nets silhouetted at sunset in Fort Kochi"),
  dest("Alappuzha", "Kerala", "Backwater canals and houseboat stays.", "alappuzha.jpg", "A houseboat gliding along the Alappuzha backwaters"),
  dest("Varkala", "Kerala", "Clifftop walks above the Arabian Sea.", "varkala.jpg", "Red cliffs and beach at Varkala, Kerala"),
  dest("Kovalam", "Kerala", "Crescent beaches near Thiruvananthapuram.", "kovalam.jpg", "The lighthouse above the crescent beach at Kovalam"),
  dest("Kanyakumari", "Southern tip · Tamil Nadu", "Where three seas meet at India's tip.", "kanyakumari.jpg", "The Vivekananda Rock Memorial off the shore at Kanyakumari"),
  dest("Rameswaram", "Tamil Nadu", "Ramanathaswamy Temple and Dhanushkodi.", "rameswaram.jpg", "The long pillared corridor of Ramanathaswamy Temple, Rameswaram"),
  dest("Mahabalipuram", "Tamil Nadu", "UNESCO-listed rock-cut monuments.", "mahabalipuram.jpg", "The Shore Temple at Mahabalipuram beside the sea"),
  dest("Visakhapatnam", "Eastern coast · Andhra Pradesh", "Bay of Bengal beaches and hills.", "visakhapatnam.jpg", "The beach road and coastline of Visakhapatnam"),
  dest("Puri & Konark", "Eastern coast · Odisha", "Jagannath Temple and the Sun Temple.", "puri-konark.jpg", "The carved stone wheel of the Konark Sun Temple, Odisha"),
  dest("Andaman Islands", "Island territory · Bay of Bengal", "Separate island module by flight and ferry.", "andaman.jpg", "Turquoise water and white sand at Radhanagar Beach, Andaman Islands"),
];

/* ---------- Flagship route concept ---------- */

export const ROUTE_STAGES = [
  { days: "Days 1–4", title: "Goa", text: "Goa and selected western coastal attractions." },
  { days: "Days 5–8", title: "Coastal Karnataka", text: "Gokarna, Murudeshwar and Udupi." },
  { days: "Days 9–14", title: "Kerala", text: "Kochi, Alappuzha and southern Kerala." },
  { days: "Days 15–19", title: "Southern Tamil Nadu", text: "Kanyakumari, Rameswaram and selected Tamil Nadu destinations." },
  { days: "Days 20–23", title: "Chennai coast", text: "Chennai and Mahabalipuram." },
  { days: "Days 24–27", title: "Eastern coast", text: "Andhra Pradesh or Odisha, chosen to suit your interests." },
  { days: "Days 28–30", title: "Buffer & departure", text: "Transfer buffers, extra sightseeing or a departure gateway." },
];

/* ---------- Andaman extension ---------- */

export const ISLAND_STOPS = [
  { name: "Sri Vijaya Puram", aka: "widely known as Port Blair", text: "Arrival gateway and the historic Cellular Jail." },
  { name: "Swaraj Dweep", aka: "also known as Havelock Island", text: "Radhanagar Beach and calm island days." },
  { name: "Shaheed Dweep", aka: "also known as Neil Island", text: "Small, quiet island with coral shores." },
];

export const ISLAND_ACTIVITIES = ["Snorkelling", "Scuba diving", "Island-hopping"];

export const ISLAND_IMAGE = local("andaman-radhanagar-beach.jpg", "Andaman Islands", "White sand and turquoise water at Radhanagar Beach on Swaraj Dweep");

/* ---------- Seasons ---------- */

export const SEASONS: { months: string; title: string; icon: IconName; text: string }[] = [
  { months: "October–March", title: "Coast & heritage season", icon: "sun", text: "Generally favourable for many coastal sightseeing, beach and heritage experiences." },
  { months: "April–May", title: "Hill-station season", icon: "mountain", text: "Warmer on the coast; hill stations such as Ooty and Munnar offer cooler retreats." },
  { months: "June–September", title: "Southwest monsoon", icon: "rain", text: "Heavy rain in Goa, Karnataka and Kerala — rough seas, possible transport disruption and activity cancellations." },
];

export const SEASON_NOTE =
  "The eastern coast, especially Tamil Nadu, can also see northeast monsoon conditions during parts of October–December. Sea conditions and water sports are never guaranteed.";

/* ---------- Planning & safety ---------- */

export const PLANNING: { icon: IconName; title: string; text: string }[] = [
  { icon: "car", title: "Transport", text: "Private road transfers, rail connections and domestic flights, matched to your route." },
  { icon: "waves", title: "Water activities", text: "Licensed operators, local safety instructions and weather-dependent operations only." },
  { icon: "umbrella", title: "Monsoon", text: "Flexible itineraries and extra transfer buffers when travelling in wetter months." },
  { icon: "landmark", title: "Temples & heritage", text: "Respect local dress codes, photography restrictions and opening schedules." },
  { icon: "plane", title: "Island travel", text: "Ferries are reserved in advance; check current entry requirements before travel." },
  { icon: "passport", title: "Permits & documents", text: "Rules differ by destination and nationality — we help you verify the current ones." },
  { icon: "compass", title: "Customised travel", text: "Accommodation, trip length and sightseeing adapted to your preferences." },
];

export const WHY_KARVAAHH: { icon: IconName; title: string; text: string }[] = [
  { icon: "route", title: "Carefully planned routes", text: "Regions sequenced around realistic road, rail and flight connections." },
  { icon: "sparkles", title: "Personalised packages", text: "Every itinerary shaped around who is travelling and why." },
  { icon: "heart", title: "A balanced pace", text: "Sightseeing, relaxation and culture in proportions that suit you." },
  { icon: "calendar", title: "Flexible durations", text: "From a one-week hill escape to a month across the coast." },
  { icon: "headset", title: "Planning support", text: "Karvaahh Tours & Travels helps from first idea to final confirmation." },
];

/* ---------- FAQs ---------- */

export const FAQS = [
  {
    question: "How many days are required for a South India coastal tour?",
    answer:
      "A focused hill or beach trip works in 8–12 days, a fuller coast or temple circuit in 12–16 days, and a journey across several coastal regions in roughly 25–30 days with careful selection.",
  },
  {
    question: "Which package is best for families and couples?",
    answer:
      "Couples often enjoy the Beaches & Adventure route for its beaches and backwaters, while families tend to like the Hills of South India for its gentler pace. Both can be adjusted to your group.",
  },
  {
    question: "Can Ooty be combined with a beach holiday?",
    answer:
      "Yes. Ooty is an inland hill station, so it is added as a mountain extension — for example via Coimbatore before continuing to the Kerala coast. Allow extra days for the road journey.",
  },
  {
    question: "What is the best season for South India beaches?",
    answer:
      "October to March is generally the most favourable. The southwest monsoon (June–September) brings heavy rain and rough seas to Goa, Karnataka and Kerala, and parts of Tamil Nadu see northeast monsoon rain in October–December.",
  },
  {
    question: "Can I combine Goa, Kerala and Tamil Nadu in one trip?",
    answer:
      "Yes. Allow around two to three weeks, and consider a domestic flight between Goa and Kochi if time is short.",
  },
  {
    question: "How can I add the Andaman Islands?",
    answer:
      "Add a separate island module of about 5–7 days. It requires flights to Sri Vijaya Puram (Port Blair) and inter-island ferries, which depend on schedules and sea conditions.",
  },
  {
    question: "Are water sports available throughout the year?",
    answer:
      "No. Water activities depend on season, sea conditions, local safety restrictions and licensed operators, and may be suspended or cancelled — particularly during the monsoon.",
  },
  {
    question: "Can I customise the spiritual and historical circuit?",
    answer:
      "Yes. You can add or remove temple towns, change the pace, or include the optional eastern extension to Puri, Konark and Visakhapatnam with extra days or a flight.",
  },
  {
    question: "Are flights necessary for the complete coastal journey?",
    answer:
      "For a western-to-eastern coastal route within about a month, one or more domestic flights are usually recommended. The Andaman Islands always require a flight or a long sea passage.",
  },
  {
    question: "How can I request a customised Karvaahh package?",
    answer:
      "Use the Plan My Journey form on this page, send an enquiry through our contact page or message us on WhatsApp with your dates, group size and interests.",
  },
];

export const RELATED = [
  { href: "/packages/beach-cruise", label: "Beach & Cruise Holidays" },
  { href: "/packages/historical-heritage", label: "Historical & Heritage Tours" },
  { href: "/packages/india-pilgrimage", label: "India Pilgrimage Tours" },
  { href: "/packages/spiritual-pilgrimage", label: "Spiritual & Pilgrimage Tours" },
  { href: "/packages/north-india", label: "North India Tours" },
  { href: "/packages", label: "All Packages" },
];
