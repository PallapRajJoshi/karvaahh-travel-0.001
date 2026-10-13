import { enquiryHref, links } from "./content";
import type { Destination } from "./filters";
import { IMAGES } from "./images";

/**
 * Destinations in "Explore North India".
 *
 * Karvaahh has no North India destination pages, so each card links to the
 * live package page that actually covers the place (Char Dham, Haridwar &
 * Rishikesh, Amarnath & Vaishno Devi, 12 Jyotirlinga) or, failing that, to a
 * pre-filled enquiry. `link.kind` tells the card which one it is.
 */

const page = (label: string, href: string) => ({ label, href, kind: "page" as const });
const ask = (name: string, type?: Parameters<typeof enquiryHref>[1]) => ({
  label: `Plan a trip to ${name}`,
  href: enquiryHref(name, type),
  kind: "enquiry" as const,
});

export const destinations: Destination[] = [
  /* ---------------- Uttarakhand ---------------- */
  {
    id: "haridwar",
    name: "Haridwar",
    region: "uttarakhand",
    area: "Ganga plains gateway",
    highlight:
      "Where the Ganga leaves the mountains for the plains. Evening aarti at Har Ki Pauri and hilltop temples like Mansa Devi make it the traditional starting point of many Himalayan yatras.",
    tags: ["Pilgrimage", "Ganga Aarti", "Culture"],
    categories: ["spiritual", "family"],
    image: IMAGES.haridwar,
    link: page("Haridwar & Rishikesh Yatra", links.haridwarRishikesh),
  },
  {
    id: "rishikesh",
    name: "Rishikesh",
    region: "uttarakhand",
    area: "Himalayan foothills",
    highlight:
      "A riverside town of ashrams, suspension bridges and evening aarti at Triveni Ghat. It is also a base for yoga, meditation and, in season, river rafting on the Ganga.",
    tags: ["Pilgrimage", "Yoga & Wellness", "Rafting"],
    categories: ["spiritual", "adventure", "family"],
    image: IMAGES.rishikesh,
    link: page("Haridwar & Rishikesh Yatra", links.haridwarRishikesh),
  },
  {
    id: "kedarnath",
    name: "Kedarnath",
    region: "uttarakhand",
    area: "Mandakini valley, Garhwal",
    highlight:
      "The stone temple of Lord Shiva stands beneath snow peaks at the head of the Mandakini valley. Pilgrims reach it on foot, by pony or palanquin, or by helicopter where available, during the seasonal opening.",
    tags: ["Pilgrimage", "Jyotirlinga", "Himalayan Escape"],
    categories: ["spiritual", "adventure"],
    image: IMAGES.kedarnath,
    link: page("Kedarnath Yatra", links.kedarnath),
  },
  {
    id: "badrinath",
    name: "Badrinath",
    region: "uttarakhand",
    area: "Alaknanda valley, Garhwal",
    highlight:
      "The painted temple of Lord Vishnu sits on the Alaknanda between the Nar and Narayan peaks. The hot springs of Tapt Kund and nearby Mana village are part of most visits.",
    tags: ["Pilgrimage", "Char Dham", "Himalayan Escape"],
    categories: ["spiritual", "family"],
    image: IMAGES.badrinath,
    link: page("Badrinath Yatra", links.badrinath),
  },
  {
    id: "gangotri",
    name: "Gangotri",
    region: "uttarakhand",
    area: "Bhagirathi valley, Garhwal",
    highlight:
      "The temple of Goddess Ganga on the banks of the Bhagirathi, revered as the river's earthly source. The drive in passes the deodar forests and orchards of the Harsil valley.",
    tags: ["Pilgrimage", "Char Dham", "Nature"],
    categories: ["spiritual"],
    image: IMAGES.gangotri,
    link: page("Gangotri Yatra", links.gangotri),
  },
  {
    id: "yamunotri",
    name: "Yamunotri",
    region: "uttarakhand",
    area: "Yamuna valley, Garhwal",
    highlight:
      "The westernmost of the Char Dham, set in a narrow gorge beside the Yamuna. The final approach from Janki Chatti is on foot, by pony or by palanquin.",
    tags: ["Pilgrimage", "Char Dham", "Himalayan Escape"],
    categories: ["spiritual", "adventure"],
    image: IMAGES.yamunotri,
    link: page("Yamunotri Yatra", links.yamunotri),
  },
  {
    id: "mussoorie",
    name: "Mussoorie",
    region: "uttarakhand",
    area: "Above the Doon Valley",
    highlight:
      "A ridge-top hill station above Dehradun with a colonial-era Mall Road and long views towards the snow peaks. An easy add-on to a Haridwar or Rishikesh trip.",
    tags: ["Hill Station", "Family", "Nature"],
    categories: ["hills", "family"],
    image: IMAGES.mussoorie,
    link: ask("Mussoorie", "family"),
  },
  {
    id: "nainital",
    name: "Nainital",
    region: "uttarakhand",
    area: "Kumaon hills",
    highlight:
      "A lake town in the Kumaon hills, built around the pear-shaped Naini Lake. Boating, lakeside walks and viewpoints over the surrounding ridges make it a family favourite.",
    tags: ["Lakes", "Hill Station", "Family"],
    categories: ["hills", "lakes", "family"],
    image: IMAGES.nainital,
    link: ask("Nainital", "family"),
  },
  {
    id: "auli",
    name: "Auli",
    region: "uttarakhand",
    area: "Near Joshimath, Garhwal",
    highlight:
      "High meadows near Joshimath with wide views of the Garhwal peaks. Auli is known for winter skiing when there is snow, and for walks and views the rest of the year.",
    tags: ["Himalayan Escape", "Skiing", "Nature"],
    categories: ["hills", "adventure"],
    image: IMAGES.auli,
    link: ask("Auli", "adventure-trekking"),
  },

  /* ---------------- Himachal Pradesh ---------------- */
  {
    id: "manali",
    name: "Manali",
    region: "himachal",
    area: "Upper Kullu Valley",
    highlight:
      "Pine forests, apple orchards and snow peaks at the top of the Kullu Valley. A base for Solang Valley, old Manali's temples and seasonal mountain drives.",
    tags: ["Himalayan Escape", "Adventure", "Romantic"],
    categories: ["hills", "adventure", "family"],
    image: IMAGES.manali,
    link: ask("Manali"),
  },
  {
    id: "shimla",
    name: "Shimla",
    region: "himachal",
    area: "Former summer capital",
    highlight:
      "The old summer capital of British India, with the Ridge, Christ Church and Mall Road strung along a forested hilltop. Gentle walks and nearby viewpoints suit families.",
    tags: ["Hill Station", "Heritage", "Family"],
    categories: ["hills", "heritage", "family"],
    image: IMAGES.shimla,
    link: ask("Shimla", "family"),
  },
  {
    id: "dharamshala",
    name: "Dharamshala",
    region: "himachal",
    area: "Kangra Valley",
    highlight:
      "A Kangra Valley town beneath the snowy Dhauladhar range. Tea gardens, cricket-ground views and short hikes sit alongside its Tibetan heritage.",
    tags: ["Culture", "Nature", "Hill Station"],
    categories: ["hills", "heritage"],
    image: IMAGES.dharamshala,
    link: ask("Dharamshala"),
  },
  {
    id: "mcleod-ganj",
    name: "McLeod Ganj",
    region: "himachal",
    area: "Above Dharamshala",
    highlight:
      "The centre of Tibetan life in exile, home to the Tsuglagkhang complex. Monasteries, cafés and trails towards Triund give it a calm, reflective pace.",
    tags: ["Buddhist Heritage", "Culture", "Hiking"],
    categories: ["heritage", "adventure"],
    image: IMAGES.mcleodGanj,
    link: ask("McLeod Ganj"),
  },
  {
    id: "dalhousie",
    name: "Dalhousie",
    region: "himachal",
    area: "Chamba district",
    highlight:
      "A quiet hill town spread over five hills with colonial churches and pine walks. Nearby Khajjiar's meadow adds an easy scenic day out.",
    tags: ["Hill Station", "Nature", "Family"],
    categories: ["hills", "family", "lakes"],
    image: IMAGES.dalhousie,
    link: ask("Dalhousie", "family"),
  },
  {
    id: "spiti",
    name: "Spiti Valley",
    region: "himachal",
    area: "Trans-Himalayan high desert",
    highlight:
      "A high, cold desert of stark mountains and centuries-old monasteries such as Key. Road access is seasonal and the altitude calls for a slower, well-paced itinerary.",
    tags: ["Adventure", "Buddhist Heritage", "Offbeat"],
    categories: ["adventure", "heritage"],
    image: IMAGES.spiti,
    link: ask("Spiti Valley", "adventure-trekking"),
  },
  {
    id: "kasol",
    name: "Kasol",
    region: "himachal",
    area: "Parvati Valley",
    highlight:
      "A riverside village in the Parvati Valley, surrounded by pine forest. It is a starting point for valley walks and treks, and for visits to the Manikaran gurudwara and hot springs.",
    tags: ["Nature", "Trekking", "Offbeat"],
    categories: ["adventure"],
    image: IMAGES.kasol,
    link: ask("Kasol", "adventure-trekking"),
  },
  {
    id: "kullu",
    name: "Kullu",
    region: "himachal",
    area: "Beas River valley",
    highlight:
      "The broad Beas valley between Mandi and Manali, known for its temples, shawl weaving and orchards. In season, the river offers rafting stretches.",
    tags: ["Nature", "Culture", "Rafting"],
    categories: ["adventure", "heritage"],
    image: IMAGES.kullu,
    link: ask("Kullu"),
  },

  /* ---------------- Jammu & Kashmir ---------------- */
  {
    id: "srinagar",
    name: "Srinagar",
    region: "kashmir",
    area: "Kashmir Valley",
    highlight:
      "Houseboats and shikaras on Dal Lake, Mughal gardens on the lakeshore and the old city's wooden architecture. Offered as an optional extension to the Amarnath & Vaishno Devi Yatra.",
    tags: ["Lakes", "Romantic", "Culture"],
    categories: ["lakes", "family", "heritage"],
    image: IMAGES.srinagar,
    link: page("Kashmir on the Amarnath & Vaishno Devi Yatra", links.kashmirDestinations),
  },
  {
    id: "gulmarg",
    name: "Gulmarg",
    region: "kashmir",
    area: "Pir Panjal range",
    highlight:
      "Wide alpine meadows ringed by forest and peaks. Summer brings flower-filled slopes; in winter, Gulmarg is one of India's best-known snow destinations.",
    tags: ["Himalayan Escape", "Skiing", "Nature"],
    categories: ["adventure", "lakes", "family"],
    image: IMAGES.gulmarg,
    link: page("Kashmir on the Amarnath & Vaishno Devi Yatra", links.kashmirDestinations),
  },
  {
    id: "pahalgam",
    name: "Pahalgam",
    region: "kashmir",
    area: "Lidder Valley",
    highlight:
      "A green valley town on the Lidder River and a traditional base for the Amarnath pilgrimage. Pine forests and side valleys make it a calm stay outside the yatra.",
    tags: ["Pilgrimage", "Nature", "Lakes & Rivers"],
    categories: ["spiritual", "lakes", "adventure"],
    image: IMAGES.pahalgam,
    link: page("Amarnath & Vaishno Devi Yatra", links.amarnathVaishnoDevi),
  },
  {
    id: "sonamarg",
    name: "Sonamarg",
    region: "kashmir",
    area: "Sindh valley",
    highlight:
      "Glacier-fed streams and meadows below snow peaks in the Sindh valley, close to the Baltal route to Amarnath. Scenic and quieter than the main valley towns.",
    tags: ["Himalayan Escape", "Nature", "Pilgrimage"],
    categories: ["lakes", "adventure"],
    image: IMAGES.sonamarg,
    link: page("Kashmir on the Amarnath & Vaishno Devi Yatra", links.kashmirDestinations),
  },
  {
    id: "jammu",
    name: "Jammu",
    region: "kashmir",
    area: "City of temples",
    highlight:
      "Known as the City of Temples, Jammu is the usual arrival point for Katra and the Vaishno Devi pilgrimage. The old city's temples are worth a few hours on the way.",
    tags: ["Pilgrimage", "Culture", "Gateway"],
    categories: ["spiritual", "heritage"],
    image: IMAGES.jammu,
    link: page("Vaishno Devi journey", links.vaishnoDeviJourney),
  },
  {
    id: "vaishno-devi",
    name: "Vaishno Devi",
    region: "kashmir",
    area: "Trikuta Hills, Katra",
    highlight:
      "One of India's most visited shrines, reached by a long uphill path from Katra into the Trikuta Hills. Registration and current access arrangements are set by the shrine board.",
    tags: ["Pilgrimage", "Family", "Himalayan Escape"],
    categories: ["spiritual", "family"],
    image: IMAGES.vaishnoDevi,
    link: page("Vaishno Devi journey", links.vaishnoDeviJourney),
  },

  /* ---------------- Uttar Pradesh ---------------- */
  {
    id: "varanasi",
    name: "Varanasi",
    region: "uttar-pradesh",
    area: "Kashi, on the Ganga",
    highlight:
      "One of the world's oldest living cities, where life and ritual unfold on the Ganga ghats. Sunrise boat rides, the evening aarti and Kashi Vishwanath Jyotirlinga are at its heart.",
    tags: ["Pilgrimage", "Jyotirlinga", "Culture"],
    categories: ["spiritual", "heritage"],
    image: IMAGES.varanasiAarti,
    link: page("Kashi Vishwanath on the 12 Jyotirlinga Yatra", links.kashiVishwanath),
  },
  {
    id: "ayodhya",
    name: "Ayodhya",
    region: "uttar-pradesh",
    area: "On the Saryu river",
    highlight:
      "The city associated with the birth of Lord Rama, with temples and ghats along the Saryu. Often paired with Varanasi and Prayagraj on a pilgrimage circuit.",
    tags: ["Pilgrimage", "Culture", "Heritage"],
    categories: ["spiritual", "heritage"],
    image: IMAGES.ayodhya,
    link: ask("Ayodhya", "spiritual-pilgrimage"),
  },
  {
    id: "mathura",
    name: "Mathura",
    region: "uttar-pradesh",
    area: "Braj, on the Yamuna",
    highlight:
      "Revered as the birthplace of Lord Krishna, with temples and ghats on the Yamuna. Festivals such as Janmashtami and Holi are celebrated here with special devotion.",
    tags: ["Pilgrimage", "Festivals", "Culture"],
    categories: ["spiritual", "heritage"],
    image: IMAGES.mathura,
    link: ask("Mathura", "spiritual-pilgrimage"),
  },
  {
    id: "vrindavan",
    name: "Vrindavan",
    region: "uttar-pradesh",
    area: "Braj",
    highlight:
      "A town of temples linked to Krishna's childhood, alive with kirtan and devotional song. Usually visited together with Mathura on the Krishna circuit.",
    tags: ["Pilgrimage", "Culture", "Family"],
    categories: ["spiritual", "family"],
    image: IMAGES.vrindavan,
    link: ask("Vrindavan", "spiritual-pilgrimage"),
  },
  {
    id: "agra",
    name: "Agra",
    region: "uttar-pradesh",
    area: "Mughal capital",
    highlight:
      "Home of the Taj Mahal and the red sandstone Agra Fort, with Fatehpur Sikri close by. Agra joins easily with Delhi, Jaipur or the Mathura–Vrindavan circuit.",
    tags: ["Heritage", "UNESCO sites", "Family"],
    categories: ["heritage", "family"],
    image: IMAGES.agra,
    link: ask("Agra"),
  },
  {
    id: "prayagraj",
    name: "Prayagraj",
    region: "uttar-pradesh",
    area: "Triveni Sangam",
    highlight:
      "The meeting point of the Ganga, Yamuna and the mythical Saraswati at the Triveni Sangam. A boat to the confluence is the focus of most visits.",
    tags: ["Pilgrimage", "Rivers", "Culture"],
    categories: ["spiritual"],
    image: IMAGES.prayagraj,
    link: ask("Prayagraj", "spiritual-pilgrimage"),
  },

  /* ---------------- Golden Triangle & beyond ---------------- */
  {
    id: "delhi",
    name: "Delhi",
    region: "golden-triangle",
    area: "National capital",
    highlight:
      "Mughal monuments such as the Red Fort and Humayun's Tomb, the lanes and food of Old Delhi, and the main air gateway for most North India itineraries.",
    tags: ["Heritage", "Culture", "Gateway"],
    categories: ["heritage", "family"],
    image: IMAGES.redFort,
    link: ask("Delhi"),
  },
  {
    id: "jaipur",
    name: "Jaipur",
    region: "golden-triangle",
    area: "Rajasthan's Pink City",
    highlight:
      "Rajasthan's Pink City of palaces, bazaars and hill forts such as Amber. The third corner of the Golden Triangle with Delhi and Agra.",
    tags: ["Heritage", "Royal Rajasthan", "Culture"],
    categories: ["heritage", "family"],
    image: IMAGES.jaipur,
    link: ask("Jaipur"),
  },
  {
    id: "amritsar",
    name: "Amritsar",
    region: "golden-triangle",
    area: "Punjab",
    highlight:
      "The Golden Temple and its community kitchen welcome visitors of every faith. Jallianwala Bagh and the Attari–Wagah border ceremony are nearby.",
    tags: ["Pilgrimage", "Heritage", "Culture"],
    categories: ["spiritual", "heritage"],
    image: IMAGES.amritsar,
    link: ask("Amritsar"),
  },
];
