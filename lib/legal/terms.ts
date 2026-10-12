import { siteConfig } from "@/lib/site-config";
import {
  callout,
  cards,
  contactBlock,
  defineSections,
  list,
  para,
  section,
  sub,
} from "./builders";
import type { LegalDocument } from "./types";

/**
 * TERMS & CONDITIONS
 *
 * Draft for commercial use — to be reviewed by qualified Nepal legal counsel
 * before publication. Edit wording here; the UI renders it automatically.
 *
 * Writing rules applied throughout: "to the maximum extent permitted by
 * applicable law", "where applicable", "subject to supplier terms",
 * "reasonable efforts". No blanket exclusion of liability is made anywhere.
 */
export const termsSections = defineSections([
  section("introduction", "Introduction", [
    "Welcome to Karvaahh – Live to Travel. These Terms & Conditions (“Terms”) govern your use of our website and the travel services, bookings and experiences that we arrange, sell or facilitate, including tours, pilgrimages, treks, flights, hotels, transport, helicopter services, activities and related assistance.",
    "Please read these Terms together with our [Privacy Policy](/privacy-policy), [Cancellation & Refund Policy](/cancellation-policy) and [Cookie Policy](/cookies), and with your quotation and booking confirmation. If you have questions before booking, please ask us.",
  ], [
    callout(
      "booking",
      "Booking-specific conditions",
      "Your quotation and booking confirmation may contain specific conditions, supplier terms and cancellation rules that apply to your trip. Where they differ from these general Terms, the booking-specific conditions apply to that booking.",
    ),
  ]),

  section("definitions", "Definitions", [
    "In these Terms, unless the context requires otherwise:",
  ], [
    list([
      "“Karvaahh”, “we”, “us” and “our” means Karvaahh – Live to Travel, the travel business operating the website and arranging the services described here.",
      "“You” and “your” means the person making an enquiry or booking and, where the context allows, every person travelling under that booking.",
      "“Services” means any travel service arranged, sold or facilitated by Karvaahh.",
      "“Supplier” means an independent third party that provides or supports a service, such as an airline, hotel, helicopter operator, transport provider, activity operator, guide, cruise company, destination management company, visa provider or insurer.",
      "“Booking” means a service or package confirmed by Karvaahh in writing after the conditions in these Terms have been met.",
      "“Force Majeure Event” has the meaning given in the Force Majeure section.",
    ]),
  ]),

  section("acceptance", "Acceptance of Terms", [
    "By using our website, requesting a quotation, making a payment or confirming a booking, you confirm that you have read, understood and agree to these Terms on behalf of yourself and everyone included in your booking. If you do not agree, please do not make a booking or use our services.",
    "The person making the booking is responsible for making sure all travellers in the group are aware of these Terms and any supplier conditions that apply.",
  ]),

  section("karvaahh-role", "Karvaahh’s Role", [
    "Karvaahh may act in different capacities depending on the service, and the capacity that applies will be reflected in the quotation, booking confirmation or supplier documents. Depending on the service, Karvaahh may act as:",
  ], [
    list([
      "Tour operator — where we assemble and operate a package or itinerary under our own name",
      "Travel agent or booking agent — where we arrange a service on your behalf from a supplier",
      "Facilitator or intermediary — where we connect you with a supplier who contracts with you directly",
      "Reseller — where we sell a supplier’s product or service to you",
    ]),
    callout(
      "supplier",
      "Independent suppliers",
      "Some services are provided by independent suppliers who are not owned or controlled by Karvaahh. We do not claim to operate services that we do not directly operate. Supplier-specific terms, conditions of carriage and safety rules also apply and may limit what we can change, refund or guarantee.",
    ),
    cards(
      [
        { icon: "plane", title: "Airlines" },
        { icon: "hotel", title: "Hotels and lodges" },
        { icon: "helicopter", title: "Helicopter operators" },
        { icon: "route", title: "Vehicle operators" },
        { icon: "compass", title: "Cruise companies" },
        { icon: "mountain", title: "Adventure operators" },
        { icon: "users", title: "Trekking guides" },
        { icon: "pin", title: "Destination management companies" },
        { icon: "clipboard", title: "Visa service providers" },
        { icon: "shield", title: "Insurance companies" },
      ],
      "Typical independent suppliers",
    ),
  ]),

  section("travel-services", "Travel Services", [
    "We offer a range of services, which may include domestic and international tours, customised, family, honeymoon, luxury, corporate and educational holidays, pilgrimage and spiritual journeys, trekking and adventure activities, yoga and wellness experiences, destination weddings, cruise experiences, air ticketing, helicopter tours and helicopter pilgrimage packages, Kailash Mansarovar tours, hotel bookings, transport and airport transfers, sightseeing and visa or travel assistance.",
    "The services included in your trip are those set out in your written quotation and booking confirmation. Anything not listed as included is not part of the booking.",
  ]),

  section("third-party-suppliers", "Third-Party Suppliers", [
    "We select suppliers with reasonable care, but suppliers operate independently and apply their own terms, policies, safety standards and decisions. Where a supplier’s terms apply, they form part of your arrangement for that service, and we will make them available to you on request or with your booking documents where reasonably practicable.",
    "Suppliers may change, substitute, delay or cancel services for operational, safety, regulatory or commercial reasons. Karvaahh will use reasonable efforts to help you in those circumstances, but the supplier’s decisions and conditions will determine what remedies are available.",
  ]),

  section("website-information", "Website Information", [
    "We take reasonable care to keep the information on our website — including descriptions, itineraries, images, distances, durations and indicative prices — accurate and up to date. Travel conditions change, so website content is for general guidance and is not an offer. Photographs and itineraries are illustrative, and the final confirmed itinerary is the one in your booking confirmation.",
  ]),

  section("enquiries-quotations", "Enquiries and Quotations", [
    "A quotation is an estimate based on the information you give and on supplier availability and prices at that time. Unless the quotation says otherwise, it is valid only for the period stated, is subject to availability and may change before a booking is confirmed. A quotation is not a confirmed booking.",
  ]),

  section("booking-confirmation", "Booking Confirmation", [
    "A booking is confirmed only when we send you written confirmation (by e-mail or another written channel) after we have received any required payment or deposit. Making a payment does not by itself guarantee a booking if the service turns out to be unavailable; in that case we will offer alternatives or a refund of amounts paid for that service, subject to the Cancellation & Refund Policy.",
    "Please check your confirmation carefully — including names, dates and services — and tell us immediately about any error.",
  ]),

  section("customer-responsibilities", "Customer Responsibilities", [
    "You are responsible for:",
  ], [
    list([
      "Giving us accurate, complete and timely information, including names exactly as they appear on passports or identity documents",
      "Checking confirmations, tickets and vouchers for accuracy",
      "Arriving on time for departures, transfers and activities",
      "Holding valid travel documents, visas, permits and vaccinations required for your trip",
      "Following the instructions of guides, drivers, pilots, hosts and local authorities",
      "Making sure that you and your group are medically and physically fit for the trip you choose",
      "Taking out appropriate travel insurance",
    ]),
  ]),

  section("pricing", "Pricing", [
    "Prices are quoted in the currency stated in your quotation and are based on the services, dates, group size and costs known when the quotation is prepared. Unless stated otherwise, prices do not include items such as international flights, visa fees, travel insurance, personal expenses, tips, or optional activities.",
    "Prices may change before booking confirmation. After confirmation we will not increase the price except where a cost beyond our reasonable control increases — such as changes in supplier prices, taxes, fees, fuel surcharges or currency rates — in which case we will tell you as soon as reasonably possible and explain the change.",
  ]),

  section("payment-terms", "Payment Terms", [
    "A deposit or advance payment may be required to confirm your booking, with the balance due as shown in your confirmation. We accept the payment methods stated at the time of booking. Bank charges, payment gateway fees and currency conversion costs, where applicable, may be payable by you.",
    "Please pay only through the payment details provided in your official quotation or booking documents. If you are unsure whether a payment request is genuine, contact us through our official channels before paying.",
  ]),

  section("payment-deadlines", "Payment Deadlines", [
    "Full payment must be received by the date stated in your booking confirmation or, if none is stated, before the date we notify you. Some suppliers require earlier payment or non-refundable deposits (for example airlines, helicopter operators or permit authorities).",
    "If payments are not received on time, we may treat the booking as cancelled by you and the cancellation conditions may apply, or we may release the reserved services. We will try to contact you first where reasonably practicable.",
  ]),

  section("booking-documentation", "Booking Documentation", [
    "We will send tickets, vouchers, itineraries and other documents by the channel agreed with you. You should carry the documents you need during travel and check them on receipt. Documents are issued for the named travellers only and generally cannot be transferred.",
  ]),

  section("passport-visa", "Passport and Visa Responsibility", [
    "You are responsible for ensuring that every traveller holds a valid passport (usually with at least six months’ validity beyond the travel dates and enough blank pages), and all required visas, permits, entry authorisations and health documents for every country and region visited, including transit points.",
    "Where we offer visa or document assistance, we act only to help with your application. We do not issue visas or permits, cannot influence decisions by authorities and are not responsible for refusals, delays or the consequences of incomplete or inaccurate information. Visa and permit fees are generally non-refundable.",
  ]),

  section("international-travel", "International Travel", [
    "International travel is subject to the laws, entry rules, health requirements and security measures of each country involved, which can change at short notice. You are responsible for checking official government sources for current requirements before and during travel.",
    "If you are refused boarding or entry because of documentation, health, behaviour or other reasons related to you, additional costs and consequences are your responsibility, subject to applicable law.",
  ]),

  section("hotel-accommodation", "Hotel Accommodation", [
    "Accommodation is provided by hotels, lodges, teahouses, guesthouses and similar operators under their own terms, including check-in and check-out times, occupancy limits, deposits and house rules. Room categories, facilities and star ratings are as described by the provider, and in remote or high-altitude areas facilities can be basic and may vary with season, supply and weather.",
    "We use reasonable efforts to secure the accommodation confirmed. If it becomes unavailable, we will offer a reasonable alternative where possible; any difference in price may be payable or refundable according to the circumstances.",
  ]),

  section("transportation", "Transportation", [
    "Road, rail, boat and other transport is operated by independent operators or by our arranged vehicles and drivers, and is subject to the operator’s terms, seating and luggage limits and local regulations. Journey times given are estimates only; mountain and rural roads in particular can be affected by traffic, road works, landslides, snow, floods and closures.",
    "Passengers must use seat belts and safety equipment where provided and follow drivers’ and operators’ reasonable instructions.",
  ]),

  section("airline-bookings", "Airline Bookings and Air Travel", [
    "Air transportation is subject to the airline’s applicable Conditions of Carriage, fare rules and aviation regulations. When we book flights, we do so as an agent or intermediary for the airline; the contract of carriage is between you and the airline.",
  ], [
    callout(
      "important",
      "Airline rules apply",
      "The airline’s fare rules and Conditions of Carriage decide what can be changed, cancelled or refunded. Karvaahh cannot override airline rules, and airline charges and service fees may apply.",
    ),
    sub("Fare rules, cancellation and refunds", [
      "Every fare has its own conditions. Some fares are non-refundable or non-changeable, and others allow changes or refunds only for a fee. Where a refund is possible it is determined by the airline after applying its fare rules, and processing time depends on the airline and the payment method used.",
    ]),
    sub("Rescheduling and name corrections", [
      "Date or time changes and name corrections are subject to the airline’s rules and may be restricted, chargeable or impossible after ticketing. Tickets must show names exactly as in the passport. Errors caused by incorrect information supplied to us may result in charges or loss of the ticket value.",
    ]),
    sub("Baggage", [
      "Free baggage allowances, size and weight limits and charges for excess baggage are set by the airline and may vary by fare, route and aircraft. Excess baggage charges and any restrictions on items you may carry are your responsibility.",
    ]),
    sub("Missed flights and no-shows", [
      "If you miss a flight or do not show up, the airline’s no-show rules apply. This may result in cancellation of the remaining sectors and loss of the ticket value, and we cannot guarantee any refund or alternative booking.",
    ]),
    sub("Seat allocation", [
      "Seat requests are not guaranteed unless confirmed by the airline. Airlines may change seats, aircraft or services for operational reasons.",
    ]),
    sub("Schedule changes, delays, cancellations and rerouting", [
      "Airlines may change schedules, delay, cancel, reroute or substitute aircraft, and may change the departure or arrival airport. Where this happens, your rights and remedies are those provided by the airline and applicable law. We will use reasonable efforts to inform you and to help you with alternatives, but we are not responsible for the airline’s operational decisions.",
    ]),
    sub("Documents and requirements", [
      "Passengers must meet passport, visa, health, transit and entry requirements for each country on the route. Airlines may refuse boarding if documents are not in order.",
    ]),
  ]),

  section("helicopter-services", "Helicopter Services", [
    "Helicopter flights, including helicopter tours and helicopter pilgrimage packages, are operated by licensed independent operators, not by Karvaahh unless expressly stated in your booking. Helicopter operations in mountain regions are inherently dependent on conditions and are never guaranteed.",
    "The pilot/operator has final operational authority regarding whether a flight can safely depart, continue, divert, land or return.",
  ], [
    callout(
      "important",
      "Important",
      "Helicopter operations are subject to weather, safety, aircraft availability and pilot/operator decisions. A scheduled flight, route, landing point or timing is not guaranteed.",
    ),
    sub("Weather, visibility, wind and cloud", [
      "Flights depend on visibility, cloud base, wind, precipitation, temperature and mountain flying conditions. These can change quickly, especially at altitude, and flights may be delayed, shortened, re-routed or cancelled at short notice, including after you have reached the helipad.",
    ]),
    sub("Aircraft, restrictions and permissions", [
      "Flights also depend on aircraft and crew availability, technical or maintenance requirements, aviation and air traffic restrictions, landing permissions, helipad conditions and local authority rules. Landing at specific temples, viewpoints or helipads may be restricted or prohibited by authorities.",
    ]),
    sub("Passengers, weight and baggage", [
      "For safety, operators may require passenger weight and baggage weight and may set strict baggage limits. Passengers may be asked to reduce baggage, travel on a different flight or be separated into groups. Accurate information must be provided; failing to do so can affect safety and operation.",
    ]),
    sub("Documents, medical fitness and altitude", [
      "Passengers must carry valid identity documents and any permits required. You must be medically fit to fly and to be at the altitude of the destination. Operators may refuse passengers who appear unfit or who do not comply with safety instructions. Helicopter flights to high-altitude destinations carry a risk of altitude-related illness.",
    ]),
    sub("Delays, cancellation, rescheduling and refunds", [
      "If a flight is delayed, rescheduled or cancelled, we will use reasonable efforts to arrange another flight or alternative within the circumstances. Whether any refund is due depends on the operator’s policy, the reason for cancellation and what has already been incurred. See the [Cancellation & Refund Policy](/cancellation-policy).",
    ]),
    sub("Operator terms and force majeure", [
      "The operator’s own terms and conditions apply and may include limitations of liability, safety rules and cancellation charges. Force Majeure Events can also stop or interrupt helicopter operations.",
    ]),
  ]),

  section("trekking", "Trekking", [
    "Trekking in the Himalaya takes place in remote and demanding terrain. Itineraries are plans, not promises: weather, snow, landslides, trail damage, permit rules, group health, local conditions or safety concerns can require changes to routes, timing or accommodation.",
    "Trekkers must follow guides’ instructions, stay with the group, carry suitable equipment and clothing, and tell the guide about any health problem or symptoms promptly. Guides may change the itinerary, stop the trek for any person or turn back where they consider it necessary for safety.",
    "Accommodation and food on the trail are often basic and facilities such as hot water, electricity and mobile connectivity may be limited or unavailable.",
  ], [
    callout(
      "safety",
      "Travel safety",
      "Safety decisions made by guides, pilots, drivers and operators on the ground take priority over the planned itinerary. A change made for safety reasons is not a failure to provide the service.",
    ),
  ]),

  section("adventure-activities", "Adventure Activities", [
    "Adventure activities involve inherent risks that cannot be removed entirely, even where reasonable care is taken and standard safety practices are followed. By taking part you acknowledge that you understand these risks and that you will follow instructions and safety rules. This acknowledgement does not remove any rights you have under applicable law, or any responsibility that an operator or we have for our own negligence where the law does not allow it to be excluded.",
    "Activities are provided by independent operators, may require waivers or declarations on the day, and can be subject to age, weight, height, health and fitness requirements. Operators may refuse participation or stop an activity on safety grounds, including because of weather, water levels, wind, terrain, wildlife or equipment concerns.",
  ], [
    list([
      "Safety instructions, briefings and guide instructions must be followed at all times",
      "Equipment must be used as instructed; operators may refuse anyone who is unsuitable or unprepared",
      "Age, weight and medical fitness restrictions apply and must be declared honestly",
      "Weather, terrain, wildlife and remote locations affect risk and may change or cancel an activity",
      "Injury and emergency response, rescue and evacuation may take time in remote places and may involve costs",
      "Appropriate travel insurance covering the activity is strongly recommended",
    ]),
    sub("Rafting and canyoning", [
      "River and canyon conditions change with rainfall, snowmelt and season. Participants may be required to swim, wear helmets and life jackets and be capable of following rescue instructions.",
    ]),
    sub("Bungee, zipline and paragliding", [
      "These activities are weather- and equipment-dependent and have strict age, weight and health limits. Operators may postpone or cancel in poor conditions. Please disclose conditions such as heart, back, neck, pregnancy or epilepsy concerns to the operator.",
    ]),
    sub("Mountaineering and rock climbing", [
      "These activities carry serious risks including falls, rockfall, avalanche, cold and altitude illness. Technical skill, fitness and acclimatisation matter, and decisions to stop or turn back are for the leader to make.",
    ]),
    sub("Camping", [
      "Camping may expose you to weather extremes, wildlife, limited facilities and remoteness. Follow camp rules and guide instructions, particularly regarding food, fires and wildlife.",
    ]),
    sub("Mountain biking and skiing", [
      "Terrain, snow and surface conditions vary and can change quickly. Participants should ride or ski within their ability and use protective equipment.",
    ]),
    sub("Safari and wildlife activities", [
      "Wildlife is wild and unpredictable. Sightings are never guaranteed, and strict rules about distance, noise, vehicles and walking apply for your safety and the animals’ welfare.",
    ]),
    sub("Other adventure activities", [
      "Other activities we arrange are also subject to the operator’s safety rules, conditions and decisions on the day.",
    ]),
  ]),

  section("pilgrimage-tours", "Pilgrimage Tours", [
    "Karvaahh arranges pilgrimage and spiritual journeys — including, for example, Kedarnath, Badrinath, Char Dham, Panch Kedar, Muktinath, Pashupatinath, Janakpur, Lumbini and Kailash Mansarovar — and other sacred destinations. Many are at high altitude, in remote areas or in regions with seasonal access.",
    "Darshan, rituals, entry, pooja and timings are decided by temple administrations, trusts, government authorities and local committees, and are subject to crowd management, security arrangements, weather, local restrictions and route conditions. We do not guarantee darshan timing, access or the ability to take part in any ritual unless specifically confirmed in writing, and even then confirmation depends on the above.",
    "Routes, registrations, helicopter services and permits can be changed, limited or suspended by authorities at short notice. Please respect local customs, dress codes and temple rules at all times.",
  ], [
    callout(
      "important",
      "No guaranteed darshan",
      "Darshan timing and access depend on temple administration, authorities, crowds, security, weather and route conditions. Karvaahh does not guarantee darshan unless it has been specifically confirmed in writing.",
    ),
  ]),

  section("high-altitude", "High-Altitude Travel", [
    "Many of our journeys go to high altitude, where reduced oxygen can affect anyone regardless of age, fitness or previous experience. Acute mountain sickness, and in severe cases high-altitude pulmonary or cerebral oedema, can be life-threatening and may develop quickly.",
  ], [
    list([
      "Altitude sickness: learn the symptoms and report headaches, nausea, breathlessness, dizziness or unusual fatigue to your guide immediately.",
      "Acclimatisation: itineraries aim to allow reasonable acclimatisation, but individual response varies; extra rest days or descent may be needed.",
      "Medical fitness: consult a doctor before travelling, especially if you have heart, lung, blood-pressure, circulation or other medical conditions.",
      "Evacuation and rescue: emergency descent, helicopter rescue or hospital transfer may be necessary, may be delayed by weather and can involve substantial cost.",
      "Weather and route changes: conditions can alter, shorten or cancel parts of a journey at any time.",
      "Oxygen: supplemental oxygen may be available on some journeys but is not a guarantee against illness.",
    ]),
    callout(
      "insurance",
      "Travel insurance",
      "We strongly recommend travel insurance that specifically covers medical treatment, emergency evacuation, helicopter rescue and, where applicable, high-altitude trekking up to the maximum altitude of your itinerary. Check your policy’s exclusions before you travel.",
    ),
  ]),

  section("travel-insurance", "Travel Insurance", [
    "Travel insurance is not included unless your booking confirmation expressly says so. We strongly recommend that every traveller has adequate insurance that covers cancellation, medical treatment, emergency evacuation and repatriation, personal accident, baggage and, where relevant to your trip, adventure activities, altitude and helicopter rescue.",
    "You are responsible for choosing suitable cover, for understanding what is excluded and for providing accurate information to your insurer. Karvaahh does not provide insurance advice and, where we help you buy a policy, the insurer is the provider of the insurance.",
  ]),

  section("medical-conditions", "Medical Conditions", [
    "You must tell us before booking about any medical condition, disability, pregnancy or other circumstance that could affect your safety or participation, or that of others. You are responsible for deciding whether you are fit to travel, and for carrying the medication you need.",
    "Operators, guides or pilots may refuse participation, or ask a traveller to stop or leave, if they reasonably consider it unsafe. Where that happens because of information not disclosed, or because a traveller is not fit for the planned journey, refund eligibility is subject to the Cancellation & Refund Policy and supplier terms.",
  ]),

  section("customer-conduct", "Customer Conduct", [
    "You must behave responsibly and respectfully towards other travellers, our staff and suppliers, local communities and the environment. We and our suppliers may refuse or end services for anyone whose conduct is reasonably considered dangerous, abusive, unlawful, disruptive or offensive, or whose behaviour is affecting the safety or enjoyment of others, without liability for refunds or alternatives, subject to applicable law.",
    "You are responsible for loss or damage you cause to property of suppliers or third parties.",
  ]),

  section("children-minors", "Children and Minors", [
    "Children and minors must be accompanied by a parent or responsible adult, and the person making the booking confirms that they are authorised to do so. Age limits, child policies, documentation requirements (including consent letters for travel where applicable) and pricing vary by service and supplier, and some activities and helicopter or high-altitude journeys have minimum age or health requirements.",
  ]),

  section("special-assistance", "Special Assistance", [
    "If you or a traveller needs mobility, dietary, medical or other special assistance, please tell us when you enquire so that we can check feasibility with suppliers. We will use reasonable efforts to arrange suitable support, but many destinations — especially remote, high-altitude or pilgrimage locations — have limited accessibility, and not all requests can be met.",
  ]),

  section("itinerary-changes", "Itinerary Changes", [
    "We plan itineraries carefully, but they may need to change due to safety, weather, road, supplier, permit or local conditions or other circumstances. We will use reasonable efforts to keep you informed and to provide alternatives of comparable standard where reasonably possible. Changes of this kind are not a failure to provide the service and, subject to applicable law, may not entitle you to compensation.",
  ]),

  section("supplier-changes", "Supplier Changes", [
    "Suppliers may change or substitute vehicles, aircraft, hotels, guides or other services. Where a significant part of a confirmed service cannot be delivered, we will use reasonable efforts to offer a comparable alternative, a refund of the affected portion where applicable, or another reasonable solution, taking into account supplier terms and costs already incurred.",
  ]),

  section("weather-conditions", "Weather Conditions", [
    "Weather in the Himalaya and during monsoon and winter seasons can change fast and significantly affect flights, helicopter operations, roads, trekking trails, rafting and other activities. Snowfall, rain, fog, landslides, floods, extreme heat or cold and poor visibility can cause delays, changes or cancellations. Weather-related decisions are made for safety, and we cannot control them.",
  ]),

  section("force-majeure", "Force Majeure", [
    "A “Force Majeure Event” means an event or circumstance beyond our or our suppliers’ reasonable control which prevents, delays or makes impracticable or unsafe the provision of services, including:",
  ], [
    list([
      "Weather, snowfall, floods and landslides",
      "Earthquakes, avalanches and other natural disasters",
      "Roadblocks and road or route closures",
      "Airport closures, airline disruption and helicopter grounding",
      "Government restrictions, permit restrictions and security restrictions",
      "Border restrictions and travel advisories",
      "Political unrest, strikes and civil disturbance",
      "War, hostilities and terrorism",
      "Epidemic, pandemic and public health measures",
    ]),
    callout(
      "important",
      "What happens in a Force Majeure Event",
      "To the maximum extent permitted by applicable law, neither Karvaahh nor you will be responsible for failing to perform an obligation to the extent it is prevented by a Force Majeure Event. We will use reasonable efforts to inform you, offer alternatives where possible and help recover refundable amounts from suppliers, but costs already incurred or non-refundable by suppliers may not be recoverable.",
    ),
  ]),

  section("delays-disruptions", "Delays and Disruptions", [
    "Delays and disruptions can happen in travel — to flights, transfers, roads, border crossings, weather and supplier operations. We will use reasonable efforts to minimise their impact, to keep you informed and to help you continue your journey. Additional costs such as extra accommodation, meals or transport caused by delays may be your responsibility where they are caused by circumstances outside our reasonable control, subject to applicable law and your insurance.",
  ]),

  section("customer-changes", "Customer-Initiated Changes", [
    "If you wish to amend or cancel a booking, please tell us in writing as soon as possible. Amendments depend on availability and supplier rules and may involve charges, including supplier fees and our service costs. Cancellations are governed by the [Cancellation & Refund Policy](/cancellation-policy) and the conditions in your booking confirmation.",
  ]),

  section("no-show", "No-Show", [
    "If you fail to join a service, transfer, flight, activity or departure at the agreed time and place — and the reason is not caused by us or the supplier — it is treated as a no-show. Services not used are generally non-refundable, subject to applicable law and supplier policies.",
  ]),

  section("early-return", "Early Return", [
    "If you leave a trip early for any reason, unused services are generally non-refundable, and additional costs for changed transport or accommodation are your responsibility. Where possible we will help you arrange changes, and you should contact your insurer promptly.",
  ]),

  section("personal-belongings", "Personal Belongings", [
    "You are responsible for your passports, money, valuables and luggage throughout your journey. Karvaahh is not responsible for loss, theft or damage of personal belongings except where the law provides otherwise. We recommend insurance for baggage and valuables and keeping important documents with you.",
  ]),

  section("photography-media", "Photography and Media", [
    "During tours, our team or suppliers may take photographs or video for operational, safety or promotional purposes. If you do not wish to appear in promotional material, please tell your guide or us before the trip and we will take reasonable steps to respect that. Please respect local rules and customs about photography at temples, monasteries, sacred sites, military and sensitive areas, and obtain permission before photographing people.",
  ]),

  section("website-use", "Website Use", [
    "You may use our website for lawful, personal purposes of researching and booking travel. You must not misuse it, attempt to gain unauthorised access, interfere with its operation, use automated tools to extract content or use content in a way that infringes our or others’ rights. Website content, branding and design belong to Karvaahh or its licensors and may not be copied or reused without permission.",
  ]),

  section("fraud-prevention", "Fraud Prevention", [
    "We take reasonable steps to prevent fraud and may verify identities, payments or booking details. Please be careful with payment requests: confirm any change in bank details or payment instructions through our official contact channels before paying. We may refuse, suspend or cancel a booking where we reasonably suspect fraud or misuse, and report it to authorities as required by law.",
  ]),

  section("limitation-liability", "Limitation of Liability", [
    "Nothing in these Terms excludes or limits liability that cannot legally be excluded or limited, including liability for death or personal injury caused by negligence where the law does not allow it to be excluded, for fraud or fraudulent misrepresentation, or for anything else that applicable law does not permit us to exclude.",
    "Subject to that, and to the maximum extent permitted by applicable law, our liability to you in connection with a booking — where we are responsible for performance of the service — is limited to the amount paid to us for the affected service, and we are not liable for indirect or consequential loss such as loss of enjoyment of a holiday, loss of income or opportunity, or loss that was not reasonably foreseeable when the booking was made.",
  ]),

  section("exclusions-liability", "Exclusions of Liability", [
    "To the maximum extent permitted by applicable law, Karvaahh is not responsible for loss, injury, damage, delay or additional expense to the extent it is caused by:",
  ], [
    list([
      "Your own acts, omissions or failure to follow instructions, safety rules or these Terms",
      "Acts or omissions of third parties who are not connected with the provision of the services and which we could not reasonably have foreseen or avoided",
      "Force Majeure Events and other circumstances beyond our reasonable control",
      "Inaccurate, incomplete or late information, documents or payments from you",
      "Pre-existing medical conditions not disclosed to us or not suitable for the journey",
      "Refusal of visas, permits or entry by authorities",
    ]),
    para(
      "These exclusions apply only so far as the law allows, and do not affect any right you have that cannot lawfully be limited.",
    ),
  ]),

  section("third-party-responsibility", "Third-Party Service Responsibility", [
    "Where a service is provided by an independent supplier, the supplier is responsible for providing it in accordance with its own terms and applicable law. Karvaahh will use reasonable care in selecting suppliers and will use reasonable efforts to help you resolve problems with them, but, to the maximum extent permitted by applicable law, is not responsible for the acts, omissions, defaults or standards of independent suppliers where Karvaahh did not itself perform or control the service.",
  ], [
    callout(
      "supplier",
      "Third-party services",
      "Airlines, hotels, helicopter operators, vehicle operators, adventure operators, cruise companies, visa providers and insurers operate under their own terms, which may limit what they, and we, can change, refund or compensate.",
    ),
  ]),

  section("complaints", "Complaints", [
    "If something goes wrong during your trip, please tell your guide, driver or our team immediately so that we can try to fix it on the spot — it is usually the quickest way to resolve it. If the problem is not resolved, please contact us in writing as soon as reasonably possible after the issue arises, with your booking reference, details and any supporting evidence. We will review the matter fairly and respond within a reasonable time.",
  ]),

  section("dispute-resolution", "Dispute Resolution", [
    "We would like to resolve concerns informally and promptly. If a dispute cannot be resolved by discussion, the parties may agree to try mediation or another form of alternative dispute resolution before taking formal action. Nothing in this section prevents either party from seeking urgent relief or from exercising any right that cannot be excluded by law.",
  ]),

  section("governing-law", "Governing Law", [
    `These Terms and any dispute arising from them are governed by the laws of ${siteConfig.governingLaw}, subject to any mandatory consumer or other protections that apply to you under the law of the country where you live. Subject to those protections, the competent courts of ${siteConfig.governingLaw} will have jurisdiction.`,
  ]),

  section("severability", "Severability", [
    "If any part of these Terms is found to be invalid or unenforceable, that part will be limited or removed to the minimum extent necessary and the remaining parts will continue in effect.",
  ]),

  section("amendments", "Amendments", [
    "We may update these Terms from time to time. The version on our website on the date you confirm your booking applies to that booking. Updates to the website Terms apply to future bookings and use of the website from the date they are published. Changes to a confirmed booking require agreement or, where permitted, notice to you.",
  ]),

  section("contact-information", "Contact Information", [
    "If you have any questions about these Terms or about a booking, please contact the Karvaahh team.",
  ], [contactBlock()]),
]);

export const terms: LegalDocument = {
  slug: "terms-and-conditions",
  path: "/terms-and-conditions",
  shortTitle: "Terms & Conditions",
  title: "Terms & Conditions",
  headline: "Clear terms for a confident journey.",
  subtitle:
    "Important terms governing your use of Karvaahh services, travel bookings and experiences.",
  metaTitle: "Terms & Conditions | Karvaahh – Live to Travel",
  metaDescription:
    "Read the Terms & Conditions governing Karvaahh travel packages, flights, helicopter tours, adventure activities and travel services.",
  sections: termsSections,
  highlights: [
    {
      icon: "clipboard",
      title: "Before you book",
      items: [
        "Check names, dates and services in your confirmation.",
        "Make sure your passport, visas and permits are valid for the trip.",
        "Arrange travel insurance with medical and evacuation cover.",
        "Read supplier conditions in your quotation and booking confirmation.",
      ],
    },
    {
      icon: "compass",
      title: "Our role",
      text: "Depending on the service, Karvaahh may act as tour operator, travel agent, booking agent, facilitator, intermediary or reseller. Independent suppliers provide many services.",
    },
    {
      icon: "mountain",
      title: "Mountain realities",
      text: "Weather, safety and local authorities can change plans in the Himalaya. Safety decisions on the ground come first.",
    },
  ],
};
