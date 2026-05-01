# Version History & Rollback Points

## Current: Section Visibility Toggle
- **Branch:** refr2
- **Feature:** Desktop settings panel to toggle section visibility, persists to GitHub via API

### Rollback: Remove visibility toggle feature
**Safe commit before this feature:** `b1a7fd9`

To undo the toggle feature (keeps all history, no data loss):
```bash
git revert <toggle-commit-hash>
```

To temporarily view the pre-toggle state:
```bash
git checkout b1a7fd9 -- .
```
Then `git checkout refr2 -- .` to come back.

### What the toggle feature added
- `section-config.json` — visibility config per page
- `js/section-visibility.js` — settings panel + GitHub API save
- Refactored `js/portfolio-order.js`, `js/method-order.js`, `js/patterns-order.js` (IIFE → named function)
- CSS `.sv-*` styles in `css/styles.css`
- Script tag added to `portfolio.html`, `method.html`, `patterns.html`

### How to add the visibility toggle to a future/fresh build

The feature requires 3 things: data attributes on sections, ordering JS, and the visibility script.

**Step 1 — Add `data-section` attributes to each `<section>` in your HTML:**
```html
<section class="project project--dark" data-section="my-section-name">
```
Use a short, meaningful kebab-case name (e.g. `hackensack-ia`, `pwc-expense`).

**Step 2 — Create a per-page ordering JS file** (e.g. `js/portfolio-order.js`):
```js
var SECTION_ORDER = [
  "section-one",
  "section-two",
  "section-three"
];

var KEEP_WHITE = {};
// Add entries like { "section-name": true } for sections that should stay white bg

function reorderAndThemeSections() {
  var main = document.querySelector("main");
  if (!main) return;
  var sections = {};
  main.querySelectorAll("section[data-section]").forEach(function (el) {
    sections[el.getAttribute("data-section")] = el;
  });
  var themes = ["project--dark", "project--light"];
  var visibleIndex = 0;
  SECTION_ORDER.forEach(function (name) {
    var el = sections[name];
    if (!el) return;
    var isHidden = el.style.display === "none";
    el.classList.remove("project--dark", "project--light", "project--white");
    if (isHidden) { main.appendChild(el); return; }
    if (KEEP_WHITE[name]) { el.classList.add("project--white"); }
    else { el.classList.add(themes[visibleIndex % 2]); visibleIndex++; }
    main.appendChild(el);
  });
}
reorderAndThemeSections();
```

**Step 3 — Copy these files into the new build:**
- `js/section-visibility.js` — no changes needed, works on any page
- The `.sv-*` CSS block from `css/styles.css` (search for "Section Visibility Settings")

**Step 4 — Add script tags at the bottom of each page (before `</body>`):**
```html
<script src="js/your-page-order.js"></script>
<script src="js/section-visibility.js"></script>
```

**Step 5 — Create `section-config.json` in the repo root:**
```json
{
  "portfolio": { "section-one": true, "section-two": true },
  "method": { ... },
  "patterns": { ... }
}
```
Keys must match `data-section` values. `true` = visible, `false` = hidden.

**Step 6 — Update constants in `section-visibility.js` if repo/branch changes:**
```js
var GITHUB_OWNER = "ncoreux";
var GITHUB_REPO = "folio";
var GITHUB_BRANCH = "refr2";  // change to match your deploy branch
```

**Step 7 — Generate a fine-grained PAT** (GitHub → Settings → Developer settings → Fine-grained tokens):
- Repository access: only the target repo
- Permissions: Contents → Read and write
- Enter the token when prompted by the save button (stored in browser localStorage)

---

## Previous milestones on refr2
| Commit | Description |
|--------|-------------|
| `b1a7fd9` | Fitoori demo link pointed to live Wix site |
| `c277a95` | JS-based section reordering, patterns intro bg, business rules grid, backups |
| `ab6e30c` | LinkedIn footer, skill docs, image organization |
| `6b596a9` | Misc images organized into project folders |
| `dab7247` | Rebuild summary with new portfolio sections |
| `6e943a7` | Movimento, ShoutMD, PwC, Tax DMS, case study sections added |
| `12c0e17` | Mobile responsive: split layouts, visual phones, screen images |
