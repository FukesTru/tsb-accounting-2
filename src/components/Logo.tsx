import Link from "next/link";

/**
 * PLACEHOLDER LOGO — the client marked "I need one designed" on the intake
 * form. This is a styled text/monogram lockup; swap for the final logo file
 * here (used in both header and footer).
 */
export default function Logo({ variant = "light" }: { variant?: "light" | "dark" }) {
  const text = variant === "light" ? "text-white" : "text-navy-900";
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="TSB Accounting Solutions — home">
      <span className="flex h-11 w-11 items-center justify-center rounded-md bg-gold-500 font-display text-lg font-bold tracking-tight text-navy-950">
        TSB
      </span>
      <span className={`leading-tight ${text}`}>
        <span className="block font-display text-lg font-semibold tracking-wide">
          TSB Accounting
        </span>
        <span className="block text-[0.65rem] font-medium tracking-[0.3em] uppercase text-gold-500">
          Solutions
        </span>
      </span>
    </Link>
  );
}
