import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const ASSET_EXTENSIONS = /\.(pdf|html|png|jpg|jpeg|svg|ico|webp)$/i;
const TEST_FILE_PATTERN = /\.(test|spec)\.(ts|tsx|js|jsx|mjs)$/;

function walkFiles(dir, extensions) {
  if (!existsSync(dir)) return [];
  const results = [];
  for (const entry of readdirSync(dir)) {
    const fullPath = path.join(dir, entry);
    const stat = statSync(fullPath);
    if (stat.isDirectory()) {
      results.push(...walkFiles(fullPath, extensions));
    } else if (!TEST_FILE_PATTERN.test(entry) && extensions.some((ext) => entry.endsWith(ext))) {
      results.push(fullPath);
    }
  }
  return results;
}

function stripQueryHash(ref) {
  return ref.split("#")[0].split("?")[0];
}

export function verifyAssets(rootDir = process.cwd()) {
  const publicDir = path.join(rootDir, "public");
  const srcDir = path.join(rootDir, "src");

  const sourceFiles = [
    ...walkFiles(srcDir, [".ts", ".tsx"]),
    path.join(rootDir, "index.html"),
    path.join(rootDir, "README.md"),
    ...walkFiles(path.join(rootDir, "docs"), [".md"]),
  ].filter((file) => existsSync(file));

  const publicHtmlFiles = existsSync(publicDir)
    ? readdirSync(publicDir)
        .filter((name) => name.endsWith(".html"))
        .map((name) => path.join(publicDir, name))
    : [];

  const brokenLinks = [];
  const deprecatedDomainHits = [];
  let checkedCount = 0;

  // 1. Check all root-relative static file references in src/, index.html, docs/, and public/*.html
  const rootRefRegex = /["'`](\/[^"'`\s)]+)["'`]/g;
  for (const file of [...sourceFiles, ...publicHtmlFiles]) {
    const content = readFileSync(file, "utf8");

    if (content.includes("is-a.dev")) {
      deprecatedDomainHits.push(path.relative(rootDir, file));
    }

    for (const match of content.matchAll(rootRefRegex)) {
      const rawRef = match[1];
      if (rawRef === "/src/main.tsx" || rawRef.startsWith("//")) continue;
      const cleanRef = stripQueryHash(rawRef);
      if (!ASSET_EXTENSIONS.test(cleanRef) && !cleanRef.startsWith("/assets/")) continue;

      checkedCount += 1;
      const targetPath = path.join(publicDir, cleanRef.slice(1));
      if (!existsSync(targetPath)) {
        brokenLinks.push({
          source: path.relative(rootDir, file),
          reference: rawRef,
          expected: path.relative(rootDir, targetPath),
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
          source: path.relative(rootDir, file),
          reference: rawRef,
          expected: path.relative(rootDir, targetPath),
        });
      }
    }
  }

  // 3. Check official portfolio links in README.md point to valid public assets
  const readmePath = path.join(rootDir, "README.md");
  if (existsSync(readmePath)) {
    const readme = readFileSync(readmePath, "utf8");
    const portfolioAssetRegex = /https:\/\/vovantutai-portfolio\.vercel\.app\/([^\s)]+)/g;
    for (const match of readme.matchAll(portfolioAssetRegex)) {
      const asset = stripQueryHash(match[1]);
      if (!ASSET_EXTENSIONS.test(asset)) continue;
      checkedCount += 1;
      const targetPath = path.join(publicDir, asset);
      if (!existsSync(targetPath)) {
        brokenLinks.push({
          source: "README.md",
          reference: match[0],
          expected: path.relative(rootDir, targetPath),
        });
      }
    }
  }

  return {
    checkedCount,
    brokenLinks,
    deprecatedDomainHits,
    ok: brokenLinks.length === 0 && deprecatedDomainHits.length === 0,
  };
}

function main() {
  const result = verifyAssets(process.cwd());

  if (result.deprecatedDomainHits.length > 0) {
    console.error("Deprecated domain reference found in:");
    for (const file of result.deprecatedDomainHits) {
      console.error(`  - ${file}`);
    }
    process.exit(1);
  }

  if (result.brokenLinks.length > 0) {
    console.error(`Found ${result.brokenLinks.length} broken asset/CV reference(s):`);
    for (const item of result.brokenLinks) {
      console.error(`  - ${item.source}: "${item.reference}" -> missing ${item.expected}`);
    }
    process.exit(1);
  }

  console.log(
    `OK: Verified ${result.checkedCount} local asset & CV references (0 broken, 0 deprecated domains).`,
  );
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main();
}
