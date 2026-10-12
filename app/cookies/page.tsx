import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { legalDocuments } from "@/lib/legal";
import { buildLegalMetadata } from "@/lib/legal/metadata";

const doc = legalDocuments["cookies"];

export const metadata: Metadata = buildLegalMetadata(doc);

export default function Page() {
  return <LegalPage doc={doc} />;
}
