import type { Metadata } from "next";
import ExperiencePage from "@/components/activities/experience/ExperiencePage";
import { resolveImages } from "@/components/activities/experience/resolve-images";
import { SITE_URL } from "@/components/activities/experience/site";
import { buildHeliTourMetadata, serializeJsonLd } from "@/components/activities/experience/structured-data";
import BookingJourney from "@/components/activities/domestic-flights/everest/BookingJourney";
import FareTable from "@/components/activities/domestic-flights/everest/FareTable";
import FlightDetails from "@/components/activities/domestic-flights/everest/FlightDetails";
import Operators from "@/components/activities/domestic-flights/everest/Operators";
import Policies from "@/components/activities/domestic-flights/everest/Policies";
import { everestFlightSections as s, everestScenicFlightPage } from "@/data/domestic-flights/everest-scenic-flights";
import { SEO_DEFAULTS, siteConfig } from "@/lib/site-config";

const tour = resolveImages(everestScenicFlightPage);

export const metadata: Metadata = buildHeliTourMetadata(tour);

/** Organization node; the template already emits BreadcrumbList, TouristTrip and FAQPage. */
const organization = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "@id": `${SITE_URL}/#organization`,
  name: SEO_DEFAULTS.organizationName,
  alternateName: siteConfig.siteTitle,
  url: SITE_URL,
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(organization) }} />
      <ExperiencePage
        tour={tour}
        slots={{
          details: <FlightDetails data={s.flightDetails} />,
          operators: <Operators data={s.operators} />,
          fares: <FareTable data={s.fares} />,
          cancellation: <Policies data={s.policies} />,
          booking: <BookingJourney data={s.bookingJourney} />,
        }}
        slotNav={[
          { id: "details", label: "Flight Details", after: "itinerary" },
          { id: "fares", label: "Fares", after: "details" },
          { id: "cancellation", label: "Cancellation", after: "inclusions" },
        ]}
      />
    </>
  );
}
