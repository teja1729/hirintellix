"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { InterviewSandbox, type ProductTab } from "./InterviewSandbox";

const tabs: { id: ProductTab; label: string }[] = [
  { id: "interviewer", label: "Avatar mode" },
  { id: "eval", label: "Live scores" },
  { id: "api", label: "Handoff API" },
];

export function AvatarOption() {
  const [activeTab, setActiveTab] = useState<ProductTab>("interviewer");

  return (
    <section id="avatar" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-8 max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-400">
          Optional USP
        </p>
        <h2 className="font-display mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Need a 24/7 interviewer? Turn on the avatar.
        </h2>
        <p className="mt-3 text-neutral-600">
          Default is a copilot beside your panel. Avatar mode runs the same Fit,
          Trust, and Security record when you want a speaking interviewer on the
          loop.
        </p>
      </div>

      <div className="mb-3 flex justify-center">
        <div className="inline-flex max-w-full flex-wrap items-center justify-center gap-1 rounded-full border border-black/10 bg-neutral-100/80 p-1 sm:flex-nowrap">
          {tabs.map((tab) => {
            const selected = tab.id === activeTab;
            return (
              <motion.button
                key={tab.id}
                type="button"
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveTab(tab.id)}
                className={`relative shrink-0 rounded-full px-4 py-2 text-sm font-medium ${
                  selected ? "text-neutral-950" : "text-neutral-500 hover:text-neutral-800"
                }`}
              >
                {selected ? (
                  <motion.span
                    layoutId="avatar-tab"
                    className="absolute inset-0 rounded-full bg-white shadow-sm"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                ) : null}
                <span className="relative z-10 inline-flex items-center gap-2">
                  {selected ? (
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    </span>
                  ) : null}
                  {tab.label}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>

      <InterviewSandbox activeTab={activeTab} />
    </section>
  );
}
