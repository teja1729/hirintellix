"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Startup",
    who: "Small teams, first roles",
    price: "Let’s talk",
    cta: "Start",
    href: "/signup",
    featured: false,
    items: [
      "Dossier and timed question plan",
      "Round zero (optional, unscored)",
      "Live copilot for your interviewer",
      "Fit score with citations",
      "Standard rubrics",
      "Limited interviews per month",
    ],
  },
  {
    name: "Growth",
    who: "Scaling recruiting",
    price: "Let’s talk",
    cta: "Book demo",
    href: "/signup",
    featured: true,
    items: [
      "Everything in Startup",
      "Trust scoring (claimed vs shown)",
      "ATS sync and custom rubrics",
      "Compare finalists, cited",
      "Higher interview volume",
      "Avatar interviewer optional",
    ],
  },
  {
    name: "Enterprise",
    who: "Multi-team, compliance",
    price: "Custom",
    cta: "Talk to sales",
    href: "/signup",
    featured: false,
    items: [
      "Everything in Growth",
      "Security pack (integrity record)",
      "SSO and role-based access",
      "Custom voice or avatar option",
      "SLA and dedicated success",
      "Handoff across every round",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="border-t border-black/10 bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-400">
            Pricing
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Startup, Growth, and Enterprise.
          </h2>
          <p className="mt-3 text-neutral-600">
            Plans follow the interview record you need—not a seat tax on every
            recruiter. Billing is set with you; we do not publish placeholder dollars.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {tiers.map((tier) => (
            <motion.article
              key={tier.name}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className={`reveal flex flex-col rounded-2xl border p-6 shadow-sm ${
                tier.featured
                  ? "border-neutral-950 bg-neutral-950 text-white"
                  : "border-black/10 bg-[#F9F9FA]"
              }`}
            >
              <p className="text-xs font-medium uppercase tracking-wide opacity-60">
                {tier.who}
              </p>
              <h3 className="font-display mt-2 text-2xl font-bold tracking-tight">
                {tier.name}
              </h3>
              <p className="mt-1 text-sm opacity-70">{tier.price}</p>
              <ul className="mt-6 flex-1 space-y-2.5">
                {tier.items.map((item) => (
                  <li key={item} className="flex gap-2 text-sm leading-6">
                    <Check className="mt-1 h-4 w-4 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }} className="mt-8">
                <Link
                  href={tier.href}
                  className={`block rounded-full px-4 py-2.5 text-center text-sm font-medium ${
                    tier.featured
                      ? "bg-white text-neutral-950"
                      : "bg-neutral-950 text-white"
                  }`}
                >
                  {tier.cta}
                </Link>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
