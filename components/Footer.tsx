import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-hairline bg-cream">
      <div className="mx-auto max-w-[1100px] px-6 py-20 md:px-10 md:py-24">
        <div className="grid grid-cols-12 gap-x-6 gap-y-12 md:gap-x-12">
          <div className="col-span-12 md:col-span-5">
            <Logo />
            <p className="mt-6 max-w-[36ch] text-[14px] leading-[1.85] text-ink-soft">A massage spa at 6957 El Cajon Blvd, San Diego. Open every day, 9 AM to 9 PM. Walk-ins welcome &mdash; call (619) 337-0166 for current pricing and to book.</p>
            <a href="tel:+16193370166" className="btn-primary mt-8 inline-flex items-center rounded-full px-6 py-3 text-[11px] tracking-[0.16em] uppercase">Call (619) 337-0166</a>
          </div>

          <div className="col-span-6 md:col-span-2 md:col-start-7">
            <p className="index-badge">Visit</p>
            <address className="mt-4 not-italic text-[14px] leading-[1.85] text-ink">6957 El Cajon Blvd<br />San Diego, CA 92115</address>
            <a href="https://maps.app.goo.gl/JMd4asWRLgScwdAv7" target="_blank" rel="noreferrer" className="link-underline mt-4 inline-block text-[12px] uppercase tracking-[0.16em] text-mid">Get directions &rarr;</a>
          </div>

          <div className="col-span-6 md:col-span-2">
            <p className="index-badge">Hours</p>
            <p className="mt-4 text-[14px] leading-[1.85] text-ink">Mon &ndash; Sun<br />9 AM &ndash; 9 PM</p>
          </div>

          <div className="col-span-12 md:col-span-3">
            <p className="index-badge">Reach us</p>
            <a href="tel:+16193370166" className="display mt-3 block text-[28px] leading-none text-ink">(619) 337-0166</a>
            <ul className="mt-6 flex flex-col gap-2 text-[13px] text-ink-soft">
              <li><a className="link-underline" href="#services">What we offer</a></li>
              <li><a className="link-underline" href="#about">About</a></li>
              <li><a className="link-underline" href="#faq">FAQ</a></li>
              <li><a className="link-underline" href="#booking">Get in touch</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-hairline pt-8 text-[11px] uppercase tracking-[0.16em] text-mid md:flex-row md:items-center">
          <p>&copy; {new Date().getFullYear()} Gold Spa. All rights reserved.</p>
          <p>Cash &amp; card &middot; Walk-ins welcome</p>
        </div>
      </div>
    </footer>
  );
}
