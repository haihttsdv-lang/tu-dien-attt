/**
 * core/source-validator — FR-T01, FR-T02.
 *
 * Luat toi thuong cua du an (URD Muc 10): "khong co nguon thi khong co
 * noi dung". Module nay la hang rao thu hai (sau rang buoc zod .min(1) o
 * models.ts) — no doi chieu tung SourceRef voi du lieu LegalDocument /
 * Framework / DocumentArticle / ControlRequirement thuc te, phat hien:
 *
 *   - sources[] rong (da bi chan boi schema, nhung kiem tra lai o day de
 *     module nay tu dung duoc, khong phu thuoc thu tu goi)
 *   - nguon hang C (chi dinh huong, khong duoc dung lam can cu)
 *   - trich dan toi mot dieu khoan / ma kiem soat khong ton tai trong ho so
 *     van ban / framework tuong ung
 *   - tro toi mot LegalDocument hoac Framework khong ton tai
 *
 * Ham thuan tuy, khong I/O — dung duoc ca trong test lan trong script CI
 * (scripts/validate/validate-content.ts).
 */
import type {
  ContentBlock,
  ContentBundle,
  SourceRef
} from "../../data/schema/models";

export type SourceViolationReason =
  | "empty_sources"
  | "source_tier_c"
  | "unknown_legal_document"
  | "unknown_framework"
  | "unknown_article_ref"
  | "unknown_clause_ref";

export interface SourceViolation {
  contentBlockId: string;
  reason: SourceViolationReason;
  detail: string;
}

interface ValidationIndexes {
  legalDocumentsById: Map<string, ContentBundle["legalDocuments"][number]>;
  frameworksById: Map<string, ContentBundle["frameworks"][number]>;
  articlesByDocAndRef: Set<string>;
  controlReqsByFrameworkAndClause: Set<string>;
}

function buildIndexes(bundle: ContentBundle): ValidationIndexes {
  return {
    legalDocumentsById: new Map(bundle.legalDocuments.map((d) => [d.id, d])),
    frameworksById: new Map(bundle.frameworks.map((f) => [f.id, f])),
    articlesByDocAndRef: new Set(
      bundle.documentArticles.map((a) => `${a.documentId}::${a.articleRef}`)
    ),
    controlReqsByFrameworkAndClause: new Set(
      bundle.controlRequirements.map((c) => `${c.frameworkId}::${c.clauseRef}`)
    )
  };
}

function validateSourceRef(
  ref: SourceRef,
  idx: ValidationIndexes
): SourceViolation[] {
  const violations: SourceViolation[] = [];

  if (ref.type === "legal_document") {
    const doc = idx.legalDocumentsById.get(ref.refId);
    if (!doc) {
      violations.push({
        contentBlockId: "",
        reason: "unknown_legal_document",
        detail: `Khong tim thay LegalDocument id="${ref.refId}"`
      });
      return violations;
    }
    if (doc.sourceTier === "C") {
      violations.push({
        contentBlockId: "",
        reason: "source_tier_c",
        detail: `LegalDocument "${ref.refId}" thuoc nguon hang C — khong duoc dung lam can cu (URD Muc 4.4)`
      });
    }
    if (ref.articleRef) {
      const key = `${ref.refId}::${ref.articleRef}`;
      if (!idx.articlesByDocAndRef.has(key)) {
        violations.push({
          contentBlockId: "",
          reason: "unknown_article_ref",
          detail: `Dieu khoan "${ref.articleRef}" khong ton tai trong ho so van ban "${ref.refId}"`
        });
      }
    }
  } else {
    const fw = idx.frameworksById.get(ref.refId);
    if (!fw) {
      violations.push({
        contentBlockId: "",
        reason: "unknown_framework",
        detail: `Khong tim thay Framework id="${ref.refId}"`
      });
      return violations;
    }
    if (fw.sourceTier === "C") {
      violations.push({
        contentBlockId: "",
        reason: "source_tier_c",
        detail: `Framework "${ref.refId}" thuoc nguon hang C — khong duoc dung lam can cu`
      });
    }
    if (ref.clauseRef) {
      const key = `${ref.refId}::${ref.clauseRef}`;
      if (!idx.controlReqsByFrameworkAndClause.has(key)) {
        violations.push({
          contentBlockId: "",
          reason: "unknown_clause_ref",
          detail: `Ma kiem soat "${ref.clauseRef}" khong ton tai trong framework "${ref.refId}"`
        });
      }
    }
  }

  return violations;
}

export function validateContentBlock(
  block: ContentBlock,
  bundle: ContentBundle
): SourceViolation[] {
  const idx = buildIndexes(bundle);
  const violations: SourceViolation[] = [];

  if (block.sources.length === 0) {
    violations.push({
      contentBlockId: block.id,
      reason: "empty_sources",
      detail: "ContentBlock khong co nguon nao (FR-T01)"
    });
    return violations;
  }

  for (const ref of block.sources) {
    for (const v of validateSourceRef(ref, idx)) {
      violations.push({ ...v, contentBlockId: block.id });
    }
  }

  return violations;
}

/** FR-T02: quet toan bo kho, dung cho ca unit test lan script CI. */
export function validateBundle(bundle: ContentBundle): SourceViolation[] {
  const violations: SourceViolation[] = [];
  for (const block of bundle.contentBlocks) {
    violations.push(...validateContentBlock(block, bundle));
  }
  return violations;
}

export function isBundleValid(bundle: ContentBundle): boolean {
  return validateBundle(bundle).length === 0;
}
