# SAVERIA · Website Redesign

Static site (HTML/CSS/vanilla JS, no build step) for SAVERIA Design Studio.

## Structure

- `index.html`: Home
- `about.html`: About Saveria / Founder
- `projects.html`: Full project grid
- `project-*.html`: Individual project pages (Tartarun, Mqabba Townhouse, Weber Apartment, Każin Santa Marija)
- `services.html`: Services & process
- `contact.html`: Contact form
- `css/styles.css`: All styles
- `js/main.js`: Mobile nav + contact form handling

## Local preview

No build tools required. From this folder, run:

```bash
python -m http.server 8080
```

Then open http://localhost:8080

## Images

All slots now use real photography; see `images/<project>/` for the source files. Filenames prefixed `01-`, `02-`, etc. are the ones actually wired into the HTML (`<img>` tags inside `.ph.ph--photo` blocks); the rest of each folder is the full batch you uploaded, kept for future swaps.

To swap or add a photo: drop the file into the relevant `images/<project>/` folder, then ask Claude to wire it in (or edit the `src=` path directly in the matching HTML file).

## Fonts

- Logo: **Aviano Serif Light**; the licensed file lives at `css/fonts/Aviano-Serif-Light.otf` and is loaded via `@font-face` in `styles.css`. Falls back to Prata if that file is ever missing.
- Headers: **Cormorant Garamond** (Google Fonts), italic by default.
- Body: **Jost** (Google Fonts), light weight.

## Deploying to Vercel

This is a static site, so no framework build is needed:

1. Push this folder to a GitHub repo.
2. In Vercel, "Add New Project", import the repo, Framework Preset: **Other**, deploy (no build command / output directory needed).

Or via CLI (`npm i -g vercel`, then `vercel`) if Node.js is installed.
