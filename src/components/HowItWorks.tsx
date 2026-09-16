"use client";

import { motion } from "framer-motion";

const steps = [
  {
    n: "01",
    title: "Dossier",
    copy: "Role and resume in. Skills mapped, gaps named, a timed question plan—before anyone opens the calendar.",
  },
  {
    n: "02",
    title: "Round zero",
    copy: "Optional, consented chat or voice. Their words, not a score. Feeds the dossier before the scored loop.",
  },
  {
    n: "03",
    title: "Live interview",
    copy: "Default: a copilot beside your interviewer. Option: an AI avatar conducts the session. Same record either way.",
  },
  {
    n: "04",
    title: "Report",
    copy: "Fit, Trust, and Security with citations to the transcript. Claimed versus shown. A person still decides.",
  },
  {
    n: "05",
    title: "Handoff",
    copy: "Verified, mixed, or still open—carries to the next round so nothing is asked twice and nothing is dropped.",
  },
  {
    n: "06",
    title: "Compare",
    copy: "Finalists side by side. Every mark linked to a round. Unknowns stay unknown—not treated as weakness.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="reveal mb-10 max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-400">
          The interview loop
        </p>
        <h2 className="font-display mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          One agent for the middle: plan, sit in, verify.
        </h2>
        <p className="mt-3 text-neutral-600">
          Job boards and the ATS bring resumes in. Offers follow a yes. Hirintellix
          runs the record between those two points.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, index) => (
          <motion.article
            key={step.n}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25 }}
            className={`reveal rounded-2xl border border-black/10 bg-white p-5 shadow-sm reveal-${Math.min(index + 1, 4)}`}
          >
            <p className="text-xs font-medium text-neutral-400">{step.n}</p>
            <h3 className="font-display mt-2 text-lg font-semibold tracking-tight">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-neutral-600">{step.copy}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
