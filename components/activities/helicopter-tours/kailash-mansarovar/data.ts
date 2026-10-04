/* ============================================================
   KAILASH MANSAROVAR HELICOPTER TOUR — TOUR DATA
   ------------------------------------------------------------
   Single source of truth for the page. Edit text, facts, options
   and images here; the layout picks everything up automatically.

   CONTENT RULES (keep when editing):
   - No prices, fixed departure dates, exact distances/flight
     times, hotel names or age limits until Karvaahh confirms them.
     Use "Price on Request", "Enquire for details" or "Subject to
     selected package" instead.
   - Altitudes are approximate and labelled as such.
   - The 5-day helicopter yatra covers Lake Mansarovar and Kailash
     darshan; the full Kailash Parikrama is a longer, separate option.

   IMAGES: `src: null` = photo not sourced yet. To add a photo, drop
   it into /public/images/activities/helicopter-tours/kailash-mansarovar/
   and set `src` to its path. The gallery appears once 3+ photos exist.
   ============================================================ */

import type { HelicopterProductTour } from "../shared/product-types";
import type { PageImage, RequiredImage } from "../shared/types";

const IMG_DIR = "/images/activities/helicopter-tours/kailash-mansarovar";

const kailash: RequiredImage = {
  src: "/images/kailash-mansarovar-yatra.webp",
  alt: "The south face of Mount Kailash glowing gold at sunrise above snow-covered ridges",
  label: "Mount Kailash",
  width: 822,
  height: 852,
  objectPosition: "center 35%",
};

/** Photo slot waiting for a licensed image; save it as `${IMG_DIR}/<file>`. */
const pending = (file: string, label: string, alt: string): PageImage & { plannedFile: string } => ({
  src: null,
  label,
  alt,
  plannedFile: `${IMG_DIR}/${file}`,
});

const mansarovar = pending("lake-mansarovar.jpg", "Lake Mansarovar", "The still blue waters of Lake Mansarovar with snow peaks on the horizon");
const rakshasTal = pending("rakshas-tal.jpg", "Rakshas Tal", "The deep blue waters of Rakshas Tal beside Lake Mansarovar");
const yamdwar = pending("yamdwar.jpg", "Yamdwar", "The Yamdwar gateway hung with prayer flags below Mount Kailash");
const simikot = pending("simikot.jpg", "Simikot", "Simikot's mountain airstrip in far-western Nepal");
const hilsa = pending("hilsa.jpg", "Hilsa", "Hilsa on the Nepal–Tibet border, where the helicopter segment ends");
const helicopter = pending("helicopter-hilsa.jpg", "Helicopter segment", "A helicopter flying between Simikot and Hilsa in the Humla valley");

export const kailashMansarovarHelicopterTour: HelicopterProductTour = {
  title: "Kailash Mansarovar Helicopter Tour",
  slug: "kailash-mansarovar",
  path: "/activities/helicopter-tours/kailash-mansarovar",
  breadcrumbLabel: "Kailash Mansarovar",
  description:
    "A helicopter-assisted Kailash Mansarovar Yatra via Nepalgunj, Simikot and Hilsa, with Lake Mansarovar, Kailash darshan from Yamdwar, permit assistance and pilgrimage support. Longer options add the Kailash Parikrama.",
  touristType: ["Pilgrims", "Senior pilgrims", "Spiritual travellers", "Families", "Short-time travellers"],

  seo: {
    title: "Kailash Mansarovar Yatra by Helicopter | 5-Day Helicopter Kailash Yatra | Karvaahh",
    socialTitle: "Kailash Mansarovar Helicopter Tour",
    description:
      "Kailash Mansarovar Yatra by helicopter via Nepalgunj, Simikot and Hilsa: day-wise itinerary, route, documents, inclusions, altitude guidance, best season and FAQs.",
    keywords: [
      "Kailash Mansarovar Helicopter Tour",
      "Kailash Mansarovar Yatra by Helicopter",
      "Helicopter Kailash Yatra",
      "Kailash Yatra in 5 Days",
      "Kailash Mansarovar Yatra",
      "Lake Mansarovar Tour",
      "Kailash Parikrama",
      "Kailash Mansarovar pilgrimage",
    ],
    ogImage: kailash,
  },

  duration: "Approx. 5 days / 4 nights",
  elevation: "Up to approx. 4,600 m",
  startingPoint: "Lucknow or Nepalgunj",
  endingPoint: "Lucknow or Nepalgunj",
  region: "Tibet, via far-western Nepal",
  bestSeason: "May – September",
  transportation: "Road, domestic flight & helicopter",
  tourTypes: "Helicopter-assisted pilgrimage",
  groupSize: "Group & private options",
  landingNote:
    "Flights between Nepalgunj, Simikot and Hilsa depend on weather, permissions and operational conditions, and may be delayed or rescheduled.",

  hero: {
    badge: "Helicopter Pilgrimage",
    titleLead: "Kailash Mansarovar",
    titleAccent: "Helicopter Tour",
    description:
      "Experience the sacred journey to Mount Kailash and Lake Mansarovar with a seamless helicopter-assisted pilgrimage. Witness breathtaking Himalayan landscapes, sacred temples, and the spiritual energy of Kailash Parikrama, with carefully planned transfers, permits, accommodation, and pilgrimage support for a comfortable and memorable journey.",
    image: kailash,
    video: "/videos/spritual-journeys/kailash-mansarovar/kailash-mansarovar-hero.mp4",
    strip: [
      { label: "Duration", value: "Approx. 5 Days" },
      { label: "Start / End", value: "Lucknow or Nepalgunj" },
      { label: "Route", value: "Simikot – Hilsa – Purang" },
      { label: "Highest Point", value: "Up to approx. 4,600 m" },
      { label: "Season", value: "May – September" },
    ],
  },

  quickFacts: [
    { icon: "clock", label: "Duration", value: "Approx. 5 days / 4 nights", note: "Longer with Kailash Parikrama" },
    { icon: "route", label: "Starting Point", value: "Lucknow or Nepalgunj", note: "Depending on package" },
    { icon: "compass", label: "Ending Point", value: "Lucknow or Nepalgunj" },
    { icon: "mountain", label: "Maximum Elevation", value: "Up to approx. 4,600 m", note: "Higher on the Parikrama option" },
    { icon: "sun", label: "Best Season", value: "May – September", note: "Dates set by the authorities each year" },
    { icon: "helicopter", label: "Transportation", value: "Road, flight & helicopter", note: "Simikot – Hilsa by helicopter" },
    { icon: "landmark", label: "Tour Type", value: "Helicopter-assisted pilgrimage", note: "No trekking on the 5-day plan" },
    { icon: "users", label: "Group Size", value: "Group & private", note: "Subject to permits and seats" },
  ],

  overview: {
    title: "Kailash Mansarovar, the Shortest Way",
    lead:
      "The helicopter route through far-western Nepal is the quickest way to reach Lake Mansarovar and Mount Kailash, replacing days of road travel with a short flight and helicopter hop to the Tibet border.",
    paragraphs: [
      "Most pilgrims on this route begin in Lucknow and travel by road to Nepalgunj on the Nepal border, where the team checks documents and gives a briefing on the journey and on altitude.",
      "From Nepalgunj, a domestic flight climbs into the mountains to Simikot, the hill town of Humla district. A short helicopter flight then follows the Karnali valley to Hilsa on the Nepal–Tibet border. After crossing into Tibet, the road continues to Purang (Taklakot), where pilgrims rest and acclimatize.",
      "The pilgrimage day brings you to the shores of Lake Mansarovar, usually circled by vehicle, for prayers and rituals where permitted, with Rakshas Tal close by. The journey continues to Yamdwar, the traditional gateway of the Kailash Parikrama, for darshan of the sacred south face of Mount Kailash.",
      "The return follows the same route back through Hilsa, Simikot and Nepalgunj.",
      "The 5-day helicopter yatra does not include the full three-day Kailash Parikrama on foot. Pilgrims who wish to walk around the mountain, crossing the high Dolma La pass, can choose a longer itinerary that adds the Parikrama.",
    ],
    image: kailash,
    imageCaption: "The south face of Mount Kailash at sunrise",
    links: [
      { label: "Full Kailash Mansarovar Yatra guide", href: "/spiritual-journeys/kailash-mansarovar" },
      { label: "Kailash Mansarovar Yatra packages", href: "/packages/kailash-mansarovar-yatra" },
    ],
  },

  significance: {
    title: "Why Kailash Is Sacred",
    intro:
      "Mount Kailash is revered by four faiths and has never been climbed. Pilgrims come not to summit it, but to see it, pray at its lakes and walk around it.",
    items: [
      {
        name: "Mount Kailash",
        text: "Honoured by Hindus as the abode of Lord Shiva, by Buddhists as the home of Demchok, by Jains as the place where Rishabhanatha attained liberation, and by Bon followers as the seat of spiritual power.",
      },
      {
        name: "Lake Mansarovar",
        text: "A high-altitude lake believed to have been created in the mind of Lord Brahma. Pilgrims pray on its shores and believe its waters purify body and mind.",
      },
      {
        name: "Rakshas Tal",
        text: "The lake beside Mansarovar, associated in tradition with Ravana's penance, often seen as the counterpart to Mansarovar's calm.",
      },
      {
        name: "Yamdwar",
        text: "The 'Gate of Yama', where the Kailash Parikrama traditionally begins, and a place for darshan of Kailash's south face.",
      },
    ],
  },

  whyHelicopter: {
    title: "Why Choose the Helicopter Route?",
    intro: "What the helicopter-assisted yatra offers compared with the long overland journey.",
    items: [
      { title: "The Shortest Kailash Yatra", text: "Reach Lake Mansarovar in days rather than the week or more the overland route can take." },
      { title: "No Trekking Required", text: "The 5-day plan involves no trekking; short walks only, taken slowly at altitude." },
      { title: "Less Time on the Road", text: "A flight and helicopter replace the longest road sections through remote far-western Nepal." },
      { title: "Suited to Senior Pilgrims", text: "A gentler option for older devotees, subject to medical fitness for high altitude." },
      { title: "Acclimatization Built In", text: "A rest day in Purang helps the body adjust before the highest part of the journey." },
      { title: "Pilgrimage Support Throughout", text: "Karvaahh coordinates permits, transfers and timing so you can focus on darshan." },
    ],
  },

  highlights: {
    title: "Sacred Sites on the Way",
    intro: "The places that make up the helicopter yatra. Elevations are approximate.",
    items: [
      { name: "Mount Kailash", elevation: "6,638 m", text: "Darshan of the sacred south face from Yamdwar.", image: kailash },
      { name: "Lake Mansarovar", elevation: "Approx. 4,590 m", text: "Prayers and rituals on the shore of the holy lake.", image: mansarovar },
      { name: "Rakshas Tal", elevation: "Approx. 4,575 m", text: "The striking lake beside Mansarovar.", image: rakshasTal },
      { name: "Yamdwar", text: "The gateway of the Kailash Parikrama.", image: yamdwar },
      { name: "Simikot", elevation: "Approx. 2,910 m", text: "Mountain airstrip town in Humla, reached by flight.", image: simikot },
      { name: "Hilsa", elevation: "Approx. 3,650 m", text: "Border point on the Karnali, reached by helicopter.", image: hilsa },
      { name: "Purang (Taklakot)", elevation: "Approx. 3,900 m", text: "Tibetan town where pilgrims rest and acclimatize." },
    ],
  },

  route: {
    title: "The Yatra Route",
    intro: "How the helicopter-assisted journey connects India, Nepal and Tibet.",
    note: "Route and timings are confirmed at booking. Flights to and from Simikot and Hilsa depend on weather and may be delayed; buffer days are recommended.",
    modeLabels: {
      landing: "On the route",
      optional: "Extended option",
      restricted: "Darshan only",
    },
    stops: [
      { name: "Lucknow", detail: "Starting point; road transfer to the border", mode: "landing", elevation: "Approx. 120 m" },
      { name: "Nepalgunj", detail: "Document check and yatra briefing", mode: "landing", elevation: "Approx. 150 m" },
      { name: "Simikot", detail: "Domestic flight into the mountains", mode: "landing", elevation: "Approx. 2,910 m" },
      { name: "Hilsa", detail: "Helicopter flight to the Nepal–Tibet border", mode: "landing", elevation: "Approx. 3,650 m" },
      { name: "Purang (Taklakot)", detail: "Road into Tibet; rest and acclimatization", mode: "landing", elevation: "Approx. 3,900 m" },
      { name: "Lake Mansarovar", detail: "Lake circuit by vehicle; prayers where permitted", mode: "landing", elevation: "Approx. 4,590 m" },
      { name: "Yamdwar", detail: "Kailash darshan at the Parikrama gateway", mode: "landing" },
      { name: "Kailash Parikrama & Dolma La", detail: "Three-day walk around the mountain", mode: "optional", elevation: "Up to approx. 5,630 m" },
      { name: "Mount Kailash", detail: "The sacred peak is never climbed", mode: "restricted", elevation: "6,638 m" },
      { name: "Return to Lucknow", detail: "Via Hilsa, Simikot and Nepalgunj", mode: "landing" },
    ],
  },

  itinerary: {
    title: "Choose Your Kailash Yatra",
    intro: "Ways to make the journey by helicopter. Each option is a sample, confirmed with you before booking.",
    options: [
      {
        id: "express",
        tab: "5-Day Helicopter Yatra",
        title: "Kailash Mansarovar Yatra by Helicopter in 5 Days",
        tag: "Shortest route",
        availability: "standard",
        summary:
          "The quickest way to Lake Mansarovar and Kailash darshan, via Nepalgunj, Simikot and Hilsa, with a rest day in Purang. No trekking is involved.",
        steps: [
          { title: "Lucknow to Nepalgunj", text: "Road transfer to the border town and yatra briefing." },
          { title: "Simikot & Hilsa", text: "Flight to Simikot, helicopter to Hilsa, then road to Purang." },
          { title: "Acclimatization", text: "Rest day in Purang to adjust to the altitude." },
          { title: "Mansarovar & Yamdwar", text: "Lake circuit, prayers and Kailash darshan from Yamdwar." },
          { title: "Return", text: "Back via Hilsa, Simikot and Nepalgunj." },
        ],
        notice: "Helicopter and flight segments depend on weather, permissions and operational conditions.",
      },
      {
        id: "parikrama",
        tab: "With Kailash Parikrama",
        title: "Helicopter Yatra with Kailash Parikrama",
        tag: "Extended",
        availability: "on-request",
        summary:
          "Adds the traditional three-day Kailash Parikrama from Yamdwar, crossing the Dolma La pass, for pilgrims fit enough for a high-altitude walk.",
        steps: [
          { title: "Helicopter Approach", text: "Same route via Simikot and Hilsa to Purang, with acclimatization." },
          { title: "Lake Mansarovar", text: "Prayers and rituals at the holy lake." },
          { title: "Kailash Parikrama", text: "Walk around the mountain over about three days, with ponies and porters available locally at extra cost." },
          { title: "Return", text: "Back to Purang and the return helicopter route." },
        ],
        points: ["Longer itinerary", "Good fitness required", "Dolma La crossing", "Ponies and porters optional"],
        notice: "Available on request. The Parikrama is physically demanding and depends on fitness, weather and permits.",
      },
      {
        id: "private",
        tab: "Private / VIP",
        title: "Private Kailash Helicopter Yatra",
        tag: "Private",
        availability: "on-request",
        summary:
          "The helicopter yatra arranged for your family or group alone, with personalised coordination and the best available accommodation.",
        steps: [
          { title: "Your Group", text: "Arrangements made around your family or group." },
          { title: "Personal Coordination", text: "A dedicated coordinator throughout the yatra." },
          { title: "Flexible Pace", text: "Itinerary planned around your needs, subject to permits and operations." },
        ],
        points: ["Private arrangement", "Dedicated coordination", "Premium stays where available"],
        notice: "Available on request, subject to permits and flight operations.",
      },
      {
        id: "overland",
        tab: "Via Kathmandu",
        title: "Kailash Yatra via Kathmandu (Overland)",
        tag: "Alternative",
        availability: "on-request",
        summary:
          "For pilgrims who prefer to travel overland from Kathmandu across the Tibetan Plateau, with more gradual acclimatization over a longer journey.",
        steps: [
          { title: "Kathmandu", text: "Begin in Kathmandu with briefing and permit formalities." },
          { title: "Overland to Tibet", text: "Drive across the border and over the plateau to Lake Mansarovar." },
          { title: "Mansarovar & Kailash", text: "Lake rituals, Kailash darshan and the Parikrama if chosen." },
          { title: "Return", text: "Drive back to Kathmandu." },
        ],
        notice: "See our full Kailash Mansarovar Yatra guide for details of the overland route.",
      },
    ],
  },

  dayWise: {
    title: "5-Day Helicopter Yatra, Day by Day",
    intro: "A sample day-wise plan for the shortest helicopter route.",
    note: "Editable sample itinerary. Exact days, timings and accommodation are confirmed at booking, and weather at Simikot and Hilsa can delay helicopter segments.",
    days: [
      {
        day: "Day 01",
        title: "Lucknow to Nepalgunj",
        text: "Road transfer from Lucknow to Nepalgunj on the India–Nepal border. Check-in, document verification and a briefing on the yatra, altitude and what to expect.",
        meta: [
          { label: "Altitude", value: "Approx. 150 m" },
          { label: "Transport", value: "Road" },
          { label: "Stay", value: "Nepalgunj, subject to package" },
          { label: "Meals", value: "Subject to selected package" },
        ],
      },
      {
        day: "Day 02",
        title: "Nepalgunj – Simikot – Hilsa – Purang",
        text: "Early flight to Simikot, then a short helicopter flight to Hilsa on the Nepal–Tibet border. Complete border formalities and continue by road to Purang (Taklakot).",
        meta: [
          { label: "Altitude", value: "Approx. 3,900 m" },
          { label: "Transport", value: "Flight, helicopter & road" },
          { label: "Stay", value: "Purang, subject to package" },
          { label: "Meals", value: "Subject to selected package" },
        ],
      },
      {
        day: "Day 03",
        title: "Acclimatization in Purang",
        text: "A rest day to let the body adjust to the altitude, with gentle walks and time for the team to complete the remaining formalities for the pilgrimage.",
        meta: [
          { label: "Altitude", value: "Approx. 3,900 m" },
          { label: "Transport", value: "Local, if required" },
          { label: "Stay", value: "Purang, subject to package" },
          { label: "Meals", value: "Subject to selected package" },
        ],
      },
      {
        day: "Day 04",
        title: "Lake Mansarovar & Kailash Darshan",
        text: "Drive to Lake Mansarovar for a circuit of the lake by vehicle, with prayers and rituals on the shore where permitted, and views of Rakshas Tal. Continue to Yamdwar for darshan of Mount Kailash before returning to Purang.",
        meta: [
          { label: "Altitude", value: "Up to approx. 4,600 m" },
          { label: "Transport", value: "Road" },
          { label: "Stay", value: "Purang, subject to package" },
          { label: "Meals", value: "Subject to selected package" },
        ],
      },
      {
        day: "Day 05",
        title: "Return Journey",
        text: "Drive back to Hilsa, then helicopter to Simikot and flight to Nepalgunj, followed by the road transfer to Lucknow. A long travel day that may extend if weather delays the flights.",
        meta: [
          { label: "Altitude", value: "Descending to approx. 150 m" },
          { label: "Transport", value: "Road, helicopter & flight" },
          { label: "Stay", value: "End of yatra" },
          { label: "Meals", value: "Subject to selected package" },
        ],
      },
    ],
  },

  options: {
    title: "Booking Options",
    intro: "Choose how you would like to travel. We confirm seats, inclusions and the final price with you before registration.",
    note: "Prices depend on season, group size, permits and selected package.",
    items: [
      {
        name: "Group Yatra",
        basis: "Per person",
        price: "Price on Request",
        points: ["Fixed group departures", "Shared accommodation", "Subject to seat availability"],
        idealFor: "Individual pilgrims and couples",
        whatsappMessage: "Hello Karvaahh, I'd like to join a group Kailash Mansarovar helicopter yatra. Please share dates and price.",
      },
      {
        name: "Private / VIP Yatra",
        basis: "Private group",
        price: "Price on Request",
        points: ["Arranged for your group only", "Dedicated coordination", "Premium stays where available"],
        idealFor: "Families and private groups",
        featured: true,
        whatsappMessage: "Hello Karvaahh, I'd like a private Kailash Mansarovar helicopter yatra. Please share details and price.",
      },
      {
        name: "Yatra with Parikrama",
        basis: "Extended",
        price: "Enquire for details",
        points: ["Adds the Kailash Parikrama", "Longer itinerary", "For fit pilgrims"],
        idealFor: "Pilgrims who wish to walk around Kailash",
        whatsappMessage: "Hello Karvaahh, I'd like the Kailash helicopter yatra with Kailash Parikrama. Please share details.",
      },
    ],
  },

  booking: {
    title: "How to Register for the Yatra",
    intro: "Permits for Kailash take time to process, so we recommend starting registration well before your preferred departure.",
    steps: [
      { title: "Enquire", text: "Tell us your preferred month, group size and starting city." },
      { title: "Share Documents", text: "Send passport scans, photographs and the other documents listed above." },
      { title: "Confirm & Register", text: "Receive the confirmed itinerary, inclusions and payment terms in writing, then register." },
      { title: "Permits & Visa", text: "We coordinate permit and group visa processing through authorised channels." },
      { title: "Pre-Departure Briefing", text: "Get your final schedule, packing list and health guidance before you travel." },
    ],
    policies: [
      {
        title: "Payment terms",
        text: "Registration and payment terms are shared in writing with your confirmed itinerary. Enquire for details.",
      },
      {
        title: "Cancellation policy",
        text: "Cancellation and refund terms depend on the package, permits and timing, and are confirmed in writing before you register.",
      },
      {
        title: "Weather delays & extra costs",
        text: "If flights are delayed by weather, extra nights, meals or transport may be required. How these costs are handled is explained in your booking terms.",
      },
      {
        title: "Permits & route changes",
        text: "Permit decisions and route rules are set by the authorities and can change. If this affects your yatra, we will discuss the available options with you.",
      },
    ],
  },

  departures: {
    title: "Select Your Preferred Date",
    intro: "Group departures run during the yatra season, roughly May to September. Pick a listed date to check seats on WhatsApp, or ask to be notified when new dates open.",
    emptyTitle: "Dates announced soon",
    emptyCta: "Notify me on WhatsApp",
    emptyMessage: "Hello Karvaahh, please notify me when the Kailash Mansarovar helicopter yatra dates are announced.",
    emptyText:
      "Group departure dates are announced each year once the authorities open the route. Get notified as soon as the next season's dates are released.",
    // Add confirmed departures only, e.g.
    // { date: "2027-05-22", status: "open" },     // Booking Open
    // { date: "2027-06-19", status: "limited" },  // Limited Seats
    // { date: "2027-08-20", status: "closed" },   // Booking Closed
    // Past dates are hidden automatically.
    dates: [
      { date: "2027-05-22", status: "open" },
      { date: "2027-06-19", status: "open" },
      { date: "2027-08-20", status: "open", note: "Masik Navami at Mansarovar Lake" },
      { date: "2027-09-06", status: "open" },
    ],
  },

  inclusions: [
    { text: "Flight and helicopter segments according to selected package", status: "included" },
    { text: "Yatra coordination and support by Karvaahh", status: "included" },
    { text: "Permit and group visa processing assistance", status: "package" },
    { text: "Accommodation during the yatra", status: "package" },
    { text: "Meals during the yatra", status: "package" },
    { text: "Road transport in Nepal and Tibet", status: "package" },
    { text: "Basic medical kit and oxygen support where included", status: "package" },
  ],

  exclusions: [
    "Travel to the starting point unless included",
    "Applicable taxes unless stated",
    "Ponies, porters and other Parikrama services",
    "Personal expenses",
    "Travel insurance unless specified",
    "Tips",
    "Extra costs caused by weather delays or route changes",
    "Additional services not listed in the package",
  ],

  documents: {
    title: "Documents You'll Need",
    intro: "Kailash lies in Tibet, so travel requires permits and a visa arranged through authorised channels. Start gathering documents early.",
    groups: [
      {
        title: "Indian Passport Holders",
        items: [
          "Original Indian passport, with validity well beyond your travel dates",
          "Clear colour scan of the passport",
          "Recent passport-size photographs",
          "Copy of a government photo ID",
        ],
      },
      {
        title: "Health & Other",
        items: [
          "Medical fitness certificate from a registered doctor, if requested",
          "Details of any medical conditions and medication",
          "Emergency contact details",
          "Travel insurance documents, if purchased",
        ],
      },
    ],
    eligibility: [
      {
        title: "Age",
        text: "Age limits may apply depending on the authorities and operators. We confirm the current rules when you enquire.",
      },
      {
        title: "Medical fitness",
        text: "A fitness certificate dated close to departure is commonly required. Pilgrims with heart, lung or blood pressure conditions should consult a doctor first.",
      },
      {
        title: "Nationality",
        text: "Requirements differ for non-Indian passport holders, including NRIs and OCI cardholders. Enquire for details.",
      },
    ],
    note: "Document, visa and eligibility rules are set by the authorities and can change at short notice. Karvaahh shares an up-to-date checklist at registration.",
  },

  preparation: {
    title: "Before You Travel",
    intro: "Preparing well makes the yatra safer and more comfortable at high altitude.",
    carry: [
      "Warm layered clothing",
      "Down jacket, gloves & warm cap",
      "Comfortable walking shoes",
      "Sunglasses & sunscreen",
      "Water bottle",
      "Personal medication",
      "Puja items, if desired",
      "Passport & document copies",
    ],
    topics: [
      {
        icon: "sun",
        title: "Clothing",
        text: "Days can be bright and mild in the sun while nights drop below freezing. Pack layers you can add and remove, a windproof jacket and warm accessories.",
      },
      {
        icon: "mountainSnow",
        title: "Altitude",
        text: "The route climbs to around 4,600 m within a few days. Rest when advised, drink plenty of water, avoid exertion and tell the team at once if you feel unwell.",
      },
      {
        icon: "heart",
        title: "Fitness",
        text: "The 5-day plan needs no trekking, but altitude affects everyone. Regular walking in the weeks before travel helps; the Parikrama option needs good fitness.",
      },
      {
        icon: "landmark",
        title: "Rituals & Respect",
        text: "Follow local guidance at sacred sites. Rituals at Lake Mansarovar are subject to local rules, which can change.",
      },
    ],
  },

  safety: {
    title: "Safety Comes First",
    intro: "A high-altitude pilgrimage through remote mountains is planned around conditions on the day.",
    points: [
      { title: "Weather-dependent flights", text: "Flights to Simikot and helicopter segments to Hilsa operate only in suitable weather." },
      { title: "Delays are possible", text: "Flights may be delayed or rescheduled, so keep flexibility in your travel plans." },
      { title: "Acclimatization matters", text: "The rest day in Purang is part of the plan for your safety, not an optional extra." },
      { title: "Authorities decide", text: "Permits, border crossings and route rules are set by the authorities." },
      { title: "Health checks", text: "Share any medical conditions in advance and follow the team's guidance during the yatra." },
      { title: "Pilot decisions come first", text: "The pilot's and operator's safety decisions always take priority." },
    ],
  },

  seasons: {
    title: "When Can You Travel?",
    intro: "The Kailash yatra season is short and set each year by the authorities.",
    note: "Seasonal patterns are general guidance only; the route opening and closing dates are announced each year.",
    items: [
      {
        name: "Season Opens",
        months: "May – June",
        rating: "Popular",
        icon: "sun",
        text: "Generally stable weather after the route opens, with cold nights at altitude.",
      },
      {
        name: "Monsoon",
        months: "July – August",
        rating: "Open, more cloud",
        icon: "rain",
        text: "Tibet stays relatively dry, but cloud on the Nepal side can delay flights to Simikot and Hilsa.",
      },
      {
        name: "Season Closes",
        months: "September",
        rating: "Clear skies",
        icon: "leaf",
        text: "Often clear and crisp, with colder temperatures towards the end of the season.",
      },
      {
        name: "Winter",
        months: "October – April",
        rating: "Closed",
        icon: "snow",
        text: "The yatra generally does not operate due to snow and extreme cold.",
      },
    ],
  },

  altitude: {
    title: "Altitude & Health",
    intro:
      "The helicopter route gains altitude quickly, from the plains to around 3,900 m in a single day. The rest day in Purang is essential to acclimatize before the highest part of the yatra.",
    points: [
      { place: "Nepalgunj", metres: 150, label: "150 m" },
      { place: "Simikot", metres: 2910, label: "2,910 m" },
      { place: "Hilsa", metres: 3650, label: "3,650 m" },
      { place: "Purang", metres: 3900, label: "3,900 m" },
      { place: "Lake Mansarovar", metres: 4590, label: "4,590 m" },
      { place: "Dolma La", metres: 5630, label: "5,630 m", note: "Parikrama option only" },
    ],
    guidance: [
      "Rapid altitude gain can cause headache, breathlessness, dizziness, nausea or poor sleep.",
      "Drink water regularly, avoid alcohol and smoking, and rest when advised.",
      "Move slowly and avoid exertion, especially on the first days in Tibet.",
      "Tell the team immediately if you feel unwell; descending is the most effective remedy.",
    ],
    disclaimer:
      "This is general information, not medical advice. Pilgrims with heart, lung, blood pressure or other relevant medical conditions, and anyone who is pregnant, should consult a qualified medical professional before high-altitude travel.",
  },

  travelerTypes: {
    title: "Ideal For",
    intro: "The helicopter route brings Kailash within reach of pilgrims who cannot spend weeks on the road.",
    items: [
      { icon: "landmark", title: "Shiva Devotees", text: "A direct path to darshan of Lord Shiva's abode and the holy lake." },
      { icon: "heart", title: "Senior Pilgrims", text: "No trekking on the 5-day plan, subject to medical fitness." },
      { icon: "users", title: "Families", text: "Make the pilgrimage together in a shorter, supported journey." },
      { icon: "clock", title: "Short-Time Travellers", text: "Complete the yatra in about five days." },
      { icon: "mountainSnow", title: "Parikrama Seekers", text: "Choose the extended option to walk around Kailash." },
      { icon: "shield", title: "Private Groups", text: "A private yatra with dedicated coordination." },
      { icon: "compass", title: "Buddhist & Jain Pilgrims", text: "Kailash is sacred across faiths and traditions." },
      { icon: "sun", title: "First-Time Pilgrims", text: "Full support with permits, documents and logistics." },
    ],
  },

  gallery: {
    title: "Photo Gallery",
    intro: "Scenes from the Kailash Mansarovar yatra. Tap any photo to view it larger.",
    items: [
      { image: kailash, caption: "The south face of Mount Kailash at sunrise" },
      { image: mansarovar, caption: "Lake Mansarovar" },
      { image: rakshasTal, caption: "Rakshas Tal" },
      { image: yamdwar, caption: "Yamdwar" },
      { image: helicopter, caption: "Helicopter between Simikot and Hilsa" },
      { image: simikot, caption: "Simikot" },
      { image: hilsa, caption: "Hilsa" },
    ],
  },

  trust: {
    title: "Plan With Karvaahh",
    intro: "Karvaahh Tours & Travels is a Nepal and India travel specialist with teams in Kathmandu and Delhi NCR.",
    points: [
      { title: "Nepal & India specialist", text: "Pilgrimages across the Himalaya, from Kailash to the Char Dham and Muktinath." },
      { title: "Teams on both sides", text: "Coordination from Delhi NCR and Kathmandu for routes through Nepal." },
      { title: "Honest information", text: "Clear guidance on permits, weather and inclusions before you register." },
    ],
  },

  faqs: [
    {
      question: "What is the Kailash Mansarovar Yatra by helicopter?",
      answer:
        "It is a helicopter-assisted pilgrimage through far-western Nepal: road to Nepalgunj, a flight to Simikot and a helicopter to Hilsa on the Tibet border, then road to Purang, Lake Mansarovar and Kailash darshan from Yamdwar.",
    },
    {
      question: "How many days does the helicopter yatra take?",
      answer:
        "The shortest helicopter yatra takes about 5 days and 4 nights from Lucknow or Nepalgunj. Adding the Kailash Parikrama makes it longer. Weather delays can extend any itinerary.",
    },
    {
      question: "Where does the yatra start?",
      answer: "Most pilgrims start in Lucknow and travel by road to Nepalgunj; some packages begin in Nepalgunj. We confirm the starting point when you book.",
    },
    {
      question: "Is the Kailash Parikrama included?",
      answer:
        "Not in the 5-day plan, which covers Lake Mansarovar and Kailash darshan from Yamdwar. The full three-day Parikrama is available as an extended option on request.",
    },
    {
      question: "Is any trekking required?",
      answer: "No trekking is needed on the 5-day plan; only short walks, taken slowly because of the altitude. The Parikrama option involves a demanding high-altitude walk.",
    },
    {
      question: "Is there an age limit?",
      answer: "Age limits may apply depending on the authorities and operators, and a medical fitness certificate is commonly required. We confirm the current rules when you enquire.",
    },
    {
      question: "Which documents do Indian passport holders need?",
      answer:
        "An original Indian passport with sufficient validity, a passport scan, recent photographs and a photo ID copy, plus a medical certificate if requested. We share the full checklist at registration.",
    },
    {
      question: "Can non-Indian passport holders join?",
      answer: "Requirements differ for other nationalities, including NRIs and OCI cardholders. Please enquire with your passport details.",
    },
    {
      question: "How is the visa arranged?",
      answer: "Travel to Tibet requires permits and a visa, processed through authorised channels. Karvaahh coordinates this using the documents you provide.",
    },
    {
      question: "What is the best time for the helicopter yatra?",
      answer: "The season runs roughly from May to September, when the authorities open the route. July and August can bring cloud that delays flights on the Nepal side.",
    },
    {
      question: "What if the weather delays the helicopter?",
      answer:
        "Flights to Simikot and Hilsa can be delayed or rescheduled. Keep flexibility in your plans; how extra nights or costs are handled is explained in your booking terms.",
    },
    {
      question: "Is oxygen available?",
      answer: "Basic medical support and oxygen may be included depending on the package. Ask us what is provided on your departure.",
    },
    {
      question: "Can I take a holy dip in Lake Mansarovar?",
      answer: "Rituals at the lake are subject to local rules, which can change. The team will advise what is permitted during your yatra.",
    },
    {
      question: "What should I pack?",
      answer:
        "Warm layers, a down jacket, gloves and cap, comfortable shoes, sunglasses, sunscreen, a water bottle, personal medication, puja items if desired, and your passport with copies.",
    },
    {
      question: "Is travel insurance included?",
      answer: "Travel insurance is not included unless specified. We recommend insurance that covers high-altitude travel and helicopter evacuation.",
    },
    {
      question: "Can I customize the yatra?",
      answer: "Yes. Private departures, the Parikrama extension and other changes can be discussed, subject to permits and flight operations.",
    },
  ],

  cta: {
    title: "Begin Your Sacred Journey",
    text: "Let Karvaahh help you plan a seamless and meaningful Kailash Mansarovar pilgrimage.",
    image: kailash,
    primaryLabel: "Plan My Kailash Yatra",
    planMessage: "Hello Karvaahh, I would like to plan a Kailash Mansarovar helicopter yatra.",
    quoteSubject: "Quote request: Kailash Mansarovar Helicopter Tour",
  },

  relatedTours: [
    {
      title: "Kailash Mansarovar Yatra Guide",
      text: "Routes, the Kora, altitude and packing for the full yatra from Nepal.",
      href: "/spiritual-journeys/kailash-mansarovar",
      image: kailash,
    },
    {
      title: "Kailash Mansarovar Yatra Packages",
      text: "Overland and other Kailash packages from Karvaahh.",
      href: "/packages/kailash-mansarovar-yatra",
    },
    {
      title: "Adi Kailash & Om Parvat",
      text: "The Indian Himalayan pilgrimage to Adi Kailash and Om Parvat.",
      href: "/packages/india-pilgrimage/adi-kailash-om-parvat",
    },
    {
      title: "Everest Base Camp Helicopter Tour",
      text: "A same-day helicopter journey to the foot of Everest.",
      href: "/activities/helicopter-tours/everest-base-camp",
      image: {
        src: "/koshi/everest-base-camp.jpg",
        alt: "Mount Everest and the Khumbu Glacier at dawn",
        label: "Everest",
        objectPosition: "22% center",
      },
    },
    { title: "Muktinath Helicopter Tour", text: "Fly to the sacred Muktinath temple in Mustang. Enquire for details." },
  ],
};
