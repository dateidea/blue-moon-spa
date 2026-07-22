# Feel Good Spa — Source Notes

Everything below was pulled from public listings (Google Maps, the
official site `sdfeelgoodspa.com`, Fresha, and `saunanearme.com`)
during the redesign. Used to populate copy, NAP block, services,
schema, and SEO metadata on the new site.

## Confirmed business info (used verbatim on the site)

- **Name:** Feel Good Spa
- **Address:** 6917 El Cajon Blvd, San Diego, CA 92115
- **Phone:** (619) 825-3033 — `tel:+16198253033`
- **Hours:** Monday – Sunday, 9:00 AM – 10:30 PM (open every day)
- **Neighborhood:** College Area / Rolando, San Diego (on the
  boulevard between 69th and 70th)
- **Coordinates:** 32.7682228, -117.0489569
- **Google Maps short link:** https://maps.app.goo.gl/YZpri2dk8T3NZb1A8
- **Payment:** Cash + major cards
- **Website:** sdfeelgoodspa.com (the existing one — light on detail)

## Services pulled from the official site & Fresha listing

The site lists Relaxing Massage, Aromatherapy Massage, and Foot
Massage. The Fresha listing also surfaces Chinese Massage and Hot
Stone Massage. All five are reflected in the service grid:

1. Relaxing Body Massage
2. Foot Massage (flagged "most asked for" — biggest theme in reviews)
3. Hot Stone Massage
4. Aromatherapy Massage
5. Chinese Massage

The "Tell us what hurts" sixth tile is a soft CTA, not a service.

## What was NOT used (and why)

- **Sauna / steam / cold plunge** — `saunanearme.com` lists these,
  but they don't appear on the official site or the Fresha service
  list, and the Google Maps category is "massage spa" not
  "sauna." Treated as unverified, omitted to avoid invented claims.
- **Star rating + review count** — the public sources disagree
  (4.1/5 on saunanearme, no rating on Fresha, the Yelp page returned
  403). Rather than use a number that may be stale, the hero leans
  on hours / walk-ins / location as trust signals, and the
  appreciation section uses themes (clean, friendly, easy parking,
  in-and-out) instead of fake review quotes.
- **Reviewer names** — never fabricated.
- **Specific prices** — `findtheseven.com` lists $30/30-min and
  $60/60-min but flagged as old. Site copy explicitly tells visitors
  to call for current rates, matching the existing site's stance.

## Conversion design choices

- Phone (619) 825-3033 appears in: header (desktop + mobile drawer),
  hero CTA, services CTA, comfort CTA, NAP block, final CTA, footer
  block, footer phone, mobile sticky bar — 9+ tap-to-call surfaces.
- Google Maps short link is the destination for every "Get
  directions" and "Visit" button. Opens in a new tab via
  `target="_blank" rel="noopener"`. 7+ direction touch points.
- Mobile sticky bottom bar with **Call** + **Directions** is fixed
  on viewports under 720px so the phone is never more than one
  thumb away.
- LocalBusiness JSON-LD schema (`MassageTherapy`) added with the
  full NAP, geo coords, opening hours, and `makesOffer` for each
  service.
- Title, description, OG, and Twitter tags all carry the exact
  business name "Feel Good Spa" and the El Cajon Blvd location
  cue.

## File map

```
feel-good-spa/
├─ index.html             # one-page site (10 sections + footer)
├─ styles.css             # full design system, no framework
├─ script.js              # sticky header, mobile menu, FAQ, scroll, reveal
├─ images/                # warm interior photos (reused from prior shoot)
│  ├─ atmosphere-room.jpg
│  ├─ atmosphere-detail.jpg
│  ├─ service-room.jpg
│  └─ service-stone.jpg
├─ vercel.json            # static deploy config
├─ IMAGE_PROMPTS.md       # ChatGPT-image prompts for replacements
└─ NOTES.md               # this file
```
