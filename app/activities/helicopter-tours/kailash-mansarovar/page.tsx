import type { Metadata } from "next";
import ProductTourPage from "@/components/activities/helicopter-tours/shared/product/ProductTourPage";
import { buildHeliTourMetadata } from "@/components/activities/helicopter-tours/shared/structured-data";
import { kailashMansarovarHelicopterTour } from "@/components/activities/helicopter-tours/kailash-mansarovar/data";

export const metadata: Metadata = buildHeliTourMetadata(kailashMansarovarHelicopterTour);

export default function Page() {
  return <ProductTourPage tour={kailashMansarovarHelicopterTour} />;
}
