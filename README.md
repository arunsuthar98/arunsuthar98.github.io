# Arun Suthar — Portfolio (v2)

> Tech-native cyberpunk portfolio for [arunsuthar98.github.io](https://arunsuthar98.github.io).
> Built with [Astro](https://astro.build), vanilla TypeScript, and one canvas.

## ✦ Features

- **3 themes** — dark (default), light, terminal (CRT + scanlines)
- **Boot sequence** intro — fake POST log on first visit
- **Live oscilloscope** canvas in the hero
- **Decrypting text** effect on hero name & role
- **Custom cursor** + magnetic buttons + glitch hovers
- **⌘K command palette** — terminal-style navigation
- **JSON-LD Person** schema, OG tags, sitemap-ready
- **Reduced-motion safe** — all effects respect `prefers-reduced-motion`
- **GitHub Actions** — auto-build & deploy on `main` push

## ✦ Stack

| | |
|---|---|
| Framework | Astro 4 |
| Lang | TypeScript (zero-JS by default; islands where needed) |
| Styles | Hand-rolled CSS with CSS variables + 3 themes |
| Forms | FormSubmit.co |
| Host | GitHub Pages (user page) |

## ✦ Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to ./dist
npm run preview  # serve the built site
```

## ✦ Edit content

All copy lives in **`src/data/site.ts`** — profile, experience, projects, skills, education.

## ✦ Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml` which builds and deploys to GitHub Pages.
Enable Pages under **Settings → Pages → Source: GitHub Actions** once after the workflow runs.

## ✦ Legacy

The previous single-file site is preserved at `legacy/index.html`.

---
© Arun Suthar
