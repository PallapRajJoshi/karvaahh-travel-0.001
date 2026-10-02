import type { IconName } from "../shared/Icon";
import type { MediaKey } from "./media";

/* ==========================================================================
   Educational Tours — centralized, editable content.
   Content-accuracy rules: no invented partners, prices, hotels, schedules,
   fees, permissions, group limits, certifications or guaranteed sightings.
   ========================================================================== */

export const PAGE = {
  brand: "Karvaahh",
  tagline: "Karvaahh – Live to Travel",
  url: "https://karvaahh.in/activities/educational-corporate/educational-tours",
  title: "Educational Tours in Nepal | School & College Trips | Karvaahh",
  description:
    "Plan educational tours in Nepal with Karvaahh. Explore heritage, culture, wildlife, science, geography, and Himalayan destinations through customized experiential learning journeys for schools, colleges, and universities.",
  keywords: [
    "Educational Tours Nepal",
    "Educational Tour in Nepal",
    "School Tours Nepal",
    "College Tours Nepal",
    "Student Tours Nepal",
    "Educational Trips Nepal",
    "School Educational Tours",
    "College Educational Tours",
    "Experiential Learning Tours",
    "Student Travel Nepal",
    "Educational Tour Packages Nepal",
    "School Trip Nepal",
    "University Tours Nepal",
    "Kathmandu educational tour",
    "Bhaktapur educational tour",
    "Lumbini educational tour",
    "Chitwan educational tour",
    "Pokhara educational tour",
    "Nepal heritage tour for students",
    "Nepal wildlife educational tour",
    "Himalayan educational tour",
  ],
} as const;

/** Anchors + internal links. Slugs marked "assumed" must be verified against the live site. */
export const LINKS = {
  inquiry: "#inquiry",
  categories: "#categories",
  destinations: "#destinations",
  customize: "#customize",
  contact: "/contact", // assumed
  home: "/",
  activities: "/activities", // assumed
  educationalCorporate: "/activities/educational-corporate", // assumed
  bagmati: "/destinations/bagmati-province", // assumed slug pattern
  gandaki: "/destinations/gandaki-province", // assumed slug pattern
  lumbini: "/destinations/lumbini-province", // assumed slug pattern
} as const;

/* ---------------- Hero ---------------- */
export const HERO = {
  eyebrow: "Educational Tours • Learning Beyond the Classroom",
  titleWords: ["Learn", "Beyond", "the", "Classroom"],
  subtitle: "Explore. Experience. Discover.",
  description:
    "Transform educational travel into meaningful experiences where students explore history, culture, science, nature, geography, and communities through real-world learning.",
  slides: ["hero-himalaya", "hero-heritage", "hero-wildlife"] as MediaKey[],
  collage: ["hero-heritage", "hero-wildlife", "hero-culture"] as MediaKey[],
  labels: ["Heritage", "Science", "Wildlife", "Culture", "Geography", "Adventure"],
};

export const BREADCRUMB = [
  { label: "Home", href: LINKS.home },
  { label: "Activities", href: LINKS.activities },
  { label: "Educational & Corporate", href: LINKS.educationalCorporate },
  { label: "Educational Tours", href: null },
] as const;

/* ---------------- Intro ---------------- */
export const INTRO = {
  eyebrow: "Educational Tours",
  title: "Learning Begins When the Classroom Ends",
  // Supplied copy — keep verbatim.
  body: "Educational Tours offer students an enriching opportunity to explore the world beyond classrooms through experiential learning, cultural immersion, and interactive exploration. From historical monuments, museums, archaeological sites, and heritage cities to science centers, wildlife sanctuaries, national parks, and Himalayan destinations, these tours combine education with adventure and discovery. Explore Nepal’s cultural heritage in Kathmandu, Bhaktapur, and Patan, discover the birthplace of Lord Buddha in Lumbini, experience wildlife and biodiversity in Chitwan National Park, and learn about Himalayan geography and local traditions in Pokhara and the Annapurna region. These journeys encourage students to develop practical knowledge, environmental awareness, teamwork, leadership, and cultural understanding through guided excursions, educational workshops, nature trails, and interactive activities. Tailored for schools, colleges, and universities, educational tours provide meaningful learning experiences that inspire curiosity, creativity, and lifelong memories.",
  tiles: [
    { key: "ktm-heritage", label: "Culture" },
    { key: "bhaktapur", label: "History" },
    { key: "lumbini", label: "Heritage" },
    { key: "chitwan", label: "Nature" },
    { key: "pokhara", label: "Geography" },
    { key: "students-activity", label: "Science" },
  ] as { key: MediaKey; label: string }[],
};

/* ---------------- Learning journey ---------------- */
export const JOURNEY = {
  eyebrow: "Our approach",
  title: "From Seeing to Understanding",
  stages: [
    { title: "See", icon: "eye", text: "Observe real places, landscapes, monuments, wildlife, and communities." },
    { title: "Explore", icon: "compass", text: "Go beyond textbooks and investigate destinations directly." },
    { title: "Interact", icon: "users", text: "Engage with guides, local communities, experts, museums, and educational activities." },
    { title: "Understand", icon: "bulb", text: "Connect classroom concepts with real-world environments." },
    { title: "Experience", icon: "layers", text: "Develop practical knowledge through participation and exploration." },
    { title: "Remember", icon: "bookmark", text: "Create meaningful experiences that remain beyond the classroom." },
  ] as { title: string; icon: IconName; text: string }[],
};

/* ---------------- Why Karvaahh ---------------- */
export const WHY = {
  eyebrow: "Why Karvaahh",
  title: "More Than a Trip. A Learning Experience.",
  cards: [
    { title: "Customized Academic Itineraries", icon: "clipboard", media: "field-learning", text: "Design itineraries around curriculum, academic objectives, student age, group size, and destination." },
    { title: "Learning-Focused Experiences", icon: "book", media: "museum", text: "Include heritage walks, museum visits, nature trails, workshops, cultural interactions, and guided excursions." },
    { title: "Organized Group Travel", icon: "bus", media: "group-activity", text: "Coordinate transportation, accommodation, meals, activities, schedules, and group logistics." },
    { title: "Safety-Conscious Planning", icon: "shield", media: "nature-trail", text: "Build journeys around appropriate transportation, responsible supervision, emergency planning, and age-appropriate activities." },
    { title: "Local Knowledge", icon: "map", media: "community", text: "Connect students with destinations through knowledgeable local guides and experiential activities." },
    { title: "Flexible Group Solutions", icon: "users", media: "students-activity", text: "Develop programs for schools, colleges, universities, departments, clubs, and educational institutions." },
  ] as { title: string; icon: IconName; media: MediaKey; text: string }[],
};

/* ---------------- Categories ---------------- */
export type Category = {
  id: string;
  letter: string;
  title: string;
  icon: IconName;
  media: MediaKey;
  explore: string[];
  themes: string[];
  note?: string;
};

export const CATEGORIES_SECTION = {
  eyebrow: "Tour categories",
  title: "Choose Your Learning Journey",
  lead: "Six learning pathways — each can be combined and adapted to your curriculum and group.",
};

export const CATEGORIES: Category[] = [
  {
    id: "heritage",
    letter: "A",
    title: "Heritage & History Tours",
    icon: "landmark",
    media: "ktm-heritage",
    explore: ["Kathmandu", "Bhaktapur", "Patan", "Heritage squares", "Temples and monuments", "Museums", "Archaeological sites", "Traditional settlements"],
    themes: ["History", "Architecture", "Art", "Religion", "Archaeology", "Civilization"],
  },
  {
    id: "culture",
    letter: "B",
    title: "Cultural & Community Tours",
    icon: "users",
    media: "cultural-workshop",
    explore: ["Local communities", "Traditional lifestyles", "Festivals and cultural traditions", "Handicrafts", "Local cuisine", "Indigenous and regional heritage"],
    themes: ["Culture", "Anthropology", "Sociology", "Traditions", "Community Studies"],
  },
  {
    id: "science",
    letter: "C",
    title: "Science & Technology Tours",
    icon: "flask",
    media: "science",
    explore: ["Science centers", "Technology institutions", "Engineering-related facilities where visits are available", "Research or educational organizations where institutional access is confirmed", "Interactive learning centers"],
    themes: ["Science", "Technology", "Engineering", "Innovation", "Research"],
    note: "Visits depend on institutional access and availability — subject to confirmation.",
  },
  {
    id: "environment",
    letter: "D",
    title: "Environmental & Nature Tours",
    icon: "leaf",
    media: "nature-trail",
    explore: ["National parks", "Conservation areas", "Forest ecosystems", "Wetlands", "Rivers", "Mountains", "Biodiversity areas"],
    themes: ["Ecology", "Biodiversity", "Climate", "Conservation", "Environmental Science"],
  },
  {
    id: "wildlife",
    letter: "E",
    title: "Wildlife & Biodiversity Tours",
    icon: "paw",
    media: "chitwan",
    explore: ["Chitwan National Park", "Nature walks", "Wildlife observation", "Birdwatching", "Conservation interpretation", "Ecosystem studies"],
    themes: ["Wildlife", "Biodiversity", "Ecosystems", "Conservation"],
    note: "Wildlife sightings are never guaranteed — nature decides.",
  },
  {
    id: "himalaya",
    letter: "F",
    title: "Himalayan Geography & Adventure Learning",
    icon: "mountain",
    media: "annapurna",
    explore: ["Pokhara", "Annapurna region", "Mountain landscapes", "Glacial environments", "Rivers and valleys", "Geographical formations"],
    themes: ["Geography", "Geology", "Climate", "Mountains", "Hydrology"],
    note: "Adventure elements are age-appropriate and subject to safety assessment.",
  },
];

/* ---------------- Activities ---------------- */
export const ACTIVITIES_SECTION = { eyebrow: "In the field", title: "Learn by Doing" };
export const ACTIVITIES: { title: string; icon: IconName; text: string }[] = [
  { title: "Heritage Walks", icon: "landmark", text: "Students explore monuments, architecture, and historic settlements with guided interpretation." },
  { title: "Museum Exploration", icon: "search", text: "Connect classroom learning with artifacts, exhibits, history, science, and culture." },
  { title: "Nature Trails", icon: "tree", text: "Study ecosystems, vegetation, landscapes, and environmental relationships." },
  { title: "Wildlife Observation", icon: "paw", text: "Learn about biodiversity and conservation through responsible observation." },
  { title: "Cultural Workshops", icon: "palette", text: "Experience traditional crafts, cuisine, music, arts, and community practices where available." },
  { title: "Photography & Documentation", icon: "camera", text: "Encourage students to document landscapes, architecture, culture, and field observations." },
  { title: "Field Research", icon: "clipboard", text: "Design structured observation and research activities around academic objectives." },
  { title: "Reflection Sessions", icon: "pencil", text: "Include discussion, journaling, presentations, or group reflection after visits." },
];

/* ---------------- Curriculum ---------------- */
export const CURRICULUM_SECTION = { eyebrow: "Curriculum links", title: "Connect the Journey to the Curriculum" };
export const SUBJECTS: { title: string; icon: IconName; text: string }[] = [
  { title: "History", icon: "landmark", text: "Heritage sites, civilizations, monuments, archaeology and historical interpretation." },
  { title: "Geography", icon: "globe", text: "Mountains, rivers, valleys, climate, landscapes and human geography." },
  { title: "Environmental Science", icon: "leaf", text: "Biodiversity, ecosystems, conservation and sustainability." },
  { title: "Science", icon: "flask", text: "Observation, field research, scientific institutions and practical exploration." },
  { title: "Social Studies", icon: "users", text: "Communities, culture, traditions, governance and society." },
  { title: "Art & Architecture", icon: "palette", text: "Traditional architecture, sculpture, painting, crafts and design." },
  { title: "Business & Tourism", icon: "briefcase", text: "Hospitality, tourism management, entrepreneurship and destination development." },
  { title: "Leadership & Life Skills", icon: "flag", text: "Teamwork, communication, responsibility, decision-making and adaptability." },
];

/* ---------------- Skills ---------------- */
export const SKILLS_SECTION = { eyebrow: "Beyond knowledge", title: "Experiences That Build More Than Knowledge", center: "Experiential Learning" };
export const SKILLS = [
  "Teamwork",
  "Leadership",
  "Communication",
  "Problem Solving",
  "Cultural Awareness",
  "Environmental Responsibility",
  "Creativity",
  "Observation",
  "Independence",
  "Time Management",
  "Adaptability",
  "Social Responsibility",
];

/* ---------------- Sample formats + 5-day ---------------- */
export const FORMATS_SECTION = {
  eyebrow: "Sample formats",
  title: "Three Ways to Travel and Learn",
  lead: "Sample itinerary concepts — not fixed operational programs. Every journey is shaped around your institution.",
};
export const FORMATS = [
  {
    title: "One-Day Educational Excursion",
    icon: "clock" as IconName,
    route: null as string[] | null,
    text: "Suitable for nearby museums, heritage sites, science centers, cultural locations, or nature-based learning.",
    focus: "Short experiential learning",
    themes: [] as string[],
  },
  {
    title: "Multi-Day Academic Tour",
    icon: "route" as IconName,
    route: ["Kathmandu", "Bhaktapur", "Patan", "Pokhara"],
    text: "Combine multiple destinations and learning themes into one connected academic journey.",
    focus: "History + Culture + Geography + Environment",
    themes: ["History", "Culture", "Geography", "Environment"],
  },
  {
    title: "Extended Nepal Learning Expedition",
    icon: "globe" as IconName,
    route: ["Kathmandu", "Chitwan", "Pokhara", "Lumbini"],
    text: "A broader expedition linking urban heritage, wildlife, mountains and Buddhist heritage.",
    focus: "Culture + Wildlife + Geography + Heritage",
    themes: ["Culture", "Wildlife", "Geography", "Heritage"],
  },
];

export const FIVE_DAY = {
  eyebrow: "Sample itinerary",
  title: "A Sample 5-Day Educational Tour",
  label: "Sample Educational Itinerary — Fully Customizable",
  disclaimer:
    "Illustrative only. Transport schedules, hotels, admission fees and institutional access are not implied — availability and requirements should be confirmed before travel.",
  days: [
    { day: "Day 1", title: "Kathmandu Heritage Exploration", items: ["Heritage site exploration", "Museum visit", "Guided cultural interpretation", "Student reflection activity"] },
    { day: "Day 2", title: "Bhaktapur & Patan", items: ["Heritage architecture", "Traditional craftsmanship", "Cultural observation", "Group documentation activity"] },
    { day: "Day 3", title: "Travel Toward Pokhara", items: ["Landscape observation", "Geography-focused field learning", "Discussion about Nepal’s changing landscapes"] },
    { day: "Day 4", title: "Pokhara Learning Experience", items: ["Lakes and mountain geography", "Nature-based learning", "Cultural exploration", "Group reflection"] },
    { day: "Day 5", title: "Educational Wrap-Up", items: ["Student presentations", "Reflection", "Group learning activity", "Return journey"] },
  ],
};

/* ---------------- Safety ---------------- */
export const SAFETY = {
  eyebrow: "Student welfare",
  title: "Safe Journeys. Responsible Experiences.",
  lead: "Safety is planned into every stage — with your institution, not around it.",
  items: [
    { title: "Transportation Planning", icon: "bus", text: "Use appropriate vehicles and experienced drivers based on group size and route." },
    { title: "Accommodation Planning", icon: "bed", text: "Select suitable accommodations according to institution requirements, location, group size, and availability." },
    { title: "Group Coordination", icon: "users", text: "Maintain structured schedules, group coordination, and designated responsibility arrangements." },
    { title: "Emergency Planning", icon: "siren", text: "Prepare emergency contacts, route information, contingency plans, and access to appropriate assistance." },
    { title: "Health & Medical Considerations", icon: "pulse", text: "Collect relevant group requirements through the institution and plan appropriately." },
    { title: "Age-Appropriate Activities", icon: "heart", text: "Select activities according to students’ age, physical ability, academic objectives, and institutional policies." },
    { title: "Environmental Responsibility", icon: "leaf", text: "Promote responsible waste management, conservation, and respectful interaction with local communities." },
  ] as { title: string; icon: IconName; text: string }[],
  notice:
    "Final safety procedures, supervision ratios, permissions, emergency arrangements, insurance requirements, and institutional policies should be confirmed with the school, college, or university before departure.",
};

/* ---------------- Process ---------------- */
export const PROCESS = {
  eyebrow: "How it works",
  title: "From Classroom Idea to Complete Journey",
  steps: [
    { title: "Tell Us Your Objective", text: "Share your institution, student age group, subjects, learning goals, dates, and group size." },
    { title: "Choose the Destination", text: "Select heritage, cultural, wildlife, environmental, scientific, or Himalayan experiences." },
    { title: "Build the Itinerary", text: "Karvaahh develops a customized educational itinerary." },
    { title: "Review Logistics", text: "Discuss transportation, accommodation, meals, activities, supervision requirements, and estimated costs." },
    { title: "Finalize the Journey", text: "Confirm the itinerary, participants, arrangements, and required documentation." },
    { title: "Travel & Learn", text: "Experience the destination through structured educational activities and guided exploration." },
  ],
};

/* ---------------- Customization ---------------- */
export type ConfigCard = { id: string; label: string; icon: IconName; multi: boolean; options: string[] };
export const CUSTOMIZE = {
  eyebrow: "Customization",
  title: "Designed Around Your Institution",
  lead: "Choose what matters — your selections are added to your proposal request. Nothing here is a booking or a price.",
  cta: "Build My Educational Tour",
  cards: [
    { id: "destination", label: "Destination", icon: "map", multi: true, options: ["Kathmandu Valley", "Chitwan", "Pokhara", "Lumbini", "Annapurna region", "Not sure yet"] },
    { id: "students", label: "Number of students", icon: "users", multi: false, options: ["Under 20", "20–40", "40–80", "80+"] },
    { id: "faculty", label: "Teachers / faculty", icon: "cap", multi: false, options: ["1–2", "3–5", "6+"] },
    { id: "duration", label: "Duration", icon: "clock", multi: false, options: ["One day", "2–3 days", "4–6 days", "7+ days"] },
    { id: "subject", label: "Academic subject", icon: "book", multi: true, options: ["History", "Geography", "Environmental Science", "Science", "Art & Architecture", "Tourism"] },
    { id: "objectives", label: "Learning objectives", icon: "bulb", multi: true, options: ["Field observation", "Cultural understanding", "Research project", "Leadership & teamwork"] },
    { id: "accommodation", label: "Accommodation category", icon: "bed", multi: false, options: ["Budget", "Standard", "Comfort", "Discuss with us"] },
    { id: "transport", label: "Transportation", icon: "bus", multi: false, options: ["Private group vehicle", "Smaller vehicles", "Mixed / as suitable"] },
    { id: "meals", label: "Meal plan", icon: "heart", multi: false, options: ["Breakfast only", "Half board", "Full board", "Custom"] },
    { id: "activities", label: "Activities", icon: "compass", multi: true, options: ["Heritage walks", "Museum visits", "Field research", "Reflection sessions"] },
    { id: "workshops", label: "Workshops", icon: "palette", multi: true, options: ["Crafts", "Cuisine", "Music & arts", "Documentation"] },
    { id: "nature", label: "Nature experiences", icon: "tree", multi: true, options: ["Nature trails", "Wildlife observation", "Birdwatching", "Lake & river studies"] },
    { id: "cultural", label: "Cultural experiences", icon: "landmark", multi: true, options: ["Community visit", "Festival context", "Heritage interpretation"] },
    { id: "adventure", label: "Adventure activities", icon: "mountain", multi: true, options: ["Age-appropriate trails", "Boating", "None"] },
    { id: "budget", label: "Budget range", icon: "briefcase", multi: false, options: ["Economy", "Mid-range", "Premium", "Discuss with us"] },
    { id: "access", label: "Special requirements", icon: "shield", multi: true, options: ["Mobility access", "Dietary needs", "Medical considerations", "Other"] },
  ] as ConfigCard[],
};

/* ---------------- Confidence ---------------- */
export const CONFIDENCE = {
  eyebrow: "For parents & institutions",
  title: "Planned for Learning. Organized for Peace of Mind.",
  points: [
    "Structured itineraries",
    "Clear travel planning",
    "Institution-focused coordination",
    "Appropriate accommodation selection",
    "Transportation coordination",
    "Activity planning",
    "Emergency preparedness",
    "Local destination support",
    "Flexible customization",
  ],
  note: "Specific arrangements, permissions and insurance requirements are confirmed with each institution before travel.",
};

/* ---------------- Packages ---------------- */
export const PACKAGES_SECTION = {
  eyebrow: "Tour experiences",
  title: "Explore Educational Tour Experiences",
  quote: "Contact Karvaahh for a customized institutional quotation.",
};
export const PACKAGES: {
  title: string;
  media: MediaKey;
  destinations: string[];
  focus: string;
  age: string;
  activities: string[];
}[] = [
  { title: "Heritage Learning Tour", media: "bhaktapur", destinations: ["Kathmandu", "Bhaktapur", "Patan"], focus: "History, architecture and cultural heritage", age: "Adaptable across school and university levels", activities: ["Heritage walks", "Museum visits", "Documentation"] },
  { title: "Buddhist Heritage Tour", media: "lumbini", destinations: ["Kathmandu", "Lumbini"], focus: "Buddhist heritage, archaeology and spirituality", age: "Upper school and above", activities: ["Heritage exploration", "Guided interpretation", "Reflection"] },
  { title: "Wildlife & Conservation Tour", media: "chitwan", destinations: ["Chitwan", "Other verified conservation destinations"], focus: "Wildlife, ecosystems and conservation", age: "Primary to university, adapted by activity", activities: ["Nature walks", "Wildlife observation", "Conservation interpretation"] },
  { title: "Himalayan Geography Tour", media: "pokhara", destinations: ["Pokhara", "Mountain landscapes", "Annapurna region"], focus: "Himalayan geography, lakes and mountain environments", age: "Upper school and above, subject to safety assessment", activities: ["Lake & mountain studies", "Nature trails", "Field learning"] },
  { title: "Nepal Cultural Discovery", media: "cultural-workshop", destinations: ["Kathmandu", "Bhaktapur", "Pokhara"], focus: "Culture, communities and traditions", age: "Adaptable across levels", activities: ["Cultural experiences", "Workshops where available", "Community learning"] },
  { title: "Customized Academic Expedition", media: "field-learning", destinations: ["Designed around your objectives"], focus: "Fully customized to institutional objectives", age: "Defined with your institution", activities: ["Field research", "Curriculum-linked activities", "Reflection sessions"] },
];

/* ---------------- Gallery ---------------- */
export const GALLERY = {
  eyebrow: "Gallery",
  title: "Moments That Become Lessons",
  items: [
    { key: "ktm-heritage", caption: "Students exploring heritage sites", tall: true },
    { key: "museum", caption: "Museum learning", tall: false },
    { key: "nature-trail", caption: "Nature trails", tall: false },
    { key: "chitwan", caption: "Wildlife observation", tall: true },
    { key: "cultural-workshop", caption: "Cultural activities", tall: false },
    { key: "annapurna", caption: "Himalayan landscapes", tall: true },
    { key: "group-activity", caption: "Group activities", tall: false },
    { key: "field-learning", caption: "Field learning", tall: false },
    { key: "documentation", caption: "Students documenting their experiences", tall: true },
  ] as { key: MediaKey; caption: string; tall: boolean }[],
  note: "Placeholders shown until authentic or licensed photography is added. No identifiable minors without permission.",
};

/* ---------------- Testimonials ----------------
   Add verified, permission-cleared entries here. While this array is empty the
   section shows an invitation instead — never fabricate testimonials. */
export type Testimonial = { quote: string; institution?: string; destination: string; tourType: string };
export const TESTIMONIALS: Testimonial[] = [];
export const TESTIMONIALS_SECTION = {
  eyebrow: "Institutional experiences",
  title: "Learning Journeys That Stay With Students",
  fallback: "Planning your institution’s next educational journey? Let’s create it together.",
  cta: "Request Institutional Proposal",
};

/* ---------------- Inquiry ---------------- */
export const INQUIRY = {
  eyebrow: "Institutional inquiry",
  title: "Let’s Plan Your Next Learning Journey",
  lead: "Tell us what your students want to learn, where you want to go, and how you want to experience it. Karvaahh can help transform your academic objectives into a meaningful travel experience.",
  institutionTypes: ["School", "College", "University", "Educational Organization", "Student Group", "Other"],
  destinations: ["Kathmandu Valley", "Bhaktapur", "Patan / Lalitpur", "Lumbini", "Chitwan", "Pokhara", "Annapurna region", "Multiple destinations", "Not sure yet"],
  durations: ["One day", "2–3 days", "4–6 days", "7+ days", "Not sure yet"],
  focuses: ["Heritage & History", "Culture & Community", "Science & Technology", "Environment & Nature", "Wildlife & Biodiversity", "Himalayan Geography", "Mixed / customized"],
  budgets: ["Economy", "Mid-range", "Premium", "Prefer to discuss"],
};

/* ---------------- Final CTA ---------------- */
export const FINAL = {
  title: "Take Learning Beyond the Classroom",
  text: "Explore history. Understand culture. Discover nature. Experience the Himalayas. Give students an opportunity to learn through the world around them.",
  message: "The world is the classroom. Nepal is the experience.",
};
