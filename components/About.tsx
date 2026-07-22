import Reveal from "./Reveal";
import SectionRail from "./SectionRail";
import { asset } from "@/lib/asset";

export default function About() {
  return (
    <SectionRail
      id="about"
      eyebrow="About"
      index="04"
      labelledBy="about-heading"
      bg="bg-cream"
      heading={
        <h2 id="about-heading" className="display text-center text-[40px] leading-[1.05] md:text-[60px]">
          A neighborhood<br />
          <span className="display-italic text-ink-soft">massage spa</span><br />
          on El Cajon Boulevard.
        </h2>
      }
      rail={<>The room before the door opens.</>}
    >
      <div className="grid grid-cols-12 items-start gap-x-6 gap-y-12 md:gap-x-12">
        <Reveal className="col-span-12 md:col-span-5">
          <div role="img" aria-label="The treatment room of Gold Spa — a quiet table dressed with neatly folded ivory linen, warm window light"
            className="img-placeholder relative aspect-[4/5] w-full overflow-hidden"
            style={{ backgroundImage: `url(${asset("/images/about-01.jpg")})`, backgroundSize: "cover", backgroundPosition: "center" }} />
          <p className="mt-4 text-[12px] uppercase tracking-[0.18em] text-mid">The room before the door opens.</p>
        </Reveal>
        <Reveal delay={120} className="col-span-12 md:col-span-7">
          <div className="space-y-7 text-[17px] leading-[1.85] text-ink-soft">
            <p>Gold Spa is a small, independently run massage spa at 6957 El Cajon Blvd in San Diego. Open every day, 9 AM to 9 PM.</p>
            <p>The studio is the kind of place you walk into off the boulevard. Quiet front room, comfortable treatment rooms, towels stacked by the door. The work is the work &mdash; an hour of attention, on your shoulders or your feet, on whatever the week has put on you.</p>
            <p>For current pricing, the menu of what we are offering this month, and to make sure a room is held for you, please call <a className="link-underline text-ink" href="tel:+16193370166">(619) 337-0166</a>.</p>
          </div>
          <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-hairline pt-10 text-[12px] uppercase tracking-[0.14em]">
            <div><dt className="text-mid">Address</dt><dd className="mt-2 text-[14px] tracking-normal text-ink normal-case leading-[1.6]">6957 El Cajon Blvd<br />San Diego, CA 92115</dd></div>
            <div><dt className="text-mid">Hours</dt><dd className="mt-2 text-[14px] tracking-normal text-ink normal-case leading-[1.6]">Daily, 9 AM &ndash; 9 PM</dd></div>
            <div><dt className="text-mid">Phone</dt><dd className="mt-2 text-[14px] tracking-normal text-ink normal-case leading-[1.6]"><a className="link-underline" href="tel:+16193370166">(619) 337-0166</a></dd></div>
            <div><dt className="text-mid">Walk-ins</dt><dd className="mt-2 text-[14px] tracking-normal text-ink normal-case leading-[1.6]">Welcome &mdash; calling ahead helps</dd></div>
          </dl>
        </Reveal>
      </div>
    </SectionRail>
  );
}
