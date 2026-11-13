// Copies the Ionicons used by the site into src/assets/icons/ion/, normalised
// so every shape takes `currentColor` and strokes are 32 on the 512 viewBox.
// Usage: node scripts/sync-ionicons.mjs <path to ionicons/dist/svg>
// (for example after `npm pack ionicons` and extracting the archive).
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ICONS = [
  "add-outline",
  "arrow-forward-outline",
  "build-outline",
  "business-outline",
  "call-outline",
  "checkmark-outline",
  "chevron-forward-outline",
  "close-outline",
  "home-outline",
  "logo-whatsapp",
  "menu-outline",
  "pause",
  "play",
  "star",
  "time-outline",
];

const source = process.argv[2] ?? "node_modules/ionicons/dist/svg";
const target = "src/assets/icons/ion";
mkdirSync(target, { recursive: true });

for (const name of ICONS) {
  let svg = readFileSync(join(source, `${name}.svg`), "utf8")
    .replace(/<style[\s\S]*?<\/style>/g, "")
    .replace(/\sclass="[^"]*"/g, "")
    .replace(/stroke-width="\d+(px)?"/g, 'stroke-width="32"')
    .replace("<svg ", '<svg fill="currentColor" ');

  // The plus keeps its vertical bar as a separate path so it can fade out when open.
  if (name === "add-outline") {
    svg = svg.replace(
      /<path d="M256 112v288M400 256H112"([^>]*)\/>/,
      '<path d="M400 256H112"$1/><path class="icon_plus-vertical" d="M256 112v288"$1/>',
    );
  }

  writeFileSync(join(target, `${name}.svg`), svg.trim() + "\n");
}

console.log(`${ICONS.length} icônes copiées dans ${target}`);
