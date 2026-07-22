"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const services = [
  "Swedish · 60 min",
  "Deep Tissue · 60 min",
  "Shiatsu · 60 min",
  "Hot Oil · 60 min",
  "Thai · 60 min",
  "Body Massage · 60 min",
  "Not sure — recommend something",
];

export default function Booking() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="booking"
      className="relative overflow-hidden bg-cream-deep py-28 md:py-36"
      aria-labelledby="booking-heading"
    >
      <div className="mx-auto max-w-[1180px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-x-6 gap-y-16">
          <Reveal variant="fade" className="col-span-12 md:col-span-5">
            <p className="eyebrow">Book a session</p>
            <h2
              id="booking-heading"
              className="display mt-4 text-[44px] leading-[1.04] md:text-[72px]"
            >
              Let&rsquo;s pick
              <br />
              <span className="italic font-light text-ink/90">a time.</span>
            </h2>
            <p className="mt-8 max-w-[44ch] text-[16px] leading-[1.8] text-ink">
              The fastest way to book is to call us. We pick up every day from
              9 AM to 11 PM. Or send the form below and we will reply within
              one business day.
            </p>

            <div className="mt-12 space-y-8 border-t border-hairline pt-8">
              <div>
                <p className="eyebrow">Or, faster</p>
                <a
                  href="tel:+18582414343"
                  className="display mt-3 block text-[40px] leading-none text-clay hover:text-clay-deep md:text-[52px]"
                >
                  (858) 241-4343
                </a>
                <p className="mt-3 text-[14px] text-ink/90">
                  Picked up by a real person, every day, 9 AM – 11 PM.
                </p>
              </div>

              <div>
                <p className="eyebrow">Walk-ins</p>
                <p className="mt-3 text-[15px] text-ink">
                  7151 El Cajon Blvd, Suite K
                  <br />
                  San Diego, CA 92115
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal variant="curtain" delay={120} className="col-span-12 md:col-span-6 md:col-start-7">
            <div
              className="p-8 md:p-12"
              style={{
                background: "var(--color-cream-soft)",
                border: "1px solid var(--color-hairline)",
              }}
            >
              {!submitted ? (
                <form onSubmit={onSubmit} className="flex flex-col gap-7">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="name"
                      className="text-[11px] tracking-[0.22em] uppercase text-clay smallcaps"
                    >
                      Your name
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                      className="border-b border-hairline bg-transparent py-3 text-[18px] text-ink placeholder:text-ink/30 focus:border-clay focus:outline-none"
                      placeholder="First and last"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="contact"
                      className="text-[11px] tracking-[0.22em] uppercase text-clay smallcaps"
                    >
                      Phone or email
                    </label>
                    <input
                      id="contact"
                      name="contact"
                      required
                      className="border-b border-hairline bg-transparent py-3 text-[18px] text-ink placeholder:text-ink/30 focus:border-clay focus:outline-none"
                      placeholder="Whatever's easiest"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="service"
                      className="text-[11px] tracking-[0.22em] uppercase text-clay smallcaps"
                    >
                      What you&rsquo;re thinking
                    </label>
                    <select
                      id="service"
                      name="service"
                      defaultValue={services[0]}
                      className="border-b border-hairline bg-transparent py-3 text-[18px] text-ink focus:border-clay focus:outline-none"
                    >
                      {services.map((s) => (
                        <option key={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="message"
                      className="text-[11px] tracking-[0.22em] uppercase text-clay smallcaps"
                    >
                      When works · what hurts (optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="border-b border-hairline bg-transparent py-3 text-[18px] text-ink placeholder:text-ink/30 focus:border-clay focus:outline-none"
                      placeholder="e.g. Tuesday after 6 — lower back, side sleeper. First visit."
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary mt-2 inline-flex items-center justify-center self-start rounded-none px-8 py-4 text-[12px] tracking-[0.22em] uppercase"
                  >
                    Request a time
                  </button>

                  <p className="text-[12px] text-ink/90">
                    We&rsquo;ll respond within 1 business day. Calling is faster.
                    No spam, no sales pressure.
                  </p>
                </form>
              ) : (
                <div className="flex min-h-[420px] flex-col justify-center">
                  <p className="eyebrow text-clay">Got it</p>
                  <h3 className="display mt-3 text-[34px] leading-[1.1] md:text-[44px]">
                    Thanks. We&rsquo;ll get back to you today.
                  </h3>
                  <p className="mt-6 max-w-[44ch] text-[16px] text-ink">
                    If you don&rsquo;t hear from us by tomorrow morning, please
                    call{" "}
                    <a
                      href="tel:+18582414343"
                      className="link-underline text-clay"
                    >
                      (858) 241-4343
                    </a>
                    .
                  </p>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
