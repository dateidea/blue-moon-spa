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
              A small
              <br />
              <span className="italic font-light text-ink/90">
                neighborhood spa
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
              aria-label="ViVi Sunshine Spa — folded warm towels, river stones, and a ceramic dish of oil set out on a wooden side table"
              className="img-placeholder h-full w-full"
              style={{
                backgroundImage: `url(${asset("/images/about-01.png")})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </Reveal>

          <Reveal variant="fade" delay={120} className="col-span-12 md:col-span-7 md:col-start-1">
            <div className="space-y-6 text-[16px] leading-[1.8] text-ink">
              <p>
                ViVi Sunshine Spa is a small neighborhood massage studio at
                7151 El Cajon Boulevard in San Diego, between 71st and 73rd
                Street, just east of the College Area. Six services, one short
                menu, real sixty-minute sessions on the table.
              </p>
              <p>
                Walk in or call ahead. Sessions run from morning until eleven
                at night, every day of the week. Sixty-minute and longer
                bookings get twenty percent off — the same discount, every
                visit, no card to punch and no membership to sign.
              </p>
              <p>
                What we are trying to do is straightforward: give people an
                honest hour. The kind your shoulders remember three days later.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-hairline pt-8 text-[13px]">
              <div>
                <p className="eyebrow">Services</p>
                <p className="mt-2 text-ink">
                  Swedish, Deep Tissue, Shiatsu, Hot Oil, Thai, Body
                </p>
              </div>
              <div>
                <p className="eyebrow">Hours</p>
                <p className="mt-2 text-ink">Daily, 9 AM – 11 PM</p>
              </div>
              <div>
                <p className="eyebrow">Address</p>
                <p className="mt-2 text-ink">
                  7151 El Cajon Blvd, Ste K
                  <br />
                  San Diego, CA 92115
                </p>
              </div>
              <div>
                <p className="eyebrow">Promotion</p>
                <p className="mt-2 text-ink">
                  20% off any 60-minute session or longer
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
