/**
 * core/mapping — FR-X01 .. FR-X07 (URD Muc 7).
 *
 * Luu y quan trong (FR-X03): mot Mapping la KET QUA DIEN GIAI CHUYEN MON,
 * khong phai su that khach quan — moi Mapping bat buoc co rationale,
 * createdBy, approvedBy, approvedAt. Module nay chi tra cuu/nhom du lieu da
 * co san trong kho (Muc 7: xay dung tang dan theo thu tu uu tien), khong
 * tu suy dien ra mapping moi.
 */
import type {
  ContentBundle,
  ControlRequirement,
  Equivalence,
  Mapping
} from "../../data/schema/models";
import { normalizeForMatch, tokenize } from "../search/vietnamese";

export interface EquivalentRequirement {
  requirement: ControlRequirement;
  equivalence: Equivalence;
  mapping: Mapping;
}

/** FR-X04: chon mot yeu cau -> moi yeu cau tuong duong o cac khung khac, nhom theo muc do. */
export function findEquivalentRequirements(
  requirementId: string,
  bundle: ContentBundle
): EquivalentRequirement[] {
  const reqById = new Map(bundle.controlRequirements.map((r) => [r.id, r]));
  const results: EquivalentRequirement[] = [];

  for (const mapping of bundle.mappings) {
    let otherId: string | null = null;
    if (mapping.fromReqId === requirementId) otherId = mapping.toReqId;
    else if (mapping.toReqId === requirementId) otherId = mapping.fromReqId;
    if (!otherId) continue;

    const requirement = reqById.get(otherId);
    if (!requirement) continue;

    results.push({ requirement, equivalence: mapping.equivalence, mapping });
  }

  return results;
}

export function groupByEquivalence(
  items: EquivalentRequirement[]
): Record<Equivalence, EquivalentRequirement[]> {
  const grouped: Record<Equivalence, EquivalentRequirement[]> = {
    tuong_duong_hoan_toan: [],
    tuong_duong_mot_phan: [],
    co_lien_quan: []
  };
  for (const item of items) grouped[item.equivalence].push(item);
  return grouped;
}

/**
 * FR-X05: "Mot kiem soat - nhieu khung". Nguoi dung nhap mo ta bien phap
 * kiem soat thuc te -> tim cac ControlRequirement co tu khoa trung khop
 * trong title/summary. Day la doi chieu tu khoa don gian, KHONG phai suy
 * dien ngu nghia bang mo hinh ngon ngu (URD FR-T08: khong sinh noi dung
 * bang LLM trong san pham chay that).
 */
export function findRequirementsMatchingControlDescription(
  description: string,
  requirements: ControlRequirement[],
  limit = 20
): ControlRequirement[] {
  const queryTokens = new Set(tokenize(description).map(normalizeForMatch));
  if (queryTokens.size === 0) return [];

  const scored = requirements.map((req) => {
    const reqTokens = new Set(
      tokenize(`${req.title} ${req.summary}`).map(normalizeForMatch)
    );
    let score = 0;
    for (const qt of queryTokens) if (reqTokens.has(qt)) score += 1;
    return { req, score };
  });

  return scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((s) => s.req);
}

/** FR-X06: canh bao khi Mapping tro toi yeu cau thuoc phien ban chuan da loi thoi. */
export function findMappingsToOutdatedFrameworkVersion(
  bundle: ContentBundle,
  currentVersionByFrameworkId: Record<string, string>
): Mapping[] {
  const reqById = new Map(bundle.controlRequirements.map((r) => [r.id, r]));
  const frameworkById = new Map(bundle.frameworks.map((f) => [f.id, f]));

  return bundle.mappings.filter((mapping) => {
    for (const reqId of [mapping.fromReqId, mapping.toReqId]) {
      const req = reqById.get(reqId);
      if (!req) continue;
      const framework = frameworkById.get(req.frameworkId);
      const currentVersion = currentVersionByFrameworkId[req.frameworkId];
      if (framework && currentVersion && framework.version !== currentVersion) {
        return true;
      }
    }
    return false;
  });
}
