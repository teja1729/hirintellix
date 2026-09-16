import { FileSearch, Shield, Video } from "lucide-react";

const guards = [
  {
    icon: FileSearch,
    title: "Integrity, kept separate",
    copy: "Pastes, tab switches, and timing are shown to you—not folded into Fit automatically. The candidate is told.",
  },
  {
    icon: Video,
    title: "Copilot stays invisible",
    copy: "No camera or eye tracking in copilot mode. Avatar mode is opted in. Round zero can be declined.",
  },
  {
    icon: Shield,
    title: "A person decides",
    copy: "Match tier and confidence, with the line behind each mark. Hirintellix never auto-rejects.",
  },
];

export function Security() {
  return (
    <section id="security" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-400">
          Security
        </p>
        <h1 className="font-display mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Integrity is a record, not a hidden penalty.
        </h1>
        <p className="mt-3 text-neutral-600">
          Formal attestations are in progress. We will not claim SOC 2 or ISO 27001
          until an audit is complete. Reports are visible only to roles you assign.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {guards.map((item) => (
          <article
            key={item.title}
            className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm"
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-neutral-950 text-white">
              <item.icon className="h-4 w-4" />
            </div>
            <h2 className="font-display text-lg font-semibold tracking-tight">
              {item.title}
            </h2>
            <p className="mt-2 text-sm leading-6 text-neutral-600">{item.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
