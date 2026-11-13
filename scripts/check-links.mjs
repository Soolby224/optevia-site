// Checks every internal link of the built site: the target page must exist in
// dist/, and an anchor must match an id on that page. Run after `astro build`.
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";

const DIST = "dist";

if (!existsSync(DIST)) {
  console.error("dist/ introuvable : lancez d’abord `npx astro build`.");
  process.exit(1);
}

const walk = (dir) =>
  readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });

const files = walk(DIST);
const pages = files.filter((file) => file.endsWith(".html"));

const urlOf = (file) => {
  const path = "/" + relative(DIST, file).split(sep).join("/");
  return path.replace(/index\.html$/, "").replace(/\.html$/, "");
};

const ids = new Map();
for (const file of pages) {
  const html = readFileSync(file, "utf8");
  ids.set(urlOf(file), new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1])));
}

const resolve = (pathname) => {
  const clean = decodeURI(pathname).replace(/\/+$/, "") || "/";
  for (const candidate of [clean, `${clean}/`, clean === "/" ? "/" : `${clean}.html`]) {
    if (ids.has(candidate)) return candidate;
  }
  const asset = join(DIST, clean);
  return existsSync(asset) && statSync(asset).isFile() ? clean : undefined;
};

const broken = [];
let checked = 0;

for (const file of pages) {
  const from = urlOf(file);
  const html = readFileSync(file, "utf8");
  for (const [, href] of html.matchAll(/<a\s[^>]*?href="([^"]*)"/g)) {
    if (/^(?:[a-z]+:|\/\/)/i.test(href)) continue;
    checked++;
    if (href === "" || href === "#") {
      broken.push({ from, href, reason: "lien vide" });
      continue;
    }
    const url = new URL(href.replace(/&amp;/g, "&"), `https://site.local${from}`);
    const target = resolve(url.pathname);
    if (!target) {
      broken.push({ from, href, reason: "page introuvable" });
      continue;
    }
    const anchor = decodeURIComponent(url.hash.slice(1));
    if (anchor && ids.has(target) && !ids.get(target).has(anchor)) {
      broken.push({ from, href, reason: `ancre #${anchor} absente` });
    }
  }
}

for (const link of broken) console.log(`✗ ${link.from} → ${link.href} (${link.reason})`);
console.log(`${checked} liens internes vérifiés sur ${pages.length} pages, ${broken.length} cassé(s).`);
process.exit(broken.length > 0 ? 1 : 0);
