# Suraj Ari — Portfolio Website

A complete, static one-page portfolio site built from your `NEW_PORTFOLIO.zip` slides.
No build tools, no framework, no dependencies — just HTML, CSS and vanilla JS. Open
`index.html` in a browser and it works.

## What's inside

```
index.html                 → the whole page (hero, about, skills, work, contact)
assets/css/style.css       → all styling
assets/js/main.js          → gallery rendering, filters, lightbox, nav behaviour
assets/img/suraj-photo.jpg → your cropped profile photo
assets/work/project-*.jpg  → your 16 project slides, compressed for the web
```

Your original 20 full-resolution slides totalled ~180MB. The 16 project slides used in
the gallery have been resized and compressed to ~4MB total, so the site loads fast. If
you ever want to swap in higher-res versions, just replace the files in `assets/work/`
and keep the same filenames (or update the paths in `main.js`).

## Editing content

- **Text** (bio, experience, education, skills, contact info): edit directly in `index.html`.
- **Project gallery**: edit the `PROJECTS` array at the top of `assets/js/main.js` — each
  entry has an image path, a title, and a category. Add, remove, or re-categorize projects
  there; the gallery and filters update automatically.
- **Colors**: the brand blue (`#0020F1`) and yellow (`#FFDD00`) are defined once at the top
  of `assets/css/style.css` under `:root` — change them there to restyle the whole site.

## How to deploy (pick one, all free)

**Netlify (easiest — drag and drop)**
1. Go to https://app.netlify.com/drop
2. Drag the whole project folder onto the page.
3. You get a live URL in seconds. Add a custom domain later if you want, under Site settings → Domain management.

**Vercel**
1. Go to https://vercel.com/new
2. Import this folder (or push it to a GitHub repo first and import the repo).
3. Leave build settings blank (it's static) and deploy.

**GitHub Pages**
1. Create a new GitHub repo and push this folder's contents to it.
2. Go to Settings → Pages, set Source to your main branch, root folder.
3. Your site goes live at `https://yourusername.github.io/reponame`.

Any of these will give you a real, shareable URL — no server or backend needed since this
is a fully static site.

## Notes

- The gallery lightbox supports click, keyboard (Enter/Space to open, arrows to navigate,
  Escape to close), and touch.
- The layout is responsive down to small phones, and respects `prefers-reduced-motion`.
- Fonts (Anton + Space Grotesk) load from Google Fonts via CDN — make sure your deploy
  target allows outbound requests to fonts.googleapis.com (all the platforms above do by default).
