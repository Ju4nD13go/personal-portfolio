import { cn } from "@/lib/utils";

export function Monogram({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-sky-400 via-indigo-500 to-violet-500 font-heading text-sm font-bold text-white shadow-lg shadow-sky-500/25 ring-1 ring-white/10",
        className
      )}
    >
      JD
    </span>
  );
}
