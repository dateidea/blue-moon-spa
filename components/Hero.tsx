"use client";

import Reveal from "./Reveal";
import { asset } from "@/lib/asset";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate w-full overflow-hidden text-cream min-h-[100svh] flex flex-col justify-end"
    >
      {/* Background image */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage: `url(${asset("/images/hero-01.jpg")})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Scrim for text legibility */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(20,20,18,0.50) 0%, rgba(20,20,18,0.18) 35%, rgba(20,20,18,0.55) 70%, rgba(20,20,18,0.88) 100%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1180px] px-6 pt-32 pb-16 md:px-10 md:pt-40 md:pb-24">
        <div className="grid grid-cols-12 gap-6">
          <Reveal variant="fade" className="col-span-12">
            <p className="eyebrow mb-10 text-cream">
              ViVi Sunshine Spa &middot; 7151 El Cajon Blvd, Ste K &middot; San Diego
            </p>
          </Reveal>
          <Reveal variant="curtain-up" className="col-span-12">
            <h1 className="display text-[44px] leading-[1.0] sm:text-[64px] md:text-[92px] lg:text-[112px] text-cream">
              An honest hour
              <br />
              <span className="italic font-light text-cream/95">
                your shoulders have been
              </span>
              <br />
              waiting for.
            </h1>
          </Reveal>

          <Reveal variant="fade" delay={200} className="col-span-12 md:col-span-7 mt-12">
            <p className="max-w-[48ch] text-[17px] leading-[1.75] text-cream md:text-[19px]">
              A neighborhood massage spa on El Cajon Boulevard. Six services
              — Swedish, Deep Tissue, Shiatsu, Hot Oil, Thai, and Body —
              open every day, 9 AM to 11 PM. Sessions sixty minutes or
              longer get twenty percent off, every visit.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a
                href="tel:+18582414343"
                className="inline-flex items-center bg-cream text-ink px-7 py-4 text-[12px] tracking-[0.22em] uppercase hover:bg-clay hover:text-cream transition-colors"
              >
                Call to book
              </a>
              <a
                href="tel:+18582414343"
                className="link-underline text-[14px] tracking-[0.05em] text-cream"
              >
                (858) 241-4343
              </a>
            </div>
          </Reveal>

          <Reveal
            variant="fade"
            delay={300}
            className="col-span-12 md:col-span-4 md:col-start-9 mt-12 self-end"
          >
            <div className="border-t border-cream/30 pt-6 text-[13px] text-cream/95 md:text-right">
              <span className="block eyebrow text-[10px] mb-2 text-cream/90">Open Tonight</span>
              Until 11&nbsp;PM &middot; walk-ins welcome <br />
              20% off any 60-minute session
            </div>
          </Reveal>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-[1180px] px-6 pb-6 text-[11px] tracking-[0.22em] uppercase text-cream/95 md:px-10 md:pb-8 flex flex-wrap items-center justify-between gap-4">
        <span>Massage spa &middot; San Diego</span>
        <span>3.7★ — 9 Google reviews</span>
        <span aria-hidden>Scroll ↓</span>
      </div>
    </section>
  );
}
