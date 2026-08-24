import { describe, expect, it } from "vitest";
import {
  isBundleValid,
  validateBundle,
  validateContentBlock
} from "../../src/core/source-validator";
import type { ContentBlock, ContentBundle } from "../../src/data/schema/models";

function emptyBundle(): ContentBundle {
  return {
    topics: [],
    legalDocuments: [],
    documentArticles: [],
    documentRelations: [],
    frameworks: [],
    controlRequirements: [],
    mappings: [],
    contentBlocks: [],
    terms: [],
    auditPrograms: [],
    interviewQuestions: [],
    evidenceItems: [],
    complianceObligations: [],
    incidentPlaybooks: []
  };
}

describe("FR-T01/FR-T02 — cuong che nguon cho ContentBlock", () => {
  it("chan ContentBlock khong co nguon nao", () => {
    const bundle = emptyBundle();
    const block: ContentBlock = {
      id: "cb-1",
      topicId: "PL-01",
      tier: "T1",
      kind: "dien_giai",
      body: "Noi dung khong nguon",
      sources: [],
      classification: "cong_khai",
      status: "da_duyet",
      version: 1
    };
    const violations = validateContentBlock(block, bundle);
    expect(violations).toHaveLength(1);
    expect(violations[0].reason).toBe("empty_sources");
  });

  it("chan nguon hang C", () => {
    const bundle = emptyBundle();
    bundle.legalDocuments.push({
      id: "doc-c",
      docNumber: "x",
      title: "x",
      issuer: "x",
      status: "con_hieu_luc",
      sourceTier: "C",
      lastVerifiedAt: "2026-08-24",
      verifiedBy: "test"
    });
    const block: ContentBlock = {
      id: "cb-2",
      topicId: "PL-01",
      tier: "T1",
      kind: "trich_dan",
      body: "Trich dan tu nguon hang C",
      sources: [{ type: "legal_document", refId: "doc-c" }],
      classification: "cong_khai",
      status: "da_duyet",
      version: 1
    };
    const violations = validateContentBlock(block, bundle);
    expect(violations.some((v) => v.reason === "source_tier_c")).toBe(true);
  });

  it("chan trich dan toi dieu khoan khong ton tai", () => {
    const bundle = emptyBundle();
    bundle.legalDocuments.push({
      id: "doc-a",
      docNumber: "x",
      title: "x",
      issuer: "x",
      status: "con_hieu_luc",
      sourceTier: "A",
      lastVerifiedAt: "2026-08-24",
      verifiedBy: "test"
    });
    // Khong them DocumentArticle nao cho "Điều 99"
    const block: ContentBlock = {
      id: "cb-3",
      topicId: "PL-01",
      tier: "T1",
      kind: "trich_dan",
      body: "Trich dan Dieu 99",
      sources: [{ type: "legal_document", refId: "doc-a", articleRef: "Điều 99" }],
      classification: "cong_khai",
      status: "da_duyet",
      version: 1
    };
    const violations = validateContentBlock(block, bundle);
    expect(violations.some((v) => v.reason === "unknown_article_ref")).toBe(true);
  });

  it("chap nhan ContentBlock co nguon hang A hop le", () => {
    const bundle = emptyBundle();
    bundle.legalDocuments.push({
      id: "doc-a",
      docNumber: "x",
      title: "x",
      issuer: "x",
      status: "con_hieu_luc",
      sourceTier: "A",
      lastVerifiedAt: "2026-08-24",
      verifiedBy: "test"
    });
    bundle.documentArticles.push({
      documentId: "doc-a",
      articleRef: "Điều 1",
      title: "x"
    });
    const block: ContentBlock = {
      id: "cb-4",
      topicId: "PL-01",
      tier: "T1",
      kind: "trich_dan",
      body: "Hop le",
      sources: [{ type: "legal_document", refId: "doc-a", articleRef: "Điều 1" }],
      classification: "cong_khai",
      status: "da_duyet",
      version: 1
    };
    expect(validateContentBlock(block, bundle)).toHaveLength(0);
  });

  it("validateBundle/isBundleValid quet toan bo kho", () => {
    const bundle = emptyBundle();
    bundle.contentBlocks.push({
      id: "cb-bad",
      topicId: "PL-01",
      tier: "T1",
      kind: "dien_giai",
      body: "x",
      sources: [],
      classification: "cong_khai",
      status: "da_duyet",
      version: 1
    });
    expect(isBundleValid(bundle)).toBe(false);
    expect(validateBundle(bundle)).toHaveLength(1);
  });
});
