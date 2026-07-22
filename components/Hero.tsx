"use client";

import { useEffect, useRef } from "react";
import { asset } from "@/lib/asset";

export default function Hero() {
  const imgRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const node = imgRef.current;
    if (!node) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        node.style.transform = `translate3d(0, ${y * 0.05}px, 0) scale(1.04)`;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { cancelAnimationFrame(raf); window.removeEventListener("scroll", onScroll); };
  }, []);

  return (
    <section id="top" className="relative isolate flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-cream text-ink">
      <div ref={imgRef} className="absolute inset-0 -z-10 will-change-transform"
        style={{ backgroundImage: `url(${asset("/images/hero-01.jpg")})`, backgroundSize: "cover", backgroundPosition: "center", backgroundColor: "#f4efe6" }} aria-hidden />
      {/* Creamy scrim — keeps the hero on a warm cream surface even with the image behind it */}
      <div className="absolute inset-0 -z-10"
        style={{ background: "linear-gradient(180deg, rgba(244,239,230,0.85) 0%, rgba(244,239,230,0.78) 50%, rgba(244,239,230,0.92) 100%)" }} aria-hidden />

      <div className="mx-auto w-full max-w-[1100px] px-6 pt-40 pb-32 text-center md:px-10 md:pt-48 md:pb-40">
        <p className="eyebrow">Gold Spa &middot; 6957 El Cajon Blvd &middot; San Diego</p>
        <h1 className="display mt-10 text-[44px] leading-[1.04] sm:text-[60px] md:text-[80px] lg:text-[96px] text-ink">
          Warm hands. A quiet room.
          <br />
          <span className="display-italic text-ink/70">An hour to set down</span>
          <br />
          what the week piled on.
        </h1>
        <p className="mx-auto mt-10 max-w-[58ch] text-[17px] leading-[1.85] text-ink-soft md:text-[19px]">
          A small neighborhood massage spa on El Cajon Boulevard. Warm towels, a quiet table, and the unhurried kind of hour your shoulders remember three days later. Open every day, 9 AM to 9 PM. Walk-ins welcome.
        </p>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          <a href="tel:+16193370166" className="btn-primary inline-flex items-center rounded-full px-8 py-4 text-[12px] tracking-[0.16em] uppercase">
            Call (619) 337-0166
          </a>
          <a href="#booking" className="link-underline text-[14px] tracking-[0.04em] text-ink">
            Or send a message
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-6 mx-auto flex max-w-[1100px] items-end justify-between px-6 text-[10px] tracking-[0.24em] uppercase text-mid md:px-10">
        <span>Walk-ins welcome &middot; Daily, 9 AM &ndash; 9 PM</span>
        <span aria-hidden className="hidden md:inline">Scroll &darr;</span>
      </div>
    </section>
  );
}
