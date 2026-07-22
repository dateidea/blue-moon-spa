import Reveal from "./Reveal";

const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/JMd4asWRLgScwdAv7";

export default function Testimonials() {
  return (
    <section aria-labelledby="testimonials-heading" className="bg-ink py-32 text-cream md:py-40">
      <div className="mx-auto max-w-[860px] px-6 text-center md:px-10">
        <Reveal>
          <p className="eyebrow text-cream/55">Reviews</p>
          <h2 id="testimonials-heading" className="display mt-8 text-[40px] leading-[1.04] md:text-[60px]">
            Read &amp; share<br />
            <span className="display-italic text-cream/70">your honest hour</span><br />
            on Google.
          </h2>
          <p className="mx-auto mt-10 max-w-[52ch] text-[16px] leading-[1.85] text-cream/75">
            We do not host reviews on this site &mdash; the most up-to-date ones live on the Google Maps listing for Gold Spa. If you have been in, we would be grateful for an honest review there.
          </p>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            <a href={GOOGLE_MAPS_URL} target="_blank" rel="noreferrer"
              className="btn-primary inline-flex items-center rounded-full bg-cream px-8 py-4 text-[12px] tracking-[0.16em] uppercase text-ink">
              Read reviews on Google
            </a>
            <a href={GOOGLE_MAPS_URL} target="_blank" rel="noreferrer"
              className="link-underline text-[14px] tracking-[0.04em] text-cream/85">
              Or leave one yourself →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
