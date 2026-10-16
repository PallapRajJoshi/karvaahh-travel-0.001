import type { Metadata } from "next";
import ExperiencePage from "@/components/activities/experience/ExperiencePage";
import { resolveImages } from "@/components/activities/experience/resolve-images";
import { buildHeliTourMetadata } from "@/components/activities/experience/structured-data";
import DisruptionGuide from "@/components/activities/domestic-flights/india/DisruptionGuide";
import IndiaNepalFlights from "@/components/activities/domestic-flights/india/IndiaNepalFlights";
import PassengerInfo from "@/components/activities/domestic-flights/india/PassengerInfo";
import RouteDirectory from "@/components/activities/domestic-flights/india/RouteDirectory";
import {
  disruptions,
  domesticIndiaFlightsPage,
  indiaNepal,
  passengerInfo,
  routeDirectory,
} from "@/data/domestic-flights/domestic-india-flights";

const tour = resolveImages(domesticIndiaFlightsPage);

export const metadata: Metadata = buildHeliTourMetadata(tour);

export default function Page() {
  return (
    <ExperiencePage
      tour={tour}
      slots={{
        routes: <RouteDirectory data={routeDirectory} />,
        "india-nepal": <IndiaNepalFlights data={indiaNepal} image={tour.cta.image} />,
        fares: <PassengerInfo data={passengerInfo} />,
        delays: <DisruptionGuide data={disruptions} />,
      }}
      slotNav={[
        { id: "routes", label: "Routes", before: "faqs" },
        { id: "india-nepal", label: "India–Nepal", before: "faqs" },
        { id: "fares", label: "Fares & ID", before: "faqs" },
        { id: "delays", label: "Delays", before: "faqs" },
      ]}
    />
  );
}
