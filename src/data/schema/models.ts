/**
 * Mo hinh du lieu trung tam (URD Muc 16).
 *
 * Pham vi ban build nay: CHI tang tham chieu (Muc 13.2, QD-2 = khong).
 * Khong co OfficialInterpretation, TribalNote, AuditLogEntry, hay bat ky
 * truong lien quan xac thuc/phan quyen noi bo nao — vi khong co tang noi bo
 * va day la cong cu tra cuu ca nhan, khong phai he thong san xuat cua mot
 * ngan hang cu the.
 *
 * FR-T01 (cuong che o tang schema): moi ContentBlock BAT BUOC co sources[]
 * khong rong. Day la luat toi thuong cua toan bo du an — xem URD Muc 10.
 */
import { z } from "zod";

// ---------------------------------------------------------------------------
// Enums / gia tri co dinh
// ---------------------------------------------------------------------------

/** FR-E01 */
export const DocumentStatus = z.enum([
  "con_hieu_luc",
  "het_hieu_luc",
  "hieu_luc_mot_phan",
  "chua_co_hieu_luc",
  "du_thao",
  "chua_xac_minh"
]);
export type DocumentStatus = z.infer<typeof DocumentStatus>;

export const DOCUMENT_STATUS_LABEL: Record<DocumentStatus, string> = {
  con_hieu_luc: "Còn hiệu lực",
  het_hieu_luc: "Hết hiệu lực",
  hieu_luc_mot_phan: "Hiệu lực một phần",
  chua_co_hieu_luc: "Chưa có hiệu lực",
  du_thao: "Dự thảo",
  chua_xac_minh: "CHƯA XÁC MINH"
};

/** URD Muc 4.4 */
export const SourceTier = z.enum(["A", "B", "C"]);
export type SourceTier = z.infer<typeof SourceTier>;

/** FR-E04 */
export const RelationType = z.enum([
  "thay_the",
  "bi_thay_the_boi",
  "sua_doi",
  "bi_sua_doi_boi",
  "bai_bo_mot_phan",
  "huong_dan",
  "duoc_huong_dan_boi"
]);
export type RelationType = z.infer<typeof RelationType>;

/**
 * FR-K04 / FR-T03. "kinh_nghiem" (kinh nghiem noi bo) duoc giu trong enum de
 * tuong thich schema v2 (tang noi bo) nhung KHONG duoc dung trong du lieu
 * cua ban build nay — xem docs/open-questions.md va URD Muc 13.2.
 */
export const ContentKind = z.enum(["trich_dan", "dien_giai", "kinh_nghiem"]);
export type ContentKind = z.infer<typeof ContentKind>;

/** FR-B01 */
export const ContentStatus = z.enum([
  "nhap",
  "cho_duyet",
  "da_duyet",
  "can_ra_soat_lai"
]);
export type ContentStatus = z.infer<typeof ContentStatus>;

/** FR-X02 */
export const Equivalence = z.enum([
  "tuong_duong_hoan_toan",
  "tuong_duong_mot_phan",
  "co_lien_quan"
]);
export type Equivalence = z.infer<typeof Equivalence>;

/**
 * FR-D01. Ban build nay chi co "cong_khai" (tang tham chieu). Cac gia tri
 * "mat" / "toi_mat" thuoc tang noi bo, chua trien khai — xem QD-2.
 */
export const Classification = z.enum(["cong_khai"]);
export type Classification = z.infer<typeof Classification>;

/** Nhom chu de — URD Muc 5 */
export const TopicGroup = z.enum([
  "PL",
  "CM",
  "QT",
  "KT",
  "VH",
  "NH",
  "KG",
  "CC",
  "MN"
]);
export type TopicGroup = z.infer<typeof TopicGroup>;

export const TOPIC_GROUP_LABEL: Record<TopicGroup, string> = {
  PL: "Pháp lý và tuân thủ",
  CM: "Chuẩn mực và khung quốc tế",
  QT: "Quản trị và quản lý ATTT",
  KT: "Kiến trúc và kỹ thuật",
  VH: "Vận hành an ninh",
  NH: "Hệ thống đặc thù ngân hàng",
  KG: "Kiểm tra, giám sát và kiểm toán",
  CC: "Chống chịu và liên tục hoạt động",
  MN: "Công nghệ và rủi ro mới nổi"
};

export const ContentTier = z.enum(["T1", "T2", "T3"]);
export type ContentTier = z.infer<typeof ContentTier>;

// ---------------------------------------------------------------------------
// Nguon trich dan cua mot ContentBlock — tro toi LegalDocument hoac Framework
// ---------------------------------------------------------------------------

export const SourceRef = z.object({
  type: z.enum(["legal_document", "framework"]),
  refId: z.string().min(1),
  /** Bat buoc khi type = legal_document va trich dan mot dieu khoan cu the */
  articleRef: z.string().optional(),
  /** Bat buoc khi type = framework va trich dan mot ma kiem soat cu the */
  clauseRef: z.string().optional()
});
export type SourceRef = z.infer<typeof SourceRef>;

// ---------------------------------------------------------------------------
// Thuc the
// ---------------------------------------------------------------------------

export const Topic = z.object({
  id: z.string().regex(/^(PL|CM|QT|KT|VH|NH|KG|CC|MN)-\d{2}$/),
  group: TopicGroup,
  title: z.string().min(1),
  titleEn: z.string().min(1),
  relatedTopicIds: z.array(z.string()).default([])
});
export type Topic = z.infer<typeof Topic>;

/** FR-E01, FR-E12 */
export const LegalDocument = z.object({
  id: z.string().min(1),
  docNumber: z.string().min(1),
  title: z.string().min(1),
  issuer: z.string().min(1),
  issuedDate: z.string().date().optional(),
  effectiveFrom: z.string().date().optional(),
  status: DocumentStatus,
  sourceTier: SourceTier,
  officialUrl: z.string().url().optional(),
  lastVerifiedAt: z.string().date(),
  verifiedBy: z.string().min(1),
  /** Ghi chu cho cac muc chua_xac_minh — noi can kiem tra (URD 0.1 muc 4) */
  verificationNote: z.string().optional()
});
export type LegalDocument = z.infer<typeof LegalDocument>;

/** FR-E02, FR-E03 — hieu luc o cap dieu khoan */
export const DocumentArticle = z.object({
  documentId: z.string().min(1),
  articleRef: z.string().min(1),
  title: z.string().min(1),
  effectiveFrom: z.string().date().optional(),
  repealedBy: z.string().optional(),
  repealedDate: z.string().date().optional()
});
export type DocumentArticle = z.infer<typeof DocumentArticle>;

/** FR-E04 */
export const DocumentRelation = z.object({
  fromDocId: z.string().min(1),
  toDocId: z.string().min(1),
  relationType: RelationType,
  scope: z.string().optional()
});
export type DocumentRelation = z.infer<typeof DocumentRelation>;

export const Framework = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  version: z.string().min(1),
  publisher: z.string().min(1),
  isCopyrighted: z.boolean(),
  sourceTier: SourceTier,
  officialUrl: z.string().url().optional(),
  lastVerifiedAt: z.string().date(),
  verificationNote: z.string().optional()
});
export type Framework = z.infer<typeof Framework>;

export const ControlRequirement = z.object({
  id: z.string().min(1),
  frameworkId: z.string().min(1),
  clauseRef: z.string().min(1),
  title: z.string().min(1),
  summary: z.string().min(1),
  sourceTier: SourceTier
});
export type ControlRequirement = z.infer<typeof ControlRequirement>;

/** FR-X02, FR-X03 */
export const Mapping = z.object({
  id: z.string().min(1),
  fromReqId: z.string().min(1),
  toReqId: z.string().min(1),
  equivalence: Equivalence,
  rationale: z.string().min(1),
  createdBy: z.string().min(1),
  approvedBy: z.string().min(1),
  approvedAt: z.string().date()
});
export type Mapping = z.infer<typeof Mapping>;

/**
 * FR-T01: sources khong duoc rong — cuong che boi zod .min(1) VA lai boi
 * scripts/validate/validate-content.ts (FR-T02, kiem thu doc lap voi UI).
 */
export const ContentBlock = z.object({
  id: z.string().min(1),
  topicId: z.string().min(1),
  tier: ContentTier,
  kind: ContentKind,
  body: z.string().min(1),
  sources: z.array(SourceRef).min(1, "FR-T01: sources[] khong duoc rong"),
  classification: Classification,
  status: ContentStatus,
  version: z.number().int().positive()
});
export type ContentBlock = z.infer<typeof ContentBlock>;

export const Term = z.object({
  vi: z.string().min(1),
  en: z.string().min(1),
  abbr: z.string().optional(),
  definition: z.string().min(1),
  topicIds: z.array(z.string()).default([])
});
export type Term = z.infer<typeof Term>;

export const AuditProgram = z.object({
  topicId: z.string().min(1),
  objective: z.string().min(1),
  scope: z.string().min(1),
  procedures: z.array(z.string()).min(1),
  criteria: z.array(z.string()).min(1)
});
export type AuditProgram = z.infer<typeof AuditProgram>;

export const InterviewQuestion = z.object({
  topicId: z.string().min(1),
  question: z.string().min(1),
  redFlags: z.array(z.string()).default([]),
  followUps: z.array(z.string()).default([])
});
export type InterviewQuestion = z.infer<typeof InterviewQuestion>;

export const EvidenceItem = z.object({
  requirementId: z.string().min(1),
  evidenceType: z.string().min(1),
  ownerUnit: z.string().min(1),
  sourceSystem: z.string().min(1),
  frequency: z.string().min(1)
});
export type EvidenceItem = z.infer<typeof EvidenceItem>;

export const ComplianceObligation = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  cycle: z.string().min(1),
  deadlineRule: z.string().min(1),
  ownerUnit: z.string().min(1),
  legalBasisId: z.string().min(1)
});
export type ComplianceObligation = z.infer<typeof ComplianceObligation>;

/** FR-A05 */
export const IncidentPlaybook = z.object({
  id: z.string().min(1),
  incidentType: z.string().min(1),
  reportTo: z.array(z.string()).min(1),
  deadlineHours: z.number().positive(),
  templateRef: z.string().optional(),
  legalBasisId: z.string().min(1)
});
export type IncidentPlaybook = z.infer<typeof IncidentPlaybook>;

/**
 * FR-A06: "Ban do moi de doa - kiem soat" — chon mot ky thuat tan cong, hien
 * thi cac chu de/kiem soat dang doi pho. Day la du lieu DINH HUONG/DIEU
 * HUONG (tuong tu Mapping — ket qua tong hop tu kien thuc chuyen mon), KHONG
 * phai noi dung quy pham nen KHONG bat buoc sources[] kieu FR-T01 — nhung
 * van phai trung thuc ve muc do chac chan (xem mitreNote).
 */
export const ThreatTechnique = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  mitreId: z.string().optional(),
  tactic: z.string().min(1),
  description: z.string().min(1),
  controlTopicIds: z.array(z.string()).min(1),
  mitreNote: z.string().optional()
});
export type ThreatTechnique = z.infer<typeof ThreatTechnique>;

// ---------------------------------------------------------------------------
// Goi du lieu tong hop (dung cho index tim kiem / IndexedDB seed)
// ---------------------------------------------------------------------------

export interface ContentBundle {
  topics: Topic[];
  legalDocuments: LegalDocument[];
  documentArticles: DocumentArticle[];
  documentRelations: DocumentRelation[];
  frameworks: Framework[];
  controlRequirements: ControlRequirement[];
  mappings: Mapping[];
  contentBlocks: ContentBlock[];
  terms: Term[];
  auditPrograms: AuditProgram[];
  interviewQuestions: InterviewQuestion[];
  evidenceItems: EvidenceItem[];
  complianceObligations: ComplianceObligation[];
  incidentPlaybooks: IncidentPlaybook[];
}
