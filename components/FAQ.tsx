"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import SectionRail from "./SectionRail";

type QA = { q: string; a: React.ReactNode };

const faqs: QA[] = [
  { q: "Do I need an appointment, or can I walk in?",
    a: (<>Both are fine. Walk-ins are welcome. If you want a specific time, please call ahead at <a className="link-underline" href="tel:+16193370166">(619) 337-0166</a>.</>) },
  { q: "How much does it cost?",
    a: (<>Pricing changes from time to time, so rather than list a number on the website that may be a few dollars off, please call <a className="link-underline" href="tel:+16193370166">(619) 337-0166</a> &mdash; whoever picks up will quote you the current rate and book you in.</>) },
  { q: "What hours are you open?",
    a: (<>Every day, 9 AM to 9 PM. Last appointment is taken before close. If you are coming late after a shift, please call so we can keep someone on for you.</>) },
  { q: "What kind of pressure should I ask for?",
    a: (<>If you are not sure, start with medium and tell us in the first ten minutes if you want more or less. We would rather adjust five times than leave you sore tomorrow.</>) },
  { q: "Where do I park?",
    a: (<>Free parking lot directly in front of the studio at 6957 El Cajon Blvd, San Diego, between 70th and 71st Street. We are on the 1 and 815 bus lines and a five-minute drive from SDSU.</>) },
  { q: "Do you take cards?",
    a: (<>Yes &mdash; we accept cash and major cards. Tipping in cash is appreciated but never required.</>) },
  { q: "Do you have a website with online booking?",
    a: (<>Not yet. The fastest way to book is to call <a className="link-underline" href="tel:+16193370166">(619) 337-0166</a>. You can also send a note through the form below and we will text you back the same day during open hours.</>) },
  { q: "Where is the studio?",
    a: (<>6957 El Cajon Blvd, San Diego, CA 92115. Find us on Google Maps as <a className="link-underline" href="https://maps.app.goo.gl/JMd4asWRLgScwdAv7" target="_blank" rel="noreferrer">Gold Spa</a>.</>) },
];

function Item({ qa, idx }: { qa: QA; idx: number }) {
  const [open, setOpen] = useState(false);
  const id = `faq-${idx}`;
  return (
    <li className="border-t border-hairline">
      <button aria-expanded={open} aria-controls={id} onClick={() => setOpen((s) => !s)}
        className="group flex w-full items-start justify-between gap-6 py-7 text-left">
        <span className="display text-[22px] leading-[1.25] text-ink md:text-[26px]">{qa.q}</span>
        <span aria-hidden className={`mt-3 inline-block h-3 w-3 shrink-0 transition-transform duration-500 ${open ? "rotate-45" : ""}`}
          style={{ background: "linear-gradient(currentColor, currentColor) center/100% 1px no-repeat, linear-gradient(currentColor, currentColor) center/1px 100% no-repeat", color: "var(--color-eucalyptus-deep)" }} />
      </button>
      <div id={id} role="region" className="grid transition-[grid-template-rows] duration-500 ease-out" style={{ gridTemplateRows: open ? "1fr" : "0fr" }}>
        <div className="overflow-hidden">
          <p className="max-w-[64ch] pb-9 text-[16px] leading-[1.85] text-ink-soft">{qa.a}</p>
        </div>
      </div>
    </li>
  );
}

export default function FAQ() {
  return (
    <SectionRail
      id="faq"
      eyebrow="Things people ask"
      index="05"
      labelledBy="faq-heading"
      bg="bg-cream"
      heading={
        <h2 id="faq-heading" className="display text-center text-[40px] leading-[1.02] md:text-[60px]">
          The honest answers,<br />
          <span className="display-italic text-ink-soft">before you have to ask.</span>
        </h2>
      }
      rail={<>Eight short answers, no hedging.</>}
    >
      <Reveal>
        <ul className="mx-auto max-w-[860px] border-b border-hairline">
          {faqs.map((qa, i) => (<Item key={qa.q} qa={qa} idx={i} />))}
        </ul>
      </Reveal>
    </SectionRail>
  );
}
