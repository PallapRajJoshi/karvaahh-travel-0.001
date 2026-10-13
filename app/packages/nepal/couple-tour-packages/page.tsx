import type { Metadata } from "next";
import { CoupleToursPage } from "@/components/packages/nepal/couple-tour-packages/CoupleToursPage";
import { buildMetadata } from "@/components/packages/nepal/couple-tour-packages/lib/seo";

export const metadata: Metadata = buildMetadata();

export default function Page() {
  return <CoupleToursPage />;
}
