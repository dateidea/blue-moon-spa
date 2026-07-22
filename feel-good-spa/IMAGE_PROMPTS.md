# Feel Good Spa — Image Prompts

Use these in ChatGPT (GPT-4o image generation) to replace the imagery
with original Feel Good Spa visuals. Save each output into
`feel-good-spa/images/` with the file name listed.

The current site reuses three warm interior frames from the previous
project that already match the new direction (linen, terracotta plant,
warm wood, soft window light). Regenerating with the prompts below will
produce a cohesive, peach-leaning shoot that fully matches the brand.

---

## Shared style language (paste once, reuse for every prompt)

> Photorealistic editorial photograph for a small, warm, neighborhood
> massage spa called Feel Good Spa on El Cajon Boulevard, San Diego.
> Soft late-afternoon daylight through sheer linen curtains. Warm
> color palette: cream `#FBF5EB`, soft peach `#F4B89B`, sand `#E0CAB0`,
> warm brown `#4A3A2D`. Slight film grain, gentle shallow depth of
> field, no oversaturation, no HDR. Mood: cozy, friendly, calm,
> clean — like the room you walk into after a stressful day. NO
> people in any frame. If hands appear, hands only — anatomically
> correct, short clean nails, no rings. No text, no logos, no
> watermarks. 50mm full-frame lens.

---

## hero — `images/atmosphere-room.jpg` (3:2, 1600×1067) — primary

> Following the shared style language: a cozy, sun-warm massage room
> at Feel Good Spa. A wooden massage table at the right of the frame
> made up with a freshly folded ivory linen towel. A small wooden
> stool to the left holding a tiny ceramic bowl of warm sesame oil
> and a single polished river stone. Sheer linen curtain on the
> left letting in soft golden afternoon light. A small terracotta
> pot with a trailing pothos plant hanging at the top of the frame.
> Cream-painted plaster wall behind. Composition: rule-of-thirds,
> table on the right, room breathing on the left for headline
> overlay. 3:2.

## comfort photo — `images/atmosphere-detail.jpg` (4:5, 1200×1500)

> Following the shared style language: a tighter detail shot of the
> same Feel Good Spa room. The corner of the wooden massage table
> in the foreground with a stack of two folded ivory linen towels.
> A small terracotta dish of warm aromatic oil. A faint waft of
> steam. Behind, slightly out-of-focus: cream plaster wall, a hint
> of a hanging plant, soft window light from camera-left. Vertical
> composition. 4:5.

## gallery wide — `images/gallery-wide.jpg` (16:9, 1600×900)

> Following the shared style language: a wide environmental view of
> the front room of Feel Good Spa. A small reception bench against
> a cream wall with two folded peach-cream linen towels stacked on
> it. A simple wooden side table holding a ceramic teapot and two
> stoneware cups. A pair of indoor slip-on sandals neatly placed
> beside the bench. Warm afternoon light coming through linen
> curtains casting long soft shadows. NO people. 16:9.

## gallery tall — `images/gallery-tall.jpg` (3:4, 900×1200)

> Following the shared style language: vertical detail shot of a
> small wooden tray on a folded ivory linen towel. On the tray: a
> stack of three smooth, warmed basalt stones; a small terracotta
> bowl with a few drops of warm sesame oil; a single sprig of dried
> lavender. Soft window light from camera-left, deep warm shadow on
> the right. Behind: a hint of cream plaster wall and a sage-green
> trailing plant. 3:4.

## gallery square — `images/gallery-stone.jpg` (3:2, 1200×800)

> Following the shared style language: a small wooden side table
> beside a massage table dressed in fresh ivory linen. On the side
> table: a tiny ceramic bowl of warm oil, a single river stone, and
> a sprig of olive leaves in a small glass jar. Pothos hanging in
> the upper-right corner. Soft, airy daylight through sheer linen
> curtains. 3:2.

---

## Optional: a single staff portrait (use only if you want one)

The brief asks for **zero or one** staff image. If you choose to add
one (file name `images/staff-01.jpg`, 4:5, 1200×1500), use this:

> Photorealistic editorial portrait of a calm, smiling adult woman
> in her late 20s or 30s, of East Asian (Chinese or Japanese)
> appearance, professional spa front-desk attendant at Feel Good
> Spa. She is wearing a modest cream linen apron over a soft
> peach-tone blouse that covers the collarbones. Hair tied back
> neatly. Calm, welcoming, friendly expression — eyes meeting the
> camera. Hands relaxed at her sides or folded. Soft afternoon
> daylight through linen curtains, cream plaster wall behind.
> Background slightly out of focus. NO suggestive pose, NO
> revealing clothing, NO sexualized framing, NO massage bed or
> oils in frame — this is a portrait at the front desk. Photorealistic,
> mid-shot from the waist up, 50mm. 4:5.

The current build deliberately excludes any staff portrait and uses
zero faces. Add this only if the owner wants one.

---

## After generating

1. Save each image at the file name listed (overwrites placeholders).
2. Compress each output to under ~400 KB (e.g. with `sips -s
   formatOptions 70 input.jpg --out output.jpg` on macOS).
3. Re-run `vercel deploy --prod` from the project folder.
