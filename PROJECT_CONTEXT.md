# Larisa Kalugina Website: Project Context

This file is a durable handoff for future Codex sessions. Read it before making
changes. It describes the current production setup as of 2026-05-30.

## Project Summary

This repository contains the static marketing website for language tutor
Larisa Kalugina. The primary audience is Russian-speaking adults, parents, and
expats who need Dutch or English lessons online.

The current brand is **Larisa Kalugina** / **Лариса Калугина**. Do not restore
the older `go DUTCH` branding in visible website copy.

The site is intentionally lightweight:

- plain HTML
- Tailwind CSS loaded from CDN on the richer pages
- Vanilla JavaScript
- no backend
- Formspree for lead submissions
- GitHub Pages for hosting

## Repository And Deployment

- GitHub repository: `https://github.com/SIRBUGSY/go-DUTCH.git`
- Production branch: `main`
- Production URL: `https://larisakalugina.com`
- GitHub Pages custom domain: stored in `CNAME`
- `CNAME` value: `larisakalugina.com`
- Old domain: `godutch.ru`

The old domain is intended to redirect to `https://larisakalugina.com` using
registrar-level forwarding. It is not the canonical domain.

The project may be opened through either of these local paths:

```text
/Users/alex/Documents/Active Projects/Websites/go DUTCH
/Users/alex/Documents/Active Projects/go DUTCH
```

The second path is a compatibility symlink to the first path. It exists because
an older Codex thread remembered the shorter path.

## Important Git History

Recent production commits:

```text
639cc5f Add analytics events and SEO metadata
edeb4bc Add goal path calculator
c0f357a Switch site metadata to larisakalugina.com
```

Before starting new work, always run:

```bash
git status --short
git log -3 --oneline
```

Do not revert unrelated user changes. The repository may contain work edited
directly by the user between Codex sessions.

## Main Pages

### Core Pages

| URL | File | Purpose |
| --- | --- | --- |
| `/` | `index.html` | Main Russian landing page |
| `/en/` | `en/index.html` | English landing page |
| `/resursy/` | `resursy/index.html` | Curated language-learning resource library |
| `/test-niderlandskogo/` | `test-niderlandskogo/index.html` | Adaptive Dutch level test |
| `/test-angliyskogo/` | `test-angliyskogo/index.html` | Adaptive English level test |

### Russian SEO Landing Pages

These are intentionally focused, text-heavy search pages with lightweight
navigation and a CTA back to the main contact form:

```text
/repetitor-gollandskogo/
/uchit-gollandskiy-s-nulya/
/niderlandskiy-dlya-zhizni/
/repetitor-gollandskogo-profi/
/gollandskiy-dlya-pereezda/
/gollandskiy-dlya-raboty/
/gollandskiy-dlya-detey/
/podgotovka-k-ekzamenu/
/razgovorny-gollandskiy/
/niderlandskiy-yazyk-onlayn/
```

## Shared Assets

Important shared assets:

```text
favicon.png
og-image.jpg
work-picture-520.webp
work-picture-900.webp
transitions.css
transitions.js
```

- `favicon.png` is the centered Larisa Lego-style favicon.
- `og-image.jpg` is used for social previews.
- `work-picture-520.webp` and `work-picture-900.webp` are responsive versions of
  Larisa's main profile image.

Avoid committing heavy source images when an optimized web version already
exists.

## Contact And Social Links

Current public social links:

```text
Telegram:  https://t.me/larisakalugina_nl
YouTube:   https://www.youtube.com/@larisakalugina_nl
TikTok:    https://www.tiktok.com/@larisakalugina_nl
Instagram: https://www.instagram.com/larisakalugina_nl
Profi.ru:  https://profi.ru/profile/KaluginaLV2/
Reviews:   https://profi.ru/profile/KaluginaLV2/reviews/
```

Current public email:

```text
info@godutch.ru
```

The domain changed, but the email address has not yet changed. Do not silently
replace it unless the user provides a new working mailbox.

## Lead Collection

The site uses Formspree. There is no custom backend.

Current endpoint:

```text
https://formspree.io/f/xzdoqzwv
```

The main Russian form validates:

- Telegram usernames such as `@username`
- email addresses
- international phone numbers

Phone input formatting uses `libphonenumber` when available and includes
fallback formatting.

The English form and both test-result forms also submit through Formspree.

## Google Analytics

GA4 is installed across the site:

```text
Measurement ID: G-WPRVBVDXD3
Google tag:     GT-KFLHWCGT
```

The GA4 property, web stream, and domain labels were manually renamed in the
Google Analytics interface after the domain migration.

Tracked events:

```text
generate_lead
click_telegram
click_email
calculator_cta_click
test_start
test_complete
test_result_submit
```

Behavior:

- `click_telegram` and `click_email` are delegated link-click events and work
  across all HTML pages with GA4.
- `generate_lead` fires only after a successful Formspree response.
- `calculator_cta_click` fires when the calculator CTA is used.
- `test_start` and `test_complete` fire inside both adaptive tests.
- `test_result_submit` fires only after a successful test-result submission.
- Personal data such as names, phone numbers, email addresses, and Telegram
  usernames must never be sent to GA4.

Recommended GA4 key events:

```text
generate_lead
test_result_submit
```

These must be marked as key events manually in the GA4 interface after the
events appear.

## Search And SEO

### Search Services

The user manually connected:

- Google Search Console
- Bing Webmaster Tools

The user should submit this sitemap in both dashboards:

```text
https://larisakalugina.com/sitemap.xml
```

Yandex Webmaster is still a sensible next step because a large portion of the
audience is Russian-speaking.

External dashboard configuration is not stored in this repository.

### Repository SEO Files

```text
CNAME
robots.txt
sitemap.xml
```

`robots.txt` allows crawling and points to the production sitemap.

`sitemap.xml` currently lists 15 production URLs. Its `<lastmod>` values were
updated to `2026-05-30` when SEO metadata was added. Update dates honestly when
pages change. Do not generate fake rolling dates merely to imply freshness.

### Canonical And Social Preview Tags

Every sitemap URL has:

- canonical URL
- `og:type`
- `og:url`
- `og:title`
- `og:description`
- `og:image`
- `og:image:type`
- `og:image:alt`
- `og:site_name`
- Twitter/X card metadata

When adding a new public page:

1. Add canonical metadata.
2. Add Open Graph metadata.
3. Add Twitter/X preview metadata.
4. Add the URL to `sitemap.xml`.
5. Use `https://larisakalugina.com` as the canonical host.

### Structured Data

The Russian main page and English main page contain JSON-LD graphs:

```text
Person
ProfessionalService
FAQPage
```

Rules:

- Russian visible pages use Russian structured-data copy.
- English pages use English structured-data copy.
- FAQ schema must match visible FAQ questions and answers exactly.
- Do not invent a physical address. Lessons are online.
- Do not invent review scores, business registrations, or credentials.

The resources page contains `CollectionPage` JSON-LD.

Note: FAQ schema is semantically useful, but Google currently limits FAQ rich
results mostly to authoritative health and government sites. Do not promise
that FAQ snippets will appear.

## Goal Path Calculator

The Russian main page contains an interactive calculator before the pricing
section.

Inputs:

- language: Dutch or English
- current level: `A0`, `A1`, `A2`, `B1`
- goal
- intensity: 1, 2, or 3 lessons per week

Core CEFR transition hours:

```text
A0 -> A1:  60-80 hours
A1 -> A2:  80-100 hours
A2 -> B1: 150-200 hours
B1 -> B2: 200-250 hours
```

Adjustments:

```text
Dutch for Russian speakers: x1.2
English for Russian speakers: x1.0
Teacher lessons: 40% of total time
Independent study: 60% of total time
```

Display principles:

- show the first package as the main price:
  `~25 200 RUB / ~270 EUR`
- show approximate monthly cost secondarily
- hide full-route cost inside an expandable information block
- show lesson ranges rounded upward to 10-lesson packages
- CTA always says `Записаться сейчас`
- CTA scrolls to the contact form and prefills the language and route summary

Special reached-target logic:

```text
A2 -> Inburgering: 15-25 raw lessons, displayed as 20-30
B1+ -> Inburgering: 8-12 raw lessons, displayed as 10-20
Other reached goals: 10-20 raw lessons
```

## Adaptive Language Tests

There are two static Vanilla JS adaptive tests:

```text
/test-niderlandskogo/
/test-angliyskogo/
```

Both:

- have a static fallback start screen so the card never renders blank before
  JavaScript runs
- use `sessionStorage` to preserve progress
- show self-assessment questions first
- adapt difficulty from `A0` to `B2`
- test grammar, vocabulary, and reading
- show results immediately without requiring contact information
- offer an optional Formspree result form afterward

The Dutch and English test storage keys must remain separate.

The Dutch test previously experimented with certificate PNG/PDF generation.
Keep the stable current behavior unless the user explicitly asks to revisit
certificates.

## Resource Library

The resources page is:

```text
/resursy/
```

It contains curated Dutch and English resources with category filters. Resources
include sites, channels, individual videos, exercises, news sources, music,
children's materials, communities, and exam-preparation links.

When adding resources:

- preserve the existing card format
- place each item in the most useful category for users
- prefer a channel link for a general creator recommendation
- use an individual video link when the specific video itself is the resource
- avoid overcrowding the filters
- keep language filtering simple and understandable

The resource-library schema is `CollectionPage`.

## Design Constraints

Preserve the established visual language:

- quiet, professional education website
- restrained amber accents
- navy hero surfaces
- compact cards with modest border radius
- Phosphor icons
- responsive mobile-first behavior

Do not restore the old `go DUTCH` visible brand.

Do not redesign the desktop experience unless requested. Prefer scoped,
sympathetic improvements.

## Mobile And QA Preferences

The user explicitly requested:

> Do not use screenshot-based tests in future. Only check technically.

Respect this. Do not use screenshot QA unless the user specifically asks for a
visual inspection.

For mobile work, prefer technical checks:

- HTML parsing
- JavaScript syntax parsing
- DOM width checks
- horizontal overflow checks
- form interaction checks
- menu interaction checks
- calculator-prefill checks

Mobile widths previously tested:

```text
320
375
390
414
768
```

## Validation Commands

Run these before committing HTML changes:

```bash
python3 - <<'PY'
from html.parser import HTMLParser
from pathlib import Path
class Parser(HTMLParser): pass
files = sorted(Path('.').glob('**/*.html'))
for path in files:
    parser = Parser()
    parser.feed(path.read_text())
    parser.close()
print('html parser ok:', len(files), 'files')
PY
```

```bash
node - <<'NODE'
const fs = require('fs');
const path = require('path');
function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory() && entry.name !== '.git') return walk(file);
    return entry.isFile() && entry.name.endsWith('.html') ? [file] : [];
  });
}
const files = walk('.');
let scripts = 0;
for (const file of files) {
  const html = fs.readFileSync(file, 'utf8');
  for (const match of html.matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/g)) {
    if (/\bsrc\s*=/.test(match[1])) continue;
    if (/type=["']application\/ld\+json["']/.test(match[1])) continue;
    new Function(match[2]);
    scripts += 1;
  }
}
console.log('inline scripts ok:', scripts, 'scripts in', files.length, 'files');
NODE
```

```bash
git diff --check
```

When structured data changes, parse JSON-LD as JSON and verify that visible FAQ
copy still matches `FAQPage.mainEntity`.

## Deployment Workflow

For production changes:

```bash
git status --short
git diff --check
git add <changed files>
git commit -m "<clear message>"
git push origin main
git status -sb
```

GitHub Pages may need a few minutes to publish.

## Current Follow-Up Checklist

Useful next steps:

1. Submit `https://larisakalugina.com/sitemap.xml` in Google Search Console and
   Bing Webmaster Tools if not already submitted.
2. Use URL Inspection in Google Search Console for the homepage, resources
   page, and both language tests.
3. Mark `generate_lead` and `test_result_submit` as GA4 key events after their
   first successful submissions appear.
4. Consider connecting Yandex Webmaster.
5. If the public mailbox changes, replace `info@godutch.ru` consistently across
   HTML and JSON-LD.

