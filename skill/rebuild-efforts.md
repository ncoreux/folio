# ncoreUX Rebuild — Effort & Resource Log

Capturing the human effort, AI effort, and cost dimensions of rebuilding a 4-page Wix portfolio site into clean HTML/CSS.

---

## Timeline

| Date | Phase | Activity |
|------|-------|----------|
| 2024-12-25 | Wix export | Initial Wix HTML files uploaded to GitHub |
| 2024-12-26 | Manual cleanup | First manual pass — link updates, page additions |
| 2025-09-23 | Content update | Resume PDF update, index edits |
| 2026-04-28 | Prep | PDF update, workspace setup |
| 2026-04-29 | Rebuild begins | Session 1 — index.html, CSS system, portfolio start |
| 2026-04-29 → 04-30 | Main build | Session 2 (primary) — portfolio images, method, patterns, SEO, footer, favicons |
| 2026-04-30 | Continuation | Session 3 — SEO finalization, skill docs, effort capture |
| 2026-04-30 | Phase 2 | Session 4 (continuation) — FAB nav, horizontal heroes, footer redesign, mobile responsive, Fitoori hero, full-res image upgrades |
| 2026-04-30 | Phase 2 | Session 4 (continued) — Added 6 new portfolio sections (Movimento, ShoutMD, PwC Expense/Hoteling/Tax DMS, Figma case studies), organized misc images into project folders |

**Active rebuild window:** ~2 days (April 29–30, 2026)
**Wall clock (sessions):** ~16 hours total across all sessions
**Effective focused time:** ~10–12 hours (factoring in review, decisions, waiting)

---

## Human Effort (Subhan)

### Time Spent
| Activity | Estimated Time |
|----------|---------------|
| Initial Wix export and GitHub setup (Dec 2024) | ~1 hour |
| Reviewing Claude's output, providing feedback | ~2–3 hours |
| Visual QA (comparing original vs rebuild in browser) | ~1 hour |
| Decision-making (design choices, priorities, direction) | ~1 hour |
| Providing screenshots of issues (cropping, sizing, fonts) | ~30 min |
| Writing prompts and describing requirements | ~1 hour |
| **Total human time** | **~6–8 hours** |

### Key Human Contributions
- **Design direction:** Every visual decision was human-driven — header size, phone widths, font corrections, footer redesign
- **Quality assurance:** Spotted blurred images, cropped Marvin phones, wrong font sizes, 82px header bug — all caught by visual inspection in browser
- **Content mapping:** Knew which projects belonged where, client names, technologies used
- **Strategic decisions:** Case Study link instead of Contact, SEO keyword additions (AI-UX Design, AI Healthcare, UX in Healthcare)
- **Screenshots as specs:** Provided annotated screenshots showing exact issues — faster than verbal descriptions

### What Made the Human Irreplaceable
1. **Visual judgment** — AI can't open a browser and say "that image looks cropped"
2. **Domain expertise** — knowing that `font_8` is body text, not heading text, came from inspecting the original
3. **Priority decisions** — choosing what to build next, what to skip, what matters
4. **Brand identity** — the OW Holmes quote, the bio text, the design philosophy — all human voice

---

## AI Effort (Claude Code / Opus)

### Sessions

| Session | Duration | User Messages | Assistant Turns | Primary Work |
|---------|----------|---------------|-----------------|--------------|
| 3b75725f | ~5 min | 4 | 2 | Initial exploration |
| 5c0e5b9c | ~8 hrs (wall) | 23 | 13 | Early build work, CSS, index |
| 77ff712f | ~3.5 hrs | 225 | 351 | **Primary session** — all 4 pages, images, SEO |
| a51dfa11 | ~5 min | 1 | 0 | Brief check |

### Tool Usage (Primary Session — 77ff712f)

| Tool | Calls | Purpose |
|------|-------|---------|
| Bash | 77 | curl downloads, file ops, Node.js parsing, git commands |
| Edit | 53 | HTML/CSS modifications |
| Read | 29 | Reading Wix source files, checking outputs |
| Agent | 12 | Parallelized image downloads, research |
| Write | 10 | Creating new HTML files, CSS |
| TodoWrite | 8 | Task tracking |
| ToolSearch | 4 | Loading deferred tools |
| Grep | 1 | Code search |

**Total tool calls across all sessions:** ~200+

### What AI Did Well
1. **Bulk image extraction** — parsing `data-image-info` JSON from Wix HTML, constructing CDN URLs, downloading 79 images
2. **Consistent HTML structure** — generating 27 project sections across 3 pages with identical patterns
3. **CSS system design** — design tokens, semantic naming, responsive breakpoints from scratch
4. **SEO implementation** — OG tags, Twitter cards, JSON-LD structured data, canonical URLs
5. **Iterative correction** — when told "that's wrong," quickly identified root cause and fixed

### Where AI Struggled
1. **Image-to-section mapping** — initial assignment was wrong; needed human to flag it, then Node.js parsing to fix
2. **Wix font identification** — defaulted to serif for body text; needed human screenshot correction
3. **Aspect ratio math** — downloaded images at wrong ratios causing cropping; needed explicit correction
4. **Windows compatibility** — `grep -P` doesn't work in Git Bash; had to adapt multiple times
5. **Context window limits** — session hit the context limit and required continuation

---

## Permission & Autonomy Breakdown

Claude Code operates in permission modes. This project primarily used **"Accept Edits" mode** — file reads, edits, writes, and searches run autonomously, but shell commands (Bash) require user approval.

### Primary Session (77ff712f) — 202 Total Tool Calls

| Category | Tool Calls | Required "Allow"? | % of Total |
|----------|-----------|-------------------|------------|
| Bash (curl, git, Node.js, file ops) | 82 | **Yes** — user had to approve each one | **41%** |
| Edit (HTML/CSS modifications) | 53 | No — auto-allowed | 26% |
| Read (file reads) | 29 | No — auto-allowed | 14% |
| Agent (sub-agents for parallel work) | 12 | No — auto-allowed | 6% |
| Write (new file creation) | 11 | No — auto-allowed | 5% |
| Other (TodoWrite, ToolSearch, Grep, etc) | 15 | No — auto-allowed | 7% |

### The Approval Tax

- **82 times** the user had to click "Allow" for Bash commands
- **120 times** the AI operated autonomously (59% of actions)
- **Approval ratio: 41% manual approval, 59% autonomous**

Most of the 82 Bash approvals were for `curl` image downloads — repetitive, low-risk commands where batch approval would have saved significant time.

### Across All Sessions

| Session | Tool Calls | Bash (Approval Needed) | Auto-Allowed | Approval % |
|---------|-----------|----------------------|--------------|------------|
| 5c0e5b9c (early build) | 13 | ~8 | ~5 | ~62% |
| 77ff712f (primary) | 202 | 82 | 120 | 41% |
| **Total** | **~215** | **~90** | **~125** | **~42%** |

### Impact on Workflow
- Each "Allow" click takes ~2–3 seconds of human attention
- 90 approvals = ~3–5 minutes of cumulative clicking
- A more permissive mode (like "YOLO" / full auto) would have eliminated this friction but reduced oversight
- The accept-edits mode was a good balance: AI handled all code changes autonomously while the user maintained control over shell operations

---

## AI Resource Consumption

### Token Estimates

| Metric | Estimate |
|--------|----------|
| Session transcript size | ~4.8 MB (raw JSONL) |
| Estimated input tokens | ~800K–1.2M |
| Estimated output tokens | ~200K–400K |
| Context window resets | 1 (conversation compacted and continued) |

**Note:** Claude Code sessions accumulate tokens across many turns. The 225 user messages and 351 assistant responses in the primary session represent heavy back-and-forth — mostly image downloads and iterative HTML edits.

### Cost Estimate

Rough estimate based on Claude Opus pricing (as of early 2026):

| Component | Rate | Tokens | Estimated Cost |
|-----------|------|--------|---------------|
| Input tokens | ~$15/M tokens | ~1M | ~$15 |
| Output tokens | ~$75/M tokens | ~300K | ~$22.50 |
| **Total estimated API cost** | | | **~$35–50** |

**Note:** Actual cost depends on the pricing plan (Claude Code subscription vs API). Under a Claude Pro/Max subscription, this would be covered by the monthly fee. The estimates above reflect raw API token costs for reference.

### Compute Comparison

| Approach | Estimated Time | Estimated Cost |
|----------|---------------|----------------|
| Manual rebuild (developer) | 20–30 hours | $2,000–4,500 (at $100–150/hr) |
| AI-assisted rebuild (this project) | 6–8 hrs human + AI | ~$35–50 API cost + human time |
| Wix subscription (staying on platform) | Ongoing | ~$17–32/month |

---

## Output Metrics

### What Was Produced

| Deliverable | Count/Size |
|-------------|-----------|
| HTML pages created | 7 (index, portfolio, method, patterns, 3 fitoori) |
| CSS stylesheet | 1 (~1000 lines) |
| JavaScript files | 1 (fab.js — mobile FAB nav) |
| Total HTML lines | ~2,000+ |
| Images organized | ~104 across 15 project folders |
| Image total size | ~25 MB |
| Favicon variants | 3 + OG image |
| Figma prototype embeds | 3 (Scheduling, Kiosk, Front Desk/Lab Tech) |
| Project sections built | 34 (18 portfolio, 8 method, 8 patterns) |

### What Was Eliminated

| Wix Bloat | Count |
|-----------|-------|
| Wix support directories | 9 (`*_files/` folders) |
| Wix support files | 567 (JS, CSS, images, misc) |
| JS files | 100+ → 0 |
| CSS files | 33+ → 1 |
| Obfuscated class names | Hundreds → 0 |
| Inline styles | Hundreds → 0 |

---

## Tools That Came in Handy

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

## Lessons on Human-AI Collaboration

### The 80/20 Split
AI handled ~80% of the **volume** (downloading images, writing HTML, building CSS systems, SEO tags) while the human handled ~80% of the **judgment** (visual QA, design decisions, content accuracy, priority calls).

### Feedback Loop Efficiency
The most effective pattern was:
1. **Human:** Short, specific instruction ("make it 226px", "check the cropping")
2. **AI:** Execute and show result
3. **Human:** Visual check → approve or correct
4. **AI:** Adjust if needed

Average cycle time: ~2–5 minutes per correction.

### Screenshots > Words
Providing a screenshot with annotations was consistently faster and more accurate than describing an issue verbally. The annotated screenshots for font sizing, header height, and image cropping were each resolved in a single correction cycle.

### When to Restart vs Iterate
The image mapping problem required a full restart (Node.js parsing from scratch) rather than incremental fixes. Knowing when to scrap the approach vs tweak it is a human judgment call that AI deferred to correctly.

---

## Reproducibility

This entire rebuild could be repeated for a similar Wix site in roughly half the time now that:
1. The Wix CDN URL pattern is documented
2. The `data-image-info` extraction method is proven
3. The CSS design system is a reusable template
4. The SEO checklist is codified
5. The `rebuild-skill.md` provides a step-by-step process

See [rebuild-skill.md](rebuild-skill.md) for the reusable playbook.
