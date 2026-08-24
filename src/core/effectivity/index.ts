/**
 * core/effectivity — FR-E01 .. FR-E14 (URD Muc 6).
 *
 * Day la module bat buoc phai dat ca kiem thu bat buoc o URD Muc 1.2:
 * Thong tu 09/2020/TT-NHNN van con hieu luc nhung Dieu 25 da bi bai bo boi
 * Thong tu 50/2024/TT-NHNN — mo hinh nhi phan (con/het hieu luc) khong bieu
 * dien duoc trang thai nay, vi vay ham resolveDocumentStatusAsOf() tinh
 * trang thai o CA hai cap: van ban va dieu khoan.
 *
 * Ham thuan tuy, khong I/O.
 */
import type {
  DocumentArticle,
  DocumentRelation,
  DocumentStatus,
  LegalDocument
} from "../../data/schema/models";

export type IsoDate = string; // "YYYY-MM-DD"

function isBeforeOrEqual(a: IsoDate, b: IsoDate): boolean {
  return a <= b; // an toan voi chuoi ISO 8601 "YYYY-MM-DD"
}

export function todayIso(): IsoDate {
  return new Date().toISOString().slice(0, 10);
}

export interface ArticleStatusAsOf {
  articleRef: string;
  isRepealed: boolean;
  repealedBy?: string;
  repealedDate?: IsoDate;
}

/** FR-E03, FR-E06 */
export function getArticleStatusAsOf(
  article: DocumentArticle,
  asOfDate: IsoDate
): ArticleStatusAsOf {
  const isRepealed = Boolean(
    article.repealedDate && isBeforeOrEqual(article.repealedDate, asOfDate)
  );
  return {
    articleRef: article.articleRef,
    isRepealed,
    repealedBy: isRepealed ? article.repealedBy : undefined,
    repealedDate: isRepealed ? article.repealedDate : undefined
  };
}

export function getRepealedArticlesAsOf(
  documentId: string,
  articles: DocumentArticle[],
  asOfDate: IsoDate
): ArticleStatusAsOf[] {
  return articles
    .filter((a) => a.documentId === documentId)
    .map((a) => getArticleStatusAsOf(a, asOfDate))
    .filter((s) => s.isRepealed);
}

/**
 * FR-E01, FR-E04, FR-E09. Tinh trang thai cua mot van ban TAI mot thoi diem
 * cu the, dua tren:
 *   1. effectiveFrom cua chinh van ban (chua_co_hieu_luc neu asOfDate som hon)
 *   2. quan he "thay_the" tro toi van ban nay tu mot van ban khac — thoi
 *      diem thay the la effectiveFrom cua van ban thay the
 *   3. dieu khoan bi bai bo con lai trong van ban (hieu_luc_mot_phan)
 *
 * du_thao / chua_xac_minh duoc giu nguyen (khong suy dien theo thoi gian).
 */
export function resolveDocumentStatusAsOf(
  doc: LegalDocument,
  allDocs: LegalDocument[],
  relations: DocumentRelation[],
  articles: DocumentArticle[],
  asOfDate: IsoDate
): DocumentStatus {
  if (doc.status === "du_thao" || doc.status === "chua_xac_minh") {
    return doc.status;
  }

  if (doc.effectiveFrom && !isBeforeOrEqual(doc.effectiveFrom, asOfDate)) {
    return "chua_co_hieu_luc";
  }

  const docsById = new Map(allDocs.map((d) => [d.id, d]));
  const supersedingRelations = relations.filter(
    (r) => r.toDocId === doc.id && r.relationType === "thay_the"
  );
  for (const rel of supersedingRelations) {
    const newerDoc = docsById.get(rel.fromDocId);
    if (
      newerDoc?.effectiveFrom &&
      isBeforeOrEqual(newerDoc.effectiveFrom, asOfDate)
    ) {
      return "het_hieu_luc";
    }
  }

  const repealed = getRepealedArticlesAsOf(doc.id, articles, asOfDate);
  if (repealed.length > 0) {
    return "hieu_luc_mot_phan";
  }

  return "con_hieu_luc";
}

export interface PointInTimeDocumentView {
  document: LegalDocument;
  statusAsOf: DocumentStatus;
  repealedArticles: ArticleStatusAsOf[];
}

/** FR-E09, FR-E10, FR-E11 — "Xem quy dinh nhu tai ngay..." */
export function buildPointInTimeView(
  documents: LegalDocument[],
  relations: DocumentRelation[],
  articles: DocumentArticle[],
  asOfDate: IsoDate
): PointInTimeDocumentView[] {
  return documents.map((doc) => ({
    document: doc,
    statusAsOf: resolveDocumentStatusAsOf(
      doc,
      documents,
      relations,
      articles,
      asOfDate
    ),
    repealedArticles: getRepealedArticlesAsOf(doc.id, articles, asOfDate)
  }));
}

/** FR-E05: van ban thay the truc tiep, de dan link canh bao. */
export function findReplacementDocument(
  doc: LegalDocument,
  allDocs: LegalDocument[],
  relations: DocumentRelation[]
): LegalDocument | undefined {
  const rel = relations.find(
    (r) => r.toDocId === doc.id && r.relationType === "thay_the"
  );
  if (!rel) return undefined;
  return allDocs.find((d) => d.id === rel.fromDocId);
}

/** FR-E12, FR-E13 — quá hạn rà soát. */
export function isReviewOverdue(
  doc: LegalDocument,
  cycleDays: number,
  asOfDate: IsoDate = todayIso()
): boolean {
  const last = new Date(doc.lastVerifiedAt).getTime();
  const now = new Date(asOfDate).getTime();
  const diffDays = (now - last) / (1000 * 60 * 60 * 24);
  return diffDays > cycleDays;
}
