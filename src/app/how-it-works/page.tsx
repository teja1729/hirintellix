import type { Metadata } from "next";
import { HowItWorks } from "@/components/HowItWorks";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "How it works · Hirintellix",
  description:
    "Dossier, round zero, live interview, cited report, handoff, and compare.",
};

export default function HowItWorksPage() {
  return (
    <PageShell>
      <HowItWorks />
    </PageShell>
  );
}
