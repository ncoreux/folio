# Skill Folder — Table of Contents

## Guides

| File | Content |
|------|---------|
| [rebuild-summary.md](rebuild-summary.md) | Full technical guide — Wix problem, tools used, CDN patterns, CSS architecture, SEO, UX nuances, challenges, deployment checklist, known issues, content inventory |
| [rebuild-efforts.md](rebuild-efforts.md) | Effort/cost log — human time, AI tokens, permission stats (82 approvals / 120 autonomous), cost estimates |
| [rebuild-skill.md](rebuild-skill.md) | Reusable step-by-step playbook with tools prerequisites |

## Session Transcripts

Full Claude Code conversation logs (JSONL format). These capture every prompt, response, and tool call.

| File | Session | Size |
|------|---------|------|
| [sessions/session-1-explore.jsonl](sessions/session-1-explore.jsonl) | Initial exploration (~5 min) | 25 KB |
| [sessions/session-2-early-build.jsonl](sessions/session-2-early-build.jsonl) | Early build — CSS system, index.html | 72 KB |
| [sessions/session-3-primary.jsonl](sessions/session-3-primary.jsonl) | **Primary session** — all 4 pages, 83 images, SEO, skill docs, FAB, horizontal heroes, footer redesign, mobile responsive, 6 new portfolio sections, image organization (225+ user msgs) | ~27 MB |
| [sessions/session-4-brief.jsonl](sessions/session-4-brief.jsonl) | Brief check | 16 KB |

## Scripts & Outputs

Tools created during the rebuild for extracting images from Wix HTML. Reusable for future Wix migrations.

| File | Purpose |
|------|---------|
| [scripts/extract_images.py](scripts/extract_images.py) | Python: extract `data-image-info` URIs from Wix HTML |
| [scripts/parse_portfolio.py](scripts/parse_portfolio.py) | Python: parse portfolio sections and map images to projects |
| [scripts/download_portfolio_images.sh](scripts/download_portfolio_images.sh) | Bash: bulk download images from Wix CDN via curl |
| [scripts/detailed_report.sh](scripts/detailed_report.sh) | Bash: generate report of Wix HTML structure |
| [scripts/find_sections.sh](scripts/find_sections.sh) | Bash: locate section headings in Wix HTML |
| [scripts/map_images.sh](scripts/map_images.sh) | Bash: map images to sections by document order |
| [scripts/map_final.sh](scripts/map_final.sh) | Bash: final image-to-section mapping |
| [scripts/process_sections.sh](scripts/process_sections.sh) | Bash: process and organize sections |
| [scripts/wix_urls.txt](scripts/wix_urls.txt) | Output: extracted Wix CDN image URLs |
| [scripts/img_sections.txt](scripts/img_sections.txt) | Output: image-to-section mapping |
| [scripts/report.txt](scripts/report.txt) | Output: Wix HTML structure report |
| [scripts/final_report.txt](scripts/final_report.txt) | Output: final image mapping report |
