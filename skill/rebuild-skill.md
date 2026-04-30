# Rebuild Skill: Wix Site → Clean HTML/CSS

A reusable, step-by-step playbook for converting any Wix-exported static site into a hand-crafted HTML/CSS site. Designed for use with AI assistance (Claude Code or similar).

---

## Prerequisites

### Tools Needed

| Tool | Purpose | Required? |
|------|---------|-----------|
| **Git** | Version control, branching | Yes |
| **Git Bash** (Windows) or Terminal (Mac) | Shell commands | Yes |
| **curl** | Downloading images from Wix CDN | Yes |
| **Node.js** | Parsing Wix HTML (extracting `data-image-info` JSON) | Yes |
| **VS Code** | Code editor + live preview | Recommended |
| **Browser DevTools** | Inspecting original Wix site for computed styles | Yes |
| **Claude Code** (or similar AI) | Generating HTML/CSS, bulk operations | Recommended |
| **npx serve** or **python -m http.server** | Local dev server for testing | Recommended |
| **ImageMagick** (`identify` command) | Checking image dimensions | Optional |
| **GitHub Pages** | Hosting | Optional |

### Knowledge Needed

- Basic HTML5 semantic elements (`<main>`, `<section>`, `<footer>`)
- CSS custom properties (variables)
- Flexbox layout
- SEO meta tags (Open Graph, Twitter Cards, JSON-LD)
- Wix CDN URL structure (documented below)

### Files Needed

- The original Wix-exported HTML files (saved via browser "Save Page As" → "Complete")
- Access to the live Wix site (for inspecting computed styles)

---

## Phase 1: Preparation (~30 min)

### Step 1: Export Wix Pages

For each page on the Wix site:
1. Open in browser
2. Right-click → "Save As" → "Webpage, Complete"
3. This gives you an `.html` file + a `*_files/` folder with all assets

### Step 2: Set Up Project Structure

```bash
mkdir -p project-name/{css,images/{home,icons},skill}
cd project-name
git init
git checkout -b rebuild
```

### Step 3: Inventory the Original Site

For each Wix HTML file, note:
- Number of sections/projects
- Section titles and subtitles
- Image count per section
- Dark/light section alternation pattern
- Navigation structure (header, footer, cross-page links)
- Font families and sizes (inspect via DevTools)

---

## Phase 2: Design System (~1 hour)

### Step 4: Extract Colors

Open the Wix site → DevTools → inspect backgrounds and text:
- Note all unique background colors
- Note all text colors
- Note accent/brand colors
- Note border/line colors

Create CSS custom properties:

```css
:root {
  --color-bg-primary: #__;
  --color-bg-dark: #__;
  --color-bg-accent: #__;
  --color-text-primary: #__;
  --color-text-secondary: #__;
  --color-text-white: #__;
  --color-action: #__;
}
```

### Step 5: Extract Typography

Map Wix font classes to real values. Common Wix font classes:

| Wix Class | Typical Use |
|-----------|------------|
| `font_0` | Display / hero heading |
| `font_2` | Page heading (h1-equivalent) |
| `font_5` | Section title (h3-equivalent) |
| `font_6` | Subtitle |
| `font_7` | Body large |
| `font_8` | Body text (the main body — often 13px sans-serif) |
| `font_9` | Small/meta text |

**How to verify:** Inspect the element in the live Wix site → Computed tab → look at `font-family`, `font-size`, `line-height`.

**Common mistake:** Assuming body text is serif. In many Wix sites, body text (`font_8`) is sans-serif.

### Step 6: Define Layout

```css
:root {
  --site-width: 980px;  /* or whatever the original uses */
  --font-serif: 'Noticia Text', Georgia, serif;
  --font-sans: 'Open Sans', Arial, Helvetica, sans-serif;
}
```

---

## Phase 3: Image Extraction (~2 hours)

This is the hardest and most time-consuming phase.

### Step 7: Understand Wix CDN URLs

Wix images are served from `static.wixstatic.com`. The URL pattern:

```
https://static.wixstatic.com/media/{URI}/v1/fill/w_{W},h_{H},al_c,q_90,enc_auto/{FILENAME}
```

- `{URI}` — the image identifier (found in `data-image-info`)
- `{W}`, `{H}` — requested width and height
- `fill` mode **crops** to fit — aspect ratio must match original
- `q_90` — quality 90%
- `enc_auto` — automatic encoding

### Step 8: Extract Image URIs from Wix HTML

Create a Node.js script:

```js
// extract-images.js
const fs = require('fs');
const html = fs.readFileSync(process.argv[2], 'utf8');

// Find all data-image-info attributes
const regex = /data-image-info="([^"]+)"/g;
let match, i = 0;
while ((match = regex.exec(html)) !== null) {
  i++;
  const decoded = match[1].replace(/&quot;/g, '"').replace(/&amp;/g, '&');
  try {
    const info = JSON.parse(decoded);
    const data = info.imageData || info;
    console.log(`Image ${i}:`);
    console.log(`  URI: ${data.uri}`);
    console.log(`  Original: ${data.width}x${data.height}`);
    console.log(`  Target: ${data.displayProperties?.targetWidth || 'N/A'}x${data.displayProperties?.targetHeight || 'N/A'}`);
    console.log('');
  } catch (e) {
    console.log(`Image ${i}: PARSE ERROR`);
  }
}
```

Run: `node extract-images.js original-page.html`

### Step 9: Map Images to Sections

Walk through the Wix HTML in document order. For each section heading (usually `font_5` class), note the images that appear between it and the next heading. This gives you the correct mapping.

**Critical:** Don't guess which images belong where. The Wix HTML order is the only reliable mapping.

### Step 10: Download at Correct Resolution

```bash
# Calculate half-resolution to keep files manageable
# Original: 1920x1080 → Download: 960x540
curl -o images/section/image-name.png \
  "https://static.wixstatic.com/media/{URI}/v1/fill/w_960,h_540,al_c,q_90,enc_auto/{URI}"
```

**Aspect ratio rule:** If original is `W x H`, download at `W/N x H/N` where N is the same divisor for both. Never mix ratios — it causes cropping.

### Step 11: Organize Images

```
images/
  home/           # profile photo, hero images
  portfolio/      # subdirectory per project
    project-a/
    project-b/
  method/         # method page images
  patterns/       # patterns page images
  icons/          # favicons, OG image
```

---

## Phase 4: Build Pages (~2–3 hours)

### Step 12: Start with the Most Complex Page

Build the page with the most sections first (usually portfolio). This forces you to solve all CSS patterns upfront.

### Step 13: Use Alternating Section Pattern

```html
<section class="project project--light">
  <div class="container">
    <h2 class="project__title">Project Name</h2>
    <h3 class="project__subtitle">Client / Context</h3>
    <hr class="project__divider">
    <p class="project__description">What was done and why.</p>
    <p class="project__meta"><strong>Client:</strong> Name</p>
    <p class="project__meta"><strong>Technology:</strong> Tools</p>
    <div class="project__image-main">
      <img src="images/..." alt="Descriptive alt text" loading="lazy">
    </div>
  </div>
</section>

<section class="project project--dark">
  <!-- Same structure, dark background -->
</section>
```

### Step 14: Build Remaining Pages

With the CSS system proven on the complex page, the other pages go fast — same patterns, just different content.

### Step 15: Add Navigation

Consistent footer on every page:
- Circle buttons linking to each section of the site
- Resume/PDF link
- External links (case studies, etc.)
- Copyright

Each inner page hero section with circles linking to sibling pages + home.

---

## Phase 5: SEO & Meta (~30 min)

### Step 16: Essential Meta Tags

Every page needs:

```html
<meta name="description" content="Page-specific description with key terms">
<link rel="canonical" href="https://yourdomain.com/page">

<!-- Open Graph -->
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:url" content="...">
<meta property="og:site_name" content="...">
<meta property="og:type" content="website">
<meta property="og:locale" content="en_US">
<meta property="og:image" content="https://yourdomain.com/images/icons/og-image.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="...">
<meta name="twitter:description" content="...">
<meta name="twitter:image" content="https://yourdomain.com/images/icons/og-image.png">
```

### Step 17: Structured Data (JSON-LD)

```html
<script type="application/ld+json">{
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebSite", "name": "...", "url": "..." },
    { "@type": "Person", "name": "...", "jobTitle": "...",
      "knowsAbout": ["Skill 1", "Skill 2", "Skill 3"] }
  ]
}</script>
```

### Step 18: Favicons

Three sizes needed:
- `favicon.png` — 32x32 (browser tab)
- `favicon-192.png` — 192x192 (Android)
- `apple-touch-icon.png` — 180x180 (iOS)
- `og-image.png` — 1200x630 (social sharing)

### Step 19: What NOT to Include

- `<meta name="keywords">` — search engines have ignored this since ~2009
- Wix analytics/tracking scripts
- Any JS that isn't doing something essential

---

## Phase 6: QA & Launch (~1 hour)

### Step 20: Visual QA Checklist

- [ ] Every image loads and is sharp (not blurry/thumbnailed)
- [ ] No images are cropped (check phones/wireframes especially)
- [ ] Dark sections have white text everywhere (title, subtitle, description, meta, divider)
- [ ] Body text is sans-serif, not serif (common mistake)
- [ ] Phone/device mockup widths are consistent across sections
- [ ] Footer appears and functions on every page
- [ ] All navigation links work (cross-page + external)
- [ ] Resume/PDF link opens correctly
- [ ] Profile photo is properly circular with grayscale filter
- [ ] Responsive: check at 768px breakpoint and below
- [ ] No horizontal scroll on mobile

### Step 21: SEO Validation

- [ ] Every page has unique `<title>` and `<meta name="description">`
- [ ] Every page has `<link rel="canonical">`
- [ ] OG image exists and is 1200x630
- [ ] JSON-LD validates (paste into Google's Rich Results Test)
- [ ] All images have descriptive `alt` text

### Step 22: Deploy

For GitHub Pages:
```bash
git add -A
git commit -m "Complete site rebuild from Wix to clean HTML/CSS"
git push origin rebuild
# Merge to main via PR, or push to main directly
```

Ensure the entry point is `index.html` in the root directory.

---

## Timing Estimates

| Phase | First Time | With This Skill |
|-------|-----------|----------------|
| Preparation | 45 min | 20 min |
| Design System | 1.5 hours | 45 min |
| Image Extraction | 3 hours | 1.5 hours |
| Build Pages | 3 hours | 1.5 hours |
| SEO & Meta | 45 min | 20 min |
| QA & Launch | 1 hour | 30 min |
| **Total** | **~10 hours** | **~5 hours** |

With AI assistance, the human effort is roughly half the above (AI handles bulk HTML generation, image downloads, SEO boilerplate).

---

## Common Pitfalls

| Pitfall | How to Avoid |
|---------|-------------|
| Blurry images | Always download from Wix CDN at full resolution, never use the exported thumbnails |
| Wrong image-to-section mapping | Parse Wix HTML in document order, don't guess |
| Image cropping | Match original aspect ratio exactly when constructing CDN URL |
| Body text looks like headings | Verify `font_8` is 13px sans-serif, not serif |
| Header/footer too tall | Check both outer element AND inner `.container` min-height |
| `grep -P` fails on Windows | Use `sed`, `awk`, or Node.js for complex text extraction |
| Context window exhaustion | Commit frequently; the AI can restart from the codebase state |
| Over-engineering CSS | Start with the patterns you need; add complexity only when a section requires it |
| Missing dark-mode text overrides | Every text element inside `.project--dark` needs explicit white color |

---

## Reuse Checklist

When starting a new Wix → HTML rebuild:

1. [ ] Copy this skill file into the new project's `skill/` folder
2. [ ] Export all Wix pages ("Save As Complete")
3. [ ] Run the `extract-images.js` script on each page
4. [ ] Create the CSS design system from inspected styles
5. [ ] Download all images at correct resolutions
6. [ ] Build the most complex page first
7. [ ] Replicate patterns across remaining pages
8. [ ] Add SEO meta tags using the template above
9. [ ] Visual QA against the original site
10. [ ] Deploy to GitHub Pages
