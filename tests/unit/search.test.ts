import { describe, expect, it } from "vitest";
import {
  buildSearchIndex,
  parseDocNumberAndArticleQuery,
  search
} from "../../src/core/search";
import { normalizeForMatch } from "../../src/core/search/vietnamese";
import type { ContentBundle } from "../../src/data/schema/models";

function bundleFixture(): ContentBundle {
  return {
    topics: [
      {
        id: "KT-03",
        group: "KT",
        title: "Quản lý tài khoản đặc quyền",
        titleEn: "Privileged Access Management",
        relatedTopicIds: []
      }
    ],
    legalDocuments: [
      {
        id: "tt-09-2020-nhnn",
        docNumber: "09/2020/TT-NHNN",
        title: "An toàn hệ thống thông tin trong hoạt động ngân hàng",
        issuer: "NHNN",
        status: "hieu_luc_mot_phan",
        sourceTier: "A",
        lastVerifiedAt: "2026-08-24",
        verifiedBy: "test"
      }
    ],
    documentArticles: [
      { documentId: "tt-09-2020-nhnn", articleRef: "Điều 25", title: "Trách nhiệm vận hành" }
    ],
    documentRelations: [],
    frameworks: [],
    controlRequirements: [],
    mappings: [],
    contentBlocks: [],
    terms: [
      { vi: "quản lý tài khoản đặc quyền", en: "Privileged Access Management", abbr: "PAM", definition: "x", topicIds: ["KT-03"] }
    ],
    auditPrograms: [],
    interviewQuestions: [],
    evidenceItems: [],
    complianceObligations: [],
    incidentPlaybooks: []
  };
}

describe("FR-Q01/Q02 — tim kiem co dau, khong dau, tieng Anh", () => {
  it("tim ra cung mot chu de bang ca ba cach go", () => {
    const index = buildSearchIndex(bundleFixture());
    const withDiacritics = search(index, "quản lý tài khoản đặc quyền");
    const withoutDiacritics = search(index, "quan ly tai khoan dac quyen");
    const english = search(index, "Privileged Access Management");

    expect(withDiacritics[0]?.doc.id).toBe("topic:KT-03");
    expect(withoutDiacritics[0]?.doc.id).toBe("topic:KT-03");
    expect(english[0]?.doc.id).toBe("topic:KT-03");
  });

  it("FR-Q02: hai kieu dat dau thanh cu/moi cho cung ket qua (hoà vs hòa)", () => {
    expect(normalizeForMatch("hoà")).toBe(normalizeForMatch("hòa"));
  });
});

describe("FR-Q05 — trang thai hieu luc hien tren dong ket qua", () => {
  it("ket qua van ban mang theo documentStatus", () => {
    const index = buildSearchIndex(bundleFixture());
    const results = search(index, "09/2020");
    const docResult = results.find((r) => r.doc.type === "legal_document");
    expect(docResult?.doc.documentStatus).toBe("hieu_luc_mot_phan");
  });
});

describe("FR-Q03 — tim theo so hieu van ban + dieu khoan", () => {
  it("nhan dien duoc '09/2020 dieu 25'", () => {
    const parsed = parseDocNumberAndArticleQuery("09/2020 điều 25");
    expect(parsed?.docNumberFragment).toBe("09/2020");
    expect(parsed?.articleFragment).toBe("Điều 25");
  });

  it("tim '09/2020 dieu 25' ra dung dieu khoan da bi bai bo", () => {
    const index = buildSearchIndex(bundleFixture());
    const results = search(index, "09/2020 điều 25");
    const articleResult = results.find((r) => r.doc.type === "article");
    expect(articleResult).toBeDefined();
    expect(articleResult?.doc.documentStatus).toBe("hieu_luc_mot_phan");
  });
});

describe("FR-T07 — noi dung chua_xac_minh bi ha thu hang, khong bi an", () => {
  it("van xuat hien trong ket qua nhung diem thap hon", () => {
    const bundle = bundleFixture();
    bundle.legalDocuments.push({
      id: "unverified-doc",
      docNumber: "99/9999/TT-XX",
      title: "Văn bản chưa xác minh về quản lý tài khoản đặc quyền",
      issuer: "?",
      status: "chua_xac_minh",
      sourceTier: "C",
      lastVerifiedAt: "2026-08-24",
      verifiedBy: "test"
    });
    const index = buildSearchIndex(bundle);
    const results = search(index, "quản lý tài khoản đặc quyền");
    const unverified = results.find((r) => r.doc.id === "doc:unverified-doc");
    expect(unverified).toBeDefined(); // khong bi an
    expect(unverified!.score).toBeLessThan(results[0].score); // bi ha thu hang
  });
});
