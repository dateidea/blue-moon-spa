import Reveal from "./Reveal";

const stats = [
  { value: "Six styles", label: "Swedish, Deep Tissue, Shiatsu, Hot Oil, Thai, Body" },
  { value: "9 — 11", label: "Open every day, 9 AM to 11 PM" },
  { value: "3.7★", label: "Across 9 verified Google reviews" },
  { value: "20% off", label: "Any session 60 minutes or longer" },
];

export default function TrustBar() {
  return (
    <section
      aria-label="At a glance"
      className="border-t border-b border-hairline bg-cream-deep"
    >
      <div className="mx-auto max-w-[1180px] px-6 py-14 md:px-10 md:py-20">
        <Reveal variant="curtain">
          <ul className="grid grid-cols-2 gap-y-10 md:grid-cols-4 md:gap-10">
            {stats.map((s) => (
              <li key={s.label} className="flex flex-col">
                <span className="display text-[40px] leading-none text-ink md:text-[56px]">
                  {s.value}
                </span>
                <span className="mt-3 max-w-[24ch] text-[12px] tracking-[0.04em] leading-[1.6] text-ink/95">
                  {s.label}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
