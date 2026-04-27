import Reveal from "./Reveal";
import { asset } from "@/lib/asset";

export default function About() {
  return (
    <section
      id="about"
      className="bg-cream py-28 md:py-36"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-[1180px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-x-6 gap-y-16">
          <Reveal variant="fade" className="col-span-12 md:col-span-5">
            <p className="eyebrow">About</p>
            <h2
              id="about-heading"
              className="display mt-4 text-[44px] leading-[1.04] md:text-[64px]"
            >
              A small,
              <br />
              <span className="italic font-light text-ink/55">
                Asian-owned studio
              </span>
              <br />
              on El Cajon Boulevard.
            </h2>
          </Reveal>

          <Reveal
            variant="curtain"
            className="col-span-12 md:col-span-7 md:col-start-6 aspect-[4/3] md:aspect-[5/4]"
          >
            <div
              role="img"
              aria-label="Pure Massage front room — spacious, bright lobby with warm decor and ivory linen towels"
              className="img-placeholder h-full w-full"
              style={{
                backgroundImage: `url(${asset("/images/about-01.jpg")})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </Reveal>

          <Reveal variant="fade" delay={120} className="col-span-12 md:col-span-7 md:col-start-1">
            <div className="space-y-6 text-[16px] leading-[1.8] text-ink/75">
              <p>
                Pure Massage is the kind of place we wished existed when we
                were the ones working twelve-hour shifts. A spacious, bright
                lobby with warm decor. Comfortable rooms with crisp white
                sheets and neatly arranged towels. Hot tea in the kettle,
                every day.
              </p>
              <p>
                Our practitioners — Sia and the team — are trained in full
                body, foot, shiatsu, and couples massage. We don&rsquo;t sell
                memberships. We don&rsquo;t push add-ons. We don&rsquo;t have
                a points program. The price you see at the door is the price
                you pay, and a real hour means sixty minutes on the table.
              </p>
              <p>
                What we are trying to do is straightforward: give people an
                honest hour. The kind your shoulders remember three days later.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-hairline pt-8 text-[13px]">
              <div>
                <p className="eyebrow">Specialties</p>
                <p className="mt-2 text-ink/85">
                  Full body, foot, shiatsu, couples
                </p>
              </div>
              <div>
                <p className="eyebrow">Hours</p>
                <p className="mt-2 text-ink/85">Daily, 9 AM – 11 PM</p>
              </div>
              <div>
                <p className="eyebrow">Address</p>
                <p className="mt-2 text-ink/85">
                  6979 El Cajon Blvd, San Diego
                </p>
              </div>
              <div>
                <p className="eyebrow">House rate</p>
                <p className="mt-2 text-ink/85">
                  $50 / hour, all-in &middot; $10 off first visit
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
