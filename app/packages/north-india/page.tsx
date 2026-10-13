import type { Metadata } from "next";
import { NorthIndiaPage } from "@/components/packages/north-india/NorthIndiaPage";
import { buildMetadata } from "@/components/packages/north-india/lib/seo";

export const metadata: Metadata = buildMetadata();

export default function Page() {
  return <NorthIndiaPage />;
}
