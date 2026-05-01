# Rebuilding ncoreUX: Wix to Clean HTML/CSS

A guide capturing how the ncoreUX portfolio site was rebuilt from Wix-exported static HTML into a clean, hand-crafted HTML/CSS site — zero JavaScript, GitHub Pages ready.

---

## 1. What Was Built

| Page | File | Purpose |
|------|-------|---------|
| Home | `index.html` | Name, intro, profile photo, navigation circles |
| Portfolio | `portfolio.html` | 18 project sections with images, split layouts, Figma embeds |
| Method | `method.html` | 8 UX process/method sections |
| Patterns | `patterns.html` | 8 interaction design pattern sections |
| Fitoori (3) | `fitoori-home.html`, `fitoori-cocreate.html`, `fitoori-customize.html` | Fitoori jewelry project pages |

**Single stylesheet:** `css/styles.css` — design tokens, layout, typography, responsive.
**JavaScript:** `js/fab.js` — Floating Action Button for mobile navigation (scroll-triggered, auto-collapse).

---

## 2. The Wix Problem

Wix exports produce:
- **100+ JS files** (runtime, vendors, polyfills, analytics)
- **33+ CSS files** with minified/obfuscated class names (`_2gVUN`, `_3aN2R`)
- **Thumbnail images** (52–117px) embedded via `data-image-info` JSON attributes pointing to the real CDN URLs
- **Deeply nested divs** with no semantic meaning
- Inline styles scattered everywhere
- No meaningful `alt` text, no `<main>`, no `<section>`

### What was kept
- Design intent: colors, fonts, spacing, layout relationships
- Full-resolution images (re-downloaded from Wix CDN)
- Content text (titles, descriptions, client names, technologies)

### What was discarded
- All Wix JS/CSS/runtime files
- Obfuscated class names
- Nested wrapper divs
- Wix analytics/tracking

---

## 3. Tools That Came in Handy

### Essential Tools

| Tool | What It Did | Why It Mattered |
|------|------------|-----------------|
| **Claude Code (Opus)** | AI assistant — generated HTML/CSS, bulk image downloads, SEO tags, iterative fixes | Handled ~80% of the volume; turned a 30-hour job into ~8 hours |
| **Git / GitHub** | Version control, branch management | `refr2` branch kept the rebuild isolated from the live site |
| **curl** | Downloaded 83 images from Wix CDN | Only reliable way to get full-res images from Wix static servers |
| **Node.js** | Parsed Wix HTML to extract `data-image-info` JSON | Python wasn't available on the system; Node handled DOM/JSON parsing well |
| **VS Code** | Code editing + Claude Code extension | Side-by-side editing with AI suggestions; live file watching |
| **Browser DevTools** | Inspected computed styles on the live Wix site | The only way to decode Wix font classes (`font_8` → 13px sans) |
| **GitHub Pages** | Hosting target | Free, zero-config hosting for static HTML sites |

### Nice-to-Have Tools

| Tool | What It Did |
|------|------------|
| **npx serve** | Local dev server for testing before pushing |
| **Git Bash (Windows)** | Unix-like shell on Windows — needed for curl, sed, awk |
| **du / wc** | Quick file size and line count checks |
| **find** | Inventory of Wix bloat files across `*_files/` directories |

### Tools NOT Needed

| Tool | Why Not |
|------|---------|
| **Python** | Not installed; Node.js substituted for all parsing tasks |
| **Webpack / build tools** | Zero JS, single CSS file — no build step needed |
| **Sass / PostCSS** | CSS custom properties handled everything; no preprocessor needed |
| **Image editors** | All images downloaded at correct size from CDN; no manual resizing |
| **Figma** | Existing Wix site served as the visual spec |

---

## 4. Image Extraction from Wix CDN

This was the hardest part. Wix doesn't serve full-res images directly — it serves tiny thumbnails and stores the real image URI in a `data-image-info` JSON attribute.

### Wix CDN URL Pattern

```
https://static.wixstatic.com/media/{uri}/v1/fill/w_{width},h_{height},al_c,q_90,enc_auto/{filename}
```

- `fill` mode **crops** to fit the target dimensions — aspect ratio must match the original to avoid cropping
- `uri` is found in `data-image-info` JSON → the `uri` field
- Original dimensions are in `data-image-info` → `width` and `height`

### How to Extract Image URIs from Wix HTML

**Node.js script** (Python was not available on the system):

```js
const fs = require('fs');
const html = fs.readFileSync('original-wix-page.html', 'utf8');

// Find all data-image-info attributes
const regex = /data-image-info="([^"]+)"/g;
let match;
while ((match = regex.exec(html)) !== null) {
  const decoded = match[1].replace(/&quot;/g, '"');
  const info = JSON.parse(decoded);
  console.log(`URI: ${info.imageData.uri}`);
  console.log(`Size: ${info.imageData.width}x${info.imageData.height}`);
  console.log('---');
}
```

### Download Command

```bash
curl -o image-name.png "https://static.wixstatic.com/media/{uri}/v1/fill/w_{W},h_{H},al_c,q_90,enc_auto/{uri}"
```

**Important:** Use the original aspect ratio. If the original is 862x1726, download at half (431x863) — not an arbitrary size like 400x790 which will crop.

### Mapping Images to Sections

The critical challenge: Wix HTML doesn't label which images belong to which section. The approach that worked:

1. Parse the Wix HTML with Node.js
2. Walk the DOM in document order
3. Extract section headings (`font_5` class = h5 in Wix)
4. Extract `data-image-info` URIs between headings
5. This gives you the correct image-to-section mapping

**~79 images** were extracted and organized into:
- `images/portfolio/` — ~50 images across 9 project subdirectories
- `images/method/` — 13 images
- `images/patterns/` — 11 images
- `images/home/` — profile photo (AVIF format with 2x srcset)
- `images/icons/` — favicons + OG image

---

## 5. CSS Architecture

### Design Tokens (Custom Properties)

```css
:root {
  /* Neutrals */
  --gray-100: #eae5e5;
  --gray-200: #c4c4c4;
  --gray-400: #4d4d4d;
  --gray-500: #424242;

  /* Brand */
  --red-primary: #e83556;
  --teal-primary: #61cfd3;
  --yellow-primary: #d1c825;

  /* Semantic */
  --color-bg-primary: #eae5e5;
  --color-bg-dark: #424242;
  --color-bg-accent: #e83556;
  --color-text-primary: #000000;
  --color-text-secondary: #4d4d4d;
  --color-text-white: #ffffff;

  /* Layout */
  --site-width: 980px;
  --font-serif: 'Noticia Text', Georgia, serif;
  --font-sans: 'Open Sans', Arial, Helvetica, sans-serif;
}
```

### Wix Font Class Mapping

| Wix class | Actual style | CSS equivalent |
|-----------|-------------|----------------|
| `font_0` | 80px serif display | `.heading-display` |
| `font_2` | 46px serif | `.heading-2` |
| `font_5` | 19px serif (section titles) | `.project__title` |
| `font_6` | 17px serif (subtitles) | `.project__subtitle` |
| `font_7` | 16px sans body large | `.body-large` |
| `font_8` | **13px/1.5 sans body** | `.project__description` |
| `font_9` | 12px sans small | `.project__meta` |

**Key lesson:** `font_8` is 13px sans-serif, NOT 17px serif. Getting this wrong makes body text look like headings.

### Layout Patterns

**Alternating sections:**
```html
<section class="project project--light">...</section>
<section class="project project--dark">...</section>
```

**Split layout** (text left 35%, images right 65%):
```html
<div class="project__split">
  <div class="project__split-text">
    <p>Description...</p>
  </div>
  <div class="project__split-images project__split-images--3col">
    <img src="..." alt="..." loading="lazy">
  </div>
</div>
```

**Image grids:**
- `.project__image-main` — single full-width image
- `.project__image-row--screens` — 2-up (flex, 50% each); stacks to full-width on mobile
- `.project__image-row--phones` — fixed 226px width per phone, space-around
- `.project__split-images--3col` — 3-up in split layout (stays 3-col on mobile)
- `.project__split-images--4col` — 4-up in split layout (2-col on mobile)
- `.visual-phones-container` / `.wireframe-container` — white bg wrapper with space-around
- `.figma-embed` — responsive iframe container for Figma prototypes

**Page layouts:**
- `.page-hero--horizontal` — icon-circle + title left, nav circles right (used on portfolio, method, patterns)
- `.section--home` — extra padding (90px) for home page hero

**Mobile components:**
- FAB (Floating Action Button) — mobile-only nav with glass effect, scroll-triggered visibility at 70%, staggered item animations, 5s auto-collapse

---

## 6. SEO Implementation

### Modern Meta Tags (2025+ best practices)

```html
<!-- Remove: meta keywords (ignored by search engines since ~2009) -->

<!-- Required -->
<meta name="description" content="...">
<link rel="canonical" href="https://www.ncoreux.com/page">

<!-- Open Graph -->
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:url" content="...">
<meta property="og:site_name" content="ncoreUX">
<meta property="og:type" content="website">
<meta property="og:locale" content="en_US">
<meta property="og:image" content="https://www.ncoreux.com/images/icons/og-image.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="...">
<meta name="twitter:description" content="...">
<meta name="twitter:image" content="https://www.ncoreux.com/images/icons/og-image.png">
```

### Structured Data (JSON-LD)

Use `@graph` to combine multiple schema types:

```html
<script type="application/ld+json">{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "name": "ncoreUX",
      "url": "https://www.ncoreux.com"
    },
    {
      "@type": "Person",
      "name": "Subhan Ali",
      "jobTitle": "User Experience Designer",
      "url": "https://www.ncoreux.com",
      "knowsAbout": ["UX Design", "AI-UX Design", "AI Healthcare", "UX in Healthcare"],
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "WA",
        "addressCountry": "US"
      }
    }
  ]
}</script>
```

### OG Image

Standard size: **1200x630px**. Created from favicon/branding and placed at `images/icons/og-image.png`.

### Favicons

Three sizes needed:
- `favicon.png` — 32x32 (browser tab)
- `favicon-192.png` — 192x192 (Android/PWA)
- `apple-touch-icon.png` — 180x180 (iOS home screen)

Downloaded from Wix CDN using the same `data-image-info` extraction method.

---

## 7. Challenges and Solutions

### Challenge: Blurred Portfolio Images
**Problem:** Wix save/export only gives you thumbnail-sized images (52–117px).
**Solution:** Extract real CDN URIs from `data-image-info` JSON attributes and download at full resolution using constructed Wix CDN URLs.

### Challenge: Wrong Image-to-Section Mapping
**Problem:** Initial image assignments had critical errors — Datalake images ended up in StaySMARTCARE, etc.
**Solution:** Parse the original Wix HTML in document order, walking headings and images sequentially to produce the correct mapping. Node.js was used since Python wasn't available.

### Challenge: Image Cropping with Wix CDN
**Problem:** Wix CDN `fill` mode crops images if the requested dimensions don't match the original aspect ratio. Marvin iPhone screenshots had tops/bottoms cut off.
**Solution:** Always calculate exact half or quarter ratios from the original dimensions (e.g., 862x1726 → 431x863). Never use arbitrary sizes.

### Challenge: Identifying Wix Font Styles
**Problem:** Wix uses opaque class names (`font_8`, `font_5`) with no documentation.
**Solution:** Inspect computed styles in the original Wix page. Map each `font_N` class to its actual CSS values. Key finding: `font_8` = 13px/1.5 sans-serif (body text), not 17px serif.

### Challenge: grep -P Not Available on Windows
**Problem:** Perl-compatible regex (`grep -P`) doesn't work in Git Bash on Windows.
**Solution:** Use `sed`, `awk`, or Node.js for complex text extraction instead.

---

## 8. File Structure

```
refresh/
  index.html
  portfolio.html
  method.html
  patterns.html
  fitoori-home.html
  fitoori-cocreate.html
  fitoori-customize.html
  figma_embed.md           (Figma iframe codes for case study prototypes)
  Subhan_resume__UxD.pdf
  css/
    styles.css
  js/
    fab.js                 (FAB: scroll-triggered mobile nav, glass effect)
  images/
    home/
      profile-photo.avif
      profile-photo-2x.avif
    portfolio/
      hackensack/          (IA + iPhone wireframes + visual designs)
      datalake/            (pipeline visualizations)
      staysmartcare/       (iPad + iPhone screens)
      readabl/             (overview + screens)
      dataez/              (screens)
      automaton/           (screens)
      hal/                 (screens)
      predictiverx/        (wireframes + web screens)
      marvin/              (iPhone wireframes)
      movimento/           (dashboard + snapshot screens)
      shoutmd/             (community platform screens)
      pwc/                 (Expense, Hoteling, Tax DMS — iPhone + iPad)
      fitoori/             (hero image)
    method/                (13 images: process diagrams, journey maps, IA, personas)
    patterns/              (11 images: AIDA, datalake, scheduling, radial menu, etc)
    misc/                  (source images from Wix Media Manager downloads)
    icons/
      favicon.png          (32x32)
      favicon-192.png      (192x192)
      apple-touch-icon.png (180x180)
      og-image.png         (1200x630)
  skill/
    rebuild-summary.md     (this file)
    rebuild-efforts.md     (effort, cost, permissions log)
    rebuild-skill.md       (reusable playbook)
```

---

## 9. Navigation Architecture

All pages share a consistent footer with 5 items:
1. **Portfolio** (UX circle) → `portfolio.html`
2. **Methods** (M circle) → `method.html`
3. **Patterns** (P circle) → `patterns.html`
4. **Case Study** (C circle) → external Readymag link
5. **Resume** (document icon) → `Subhan_resume__UxD.pdf`

Each inner page has a hero section with 3 circle buttons linking to the other two inner pages + Home.

---

## 10. Useful Commands

### Download image from Wix CDN
```bash
curl -o output.png "https://static.wixstatic.com/media/{URI}/v1/fill/w_{W},h_{H},al_c,q_90,enc_auto/{URI}"
```

### Check image dimensions
```bash
file image.png
# or
identify image.png  # if ImageMagick is installed
```

### Serve locally for testing
```bash
npx serve .
# or
python -m http.server 8000
```

### Validate HTML
```bash
npx html-validate index.html
```

### Check file sizes
```bash
du -sh images/portfolio/
wc -c css/styles.css
```

---

## 11. Before vs After

| Metric | Wix Export | Clean Rebuild |
|--------|-----------|---------------|
| JS files | 100+ | 0 |
| CSS files | 33+ | 1 |
| HTML files | 4 (bloated) | 4 (semantic) |
| Total page weight | ~5MB+ per page | ~200KB–1MB per page (images) |
| Class names | `_2gVUN`, `_3aN2R` | `.project__title`, `.hero-circle` |
| Semantic HTML | None | `<main>`, `<section>`, `<footer>`, `<header>` |
| SEO | Minimal | Full OG, Twitter Cards, JSON-LD, canonical |
| Accessibility | Poor | `aria-label`, `alt` text, landmark elements |
| GitHub Pages | Broken | Works out of the box |

---

## 12. UX Nuances That Shaped the Final Outcome

Rebuilding from Wix wasn't just a code migration — it required understanding and preserving the **design intent** behind the original site. These are the UX decisions that mattered.

### Visual Rhythm Through Alternating Sections
The portfolio, method, and patterns pages all use alternating `project--light` and `project--dark` sections. This isn't decorative — it creates **visual chunking** that helps users parse distinct projects without explicit separators. Each section is a self-contained unit: title, subtitle, divider, description, metadata, images. The dark/light alternation provides the boundary that a card or border would otherwise need.

### The Circle Button Navigation Pattern
The three hero circles (Portfolio, Method, Patterns) use color-coded backgrounds — red, teal, yellow — that persist across all pages. This **color consistency** creates spatial memory: users associate the color with the destination. The circles appear in the home page intro, in every page hero, and in the footer — three touchpoints reinforcing the same mental model.

### Profile Photo Treatment
The profile image uses `filter: grayscale(100%) contrast(110%) brightness(95%)` — not just desaturation but a deliberate tonal adjustment that gives the photo a professional, editorial quality. It also ensures the photo doesn't compete with the colorful navigation circles for visual attention.

### Split Layout for Dense Content
The Hackensack iPhone wireframes section uses a **split layout** (35% text / 65% images) instead of the standard stacked layout. This was a deliberate choice because this section has both descriptive text AND multiple small phone wireframes. Stacking would create a long vertical scroll with text islands between tiny images. The split layout lets users read the context while scanning the wireframes simultaneously — **parallel information consumption**.

### Phone Image Sizing at 226px
Phone wireframes are set to exactly 226px width across all sections. This isn't arbitrary — it's the size at which phone UI details remain legible while fitting 3-4 phones side by side within the 980px content width. Smaller (like 140px) makes UI text unreadable; larger breaks the row layout.

### Typography Hierarchy
The site uses just two font families for a clear hierarchy:
- **Noticia Text (serif)** for headings, titles, the bio, and the quote — conveys authority and personality
- **Open Sans (sans-serif)** for body text, descriptions, metadata, and UI elements — conveys clarity and readability

The critical nuance: body descriptions (`font_8` in Wix) are **13px Open Sans**, not serif. Using serif for body text (a mistake made during the build) made descriptions feel like sub-headings instead of readable paragraphs. The font switch from serif to sans-serif for body text was one of the most impactful fixes.

### The Quote as Emotional Anchor
The Oliver Wendell Holmes quote on the home page uses `italic 18px serif` in `--red-dark` (#9a2339). It's the only element on the page with both italic styling and a warm accent color. This combination signals that it's a **personal statement**, not content to be scanned — it invites the visitor to pause and read.

### Header as a Subtle Color Bar
The red header bar is reduced to `min-height: 10px` with `opacity: 20%` — essentially a thin tinted line. This is a deliberate design decision: the header provides **brand color presence** (the red accent) without consuming vertical real estate. On inner pages it's just enough to signal "you're still on the same site" without competing with the page hero.

### Footer as Secondary Navigation
The footer serves dual purpose: copyright/attribution AND a complete navigation system. The circle buttons in the footer use the same visual language as the hero circles (round, labeled) but at a smaller 48px size. This means users who scroll to the bottom are never stranded — they have full navigation without scrolling back up.

### Dark Section Text Color Override
In dark sections, ALL text elements (title, subtitle, description, meta) flip to white. But the divider also changes — from `--color-line` (dark gray) to white. This detail is easy to miss, but without it the divider disappears against the dark background, and the visual hierarchy breaks.

### Image Loading Strategy
All images below the fold use `loading="lazy"`. The profile photo on the home page does NOT — it's above the fold and needs to load immediately. This is a performance nuance that affects perceived load time: the most important visual element (the person's face) appears instantly, while project screenshots load as the user scrolls.

### Consistent Metadata Pattern
Every project section follows the same information hierarchy:
1. **Title** (19px serif) — what is it
2. **Subtitle** (17px serif) — who/what context
3. **Divider** (3px line, max-width 200px) — visual break
4. **Description** (13px sans) — what was done and why
5. **Client** + **Technology** (12px sans, bold label) — factual metadata
6. **Images** — visual proof

This consistency means users learn the pattern once and can scan any section efficiently. Breaking this pattern (e.g., putting images before description) would force re-learning on every section.

### Responsive Simplification
At 768px and below:
- Home intro stacks vertically and centers
- Profile photo shrinks to 240px (still large enough to recognize a face)
- Hero circles shrink to 100px (still tappable on mobile)
- Footer items stack vertically and center
- Page hero titles drop from 43px to 32px

The key UX principle: **nothing is hidden on mobile** — every element is still present, just reflowed. No hamburger menus, no hidden content, no "view more" buttons.

---

## 13. Tips for Doing This Again

1. **Start with images.** They're the hardest part. Extract all URIs first, download at full res, map to sections.
2. **Use the Wix page in a browser** to inspect computed styles. Don't guess from class names.
3. **Build one page first** (portfolio is the most complex), get the CSS system right, then the others go fast.
4. **Alternating dark/light sections** create visual rhythm without any design complexity.
5. **CSS custom properties** make color changes trivial — change one token, entire site updates.
6. **No JS needed** for a portfolio site. Transitions and hovers are CSS-only.
7. **Always use `loading="lazy"`** on images below the fold.
8. **Test on mobile early.** The responsive breakpoint at 768px handles most cases with flexbox direction changes.
9. **OG image is 1200x630.** Create it early so all pages can reference it.
10. **Commit frequently** on a feature branch. The rebuild touches every file.

---

## 14. Continuing on Another PC

### What you need
- Git, Node.js, VS Code + Claude Code extension

### Steps

```bash
# 1. Clone and switch to the working branch
git clone https://github.com/ncoreux/folio.git
cd folio
git checkout refr2

# 2. Review in browser
# Open index.html directly, or:
npx serve .

# 3. Make any changes, then push
git add -A
git commit -m "describe your changes"
git push origin refr2

# 4. When fully satisfied, merge to main (this makes it live)
git checkout main
git merge refr2
git push origin main
```

### Picking up with Claude Code
1. Open the project in VS Code
2. Start Claude Code
3. Say: "Read `skill/toc.md` — that has the full context for this rebuild"
4. Claude reads the three skill docs and has full context to continue

### What NOT to do
- Don't push to `main` until you've reviewed everything — `main` is what GitHub Pages serves
- Don't delete the `refr2` branch until after merge — it's your safety net

---

## 15. Deployment Checklist

Steps to go live on GitHub Pages with a custom domain:

- [ ] Merge `refr2` branch into `main` (or push `main` directly)
- [ ] Enable GitHub Pages: Settings → Pages → Source: `main` / root
- [ ] Verify `index.html` loads at `https://<username>.github.io/<repo>/`
- [ ] Add `CNAME` file in root with `www.ncoreux.com` (for custom domain)
- [ ] Configure DNS: add CNAME record `www` → `<username>.github.io`
- [ ] Configure DNS: add A records for apex domain pointing to GitHub's IPs
- [ ] Wait for DNS propagation (~15 min to 48 hours)
- [ ] Enable "Enforce HTTPS" in GitHub Pages settings
- [ ] Verify all canonical URLs resolve correctly
- [ ] Test OG tags with Facebook Sharing Debugger and Twitter Card Validator
- [ ] Test all internal links (portfolio, method, patterns, index, resume PDF)
- [ ] Test external links (Case Study on Readymag)
- [ ] Run Lighthouse audit (aim for 90+ on Performance, Accessibility, SEO)
- [ ] Move old Wix files to `bkp/` or delete once live site is verified

---

## 15. Known Issues & Future Improvements

### Current Gaps
- **No `sitemap.xml`** — should be added for search engine discovery (4 pages + PDF)
- **No `robots.txt`** — currently relies on defaults; should explicitly allow crawling
- **No AVIF fallback** — profile photo uses AVIF format without `<picture>` fallback for older browsers
- **No Lighthouse audit done** — should score 90+ but hasn't been formally tested
- **`sameAs` array is empty** — should include LinkedIn URL once confirmed
- **No `<noscript>` tag** — not needed since there's zero JavaScript, but noted for completeness
- **No 404 page** — GitHub Pages shows its default; a custom `404.html` matching site style would be better

### Potential Enhancements
- **Contact form** — a simple Formspree or Netlify Forms integration (no backend needed)
- **Dark mode toggle** — CSS custom properties make this straightforward; swap token values via `prefers-color-scheme` or a toggle
- **Print stylesheet** — `@media print` rules to make portfolio pages printable as PDF
- **Schema.org `CreativeWork`** — each portfolio project could have its own structured data for richer search results
- **Performance: WebP/AVIF conversion** — convert all PNGs to modern formats with `<picture>` fallbacks for 40-60% size reduction
- **Analytics** — lightweight, privacy-respecting option like Plausible or Fathom (no heavy Google Analytics)

---

## 16. Content Inventory

Quick-reference of all 27 project sections across the 3 content pages. Useful for updating or adding projects later.

### Portfolio (18 sections, ~80 images + 3 Figma embeds)

| # | Section | Client | Technology | Images | Theme |
|---|---------|--------|-----------|--------|-------|
| 1 | Patient Care App — IA | HackensackUMC | iOS, Keynote, PowerPoint, Photoshop | 1 | dark |
| 2 | Patient Care App — iPhone Wireframes + Visual Design | HackensackUMC | iOS, Geo-Fencing | 12 (6 wireframes + 6 visual) | light |
| 3 | IC1101-Datalake | HealthcareTriangle | Figma, React, AWS | 3 | dark |
| 4 | readabl.ai | HealthcareTriangle | Figma, React, AWS | 4 | light |
| 5 | StaySMARTCARE | HealthcareTriangle | Figma, React, AWS | 3 | dark |
| 6 | DataEZ | HealthcareTriangle | Figma, React, AWS | 3 | light |
| 7 | Automaton | HealthcareTriangle | PowerPoint, Illustrator, Figma | 3 | dark |
| 8 | HAL | HealthcareTriangle | — | 4 | dark |
| 9 | Predictive Rx — iPhone | HealthcareTriangle | iOS, Photoshop, PowerPoint | 7 | light |
| 10 | Predictive Rx — Web | HealthcareTriangle | — | 4 | dark |
| 11 | Marvin — iPhone/iPad | HealthcareTriangle | iOS, Figma | 4 | light |
| 12 | Movimento | Movimento | Sketch, PowerPoint, Photoshop | 3 | light |
| 13 | Community Platform Tool | Shout MD | Sketch, PowerPoint, Photoshop, Liferay, CMS | 2 | dark |
| 14 | Mobile Expense App (IA + iPhone + iPad) | PwC | iOS, Axure, Visio, PowerPoint, Photoshop | 5 | light |
| 15 | Hoteling App (iPad + iPhone) | PwC | iOS, Axure, Visio, PowerPoint, Photoshop | 5 | dark |
| 16 | Tax DMS App — iPad | PwC | iOS, Axure, Visio, PowerPoint, Photoshop | 1 | light |
| 17 | Additional Case Studies | Deephealth/GE/Philips | Figma | 3 Figma embeds | dark |
| 18 | Fitoori | — | — | 1 | dark |

### Method (8 sections, 13 images)

| # | Section | Client | Technology | Images | Theme |
|---|---------|--------|-----------|--------|-------|
| 1 | UX Process in SDLC | — | — | 2 | light |
| 2 | Journey Map / Order Outlook | Bloom Energy | Figma, SF | 3 | dark |
| 3 | IA, Navigation — Marvin | HealthcareTriangle | Figma, React | 3 | light |
| 4 | Task Flow and IA/Hierarchy | Microsoft | Sharepoint, MS Visio | 1 | light |
| 5 | UX Strategy — ShoutMD | Shout MD | CMS, Liferay, Salesforce, Badgeville | 1 | dark |
| 6 | Persona — Sample | Shout MD | CMS, Liferay, Salesforce, Badgeville | 1 | dark |
| 7 | Experience Journey Map | HackensackUMC | Photoshop, Sketch | 1 | light |
| 8 | IA / Sitemap | HackensackUMC | iOS, Keynote | 1 | dark |

### Patterns (8 sections, 11 images)

| # | Section | Client | Technology | Images | Theme |
|---|---------|--------|-----------|--------|-------|
| 1 | AIDA — Image Recognition | HealthcareTriangle | Figma, React | 1 | light |
| 2 | Data Lake Data Pipeline | HealthcareTriangle | Figma, React | 4 | dark |
| 3 | Scheduling Pattern — Intermodal | BNSF | Photoshop, PowerPoint | 1 | light |
| 4 | Business Rules Tool | Wells Fargo | Sketch | 1 | dark |
| 5 | Timeline Tool — Horizons | Horizons | PowerPoint, Photoshop | 1 | light |
| 6 | Radial Menu — me@PwC | PwC | iOS, Axure, Photoshop | 1 | dark |
| 7 | Navigation Pattern — Pathfinder | Infosys | PowerPoint, MS Visio | 1 | light |
| 8 | Dashboard PageType — X-Portal | Infosys | MS Visio, Photoshop | 1 | dark |

### Summary Totals

| Page | Sections | Images | Clients |
|------|----------|--------|---------|
| Portfolio | 18 | ~80 + 3 Figma embeds | 7 (HackensackUMC, HealthcareTriangle, Movimento, Shout MD, PwC, Deephealth/GE/Philips) |
| Method | 8 | 13 | 5 (Bloom Energy, HealthcareTriangle, Microsoft, Shout MD, HackensackUMC) |
| Patterns | 8 | 11 | 6 (HealthcareTriangle, BNSF, Wells Fargo, Horizons, PwC, Infosys) |
| **Total** | **34** | **~104 + 3 embeds** | **12 unique clients** |
