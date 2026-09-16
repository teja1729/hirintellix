"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MicOff, Pause, Play, Sparkles, Zap } from "lucide-react";
import { AvatarStage } from "./AvatarStage";
import { useSimulatedAmplitude } from "@/hooks/useSpeechAmplitude";
import {
  INTERVIEWER,
  getInterviewRole,
  interviewRoles,
  type InterviewRoleId,
} from "@/lib/interview";

export type ProductTab = "interviewer" | "eval" | "api";

const bars = Array.from({ length: 36 }, (_, i) => i);

export function InterviewSandbox({ activeTab }: { activeTab: ProductTab }) {
  const [roleId, setRoleId] = useState<InterviewRoleId>("frontend");
  const [playing, setPlaying] = useState(true);
  const role = getInterviewRole(roleId);
  const amplitude = useSimulatedAmplitude(playing);

  const apiSnippet = useMemo(
    () => `POST /v1/interviews
{
  "role": "${role.label}",
  "mode": "realtime",
  "avatar": "maya-staff-v1",
  "rubric": "staff-frontend-v3"
}`,
    [role.label],
  );

  return (
    <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-neutral-950 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.45)]">
      <div className="pointer-events-none absolute -left-24 top-10 h-56 w-56 rounded-full bg-emerald-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-sky-500/20 blur-3xl" />

      <div className="relative flex items-center justify-between border-b border-white/10 px-4 py-3 sm:px-5">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          <span className="ml-3 text-xs font-medium text-white/50">
            Optional avatar preview
          </span>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-white/80">
          <Zap className="h-3 w-3 text-amber-300" />
          Optional avatar mode
        </div>
      </div>

      <div className="relative grid gap-4 p-4 sm:p-5 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <motion.button
                type="button"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setPlaying((v) => !v)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-neutral-950 shadow-lg shadow-black/30"
                aria-label={playing ? "Pause sample audio" : "Play sample audio"}
              >
                {playing ? (
                  <Pause className="h-4 w-4 fill-current" />
                ) : (
                  <Play className="ml-0.5 h-4 w-4 fill-current" />
                )}
              </motion.button>
              <div>
                <p className="text-sm font-medium text-white">{INTERVIEWER.label}</p>
                <p className="text-xs text-white/50">Optional mode · {role.label}</p>
              </div>
            </div>
            <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-white/70">
              You’re muted in preview
            </span>
          </div>

          <div className="relative mb-4 flex min-h-[300px] items-center justify-center rounded-2xl border border-white/10 bg-black/35 py-6">
            <AvatarStage
              speaking={playing}
              amplitude={amplitude}
              label={INTERVIEWER.label}
            />
            <div className="absolute bottom-3 right-3 w-24 overflow-hidden rounded-xl border border-white/15 bg-neutral-900/90 p-2">
              <div className="mb-1 flex h-12 items-center justify-center rounded-lg bg-white/5">
                <MicOff className="h-4 w-4 text-white/45" />
              </div>
              <p className="text-center text-[10px] text-white/55">You</p>
            </div>
          </div>

          <div className="mb-4 rounded-xl border border-white/10 bg-black/25 px-3 py-2.5">
            <p className="mb-1 text-[11px] uppercase tracking-wide text-white/40">
              Caption
            </p>
            <p className="text-sm leading-6 text-white/90">{role.question}</p>
          </div>

          <div className="mb-4 flex h-14 items-end justify-between gap-[3px] rounded-xl bg-black/30 px-3 py-2">
            {bars.map((bar) => (
              <motion.span
                key={bar}
                className="w-full max-w-[6px] rounded-full bg-gradient-to-t from-emerald-500 to-sky-300"
                initial={false}
                animate={
                  playing
                    ? {
                        height: [
                          8 + (bar % 5) * 4,
                          16 + ((bar * 7) % 22),
                          10 + (bar % 7) * 3,
                        ],
                      }
                    : { height: 8 + (bar % 6) * 2 }
                }
                transition={{
                  duration: playing ? 0.7 + (bar % 5) * 0.08 : 0.25,
                  repeat: playing ? Infinity : 0,
                  repeatType: "mirror",
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          <div className="mb-4 flex flex-wrap gap-2">
            {interviewRoles.map((item) => (
              <motion.button
                key={item.id}
                type="button"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setRoleId(item.id)}
                className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                  roleId === item.id
                    ? "bg-white text-neutral-950"
                    : "border border-white/10 bg-white/5 text-white/70 hover:bg-white/10"
                }`}
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          {activeTab === "api" ? (
            <pre className="overflow-x-auto rounded-xl border border-white/10 bg-black/40 p-4 font-mono text-[12px] leading-6 text-emerald-200">
              {apiSnippet}
            </pre>
          ) : activeTab === "eval" ? (
            <div className="rounded-xl border border-white/10 bg-black/25 p-3">
              <p className="mb-1 text-[11px] uppercase tracking-wide text-white/40">
                Adaptive follow-up
              </p>
              <p className="text-sm leading-6 text-white/80">{role.followUp}</p>
            </div>
          ) : null}
        </div>

        <div className="flex flex-col gap-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-md">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-sm font-medium text-white">Live rubric</p>
              <Sparkles className="h-4 w-4 text-amber-300" />
            </div>
            {[
              ["Problem decomposition", 94],
              ["Technical depth", role.score],
              ["Communication", 91],
            ].map(([label, value]) => (
              <div key={String(label)} className="mb-3 last:mb-0">
                <div className="mb-1 flex items-center justify-between text-xs text-white/70">
                  <span>{label}</span>
                  <span>{value}</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-sky-400"
                    initial={{ width: 0 }}
                    animate={{ width: `${value}%` }}
                    transition={{ duration: 0.6 }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-1 flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.06] p-4">
            <p className="text-xs uppercase tracking-wide text-white/40">
              {activeTab === "eval"
                ? "Live scores"
                : activeTab === "api"
                  ? "Handoff API"
                  : "Avatar session"}
            </p>
            <p className="mt-2 text-2xl font-semibold tracking-tight text-white">
              {activeTab === "api" ? "Same record" : `${role.score}/100`}
            </p>
            <p className="mt-1 text-sm text-white/55">
              {activeTab === "eval"
                ? "Fit and Trust tick as the avatar speaks. Security stays on a separate line."
                : activeTab === "api"
                  ? "Handoff verified, mixed, and still-open skills into the next round."
                  : "Optional mode. Same cited record as a human-led loop."}
            </p>
            <Link
              href="/interview"
              className="mt-4 inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-medium text-neutral-950"
            >
              Try avatar interview
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
