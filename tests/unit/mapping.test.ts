import { describe, expect, it } from "vitest";
import {
  findEquivalentRequirements,
  groupByEquivalence
} from "../../src/core/mapping";
import type { ContentBundle } from "../../src/data/schema/models";

function bundleFixture(): ContentBundle {
  return {
    topics: [],
    legalDocuments: [],
    documentArticles: [],
    documentRelations: [],
    frameworks: [
      { id: "iso27002", name: "ISO/IEC 27002", version: "2022", publisher: "ISO", isCopyrighted: true, sourceTier: "A", lastVerifiedAt: "2026-08-24" },
      { id: "nist-csf", name: "NIST CSF", version: "2.0", publisher: "NIST", isCopyrighted: false, sourceTier: "A", lastVerifiedAt: "2026-08-24" }
    ],
    controlRequirements: [
      { id: "req-iso-pam", frameworkId: "iso27002", clauseRef: "8.2", title: "Privileged access rights", summary: "x", sourceTier: "A" },
      { id: "req-nist-pam", frameworkId: "nist-csf", clauseRef: "PR.AA-05", title: "Access permissions", summary: "x", sourceTier: "A" }
    ],
    mappings: [
      {
        id: "map-1",
        fromReqId: "req-iso-pam",
        toReqId: "req-nist-pam",
        equivalence: "tuong_duong_mot_phan",
        rationale: "Cùng mục tiêu kiểm soát quyền truy cập đặc quyền",
        createdBy: "editor",
        approvedBy: "lead",
        approvedAt: "2026-08-24"
      }
    ],
    contentBlocks: [],
    terms: [],
    auditPrograms: [],
    interviewQuestions: [],
    evidenceItems: [],
    complianceObligations: [],
    incidentPlaybooks: []
  };
}

describe("FR-X04 — tim yeu cau tuong duong o khung khac", () => {
  it("tim duoc ca hai chieu (from/to) va nhom theo muc do tuong duong", () => {
    const bundle = bundleFixture();
    const fromIso = findEquivalentRequirements("req-iso-pam", bundle);
    expect(fromIso).toHaveLength(1);
    expect(fromIso[0].requirement.id).toBe("req-nist-pam");

    const fromNist = findEquivalentRequirements("req-nist-pam", bundle);
    expect(fromNist).toHaveLength(1);
    expect(fromNist[0].requirement.id).toBe("req-iso-pam");

    const grouped = groupByEquivalence(fromIso);
    expect(grouped.tuong_duong_mot_phan).toHaveLength(1);
    expect(grouped.tuong_duong_hoan_toan).toHaveLength(0);
  });
});
