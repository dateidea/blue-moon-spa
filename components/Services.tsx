import Reveal from "./Reveal";
import { asset } from "@/lib/asset";

type Service = {
  num: string;
  name: string;
  description: string;
  outcome: string;
  duration: string;
  price: string;
  image: string;
  alt: string;
};

const services: Service[] = [
  {
    num: "I",
    name: "Full Body",
    description:
      "Sixty minutes head-to-toe — soothing strokes through the back, neck, shoulders, glutes, legs, and arms. Medium pressure unless you say otherwise. Warm oil, crisp white sheets, hot tea after. The default for a reason.",
    outcome:
      "For: the long week, the stiff neck, the bad chair at work.",
    duration: "60 min",
    price: "$50",
    image: "/images/service-relax-01.jpg",
    alt: "Cedar massage table dressed with neatly folded ivory linen, soft window light",
  },
  {
    num: "II",
    name: "Foot Massage",
    description:
      "Sixty minutes in a heated recliner — hot towel, warm oil, targeted pressure through the arch, the calf, and the reflex points along the heel and ear. Most clients close their eyes inside the first ten minutes.",
    outcome: "For: nurses, servers, parents — anyone who has been on their feet.",
    duration: "60 min",
    price: "$50",
    image: "/images/service-foot-04.jpg",
    alt: "Hands working on the arch of a foot resting on a folded warm ivory towel, warm window light",
  },
  {
    num: "III",
    name: "Shiatsu",
    description:
      "Japanese pressure-point therapy through loose clothing. Slow, loaded body weight on specific points along the meridians. Asks more of the practitioner than oil massage does. Closer to assisted yoga than spa fluff.",
    outcome:
      "For: chronic knots, athletes, people who lift things for a living.",
    duration: "60 min",
    price: "$60",
    image: "/images/service-deep-02.jpg",
    alt: "Forearm pressure on the upper back, soft tungsten lighting, deep shadow across the lower frame",
  },
  {
    num: "IV",
    name: "Couples Room",
    description:
      "Two practitioners, one quiet room, side-by-side tables. Same hour, same warm towels, same cup of tea afterward. The couples room books up before the rest of the studio — calling ahead is the difference between a yes and a maybe.",
    outcome: "For: anniversaries, post-flight, the rare night you both have free.",
    duration: "60 min · per person",
    price: "$95",
    image: "/images/service-stone-03.jpg",
    alt: "A quiet warm couples treatment room with two side-by-side tables dressed in ivory linen, ceramic dish of warm oil between them",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-cream py-28 md:py-36"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-[1180px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 items-end">
          <Reveal variant="fade" className="col-span-12 md:col-span-4">
            <p className="eyebrow">The menu</p>
          </Reveal>
          <Reveal variant="curtain-up" className="col-span-12 md:col-span-8">
            <h2
              id="services-heading"
              className="display text-[44px] leading-[1.04] md:text-[72px]"
            >
              A short menu.
              <br />
              <span className="italic font-light text-ink/55">
                No memberships, no add-on traps,
              </span>
              <br />
              no upsell at the door.
            </h2>
            <p className="mt-8 max-w-[58ch] text-[16px] leading-[1.75] text-ink/70">
              Most people walk in for the same reason — something hurts,
              sleep has been bad, or the week was too long. Below is the
              entire menu. Walk-ins welcome until 10 PM. Calling ahead helps,
              especially for the couples room.
            </p>
          </Reveal>
        </div>

        <div className="mt-24 flex flex-col">
          {services.map((s, i) => {
            const reverse = i % 2 === 1;
            return (
              <article
                key={s.num}
                className={`grid grid-cols-12 items-center gap-6 border-t border-hairline py-16 md:gap-12 md:py-24 ${
                  reverse ? "md:[direction:rtl]" : ""
                }`}
              >
                <Reveal
                  variant="curtain"
                  className="col-span-12 md:col-span-7 md:[direction:ltr] aspect-[4/5] w-full md:aspect-[3/4]"
                >
                  <div
                    role="img"
                    aria-label={s.alt}
                    className="img-placeholder h-full w-full"
                    style={{
                      backgroundImage: `url(${asset(s.image)})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                </Reveal>

                <Reveal
                  variant="fade"
                  delay={120}
                  className="col-span-12 md:col-span-5 md:[direction:ltr]"
                >
                  <div className="flex items-baseline gap-6">
                    <span className="display text-[20px] text-clay tracking-[0.18em]">
                      {s.num}
                    </span>
                    <span className="h-px flex-1 bg-hairline" />
                  </div>
                  <h3 className="display mt-6 text-[40px] leading-[1.04] md:text-[64px]">
                    {s.name}
                  </h3>
                  <p className="mt-6 max-w-[42ch] text-[16px] leading-[1.75] text-ink/75">
                    {s.description}
                  </p>
                  <p className="mt-5 max-w-[42ch] text-[14px] italic text-ink/45">
                    {s.outcome}
                  </p>
                  <div className="mt-8 flex flex-wrap items-baseline gap-x-6 gap-y-2 text-[14px] text-ink">
                    <span className="display text-[28px] text-clay">
                      {s.price}
                    </span>
                    <span className="text-ink/45">·</span>
                    <span className="text-ink/65">{s.duration}</span>
                    <a
                      href="#booking"
                      className="ml-auto link-underline tracking-[0.04em] text-clay"
                    >
                      Book this →
                    </a>
                  </div>
                </Reveal>
              </article>
            );
          })}
        </div>

        <Reveal variant="fade">
          <p className="mt-16 max-w-[60ch] text-[13px] leading-[1.75] text-ink/55">
            New clients get $10 off the first session — no code needed, just
            mention it at the front desk. Add 30 minutes to any service for
            $25. Cash, card, and Apple Pay all accepted. Tipping is appreciated
            but never appears on the bill.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
