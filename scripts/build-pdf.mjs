// Renders the built Persian page with the print stylesheet and saves it as public/resume.pdf.
// Run via `npm run build:pdf` (builds first). Uses an installed Chrome/Edge, so no browser download.
import { createReadStream, existsSync, statSync } from 'node:fs';
import { mkdir } from 'node:fs/promises';
import { createServer } from 'node:http';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright-core';

const root = fileURLToPath(new URL('..', import.meta.url));
const distDir = join(root, 'dist', 'resume', 'browser');
const outFile = join(root, 'public', 'resume.pdf');

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.woff2': 'font/woff2',
  '.ico': 'image/x-icon',
};

const server = createServer((req, res) => {
  const urlPath = decodeURIComponent(new URL(req.url ?? '/', 'http://localhost').pathname);
  let file = normalize(join(distDir, urlPath));
  if (!file.startsWith(distDir)) {
    res.writeHead(403).end();
    return;
  }
  if (existsSync(file) && statSync(file).isDirectory()) file = join(file, 'index.html');
  if (!existsSync(file)) {
    res.writeHead(404).end();
    return;
  }
  res.writeHead(200, { 'Content-Type': MIME[extname(file)] ?? 'application/octet-stream' });
  createReadStream(file).pipe(res);
});

async function launch() {
  for (const channel of [undefined, 'chrome', 'msedge']) {
    try {
      return await chromium.launch(channel ? { channel } : {});
    } catch {
      /* try the next browser */
    }
  }
  throw new Error('No Chromium, Chrome or Edge found. Install one of them and retry.');
}

await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
const { port } = server.address();
const browser = await launch();

try {
  const page = await browser.newPage({ locale: 'fa-IR', colorScheme: 'light' });
  await page.addInitScript(() => {
    localStorage.setItem('resume-lang', 'fa');
    localStorage.setItem('resume-theme', 'light');
  });
  await page.goto(`http://127.0.0.1:${port}/`, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.emulateMedia({ media: 'print' });
  await mkdir(join(root, 'public'), { recursive: true });
  await page.pdf({
    path: outFile,
    format: 'A4',
    printBackground: false,
    preferCSSPageSize: true,
  });
  console.log(`Saved ${outFile}`);
} finally {
  await browser.close();
  server.close();
}
