# Happy Spa — Static Website

Warm-neighborhood-comfort static site for **Happy Spa**, a massage studio at
**6956 El Cajon Blvd, San Diego, CA 92115** · **(619) 724-6464**.

Pure HTML, CSS, and a small `script.js` — no framework, no build step.

## Files
- `index.html` — single-page site (header, hero, action bar, services, choose-your-fit, your-visit, atmosphere gallery, trust, review themes, location + map, FAQ, final CTA, footer).
- `styles.css` — full design system (buttercream + warm terracotta + walnut palette).
- `script.js` — sticky-header shadow, mobile menu, smooth scroll with header offset, dynamic "Open / Closed" pill, single-open FAQ accordion, footer year.
- `images/` — local treatment-room photography reused from previous project assets (warm wood, terracotta, ivory linen — palette-matched).
- `vercel.json` — sets project name to `happy-spa` and adds image cache headers.

## Local preview
Any static server works:
```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

## Deploy to Vercel
The Vercel project name is set in `vercel.json` (`"name": "happy-spa"`),
which gives the URL `https://happy-spa.vercel.app/`.

```bash
npx vercel --prod
```

## Business info pulled from research

**Source 1: existing project's most recent commits** (`git log` — `5b4eeda`, `ec45e42`)
- Brand: Happy Spa
- Address: 6956 El Cajon Blvd, San Diego, CA 92115
- Phone: (619) 724-6464
- Asian-owned · Cash, card & Apple Pay accepted
- "Combo: 30 min foot + 30 min body for $45" was a previously researched offering

**Source 2: official business website** (https://happyfeetspa.wixsite.com/92115)
- Address & phone confirmed
- Hours: **Mon–Sun, 10:00 AM – 9:30 PM**
- Services list (used verbatim): Swedish, Hot Stone, Deep Tissue, Combo, Chair, Couples, Cupping, Foot
- Walk-ins accepted, licensed massage therapists

**Source 3: Yelp listing** (https://www.yelp.com/biz/happy-spa-massage-san-diego)
- Wheelchair accessible, accessible parking near entrance, ADA-compliant entry

**Source 4: Google Maps** (https://maps.app.goo.gl/bBMtvrah6giC4A3U9)
- Confirmed location, name, business category

## Image notes
The five images in `/images/` are warm-toned interior shots reused from the
previous project (cedar walls, terracotta pots, ivory linens, warm oil bowls,
hot stones). All five were JPEG-recompressed to under 220 KB. No staff faces
are shown — the Happy Spa direction is "show the room, not the person."

If you want to swap in newly generated images later, the prompts to use are:

1. **Hero / treatment room** — "Warm neighborhood massage room interior, cedar
   wood plank wall, soft sheer linen curtain with warm window light, hanging
   plant in terracotta pot, low cedar massage table with folded ivory linen
   towel, small ceramic bowl of warm oil on a dark wooden stool, warm lamp
   glow, soft shadows, photorealistic editorial quality, no text, no logos."

2. **Hot stones** — "Smooth dark basalt massage stones laid out on folded
   ivory linen on a dark wooden bench, small terracotta bowl of warm
   amber oil beside, hanging trailing plant in soft window light, warm
   neighborhood spa, cozy and clean, photorealistic, no text, no logos."

3. **Foot soak** — "A steaming neutral-clay ceramic bowl filled with warm
   water for a foot soak, set on a folded ivory towel on a dark wooden
   bench, sprig of rosemary and small dark river stone alongside, warm
   side-light, cozy neighborhood spa interior, photorealistic, no text."

4. **Oil + lamp** — "Small amber bottle of essential oil on a folded
   charcoal-brown towel beside a warm brass desk lamp glowing low, dark
   wooden room, warm side-light, cedar paneling, intimate quiet treatment
   room, photorealistic editorial quality, no text, no logos."

## Conversion design notes
- Phone number (`tel:+16197246464`) appears 9 times across the page,
  including a fixed mobile sticky-call button.
- Google Maps directions link appears 7 times, all opening in a new tab.
- The hero, action bar, location section, and final CTA each present the
  primary call/directions buttons; visitors don't have to hunt for them.
- Service cards are recommendation-first (each has a "best for" line),
  not pricing-first — Happy Spa doesn't publish prices, so the CTA is
  always "Call to ask availability."
- "Choose what feels right today" reduces decision fatigue with six
  emotional starting points that map to specific services.
