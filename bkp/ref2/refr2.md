# Plan: Rebuild ncoreUX Site — Clean HTML/CSS/JS

## Context
The current site is Wix-exported static HTML with duplicated headers/footers, 100+ JS files, 33+ CSS files, minified class names, and inconsistent file naming. The goal is to rebuild it as clean, hand-crafted HTML/CSS/JS that preserves the existing design while eliminating all Wix bloat and duplication.

Work happens on a new branch `refr2` so `main` stays untouched.

---

## Phase 0: Branch Setup
- Create branch `refr2` from `main`
- All work happens on this branch

---

## Phase 1: Extract Design Specifications
Before writing any code, capture the visual design from the existing pages:

1. **Color palette** — extract all used colors from Wix CSS variables, assign meaningful token names (e.g. `--color-primary`, `--color-surface-dark`, `--nav-patterns`, `--nav-portfolio`, `--nav-home`)
2. **Typography** — font families (Noticia Text, Open Sans, Arial), sizes, weights, line-heights
3. **Layout measurements** — max-width (980px), spacing, section heights, image dimensions
4. **Component inventory** — circular nav buttons (80x80px, color-coded), section dividers, image cards, footer
5. **Background treatments** — parallax images, dark/light section alternation, overlay colors
6. **Images** — catalog all images used, use contextual naming per project/section (e.g. `hackensack_login.png`, `bloom-energy_journey-map.png`)

---

## Phase 2: Create Clean Project Structure

```
refresh/
├── index.html                  # Home
├── method.html                 # Method/UX Process
├── patterns.html               # Interaction Design Patterns
├── portfolio.html              # Portfolio
├── css/
│   └── styles.css              # Single shared stylesheet
├── js/
│   └── main.js                 # Minimal shared JS (if needed)
├── images/                     # All images with contextual names
│   ├── hero/
│   ├── method/
│   ├── patterns/
│   └── portfolio/
├── ref2/
│   └── refr2.md                # This plan file
└── (keep original files until rebuild is verified)
```

**Naming convention:** All lowercase, hyphens for spaces, no special characters.

---

## Phase 3: Build Shared Stylesheet (`css/styles.css`)

Structure:
1. **CSS Reset / Normalize** — minimal modern reset
2. **CSS Custom Properties** — meaningful color primitives + semantic tokens (not numbered Wix vars)
3. **Base typography** — headings, body text, links
4. **Layout utilities** — container, grid, flex helpers
5. **Header component** — sticky header with circular nav buttons
6. **Footer component** — shared footer
7. **Section component** — reusable content section (title + divider + content)
8. **Image component** — responsive images with object-fit
9. **Button component** — circular nav buttons with color variants
10. **Responsive breakpoints** — mobile (≤768px) and desktop

---

## Phase 4: Build HTML Pages (Incremental)

### Step 1: Build & test `index.html` first
- Shared header with nav buttons (Patterns, UX/Portfolio, Home)
- Shared footer
- Meta tags, favicon links, font imports
- Hero section with site introduction
- **Compare side-by-side with original, test, and verify before proceeding**

### Step 2: Build remaining pages (after index.html is approved)
**method.html**
- Hero: "Method" title, "UX Process" subtitle
- Section: UX Process in SDLC — design cycle diagrams
- Section: Journey Map / Order Outlook — dark background, Bloom Energy work

**patterns.html**
- Hero: "Patterns" title, "Interaction Design" subtitle
- Content sections with interaction design pattern showcases

**portfolio.html**
- Hero: Portfolio introduction
- Multiple project sections with alternating backgrounds

---

## Phase 5: Minimal JavaScript (`js/main.js`)

Only add JS if truly needed:
- Smooth scroll for anchor links (if used)
- Mobile hamburger menu toggle (if nav needs collapsing)
- Parallax effect (CSS `background-attachment: fixed` may suffice)

**Remove entirely:** jQuery, Lodash, React, Wix Thunderbolt runtime, jQuery Cycle2, IE11 polyfills, Hotjar, Google Analytics (can be re-added later if wanted).

---

## Phase 6: Image Migration

- Copy all content images from existing Wix structure to organized `images/` subfolders
- Use contextual naming per project/section (e.g. `hackensack_login.png`, `bloom-energy_journey-map.png`)
- Use PNG where it provides quality without loss; AVIF where suitable
- Ensure responsive `srcset` attributes for different screen sizes

---

## Phase 7: Verification

1. **Visual comparison** — open old and new pages side by side, verify design fidelity
2. **Responsive testing** — check at 320px, 768px, 980px, and 1200px widths
3. **Navigation** — all links between pages work correctly
4. **Performance** — compare file count and total page weight before/after
5. **Accessibility** — semantic HTML, keyboard navigation, screen reader basics

---

## Execution Order
1. Create `refr2` branch
2. Extract design specs from existing files (colors, fonts, measurements)
3. Create `css/styles.css` with design system (meaningful token names)
4. Build `index.html` — compare, test, get approval
5. Then build `method.html`, `patterns.html`, `portfolio.html`
6. Migrate images with contextual naming
7. Add minimal JS if needed
8. Test and verify against original design

---

## Files to Modify/Create
- **New:** `css/styles.css`, `js/main.js`, `images/` directory
- **New (clean versions):** `index.html` first, then `method.html`, `patterns.html`, `portfolio.html`
- **Preserve (until verified):** All original Wix files remain on the branch until rebuild is confirmed

## Files to Reference (existing design source)
- `index.html` — home page layout and content
- `ncoreUX _ Method.html` — method page content and parallax patterns
- `Patterns _ncoreux.html` — patterns page content and card layouts
- `portfolio_ncoreUX.html` — portfolio content and project sections
