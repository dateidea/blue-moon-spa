"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import SectionRail from "./SectionRail";

const services = [
  "Body massage",
  "Foot reflexology",
  "Hot stone",
  "Couples room",
  "Not sure — recommend something",
];

export default function Booking() {
  const [submitted, setSubmitted] = useState(false);
  function onSubmit(e: React.FormEvent<HTMLFormElement>) { e.preventDefault(); setSubmitted(true); }
  return (
    <SectionRail
      id="booking"
      eyebrow="Get in touch"
      index="06"
      labelledBy="booking-heading"
      bg="bg-cream-deep"
      heading={
        <h2 id="booking-heading" className="display text-center text-[44px] leading-[1.02] md:text-[68px]">
          The fastest way<br />
          <span className="display-italic text-ink-soft">to book is to call.</span>
        </h2>
      }
      rail={<>If you would rather text than call, send us a note and we will text back the same day during open hours.</>}
    >
      <div className="grid grid-cols-12 items-start gap-x-6 gap-y-12 md:gap-x-12">
        <Reveal className="col-span-12 md:col-span-5">
          <div className="space-y-10 border-t border-hairline pt-10">
            <div>
              <p className="index-badge">Call</p>
              <a href="tel:+16193370166" className="display mt-4 block text-[36px] leading-none text-ink hover:text-eucalyptus-deep md:text-[44px]">(619) 337-0166</a>
              <p className="mt-3 text-[13px] uppercase tracking-[0.16em] text-mid">A real person at the front desk, every day, 9 AM &ndash; 9 PM.</p>
            </div>
            <div>
              <p className="index-badge">Walk in</p>
              <p className="mt-3 text-[15px] leading-[1.85] text-ink-soft">6957 El Cajon Blvd, San Diego, CA 92115. Free lot in front. Walk-ins welcome.</p>
              <a href="https://maps.app.goo.gl/JMd4asWRLgScwdAv7" target="_blank" rel="noreferrer" className="link-underline mt-3 inline-block text-[13px] uppercase tracking-[0.16em] text-mid">Get directions &rarr;</a>
            </div>
            <div>
              <p className="index-badge">Hours</p>
              <p className="mt-3 text-[15px] leading-[1.85] text-ink-soft">Daily, 9 AM &ndash; 9 PM. Last appointment taken before close.</p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={120} className="col-span-12 md:col-span-6 md:col-start-7">
          <div className="bg-cream p-8 shadow-[0_1px_0_rgba(0,0,0,0.04)] md:p-12">
            {!submitted ? (
              <form onSubmit={onSubmit} className="flex flex-col gap-7">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="index-badge">Your name</label>
                  <input id="name" name="name" required autoComplete="name" className="border-b border-hairline bg-transparent py-3 text-[18px] text-ink placeholder:text-mid/60 focus:border-ink focus:outline-none" placeholder="First and last" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact" className="index-badge">Phone or email</label>
                  <input id="contact" name="contact" required className="border-b border-hairline bg-transparent py-3 text-[18px] text-ink placeholder:text-mid/60 focus:border-ink focus:outline-none" placeholder="Whatever is easiest" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="service" className="index-badge">Interested in</label>
                  <select id="service" name="service" defaultValue={services[0]} className="border-b border-hairline bg-transparent py-3 text-[18px] text-ink focus:border-ink focus:outline-none">
                    {services.map((s) => (<option key={s}>{s}</option>))}
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="index-badge">When works · what hurts (optional)</label>
                  <textarea id="message" name="message" rows={4} className="border-b border-hairline bg-transparent py-3 text-[18px] text-ink placeholder:text-mid/60 focus:border-ink focus:outline-none" placeholder="e.g. Tuesday after 6 — lower back, side sleeper. First visit." />
                </div>
                <button type="submit" className="btn-primary mt-2 inline-flex items-center justify-center self-start rounded-full px-8 py-4 text-[12px] tracking-[0.16em] uppercase">Send message</button>
                <p className="text-[12px] text-mid">We will text you back the same day during open hours. For an immediate hold, please call (619) 337-0166.</p>
              </form>
            ) : (
              <div className="flex min-h-[420px] flex-col justify-center">
                <p className="eyebrow text-eucalyptus-deep">Got it</p>
                <h3 className="display mt-3 text-[34px] leading-[1.1] md:text-[40px]">Thanks. We will text you back today.</h3>
                <p className="mt-6 max-w-[44ch] text-[16px] leading-[1.85] text-ink-soft">If you do not hear from us by tomorrow morning, please call <a href="tel:+16193370166" className="link-underline text-ink">(619) 337-0166</a>.</p>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </SectionRail>
  );
}
