import type { Metadata } from "next";
import BookingJourney from "@/components/activities/domestic-flights/everest/BookingJourney";
import Policies from "@/components/activities/domestic-flights/everest/Policies";
import ExperiencePage from "@/components/activities/experience/ExperiencePage";
import { resolveImages } from "@/components/activities/experience/resolve-images";
import { buildHeliTourMetadata } from "@/components/activities/experience/structured-data";
import GlobalConnections from "@/components/activities/flights/international/GlobalConnections";
import RouteDirectory from "@/components/activities/flights/international/RouteDirectory";
import { bookingJourney, globalConnections, internationalFlightsPage, policies, routeDirectory } from "@/data/flights/international-flights";

const tour = resolveImages(internationalFlightsPage);

export const metadata: Metadata = buildHeliTourMetadata(tour);

export default function Page() {
  return (
    <ExperiencePage
      tour={tour}
      slots={{
        routes: <RouteDirectory data={routeDirectory} />,
        connections: <GlobalConnections data={globalConnections} />,
        policies: <Policies data={policies} />,
        booking: <BookingJourney data={bookingJourney} />,
      }}
      slotNav={[
        { id: "routes", label: "Kathmandu Routes", before: "faqs" },
        { id: "connections", label: "Global Connections", after: "routes" },
        { id: "fares", label: "Fares", after: "connections" },
        { id: "documents", label: "Visa & Transit", after: "fares" },
        { id: "cancellation", label: "Refunds", after: "documents" },
      ]}
    />
  );
}
