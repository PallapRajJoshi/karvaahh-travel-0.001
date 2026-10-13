import type { Metadata } from "next";
import { BaseCampTreksPage } from "@/components/packages/nepal/base-camp-treks/BaseCampTreksPage";
import { buildMetadata } from "@/components/packages/nepal/base-camp-treks/lib/seo";

export const metadata: Metadata = buildMetadata();

export default function Page() {
  return <BaseCampTreksPage />;
}
