# Kim Spa massage — website

A small, conversion-focused website for **Kim Spa massage** at 4539 College Ave, San Diego, CA 92115.

Designed around the "Reality Snapshot" concept: when a visitor lands, they should immediately feel "this is a real place — I know what to expect." Phone, address, hours, and the two main calls-to-action (Call / Get directions) are above the fold on every screen size.

---

## Vercel slug

```
kim-spa-massage
```

Suggested production URL: `https://kim-spa-massage.vercel.app/`

---

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Single-page site, all 8 sections from brief |
| `styles.css` | Mobile-first, soft neutral palette, slightly imperfect grid |
| `script.js` | Live "Open now / Closed" badge, footer year, smooth scroll |
| `vercel.json` | Clean URLs + cache headers for `/images/*`, `*.css`, `*.js` |
| `images/` | Storefront, treatment room, reception, quiet corner |

---

## Confirmed data (used on the site)

These details come from the Google Maps listing and the publicly indexed business profile at the matching coordinates (32.7595712, -117.0659797):

- **Business name:** Kim Spa massage
- **Address:** 4539 College Ave, San Diego, CA 92115
- **Neighborhood:** Rolando / College Area, San Diego
- **Phone (local):** (619) 310-5234
- **Hours:** 9:00 AM – 10:00 PM, every day (Mon–Sun)
- **Pricing (publicly listed):** 30 min = $40 · 60 min = $60
- **Payments accepted:** Visa, Mastercard, Discover, American Express
- **Amenities note:** No sauna, no jacuzzi (it's a massage shop, not a resort)

## Missing / not-yet-confirmed data

The site does **not** invent any of the items below. They were intentionally left out:

- Specific massage modalities (Swedish, deep tissue, foot reflexology, etc.) — only "body massage" is publicly listed
- Number, names, or credentials of therapists
- Walk-in vs. appointment policy (the site says both are accepted, since hours allow walk-ins, but the business may prefer one)
- Parking specifics
- Languages spoken
- Loyalty / package pricing
- Real photos of the actual interior
- Real customer reviews (no verified Google reviews were available — the "What to expect" section uses only the listing's verifiable facts, not invented quotes)

If the business owner provides any of these, swap them into `index.html` directly — the markup is plain HTML.

---

## Conversion features

- `tel:+16193105234` click-to-call on the topbar, hero, services, location, final CTA, and a sticky bottom bar (mobile only)
- Google Maps Directions deep-link (`maps/dir/?api=1&destination=...`) on the hero, location, and final CTA
- Live "Open now / Closed" badge computed in America/Los_Angeles regardless of visitor time zone
- Sticky mobile call/directions bar always within thumb reach
- JSON-LD `MassageTherapyService` schema for local SEO

---

## Image notes

The four images shipped in `/images/` are placeholder spa interior shots. They are intentionally warm and modest — no luxury-resort gloss — but they are **not** photos of Kim Spa specifically. Replace them with real interior shots when available.

If you want to generate AI replacements, see `IMAGE_PROMPTS.md` in this folder.

---

## Local preview

Just open `index.html` in a browser, or serve the folder:

```sh
npx serve .
# or
python3 -m http.server 5173
```

No build step. No framework. Just HTML + CSS + JS.
