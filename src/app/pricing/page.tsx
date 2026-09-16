import type { Metadata } from "next";
import { Faq } from "@/components/Faq";
import { PageShell } from "@/components/PageShell";
import { Pricing } from "@/components/Pricing";

export const metadata: Metadata = {
  title: "Pricing · Hirintellix",
  description: "Startup, Growth, and Enterprise plans for Hirintellix.",
};

export default function PricingPage() {
  return (
    <PageShell>
      <Pricing />
      <Faq />
    </PageShell>
  );
}
