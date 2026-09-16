import type { Metadata } from "next";
import { AvatarOption } from "@/components/AvatarOption";
import { Features } from "@/components/Features";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Product · Hirintellix",
  description:
    "Cited Fit, Trust, and Security reports, ATS sync, and an optional avatar interviewer.",
};

export default function ProductPage() {
  return (
    <PageShell>
      <div className="mx-auto max-w-6xl px-4 pt-12 sm:px-6 lg:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-400">
          Product
        </p>
        <h1 className="font-display mt-3 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
          The interview record: plan, sit in, verify.
        </h1>
      </div>
      <Features />
      <AvatarOption />
    </PageShell>
  );
}
