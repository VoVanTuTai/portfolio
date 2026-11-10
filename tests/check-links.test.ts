import { existsSync, mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import { verifyAssets } from "../scripts/check-assets.mjs";

const REPO_ROOT = process.cwd();
const LEGACY_DOMAIN = ["is-a", "dev"].join(".");

const tempDirs: string[] = [];

function createTempRepo(): string {
  const dir = mkdtempSync(path.join(os.tmpdir(), "portfolio-link-check-"));
  tempDirs.push(dir);
  mkdirSync(path.join(dir, "src"), { recursive: true });
  mkdirSync(path.join(dir, "public", "assets"), { recursive: true });
  mkdirSync(path.join(dir, "docs"), { recursive: true });
  return dir;
}

afterEach(() => {
  while (tempDirs.length > 0) {
    const dir = tempDirs.pop();
    if (dir && existsSync(dir)) {
      rmSync(dir, { recursive: true, force: true });
    }
  }
});

describe("Static Asset, CV & Official Link Integrity", () => {
  it("verifies zero broken links and zero deprecated domains across the repository", () => {
    const result = verifyAssets(REPO_ROOT);
    expect(result.brokenLinks).toEqual([]);
    expect(result.deprecatedDomainHits).toEqual([]);
    expect(result.ok).toBe(true);
    expect(result.checkedCount).toBeGreaterThanOrEqual(100);
  });

  it("ensures canonical CV downloads and portfolio avatar exist in public/", () => {
    const requiredPublicFiles = [
      "VoVanTuTai_Business_Analyst_CV_Tieng_Viet.pdf",
      "VoVanTuTai_Business_Analyst_CV.pdf",
      "po-ba-cv-vi.html",
      "cv.html",
      "assets/avatar.png",
    ];
    for (const rel of requiredPublicFiles) {
      expect(existsSync(path.join(REPO_ROOT, "public", rel)), `Missing public/${rel}`).toBe(true);
    }
  });

  it("detects missing root-relative asset/CV paths and relative HTML references", () => {
    const repo = createTempRepo();
    writeFileSync(path.join(repo, "public", "assets", "valid.png"), "ok");
    writeFileSync(
      path.join(repo, "src", "sample.tsx"),
      `
        export const a = "/assets/valid.png?v=2#hero";
        export const b = "/nonexistent-resume.pdf";
      `,
    );
    writeFileSync(
      path.join(repo, "public", "test-cv.html"),
      `<img src="assets/valid.png" /><img src="assets/missing-photo.jpg" />`,
    );

    const result = verifyAssets(repo);
    expect(result.ok).toBe(false);
    expect(result.deprecatedDomainHits).toEqual([]);
    expect(result.brokenLinks).toHaveLength(2);
    expect(result.brokenLinks.map((b) => b.reference)).toEqual([
      "/nonexistent-resume.pdf",
      "assets/missing-photo.jpg",
    ]);
  });

  it("flags deprecated legacy domain strings inside source and documentation files", () => {
    const repo = createTempRepo();
    writeFileSync(
      path.join(repo, "docs", "NOTES.md"),
      `Old host: https://vovantutai.${LEGACY_DOMAIN}`,
    );

    const result = verifyAssets(repo);
    expect(result.ok).toBe(false);
    expect(result.deprecatedDomainHits).toEqual([path.join("docs", "NOTES.md")]);
  });
});
