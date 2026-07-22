# Unique Foot Massage Spa — Build Notes

## Source
- Google Maps link provided: https://maps.app.goo.gl/k3VzAdF96yVs93TW6
- Resolved canonical query: `Unique foot massage spa, 6610 El Cajon Blvd, San Diego, CA 92115`

## Suggested Vercel slug
`unique-foot-massage-spa` → `https://unique-foot-massage-spa.vercel.app/`

---

## Confirmed information used on the site

| Field | Value | Source |
| --- | --- | --- |
| Business name | **Unique Foot Massage Spa** | Google Maps listing (resolved URL) |
| Street address | 6610 El Cajon Blvd | Google Maps + San Diego business records |
| City / State / ZIP | San Diego, CA 92115 | Google Maps + business records |
| Phone | (858) 214-9475 | San Diego business records + 3rd-party listings |
| Service category | Massage / Foot massage | NAICS classification + listing categories |
| Confirmed services | Foot massage, Body massage | Listing categories + business name |
| Neighborhood / context | El Cajon Blvd, San Diego (College Area corridor) | Address-based, factually descriptive |

The hero "Open today / Until 10:00 PM" / "Currently closed / Opens at 10:00 AM" pill mirrors the most commonly listed daily window (10:00–22:00). All other on-page copy directs visitors to call to confirm hours, so no specific hours are presented as a guarantee.

---

## NOT confirmed — deliberately omitted

The following were never invented or asserted:

- Specific session prices (some 3rd-party listings show prices but we cannot verify them as current — the site says "Pricing best confirmed by phone")
- Years in business
- Owner / staff names
- Walk-in policy (no source explicitly says "walk-ins welcome", so the site says "Walk in, sit back" only as a verb in body copy and never claims "walk-ins welcome" as a policy)
- Parking notes
- Awards, certifications, licenses
- Specific testimonials or quoted reviews (the Impressions section summarizes patterns plainly without attributing fake quotes)
- Medical / therapeutic claims
- Specific cross-streets beyond "El Cajon Blvd & College Area" (the College Area is the established neighborhood for this stretch of 92115)
- Payment methods (the visit card softens this to "Bring cash if you can — ask about current payment options when you call" rather than asserting "cash only")

---

## Files

```
unique-foot-massage-spa/
├── index.html        — HTML5, semantic, JSON-LD MassageTherapy schema
├── styles.css        — "Quiet Neighborhood Ritual" design tokens
├── script.js         — Sticky header, mobile menu, smooth scroll, today/open status, footer year
├── vercel.json       — clean URLs, image cache headers
└── images/
    ├── treatment-room.jpg
    ├── foot-ritual.jpg
    ├── amber-lamp.jpg
    ├── quiet-corner.jpg
    └── warm-stones.jpg
```

All images are local-folder GitHub-hosted assets (already present in the repo's `images/` folder, copied + renamed).

---

## Design — "Quiet Neighborhood Ritual"

Palette:
- Cream paper background `#F5EBD2`
- Warm card surfaces `#FFFAEB` / `#FBF2DA`
- Deep espresso text `#2A1B0F`
- Muted bronze accents `#A36B3F` / `#844F26`
- Soft amber highlight `#D9A55C` / `#F0D9A8`
- Warm hairline `#E2D2A8`

Type:
- Display serif: Fraunces
- Body sans: Inter
- Mono labels (map / arrival labels): JetBrains Mono

Hero — "Local arrival card":
- Top arrival strip with business name + status pill (open / closed today)
- Map-grid SVG background pattern with subtle road-line strokes
- Big serif headline with bronze italic emphasis
- Phone CTA + Directions CTA at full size
- Compact contact strip (phone / address / hours) below the buttons
- Editorial visual frame on the right with two floating "card chips" (Today, Cross street)

Avoided per brief:
- Split-screen sage/ivory wood, peach/beige centered wellness, sunlit collage, coral feeling cards, navy moonlight, jade/aqua oasis shapes, clay stone block, panda/bamboo, ultra-minimal white linen.

---

## Sections (final structure)

1. **Local Arrival Hero** — arrival card with status, headline, CTAs, contact strip, visual frame
2. **Why People Visit** — 5 grounded reason cards
3. **Services Snapshot** — 2 service cards (Foot massage, Body massage), no prices, "call to confirm" footer
4. **Before You Visit** — 4 info cards (Address, Phone, Hours, Good to know) + custom illustrative El Cajon Blvd map graphic
5. **Real Local Impressions** — 3 plain-language theme cards (no fake quotes)
6. **Gallery / Atmosphere** — 4-tile bento (treatment room tall, amber lamp, foot soak, wide cedar corner)
7. **Final CTA** — large arrival-card-style block with both CTAs and a meta strip

---

## JavaScript behaviors

- Sticky header gets `.scrolled` class after 8px scroll
- Mobile menu toggle (`aria-expanded` driven, `[hidden]` respected)
- Smooth scroll with sticky-header offset
- Today's day name displayed in the floating "Today" card
- Open / closed status pill driven by current time vs the most commonly listed window (10:00–22:00). Copy elsewhere always defers to a phone call.
- Footer year auto-updated

---

## Image generation prompts (if more images are needed later)

The shipped images are reused from the existing `images/` library. If additional bespoke images are wanted, here are ChatGPT image prompts that match the "Quiet Neighborhood Ritual" mood:

### 1. Storefront at dusk (hero alternate)
> Editorial photograph of a small, modest neighborhood massage spa storefront on a quiet city boulevard at dusk. Single warm amber window light. Cream-painted door, simple hand-lettered "Unique Foot Massage Spa" sign in muted bronze, simple awning. Sidewalk in foreground, slightly worn. No people. Warm, grounded, believable, not luxury. Cinematic but plain. Soft 35mm film tone, warm shadows.

### 2. Foot soak ritual (warm)
> Close, warm, low-lit photo of a wide ceramic foot bath on a wooden side table, gentle steam rising. Folded cream-cotton towel, single brass bell or small terracotta cup beside it. Soft amber lamp glow from the side, dark walnut floor below. No people. Realistic, calm, modest spa.

### 3. Treatment room corner
> Honest interior photo of a small, modest massage treatment room. Cream linens on a low padded table, simple folded throw, small wooden stool with a brass lamp casting warm amber light. Wood-paneled wall in the background. No staff visible. Practical, clean, not luxury — feels like a real local spa. Warm tone, gentle shadows, calm.

### 4. Cross-street boulevard view (atmosphere)
> Late-afternoon photograph looking down a quiet wide California boulevard. Mid-century low storefronts, palms in the distance, soft amber sun, parked cars, no pedestrians. Slight haze. Warm cinematic tone. The mood is "you arrived, it's quiet, you're glad you came."

### 5. Bronze map detail (decorative)
> Top-down still life on cream paper: a folded city map, a brass compass, a small ceramic cup of warm tea, a sprig of dried herbs. Soft amber light from the upper right. Warm, grounded, no text on the map.

Constraints to keep:
- No people unless explicitly requested as adult professional staff in clean uniforms
- No suggestive imagery
- No fake luxury branding
- No fake awards or signage

---

## How to preview locally

A `python3 -m http.server 5190` is configured in `.claude/launch.json` and pointed at this folder.

## How to deploy

```
cd unique-foot-massage-spa
vercel deploy --prod
```

The `vercel.json` enables clean URLs and long-cache headers for `/images/*`.
