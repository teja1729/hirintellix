import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const paths = [
  {
    href: "/how-it-works",
    title: "How it works",
    copy: "Dossier, round zero, live interview, cited report, handoff, compare.",
  },
  {
    href: "/product",
    title: "Product",
    copy: "Reports, ATS sync, optional avatar interviewer.",
  },
  {
    href: "/pricing",
    title: "Pricing",
    copy: "Startup, Growth, and Enterprise.",
  },
];

export function HomePaths() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
      <div className="grid gap-4 md:grid-cols-3">
        {paths.map((path) => (
          <Link
            key={path.href}
            href={path.href}
            className="group reveal rounded-2xl border border-black/10 bg-white p-5 shadow-sm transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="flex items-start justify-between gap-3">
              <h2 className="font-display text-lg font-semibold tracking-tight">
                {path.title}
              </h2>
              <ArrowUpRight className="h-4 w-4 text-neutral-400 transition-colors group-hover:text-neutral-950" />
            </div>
            <p className="mt-2 text-sm leading-6 text-neutral-600">{path.copy}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
