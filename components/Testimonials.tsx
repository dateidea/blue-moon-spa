import Reveal from "./Reveal";

type Quote = {
  body: string;
  name: string;
  role: string;
};

// Real Google review snippets, lightly trimmed. Last names abbreviated.
const quotes: Quote[] = [
  {
    body:
      "The place was spotless. The service was great. Must try if you are in the area.",
    name: "G.",
    role: "Verified Google review",
  },
  {
    body:
      "He made me feel so relaxed and at home.",
    name: "K.",
    role: "Verified Google review",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2);
}

export default function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="py-28 md:py-36"
      style={{
        background: "var(--color-cream-soft)",
        color: "var(--color-ink)",
      }}
    >
      <div className="mx-auto max-w-[1180px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6">
          <Reveal variant="fade" className="col-span-12 md:col-span-4">
            <p className="eyebrow">In their words</p>
          </Reveal>
          <Reveal variant="curtain-up" className="col-span-12 md:col-span-8">
            <h2
              id="testimonials-heading"
              className="display text-[44px] leading-[1.04] md:text-[72px]"
            >
              Two short reviews,
              <br />
              <span className="italic font-light text-ink/90">
                in their own words.
              </span>
            </h2>
            <p className="mt-8 max-w-[58ch] text-[15px] leading-[1.8] text-ink/95">
              Pulled from our Google profile. Last names abbreviated, words
              left exactly as written.
            </p>
          </Reveal>
        </div>

        <div className="mt-24 grid grid-cols-12 gap-x-6 gap-y-20">
          {quotes.map((q, i) => (
            <Reveal
              key={q.name + i}
              variant="curtain"
              delay={i * 100}
              className={
                i === 0
                  ? "col-span-12 md:col-span-9"
                  : "col-span-12 md:col-span-7 md:col-start-6"
              }
            >
              <figure className="flex flex-col">
                <blockquote
                  className={`display leading-[1.18] text-ink ${
                    i === 0
                      ? "text-[32px] md:text-[52px]"
                      : "text-[28px] md:text-[40px]"
                  }`}
                >
                  <span className="text-clay">&ldquo;</span>
                  {q.body}
                  <span className="text-clay">&rdquo;</span>
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4">
                  <span
                    aria-hidden
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-none text-[12px] tracking-[0.18em] smallcaps"
                    style={{
                      border: "1px solid var(--color-clay)",
                      color: "var(--color-clay)",
                    }}
                  >
                    {initials(q.name)}
                  </span>
                  <div className="flex flex-col">
                    <span className="text-[14px] text-ink">{q.name}</span>
                    <span className="text-[13px] text-ink/90">{q.role}</span>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal variant="fade">
          <div className="mt-24 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-hairline pt-10 text-[13px] text-ink/95">
            <span className="display text-[32px] text-ink">3.7★</span>
            <span>9 verified Google reviews · still building word of mouth</span>
            <span aria-hidden className="hidden md:inline">·</span>
            <span>7151 El Cajon Blvd, Ste K · San Diego</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
