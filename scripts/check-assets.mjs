import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const PUBLIC_DIR = path.join(ROOT, "public");
const SRC_DIR = path.join(ROOT, "src");

const ASSET_EXTENSIONS = /\.(pdf|html|png|jpg|jpeg|svg|ico|webp)$/i;

function walkFiles(dir, extensions) {
  if (!existsSync(dir)) return [];
  const results = [];
  for (const entry of readdirSync(dir)) {
    const fullPath = path.join(dir, entry);
    const stat = statSync(fullPath);
    if (stat.isDirectory()) {
      results.push(...walkFiles(fullPath, extensions));
    } else if (extensions.some((ext) => entry.endsWith(ext))) {
      results.push(fullPath);
    }
  }
  return results;
}

function stripQueryHash(ref) {
  return ref.split("#")[0].split("?")[0];
}

function main() {
  const sourceFiles = [
    ...walkFiles(SRC_DIR, [".ts", ".tsx"]),
    path.join(ROOT, "index.html"),
    path.join(ROOT, "README.md"),
    ...walkFiles(path.join(ROOT, "docs"), [".md"]),
  ].filter((file) => existsSync(file));

  const publicHtmlFiles = existsSync(PUBLIC_DIR)
    ? readdirSync(PUBLIC_DIR)
        .filter((name) => name.endsWith(".html"))
        .map((name) => path.join(PUBLIC_DIR, name))
    : [];

  const brokenLinks = [];
  const deprecatedDomainHits = [];
  let checkedCount = 0;

  // 1. Check all root-relative static file references in src/, index.html, and public/*.html
  const rootRefRegex = /["'`](\/[^"'`\s)]+)["'`]/g;
  for (const file of [...sourceFiles, ...publicHtmlFiles]) {
    const content = readFileSync(file, "utf8");

    if (content.includes("is-a.dev")) {
      deprecatedDomainHits.push(path.relative(ROOT, file));
    }

    for (const match of content.matchAll(rootRefRegex)) {
      const rawRef = match[1];
      if (rawRef === "/src/main.tsx" || rawRef.startsWith("//")) continue;
      const cleanRef = stripQueryHash(rawRef);
      if (!ASSET_EXTENSIONS.test(cleanRef) && !cleanRef.startsWith("/assets/")) continue;

      checkedCount += 1;
      const targetPath = path.join(PUBLIC_DIR, cleanRef.slice(1));
      if (!existsSync(targetPath)) {
        brokenLinks.push({
          source: path.relative(ROOT, file),
          reference: rawRef,
          expected: path.relative(ROOT, targetPath),
        });
      }
    }
  }

  // 2. Check relative href/src references inside public/*.html
  const htmlRelRegex = /(?:href|src)=["']([^"']+)["']/g;
  for (const file of publicHtmlFiles) {
    const content = readFileSync(file, "utf8");
    for (const match of content.matchAll(htmlRelRegex)) {
      const rawRef = match[1];
      if (
        rawRef.startsWith("http://") ||
        rawRef.startsWith("https://") ||
        rawRef.startsWith("mailto:") ||
        rawRef.startsWith("tel:") ||
        rawRef.startsWith("#") ||
        rawRef.startsWith("data:") ||
        rawRef.startsWith("/")
      ) {
        continue;
      }

      const cleanRef = stripQueryHash(rawRef);
      if (!cleanRef || !ASSET_EXTENSIONS.test(cleanRef)) continue;

      checkedCount += 1;
      const targetPath = path.resolve(path.dirname(file), cleanRef);
      if (!existsSync(targetPath)) {
        brokenLinks.push({
          source: path.relative(ROOT, file),
          reference: rawRef,
          expected: path.relative(ROOT, targetPath),
        });
      }
    }
  }

  // 3. Check official portfolio links in README.md point to valid public assets when targeting /
  const readmePath = path.join(ROOT, "README.md");
  if (existsSync(readmePath)) {
    const readme = readFileSync(readmePath, "utf8");
    const portfolioAssetRegex = /https:\/\/vovantutai-portfolio\.vercel\.app\/([^\s)]+)/g;
    for (const match of readme.matchAll(portfolioAssetRegex)) {
      const asset = stripQueryHash(match[1]);
      if (!ASSET_EXTENSIONS.test(asset)) continue;
      checkedCount += 1;
      const targetPath = path.join(PUBLIC_DIR, asset);
      if (!existsSync(targetPath)) {
        brokenLinks.push({
          source: "README.md",
          reference: match[0],
          expected: path.relative(ROOT, targetPath),
        });
      }
    }
  }

  if (deprecatedDomainHits.length > 0) {
    console.error("Deprecated domain reference (is-a.dev) found in:");
    for (const file of deprecatedDomainHits) {
      console.error(`  - ${file}`);
    }
    process.exit(1);
  }

  if (brokenLinks.length > 0) {
    console.error(`Found ${brokenLinks.length} broken asset/CV reference(s):`);
    for (const item of brokenLinks) {
      console.error(`  - ${item.source}: "${item.reference}" -> missing ${item.expected}`);
    }
    process.exit(1);
  }

  console.log(`OK: Verified ${checkedCount} local asset & CV references (0 broken, 0 deprecated domains).`);
}

main();
