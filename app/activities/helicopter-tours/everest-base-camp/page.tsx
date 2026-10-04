import type { Metadata } from "next";
import ProductTourPage from "@/components/activities/helicopter-tours/shared/product/ProductTourPage";
import { buildHeliTourMetadata } from "@/components/activities/helicopter-tours/shared/structured-data";
import { everestBaseCampHelicopterTour } from "@/components/activities/helicopter-tours/everest-base-camp/data";

export const metadata: Metadata = buildHeliTourMetadata(everestBaseCampHelicopterTour);

export default function Page() {
  return <ProductTourPage tour={everestBaseCampHelicopterTour} />;
}
