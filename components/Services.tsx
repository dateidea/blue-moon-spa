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
    name: "Swedish",
    description:
      "Long, smooth strokes with warm oil. Medium pressure unless you ask otherwise. The default — what most people walk in for, and what they rebook the next week.",
    outcome: "For: the long week, the stiff neck, the bad chair at work.",
    duration: "60 min",
    price: "Call for pricing",
    image: "/images/service-relax-01.jpg",
    alt: "Cedar massage table dressed with neatly folded ivory linen, soft window light",
  },
  {
    num: "II",
    name: "Deep Tissue",
    description:
      "Slow-loaded forearm and elbow work into the layer beneath the surface. The right knot, the right tool, the right amount of time. We pick the depth together at the ten-minute mark.",
    outcome: "For: chronic knots, athletes, anyone who lifts things for a living.",
    duration: "60 min",
    price: "Call for pricing",
    image: "/images/service-stone-03.jpg",
    alt: "Seven smooth dark basalt river stones arranged in a quiet line on folded ivory linen, beside a small ceramic bowl of warm oil",
  },
  {
    num: "III",
    name: "Shiatsu",
    description:
      "Japanese pressure-point therapy through loose clothing. Slow, loaded body weight on specific points along the meridians. Closer to assisted yoga than oil massage.",
    outcome: "For: tight hips, runners, desk workers who haven't stretched in years.",
    duration: "60 min",
    price: "Call for pricing",
    image: "/images/service-foot-04.jpg",
    alt: "A steaming ceramic basin set on a folded warm towel with a sprig of herb and a small dark river stone, soft window light",
  },
  {
    num: "IV",
    name: "Hot Oil",
    description:
      "Warm oil poured along the spine and worked outward in long, slow strokes. The heat is the point — it opens up the tissue before the work begins. Most clients close their eyes inside the first ten minutes.",
    outcome: "For: cold-weather days, deep stress, the kind of week that sits in your back.",
    duration: "60 min",
    price: "Call for pricing",
    image: "/images/service-deep-02.jpg",
    alt: "A small amber-glass massage oil bottle on a folded warm towel beside a brass lamp, intimate tungsten light",
  },
  {
    num: "V",
    name: "Thai",
    description:
      "On a low padded mat, in loose comfortable clothing — guided stretching, rocking, and palm pressure along the energy lines. Two-thousand-year-old technique. If you have not had Thai before, it is worth trying once.",
    outcome: "For: tight hips, runners, anyone who hasn't stretched since college.",
    duration: "60 min",
    price: "Call for pricing",
    image: "/images/service-thai-04.jpg",
    alt: "A warm oil bowl and a single dark river stone on a wooden stool beside the cedar massage table — the tools warming before the work",
  },
  {
    num: "VI",
    name: "Body Massage",
    description:
      "Full-body work, head-to-toe — back, neck, shoulders, glutes, legs, arms. Medium pressure unless you say otherwise. Sixty real minutes on the table, no clock-watching.",
    outcome: "For: the whole body kind of tired — when nothing in particular hurts but everything aches.",
    duration: "60 min",
    price: "Call for pricing",
    image: "/images/service-relax-01.jpg",
    alt: "A cedar massage table dressed with neatly folded ivory linen, hanging plant, ceramic bowl of warm oil and polished river stone on a side stool, soft window light",
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
              Six services.
              <br />
              <span className="italic font-light text-ink/90">
                No memberships, no add-on traps,
              </span>
              <br />
              no upsell at the door.
            </h2>
            <p className="mt-8 max-w-[58ch] text-[16px] leading-[1.75] text-ink/95">
              Most people walk in for one of these. Pricing is best handled at
              the door — call ahead and we will quote you the rate for the
              service and time you want. Sixty-minute sessions and longer get
              20% off, every visit.
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
                  <p className="mt-6 max-w-[42ch] text-[16px] leading-[1.75] text-ink">
                    {s.description}
                  </p>
                  <p className="mt-5 max-w-[42ch] text-[14px] italic text-ink">
                    {s.outcome}
                  </p>
                  <div className="mt-8 flex flex-wrap items-baseline gap-x-6 gap-y-2 text-[14px] text-ink">
                    <span className="display text-[20px] text-clay">
                      {s.price}
                    </span>
                    <span className="text-ink">·</span>
                    <span className="text-ink/95">{s.duration}</span>
                    <a
                      href="tel:+18582414343"
                      className="ml-auto link-underline tracking-[0.04em] text-clay"
                    >
                      Call to book →
                    </a>
                  </div>
                </Reveal>
              </article>
            );
          })}
        </div>

        <Reveal variant="fade">
          <p className="mt-16 max-w-[60ch] text-[13px] leading-[1.75] text-ink/90">
            Sixty-minute sessions and longer get 20% off — mention it when you
            call. Cash and card both accepted. Tipping is appreciated but never
            required and never appears on the bill.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
