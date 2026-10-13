/* ============================================================
   NEPAL HISTORICAL & HERITAGE TOURS — PAGE CONTENT
   ------------------------------------------------------------
   Destinations, categories, UNESCO context, eras, experiences,
   packages, guide, itinerary concepts, FAQ, related links and SEO
   for /packages/historical-heritage.

   - Destination links point only at pages that exist.
   - UNESCO labels are used only for the two inscribed cultural
     properties: "Kathmandu Valley" (1979, seven Monument Zones)
     and "Lumbini, the Birthplace of the Lord Buddha" (1997).
   - Packages are reused from the Nepal pilgrimage collection
     (data/pilgrimage) — none are invented here.
   - Itineraries are customisable concepts: no durations, hotels
     or transport are implied.
   - No entry fees or opening hours: they change, so travellers
     are pointed to official site counters instead.
   ============================================================ */

import type { RelatedTour } from "@/components/activities/experience/product-types";
import type { FeaturedPackageRef, HeritageCategoryId, HeritageDestination, HeritageEra, HeritageExperience, ItineraryConcept } from "./types";
import * as I from "./images";

export const PAGE_PATH = "/packages/historical-heritage";
export const PAGE_TITLE = "Nepal Historical & Heritage Tours";

export const SEO = {
  title: "Historical & Heritage Tours in Nepal | Kathmandu Valley, Lumbini & Royal Palaces | Karvaahh",
  socialTitle: "Historical & Heritage Tours — Karvaahh Travels",
  description:
    "Explore Nepal's history with Karvaahh: the UNESCO-listed Kathmandu Valley Durbar Squares and stupas, Lumbini, Changu Narayan, Janakpur, Gorkha and Nuwakot palaces, Tansen and customised heritage tours.",
  keywords: [
    "Nepal heritage tours",
    "Nepal historical tours",
    "Kathmandu Valley heritage tour",
    "Kathmandu Patan Bhaktapur tour",
    "UNESCO World Heritage Sites Nepal",
    "Lumbini historical tour",
    "Newari architecture tour",
    "Gorkha Nuwakot heritage",
    "Janakpur Janaki Mandir tour",
  ],
  ogImage: { src: I.patanSquare.src, alt: I.patanSquare.alt },
};

/* ---------- Filter categories ---------- */

export const CATEGORIES: { id: HeritageCategoryId; label: string }[] = [
  { id: "unesco", label: "UNESCO World Heritage" },
  { id: "temples", label: "Ancient Temples" },
  { id: "palaces", label: "Royal Palaces" },
  { id: "buddhist", label: "Buddhist Heritage" },
  { id: "hindu", label: "Hindu Heritage" },
  { id: "medieval", label: "Medieval Cities" },
  { id: "archaeological", label: "Archaeological Sites" },
];

/* ---------- Historic destinations (existing destination pages only) ---------- */

const BAGMATI = "/destinations/bagmati-province";
const LUMBINI = "/destinations/lumbini-province";
const KV_ZONE = "Kathmandu Valley World Heritage property — Monument Zone";
const d = (x: Omit<HeritageDestination, "active" | "linkLabel"> & { linkLabel?: string }): HeritageDestination => ({ linkLabel: "Explore Destination", active: true, ...x });

export const DESTINATIONS: HeritageDestination[] = [
  d({
    id: "kathmandu-durbar",
    name: "Kathmandu Durbar Square",
    region: "Kathmandu, Kathmandu Valley",
    text: "The old royal heart of Kathmandu, centred on the Hanuman Dhoka palace complex where Malla and later Shah kings were crowned. Pagoda temples, carved wooden facades and the Kumari Ghar, home of the living goddess, surround its courtyards. Several monuments damaged in the 2015 earthquake have since been rebuilt or remain under restoration.",
    tags: ["UNESCO Heritage", "Royal History", "Newari Architecture"],
    categories: ["unesco", "palaces", "medieval", "temples"],
    unesco: KV_ZONE,
    image: I.kathmanduDurbar,
    tone: "brick",
    href: BAGMATI,
  }),
  d({
    id: "patan-durbar",
    name: "Patan Durbar Square",
    region: "Lalitpur, Kathmandu Valley",
    text: "The palace square of the old kingdom of Lalitpur, celebrated for the 17th-century stone Krishna Mandir and a dense cluster of temples and royal courtyards. Patan has long been a city of metalworkers and woodcarvers, and the Patan Museum inside the former palace explains much of this craft heritage.",
    tags: ["UNESCO Heritage", "Ancient Architecture", "Craft Traditions"],
    categories: ["unesco", "palaces", "medieval", "temples"],
    unesco: KV_ZONE,
    image: I.patanGolden,
    tone: "gold",
    href: BAGMATI,
  }),
  d({
    id: "bhaktapur-durbar",
    name: "Bhaktapur Durbar Square",
    region: "Bhaktapur, Kathmandu Valley",
    text: "Bhaktapur keeps the feel of a Malla-era city, with brick-paved lanes, the palace of fifty-five windows and the five-tiered Nyatapola temple of the early 18th century. Its squares, pottery yards and woodcarving make it one of the valley's most atmospheric old towns.",
    tags: ["UNESCO Heritage", "Medieval City", "Woodcarving"],
    categories: ["unesco", "palaces", "medieval", "temples"],
    unesco: KV_ZONE,
    image: I.nyatapola,
    tone: "brick",
    href: BAGMATI,
  }),
  d({
    id: "pashupatinath",
    name: "Pashupatinath Temple",
    region: "Kathmandu, Kathmandu Valley",
    text: "One of the most important Hindu temple complexes in the subcontinent, set on the banks of the Bagmati River and dedicated to Lord Shiva. The main temple is entered by Hindus only, but visitors can view the riverside shrines, ghats and the evening aarati from across the river.",
    tags: ["UNESCO Heritage", "Hindu Heritage", "Sacred Complex"],
    categories: ["unesco", "temples", "hindu"],
    unesco: KV_ZONE,
    image: I.pashupatinath,
    tone: "temple",
    href: "/spiritual-journeys/pashupatinath",
    linkLabel: "Explore Pashupatinath",
  }),
  d({
    id: "boudhanath",
    name: "Boudhanath Stupa",
    region: "Kathmandu, Kathmandu Valley",
    text: "One of the largest stupas in Nepal and a major centre of Tibetan Buddhist life. Monasteries, prayer wheels and family-run shops ring the great white dome, and the evening kora — walking clockwise around the stupa — is a living devotional tradition.",
    tags: ["UNESCO Heritage", "Buddhist Heritage", "Monasteries"],
    categories: ["unesco", "buddhist"],
    unesco: KV_ZONE,
    image: I.boudhanath,
    tone: "stone",
    href: BAGMATI,
  }),
  d({
    id: "swayambhunath",
    name: "Swayambhunath Stupa",
    region: "Kathmandu, Kathmandu Valley",
    text: "A hilltop complex west of the city and among the oldest religious sites in the valley. Buddhist and Hindu shrines share the summit around the stupa's watchful eyes, with wide views across the Kathmandu Valley.",
    tags: ["UNESCO Heritage", "Buddhist Heritage", "Valley Views"],
    categories: ["unesco", "buddhist"],
    unesco: KV_ZONE,
    image: I.swayambhunath,
    tone: "stone",
    href: BAGMATI,
  }),
  d({
    id: "lumbini",
    name: "Lumbini",
    region: "Rupandehi, Lumbini Province",
    text: "Revered as the birthplace of Siddhartha Gautama, the Buddha. The Mayadevi Temple, the Sacred Garden and the inscribed Ashoka Pillar sit at its core, while the Monastic Zone holds monasteries built by Buddhist communities from many countries.",
    tags: ["UNESCO Heritage", "Buddhist Heritage", "Archaeology"],
    categories: ["unesco", "buddhist", "archaeological"],
    unesco: "UNESCO World Heritage Site in its own right (inscribed 1997)",
    image: I.mayaDevi,
    tone: "stone",
    href: LUMBINI,
  }),
  d({
    id: "changu-narayan",
    name: "Changu Narayan Temple",
    region: "Bhaktapur, Kathmandu Valley",
    text: "A hilltop Vishnu temple regarded as one of the oldest in the valley. Its courtyard holds a Licchavi-era stone inscription widely cited as the oldest dated inscription in Nepal, alongside fine stone, wood and metal craftsmanship.",
    tags: ["UNESCO Heritage", "Ancient Inscriptions", "Hindu Heritage"],
    categories: ["unesco", "temples", "hindu"],
    unesco: KV_ZONE,
    image: I.changuNarayan,
    tone: "temple",
    href: BAGMATI,
  }),
  d({
    id: "janakpur",
    name: "Janaki Mandir, Janakpur",
    region: "Dhanusha, Madhesh Province",
    text: "Janakpur is associated in tradition with Goddess Sita and the Ramayana. The white, domed Janaki Mandir dates from the early 20th century and its architecture — quite unlike the valley's pagodas — makes it one of the most distinctive temples in Nepal.",
    tags: ["Hindu Heritage", "Ramayana Tradition", "Distinctive Architecture"],
    categories: ["temples", "hindu"],
    image: I.janakiMandir,
    tone: "gold",
    href: "/destinations/madhesh-province",
  }),
  d({
    id: "gorkha",
    name: "Gorkha Durbar",
    region: "Gorkha, Gandaki Province",
    text: "A hilltop palace complex that was the seat of the Shah rulers of Gorkha. It is closely associated with Prithvi Narayan Shah, who began the 18th-century campaign that unified the kingdoms of modern Nepal.",
    tags: ["Royal History", "Shah Dynasty", "Hilltop Palace"],
    categories: ["palaces"],
    image: I.gorkhaDurbar,
    tone: "dusk",
    href: "/destinations/gandaki-province",
  }),
  d({
    id: "nuwakot",
    name: "Nuwakot Durbar",
    region: "Nuwakot, Bagmati Province",
    text: "A strategic hill above the Trishuli valley on an old route between Kathmandu and Tibet. Prithvi Narayan Shah took Nuwakot during the unification campaign, and its seven-storey brick palace tower remains a striking landmark of that era.",
    tags: ["Royal History", "Trade Route", "Palace Architecture"],
    categories: ["palaces"],
    image: I.nuwakot,
    tone: "brick",
    href: BAGMATI,
  }),
  d({
    id: "tansen",
    name: "Tansen & Rani Mahal",
    region: "Palpa, Lumbini Province",
    text: "Tansen, once the seat of the Palpa kingdom, is a hill town of steep lanes, Newar-style temples and dhaka weaving. Below it on the Kali Gandaki stands Rani Mahal, a Rana-era riverside palace built in the late 19th century and often called the “Taj Mahal of Nepal”.",
    tags: ["Royal History", "Hill Town", "Rana-era Palace"],
    categories: ["palaces"],
    image: I.raniMahal,
    tone: "dusk",
    href: LUMBINI,
  }),
  d({
    id: "tilaurakot",
    name: "Tilaurakot (Kapilavastu)",
    region: "Kapilvastu, Lumbini Province",
    text: "Excavated walls, gateways and brick foundations of an ancient fortified town. Many archaeologists identify Tilaurakot with Kapilavastu, the Shakya capital where Siddhartha is said to have spent his early life, though the identification is still debated.",
    tags: ["Archaeology", "Buddhist Heritage", "Ancient Ruins"],
    categories: ["buddhist", "archaeological"],
    image: I.tilaurakot,
    tone: "stone",
    href: LUMBINI,
  }),
];

/* ---------- UNESCO World Heritage (verified cultural properties only) ---------- */

export const KV_MONUMENT_ZONES = [
  "Hanuman Dhoka (Kathmandu) Durbar Square",
  "Patan Durbar Square",
  "Bhaktapur Durbar Square",
  "Swayambhunath",
  "Boudhanath",
  "Pashupatinath",
  "Changu Narayan",
];

export const UNESCO_THEMES = [
  { title: "Royal squares & palace complexes", text: "The Durbar Squares of Kathmandu, Patan and Bhaktapur were the seats of rival Malla kingdoms, each with palaces, courtyards and temples built to display royal power and devotion." },
  { title: "Buddhist stupas & monastic heritage", text: "Swayambhunath and Boudhanath are living places of worship, surrounded by monasteries and community life that continue centuries-old practice." },
  { title: "Sacred Hindu temple complexes", text: "Pashupatinath and Changu Narayan preserve temple architecture, sculpture and inscriptions spanning many centuries of Hindu tradition." },
  { title: "Newari architecture & urban settlement", text: "Brick, carved timber and tiered roofs define a building tradition developed by the Newar communities of the valley — palaces, courtyards, rest houses and water spouts woven into the town plan." },
  { title: "Archaeology of early Buddhism", text: "Lumbini's excavated remains, Sacred Garden and the inscribed Ashoka Pillar give it exceptional importance as the place traditionally identified as the Buddha's birthplace." },
];

/* ---------- Architectural eras ---------- */

export const ERAS: HeritageEra[] = [
  {
    id: "ancient",
    title: "Ancient Civilizations & Archaeological Heritage",
    period: "Before the 4th century CE",
    text: "Excavations in the western Terai have revealed brick foundations, town walls and inscriptions linked to the world of the early Buddha. Nepal's later chronicles also name early dynasties such as the Kirata, but these accounts blend history with legend.",
    seeAt: ["Lumbini", "Tilaurakot", "Ashoka Pillar"],
    image: I.ashokaPillar,
    tone: "stone",
  },
  {
    id: "licchavi",
    title: "Licchavi Heritage",
    period: "c. 5th – 9th century CE",
    text: "The Licchavi kings left Sanskrit stone inscriptions, refined stone sculpture and religious foundations across the Kathmandu Valley. Changu Narayan's inscription is the best-known record of the period.",
    seeAt: ["Changu Narayan", "Pashupatinath", "Kathmandu Valley shrines"],
    image: I.licchavi,
    tone: "temple",
  },
  {
    id: "malla",
    title: "Malla-Era Royal Cities",
    period: "c. 12th – 18th century",
    text: "Under the Malla kings — and later their rival kingdoms of Kathmandu, Patan and Bhaktapur — the valley's palace squares, courtyards and multi-tiered pagoda temples took the form travellers see today.",
    seeAt: ["Kathmandu", "Patan", "Bhaktapur"],
    image: I.patanSquare,
    tone: "gold",
  },
  {
    id: "shah",
    title: "Shah Dynasty & Modern Nepal",
    period: "18th century onward",
    text: "From the hilltop seat at Gorkha, Prithvi Narayan Shah's campaign brought the kingdoms together in the 18th century. Palaces at Gorkha and Nuwakot, and later Rana-era buildings such as Rani Mahal, trace the story of modern Nepal.",
    seeAt: ["Gorkha Durbar", "Nuwakot Durbar", "Rani Mahal"],
    image: I.nuwakot,
    tone: "dusk",
  },
  {
    id: "craft",
    title: "Traditional Craftsmanship",
    period: "A living tradition",
    text: "Carved roof struts and lattice windows, stone sculpture, repoussé and cast metalwork, and fine brickwork. Many of these skills are still practised in workshops across the valley today.",
    seeAt: ["Patan", "Bhaktapur", "Kathmandu"],
    image: I.palaceCourtyard,
    tone: "brick",
  },
];

/* ---------- Experiences beyond sightseeing ---------- */

export const EXPERIENCES: HeritageExperience[] = [
  { id: "walks", title: "Heritage Walks", text: "Explore royal squares, back-lane shrines and old neighbourhoods with a local guide, arranged on request.", where: "Kathmandu, Patan, Bhaktapur", image: I.patanPalace, tone: "brick" },
  { id: "courtyards", title: "Historic Courtyards", text: "Step into palace and community courtyards (chowks), stepwells and water spouts that shaped daily life.", where: "Kathmandu Valley", image: I.palaceCourtyard, tone: "gold" },
  { id: "museums", title: "Museums & Collections", text: "Museums such as the Patan Museum and the Lumbini Museum help explain the art and archaeology you see on site.", where: "Patan, Lumbini", image: I.lumbiniMuseum, tone: "stone" },
  { id: "crafts", title: "Arts & Crafts", text: "See woodcarving, metalwork, pottery and thangka or paubha painting where artisans welcome visitors.", where: "Bhaktapur, Patan", image: I.crafts, tone: "brick" },
  { id: "markets", title: "Historic Marketplaces", text: "Wander old trading streets and bazaars where shrines sit between shops, as they have for centuries.", where: "Old Kathmandu, Bhaktapur, Tansen", image: I.marketplace, tone: "dusk" },
  { id: "food", title: "Cultural Food", text: "Taste Newari dishes and regional cooking — specialities vary from town to town.", where: "Kathmandu Valley and beyond", image: I.newariFood, tone: "gold" },
  { id: "photography", title: "Architecture Photography", text: "Photograph facades, carvings and public squares — always respecting signs, worshippers and restricted areas.", where: "Everywhere, with sensitivity", image: I.nyatapola, tone: "temple" },
  { id: "community", title: "Local History & Traditions", text: "Learn how temples, festivals and community guilds still shape life in the historic towns.", where: "Kathmandu Valley, Janakpur, Tansen", image: I.courtyardDance, tone: "brick" },
];

/* ---------- Featured packages (reused from the pilgrimage collection) ---------- */

export const FEATURED_PACKAGES: FeaturedPackageRef[] = [
  { id: "ktm-spiritual-3n4d", highlights: ["Krishna Mandir in Patan Durbar Square", "Changu Narayan's Licchavi-era temple", "Kumbheshwar temple in Patan"], tourType: "Kathmandu Valley heritage" },
  { id: "ktm-temple-1n2d", highlights: ["Pashupatinath on the Bagmati", "Swayambhunath hilltop stupa", "Boudhanath Stupa"], tourType: "Kathmandu Valley heritage" },
  { id: "ktm-buddhist-lumbini", highlights: ["Swayambhunath & Boudhanath stupas", "Kopan Monastery", "The Buddha's birthplace at Lumbini"], tourType: "Buddhist heritage" },
  { id: "lumbini-circuit", highlights: ["Mayadevi Temple & Monastic Zone", "Ancient Kapilavastu at Tilaurakot", "Ramagrama & Devdaha"], tourType: "Lumbini & Kapilavastu" },
  { id: "janakpur-darshan", highlights: ["Janaki Mandir", "Vivah Mandap", "Ramayana sites around Janakpur"], tourType: "Janakpur & Mithila heritage" },
  { id: "pashupati-janakpur-lumbini-7n8d", highlights: ["Hindu & Buddhist heritage in one trip", "Kathmandu, Janakpur & Lumbini"], tourType: "Custom heritage journey" },
];

/* Tour types offered in the enquiry form. */
export const TOUR_TYPES = [
  "Kathmandu Valley heritage",
  "Buddhist heritage",
  "Lumbini & Kapilavastu",
  "Janakpur & Mithila heritage",
  "Gorkha & Nuwakot history",
  "Palpa & Tansen heritage",
  "Custom heritage journey",
];

/* ---------- Travel guide ---------- */

export const GUIDE = {
  seasons: [
    { name: "Autumn", window: "October – November", text: "Usually clear, dry and comfortable — the most popular time for walking tours and photography. Major festivals often fall here, so book early." },
    { name: "Winter", window: "December – February", text: "Cool, mostly dry days that suit heritage walks. Valley mornings can be foggy or hazy; the Terai is pleasant." },
    { name: "Spring", window: "March – May", text: "Warm days and several valley festivals. Haze can soften views, and Lumbini and Janakpur become very hot from April." },
    { name: "Monsoon", window: "June – September", text: "Rain most afternoons and fewer visitors. Sites stay open, but roads and flights can be disrupted." },
  ],
  seasonsNote: "Weather and crowd levels vary from year to year; we plan around your dates.",
  etiquette: [
    "Dress modestly, covering shoulders and knees at temples and monasteries.",
    "Remove shoes where asked; some Hindu temples also restrict leather items.",
    "Follow photography signs — photography is not allowed inside many shrines.",
    "Walk clockwise around stupas and give worshippers space.",
    "Some inner sanctums, including Pashupatinath's main temple, are open to Hindus only.",
    "Don't touch or step on offerings, shrines or carved images.",
  ],
  fees:
    "Most major heritage sites — including the three Durbar Squares, Swayambhunath, Boudhanath, Pashupatinath, Changu Narayan and Lumbini's Sacred Garden — charge entry fees for visitors, often with different rates by nationality. Fees and opening hours change, so please check the official ticket counter or site authority before visiting. We confirm current details when planning your trip.",
  accessibility:
    "Historic squares and monuments often have uneven brick paving, steep steps, narrow lanes and limited vehicle access. Swayambhunath and the hilltop palaces at Gorkha and Nuwakot involve stairs or climbs. Tell us about any mobility needs and we will suggest a pace, route and sites that suit you — though we cannot guarantee step-free access.",
  responsible: [
    "Respect conservation rules and barriers, and never climb on monuments.",
    "Don't touch fragile carvings, paintings or inscriptions.",
    "Buy from local artisans and family-run businesses.",
    "Carry a reusable bottle and take your waste with you.",
  ],
};

/* ---------- Customisable itinerary concepts (not products) ---------- */

export const ITINERARIES: ItineraryConcept[] = [
  {
    id: "valley",
    title: "Kathmandu Valley Heritage Discovery",
    theme: "The seven Monument Zones of the World Heritage property",
    stops: [
      { name: "Kathmandu Durbar Square", note: "Hanuman Dhoka & Kumari Ghar" },
      { name: "Swayambhunath", note: "Hilltop stupa above the valley" },
      { name: "Pashupatinath & Boudhanath", note: "Riverside temples & the great stupa" },
      { name: "Patan Durbar Square", note: "Krishna Mandir & Patan Museum" },
      { name: "Bhaktapur & Changu Narayan", note: "Nyatapola and the valley's oldest inscription" },
    ],
    image: I.palaceCourtyard,
    tourType: "Kathmandu Valley heritage",
  },
  {
    id: "three-cities",
    title: "Kathmandu, Patan & Bhaktapur",
    theme: "The three royal cities of the Malla kingdoms",
    stops: [
      { name: "Kathmandu", note: "Old royal palace & temple squares" },
      { name: "Patan", note: "Metalwork, courtyards & museum" },
      { name: "Bhaktapur", note: "Brick lanes, pottery & woodcarving" },
    ],
    image: I.patanPalace,
    tourType: "Kathmandu Valley heritage",
  },
  {
    id: "buddhist",
    title: "Buddhist Heritage: Kathmandu & Lumbini",
    theme: "From the valley's stupas to the Buddha's birthplace",
    stops: [
      { name: "Swayambhunath", note: "One of the valley's oldest sites" },
      { name: "Boudhanath", note: "Monasteries & evening kora" },
      { name: "Lumbini", note: "Mayadevi Temple & Ashoka Pillar" },
      { name: "Tilaurakot", note: "Excavated remains linked to Kapilavastu" },
    ],
    image: I.monasticZone,
    tourType: "Buddhist heritage",
  },
  {
    id: "janakpur",
    title: "Janakpur Cultural & Historical Journey",
    theme: "Ramayana tradition and Mithila heritage",
    stops: [
      { name: "Janaki Mandir", note: "The temple of Sita" },
      { name: "Vivah Mandap", note: "Linked to Ram and Sita's wedding" },
      { name: "Old Janakpur", note: "Ponds, temples & Mithila art" },
    ],
    image: I.janakiNight,
    tourType: "Janakpur & Mithila heritage",
  },
  {
    id: "unification",
    title: "Gorkha & Nuwakot Historical Exploration",
    theme: "Palaces of the unification era",
    stops: [
      { name: "Gorkha Durbar", note: "Hilltop seat of the Shah rulers" },
      { name: "Nuwakot Durbar", note: "Seven-storey palace above the Trishuli" },
      { name: "Kathmandu", note: "Hanuman Dhoka, where the story continues" },
    ],
    image: I.nuwakot,
    tourType: "Gorkha & Nuwakot history",
  },
];

/* ---------- FAQ ---------- */

export const FAQS = [
  {
    question: "What are the most important historical sites in Nepal?",
    answer:
      "The Kathmandu Valley's Durbar Squares of Kathmandu, Patan and Bhaktapur, the stupas of Swayambhunath and Boudhanath, and the temples of Pashupatinath and Changu Narayan are the best known. Beyond the valley, Lumbini, Tilaurakot, Janakpur, Gorkha Durbar, Nuwakot Durbar and Tansen each add a different chapter of Nepal's history.",
  },
  {
    question: "Which heritage destinations are UNESCO-listed?",
    answer:
      "Nepal has two UNESCO World Heritage cultural properties. The Kathmandu Valley (inscribed 1979) is a single property made up of seven Monument Zones: Hanuman Dhoka (Kathmandu), Patan and Bhaktapur Durbar Squares, Swayambhunath, Boudhanath, Pashupatinath and Changu Narayan. Lumbini, the Birthplace of the Lord Buddha, was inscribed in 1997. Other sites on this page are historically important but are not World Heritage Sites.",
  },
  {
    question: "How many days are needed to explore Kathmandu Valley heritage?",
    answer:
      "Two to three full days covers the main Durbar Squares and stupas at a comfortable pace; adding Changu Narayan and a slower day in Bhaktapur makes it three to four. We tailor the plan to your interests and time.",
  },
  {
    question: "What is special about Kathmandu, Patan and Bhaktapur Durbar Squares?",
    answer:
      "Each was the palace square of a separate Malla kingdom, so each has its own palace, temples and character — Kathmandu's royal Hanuman Dhoka, Patan's stone Krishna Mandir and craft tradition, and Bhaktapur's brick lanes, Nyatapola temple and woodcarving.",
  },
  {
    question: "Can I combine Buddhist and Hindu heritage sites in one trip?",
    answer:
      "Yes. In the Kathmandu Valley, Hindu temples and Buddhist stupas stand a short drive apart, and journeys such as Kathmandu – Janakpur – Lumbini combine both traditions across the country.",
  },
  {
    question: "What should visitors know before entering temples?",
    answer:
      "Dress modestly, remove shoes where asked, walk clockwise around stupas, follow photography signs and respect areas reserved for worshippers. Some inner sanctums, such as Pashupatinath's main temple, are open to Hindus only.",
  },
  {
    question: "Are guided heritage tours available?",
    answer:
      "Yes. We can arrange local guides for heritage walks on request as part of your tour. Tell us your interests — architecture, history, religion or crafts — when you enquire.",
  },
  {
    question: "What is the best time for historical sightseeing in Nepal?",
    answer:
      "October to November is usually the clearest and most comfortable, followed by December to March. Spring is warm, and the Terai (Lumbini and Janakpur) gets very hot from April. The monsoon brings rain from June to September, but sites remain open.",
  },
  {
    question: "Are heritage sites accessible for travelers with limited mobility?",
    answer:
      "Access varies. Many historic squares have uneven paving, steps and narrow lanes, and hilltop sites involve stairs. Lumbini's main area is flat. Share your needs with us and we will suggest a suitable route and pace, though step-free access cannot be guaranteed.",
  },
  {
    question: "How can I enquire about a heritage tour with Karvaahh Travels?",
    answer:
      "Use the enquiry button on this page, message us on WhatsApp or contact our team. Share your dates, group size and the places that interest you, and we will reply with a suggested plan and quote.",
  },
];

/* ---------- Related ---------- */

export const RELATED: RelatedTour[] = [
  { title: "Nepal Festival & Cultural Tours", text: "Festivals, living traditions and Newar culture across Nepal.", href: "/packages/nepal/festival-cultural-tours", image: I.courtyardDance },
  { title: "Nepal Spiritual & Pilgrimage Tours", text: "Temples, stupas and sacred sites from Pashupatinath to Muktinath.", href: "/packages/nepal/spiritual-pilgrimage-tours", image: I.pashupatinath },
  { title: "Bagmati Province", text: "The Kathmandu Valley, its royal cities and Nuwakot.", href: "/destinations/bagmati-province", image: I.nyatapola },
  { title: "Lumbini Province", text: "The Buddha's birthplace, Kapilavastu and the hill town of Tansen.", href: "/destinations/lumbini-province", image: I.mayaDevi },
];
