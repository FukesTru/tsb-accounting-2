import { serviceCategories } from "@/lib/services";

/** Infinite scrolling strip of service names (pauses on hover). */
export default function Marquee() {
  const items = [
    ...serviceCategories.flatMap((c) => c.subServices.map((s) => s.name)),
    "Northwest Arkansas",
    "Virtual Nationwide",
  ];
  const row = (hidden: boolean) => (
    <ul
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center gap-10 pr-10"
    >
      {items.map((item) => (
        <li
          key={item}
          className="flex items-center gap-10 whitespace-nowrap text-sm font-semibold uppercase tracking-[0.2em] text-white/50"
        >
          {item}
          <span className="h-1.5 w-1.5 rotate-45 bg-gold-500/70" aria-hidden="true" />
        </li>
      ))}
    </ul>
  );
  return (
    <div className="marquee overflow-hidden border-y border-white/10 bg-navy-950 py-5">
      <div className="marquee-track flex w-max">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
