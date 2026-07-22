# Blue Moon Massage — build notes

## Business information sourced from Google Maps
Listing reviewed at the Google Maps share link the user provided
(https://maps.app.goo.gl/7t6rZ1JE2iuxsCsP6). Listing renders as **"Blue Moon Spa"**;
the user explicitly asked to brand this redesign as **Blue Moon Massage**, so the
brand name on the site is "Blue Moon Massage" while NAP, hours, and rating data
match the active Google Maps listing.

| Field        | Value pulled from Google Maps                          |
| ------------ | ------------------------------------------------------ |
| Listing name | Blue Moon Spa (branded as Blue Moon Massage on site)   |
| Category     | Massage spa                                            |
| Address      | 7034 El Cajon Blvd, San Diego, CA 92115                |
| Plus code    | QX93+MH San Diego, California                          |
| Phone        | (626) 522-2888                                         |
| Hours        | Mon – Sun, 9 AM – 11 PM                                |
| Rating       | 4.5 ★ · 11 reviews                                     |
| Attributes   | Asian-owned · LGBTQ+ friendly                          |
| Services     | Body massage, Swedish, deep tissue, hot stone, foot reflexology, combination |
| Promo seen   | "Premium Custom Body Massage $79.99/hr" (owner post)   |

Real review themes used (summarized, not quoted): clean / well kept · friendly therapists ·
strong but comfortable pressure · sore-back relief · convenient location · good value.

## Conversion goals
1. Call → `tel:+16265222888`
2. Open Google Maps → https://maps.app.goo.gl/7t6rZ1JE2iuxsCsP6
3. Walk in during open hours

Phone number, "Call now" CTA, and "Get directions" CTA are repeated through every section.
Mobile sticky call bar appears under the hero on small screens.

## File map
```
blue-moon-massage/
├── index.html           # one-page site
├── style.css            # full visual system
├── script.js            # nav, sticky CTA, FAQ accordion, time-aware eyebrow
├── images/              # 5 atmosphere photos (compressed under 220 KB each)
├── robots.txt
├── sitemap.xml
├── vercel.json
└── NOTES.md             # this file
```

## Image sourcing
No AI-generated faces or staff photos. Atmosphere photos used:

| File              | Subject                                        |
| ----------------- | ---------------------------------------------- |
| lamp-oil.jpg      | warm amber lamp · folded ivory towel · oil bottle on table — used in hero card |
| hot-stones.jpg    | dark basalt stones laid on ivory linen with oil bowl |
| quiet-room.jpg    | cedar wall, sheer curtain, plant, towel + oil — gallery hero |
| cedar-room.jpg    | cedar bench, towels, hanging plant — atmosphere |
| foot-bowl.jpg     | warm bowl of water with rosemary on towel — foot section |

Images come from the project's existing photo library. None show identifiable people.

### Image generation prompts (kept on file in case the user wants to regenerate)
Use these prompts for ChatGPT image generation if more atmosphere photos are needed.
All should be **deep navy + ivory + warm amber lamp** palette, photorealistic editorial,
no text, no logos, no watermarks, no people.

1. **Hero alt** — "A small massage room at night. A massage table draped with folded
   ivory linen towels. One warm amber lamp glowing on a side table. Frosted-glass
   window with soft moonlight. Cedar plank wall. Photorealistic editorial. No text."
2. **Stones alt** — "Smooth black basalt stones laid out on a folded ivory linen
   towel beside a small terracotta bowl of warm oil. Cedar wood table. Warm amber
   side lamp. Moody low-key lighting. Photorealistic. No text."
3. **Foot reflexology alt** — "A clean wooden recliner with a folded ivory towel
   draped across the footrest, a warm hand towel and a small bowl of warm water
   with a sprig of rosemary. Soft amber lamp light. Calm local spa. No text."
4. **Storefront alt** — "A small local massage spa storefront on a quiet evening
   street. Soft glow from inside through frosted glass. Sign reads 'Blue Moon
   Massage' in warm light. Dark navy sky overhead with a faint moon. Photorealistic.
   No people in frame."

## Copy / brand voice
Calm, simple, direct. No "escape to paradise" / "indulge in serenity" / "mind, body,
soul" filler. Every CTA points at the phone number or directions.

## Conversion details to keep
- Phone number visible in header, hero meta, action strip, every service card,
  visit section, final CTA, footer, and mobile sticky call.
- Google Maps directions link repeated five times.
- Embedded Maps iframe in /visit section.
- Schema.org `MassageBusiness` JSON-LD with NAP, hours, rating, services, geo.

## Deployment
Vercel project name `blue-moon-massage` → URL slug `blue-moon-massage.vercel.app`
includes the business name as required.
