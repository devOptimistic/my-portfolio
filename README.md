# Bilingual (fa/en) Resume: Angular

A static, prerendered (SSG) resume site built with Angular 22: standalone components, signals, zoneless, OnPush everywhere. The build output is plain HTML/JS/CSS that runs on ordinary Apache shared hosting.

## Edit the content

**All content lives in one file: [`src/app/data/resume.data.ts`](src/app/data/resume.data.ts).** Every string has `fa` and `en` variants; components contain no hard-coded text.

- `**bold**` renders bold text.
- `[[TODO: placeholder]]` renders a highlighted placeholder. Search the file for `TODO` to find everything still to fill in (name, email, links, phone, company, metrics, projects, education, site URL).
- **Profile photo:** replace `public/images/profile.webp` with your own picture (keep the file name). Recommended: **400×400 px, WebP, under 50 KB**, face centred (it is shown as a circle). To hide the photo, delete the `photo` block in `profile`. Then re-run `npm run build:pdf`.
- Project screenshots: put images in `public/images/` and set `image: 'images/my-shot.webp'` on the project. Without `image`, a gradient placeholder is shown.
- Project links: replace the `'#'` values of `demoUrl` and `sourceUrl`.
- `seo.url`: set this to the real address of the site (used for Open Graph and JSON-LD).

## Run locally

```bash
npm install
npm start          # dev server at http://localhost:4200
```

Other commands:

```bash
npm run lint       # ESLint (angular-eslint, incl. template accessibility rules)
npm test           # unit tests (Vitest, the Angular default runner)
npm run build      # production build + prerender
```

## Downloadable PDF (`resume.pdf`)

The toolbar's **Download PDF** button links to `resume.pdf`, a file committed in [`public/resume.pdf`](public/resume.pdf) and copied to the build output.

```bash
npm run build:pdf
```

This builds the site, renders the **Persian** page with the print stylesheet (A4, light theme, no background graphics, self-hosted Vazirmatn) using headless Chrome via `playwright-core`, and overwrites `public/resume.pdf`. It uses an installed Chrome or Edge (no browser download).

**Re-run it, and commit the new PDF, after every edit to `resume.data.ts`** (including when you replace `TODO` placeholders). Then run `npm run build` again before deploying.

## Build

```bash
npm run build
```

Output goes to `dist/resume/browser/`. That folder is the whole website (it already contains `index.html`, hashed JS/CSS, fonts under `media/`, and `.htaccess`).

## Deploy to shared hosting (Apache)

1. Run `npm run build` on your computer.
2. Open `dist/resume/browser/`. Make sure hidden files are visible: `.htaccess` must be uploaded.
3. Connect via your host's File Manager or FTP and open the web root (usually `public_html/`).
4. Upload the **contents** of `dist/resume/browser/` (not the folder itself) into `public_html/`. `index.html` and `.htaccess` must end up directly in `public_html/`.
5. Visit your domain. If you upload into a subfolder (for example `public_html/resume/`), it still works because the build uses a relative `<base href="./">`. If you prefer an absolute one, build with `npx ng build --base-href /resume/`.
6. When you redeploy, upload everything again. File names are hashed, and `index.html` is served with `no-cache`, so visitors get the new version immediately. Old hashed files can be deleted.

`.htaccess` (source: [`public/.htaccess`](public/.htaccess)) sends unknown URLs to `index.html`, enables gzip, and caches hashed assets for one year. It needs `mod_rewrite`, `mod_expires` and `mod_headers`; each block is wrapped in `<IfModule>`, so a missing module won't break the site.

`dist/resume/browser/index.csr.html` is Angular's client-side fallback and can be ignored.

## Architectural decisions

- **Static prerender, no server.** `outputMode: "static"` with `provideServerRendering()` prerenders `index.html` at build time. The Express SSR server was removed. Search engines get the real content in the HTML.
- **No router.** It is a single page, so `@angular/router` was dropped to keep the bundle small. The `.htaccess` fallback is a safety net.
- **Content is data.** `resume.data.ts` is typed by `models/resume.models.ts`. Feature components are presentational, and take data and the active `lang` through signal `input()`s.
- **Language and theme as signals.** `LanguageService` (default `fa`) sets `<html lang dir>` in an `effect()` and persists to `localStorage` via a try/catch wrapper that is a no-op during prerender. `ThemeService` follows `prefers-color-scheme`, and the manual toggle sets `data-theme`, which wins over the OS preference. A tiny inline script in `index.html` restores both before first paint, so there is no flash.
- **SEO.** `SeoService` updates `<title>`, description, Open Graph tags and a JSON-LD `Person` block whenever the language changes.
- **Logical CSS properties** (`inset-inline-*`, `padding-inline-start`, ...) make RTL and LTR share one stylesheet. Chips are forced LTR with `dir="ltr"`, and English runs inside Persian text carry `lang="en"`.
- **Lazy below-the-fold sections.** Skills, projects and education use `@defer (on viewport; hydrate on viewport)` with incremental hydration. Their content is still in the prerendered HTML (SEO, print, no-JS), but their JavaScript only loads when scrolled into view. The visual reveal itself is a CSS scroll-driven animation (progressive enhancement, disabled for `prefers-reduced-motion` and print).
- **Fonts.** Vazirmatn (latin and arabic subsets, weights 400/500/700, woff2) is self-hosted from `src/fonts/` and bundled by the build with `font-display: swap`. Nothing is loaded from Google Fonts. The font license is in `src/fonts/LICENSE.txt`.
- **PDF.** `scripts/build-pdf.mjs` serves the built output locally and prints it to `public/resume.pdf`; there is no runtime PDF generation.
- **Print.** `@page` A4, toolbar and buttons hidden, gradients and backgrounds removed, individual cards and list items avoid page breaks.
