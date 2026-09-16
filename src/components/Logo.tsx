export function Logo({
  className = "",
  href = "/",
  inverted = false,
}: {
  className?: string;
  href?: string;
  inverted?: boolean;
}) {
  return (
    <a href={href} className={`inline-flex items-center gap-2 ${className}`}>
      <span className="relative flex h-8 w-8 items-center justify-center rounded-xl bg-neutral-950">
        <span className="absolute inset-1 rounded-lg border border-white/15" />
        <span className="h-2 w-2 rounded-full bg-white" />
        <span className="absolute right-1.5 top-1.5 h-1 w-1 rounded-full bg-emerald-400" />
      </span>
      <span
        className={`font-display text-[15px] font-semibold tracking-tight ${
          inverted ? "text-white" : "text-neutral-950"
        }`}
      >
        Hirintellix
      </span>
    </a>
  );
}
