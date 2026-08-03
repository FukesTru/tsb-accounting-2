import Link from "next/link";

/**
 * TSB brand logo — recreated as SVG from the client's supplied logo:
 * serif "TSB" (navy T/B, gold S) between two gold rules.
 * If the client provides the original vector source file, swap it in here
 * and in /public/images/logo-tsb*.svg.
 *
 * `variant="light"` renders white letters (gold S/rules unchanged) so the
 * mark stays clearly visible on the dark navy header/footer;
 * `variant="dark"` is the original navy colorway for light backgrounds.
 */

const GOLD = "#C9A84C";
const NAVY = "#14284B";

export function LogoMark({
  letters = NAVY,
  className,
}: {
  letters?: string;
  className?: string;
}) {
  return (
    <svg viewBox="0 0 150 96" className={className} aria-hidden="true">
      <line x1="32" y1="8" x2="118" y2="8" stroke={GOLD} strokeWidth="3.5" />
      <text
        x="75"
        y="70"
        textAnchor="middle"
        fontFamily="var(--font-display), Georgia, 'Times New Roman', serif"
        fontWeight="700"
        fontSize="60"
        letterSpacing="-2"
      >
        <tspan fill={letters}>T</tspan>
        <tspan fill={GOLD}>S</tspan>
        <tspan fill={letters}>B</tspan>
      </text>
      <line x1="32" y1="88" x2="118" y2="88" stroke={GOLD} strokeWidth="3.5" />
    </svg>
  );
}

export default function Logo({ variant = "light" }: { variant?: "light" | "dark" }) {
  const letters = variant === "light" ? "#ffffff" : NAVY;
  const nameColor = variant === "light" ? "text-white" : "text-navy-900";
  return (
    <Link
      href="/"
      className="flex items-center gap-3.5"
      aria-label="TSB Accounting Solutions — home"
    >
      <LogoMark letters={letters} className="h-14 w-auto shrink-0" />
      <span className={`leading-snug ${nameColor}`}>
        <span className="block text-sm font-semibold uppercase tracking-[0.18em]">
          Accounting
        </span>
        <span className="block text-[0.68rem] font-medium uppercase tracking-[0.3em] text-gold-500">
          Solutions
        </span>
      </span>
    </Link>
  );
}
