import { LEGAL_LAST_UPDATED } from "./config";
import {
  callout,
  cards,
  contactBlock,
  defineSections,
  list,
  section,
} from "./builders";
import type { LegalDocument } from "./types";

/**
 * PRIVACY POLICY
 *
 * Draft for commercial use — to be reviewed by qualified Nepal legal counsel
 * before publication. Edit wording here; the UI renders it automatically.
 */
export const privacyPolicySections = defineSections([
  section("introduction", "Introduction", [
    "Karvaahh – Live to Travel (“Karvaahh”, “we”, “us” or “our”) arranges travel services including tours, pilgrimages, treks, flights, hotels, transport, helicopter services, activities and related assistance. To plan and deliver your journey we need to handle information about you and the people travelling with you.",
    "This Privacy Policy explains what personal information we collect, why we collect it, who we may share it with, how long we keep it and the choices you have. We have written it in plain language so that you can make informed decisions before sharing your details with us.",
  ]),

  section("scope", "Scope of This Policy", [
    "This policy applies to personal information we handle when you visit our website, make an enquiry, request a quotation, book or travel with us, contact our team by phone, e-mail, WhatsApp or other channels, or subscribe to our communications.",
    "It does not apply to websites, apps or services operated by other organisations that we may link to, or to the independent suppliers who deliver parts of your journey. Those organisations handle personal information under their own privacy policies.",
  ]),

  section("information-we-collect", "Information We Collect", [
    "The information we collect depends on how you interact with us and which services you ask us to arrange. In general it falls into the categories below, each explained in the sections that follow:",
  ], [
    list([
      "Information you give us directly",
      "Travel and booking information",
      "Passport and identity information",
      "Payment information",
      "Communication information",
      "Website usage information",
      "Device and technical information",
    ]),
  ]),

  section("information-you-provide", "Information Provided Directly by You", [
    "When you make an enquiry, request a quotation, create a booking or otherwise contact us, you may give us details such as:",
  ], [
    list([
      "Your name, title, date of birth and nationality",
      "Contact details such as e-mail address, telephone or WhatsApp number and postal address",
      "The names and details of the people travelling with you",
      "Your travel preferences, interests and special requests",
      "Dietary, accessibility or other assistance requirements you ask us to take into account",
    ]),
    callout(
      "info",
      "Information about other travellers",
      "If you give us personal information about other people (for example family members or colleagues), please make sure they know you are doing so and that you are entitled to share it with us for the purpose of arranging the trip.",
    ),
  ]),

  section("travel-booking-information", "Travel and Booking Information", [
    "To arrange and manage your travel we record details of the services you request or book, including destinations, travel dates, itineraries, flights, accommodation, transport, activities, permits, special occasions and the booking references issued by us or by suppliers.",
    "We may also keep records of quotations, confirmations, vouchers, changes, cancellations, refunds and any feedback or complaints relating to your booking.",
  ]),

  section("passport-identity", "Passport and Identity Information", [
    "Many travel services legally require verified identity details. Depending on your trip we may need to collect passport details (such as number, issue and expiry dates, and a copy of the photo page), visas or permits, national identity documents, photographs, and entry or exit documentation.",
    "We ask for this information only where it is reasonably necessary — for example to issue airline tickets, make hotel or permit applications, support visa applications or comply with requirements of authorities and suppliers. We encourage you not to send identity documents through unsecured channels and to use the method we recommend for your booking.",
  ]),

  section("payment-information", "Payment Information", [
    "When you pay us we may collect payment-related details such as the amount, date, method and reference of a payment, the name on the payment instrument, and bank or transfer confirmations.",
    "Where you pay through an online payment gateway or bank, your card or account details are generally entered on the payment provider’s own secure page and are handled by that provider under its terms. We do not ask you to send full card numbers or security codes by e-mail, message or social media.",
  ]),

  section("communication-information", "Communication Information", [
    "We keep records of our communications with you — including e-mails, messages, enquiry forms, call notes and, where applicable, WhatsApp or other chat conversations — so that we can respond accurately, manage your booking, resolve problems and improve our service.",
    "Where we record or monitor calls for training or quality purposes, we will tell you at the start of the call where required by applicable law.",
  ]),

  section("website-usage", "Website Usage Information", [
    "When you browse our website, information about your visit may be collected automatically, such as the pages you view, the links you select, the time and date of your visit, your approximate location derived from your IP address, and the website you came from.",
    "We use this information to keep the website secure, to understand which content is useful and to improve it. Optional analytics and marketing technologies are only used in line with your cookie choices, as described in our [Cookie Policy](/cookies).",
  ]),

  section("device-technical", "Device and Technical Information", [
    "We may collect technical information about the device you use to access our website, including your IP address, browser type and version, operating system, device type, screen settings, language preferences and diagnostic data such as error logs.",
    "This helps us deliver the site correctly on different devices, diagnose faults and protect the website against misuse.",
  ]),

  section("cookies-similar", "Cookies and Similar Technologies", [
    "Our website uses cookies and similar technologies such as local storage. Essential items are needed for the site and for remembering your cookie choices. Optional categories — analytics, marketing and preferences — are only activated in line with your consent choices.",
    "Full details, including how to change your choices at any time, are in our [Cookie Policy](/cookies).",
  ]),

  section("how-we-use-information", "How We Use Personal Information", [
    "We use personal information where reasonably necessary for the following purposes:",
  ], [
    list([
      "To respond to your enquiries and prepare quotations and itineraries",
      "To make, manage, change and confirm bookings on your behalf",
      "To arrange permits, transfers, tickets, accommodation and activities",
      "To communicate with you before, during and after your trip",
      "To take and process payments and issue refunds where applicable",
      "To provide customer support and handle complaints",
      "To keep our website, systems and customers secure",
      "To comply with legal, regulatory and supplier requirements",
      "To improve our services, content and website",
      "To send you marketing communications where you have asked for them or where the law otherwise permits",
    ]),
  ]),

  section("booking-processing", "Travel Booking Processing", [
    "To turn your request into confirmed travel we need to pass relevant details to the suppliers who deliver each part of your journey. We share only the information we reasonably consider necessary for the service concerned, and suppliers may in turn require further details directly from you.",
    "Because travel services are delivered by many different organisations, it is not possible to provide the booked service without sharing some personal information with them. If you prefer not to share information that a supplier requires, we may not be able to arrange that service for you.",
  ]),

  section("customer-support", "Communication and Customer Support", [
    "We use your contact details and booking information to send service messages such as confirmations, payment reminders, itinerary changes, travel documents, safety or disruption notices and responses to your questions.",
    "These service messages are part of delivering your booking and are not marketing. We may contact you through the channel you used to reach us, including telephone, e-mail or messaging apps.",
  ]),

  section("personalization", "Personalization", [
    "We may use what you tell us about your interests and past enquiries to suggest suitable destinations, experiences or packages, and to tailor the content and offers we show or send you.",
    "Where personalisation relies on optional cookies or similar technologies, we will use them only in line with your consent choices.",
  ]),

  section("marketing-communications", "Marketing Communications", [
    "With your consent, or where otherwise permitted by applicable law, we may send you newsletters, travel ideas, offers and updates by e-mail, messaging apps, SMS or other channels.",
    "You can opt out at any time using the unsubscribe link in a message or by contacting us. Opting out of marketing does not stop service messages about a booking you have made.",
  ]),

  section("analytics", "Analytics", [
    "We may use analytics tools to understand how visitors use our website, for example which pages are popular and where visitors leave. Where such tools are used, we aim to configure them to limit the personal information involved and, where applicable, they will run only after you have given consent through our cookie controls.",
    "The [Cookie Policy](/cookies) lists the cookies and similar technologies that are actually in use on our website.",
  ]),

  section("fraud-prevention", "Fraud Prevention", [
    "We may use personal and technical information to detect, investigate and prevent fraud, unauthorised access, misuse of our website or services, payment abuse and other activity that could harm you, us or our suppliers.",
    "This may include verifying identities or payment details and sharing relevant information with payment providers, banks, suppliers or authorities where reasonably necessary.",
  ]),

  section("legal-compliance", "Legal and Regulatory Compliance", [
    "We may process and disclose personal information where reasonably necessary to comply with applicable laws, regulations, court orders or lawful requests from authorities, to establish, exercise or defend legal claims, and to maintain records we are required to keep, such as accounting and tax records.",
  ]),

  section("sharing-service-providers", "Sharing Information With Service Providers", [
    "Karvaahh does not run every part of your journey ourselves. We may need to share relevant information with the independent suppliers and service providers who deliver or support the services you book. We share information that is reasonably necessary for the specific service, and we do not sell your personal information.",
    "We may also use professional service providers for functions such as website hosting, IT support, communications, payment processing, accounting and professional advice. These providers may access personal information only to perform services for us or as the law allows.",
  ], [
    cards(
      [
        { icon: "plane", title: "Airlines", text: "Passenger names, dates of birth and passport details for ticketing." },
        { icon: "hotel", title: "Hotels", text: "Guest names, arrival details and special requests." },
        { icon: "helicopter", title: "Helicopter operators", text: "Passenger names, identity details and, where required, weight for safety planning." },
        { icon: "mountain", title: "Trekking and permits", text: "Identity details for permits and registrations." },
        { icon: "clipboard", title: "Visa providers", text: "Passport and application information." },
        { icon: "shield", title: "Authorities", text: "Travel documentation where legally required." },
      ],
      "Why we share information with suppliers",
    ),
  ]),

  section("airlines", "Airlines", [
    "To issue and manage air tickets, airlines and their ticketing or distribution systems require passenger information such as full names as shown on passports, dates of birth, nationality, passport details, contact details and, in some cases, special service requests.",
    "Airlines and ticketing providers handle this information under their own policies and under aviation and border-security rules that may require them to pass it to authorities.",
  ]),

  section("hotels", "Hotels", [
    "Hotels, lodges, guesthouses and similar accommodation providers need guest names, contact details, arrival and departure information and, where local rules require, identity documents. We may also pass on dietary, accessibility or other requests you ask us to communicate.",
  ]),

  section("helicopter-operators", "Helicopter Operators", [
    "Helicopter operators may require passenger names, identity details, contact details, nationality, emergency contacts and, because aircraft loading and safety planning depend on it, passenger and baggage weight. They may also ask about medical fitness for flights at altitude.",
    "This information is used for flight planning, safety, regulatory and operational purposes and is handled by the operator under its own policies and applicable aviation requirements.",
  ]),

  section("transportation-providers", "Transportation Providers", [
    "Drivers, vehicle operators, transfer companies, railway and bus providers and cruise companies may receive passenger names, contact details, pick-up and drop-off information, flight or travel details and, where applicable, identity details needed for boarding or manifests.",
  ]),

  section("adventure-operators", "Trekking and Adventure Operators", [
    "Trekking agencies, guides, rafting, paragliding and other activity operators may need your name, identity details for permits and registrations, emergency contacts, relevant health or fitness declarations, and physical information such as age, height or weight where it is needed for safety or equipment.",
    "Trekking and national park permits may require identity details to be submitted to the issuing authority.",
  ]),

  section("visa-providers", "Visa/Immigration Service Providers", [
    "If you ask us to assist with visas or travel authorisations, we may share passport details, photographs, travel plans, accommodation details and supporting documents with visa service providers, consular offices or immigration authorities. Applications are decided by the relevant authority, not by Karvaahh.",
  ]),

  section("payment-providers", "Payment Providers", [
    "We may share payment details and booking references with payment gateways, banks, card networks and other financial institutions to take payments, issue refunds, prevent fraud and meet legal obligations. These organisations handle your payment information under their own terms and policies.",
  ]),

  section("government-authorities", "Government Authorities", [
    "Travel often involves government requirements. Immigration, customs, security, aviation, tourism, national park and other authorities may require travel documentation and personal information, and we may disclose information to them where we are legally required or reasonably need to do so to fulfil your booking.",
  ]),

  section("international-transfers", "International Data Transfers", [
    "Because your journey and our suppliers may span several countries, your information may be sent to, stored in or accessed from countries other than the one where you live — including countries whose data protection laws differ from those in your home country.",
    "Where we transfer personal information internationally we take reasonable steps to ensure it remains protected, such as limiting what we share to what is necessary and asking providers to apply appropriate safeguards. For transfers that are a necessary part of delivering your booking — for example sending passenger details to an overseas airline or hotel — the recipient’s own policies and local laws will also apply.",
  ]),

  section("data-security", "Data Security", [
    "We use reasonable administrative, technical and organizational safeguards designed to protect personal information against unauthorised access, loss, misuse or alteration. These include restricting access to people who need it and using secure channels where reasonably practicable.",
    "No method of transmission over the internet or method of electronic storage is completely secure, and we cannot guarantee absolute security. Please take care when sending sensitive documents and let us know straight away if you suspect your information has been misused.",
  ]),

  section("data-retention", "Data Retention", [
    "We keep personal information for as long as reasonably necessary for the purposes described in this policy — for example to manage your booking, handle later queries or claims, and meet accounting, tax and legal requirements. Retention periods vary depending on the type of information and the purpose.",
    "When information is no longer needed, we take reasonable steps to delete it or make it anonymous, unless we are required or permitted by law to keep it longer.",
  ]),

  section("childrens-information", "Children’s Information", [
    "Our website is intended for adults. When a booking includes children or minors, we collect their details from a parent or legal guardian, or from the person making the booking, and only as needed to arrange travel.",
    "We do not knowingly collect personal information directly from children through our website for marketing purposes. If you believe a child has given us personal information, please contact us and we will take reasonable steps to address it.",
  ]),

  section("user-rights", "User Rights", [
    "Subject to applicable law, you may have rights in relation to your personal information. Depending on where you live these may include the right to:",
  ], [
    list([
      "Ask what personal information we hold about you and request a copy",
      "Ask us to correct information that is inaccurate or incomplete",
      "Ask us to delete information, where we no longer need it or are not required to keep it",
      "Object to or ask us to restrict certain uses of your information",
      "Withdraw consent you have given, without affecting processing already carried out",
      "Ask questions or make a complaint about how we handle your information",
    ]),
    callout(
      "info",
      "How to make a request",
      "Contact us using the details below. We may need to verify your identity first, and some information we are legally required to keep or that suppliers hold independently may not be something we can change or delete. We will explain if that is the case.",
    ),
  ]),

  section("marketing-preferences", "Marketing Preferences", [
    "You can change your marketing preferences at any time by using the unsubscribe or preference link included in our messages, by replying to ask us to stop, or by contacting us. You can review or change your cookie preferences at any time through the cookie settings on our website.",
  ]),

  section("third-party-websites", "Third-Party Websites", [
    "Our website may contain links to or embed content from third-party websites, maps, social platforms or booking services. We do not control these sites and are not responsible for their content or privacy practices. We encourage you to read the privacy policy of any site you visit.",
  ]),

  section("policy-changes", "Changes to Privacy Policy", [
    `We may update this Privacy Policy from time to time to reflect changes in our services, technology or legal requirements. The date at the top of this page shows when it was last updated (currently ${LEGAL_LAST_UPDATED}). Where changes are significant we will take reasonable steps to bring them to your attention.`,
    "Continuing to use our website or services after an update takes effect means the updated policy applies, subject to any rights you have under applicable law.",
  ]),

  section("contact-information", "Contact Information", [
    "If you have questions about this Privacy Policy, want to exercise your rights or wish to raise a concern about how your information is handled, please contact the Karvaahh team.",
  ], [contactBlock()]),
]);

export const privacyPolicy: LegalDocument = {
  slug: "privacy-policy",
  path: "/privacy-policy",
  shortTitle: "Privacy Policy",
  title: "Privacy Policy",
  headline: "Your privacy matters to us.",
  subtitle:
    "How Karvaahh collects, uses, protects and manages your personal information.",
  metaTitle: "Privacy Policy | Karvaahh – Live to Travel",
  metaDescription:
    "Read Karvaahh's Privacy Policy to understand how we collect, use, protect and manage customer information.",
  sections: privacyPolicySections,
  highlights: [
    {
      icon: "shield",
      title: "The short version",
      items: [
        "We collect what we need to plan and deliver your journey.",
        "We share details with suppliers only where a service requires it.",
        "We do not sell your personal information.",
        "You can ask to access, correct or delete your information, subject to law.",
      ],
    },
  ],
};
