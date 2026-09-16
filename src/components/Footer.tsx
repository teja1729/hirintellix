import Link from "next/link";
import { Logo } from "./Logo";

const columns = [
  {
    title: "Product",
    links: [
      { href: "/#how-it-works", label: "How it works" },
      { href: "/#product", label: "Reports & ATS" },
      { href: "/#avatar", label: "Avatar interviewer" },
      { href: "/interview", label: "Live demo" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/#pricing", label: "Pricing" },
      { href: "/#security", label: "Security" },
      { href: "/signup", label: "Sign up" },
      { href: "/signin", label: "Sign in" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="reveal rounded-3xl bg-neutral-950 px-6 py-10 text-white sm:px-10">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/50">
            Next step
          </p>
          <h2 className="font-display mt-3 max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">
            Put evidence on every interview.
          </h2>
          <p className="mt-3 max-w-lg text-sm leading-6 text-white/70">
            Dossier, live copilot or avatar, cited Fit / Trust / Security. A person
            still makes the hire.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-neutral-950"
            >
              Sign up
            </Link>
            <Link
              href="/signin"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white"
            >
              Sign in
            </Link>
          </div>
        </div>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-6 text-neutral-500">
              Hiring intelligence for the interview process. Your ATS still runs
              the pipeline.
            </p>
          </div>
          {columns.map((column) => (
            <div key={column.title}>
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-neutral-400">
                {column.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-600 hover:text-neutral-950"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-12 border-t border-black/10 pt-6 text-xs text-neutral-400">
          © {new Date().getFullYear()} Hirintellix
        </p>
      </div>
    </footer>
  );
}
