import {
  callout,
  cards,
  contactBlock,
  defineSections,
  list,
  matrix,
  para,
  section,
  sub,
} from "./builders";
import type { LegalDocument, MatrixRow } from "./types";

/**
 * CANCELLATION & REFUND POLICY
 *
 * Draft for commercial use — to be reviewed by qualified Nepal legal counsel
 * before publication.
 *
 * Deliberately contains NO universal cancellation percentages. Cancellation
 * terms depend on the service and supplier, and are confirmed per booking.
 */

/** Rows of the reusable cancellation matrix. Edit here to update the table. */
export const cancellationMatrixRows: MatrixRow[] = [
  {
    service: "Domestic package",
    typical: "As per booking confirmation",
    final: "Booking-specific",
  },
  {
    service: "International package",
    typical: "Supplier dependent",
    final: "Booking-specific",
  },
  {
    service: "Air ticket",
    typical: "Airline fare rules",
    final: "Ticket-specific",
  },
  {
    service: "Hotel",
    typical: "Hotel cancellation rules",
    final: "Hotel-specific",
  },
  {
    service: "Helicopter",
    typical: "Operator policy",
    final: "Sector-specific",
  },
  {
    service: "Adventure",
    typical: "Activity operator policy",
    final: "Activity-specific",
  },
  {
    service: "Visa",
    typical: "Usually non-refundable",
    final: "Application-specific",
  },
  {
    service: "Permit",
    typical: "Subject to authority rules",
    final: "Permit-specific",
  },
];

export const cancellationSections = defineSections([
  section("overview", "Overview", [
    "Travel is made up of many separate services, each with its own rules. For that reason Karvaahh does not apply a single cancellation percentage to every booking. Your cancellation and refund terms are set out in your quotation and booking confirmation, together with the conditions of the suppliers involved.",
    "This page explains the principles that apply, so that you know what to expect and what to check before you book.",
  ], [
    callout(
      "booking",
      "Booking-specific conditions",
      "Your quotation and booking confirmation may contain specific cancellation and supplier conditions that apply to your trip. Where they differ from this general policy, the booking-specific conditions apply.",
    ),
  ]),

  section("what-determines", "What Your Cancellation Terms Depend On", [
    "Because each booking is different, the cancellation terms that apply to you depend on a combination of factors, including:",
  ], [
    cards(
      [
        { icon: "clipboard", title: "Package type", text: "Domestic, international, customised, pilgrimage, trekking or other." },
        { icon: "users", title: "Supplier", text: "Each supplier sets its own conditions and charges." },
        { icon: "plane", title: "Airline", text: "Fare rules and ticket type decide changes and refunds." },
        { icon: "hotel", title: "Hotel", text: "Rate type and cancellation windows set by the property." },
        { icon: "helicopter", title: "Helicopter operator", text: "Operator policy and sector-specific conditions." },
        { icon: "mountain", title: "Adventure operator", text: "Activity operator policy and safety conditions." },
        { icon: "compass", title: "Cruise company", text: "Cruise line terms and cabin conditions." },
        { icon: "check", title: "Permit and visa", text: "Authority rules; often non-refundable once applied." },
        { icon: "calendar", title: "Travel date", text: "How close to departure the change is requested." },
        { icon: "refund", title: "Booking class and rate", text: "Promotional and non-refundable rates carry stricter terms." },
      ],
    ),
  ]),

  section("matrix", "Cancellation Overview by Service", [
    "The table below shows how cancellation generally works for each type of service. It is a guide to where the rules come from, not a promise of any particular refund. The final policy for your booking is the one in your confirmation.",
  ], [
    matrix("Cancellation overview by service type", cancellationMatrixRows),
    callout(
      "info",
      "No fixed percentages",
      "Percentages or time windows quoted in a specific quotation apply to that quotation only. They should not be read as a general guarantee for other services or bookings.",
    ),
  ]),

  section("customer-cancellation", "Customer Cancellation", [
    "If you need to cancel all or part of a booking, please tell us in writing as soon as possible, quoting your booking reference. The date we receive your written request is generally the date used to apply the cancellation terms in your booking.",
    "Cancellation charges may include supplier charges (which we cannot waive), amounts already paid to or committed with suppliers, non-refundable deposits and, where stated in your booking, our own service charges. Some services cannot be cancelled once confirmed.",
  ]),

  section("date-change", "Date Changes and Amendments", [
    "Changes to dates, names, routes or services depend on availability and on supplier rules, and may be charged or may not be possible. A date change can be treated by a supplier as a cancellation and a new booking, with prices and conditions of the new dates applying.",
    "Please contact us as early as you can. We will tell you what is possible and the costs involved before making any change on your behalf.",
  ]),

  section("partial-cancellation", "Partial Cancellation", [
    "If some travellers or some services in a booking are cancelled, the remaining travellers or services may be affected — for example, shared-room supplements, change in group-based rates or minimum-group conditions may apply. Charges for the cancelled part are determined by the conditions of the services concerned.",
  ]),

  section("no-show", "No-Show", [
    "If you do not use a confirmed service — for example you miss a flight, transfer, helicopter sector, activity or departure — and the reason is not caused by Karvaahh or the supplier, the service is treated as a no-show. No-show services are generally non-refundable, and airlines and other suppliers may cancel onward services as a result.",
  ]),

  section("early-return", "Early Return", [
    "If you end your trip early or leave part of it unused for any reason, the unused services are generally non-refundable. Where a supplier is willing to provide a refund for unused services, we will pass it on after deducting applicable charges.",
  ]),

  section("supplier-cancellation", "Supplier Cancellation", [
    "Occasionally a supplier may cancel or significantly change a service. If that happens we will inform you as soon as reasonably possible and use reasonable efforts to offer a suitable alternative. If no suitable alternative is available or acceptable, any refund will be based on what the supplier returns and the terms of your booking.",
  ]),

  section("weather-cancellation", "Weather Cancellation", [
    "Weather in mountain regions and during monsoon and winter seasons can make flights, helicopter operations, roads, trails and activities unsafe. Where a service is delayed, shortened or cancelled for weather, we will use reasonable efforts to rearrange it for another time or offer an alternative.",
    "Whether a refund applies depends on the supplier’s policy, the nature of the service and costs already incurred. Services that have been partly or fully provided, or that a supplier has treated as operated, may not be refundable.",
  ], [
    callout(
      "important",
      "Important",
      "Helicopter operations are subject to weather, safety, aircraft availability and pilot/operator decisions. Weather-related delays or cancellations do not automatically entitle you to a refund.",
    ),
  ]),

  section("force-majeure", "Force Majeure", [
    "Events beyond reasonable control — such as natural disasters, landslides, floods, government or border restrictions, airport closures, strikes, civil disturbance, war, terrorism or public health emergencies — can prevent or disrupt travel. In such cases we will use reasonable efforts to inform you, offer alternatives and recover refundable amounts from suppliers.",
    "Amounts that suppliers keep or have already incurred may not be recoverable. See the [Terms & Conditions](/terms-and-conditions) for the full Force Majeure provisions.",
  ]),

  section("refund-principle", "How Refunds Are Calculated", [
    "Where a refund is applicable, the refundable amount will be determined after applying the cancellation terms and supplier charges applicable to the booking.",
  ], [
    list([
      "We start with the amount you paid for the affected services.",
      "We deduct supplier cancellation charges and any non-refundable amounts.",
      "We deduct any service charges that were stated in your booking terms.",
      "The remaining amount, if any, is refunded using the method described below.",
    ], true),
  ]),

  section("refund-processing", "Refund Processing", [
    "Refund processing time may depend on the relevant supplier, bank, payment gateway and financial institution. We start processing an approved refund as soon as we have received the funds from the supplier (where applicable) and the details we need from you, and we will keep you informed of progress.",
    "Refunds are generally made using the original payment method where possible, or another method we agree with you.",
  ]),

  section("gateway-bank-charges", "Payment Gateway and Bank Charges", [
    "Payment gateway fees, bank charges, card fees and currency-conversion costs may be charged by the payment providers. Where these cannot be recovered, they may be deducted from the refund. Exchange-rate changes between payment and refund may also affect the amount you receive in your own currency.",
  ]),

  section("non-refundable", "Non-Refundable Services", [
    "Some services are non-refundable or have limited refundability, depending on the supplier and the rate booked. Examples may include:",
  ], [
    list([
      "Promotional, discounted or non-refundable air and hotel rates",
      "Visa and permit fees once an application has been made",
      "Deposits and charters paid to suppliers who do not refund them",
      "Services already used or partly used",
      "Special-event, seasonal or peak-period bookings with strict supplier terms",
      "Service charges that are stated as non-refundable in your booking",
    ]),
    para(
      "Your quotation and booking confirmation will identify, where reasonably possible, services that are non-refundable. If it is unclear, please ask us before you pay.",
    ),
  ]),

  section("how-to-cancel", "How to Request a Cancellation or Change", [
    "To request a cancellation, amendment or refund, please contact us in writing with your booking reference, traveller names, the services involved and your request. We will review the applicable conditions and explain your options and any charges before you decide.",
  ], [
    sub("Before you contact us", [], [
      "Have your booking reference and confirmation ready.",
      "Check the conditions in your booking confirmation.",
      "If you have travel insurance, check whether you need to notify your insurer first.",
    ]),
  ]),

  section("contact-information", "Contact Information", [
    "If you have questions about cancellations or refunds, please contact the Karvaahh team.",
  ], [contactBlock()]),
]);

export const cancellation: LegalDocument = {
  slug: "cancellation-policy",
  path: "/cancellation-policy",
  shortTitle: "Cancellation Policy",
  title: "Cancellation & Refund Policy",
  headline: "Know your options before you travel.",
  subtitle: "Clear cancellation, amendment and refund conditions for your journey.",
  metaTitle: "Cancellation & Refund Policy | Karvaahh – Live to Travel",
  metaDescription:
    "Understand cancellation, amendment and refund conditions for Karvaahh travel packages, flights, hotels, helicopter services and activities.",
  sections: cancellationSections,
  highlights: [
    {
      icon: "refund",
      title: "Cancellation overview",
      items: [
        "Terms depend on the service, supplier and rate you booked.",
        "Your booking confirmation sets the final conditions.",
        "Refunds are calculated after supplier charges and non-refundable amounts.",
        "Processing time depends on suppliers, banks and payment providers.",
      ],
    },
    {
      icon: "calendar",
      title: "Change of plans?",
      text: "Tell us as early as you can. Earlier notice usually gives more options, and many suppliers apply stricter terms closer to travel.",
    },
  ],
};
