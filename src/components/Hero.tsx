"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-12 pt-10 sm:px-6 sm:pt-16 lg:px-8 lg:pt-20">
      <div className="hero-grid pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-end gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-medium text-neutral-600 shadow-sm">
              Hiring intelligence for the interview process
            </span>
            <h1 className="font-display max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-neutral-950 sm:text-5xl lg:text-[56px]">
              Your ATS runs the pipeline.
              <br />
              Hirintellix runs the interview.
            </h1>
            <p className="mt-5 max-w-lg text-[15px] leading-7 text-neutral-600 sm:text-base">
              Fit, Trust, and Security scores with evidence. A person still makes
              the hire.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-950 px-6 py-3 text-sm font-medium text-white"
                >
                  Sign up
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/signin"
                  className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-medium text-neutral-900"
                >
                  Sign in
                </Link>
              </motion.div>
            </div>
          </div>

          <div className="reveal rounded-2xl border border-black/10 bg-white/70 p-5 shadow-sm backdrop-blur">
            <p className="text-xs font-medium uppercase tracking-wide text-neutral-400">
              One record, three scores
            </p>
            <div className="mt-4 grid grid-cols-1 gap-3">
              {[
                ["Fit", "Role match from what was actually covered"],
                ["Trust", "Resume claims checked against what was said"],
                ["Security", "Integrity signals, kept separate from Fit"],
              ].map(([stat, label]) => (
                <div
                  key={stat}
                  className="rounded-xl border border-black/10 bg-white px-4 py-3"
                >
                  <p className="font-display text-lg font-semibold tracking-tight">
                    {stat}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-neutral-500">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
