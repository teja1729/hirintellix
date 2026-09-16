"use client";

import { motion } from "framer-motion";

const faqs = [
  {
    q: "Does it decide who to hire?",
    a: "No. You get Fit, Trust, and Security with evidence. A person makes the call. Hirintellix never auto-rejects.",
  },
  {
    q: "Is the avatar required?",
    a: "No. Default is a copilot beside your interviewer. Avatar mode is optional when you want a speaking interviewer.",
  },
  {
    q: "Does the candidate know?",
    a: "Round zero is consented and can be declined. Copilot is invisible to them. Avatar mode is disclosed. No eye tracking in copilot mode.",
  },
  {
    q: "What languages?",
    a: "English today.",
  },
];

export function Faq() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="reveal font-display text-2xl font-bold tracking-tight">Before you book</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {faqs.map((item) => (
          <motion.div
            key={item.q}
            whileHover={{ y: -3 }}
            className="reveal rounded-2xl border border-black/10 bg-white p-5"
          >
            <p className="text-sm font-semibold">{item.q}</p>
            <p className="mt-2 text-sm leading-6 text-neutral-600">{item.a}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
