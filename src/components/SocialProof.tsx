"use client";

import { ShieldCheck } from "lucide-react";

const marks = [
  "Human decides",
  "Integrity kept separate",
  "Candidate consent",
  "English today",
];

export function SocialProof() {
  return (
    <section className="border-y border-black/10 bg-white/50 py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-medium uppercase tracking-[0.18em] text-neutral-400">
          Evidence for your decision, not a decision for you
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          {marks.map((badge) => (
            <span
              key={badge}
              className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs font-medium text-neutral-600"
            >
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
