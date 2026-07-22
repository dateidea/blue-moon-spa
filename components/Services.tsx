import Reveal from "./Reveal";
import SectionRail from "./SectionRail";
import { asset } from "@/lib/asset";

type Service = {
  num: string; name: string; description: string; image: string; alt: string;
};

const services: Service[] = [
  { num: "01", name: "Body massage",
    description: "Full-body work on the table, head-to-toe. Pressure adjusted to what you ask for at the start of the session. Call to discuss what you are looking for and how long.",
    image: "/images/about-01.jpg",
    alt: "A folded ivory linen towel set out on a cedar bench beside a small ceramic bowl of warm oil — the studio set up for an hour" },
  { num: "02", name: "Foot reflexology",
    description: "Time in a heated recliner with a hot towel and warm oil. Targeted pressure through the arch, the calf, and the reflex points along the foot.",
    image: "/images/service-stone-03.jpg",
    alt: "Smooth dark basalt stones arranged on folded ivory linen beside a small terracotta bowl of warm oil" },
  { num: "03", name: "Hot stone",
    description: "Smooth basalt stones, warmed in water, drawn through the back and shoulders. Heat does half the work for you. Often offered as part of a longer session.",
    image: "/images/service-thai-04.jpg",
    alt: "A warm oil bowl and a single dark river stone on a wooden stool beside the cedar massage table" },
  { num: "04", name: "Couples",
    description: "Side-by-side tables in a quiet room — for the rare night you both have free. Books up before the rest of the studio. Call ahead.",
    image: "/images/og-01.jpg",
    alt: "A quiet warm treatment room with cedar-panelled walls, sheer linen curtains, hanging plant, and ivory linen on the table" },
];

export default function Services() {
  return (
    <SectionRail
      id="services"
      eyebrow="What we offer"
      index="01"
      labelledBy="services-heading"
      bg="bg-cream"
      heading={
        <h2 id="services-heading" className="display text-center text-[44px] leading-[1.02] md:text-[68px]">
          A short menu.<br />
          <span className="display-italic text-ink-soft">Call for current pricing</span><br />
          and availability.
        </h2>
      }
      rail={<>Pricing changes from time to time. Rather than list a number that might be a few dollars off, please call <a className="link-underline text-ink" href="tel:+16193370166">(619) 337-0166</a> &mdash; whoever picks up will quote you the current rate and book you in.</>}
    >
      <div className="flex flex-col">
        {services.map((s, i) => (
          <Reveal key={s.num}>
            <article className={`grid grid-cols-12 items-center gap-x-6 gap-y-10 border-t border-hairline py-20 md:gap-x-12 md:py-28 ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}>
              <div className="col-span-12 md:col-span-6 md:[direction:ltr]">
                <div role="img" aria-label={s.alt}
                  className="img-placeholder relative aspect-[4/5] w-full overflow-hidden md:aspect-[3/4]"
                  style={{ backgroundImage: `url(${asset(s.image)})`, backgroundSize: "cover", backgroundPosition: "center" }} />
              </div>
              <div className="col-span-12 md:col-span-6 md:[direction:ltr]">
                <p className="index-badge text-eucalyptus">No. {s.num}</p>
                <h3 className="display mt-5 text-[34px] leading-[1.05] md:text-[48px]">{s.name}</h3>
                <p className="mt-6 measure-tight text-[17px] leading-[1.85] text-ink-soft">{s.description}</p>
                <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-[14px] text-ink">
                  <a href="tel:+16193370166" className="link-underline tracking-[0.04em] text-eucalyptus-deep">Call to book this →</a>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="mx-auto mt-20 max-w-[60ch] text-center text-[14px] leading-[1.85] text-mid">
          Cash and card both accepted at the front desk. Tipping is appreciated but never required. Walk-ins are welcome &mdash; calling ahead helps us hold a room for you.
        </p>
      </Reveal>
    </SectionRail>
  );
}
