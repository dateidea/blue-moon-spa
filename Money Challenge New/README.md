# Oasis 8 Massage — One-Page Site

A static, hand-built one-page website for **Oasis 8 Massage**, a calm local
massage spot at **7900 El Cajon Blvd, Suite C, La Mesa, CA 91942**. Built in
plain HTML, CSS, and a small bit of JavaScript — no framework, no build step.

## What's in here

```
.
├── index.html           # The site
├── styles.css           # Botanical water retreat design system
├── script.js            # Mobile menu, today's-hours pill, sticky-call hide
├── vercel.json          # Project name + caching headers
├── robots.txt           # SEO
├── sitemap.xml          # SEO
├── IMAGE_PROMPTS.md     # On-brand prompts to regenerate originals
├── images/              # Photos used on the page
└── README.md            # You are here
```

## Run locally

Any static server works. From this folder:

```bash
# Python
python3 -m http.server 4321

# or Node
npx serve .

# or just open index.html in a browser
open index.html
```

## Deploy to Vercel — URL must include the business name

The Vercel project name in `vercel.json` is `oasis-8-massage`, which gives you
`https://oasis-8-massage.vercel.app/`.

```bash
# Once, link this folder as a fresh Vercel project named "oasis-8-massage"
npx vercel link --yes --project oasis-8-massage

# Then ship
npx vercel --prod
```

If the working folder is already linked to another Vercel project from a
previous deploy, unlink first:

```bash
rm -rf .vercel && npx vercel link --yes --project oasis-8-massage
```

The default `*.vercel.app` URL will be `oasis-8-massage.vercel.app` (or, if
that exact name is taken on the account, Vercel will append a short suffix —
the URL still clearly contains the business name).

## Business information used (from Google Maps + the official site)

| Field | Value |
|---|---|
| Name | Oasis 8 Massage |
| Address | 7900 El Cajon Blvd, Suite C, La Mesa, CA 91942 |
| Phone | (619) 439-6708 — `tel:+16194396708` |
| Email | oasis8massage@gmail.com |
| Hours | Open every day, **10:00 AM – 9:30 PM** |
| Tagline | Feel Better. Sleep Better. Live Better. |
| Coordinates | 32.7696314, -117.0269936 |
| Google Maps | https://maps.app.goo.gl/J6ads3zKBJoKfXdE9 |

### Services on the page (confirmed from the official Oasis 8 site)

- **Foot Massage** — 1 hour — $45 (warm Epsom soak + foot/lower-leg pressure)
- **Full Body with Hot Stones** — 1 hour — $60
- **Deep Tissue** — 1 hour — $50
- **Couples Massage** — side-by-side in a private room
- **Foot + Body Combos**
  - 30 min foot + 30 min body — $45
  - 40 min foot + 40 min body — $60
- **Military discount** — 10% off with valid ID

## Conversion-first elements

- **Phone number** appears in the header, hero, action strip, every service
  card, the "Your reset" cards, the process section, the contact block, the
  final CTA, the footer, and a mobile sticky bar — every link is `tel:`.
- **Get Directions** buttons repeat throughout, all opening
  `https://maps.app.goo.gl/J6ads3zKBJoKfXdE9` in a new tab.
- **Open in Google Maps** + an embedded map iframe in the contact section.
- **Mobile sticky call bar** (with a directions button) shows on screens
  ≤ 920px, and auto-hides over the final CTA so the buttons don't stack.
- **Today's hours pill** in the hero updates open / closed based on the
  visitor's local time (10:00–21:30).
- The page renders the most important info — what they do, where, when, and
  the phone number — within the first viewport on mobile.

## SEO

- `<title>`, meta description, Open Graph + Twitter cards
- `MassageTherapy` JSON-LD schema with full address, phone, hours, geo, map
- `robots.txt` + `sitemap.xml`
- Semantic HTML, single `<h1>`, descriptive alt text on every image

## Accessibility notes

- Skip link to the contact block
- Visible focus states on all interactive elements
- All `<details>` / `<summary>` FAQs are keyboard accessible
- `aria-expanded`, `aria-controls`, and `aria-label` on the mobile menu
- `prefers-reduced-motion` disables transitions and smooth scrolling
- Tap targets ≥ 44px on mobile
- Color contrast checked: jade-800 on ivory, ivory on jade-900

## Honest, evergreen content choices

The site is built to be **set once and left alone**. Anything that would
naturally drift over time has been removed from the copy:

- **No review counts**, no "X stars on Y reviews" claim, no "voted best of"
  language, no dated awards. The reviews section uses owner-supplied
  illustrative guest stories with first names and neighborhoods. A link at
  the bottom of that section sends visitors to the live Google Maps listing
  for verified reviews — that count stays current automatically.
- **No "this month" / "limited time" copy.** Nothing references a year, a
  season, or a specific promotion end date.
- **Hours** are stated once ("Open every day, 10 AM to 9:30 PM") and the
  hero "Today" pill is computed live in JavaScript from the same numbers,
  so a visitor at 11 PM sees "Closed, opens 10 AM" without you touching
  anything.
- **Pricing** matches the menu published on the official Oasis 8 site at the
  time of writing. If you raise prices, edit the four spots in
  `index.html` (Foot, Full Body, Deep Tissue, and the two Combo lines).
  All other claims hold without edits.
