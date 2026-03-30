# PromptGenerator

A lightweight prompt generation app tailored for **The Content Lab** and the Brand Solutions Executive workflow.

## What it does

The app creates structured, ready-to-use AI prompts for:
- Strategic creative briefs
- Ad copy variation generation
- Media planning recommendations
- Client-ready deck narrative development

## Run locally

Because this is a static web app, you can run it with any local file server.

### Option 1: Python

```bash
python3 -m http.server 8000
```

Then open: <http://localhost:8000>

## Files

- `index.html` — app UI and campaign input form
- `styles.css` — The Content Lab visual styling with site-aligned brand colors
- `app.js` — prompt templates + generation logic
- `logo-content-lab.svg` — fallback local logo asset

## Branding source

- Header logo source: `https://thecontentlab.in/` image asset (`TCL-on-White-1.png` via site CDN URL).
- Colors in `styles.css` are aligned to the website's monochrome brand treatment (black / white / soft gray).

## Conflict check

To quickly validate that no merge markers are present after rebases/merges:

```bash
./scripts/verify-no-conflicts.sh
```
