/**
 * core/search — FR-Q01, Q02, Q03, Q05, Q06 (URD Muc 11).
 *
 * Chi muc dao nguoc don gian, tu xay dung (khong phu thuoc thu vien ngoai)
 * — du nhanh cho quy mo du lieu cua ung dung nay (NFR-01: <500ms / 10.000
 * muc) va de kiem thu doc lap. Hoat dong hoan toan ngoai tuyen (FR-Q07),
 * khong goi mang.
 */
import type { ContentBundle, DocumentStatus } from "../../data/schema/models";
import { normalizeForMatch, tokenize } from "./vietnamese";

export type SearchResultType = "topic" | "legal_document" | "article" | "term";

export interface SearchDocument {
  id: string;
  type: SearchResultType;
  title: string;
  subtitle?: string;
  /** FR-Q05: trang thai hieu luc hien ngay tren dong ket qua, khong can mo ra. */
  documentStatus?: DocumentStatus;
  /** FR-T07: noi dung chua_xac_minh bi ha thu hang nhung khong bi an. */
  isUnverified: boolean;
  tokens: Set<string>;
  href: string;
}

export interface SynonymEntry {
  term: string;
  synonyms: string[];
}

/** FR-Q06: tu khoa goi y / tu dong nghia, vd. "PAM" <-> "quan ly tai khoan dac quyen". */
export function expandWithSynonyms(
  queryTokens: string[],
  synonyms: SynonymEntry[]
): string[] {
  const expanded = new Set(queryTokens);
  const normalizedQuery = queryTokens.map(normalizeForMatch);
  for (const entry of synonyms) {
    const allForms = [entry.term, ...entry.synonyms].map(normalizeForMatch);
    const matchesEntry = allForms.some((f) => normalizedQuery.includes(f));
    if (matchesEntry) {
      for (const form of allForms) {
        for (const t of tokenize(form)) expanded.add(t);
      }
    }
  }
  return [...expanded];
}

function addTokens(target: Set<string>, ...texts: Array<string | undefined>) {
  for (const text of texts) {
    if (!text) continue;
    for (const raw of tokenize(text)) {
      target.add(raw);
      target.add(normalizeForMatch(raw));
    }
  }
}

/** Xay chi muc tim kiem tu toan bo kho noi dung. */
export function buildSearchIndex(bundle: ContentBundle): SearchDocument[] {
  const docs: SearchDocument[] = [];

  for (const topic of bundle.topics) {
    const tokens = new Set<string>();
    addTokens(tokens, topic.id, topic.title, topic.titleEn, topic.group);
    docs.push({
      id: `topic:${topic.id}`,
      type: "topic",
      title: topic.title,
      subtitle: topic.titleEn,
      isUnverified: false,
      tokens,
      href: `/chu-de/${topic.id}`
    });
  }

  for (const doc of bundle.legalDocuments) {
    const tokens = new Set<string>();
    addTokens(tokens, doc.docNumber, doc.title, doc.issuer);
    docs.push({
      id: `doc:${doc.id}`,
      type: "legal_document",
      title: doc.docNumber,
      subtitle: doc.title,
      documentStatus: doc.status,
      isUnverified: doc.status === "chua_xac_minh",
      tokens,
      href: `/van-ban/${doc.id}`
    });
  }

  for (const article of bundle.documentArticles) {
    const parentDoc = bundle.legalDocuments.find(
      (d) => d.id === article.documentId
    );
    const tokens = new Set<string>();
    addTokens(
      tokens,
      article.articleRef,
      article.title,
      parentDoc?.docNumber
    );
    docs.push({
      id: `article:${article.documentId}:${article.articleRef}`,
      type: "article",
      title: `${article.articleRef} — ${parentDoc?.docNumber ?? article.documentId}`,
      subtitle: article.title,
      documentStatus: parentDoc?.status,
      isUnverified: parentDoc?.status === "chua_xac_minh",
      tokens,
      href: `/van-ban/${article.documentId}#${encodeURIComponent(article.articleRef)}`
    });
  }

  for (const term of bundle.terms) {
    const tokens = new Set<string>();
    addTokens(tokens, term.vi, term.en, term.abbr, term.definition);
    docs.push({
      id: `term:${term.vi}`,
      type: "term",
      title: term.vi,
      subtitle: term.en,
      isUnverified: false,
      tokens,
      href: `/thuat-ngu#${encodeURIComponent(term.vi)}`
    });
  }

  return docs;
}

export interface SearchOptions {
  limit?: number;
  synonyms?: SynonymEntry[];
}

export interface SearchResult {
  doc: SearchDocument;
  score: number;
}

/** FR-Q03: nhan dien truy van dang "09/2020 dieu 25" -> so hieu + dieu khoan. */
export function parseDocNumberAndArticleQuery(
  query: string
): { docNumberFragment: string; articleFragment?: string } | null {
  const normalized = normalizeForMatch(query);
  const docMatch = normalized.match(/(\d{1,4}\/\d{4})/);
  if (!docMatch) return null;
  const articleMatch = normalized.match(/dieu\s*(\d+)/);
  return {
    docNumberFragment: docMatch[1],
    articleFragment: articleMatch ? `Điều ${articleMatch[1]}` : undefined
  };
}

/**
 * FR-Q01, Q02, Q05, Q07. Tim kiem toan van, khong dau/co dau/tieng Anh deu
 * ra cung ket qua nho token da duoc chuan hoa hai chieu khi xay chi muc.
 * FR-T07: ket qua chua_xac_minh khong bi loai, chi giam diem (ha thu hang).
 */
export function search(
  index: SearchDocument[],
  rawQuery: string,
  options: SearchOptions = {}
): SearchResult[] {
  const limit = options.limit ?? 20;
  const queryTokens = tokenize(rawQuery);
  if (queryTokens.length === 0) return [];

  const expandedTokens = options.synonyms
    ? expandWithSynonyms(queryTokens, options.synonyms)
    : queryTokens;
  const normalizedTokens = expandedTokens.map(normalizeForMatch);

  const results: SearchResult[] = [];
  for (const doc of index) {
    let score = 0;
    for (const qt of normalizedTokens) {
      for (const dt of doc.tokens) {
        if (dt === qt) score += 3;
        else if (dt.startsWith(qt) || qt.startsWith(dt)) score += 1;
      }
    }
    if (score === 0) continue;
    // FR-T07: ha thu hang (khong loai bo) noi dung chua xac minh.
    if (doc.isUnverified) score *= 0.5;
    results.push({ doc, score });
  }

  results.sort((a, b) => b.score - a.score);
  return results.slice(0, limit);
}
