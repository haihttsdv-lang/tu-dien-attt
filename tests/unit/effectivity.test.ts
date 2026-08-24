import { describe, expect, it } from "vitest";
import {
  buildPointInTimeView,
  findReplacementDocument,
  getRepealedArticlesAsOf,
  isReviewOverdue,
  resolveDocumentStatusAsOf
} from "../../src/core/effectivity";
import type {
  DocumentArticle,
  DocumentRelation,
  LegalDocument
} from "../../src/data/schema/models";

/**
 * URD Muc 1.2 — ca kiem thu BAT BUOC:
 * TT 09/2020/TT-NHNN (hieu luc 01/01/2021) van con hieu luc nhung Dieu 25
 * bi bai bo boi TT 50/2024/TT-NHNN (hieu luc 01/01/2025). Mo hinh nhi phan
 * "con/het hieu luc" khong bieu dien duoc trang thai nay — module phai tra
 * ve "hieu_luc_mot_phan", khong phai "con_hieu_luc" hay "het_hieu_luc".
 */
describe("URD Muc 1.2 — ca kiem thu bat buoc: TT09/2020 hieu luc mot phan", () => {
  const tt09: LegalDocument = {
    id: "tt-09-2020-nhnn",
    docNumber: "09/2020/TT-NHNN",
    title: "An toàn hệ thống thông tin trong hoạt động ngân hàng",
    issuer: "Ngân hàng Nhà nước Việt Nam",
    issuedDate: "2020-10-21",
    effectiveFrom: "2021-01-01",
    status: "hieu_luc_mot_phan",
    sourceTier: "A",
    lastVerifiedAt: "2026-08-24",
    verifiedBy: "URD nghiên cứu 26/08/2026"
  };

  const tt50: LegalDocument = {
    id: "tt-50-2024-nhnn",
    docNumber: "50/2024/TT-NHNN",
    title:
      "An toàn, bảo mật cho việc cung cấp dịch vụ trực tuyến ngành Ngân hàng",
    issuer: "Ngân hàng Nhà nước Việt Nam",
    issuedDate: "2024-10-31",
    effectiveFrom: "2025-01-01",
    status: "con_hieu_luc",
    sourceTier: "A",
    lastVerifiedAt: "2026-08-24",
    verifiedBy: "URD nghiên cứu 26/08/2026"
  };

  const articles: DocumentArticle[] = [
    {
      documentId: "tt-09-2020-nhnn",
      articleRef: "Điều 25",
      title: "Trách nhiệm của đơn vị vận hành hệ thống thông tin",
      effectiveFrom: "2021-01-01",
      repealedBy: "tt-50-2024-nhnn",
      repealedDate: "2025-01-01"
    },
    {
      documentId: "tt-09-2020-nhnn",
      articleRef: "Điều 5",
      title: "Phân loại hệ thống thông tin theo cấp độ",
      effectiveFrom: "2021-01-01"
    }
  ];

  // Chi bai bo mot dieu, KHONG thay the toan bo van ban.
  const relations: DocumentRelation[] = [];

  it("truoc ngay TT50 co hieu luc: TT09 con hieu luc toan bo", () => {
    const status = resolveDocumentStatusAsOf(
      tt09,
      [tt09, tt50],
      relations,
      articles,
      "2022-06-01"
    );
    expect(status).toBe("con_hieu_luc");
    expect(getRepealedArticlesAsOf("tt-09-2020-nhnn", articles, "2022-06-01"))
      .toHaveLength(0);
  });

  it("tu ngay 01/01/2025: TT09 chuyen hieu_luc_mot_phan (khong phai het_hieu_luc)", () => {
    const status = resolveDocumentStatusAsOf(
      tt09,
      [tt09, tt50],
      relations,
      articles,
      "2026-08-24"
    );
    expect(status).toBe("hieu_luc_mot_phan");
    expect(status).not.toBe("het_hieu_luc");
    expect(status).not.toBe("con_hieu_luc");
  });

  it("Dieu 25 bi bai bo dung tu 01/01/2025, cac dieu khac (Dieu 5) khong bi anh huong", () => {
    const repealed = getRepealedArticlesAsOf(
      "tt-09-2020-nhnn",
      articles,
      "2026-08-24"
    );
    expect(repealed).toHaveLength(1);
    expect(repealed[0].articleRef).toBe("Điều 25");
    expect(repealed[0].repealedBy).toBe("tt-50-2024-nhnn");
  });

  it("buildPointInTimeView phan anh dung trang thai tai moc thoi gian qua khu", () => {
    const view2022 = buildPointInTimeView(
      [tt09, tt50],
      relations,
      articles,
      "2022-01-01"
    );
    const tt09View2022 = view2022.find((v) => v.document.id === tt09.id)!;
    expect(tt09View2022.statusAsOf).toBe("con_hieu_luc");
    expect(tt09View2022.repealedArticles).toHaveLength(0);

    const view2026 = buildPointInTimeView(
      [tt09, tt50],
      relations,
      articles,
      "2026-08-24"
    );
    const tt09View2026 = view2026.find((v) => v.document.id === tt09.id)!;
    expect(tt09View2026.statusAsOf).toBe("hieu_luc_mot_phan");
    expect(tt09View2026.repealedArticles).toHaveLength(1);
  });
});

describe("resolveDocumentStatusAsOf — cac truong hop khac", () => {
  const oldDoc: LegalDocument = {
    id: "tt-18-2018-nhnn",
    docNumber: "18/2018/TT-NHNN",
    title: "Văn bản đã bị thay thế (ví dụ)",
    issuer: "Ngân hàng Nhà nước Việt Nam",
    status: "het_hieu_luc",
    sourceTier: "A",
    lastVerifiedAt: "2026-08-24",
    verifiedBy: "test"
  };
  const newDoc: LegalDocument = {
    id: "tt-09-2020-nhnn",
    docNumber: "09/2020/TT-NHNN",
    title: "Văn bản thay thế",
    issuer: "Ngân hàng Nhà nước Việt Nam",
    effectiveFrom: "2021-01-01",
    status: "con_hieu_luc",
    sourceTier: "A",
    lastVerifiedAt: "2026-08-24",
    verifiedBy: "test"
  };
  const relations: DocumentRelation[] = [
    { fromDocId: "tt-09-2020-nhnn", toDocId: "tt-18-2018-nhnn", relationType: "thay_the" }
  ];

  it("van ban chua toi ngay hieu luc -> chua_co_hieu_luc", () => {
    const status = resolveDocumentStatusAsOf(
      newDoc,
      [oldDoc, newDoc],
      [],
      [],
      "2020-06-01"
    );
    expect(status).toBe("chua_co_hieu_luc");
  });

  it("van ban bi thay the toan bo boi van ban moi hon -> het_hieu_luc tu ngay thay the", () => {
    const status = resolveDocumentStatusAsOf(
      oldDoc,
      [oldDoc, newDoc],
      relations,
      [],
      "2021-06-01"
    );
    expect(status).toBe("het_hieu_luc");
  });

  it("findReplacementDocument tra ve dung van ban thay the (FR-E05)", () => {
    const replacement = findReplacementDocument(oldDoc, [oldDoc, newDoc], relations);
    expect(replacement?.id).toBe("tt-09-2020-nhnn");
  });

  it("du_thao va chua_xac_minh khong bi suy dien theo thoi gian", () => {
    const draft: LegalDocument = { ...oldDoc, status: "du_thao", effectiveFrom: "2020-01-01" };
    expect(resolveDocumentStatusAsOf(draft, [draft], [], [], "2030-01-01")).toBe(
      "du_thao"
    );
  });
});

describe("isReviewOverdue — FR-E12", () => {
  it("qua han chu ky 90 ngay thi bao qua han", () => {
    const doc: LegalDocument = {
      id: "x",
      docNumber: "x",
      title: "x",
      issuer: "x",
      status: "con_hieu_luc",
      sourceTier: "A",
      lastVerifiedAt: "2026-01-01",
      verifiedBy: "test"
    };
    expect(isReviewOverdue(doc, 90, "2026-08-24")).toBe(true);
    expect(isReviewOverdue(doc, 365, "2026-08-24")).toBe(false);
  });
});
