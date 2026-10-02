/**
 * Karvaahh — Corporate Tours & Retreats
 * Single source of truth for every word, option list and link on the page.
 *
 * TRUST RULES (from the brief): nothing here invents client names, testimonials,
 * resort/venue names, prices, group limits, certifications or availability.
 * Anything that needs verification is `undefined` / empty and the UI renders the
 * honest fallback ("Contact Karvaahh for a customized corporate quotation.").
 */

export const SITE_URL = "https://karvaahh.in";
export const PAGE_PATH = "/activities/educational-corporate/corporate-tours-retreats";
export const CANONICAL_URL = `${SITE_URL}${PAGE_PATH}`;

/** Fill these in to enable the "Contact Karvaahh" CTA and the form's error fallback. */
export const CONTACT = {
  email: "", // e.g. "hello@karvaahh.in"  (leave "" until confirmed)
  phone: "", // e.g. "+977-…"
  whatsapp: "", // full wa.me link, optional
  contactPageHref: "/contact", // TODO: confirm route
};

/** Where the inquiry form POSTs. Wire to your existing form system. */
export const INQUIRY_ENDPOINT = process.env.NEXT_PUBLIC_CORPORATE_INQUIRY_ENDPOINT ?? "/api/inquiry";

export const SUBJECT_TO_CONFIRMATION = "Subject to confirmation.";
export const QUOTE_FALLBACK = "Contact Karvaahh for a customized corporate quotation.";

/* ------------------------------------------------------------------ */
/* Types                                                                */
/* ------------------------------------------------------------------ */

export type Tone = "blue" | "teal" | "gold" | "ivory" | "dusk";

export interface ImageRef {
  /** Path in /public or remote URL. Leave undefined until a real, licensed photo exists. */
  src?: string;
  alt: string;
  /** Short label used by the art-directed placeholder + photo brief. */
  label: string;
  tone: Tone;
}

export type IconName =
  | "compass" | "users" | "mountain" | "route" | "layers" | "scale" | "target" | "puzzle"
  | "leaf" | "heritage" | "bolt" | "palette" | "sparkle" | "chat" | "bulb" | "link"
  | "lotus" | "sun" | "trail" | "building" | "bus" | "bed" | "utensils" | "calendar"
  | "arrow" | "check" | "chevron" | "pin" | "x" | "flag" | "heart" | "briefcase";

export const retreatTypes = [
  "Corporate Offsite",
  "Team Building",
  "Leadership Retreat",
  "Wellness Retreat",
  "Corporate Conference",
  "Adventure Retreat",
  "Cultural Experience",
  "Customized Corporate Tour",
] as const;
export type RetreatType = (typeof retreatTypes)[number];

const img = (label: string, alt: string, tone: Tone, src?: string): ImageRef => ({ label, alt, tone, src });

/* ------------------------------------------------------------------ */
/* SEO                                                                  */
/* ------------------------------------------------------------------ */

export const seo = {
  title: "Corporate Tours & Retreats in Nepal | Team Building & Offsites | Karvaahh",
  description:
    "Plan corporate tours and retreats in Nepal with Karvaahh. Discover team-building experiences, leadership retreats, wellness getaways, corporate offsites, and customized company travel.",
  ogImage: "/og/corporate-tours-retreats.jpg", // TODO: supply a 1200×630 licensed image
  ogImageAlt: "A team gathered at a Himalayan retreat with mountain views",
  breadcrumbs: [
    { name: "Home", href: "/" },
    { name: "Activities", href: "/activities" },
    { name: "Educational & Corporate", href: "/activities/educational-corporate" },
    { name: "Corporate Tours & Retreats", href: PAGE_PATH },
  ],
};

/* ------------------------------------------------------------------ */
/* 1. Hero                                                              */
/* ------------------------------------------------------------------ */

export const hero = {
  eyebrow: "CORPORATE TOURS • OFFSITES • TEAM RETREATS",
  headingLines: ["Beyond the Office.", "Together as a Team."],
  subheading: "Reconnect. Collaborate. Recharge.",
  description:
    "Transform corporate travel into meaningful shared experiences with customized retreats, team-building adventures, leadership workshops, wellness getaways, and inspiring destinations designed around your team's goals.",
  primaryCta: "Plan Your Corporate Retreat",
  secondaryCta: "Explore Retreat Experiences",
  tertiaryCta: "Request a Corporate Proposal",
  floatingLabels: ["TEAM BUILDING", "WELLNESS", "LEADERSHIP", "OFFSITES"],
  image: img(
    "Hero — team at a Himalayan retreat",
    "A corporate team gathered outdoors at a mountain retreat with Himalayan peaks in the distance",
    "blue",
  ),
};

/* ------------------------------------------------------------------ */
/* 2. Introduction (paragraph is verbatim from the brief)               */
/* ------------------------------------------------------------------ */

export const intro = {
  heading: "Work Better Together. Experience More Together.",
  highlight:
    "Corporate Tours & Retreats offer organizations a refreshing opportunity to combine professional development, team building, employee engagement, and relaxation through thoughtfully curated travel experiences. From luxury resorts, peaceful mountain retreats, and wellness destinations to adventure camps, cultural heritage sites, and nature escapes, these experiences are designed to strengthen teamwork, encourage creativity, and enhance workplace relationships. Explore the serene Himalayan landscapes of Pokhara, Nagarkot, Dhulikhel, and Bandipur, enjoy wellness and rejuvenation in Chitwan and the tranquil Himalayan foothills, or discover cultural experiences in Kathmandu, Bhaktapur, and Lumbini. Activities such as team-building challenges, leadership workshops, corporate conferences, yoga and meditation sessions, outdoor adventures, and cultural excursions create meaningful opportunities for collaboration and personal growth. Tailored for businesses, startups, and corporate teams, these retreats combine productivity, relaxation, and memorable shared experiences in inspiring destinations.",
  supporting: "Great teams deserve experiences beyond the everyday.",
  cta: "Create Your Corporate Retreat",
  collage: [
    img("Team in a mountain resort", "A corporate team relaxing together at a mountain resort", "teal"),
    img("Outdoor team challenge", "Colleagues working together on an outdoor team-building challenge", "gold"),
    img("Workshop setting", "A workshop table with a team collaborating on ideas", "blue"),
    img("Wellness retreat", "A quiet morning yoga session with hills in the background", "ivory"),
    img("Himalayan landscape", "Layered Himalayan ridgelines at sunrise", "dusk"),
  ],
  badges: ["TEAM CONNECTION", "WELLNESS", "LEADERSHIP", "CORPORATE OFFSITE"],
};

/* ------------------------------------------------------------------ */
/* 3. Philosophy                                                        */
/* ------------------------------------------------------------------ */

export interface TimelineStep {
  title: string;
  body: string;
  icon: IconName;
}

export const philosophy = {
  heading: "A Change of Place. A New Perspective.",
  sub: "A retreat is more than a trip. It is a deliberate pause outside the everyday workplace.",
  steps: [
    { title: "Step Away", icon: "compass", body: "Move beyond the daily office routine and create space for fresh thinking." },
    { title: "Reconnect", icon: "users", body: "Encourage meaningful conversations and stronger workplace relationships." },
    { title: "Collaborate", icon: "puzzle", body: "Create opportunities for teamwork, brainstorming, and shared problem-solving." },
    { title: "Recharge", icon: "leaf", body: "Enjoy relaxation, wellness activities, and inspiring natural surroundings." },
    { title: "Return Inspired", icon: "sparkle", body: "Bring fresh perspectives, shared memories, and renewed energy back to work." },
  ] satisfies TimelineStep[],
};

/* ------------------------------------------------------------------ */
/* 4. Why Karvaahh                                                      */
/* ------------------------------------------------------------------ */

export const why = {
  heading: "Corporate Travel, Thoughtfully Curated",
  items: [
    { icon: "layers", tone: "blue", title: "Customized Corporate Experiences", body: "Build itineraries around company objectives, group size, duration, budget, and team preferences." },
    { icon: "users", tone: "teal", title: "Team-Building Experiences", body: "Include activities designed to encourage collaboration, communication, and shared problem-solving." },
    { icon: "mountain", tone: "dusk", title: "Inspiring Retreat Destinations", body: "Explore mountain resorts, peaceful nature escapes, cultural destinations, and wellness-focused locations." },
    { icon: "route", tone: "gold", title: "Organized Group Travel", body: "Coordinate transportation, accommodation, meals, activities, and group logistics according to the agreed itinerary." },
    { icon: "briefcase", tone: "blue", title: "Flexible Corporate Planning", body: "Create customized travel programs for startups, growing businesses, established companies, and corporate departments." },
    { icon: "scale", tone: "teal", title: "Work-Life Balance Experiences", body: "Combine professional development with relaxation, wellness, outdoor activities, and meaningful shared experiences." },
  ] satisfies { icon: IconName; tone: Tone; title: string; body: string }[],
};

/* ------------------------------------------------------------------ */
/* 5. Categories                                                        */
/* ------------------------------------------------------------------ */

export interface Category {
  id: string;
  title: string;
  description: string;
  experiences: string[];
  idealFor: string;
  note?: string;
  retreatType: RetreatType;
  icon: IconName;
  image: ImageRef;
}

export const categories = {
  heading: "Find the Right Experience for Your Team",
  cardCta: "Explore Experience",
  sectionCta: "Explore Your Retreat Options",
  items: [
    {
      id: "offsites", title: "Corporate Offsites", icon: "compass", retreatType: "Corporate Offsite",
      description: "Create opportunities for teams to step away from daily operations and focus on planning, collaboration, and fresh ideas.",
      experiences: ["Strategy discussions", "Team workshops", "Brainstorming sessions", "Group activities", "Relaxation and networking"],
      idealFor: "Leadership teams, departments, startups, and project teams.",
      image: img("Offsite planning session", "A team planning session at a retreat with mountain views through the window", "blue"),
    },
    {
      id: "team-building", title: "Team Building & Employee Engagement", icon: "users", retreatType: "Team Building",
      description: "Create interactive experiences that encourage communication, trust, collaboration, and team connection.",
      experiences: ["Outdoor team challenges", "Group games", "Problem-solving activities", "Nature-based experiences", "Collaborative workshops"],
      idealFor: "Cross-functional teams, new employees, and organizations focused on employee engagement.",
      image: img("Outdoor team challenge", "Colleagues cooperating on an outdoor group challenge", "gold"),
    },
    {
      id: "leadership", title: "Leadership & Executive Retreats", icon: "flag", retreatType: "Leadership Retreat",
      description: "Design premium experiences for leaders and decision-makers.",
      experiences: ["Leadership workshops", "Strategic planning sessions", "Executive discussions", "Private retreat experiences", "Wellness and relaxation"],
      idealFor: "Executives, founders, senior managers, and leadership teams.",
      image: img("Executive retreat", "A small leadership group in discussion in a calm retreat lounge", "dusk"),
    },
    {
      id: "wellness", title: "Corporate Wellness Retreats", icon: "lotus", retreatType: "Wellness Retreat",
      description: "Create peaceful retreats focused on relaxation, mindfulness, and employee well-being.",
      experiences: ["Yoga sessions", "Meditation", "Nature walks", "Wellness workshops", "Relaxation and rejuvenation"],
      idealFor: "Teams seeking a wellness-oriented getaway.",
      image: img("Wellness retreat", "A group meditating outdoors in soft morning light", "ivory"),
    },
    {
      id: "conferences", title: "Corporate Conferences & Meetings", icon: "building", retreatType: "Corporate Conference",
      description: "Create travel experiences that combine professional gatherings with destination-based experiences.",
      experiences: ["Conference venue coordination", "Meeting space arrangements", "Corporate presentations", "Networking sessions", "Team activities", "Group dining and excursions"],
      idealFor: "Business meetings, company gatherings, workshops, and conferences.",
      note: "Venue availability and event facilities are confirmed per request.",
      image: img("Conference setting", "A conference room set for a corporate gathering", "blue"),
    },
    {
      id: "adventure", title: "Adventure & Outdoor Retreats", icon: "bolt", retreatType: "Adventure Retreat",
      description: "Create opportunities for teams to experience nature, adventure, and outdoor collaboration.",
      experiences: ["Guided nature walks", "Outdoor team challenges", "Hiking", "Camping where appropriate", "Scenic excursions", "Outdoor recreational activities"],
      idealFor: "Teams seeking active, experience-driven retreats.",
      note: "Activities are selected according to participant ability, safety, season, and local availability.",
      image: img("Trail hike", "A group hiking a forested hill trail together", "teal"),
    },
    {
      id: "cultural", title: "Cultural & Experiential Corporate Tours", icon: "heritage", retreatType: "Cultural Experience",
      description: "Introduce teams to local heritage, traditions, and cultural experiences.",
      experiences: ["Heritage walks", "Cultural excursions", "Traditional cuisine experiences", "Craft and cultural workshops", "Community-based experiences where appropriate"],
      idealFor: "Teams seeking meaningful cultural exploration.",
      image: img("Heritage walk", "Colleagues walking through a traditional brick-paved heritage square", "gold"),
    },
  ] satisfies Category[],
};

/* ------------------------------------------------------------------ */
/* 6. Destinations                                                      */
/* ------------------------------------------------------------------ */

export interface Destination {
  id: string;
  name: string;
  province: string;
  experience: string;
  idealFor: string;
  note?: string;
  /** TODO: confirm these routes exist on karvaahh.in */
  href: string;
  image: ImageRef;
}

export const destinations = {
  heading: "Inspiring Destinations for Every Kind of Team",
  sub: "Eight places across Nepal, from lakeside and hilltop stays to heritage towns and jungle edges.",
  cardCta: "Plan a retreat here",
  guideCta: "Destination guide",
  sectionCta: "Choose Your Corporate Destination",
  items: [
    { id: "pokhara", name: "Pokhara", province: "Gandaki Province", href: "/destinations/pokhara",
      experience: "Lakeside retreats, Himalayan views, resort stays, outdoor activities, and peaceful team getaways.",
      idealFor: "Corporate offsites, wellness retreats, team-building experiences, and executive getaways.",
      image: img("Pokhara lakeside", "Phewa Lake in Pokhara with Himalayan peaks behind it", "blue") },
    { id: "nagarkot", name: "Nagarkot", province: "Bagmati Province", href: "/destinations/nagarkot",
      experience: "Mountain panoramas, sunrise views, peaceful hilltop surroundings, and nature-focused stays.",
      idealFor: "Leadership retreats, short corporate getaways, and team relaxation.",
      image: img("Nagarkot sunrise", "Sunrise over the Himalayan range from a hilltop at Nagarkot", "gold") },
    { id: "dhulikhel", name: "Dhulikhel", province: "Bagmati Province", href: "/destinations/dhulikhel",
      experience: "Scenic Himalayan foothills, nature retreats, peaceful surroundings, and cultural exploration.",
      idealFor: "Corporate workshops, wellness retreats, and strategy sessions.",
      image: img("Dhulikhel foothills", "Terraced foothills near Dhulikhel with distant snow peaks", "teal") },
    { id: "bandipur", name: "Bandipur", province: "Gandaki Province", href: "/destinations/bandipur",
      experience: "Heritage architecture, traditional Newari culture, peaceful streets, and mountain scenery.",
      idealFor: "Cultural retreats, leadership getaways, and team bonding.",
      image: img("Bandipur bazaar", "A quiet traditional street in Bandipur with mountains beyond", "dusk") },
    { id: "chitwan", name: "Chitwan", province: "Bagmati Province", href: "/destinations/chitwan",
      experience: "Nature-focused stays, wildlife experiences, outdoor activities, and relaxation.",
      idealFor: "Employee engagement, wellness retreats, and nature-based corporate getaways.",
      note: "Wildlife activities follow park regulations and responsible tourism practices.",
      image: img("Chitwan landscape", "Riverside grassland and forest edge in Chitwan at dawn", "teal") },
    { id: "kathmandu", name: "Kathmandu", province: "Bagmati Province", href: "/destinations/kathmandu",
      experience: "Conference venues, heritage experiences, dining, cultural excursions, and corporate gatherings.",
      idealFor: "Corporate meetings, conferences, cultural tours, and short offsites.",
      image: img("Kathmandu heritage", "A historic temple square in Kathmandu", "gold") },
    { id: "bhaktapur", name: "Bhaktapur", province: "Bagmati Province", href: "/destinations/bhaktapur",
      experience: "Traditional architecture, heritage exploration, local culture, and experiential activities.",
      idealFor: "Cultural team experiences and heritage-focused corporate excursions.",
      image: img("Bhaktapur old town", "Carved wooden windows and brick lanes in Bhaktapur", "dusk") },
    { id: "lumbini", name: "Lumbini", province: "Lumbini Province", href: "/destinations/lumbini",
      experience: "Peaceful surroundings, Buddhist heritage, spiritual reflection, and cultural exploration.",
      idealFor: "Mindfulness-oriented retreats, cultural experiences, and reflective corporate journeys.",
      image: img("Lumbini gardens", "Calm gardens and monastery grounds at Lumbini", "ivory") },
  ] satisfies Destination[],
};

export const destinationOptions = [...destinations.items.map((d) => d.name), "Not sure yet — advise me"];

/* ------------------------------------------------------------------ */
/* 7. Retreat style selector                                            */
/* ------------------------------------------------------------------ */

export interface RetreatStyle {
  id: string;
  title: string;
  short: string;
  description: string;
  destinationTypes: string[];
  suggested: string[];
  retreatType: RetreatType;
  icon: IconName;
  image: ImageRef;
}

export const styles = {
  heading: "What Does Your Team Need Most?",
  sub: "Pick the feeling you want your team to return with. We'll shape the rest around it.",
  cta: "Customize This Retreat",
  items: [
    { id: "strategy", title: "The Strategy Retreat", short: "Plan", icon: "target", retreatType: "Corporate Offsite",
      description: "For teams focused on planning, collaboration, and business discussions.",
      destinationTypes: ["Quiet hilltop stays", "Resorts with meeting space (subject to confirmation)", "Foothill retreats"],
      suggested: ["Dhulikhel", "Nagarkot", "Pokhara"],
      image: img("Strategy retreat", "A team at a long table planning with hills visible outside", "blue") },
    { id: "bonding", title: "The Team Bonding Retreat", short: "Connect", icon: "users", retreatType: "Team Building",
      description: "For teams looking to strengthen relationships through shared activities.",
      destinationTypes: ["Lakeside settings", "Nature-focused stays", "Heritage towns"],
      suggested: ["Pokhara", "Chitwan", "Bandipur"],
      image: img("Team bonding", "Colleagues laughing together around an outdoor fire", "gold") },
    { id: "wellness", title: "The Wellness Escape", short: "Recharge", icon: "lotus", retreatType: "Wellness Retreat",
      description: "For organizations seeking relaxation, mindfulness, and rejuvenation.",
      destinationTypes: ["Calm foothill stays", "Green, low-noise settings", "Lakeside or forest-edge retreats"],
      suggested: ["Dhulikhel", "Nagarkot", "Pokhara", "Chitwan"],
      image: img("Wellness escape", "A yoga circle on a terrace at sunrise", "ivory") },
    { id: "adventure", title: "The Adventure Retreat", short: "Explore", icon: "bolt", retreatType: "Adventure Retreat",
      description: "For teams interested in outdoor experiences and active exploration.",
      destinationTypes: ["Trail-rich hill country", "Lakeside activity bases", "Jungle-edge stays"],
      suggested: ["Pokhara", "Chitwan", "Nagarkot"],
      image: img("Adventure retreat", "A team on a ridge trail with valley views", "teal") },
    { id: "leadership", title: "The Leadership Getaway", short: "Focus", icon: "flag", retreatType: "Leadership Retreat",
      description: "For executives and leadership groups seeking focused discussions and fresh perspectives.",
      destinationTypes: ["Private, peaceful settings", "Mountain-view stays", "Heritage-town escapes"],
      suggested: ["Nagarkot", "Pokhara", "Bandipur"],
      image: img("Leadership getaway", "Two leaders in conversation on a mountain-view balcony", "dusk") },
    { id: "cultural", title: "The Cultural Experience", short: "Discover", icon: "heritage", retreatType: "Cultural Experience",
      description: "For teams interested in heritage, local traditions, and destination discovery.",
      destinationTypes: ["Living heritage towns", "Historic city cores", "Spiritual and reflective sites"],
      suggested: ["Kathmandu", "Bhaktapur", "Bandipur", "Lumbini"],
      image: img("Cultural experience", "A group learning a traditional craft from a local artisan", "gold") },
  ] satisfies RetreatStyle[],
};

/* ------------------------------------------------------------------ */
/* 8. Team-building                                                     */
/* ------------------------------------------------------------------ */

export interface Activity {
  title: string;
  body: string;
  groupType: string;
  icon: IconName;
  image: ImageRef;
}

export const teamBuilding = {
  heading: "Build Stronger Teams Through Shared Experiences",
  sub: "Every activity is chosen for your group, the destination and the season, never dropped in from a template.",
  cta: "Customize Your Team Experience",
  disclaimer:
    "Activities are designed to encourage collaboration and are not a guarantee of specific workplace outcomes. Availability is subject to confirmation.",
  items: [
    { title: "Outdoor Team Challenges", icon: "puzzle", groupType: "Most groups", body: "Organize collaborative outdoor activities that encourage teamwork and communication.", image: img("Outdoor challenge", "A team solving an outdoor challenge together", "gold") },
    { title: "Problem-Solving Workshops", icon: "bulb", groupType: "Cross-functional teams", body: "Create structured group challenges focused on communication, creativity, and collective decision-making.", image: img("Problem-solving workshop", "Colleagues building ideas on a whiteboard", "blue") },
    { title: "Nature-Based Experiences", icon: "leaf", groupType: "All group sizes", body: "Include guided nature walks, scenic excursions, and outdoor activities where suitable.", image: img("Nature walk", "A group on a guided nature walk", "teal") },
    { title: "Cultural Team Activities", icon: "heritage", groupType: "Teams curious about local life", body: "Explore local heritage and traditions through guided cultural experiences.", image: img("Cultural activity", "A group visiting a heritage site with a local guide", "dusk") },
    { title: "Adventure Activities", icon: "bolt", groupType: "Active groups", body: "Offer suitable outdoor adventures based on destination, participant ability, and safety requirements.", image: img("Adventure activity", "A group enjoying a scenic outdoor activity", "teal") },
    { title: "Creative Workshops", icon: "palette", groupType: "Teams seeking fresh ideas", body: "Include collaborative creative activities, group challenges, and facilitated sessions where available.", image: img("Creative workshop", "A team making something together at a craft table", "gold") },
    { title: "Group Reflection Sessions", icon: "sparkle", groupType: "Any retreat, as a closing session", body: "Encourage teams to reflect on shared experiences, collaboration, and learning.", image: img("Reflection session", "A circle of colleagues talking at the end of a retreat", "ivory") },
  ] satisfies Activity[],
};

/* ------------------------------------------------------------------ */
/* 9. Leadership & professional development                             */
/* ------------------------------------------------------------------ */

export const leadership = {
  heading: "Create Space for Ideas, Strategy, and Growth",
  sub: "Time away from the inbox is often where the best conversations happen.",
  items: [
    { icon: "flag", title: "Leadership Workshops", body: "Facilitated sessions focused on leadership, communication, and collaborative decision-making." },
    { icon: "target", title: "Strategic Planning", body: "Create dedicated time and space for business planning and organizational discussions." },
    { icon: "chat", title: "Team Communication", body: "Encourage open conversations and shared understanding across teams." },
    { icon: "bulb", title: "Creative Thinking", body: "Use workshops and collaborative activities to support idea generation and fresh perspectives." },
    { icon: "compass", title: "Goal Alignment", body: "Create opportunities for teams to discuss objectives, priorities, and future plans." },
    { icon: "link", title: "Networking & Relationship Building", body: "Encourage professional connections through shared experiences and group interactions." },
  ] satisfies { icon: IconName; title: string; body: string }[],
  disclaimer: "Workshops and facilitation are subject to the agreed service scope and availability.",
  image: img("Retreat workshop", "A facilitated workshop in a bright retreat room overlooking hills", "blue"),
};

/* ------------------------------------------------------------------ */
/* 10. Wellness                                                         */
/* ------------------------------------------------------------------ */

export const wellness = {
  heading: "Step Away. Slow Down. Recharge.",
  sub: "A calmer kind of corporate retreat, with room to rest as well as to plan.",
  activities: [
    "Yoga and meditation sessions", "Guided nature walks", "Mindfulness activities", "Relaxation sessions",
    "Scenic outdoor experiences", "Wellness-oriented group activities", "Time for rest and personal reflection",
  ],
  inspiration: ["Dhulikhel", "Nagarkot", "Pokhara", "Chitwan", "Himalayan foothill retreats"],
  disclaimer: "Wellness activities are for relaxation and enjoyment. They are not medical or therapeutic services.",
  cta: "Plan a Wellness Retreat",
  image: img("Wellness retreat", "Soft morning light over a quiet foothill terrace prepared for yoga", "ivory"),
  secondImage: img("Mountain calm", "Misty Himalayan foothills at dawn", "dusk"),
};

/* ------------------------------------------------------------------ */
/* 11. Conferences                                                      */
/* ------------------------------------------------------------------ */

export const conferences = {
  heading: "Take Your Meetings Beyond the Boardroom",
  sub: "Combine a working agenda with a place that helps people think.",
  items: [
    { icon: "building", title: "Conference & Meeting Spaces", body: "Coordinate suitable meeting spaces according to the group's requirements and venue availability." },
    { icon: "layers", title: "Corporate Workshops", body: "Plan travel around workshops, training sessions, and professional gatherings." },
    { icon: "bed", title: "Group Accommodation", body: "Coordinate suitable accommodation for the participating team." },
    { icon: "bus", title: "Transportation & Transfers", body: "Plan group transportation and local transfers." },
    { icon: "utensils", title: "Dining & Networking", body: "Arrange group dining and networking experiences where available." },
    { icon: "trail", title: "Destination Experiences", body: "Combine business gatherings with cultural excursions, relaxation, or outdoor activities." },
  ] satisfies { icon: IconName; title: string; body: string }[],
  cta: "Plan Your Corporate Event",
  disclaimer: "Meeting spaces depend on venue availability and are subject to confirmation.",
  image: img("Meeting space", "A meeting room with wide windows opening onto green hills", "blue"),
};

/* ------------------------------------------------------------------ */
/* 12. Sample itineraries                                               */
/* ------------------------------------------------------------------ */

export interface Itinerary {
  id: string;
  duration: string;
  title: string;
  focus: string;
  retreatType: RetreatType;
  destination: string;
  days: { label: string; items: string[] }[];
}

export const itineraries = {
  heading: "Inspiration for Your Next Corporate Getaway",
  label: "Sample concepts that can be customized",
  disclaimer:
    "Illustrative only. These are not confirmed itineraries. Venues, travel times, activities and accommodation are subject to confirmation.",
  cta: "Request a Corporate Proposal",
  useCta: "Use this as a starting point",
  items: [
    {
      id: "pokhara", duration: "2 Nights / 3 Days", title: "Pokhara Corporate Retreat", focus: "Team bonding, relaxation, and shared experiences.",
      retreatType: "Team Building", destination: "Pokhara",
      days: [
        { label: "Day 1 — Arrival in Pokhara", items: ["Group arrival and check-in", "Welcome gathering", "Team introduction and relaxation"] },
        { label: "Day 2 — Team Experience", items: ["Morning group activity", "Team-building or workshop session", "Destination exploration", "Group dinner or networking session"] },
        { label: "Day 3 — Reflection & Departure", items: ["Morning reflection or leisure time", "Closing session", "Return journey"] },
      ],
    },
    {
      id: "dhulikhel", duration: "2 Nights / 3 Days", title: "Dhulikhel Wellness Retreat", focus: "Wellness, reflection, and team connection.",
      retreatType: "Wellness Retreat", destination: "Dhulikhel",
      days: [
        { label: "Day 1 — Arrival & Welcome", items: ["Arrival and check-in", "Welcome session", "Relaxation and informal networking"] },
        { label: "Day 2 — Wellness & Collaboration", items: ["Optional yoga or mindfulness session", "Team workshop", "Nature walk or scenic experience", "Group reflection"] },
        { label: "Day 3 — Closing & Departure", items: ["Breakfast", "Closing discussion", "Return journey"] },
      ],
    },
    {
      id: "kathmandu-nagarkot", duration: "3 Nights / 4 Days", title: "Kathmandu & Nagarkot Corporate Offsite", focus: "Corporate planning, cultural discovery, and relaxation.",
      retreatType: "Corporate Offsite", destination: "Kathmandu",
      days: [
        { label: "Day 1 — Arrival in Kathmandu", items: ["Group arrival", "Welcome gathering", "Corporate orientation"] },
        { label: "Day 2 — Meetings & Cultural Exploration", items: ["Corporate workshop or strategy session", "Heritage or cultural excursion", "Group networking"] },
        { label: "Day 3 — Nagarkot Retreat", items: ["Travel to Nagarkot", "Team-building activities", "Relaxation and scenic experiences"] },
        { label: "Day 4 — Closing & Departure", items: ["Reflection session", "Group departure"] },
      ],
    },
  ] satisfies Itinerary[],
};

/* ------------------------------------------------------------------ */
/* 13. Planning process                                                 */
/* ------------------------------------------------------------------ */

export const planning = {
  heading: "From Your Team's Vision to a Complete Experience",
  steps: [
    { title: "Share Your Objectives", icon: "target", body: "Tell us about your organization, team size, goals, preferred dates, and expectations." },
    { title: "Choose Your Retreat Style", icon: "compass", body: "Select team building, leadership, wellness, corporate offsite, adventure, or cultural experiences." },
    { title: "Select Your Destination", icon: "pin", body: "Explore destinations suited to your retreat style, season, and group requirements." },
    { title: "Customize the Itinerary", icon: "layers", body: "Discuss accommodation, transportation, meals, activities, workshops, and event requirements." },
    { title: "Review the Proposal", icon: "check", body: "Review the itinerary, budget, logistics, inclusions, and terms before confirming." },
    { title: "Experience the Retreat", icon: "sparkle", body: "Enjoy a thoughtfully organized corporate travel experience with your team." },
  ] satisfies TimelineStep[],
};

/* ------------------------------------------------------------------ */
/* 14. Customization                                                    */
/* ------------------------------------------------------------------ */

export type FieldKey =
  | "destination" | "retreatType" | "participants" | "duration" | "dates" | "accommodation"
  | "transportation" | "mealPlan" | "budget";

export const customize = {
  heading: "Designed Around Your Team",
  sub: "Choose what matters. Your selections travel with you into the inquiry form. Nothing is booked or reserved.",
  cta: "Build Your Custom Retreat",
  single: [
    { key: "destination", label: "Destination", options: destinationOptions },
    { key: "retreatType", label: "Retreat style", options: [...retreatTypes] },
    { key: "duration", label: "Duration", options: ["Day program", "2 days / 1 night", "3 days / 2 nights", "4 days / 3 nights", "Longer", "Not sure yet"] },
    { key: "accommodation", label: "Accommodation category", options: ["Budget-friendly", "Comfort", "Premium", "Advise me"] },
    { key: "transportation", label: "Transportation", options: ["Arrival & departure transfers", "Full group transport", "Local transfers only", "Not needed", "Advise me"] },
    { key: "mealPlan", label: "Meal plan", options: ["Breakfast only", "Breakfast & dinner", "All meals", "Flexible"] },
    { key: "budget", label: "Budget range", options: ["Budget-conscious", "Mid-range", "Premium", "Need guidance"] },
  ] satisfies { key: FieldKey; label: string; options: string[] }[],
  activities: {
    label: "Experiences to include",
    options: ["Team-building activities", "Leadership workshops", "Wellness sessions", "Conference requirements", "Cultural excursions", "Adventure activities"],
  },
  fields: [
    { key: "participants", label: "Number of participants", type: "number", placeholder: "e.g. 25" },
    { key: "dates", label: "Preferred dates", type: "text", placeholder: "e.g. late October, flexible" },
  ] satisfies { key: FieldKey; label: string; type: "number" | "text"; placeholder: string }[],
  textFields: [
    { key: "accessibility", label: "Accessibility requirements", placeholder: "Anything that helps us plan for everyone" },
    { key: "dietary", label: "Special dietary needs", placeholder: "e.g. vegetarian, vegan, allergies" },
  ] satisfies { key: "accessibility" | "dietary"; label: string; placeholder: string }[],
  disclaimer: "This is a planning tool, not a booking. You will receive a proposal to review before anything is confirmed.",
};

/* ------------------------------------------------------------------ */
/* 15. Logistics                                                        */
/* ------------------------------------------------------------------ */

export const logistics = {
  heading: "Every Detail, Thoughtfully Planned",
  items: [
    { icon: "bus", title: "Transportation", body: "Plan suitable group transportation based on destination, group size, and route." },
    { icon: "bed", title: "Accommodation", body: "Coordinate suitable accommodation based on budget, location, group requirements, and availability." },
    { icon: "utensils", title: "Meals & Dining", body: "Plan meal arrangements according to group preferences and confirmed venue options." },
    { icon: "trail", title: "Activity Coordination", body: "Coordinate agreed activities and experiences with appropriate local providers." },
    { icon: "building", title: "Event Logistics", body: "Plan meeting spaces, group schedules, and event-related arrangements where available." },
    { icon: "users", title: "Group Coordination", body: "Establish clear itineraries, meeting points, schedules, and communication arrangements." },
  ] satisfies { icon: IconName; title: string; body: string }[],
  /** TODO(owner): confirm which services Karvaahh delivers directly vs through partners, then edit this note. */
  providerNote:
    "Karvaahh plans and coordinates your program. Some services, such as venues, stays, transport and activities, may be delivered by third-party providers. Your proposal states clearly who provides what.",
};

/* ------------------------------------------------------------------ */
/* 16. Packages                                                         */
/* ------------------------------------------------------------------ */

export interface Pkg {
  id: string;
  title: string;
  description: string;
  groupProfile: string;
  destinationTypes: string;
  activities: string[];
  retreatType: RetreatType;
  /** Only when verified: */
  duration?: string;
  priceLabel?: string;
  inclusions?: string[];
  exclusions?: string[];
  image: ImageRef;
}

export const packages = {
  heading: "Explore Corporate Retreat Experiences",
  cta: "Request a Proposal",
  inclusionsFallback: "Inclusions and exclusions are confirmed in your proposal.",
  items: [
    { id: "offsite", title: "Corporate Offsite Package", retreatType: "Corporate Offsite",
      description: "For organizations planning focused team discussions and a change of environment.",
      groupProfile: "Leadership teams, departments, project teams", destinationTypes: "Hilltop and foothill retreats",
      activities: ["Strategy sessions", "Team workshops", "Networking"],
      image: img("Offsite package", "A team offsite gathered in a hilltop lounge", "blue") },
    { id: "team", title: "Team-Building Retreat", retreatType: "Team Building",
      description: "For teams looking to participate in collaborative activities and shared experiences.",
      groupProfile: "Cross-functional teams, new teams, startups", destinationTypes: "Lakeside and nature-focused stays",
      activities: ["Outdoor challenges", "Group games", "Reflection session"],
      image: img("Team-building package", "A team cheering after an outdoor challenge", "gold") },
    { id: "leadership", title: "Leadership Retreat", retreatType: "Leadership Retreat",
      description: "For executives and leadership teams seeking dedicated time for planning and reflection.",
      groupProfile: "Executives, founders, senior managers", destinationTypes: "Private, peaceful mountain-view settings",
      activities: ["Leadership workshops", "Strategic planning", "Private dining"],
      image: img("Leadership package", "Leaders in discussion on a quiet terrace", "dusk") },
    { id: "wellness", title: "Corporate Wellness Retreat", retreatType: "Wellness Retreat",
      description: "For teams seeking relaxation, wellness, and rejuvenation.",
      groupProfile: "Teams seeking a slower pace", destinationTypes: "Foothill, lakeside and forest-edge retreats",
      activities: ["Yoga and meditation", "Nature walks", "Rest and reflection"],
      image: img("Wellness package", "A calm outdoor yoga session at sunrise", "ivory") },
    { id: "adventure", title: "Corporate Adventure Getaway", retreatType: "Adventure Retreat",
      description: "For organizations interested in outdoor activities and nature-based experiences.",
      groupProfile: "Active, experience-driven teams", destinationTypes: "Trail-rich hills and jungle-edge stays",
      activities: ["Guided hikes", "Outdoor challenges", "Scenic excursions"],
      image: img("Adventure package", "A team on a scenic ridge walk", "teal") },
    { id: "custom", title: "Customized Corporate Travel", retreatType: "Customized Corporate Tour",
      description: "For businesses seeking a fully personalized itinerary.",
      groupProfile: "Any organization with specific goals", destinationTypes: "Any of our destinations, combined as needed",
      activities: ["Mix and match from every experience above"],
      image: img("Custom package", "A planner sketching a custom itinerary on a map", "gold") },
  ] as Pkg[], // widened so optional verified fields (duration, priceLabel, inclusions…) can be added per package
};

/* ------------------------------------------------------------------ */
/* 17. Gallery                                                          */
/* ------------------------------------------------------------------ */

export const gallery = {
  heading: "Shared Experiences. Lasting Memories.",
  sub: "Photography from Nepal's retreat destinations and the experiences your team could share.",
  // Use only authentic or properly licensed images. Set `src`. The section hides itself in production until at least one has a src.
  items: [
    img("Team at a mountain retreat", "A team gathered at a mountain retreat", "blue"),
    img("Outdoor team challenge", "An outdoor team-building activity", "gold"),
    img("Resort setting", "A resort courtyard framed by hills", "teal"),
    img("Leadership workshop", "A leadership workshop in progress", "dusk"),
    img("Wellness session", "A wellness session at sunrise", "ivory"),
    img("Yoga and meditation", "A group meditating outdoors", "ivory"),
    img("Himalayan scenery", "Himalayan peaks at first light", "dusk"),
    img("Group dining", "A group dinner and networking evening", "gold"),
    img("Cultural excursion", "A guided heritage walk", "teal"),
    img("Corporate meeting space", "A retreat meeting room", "blue"),
  ] satisfies ImageRef[],
};

/* ------------------------------------------------------------------ */
/* 18. Testimonials (verified only)                                     */
/* ------------------------------------------------------------------ */

export interface Testimonial {
  quote: string;
  organization?: string;
  name?: string;
  role?: string;
  retreatType: string;
  destination: string;
}

export const testimonials = {
  heading: "Experiences That Bring Teams Closer",
  /** Add ONLY verified, authorised testimonials. */
  items: [] as Testimonial[],
  fallback: "Planning your organization's next retreat? Let's create an experience tailored to your team.",
  fallbackCta: "Request a Corporate Proposal",
};

/* ------------------------------------------------------------------ */
/* 19. FAQ                                                              */
/* ------------------------------------------------------------------ */

export const faqs = {
  heading: "Corporate Tours & Retreats — FAQs",
  items: [
    { q: "What are corporate tours and retreats?", a: "They are travel experiences for teams and organizations that combine team building, planning, professional development and relaxation in an inspiring destination, away from the usual workplace." },
    { q: "What types of corporate retreats does Karvaahh organize?", a: "Corporate offsites, team-building and employee engagement retreats, leadership retreats, wellness retreats, conference and meeting travel, adventure retreats, and cultural tours. Each can be customized." },
    { q: "Which destinations are suitable for corporate retreats in Nepal?", a: "Popular choices include Pokhara, Nagarkot, Dhulikhel, Bandipur, Chitwan, Kathmandu, Bhaktapur and Lumbini. The best fit depends on your goals, group size and season." },
    { q: "Can we customize the retreat according to our company objectives?", a: "Yes. Itineraries are built around your objectives, group size, duration, budget and preferences. Details are shared in a proposal for your review." },
    { q: "Can corporate retreats include team-building activities?", a: "Yes. Activities such as outdoor challenges, group problem-solving and nature-based experiences can be included, chosen to suit your group and the destination. Availability is subject to confirmation." },
    { q: "Can leadership workshops and strategy sessions be included?", a: "Yes, time and space for leadership sessions and strategic planning can be built into the program. Facilitation is subject to the agreed service scope and availability." },
    { q: "Can wellness activities such as yoga and meditation be arranged?", a: "Yes, these can be arranged for relaxation and enjoyment where suitable. They are not medical or therapeutic services." },
    { q: "Can Karvaahh coordinate corporate conferences and meetings?", a: "We can coordinate meeting spaces, accommodation, transfers and group dining around your event, based on your requirements and venue availability." },
    { q: "How many participants can join a corporate retreat?", a: "Tell us your group size and we'll advise on suitable options for your chosen destination. Capacity depends on venues and availability at the time." },
    { q: "Can transportation and accommodation be customized?", a: "Yes. Transportation and accommodation are planned around your group size, budget, destination and requirements, and confirmed in your proposal." },
    { q: "Can we organize a short two-day corporate getaway?", a: "Yes, short getaways can work well, especially to destinations close to Kathmandu. Share your dates and we'll suggest what fits." },
    { q: "Are corporate retreats suitable for startups and small teams?", a: "Absolutely. Programs can be scaled and shaped for small teams, growing businesses and larger organizations alike." },
    { q: "Can the retreat be planned within a specific budget?", a: "Yes. Share your budget range and we'll shape the destination, stays and activities around it. Final costs are confirmed in your proposal." },
    { q: "Can meals and dietary preferences be accommodated?", a: "Yes. Let us know about dietary needs and allergies in the form, and meal arrangements will be planned accordingly with confirmed venue options." },
    { q: "Can we combine business meetings with leisure activities?", a: "Yes. Many programs balance working sessions with relaxation, cultural excursions or outdoor activities." },
    { q: "How early should we book a corporate retreat?", a: "The earlier you share your dates, the more options we can explore, especially for larger groups or busy seasons. Availability is subject to confirmation." },
    { q: "Can Karvaahh arrange customized corporate packages?", a: "Yes. Beyond our package categories, we can design a fully personalized corporate program." },
    { q: "How can we request a corporate proposal?", a: "Complete the inquiry form on this page with your team details and goals. Our team will follow up with a customized proposal to review." },
  ],
};

/* ------------------------------------------------------------------ */
/* 20. Inquiry form                                                     */
/* ------------------------------------------------------------------ */

export const inquiry = {
  heading: "Let's Plan Your Next Corporate Retreat",
  sub: "Tell us about your team, your objectives, and the kind of experience you want to create. Karvaahh can help you plan a customized corporate journey that combines collaboration, relaxation, and meaningful shared experiences.",
  submit: "Request Corporate Proposal",
  privacy: "We use your details only to respond to this inquiry. Please don't include sensitive personal information.",
  // TODO: link to the site's privacy policy route
  privacyHref: "/privacy-policy",
  success: {
    title: "Thank you. Your inquiry has been sent.",
    body: "Our team will review your details and get back to you with next steps. This is an inquiry, not a booking.",
  },
  error: "We couldn't send your request just now. Please try again in a moment.",
  organizationTypes: ["Startup", "Small Business", "Medium-Sized Business", "Large Enterprise", "Corporate Department", "Other"],
  budgetRanges: ["Budget-conscious", "Mid-range", "Premium", "Need guidance"],
  accommodation: ["Budget-friendly", "Comfort", "Premium", "Advise me"],
  transportation: ["Arrival & departure transfers", "Full group transport", "Local transfers only", "Not needed", "Advise me"],
  durations: ["Day program", "2 days / 1 night", "3 days / 2 nights", "4 days / 3 nights", "Longer", "Not sure yet"],
  activityOptions: ["Team-building activities", "Leadership workshops", "Wellness sessions", "Conference requirements", "Cultural excursions", "Adventure activities"],
};

/* ------------------------------------------------------------------ */
/* 21. Final CTA                                                        */
/* ------------------------------------------------------------------ */

export const finalCta = {
  heading: "Bring Your Team Closer. Take the Journey Further.",
  body: "Step beyond the everyday routine and create experiences that bring people together. From leadership retreats and team-building adventures to wellness escapes and corporate offsites, discover a new way to travel, connect, and grow with Karvaahh.",
  primary: "Start Planning Your Retreat",
  secondary: "Request a Corporate Proposal",
  tertiary: "Contact Karvaahh",
  tagline: "Karvaahh – Live to Travel",
  image: img("Closing image — team at a Himalayan retreat", "A team sharing a moment at a Himalayan retreat at golden hour", "dusk"),
};

/* ------------------------------------------------------------------ */
/* Section nav / misc                                                   */
/* ------------------------------------------------------------------ */

export const sectionIds = {
  intro: "intro", categories: "categories", destinations: "destinations", styles: "styles",
  activities: "activities", itineraries: "itineraries", customize: "customize", packages: "packages",
  inquiry: "inquiry",
} as const;
