/**
 * Centralized, editable content for the Dhorpatan Hunting Reserve destination page.
 * Route: /offbeat-unexplored/dhorpatan-hunting-reserve
 *
 * Edit this file to update copy, imagery references, itineraries, or packages —
 * no component code should need to change for a content update.
 *
 * NOTE ON VERIFICATION: Several fields below are intentionally left generic
 * (no distances, durations, prices, permit fees, or hotel names) per the brief.
 * Search for "VERIFY:" comments before publishing to production.
 */

export type ImageRef = {
  /** Path relative to /public, e.g. "/images/dhorpatan/valley-wide.jpg" */
  src: string;
  alt: string;
};

export const destinationFacts = {
  name: "Dhorpatan Hunting Reserve",
  region: "Dhaulagiri Region, Western Nepal",
  districts: ["Baglung", "Myagdi", "Rukum East"],
  category: "Offbeat & Unexplored",
  tagline: "Nepal's Remote Himalayan Wilderness",
  heroFactStrip: "Baglung, Myagdi & Rukum East · Dhaulagiri Region · Alpine Wilderness",
};

export const breadcrumbTrail = [
  { label: "Home", href: "/" },
  { label: "Offbeat & Unexplored", href: "/offbeat-unexplored" },
  { label: "Dhorpatan Hunting Reserve", href: "/offbeat-unexplored/dhorpatan-hunting-reserve" },
];

export const heroContent = {
  eyebrow: "OFFBEAT NEPAL · WESTERN NEPAL",
  heading: "Dhorpatan Hunting Reserve – Nepal's Remote Himalayan Wilderness",
  subtitle:
    "Discover Nepal's only hunting reserve, where vast alpine meadows, pristine forests, and traditional mountain communities create an unforgettable Himalayan escape.",
  primaryCta: { label: "Explore Dhorpatan Packages", href: "#packages" },
  secondaryCta: { label: "Plan Your Dhorpatan Journey", href: "#contact-plan" },
  factStrip: destinationFacts.heroFactStrip,
  image: {
    src: "/images/dhorpatan/hero-dhorpatan-valley.jpg",
    alt: "Wide alpine meadows of Dhorpatan Valley with distant snow-capped Dhaulagiri range peaks at golden hour",
  } as ImageRef,
};

export const overviewContent = {
  heading: "Discover the Untamed Beauty of Dhorpatan",
  paragraph:
    "Dhorpatan Hunting Reserve, located in the Dhaulagiri region of western Nepal, across Baglung, Myagdi, and Rukum East districts, is Nepal's only hunting reserve, renowned for its vast alpine meadows, pristine forests, rolling hills, and spectacular Himalayan landscapes. Surrounded by snow-capped peaks and traditional mountain settlements, the region offers breathtaking views of the Dhaulagiri and Gurja Himal ranges. Explore the scenic beauty of Dhorpatan Valley, Phagune Dhuri, Jaljala Pass, Barse Dhuri, and the traditional villages of Takam, Lulang, and Niseldhor. Discover the rich biodiversity of the reserve, including blue sheep, Himalayan tahr, musk deer, and diverse birdlife, while enjoying trekking, camping, wildlife photography, horse riding, and authentic local cultural experiences. The destination is ideal for offbeat travelers seeking remote Himalayan adventures, peaceful alpine landscapes, and traditional Magar communities. Accessible via rugged overland routes from Baglung, Burtibang, and Beni, Dhorpatan is particularly attractive during spring and autumn for its clear mountain views, scenic trails, and natural beauty.",
  image: {
    src: "/images/dhorpatan/overview-alpine-meadow.jpg",
    alt: "Traditional mountain settlement bordered by alpine grassland in Dhorpatan with forested hills behind",
  } as ImageRef,
  factsPanel: [
    { label: "Location", value: "Baglung, Myagdi & Rukum East districts" },
    { label: "Region", value: "Dhaulagiri Region, Western Nepal" },
    { label: "Status", value: "Nepal's only hunting reserve" },
    { label: "Best seasons", value: "Spring (Mar–May) & Autumn (Sep–Nov)" },
    { label: "Key ranges", value: "Dhaulagiri & Gurja Himal" },
  ],
};

export type WhyVisitCard = { title: string; description: string; image: ImageRef };

export const whyVisitCards: WhyVisitCard[] = [
  {
    title: "Nepal's Only Hunting Reserve",
    description:
      "Discover the distinctive conservation and wildlife management landscape of Dhorpatan.",
    image: { src: "/images/dhorpatan/why-only-reserve.jpg", alt: "Signage and open grassland marking the boundary of Dhorpatan Hunting Reserve" },
  },
  {
    title: "Vast Alpine Meadows",
    description: "Explore open grasslands, rolling hills, and high-altitude pastures.",
    image: { src: "/images/dhorpatan/why-alpine-meadows.jpg", alt: "Rolling green alpine meadow with grazing livestock in Dhorpatan" },
  },
  {
    title: "Spectacular Himalayan Views",
    description: "Enjoy mountain panoramas featuring the Dhaulagiri and Gurja Himal ranges.",
    image: { src: "/images/dhorpatan/why-himalayan-views.jpg", alt: "Panoramic view of Dhaulagiri and Gurja Himal snow peaks from a Dhorpatan ridgeline" },
  },
  {
    title: "Remote Mountain Wilderness",
    description: "Experience peaceful landscapes away from heavily visited trekking destinations.",
    image: { src: "/images/dhorpatan/why-remote-wilderness.jpg", alt: "Empty mountain trail winding through remote wilderness with no other travelers visible" },
  },
  {
    title: "Rich Wildlife & Biodiversity",
    description: "Learn about the region's diverse wildlife and birdlife.",
    image: { src: "/images/dhorpatan/why-wildlife.jpg", alt: "Blue sheep grazing on a rocky alpine slope in Dhorpatan Hunting Reserve" },
  },
  {
    title: "Traditional Mountain Culture",
    description: "Discover the heritage and everyday life of local Magar communities.",
    image: { src: "/images/dhorpatan/why-culture.jpg", alt: "Traditional Magar village houses with stone and timber construction in the Dhorpatan hills" },
  },
  {
    title: "Offbeat Trekking Adventures",
    description: "Explore scenic trails, mountain passes, and remote settlements.",
    image: { src: "/images/dhorpatan/why-trekking.jpg", alt: "Trekker walking a narrow highland trail near Jaljala Pass" },
  },
  {
    title: "Photography & Nature Experiences",
    description: "Capture alpine landscapes, village life, and dramatic mountain scenery.",
    image: { src: "/images/dhorpatan/why-photography.jpg", alt: "Photographer with tripod capturing sunrise over Dhorpatan Valley" },
  },
];

export type Attraction = {
  slug: string;
  name: string;
  description: string;
  activities: string[];
  image: ImageRef;
  locationNote: "within-reserve" | "nearby-village";
};

export const attractions: Attraction[] = [
  {
    slug: "dhorpatan-valley",
    name: "Dhorpatan Valley",
    description:
      "The valley's open grasslands, surrounding hills, traditional settlements, and scenic mountain landscapes form the heart of the reserve.",
    activities: ["Nature walks", "Photography", "Cultural exploration"],
    image: { src: "/images/dhorpatan/attraction-dhorpatan-valley.jpg", alt: "Open grassland valley floor in Dhorpatan surrounded by forested hills" },
    locationNote: "within-reserve",
  },
  {
    slug: "phagune-dhuri",
    name: "Phagune Dhuri",
    description: "A scenic viewpoint set among surrounding highland landscapes.",
    activities: ["Hiking", "Panoramic photography", "Mountain-view exploration"],
    image: { src: "/images/dhorpatan/attraction-phagune-dhuri.jpg", alt: "Highland viewpoint at Phagune Dhuri overlooking distant mountain ridges" },
    locationNote: "within-reserve",
  },
  {
    slug: "jaljala-pass",
    name: "Jaljala Pass",
    description: "A highland route offering mountain scenery and trekking opportunities.",
    activities: ["Trekking", "Landscape photography", "Wilderness exploration"],
    image: { src: "/images/dhorpatan/attraction-jaljala-pass.jpg", alt: "Trail crossing the high grassy saddle of Jaljala Pass" },
    locationNote: "within-reserve",
  },
  {
    slug: "barse-dhuri",
    name: "Barse Dhuri",
    description: "Alpine terrain, scenic ridges, and a remote Himalayan atmosphere.",
    activities: ["Hiking", "Photography", "Nature exploration"],
    image: { src: "/images/dhorpatan/attraction-barse-dhuri.jpg", alt: "Ridge line at Barse Dhuri with sparse alpine vegetation" },
    locationNote: "within-reserve",
  },
  {
    slug: "takam-village",
    name: "Takam Village",
    description: "Traditional village life, local architecture, and surrounding mountain landscapes.",
    activities: ["Cultural walks", "Village exploration", "Local interactions"],
    image: { src: "/images/dhorpatan/attraction-takam-village.jpg", alt: "Traditional stone-and-timber houses in Takam village" },
    locationNote: "nearby-village",
  },
  {
    slug: "lulang-village",
    name: "Lulang Village",
    description: "Traditional settlements, rural mountain life, and scenic surroundings.",
    activities: ["Cultural experiences", "Photography", "Village walks"],
    image: { src: "/images/dhorpatan/attraction-lulang-village.jpg", alt: "Rural mountain settlement of Lulang village with terraced surroundings" },
    locationNote: "nearby-village",
  },
  {
    slug: "niseldhor",
    name: "Niseldhor",
    description: "A remote settlement and its surrounding landscapes, part of the wider Dhorpatan exploration experience.",
    activities: ["Local cultural exploration", "Nature photography"],
    image: { src: "/images/dhorpatan/attraction-niseldhor.jpg", alt: "Remote settlement of Niseldhor set against forested hillside" },
    locationNote: "nearby-village",
  },
];

export type Experience = { title: string; description: string; icon: string };

export const experiences: Experience[] = [
  { title: "Trekking", description: "Trekking through alpine meadows and mountain trails.", icon: "trek" },
  { title: "Hiking to Viewpoints", description: "Hiking to scenic viewpoints and ridgelines.", icon: "peak" },
  { title: "Camping", description: "Camping in permitted areas.", icon: "tent" },
  { title: "Wildlife Photography", description: "Wildlife photography and responsible nature observation.", icon: "camera" },
  { title: "Birdwatching", description: "Birdwatching and biodiversity exploration.", icon: "bird" },
  { title: "Horse Riding", description: "Horse riding, where locally available.", icon: "horse" },
  { title: "Village Walks", description: "Traditional village walks.", icon: "village" },
  { title: "Local Food & Culture", description: "Local food and cultural experiences.", icon: "food" },
  { title: "Landscape Photography", description: "Scenic landscape photography.", icon: "landscape" },
  { title: "Wilderness Exploration", description: "Remote Himalayan exploration.", icon: "compass" },
];

export const experiencesNote =
  "Activities depend on local conditions, regulations, and seasonal availability.";

export type TrekRoute = { title: string; description: string };

export const trekkingRoutes: TrekRoute[] = [
  { title: "Dhorpatan Valley Walks", description: "Scenic walks through Dhorpatan Valley." },
  { title: "Phagune Dhuri Hike", description: "Hiking around Phagune Dhuri." },
  { title: "Jaljala Pass Route", description: "Exploration of Jaljala Pass and nearby highland trails." },
  { title: "Meadow & Forest Trails", description: "Routes through alpine meadows and forested hills." },
  { title: "Village-to-Village Walks", description: "Cultural walks connecting nearby settlements." },
  { title: "Extended Wilderness Treks", description: "Extended trekking options connecting nearby mountain settlements, where route feasibility is verified." },
];

export const trailCategories = [
  { title: "Easy Nature Walks", description: "Gentle routes suited to relaxed exploration of the valley and nearby meadows." },
  { title: "Moderate Day Hikes", description: "Half-day to full-day hikes to viewpoints and highland trails." },
  { title: "Multi-Day Wilderness Treks", description: "Extended routes through remote terrain, subject to verified trail conditions." },
];

export const trekkingDisclaimer =
  "Difficulty levels, distances, elevation gains, and durations are not listed here pending verified route information.";

export type ItineraryOption = {
  id: string;
  title: string;
  duration: string;
  days: { day: number; summary: string }[];
};

export const itineraries: ItineraryOption[] = [
  {
    id: "short-escape",
    title: "Dhorpatan Short Escape",
    duration: "3 Days / 2 Nights",
    days: [
      { day: 1, summary: "Overland journey toward Dhorpatan and arrival." },
      { day: 2, summary: "Explore Dhorpatan Valley, nearby meadows, and scenic viewpoints." },
      { day: 3, summary: "Return journey." },
    ],
  },
  {
    id: "nature-culture",
    title: "Dhorpatan Nature & Culture Journey",
    duration: "5 Days / 4 Nights",
    days: [
      { day: 1, summary: "Travel toward Dhorpatan via a suitable access route." },
      { day: 2, summary: "Explore Dhorpatan Valley and surrounding alpine landscapes." },
      { day: 3, summary: "Hiking and photography around Phagune Dhuri or another suitable viewpoint." },
      { day: 4, summary: "Explore nearby villages and experience local mountain culture." },
      { day: 5, summary: "Return journey." },
    ],
  },
  {
    id: "wilderness-trekking",
    title: "Dhorpatan Wilderness & Trekking Adventure",
    duration: "7 Days / 6 Nights",
    days: [
      { day: 1, summary: "Overland journey toward the Dhorpatan region." },
      { day: 2, summary: "Explore Dhorpatan Valley and nearby settlements." },
      { day: 3, summary: "Trek through alpine meadows and scenic mountain trails." },
      { day: 4, summary: "Explore a suitable highland route around Jaljala Pass, subject to verified trail conditions." },
      { day: 5, summary: "Experience local village life and mountain landscapes." },
      { day: 6, summary: "Nature exploration, photography, and a flexible reserve day." },
      { day: 7, summary: "Return journey." },
    ],
  },
];

export const itineraryDisclaimer =
  "These itineraries are customizable concepts and require route and transport verification before booking. They do not guarantee that all attractions can be visited within the stated durations.";

export type WildlifeSpecies = { name: string; description: string; image: ImageRef };

export const wildlifeSpecies: WildlifeSpecies[] = [
  { name: "Blue Sheep", description: "A high-altitude grazer often seen on open alpine slopes.", image: { src: "/images/dhorpatan/wildlife-blue-sheep.jpg", alt: "Blue sheep (bharal) on a rocky alpine slope in Dhorpatan" } },
  { name: "Himalayan Tahr", description: "A sure-footed mountain goat found on steep, rugged terrain.", image: { src: "/images/dhorpatan/wildlife-himalayan-tahr.jpg", alt: "Himalayan tahr standing on a rocky outcrop" } },
  { name: "Musk Deer", description: "A shy, forest-dwelling deer native to Himalayan woodlands.", image: { src: "/images/dhorpatan/wildlife-musk-deer.jpg", alt: "Musk deer among forest undergrowth" } },
  { name: "Diverse Birdlife", description: "The reserve's forests and meadows support a wide range of bird species.", image: { src: "/images/dhorpatan/wildlife-birdlife.jpg", alt: "Himalayan bird perched on a branch in Dhorpatan forest" } },
];

export const habitatHighlights = [
  { title: "Alpine Grasslands & High-Altitude Pastures", description: "Open meadows that sustain grazing wildlife and support seasonal pastoral use." },
  { title: "Forest Ecosystems & Mountain Habitats", description: "Mixed forest belts that shelter Dhorpatan's shyer, forest-dwelling species." },
  { title: "Conservation & Responsible Observation", description: "The reserve's protected status depends on visitors observing wildlife respectfully and from a safe distance." },
];

export const conservationMessage =
  "Explore responsibly. Respect wildlife, protect fragile alpine habitats, and follow all reserve regulations during your visit.";

export const cultureContent = {
  intro:
    "Dhorpatan sits within a living cultural landscape shaped by generations of Magar mountain communities.",
  points: [
    { title: "Magar Cultural Heritage", description: "Local community life rooted in longstanding Magar traditions and mountain livelihoods." },
    { title: "Traditional Settlements", description: "Rural architecture built to suit the region's altitude and climate." },
    { title: "Local Food & Culinary Experiences", description: "Regional dishes shaped by mountain agriculture and pastoral life." },
    { title: "Village Walks & Community Interactions", description: "Opportunities for respectful, low-impact interaction with local residents." },
    { title: "Traditional Livelihoods & Pastoral Landscapes", description: "Herding and small-scale farming remain central to daily life in the region." },
    { title: "Community-Based Tourism", description: "Homestay experiences where available, supporting local households directly." },
  ],
};

export type SeasonCardData = { season: string; months: string; points: string[] };

export const seasons: SeasonCardData[] = [
  {
    season: "Spring",
    months: "March to May",
    points: [
      "Greening alpine meadows and scenic mountain landscapes.",
      "Opportunities for trekking and nature photography, subject to weather and trail conditions.",
    ],
  },
  {
    season: "Summer / Monsoon",
    months: "June to August",
    points: [
      "Lush landscapes and seasonal vegetation.",
      "Rainfall may affect rugged roads, trails, and access to remote areas.",
    ],
  },
  {
    season: "Autumn",
    months: "September to November",
    points: [
      "Often favorable for trekking and mountain scenery.",
      "Suitable for outdoor exploration when weather and routes permit.",
    ],
  },
  {
    season: "Winter",
    months: "December to February",
    points: [
      "Cold weather and possible snowfall.",
      "Some highland routes may become difficult or inaccessible.",
    ],
  },
];

export const seasonDisclaimer =
  "Actual weather, road conditions, and trail accessibility vary each year.";

export const accessRoutes = ["Baglung", "Burtibang", "Beni"];

export const startingPoints = ["Kathmandu", "Pokhara", "Baglung", "Beni", "Burtibang"];

export const accessAdvisory =
  "Suitable vehicles, local route knowledge, and flexible travel schedules may be necessary. Road distances, journey durations, vehicle availability, fares, and connections are not listed here pending verified data.";

export type AccommodationOption = { title: string; description: string };

export const accommodationOptions: AccommodationOption[] = [
  { title: "Local Guesthouses & Lodges", description: "Independently run lodgings in and around the region." },
  { title: "Basic Mountain Accommodation", description: "Simple stays suited to the remote setting." },
  { title: "Community-Based Homestays", description: "Available in select villages, supporting local households." },
  { title: "Camping in Authorized Areas", description: "For travelers equipped for self-sufficient overnight stays." },
];

export const accommodationNote =
  "Accommodation options and amenities may be limited in remote areas. Specific properties, ratings, and prices are confirmed at the time of booking.";

export const travelEssentials = [
  "Warm clothing and layered outfits",
  "Waterproof jackets and weather protection",
  "Comfortable trekking shoes",
  "Sun protection and sunglasses",
  "Personal medication and basic first-aid supplies",
  "Reusable water bottles and water treatment options",
  "Cash for remote areas",
  "Power bank and offline maps",
  "Appropriate camping equipment for overnight outdoor stays",
  "Advance confirmation of accommodation and transportation",
  "Awareness of altitude, weather, and remote-area conditions",
];

export const reserveRegulations = [
  "Verify current entry requirements and applicable permits.",
  "Confirm whether specific activities require authorization.",
  "Follow local wildlife conservation rules.",
  "Obtain appropriate permissions before camping or undertaking regulated activities.",
  "Respect restrictions related to hunting and wildlife management.",
];

export const huntingDisclaimer =
  "Dhorpatan is a regulated hunting reserve. General tourism is distinct from regulated hunting activities: any hunting-related activity is subject to applicable laws, permits, and official authorization, and is not available as a casual tourist activity.";

export type TourPackage = {
  id: string;
  title: string;
  duration: string;
  description: string;
  keyExperiences: string[];
  suitableFor: string;
};

export const tourPackages: TourPackage[] = [
  {
    id: "short-escape",
    title: "Dhorpatan Short Escape",
    duration: "Suggested: 3–4 days",
    description: "A compact introduction to Dhorpatan Valley's meadows and mountain views.",
    keyExperiences: ["Valley exploration", "Scenic viewpoints", "Light photography walks"],
    suitableFor: "First-time visitors with limited time",
  },
  {
    id: "nature-photography",
    title: "Dhorpatan Nature & Photography Tour",
    duration: "Suggested: 5–6 days",
    description: "Built around golden-hour landscapes, alpine light, and village scenes.",
    keyExperiences: ["Landscape photography", "Village walks", "Viewpoint hikes"],
    suitableFor: "Photographers and slow travelers",
  },
  {
    id: "trekking-adventure",
    title: "Dhorpatan Trekking Adventure",
    duration: "Suggested: 6–8 days",
    description: "A trekking-focused route through meadows, forests, and highland trails.",
    keyExperiences: ["Multi-day trekking", "Highland trail exploration", "Camping"],
    suitableFor: "Experienced trekkers seeking offbeat terrain",
  },
  {
    id: "wildlife-wilderness",
    title: "Dhorpatan Wildlife & Wilderness Experience",
    duration: "Suggested: 6–7 days",
    description: "Centered on responsible wildlife observation and remote habitat exploration.",
    keyExperiences: ["Wildlife photography", "Birdwatching", "Conservation-focused guiding"],
    suitableFor: "Nature and wildlife enthusiasts",
  },
  {
    id: "cultural-village",
    title: "Dhorpatan Cultural Village Journey",
    duration: "Suggested: 5–6 days",
    description: "Focused on Magar village life, homestays, and community interaction.",
    keyExperiences: ["Village walks", "Homestay experiences", "Local food"],
    suitableFor: "Culturally curious travelers",
  },
  {
    id: "extended-expedition",
    title: "Dhorpatan Extended Western Nepal Expedition",
    duration: "Suggested: 9+ days",
    description: "An extended route combining Dhorpatan with wider western Nepal exploration, customized to feasible connections.",
    keyExperiences: ["Multi-region travel", "Trekking", "Cultural immersion"],
    suitableFor: "Travelers with extended time seeking a deeper regional journey",
  },
];

export const packagesNote =
  "Prices, hotel names, departure dates, and confirmed availability are not shown here; all packages are customized and confirmed at the time of inquiry.";

export const galleryImages: ImageRef[] = [
  { src: "/images/dhorpatan/gallery-valley-meadow-1.jpg", alt: "Alpine meadow in Dhorpatan Valley under open sky" },
  { src: "/images/dhorpatan/gallery-valley-meadow-2.jpg", alt: "Wide-angle view of Dhorpatan Valley grasslands" },
  { src: "/images/dhorpatan/gallery-himalayan-panorama.jpg", alt: "Panoramic Himalayan skyline seen from Dhorpatan" },
  { src: "/images/dhorpatan/gallery-phagune-dhuri.jpg", alt: "Phagune Dhuri highland viewpoint" },
  { src: "/images/dhorpatan/gallery-jaljala-pass.jpg", alt: "Jaljala Pass trail and surrounding ridgelines" },
  { src: "/images/dhorpatan/gallery-barse-dhuri.jpg", alt: "Barse Dhuri alpine ridge terrain" },
  { src: "/images/dhorpatan/gallery-takam-village.jpg", alt: "Takam village houses and mountain backdrop" },
  { src: "/images/dhorpatan/gallery-lulang-village.jpg", alt: "Lulang village rural life" },
  { src: "/images/dhorpatan/gallery-niseldhor.jpg", alt: "Niseldhor remote settlement" },
  { src: "/images/dhorpatan/gallery-forest-trail.jpg", alt: "Forest trail through Dhorpatan's mountain woodland" },
  { src: "/images/dhorpatan/gallery-wildlife-bluesheep.jpg", alt: "Blue sheep on rocky alpine terrain" },
  { src: "/images/dhorpatan/gallery-culture-village-life.jpg", alt: "Local village life and daily activity in the Dhorpatan region" },
];

export type FAQItem = { question: string; answer: string };

export const faqs: FAQItem[] = [
  {
    question: "Where is Dhorpatan Hunting Reserve located?",
    answer:
      "Dhorpatan Hunting Reserve is located in the Dhaulagiri region of western Nepal, spanning Baglung, Myagdi, and Rukum East districts.",
  },
  {
    question: "Why is Dhorpatan Hunting Reserve unique?",
    answer:
      "It is Nepal's only hunting reserve, known for its vast alpine meadows, pristine forests, rich biodiversity, and remote Himalayan landscapes.",
  },
  {
    question: "What is the best time to visit Dhorpatan?",
    answer:
      "Spring (March–May) and autumn (September–November) are generally favorable for clearer mountain views and trekking conditions, though actual weather and trail conditions vary each year.",
  },
  {
    question: "How can I reach Dhorpatan from Kathmandu?",
    answer:
      "Travelers typically approach via overland routes through Baglung, Burtibang, or Beni in western Nepal. Specific routing is arranged based on verified road and travel conditions at the time of your trip.",
  },
  {
    question: "How many days are enough for a Dhorpatan trip?",
    answer:
      "This depends on your starting point, chosen route, and interests. Sample itineraries on this page range from a 3-day short escape to a 7-day wilderness and trekking journey, and can be customized.",
  },
  {
    question: "What activities can visitors enjoy in Dhorpatan?",
    answer:
      "Trekking, hiking, camping, wildlife photography, birdwatching, horse riding (where available), village walks, and cultural experiences with local Magar communities.",
  },
  {
    question: "Can travelers go trekking in Dhorpatan?",
    answer:
      "Yes, the region offers trekking and hiking opportunities across alpine meadows, forested hills, and highland passes, with route feasibility confirmed in advance.",
  },
  {
    question: "What wildlife can be found in Dhorpatan Hunting Reserve?",
    answer:
      "The reserve is home to blue sheep, Himalayan tahr, musk deer, and a diverse range of birdlife, alongside alpine grassland and forest habitats.",
  },
  {
    question: "Is Dhorpatan suitable for camping?",
    answer: "Camping is possible in authorized areas, subject to reserve regulations and required permissions.",
  },
  {
    question: "Can visitors experience local Magar culture?",
    answer:
      "Yes, the surrounding villages offer opportunities for cultural walks, community interaction, and homestay experiences where available.",
  },
  {
    question: "What accommodation options are available?",
    answer:
      "Options include local guesthouses and lodges, basic mountain accommodation, community-based homestays where available, and camping in authorized areas. Amenities may be limited in remote areas.",
  },
  {
    question: "Are permits required to visit Dhorpatan?",
    answer:
      "As a protected reserve, entry requirements and permits apply. Current requirements should be verified and confirmed before travel.",
  },
  {
    question: "Is Dhorpatan suitable for families?",
    answer:
      "Dhorpatan is a remote, offbeat destination best suited to travelers comfortable with rugged travel conditions and limited infrastructure. Suitability for families depends on the itinerary chosen and travelers' experience with remote travel.",
  },
  {
    question: "What should travelers pack for Dhorpatan?",
    answer:
      "Warm layered clothing, waterproof jackets, sturdy trekking shoes, sun protection, basic first-aid supplies, water treatment options, cash, a power bank, and appropriate camping gear for overnight stays.",
  },
  {
    question: "Can Dhorpatan be combined with other western Nepal destinations?",
    answer:
      "Yes, an extended itinerary can combine Dhorpatan with other western Nepal destinations, subject to feasible routing and travel time.",
  },
  {
    question: "Does the hunting reserve allow recreational hunting by tourists?",
    answer: huntingDisclaimer,
  },
];

export const finalCta = {
  heading: "Discover the Untamed Beauty of Dhorpatan",
  supportingText:
    "Escape into the remote Himalayan wilderness, explore vast alpine meadows, discover traditional mountain villages, and experience the natural beauty of western Nepal with a journey tailored to your travel style.",
  buttons: [
    { label: "Explore Dhorpatan Packages", href: "#packages" },
    { label: "Customize Your Journey", href: "/contact?type=customize&destination=dhorpatan-hunting-reserve" },
    { label: "Contact Karvaahh", href: "/contact" },
  ],
  image: {
    src: "/images/dhorpatan/cta-dhorpatan-sunset.jpg",
    alt: "Sunset light over Dhorpatan's alpine hills and distant Himalayan peaks",
  } as ImageRef,
};

export const seo = {
  title: "Dhorpatan Hunting Reserve Nepal – Travel Guide, Trekking & Tour Packages | Karvaahh",
  description:
    "Explore Dhorpatan Hunting Reserve in western Nepal. Discover alpine meadows, Himalayan views, trekking trails, wildlife, traditional villages, and customizable Dhorpatan travel packages.",
  canonicalPath: "/offbeat-unexplored/dhorpatan-hunting-reserve",
  ogImage: "/images/dhorpatan/hero-dhorpatan-valley.jpg",
};
