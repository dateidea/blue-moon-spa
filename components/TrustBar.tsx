import Reveal from "./Reveal";

const stats = [
  { value: "Daily", label: "Open seven days a week" },
  { value: "9:00–10", label: "9 AM to 9 PM, every day" },
  { value: "Walk-in", label: "Or call ahead to reserve" },
  { value: "Cash · Card", label: "Both accepted at the front desk" },
];

export default function TrustBar() {
  return (
    <section aria-label="At a glance" className="border-y border-hairline bg-cream">
      <div className="mx-auto max-w-[1100px] px-6 py-16 md:px-10 md:py-20">
        <Reveal>
          <ul className="grid grid-cols-2 gap-y-12 text-center md:grid-cols-4 md:gap-x-10">
            {stats.map((s) => (
              <li key={s.label} className="flex flex-col items-center gap-3">
                <span className="display text-[36px] leading-none text-ink md:text-[44px]">{s.value}</span>
                <span className="max-w-[24ch] text-[13px] leading-[1.6] text-mid">{s.label}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
