# Sunshine Spa — site brief

A guided, step-by-step landing page for Sunshine Spa, a neighborhood massage spot at 6178 University Ave in San Diego. The page mirrors a customer's mental journey: tell us what you need → see the session → check what's confirmed → know what to expect → get there → take action.

## Live

- **Production URL:** https://sunshine-spa-eight.vercel.app/
- **Vercel slug:** `sunshine-spa` (canonical project name; `sunshine-spa.vercel.app` was unavailable so Vercel aliased to `sunshine-spa-eight.vercel.app`)
- **Recommended slug if free:** `sunshine-spa`
- **Source:** Google Maps listing — https://maps.app.goo.gl/MEoq6PBqYa9UbmZSA

## Confirmed data (used on the site)

| Field | Value | Source |
|---|---|---|
| Business name | Sunshine Spa | Google Maps title |
| Street address | 6178 University Ave | Public web listings |
| City / State / ZIP | San Diego, CA 92115 | Public web listings |
| Phone | (858) 859-8123 | Public web listings + business website |
| Hours | Open 7 days, 8:30 AM – 11 PM | Business website |
| Confirmed session | 60-minute massage at $50 | Business website |
| Coordinates | 32.753587, -117.0627945 | Google Maps URL |

## Missing data (intentionally omitted, not invented)

The site does **not** include any of the following because they were not verifiable from public listings:

- Specific massage modalities (deep tissue, Swedish, hot stone, foot reflexology, etc.)
- Any session length other than 60 minutes
- Any price other than the $50 / 60-min rate
- Walk-in vs. appointment policy
- Parking details
- Payment methods accepted
- Languages spoken by therapists
- Owner / staff names
- Customer testimonials or quotes
- Star rating or review counts
- Spa interior photos
- Gift card or membership programs

The site explicitly tells visitors to call to confirm anything not listed.

## Files

```
sunshine-spa/
├── index.html       # Full single-page site, semantic HTML, JSON-LD schema
├── styles.css       # Mobile-first, 6-step layered layout
├── script.js        # Intent picker, active-step highlight, sticky-call hide
├── favicon.svg      # Sun-burst mark
├── vercel.json      # Caching headers, security headers
├── robots.txt
├── sitemap.xml
└── README.md
```

## Design concept — "Guided Relief Journey"

Six numbered, layered cards stacked vertically with a subtle vertical rail. Each card is a "step" in the customer's decision flow:

1. **Tell us what you need** — Three intent buttons (Unwind / Ease tension / Visit soon) update a dynamic line below to coach the customer on what to say when calling. Above-the-fold contact strip keeps phone, address, and hours visible.
2. **Match a session** — One service, one rate. Clear, no menu inflation.
3. **What you can count on** — Plain facts only (open daily, neighborhood location, single rate, direct phone). No testimonials.
4. **What to expect** — Numbered walkthrough: before, getting there, during, after.
5. **Location and access** — Address card + Google Maps embed + directions button.
6. **Take action** — Final call & directions CTA at full size.

A sticky thumb-reach Call button lives at the bottom of mobile screens and fades out on the final step.

## Tech notes

- HTML / CSS / vanilla JS only — no framework, no build step.
- Mobile-first with `clamp()`-based fluid type, `dvh` for hero height.
- Dark-mode honored via `prefers-color-scheme`.
- `prefers-reduced-motion` disables all transitions.
- Inline SVG icon symbols (`<symbol>` + `<use>`) — no icon font, no extra requests.
- JSON-LD `MassageBusiness` schema with full NAP + hours + geo.
- Click-to-call uses `tel:+18588598123` everywhere.
- Directions button uses the original `maps.app.goo.gl` short link.
- Map embed uses `google.com/maps?q=...&output=embed` (no API key required).
- Vercel cache headers on CSS / JS / SVG. Security headers on all routes.

## Image direction

The site is intentionally image-light to keep load fast and the journey-style copy front-and-center. A subtle warm radial gradient does the visual work. If you later want photography:

### GitHub-hosted icon source (already inline)
SVG icons are embedded as `<symbol>` definitions in `index.html` — no external icon CDN.

### Image generation prompts (use only if needed)
- *Hero ambient (1600×900):* "Soft natural daylight on a calm massage room, neutral oat-and-clay walls, a single folded white towel on a clean wooden table, no people, photorealistic, soft focus, no luxury exaggeration, subtle warm tone, 35mm look."
- *Step 5 ambient (1200×800):* "Quiet neighborhood storefront window in mild afternoon sun, warm concrete sidewalk in foreground, no signage text, no people, plain modest exterior."
- *Avoid:* hot stones close-ups, candles in dramatic spotlights, robe-in-pool resort imagery, luxury exaggeration.

If photos are added later, place them in `images/` and reference at `/images/<file>.jpg`. Cache headers are already configured.

## What was deliberately NOT done

- No fake testimonials.
- No invented services or prices.
- No "luxury spa" copy or imagery.
- No card-heavy "hero + 3 cards + gallery" layout.
- The phrase "massage parlor" is not used anywhere.
- No claims about therapists, walk-ins, or amenities that are not in the public listing.
