"use client";

import { useState } from "react";
import Reveal from "./Reveal";

type QA = { q: string; a: React.ReactNode };

const faqs: QA[] = [
  {
    q: "Do I need an appointment, or can I walk in?",
    a: (
      <>
        Both are fine. The phone is the fastest way to lock in a specific time
        — call{" "}
        <a className="link-underline text-clay" href="tel:+18582414343">
          (858) 241-4343
        </a>
        . If you want to walk in, please come before the last hour so we can
        get you on the table before close.
      </>
    ),
  },
  {
    q: "How much does it cost?",
    a: (
      <>
        Pricing is best handled at the door — call and we will quote you the
        rate for the service and time you want. Sessions sixty minutes or
        longer get twenty percent off, every visit. No membership fees, no
        booking fees. Tipping is appreciated but never required and never
        appears on the bill.
      </>
    ),
  },
  {
    q: "What kind of pressure should I ask for?",
    a: (
      <>
        If you are not sure, start with medium and tell us within the first
        ten minutes if you want more or less. We would rather adjust five
        times than leave you sore tomorrow. Deep tissue means slow-loaded
        forearms and elbows on specific knots — not just &ldquo;harder
        pressure everywhere.&rdquo;
      </>
    ),
  },
  {
    q: "What hours are you open?",
    a: (
      <>
        Every day, nine in the morning until eleven at night. The doors lock
        at 11 PM. If you are coming late after a shift, please call so we can
        keep someone on for you.
      </>
    ),
  },
  {
    q: "What is the difference between Swedish and Thai?",
    a: (
      <>
        Swedish is on the table, with warm oil — long, smooth strokes through
        the back, neck, shoulders, and legs. Thai is on a low padded mat, in
        loose clothing — guided stretching and palm pressure. Same hour. Very
        different feeling. If you have never had Thai, it is worth trying
        once.
      </>
    ),
  },
  {
    q: "Where do I park?",
    a: (
      <>
        Free parking in the plaza at 7151 El Cajon Blvd, Suite K, between
        71st and 73rd Street. We are a short drive from SDSU, on the 1 and
        815 bus lines, and just east of the College Area.
      </>
    ),
  },
  {
    q: "Is it OK during pregnancy?",
    a: (
      <>
        Please mention it when you call so we can put you with a practitioner
        who works with prenatal clients and choose a service and position that
        is right for the trimester you are in.
      </>
    ),
  },
  {
    q: "What is your cancellation policy?",
    a: (
      <>
        Same-day cancellations are fine — please call us as early as you can
        so we can offer the slot to a walk-in.
      </>
    ),
  },
];

function Item({ qa, idx }: { qa: QA; idx: number }) {
  const [open, setOpen] = useState(false);
  const id = `faq-${idx}`;
  return (
    <li className="border-t border-hairline">
      <button
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((s) => !s)}
        className="group flex w-full items-start justify-between gap-6 py-9 text-left"
      >
        <span className="display text-[24px] leading-[1.25] text-ink md:text-[30px]">
          {qa.q}
        </span>
        <span
          aria-hidden
          className={`mt-3 inline-block h-3 w-3 shrink-0 transition-transform duration-500 ${
            open ? "rotate-45" : ""
          }`}
          style={{
            background:
              "linear-gradient(currentColor, currentColor) center/100% 1px no-repeat, linear-gradient(currentColor, currentColor) center/1px 100% no-repeat",
            color: "var(--color-clay)",
          }}
        />
      </button>
      <div
        id={id}
        role="region"
        className="grid transition-[grid-template-rows] duration-500 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="max-w-[64ch] pb-9 text-[16px] leading-[1.8] text-ink">
            {qa.a}
          </p>
        </div>
      </div>
    </li>
  );
}

export default function FAQ() {
  return (
    <section
      id="faq"
      className="bg-cream py-28 md:py-36"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-[1180px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6">
          <Reveal variant="fade" className="col-span-12 md:col-span-4">
            <p className="eyebrow">Things people ask</p>
          </Reveal>
          <Reveal variant="curtain-up" className="col-span-12 md:col-span-8">
            <h2
              id="faq-heading"
              className="display text-[44px] leading-[1.04] md:text-[64px]"
            >
              The honest answers,
              <br />
              <span className="italic font-light text-ink/90">
                before you have to ask.
              </span>
            </h2>
          </Reveal>
        </div>
        <Reveal variant="fade">
          <ul className="mt-20 border-b border-hairline">
            {faqs.map((qa, i) => (
              <Item key={qa.q} qa={qa} idx={i} />
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
