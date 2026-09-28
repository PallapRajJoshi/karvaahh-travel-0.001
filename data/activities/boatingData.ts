/**
 * Nepal boating, canoeing and wildlife-boat destinations.
 * Prices are indicative local ranges, not quotes.
 */

export type BoatingCategory =
  | "pokhara-lake"
  | "remote-lake"
  | "wildlife"
  | "reservoir"
  | "river";

export type BoatingStatus = "ESTABLISHED" | "EMERGING" | "SEASONAL";

export interface BoatingDestination {
  slug: string;
  name: string;
  province: string;
  district: string;
  experience: string;
  distinctive?: string;
  note?: string;
  price: string;
  status: BoatingStatus;
  categories: BoatingCategory[];
  ctaLabel?: string;
}

export const boatingDestinations: BoatingDestination[] = [
  {
    slug: "phewa-lake",
    name: "Phewa Lake",
    province: "Gandaki",
    district: "Kaski",
    experience:
      "Rowboat or pedal boat to Tal Barahi temple island; sunrise reflections of Machhapuchhre.",
    price: "NPR 600–1,200/hr per boat",
    status: "ESTABLISHED",
    categories: ["pokhara-lake"],
    ctaLabel: "Explore Phewa Lake",
  },
  {
    slug: "begnas-lake",
    name: "Begnas Lake",
    province: "Gandaki",
    district: "Kaski",
    experience: "Quieter than Phewa, with fish farms and forested shoreline.",
    price: "NPR 500–1,000/hr",
    status: "ESTABLISHED",
    categories: ["pokhara-lake"],
  },
  {
    slug: "rupa-lake",
    name: "Rupa Lake",
    province: "Gandaki",
    district: "Kaski",
    experience:
      "The least visited of the Pokhara three, with birding opportunities.",
    price: "NPR 500–1,000/hr",
    status: "ESTABLISHED",
    categories: ["pokhara-lake"],
  },
  {
    slug: "dipang-maidi-khaste",
    name: "Dipang / Maidi / Khaste",
    province: "Gandaki",
    district: "Kaski",
    experience:
      "Small lakes around the Pokhara valley rim with quieter surroundings.",
    price: "NPR 400–900/hr",
    status: "EMERGING",
    categories: ["pokhara-lake"],
  },
  {
    slug: "rara-lake",
    name: "Rara Lake",
    province: "Karnali",
    district: "Mugu",
    experience: "Rowing on Nepal's largest lake at approximately 2,990 m.",
    distinctive: "One of Nepal's most spectacular lake boating experiences.",
    price: "NPR 500–1,500 per trip",
    status: "ESTABLISHED",
    categories: ["remote-lake"],
  },
  {
    slug: "shey-phoksundo",
    name: "Shey Phoksundo",
    province: "Karnali",
    district: "Dolpa",
    experience: "Traditional boat crossings.",
    note: "Confirm current access and local rules.",
    price: "Local rate",
    status: "SEASONAL",
    categories: ["remote-lake"],
  },
  {
    slug: "kulekhani-indra-sarovar",
    name: "Kulekhani / Indra Sarovar",
    province: "Bagmati",
    district: "Makwanpur",
    experience:
      "Reservoir boating, popular with weekend groups from Kathmandu.",
    price: "NPR 800–2,500 per boat",
    status: "ESTABLISHED",
    categories: ["reservoir"],
  },
  {
    slug: "beeshazari-tal",
    name: "Beeshazari Tal",
    province: "Bagmati",
    district: "Chitwan",
    experience: "Ramsar wetland and birding by boat.",
    price: "NPR 800–2,000",
    status: "ESTABLISHED",
    categories: ["wildlife"],
  },
  {
    slug: "rapti-narayani-chitwan",
    name: "Rapti & Narayani — Chitwan",
    province: "Bagmati",
    district: "Chitwan",
    experience:
      "Dawn dugout canoe experience with opportunities to see gharial, mugger crocodiles and kingfishers.",
    price: "NPR 1,500–3,500 pp",
    status: "ESTABLISHED",
    categories: ["wildlife", "river"],
  },
  {
    slug: "karnali-dolphin-boat-bardiya",
    name: "Karnali Dolphin Boat — Bardiya",
    province: "Lumbini",
    district: "Bardiya",
    experience:
      "River experience focused on the endangered Gangetic river dolphin.",
    price: "NPR 3,500–8,000",
    status: "ESTABLISHED",
    categories: ["wildlife", "river"],
  },
  {
    slug: "koshi-tappu-boat-safari",
    name: "Koshi Tappu Boat Safari",
    province: "Koshi",
    district: "Sunsari–Saptari",
    experience:
      "Bird-focused boat safari through wetland habitat with opportunities to see wild water buffalo.",
    price: "NPR 2,500–6,000",
    status: "ESTABLISHED",
    categories: ["wildlife", "river"],
  },
  {
    slug: "ghodaghodi-lake",
    name: "Ghodaghodi Lake",
    province: "Sudurpashchim",
    district: "Kailali",
    experience: "Ramsar lake complex with migratory waterfowl.",
    price: "NPR 500–1,500",
    status: "EMERGING",
    categories: ["wildlife"],
  },
  {
    slug: "jagadishpur-reservoir",
    name: "Jagadishpur Reservoir",
    province: "Lumbini",
    district: "Kapilvastu",
    experience: "Nepal's largest reservoir and a major bird site.",
    price: "NPR 500–1,500",
    status: "EMERGING",
    categories: ["reservoir", "wildlife"],
  },
  {
    slug: "jhilmila-surma-sarovar",
    name: "Jhilmila & Surma Sarovar",
    province: "Sudurpashchim",
    district: "Kanchanpur, Bajhang",
    experience: "Remote sacred lakes.",
    price: "Local rate",
    status: "EMERGING",
    categories: ["remote-lake"],
  },
  {
    slug: "mahakali-river-boating",
    name: "Mahakali River Boating",
    province: "Sudurpashchim",
    district: "Kanchanpur",
    experience: "Border-river crossings around the Dodhara–Chandani area.",
    price: "NPR 500–2,000",
    status: "EMERGING",
    categories: ["river"],
  },
];

/* ---------- Filters ---------- */

export type BoatingFilterId = "all" | BoatingCategory | "emerging";

export const boatingFilters: { id: BoatingFilterId; label: string }[] = [
  { id: "all", label: "All" },
  { id: "pokhara-lake", label: "Pokhara Lakes" },
  { id: "remote-lake", label: "Himalayan Lakes" },
  { id: "wildlife", label: "Wildlife" },
  { id: "reservoir", label: "Reservoirs" },
  { id: "river", label: "Rivers" },
  { id: "emerging", label: "Emerging" },
];

export function filterBoating(
  destinations: BoatingDestination[],
  filter: BoatingFilterId,
): BoatingDestination[] {
  if (filter === "all") return destinations;
  if (filter === "emerging") {
    return destinations.filter((d) => d.status === "EMERGING");
  }
  return destinations.filter((d) => d.categories.includes(filter));
}

/* ---------- Experience categories ---------- */

export interface BoatingExperienceCategory {
  key: BoatingCategory;
  title: string;
  places: string;
  description: string;
}

export const boatingExperienceCategories: BoatingExperienceCategory[] = [
  {
    key: "pokhara-lake",
    title: "Lake boating",
    places: "Phewa · Begnas · Rupa · Rara",
    description:
      "Hire a rowboat or pedal boat by the hour and set your own pace on open water.",
  },
  {
    key: "wildlife",
    title: "Wildlife boating",
    places: "Chitwan · Koshi Tappu · Bardiya",
    description:
      "Guided canoe and boat safaris on wildlife-focused rivers and wetlands.",
  },
  {
    key: "remote-lake",
    title: "Remote lakes",
    places: "Phoksundo · Jhilmila · Surma Sarovar",
    description:
      "High or far-western lakes reached on foot, where boating is local and seasonal.",
  },
  {
    key: "reservoir",
    title: "Reservoir boating",
    places: "Kulekhani · Jagadishpur",
    description:
      "Wide, sheltered water close to the highways, suited to groups and short outings.",
  },
];

/* ---------- Pokhara lake loop ---------- */

export const pokharaLakeLoop = [
  {
    slug: "phewa-lake",
    name: "Phewa",
    line: "The temple island, the sunrise reflection and the busiest shoreline.",
  },
  {
    slug: "begnas-lake",
    name: "Begnas",
    line: "Forested edges, fish farms and far fewer boats.",
  },
  {
    slug: "rupa-lake",
    name: "Rupa",
    line: "The quietest of the three, with birding along the banks.",
  },
];

export const pokharaSmallLakes = "Dipang · Maidi · Khaste";

/* ---------- Wildlife boating ---------- */

export const wildlifeBoating = [
  {
    slug: "rapti-narayani-chitwan",
    title: "Chitwan",
    detail: "Canoeing on the Rapti and Narayani waterways.",
    sightings: "Possible sightings of gharial, mugger crocodile, kingfishers",
  },
  {
    slug: "karnali-dolphin-boat-bardiya",
    title: "Bardiya",
    detail: "Karnali dolphin-focused boat experiences.",
    sightings: "Wildlife-focused; Gangetic dolphin sightings subject to conditions",
  },
  {
    slug: "koshi-tappu-boat-safari",
    title: "Koshi Tappu",
    detail: "Bird-focused wetland safari.",
    sightings: "Possible sightings of waterbirds and wild water buffalo",
  },
  {
    slug: "beeshazari-tal",
    title: "Beeshazari",
    detail: "Wetland boating and birding.",
    sightings: "Possible sightings of resident and migratory birds",
  },
];

/* ---------- Price drivers ---------- */

export const boatingPriceDrivers = [
  {
    title: "Boat type",
    description: "Pricing varies by boat and experience type.",
  },
  {
    title: "Hours",
    description: "Hourly rides cost differently from fixed-trip experiences.",
  },
  {
    title: "Group size",
    description: "Some prices are per boat, while others are per person.",
  },
];

/* ---------- Gallery ---------- */

export const boatingGallery = [
  {
    src: "/images/activities/boating/phewa-lake-boating.jpg",
    alt: "Wooden boats on Phewa Lake with Machhapuchhre behind",
    caption: "Phewa Lake",
  },
  {
    src: "/images/activities/boating/begnas-lake-boating.jpg",
    alt: "Still morning water and forested shoreline at Begnas Lake",
    caption: "Begnas Lake",
  },
  {
    src: "/images/activities/boating/rara-lake-boating.jpg",
    alt: "A rowboat on Rara Lake in Karnali province",
    caption: "Rara Lake",
  },
  {
    src: "/images/activities/boating/phoksundo-boat.jpg",
    alt: "A traditional boat crossing Shey Phoksundo Lake",
    caption: "Shey Phoksundo",
  },
  {
    src: "/images/activities/boating/chitwan-canoeing.jpg",
    alt: "Dugout canoe on the Rapti river at dawn in Chitwan",
    caption: "Chitwan canoeing",
  },
  {
    src: "/images/activities/boating/koshi-tappu-boat-safari.jpg",
    alt: "Boat safari through the Koshi Tappu wetland",
    caption: "Koshi Tappu",
  },
  {
    src: "/images/activities/boating/bardiya-dolphin-boat.jpg",
    alt: "Boat on the Karnali river near Bardiya National Park",
    caption: "Bardiya",
  },
];

/* ---------- FAQ ---------- */

export const boatingFaqs = [
  {
    question: "Where can I go boating in Nepal?",
    answer:
      "The Pokhara lakes (Phewa, Begnas, Rupa and the smaller Dipang, Maidi and Khaste), remote lakes such as Rara, Shey Phoksundo, Jhilmila and Surma Sarovar, reservoirs at Kulekhani and Jagadishpur, wildlife waterways in Chitwan, Bardiya, Koshi Tappu and Beeshazari Tal, and river boating at Ghodaghodi and on the Mahakali.",
  },
  {
    question: "How much does boating in Pokhara cost?",
    answer:
      "Phewa is listed around NPR 600–1,200 per boat per hour, with other Pokhara lakes generally lower or similar depending on the experience.",
  },
  {
    question: "Can I go boating on Rara Lake?",
    answer:
      "Yes, rowing experiences are listed at Rara Lake, subject to local availability and conditions.",
  },
  {
    question: "Can I see wildlife while boating?",
    answer:
      "Wildlife-focused experiences are available in Chitwan, Bardiya and Koshi Tappu, but sightings are never guaranteed.",
  },
  {
    question: "Is Phoksundo boating available year-round?",
    answer:
      "Treat Phoksundo as seasonal and confirm current access and local rules.",
  },
];
