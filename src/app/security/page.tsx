import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { Security } from "@/components/Security";

export const metadata: Metadata = {
  title: "Security · Hirintellix",
  description: "Integrity kept separate from Fit. Human decides. Attestations in progress.",
};

export default function SecurityPage() {
  return (
    <PageShell>
      <Security />
    </PageShell>
  );
}
