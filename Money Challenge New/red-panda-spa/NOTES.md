# Fletcher Massage — Confirmed-Facts Audit

Source: Google Maps deep link `https://maps.app.goo.gl/34twULupfr55sV468`
(redirects to `Fletcher Massage` listing on Google Maps), confirmed
against the official site `fletchermassage.com` and the public Yelp /
listing aggregators.

Only confirmed information appears on the live website.

## Confirmed facts used on the site

| Field      | Confirmed value                                          | Source                  |
| ---------- | -------------------------------------------------------- | ----------------------- |
| Name       | **Fletcher Massage**                                     | Maps listing, official  |
| Address    | **8182 Parkway Dr, La Mesa, CA 91942**                   | Maps listing, official  |
| Phone      | **(619) 589-8888** (`tel:+16195898888`)                  | Maps listing, official  |
| Hours      | **Daily, 10:00 AM to 10:00 PM**                          | Official site           |
| Coords     | 32.7762835, -117.0212147                                 | Maps listing            |
| Landmark   | Next to Chick-fil-A, across from Costco Gas Station      | Official site           |
| Maps link  | https://maps.app.goo.gl/34twULupfr55sV468                | Original deep link      |
| Website    | https://fletchermassage.com                              | Official site           |

## Pricing represented on the site

Body massage in private room (Swedish, deep tissue, hot stone, sports,
shiatsu, Thai):
- $30 / 30 min
- $35 / 45 min
- $40 / 60 min
- $60 / 90 min

Combo, body and foot reflexology:
- $25 / 60 min
- $40 / 90 min

Birthday $10 off promotion is documented and shown in the services
note and FAQ.

## Services represented on the site

Confirmed by the official site:

- **Body massage (private room)** — Swedish base, with deep tissue,
  Thai, sports, shiatsu, hot stone modalities available
- **Foot reflexology (chair)** — Thai, Reflexology, Shiatsu, Swedish,
  Deep tissue styles
- **Deep tissue (private room)**
- **Hot stone (private room)**
- **Thai massage** (foot or body)
- **Combo, body and foot** (best value)

Couples massage is mentioned on the official site and surfaced as an
"ask when you call" line in the services note.

## Confirmed claims (these are documented, not invented)

- Walk-ins welcome (confirmed by listing)
- Free wi-fi and parking (confirmed by listing)
- Cash, credit cards, Apple Pay (confirmed by listing)
- Wheelchair accessible (confirmed by listing — referenced in trust /
  contact context)
- Birthday $10 off promotion (confirmed by official site)

## What was deliberately NOT used or claimed

- No reviewer names, no direct quotes — review section uses
  summarized themes only, with a clear disclaimer linking to the
  Google listing.
- No star count or review tally numerically shown.
- No invented awards, certifications, or "X years in business."
- No medical or therapeutic claims.
- No "massage parlor" phrasing. Site uses "massage spa" / "neighborhood
  foot and body massage spot."

## Conversion design choices grounded in the audit

- Phone number visible in: header (mobile + desktop), hero, action
  strip, every service card, every relief row, contact block, final
  CTA, footer, and a fixed mobile sticky CTA. Reachable in under one
  thumb-stretch from any scroll position.
- The original Google Maps deep link
  (`maps.app.goo.gl/34twULupfr55sV468`) is used for every "Directions"
  link and opens in a new tab.
- The embedded map uses `google.com/maps?q=...&output=embed` so it
  renders without an API key.
- The hero "Open now / Currently closed" pill self-computes from the
  confirmed daily hours (10 AM to 10 PM). If JS fails, the static
  fallback ("Open daily, 10:00 AM to 10:00 PM") still reads correctly.

## 5-second customer test

A person standing on the sidewalk with their phone sees this:

| Question                       | Answer on the page                                      |
| ------------------------------ | ------------------------------------------------------- |
| What is this business?         | Header + hero: "Fletcher Massage"                       |
| Where is it?                   | Hero meta: "8182 Parkway Dr, La Mesa, CA 91942"         |
| Is it open right now?          | Live "Open now / Currently closed" pill in hero         |
| How do I call?                 | Big red "Call (619) 589-8888" button in hero, header, sticky bottom bar |
| How do I get directions?       | "Get Directions" button in hero, action strip, contact, final CTA, sticky bottom bar |
