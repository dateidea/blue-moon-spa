# Lucky Dragon Spa — Project Notes

## 1. Confirmed business information

| Field | Value | Source |
| --- | --- | --- |
| Business name | **Lucky Dragon Spa** | Google Maps, Yelp |
| Address | **5269 Baltimore Dr, La Mesa, CA 91942** | Yelp, Google Maps |
| Phone | **(619) 740-1232** (`tel:+16197401232`) | Yelp, search |
| Hours | **Every day, 9 AM to 11 PM** | Search |
| Coordinates | ≈ 32.7724, −117.0293 (Baltimore Dr area, La Mesa) | Approximate |
| Categories | Massage spa | Google Maps |
| Services (confirmed) | Deep tissue, lymphatic drainage, aromatherapy, hot stone, shiatsu | Yelp / search summary |
| LLC registration | Lucky Dragon Spa, LLC — California Secretary of State (B20250149863) | b2bhint.com |
| Pricing | **NOT published** in any current public listing | (intentionally omitted from site) |
| Google Maps link | https://maps.app.goo.gl/gXdA2uCU6HJbfLXq9 | Provided by user |
| Yelp link | https://www.yelp.com/biz/lucky-dragon-spa-la-mesa-2 | Search |

## 2. Service cards on the site

To stay honest to confirmed services for this location, the four service cards are:

1. **Full Body Massage** — universal default offered at virtually every massage spa
2. **Deep Tissue Massage** — confirmed for Lucky Dragon Spa La Mesa
3. **Hot Stone Massage** — confirmed for Lucky Dragon Spa La Mesa
4. **Aromatherapy Massage** — confirmed for Lucky Dragon Spa La Mesa

Foot Massage and Swedish (which were on the previous site) were dropped because they were not explicitly named for this location. New SVG icons were added for Hot Stone (steam wisps over a stack of stones) and Aromatherapy (essential oil bottle with sprig of leaves).

## 3. What we deliberately did NOT put on the site

- **Specific dollar prices** — Lucky Dragon Spa does not publish current rates. (One stale Yelp comment referenced "$95 / hour" but that single data point is not reliable enough to publish.)
- **Loyalty program** — no source confirms an offer at this location.
- **Star rating or review count** — sources are inconsistent. The on-page reviews section is an honest "Read on Google / Read on Yelp" CTA, not a fake aggregate.
- **Walk-ins welcome** — not explicitly stated. The site says "Call ahead" instead.
- **Staff names**, years in business, fake testimonials, awards.

## 4. What was reused from the previous build

The visual system, hero collage layout, and the two real photos in the hero are intentionally identical to the previous site. Only business-specific copy, NAP, hours, schema, services, and outbound links were swapped.

Reused assets:
- `images/panel-a-room.jpg` — realistic warm massage room photo (hero collage Panel A)
- `images/panel-b-towels.jpg` — realistic amber oil bottle and folded towel photo (hero collage Panel B)
- The full visual system: cream + sun + blush palette, Fraunces + Manrope typography, asymmetric collage hero, sun motes, sunlit gradient wash

## 5. Tech / files

```
lucky-dragon-spa/
├── index.html      # entire site, embedded CSS + tiny JS
├── images/
│   ├── panel-a-room.jpg    # hero collage Panel A
│   └── panel-b-towels.jpg  # hero collage Panel B
├── vercel.json     # framework:null, security headers, immutable image cache
├── sitemap.xml
├── robots.txt
└── NOTES.md        # this file
```

## 6. Open / closed JS logic

The hero status badge auto-flips between "Open now until 11 PM today" (green dot) and "Closed now · opens 9 AM tomorrow" (warm dot) based on the visitor's local time:

```js
const nowH = now.getHours() + now.getMinutes() / 60;
const open = nowH >= 9 && nowH < 23;
```

## 7. Deployment

URL slug: **`lucky-dragon-spa`** → live at `https://lucky-dragon-spa.vercel.app/`. Canonical, OG, sitemap, robots, and JSON-LD all reference that hostname.

```bash
cd lucky-dragon-spa
npx vercel --prod --name lucky-dragon-spa
```
