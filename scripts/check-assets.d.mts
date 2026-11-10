export interface BrokenLinkEntry {
  source: string;
  reference: string;
  expected: string;
}

export interface VerifyAssetsResult {
  checkedCount: number;
  brokenLinks: BrokenLinkEntry[];
  deprecatedDomainHits: string[];
  ok: boolean;
}

export function verifyAssets(rootDir?: string): VerifyAssetsResult;
