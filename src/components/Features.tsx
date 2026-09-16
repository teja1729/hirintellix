"use client";

import { motion } from "framer-motion";
import { Eye, Link2, Workflow } from "lucide-react";

const transcript = [
  { who: "Candidate", text: "We used stored procedures for reporting, not in the public repo." },
  { who: "Interviewer", text: "Walk through one query that would have failed without that." },
  { who: "Candidate", text: "The temp-table path on the nightly rollup—timeouts dropped after we indexed it." },
];

const scores = [
  { label: "Fit · PostgreSQL", score: "Shown 8/10", note: "Cited: nightly rollup, indexing" },
  { label: "Trust · resume claim", score: "Mixed", note: "Claimed stored procedures; no public evidence" },
  { label: "Security · integrity", score: "Clear", note: "Recorded separately; not in Fit" },
];

const ats = ["Greenhouse", "Lever", "Workday"];

export function Features() {
  return (
    <>
      <section id="product" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-400">
            Post-call report
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
            Transcript in one pane. Cited scores in the other.
          </h2>
          <p className="mt-3 text-neutral-600">
            Every Fit and Trust mark traces to something the candidate wrote, said, or
            did. Unknown stays unknown—not weaker.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <motion.div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm font-semibold">Live transcript</p>
              <span className="inline-flex items-center gap-1 rounded-full bg-neutral-950 px-2.5 py-1 text-[11px] text-white">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                Recorded
              </span>
            </div>
            <div className="space-y-3">
              {transcript.map((line) => (
                <div
                  key={line.text}
                  className={`max-w-[92%] rounded-2xl px-3.5 py-2.5 text-sm leading-6 ${
                    line.who === "Interviewer"
                      ? "bg-neutral-100 text-neutral-800"
                      : "ml-auto bg-neutral-950 text-white"
                  }`}
                >
                  <p className="mb-1 text-[10px] font-medium uppercase tracking-wide opacity-60">
                    {line.who}
                  </p>
                  {line.text}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div className="rounded-2xl border border-black/10 bg-neutral-950 p-5 text-white shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm font-semibold">Cited scorecard</p>
              <Eye className="h-4 w-4 text-white/50" />
            </div>
            <div className="space-y-4">
              {scores.map((row) => (
                <div key={row.label} className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <div className="flex items-center justify-between text-sm">
                    <span>{row.label}</span>
                    <span className="font-semibold text-emerald-300">{row.score}</span>
                  </div>
                  <p className="mt-1 text-xs text-white/50">{row.note}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white/60 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-400">
                Workflows
              </p>
              <h2 className="font-display mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                The ATS still owns the pipeline.
              </h2>
              <p className="mt-3 max-w-md text-neutral-600">
                Sync scorecards, recordings, and integrity notes into Greenhouse,
                Lever, or Workday. Hirintellix does not replace sourcing or offers.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {ats.map((name) => (
                  <span
                    key={name}
                    className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs font-medium text-neutral-700"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-black/10 bg-[#F9F9FA] p-6">
              <div className="flex items-center justify-between gap-3">
                <div className="rounded-2xl border border-black/10 bg-neutral-950 px-4 py-3 text-sm font-medium text-white">
                  Hirintellix
                </div>
                <div className="relative flex min-h-12 flex-1 items-center">
                  <div className="h-px w-full border-t border-dashed border-neutral-300" />
                  <motion.span
                    className="absolute top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.8)]"
                    animate={{ left: ["0%", "92%", "0%"] }}
                    transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <Link2 className="absolute left-1/2 h-4 w-4 -translate-x-1/2 text-neutral-400" />
                </div>
                <div className="flex flex-col gap-2">
                  {ats.map((name, index) => (
                    <motion.div
                      key={name}
                      animate={{ opacity: [0.45, 1, 0.45] }}
                      transition={{ duration: 2.4, repeat: Infinity, delay: index * 0.35 }}
                      className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs font-medium"
                    >
                      {name}
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="mt-6 flex items-center gap-2 text-sm text-neutral-500">
                <Workflow className="h-4 w-4" />
                Stage changes and cited scorecards stay in sync.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
