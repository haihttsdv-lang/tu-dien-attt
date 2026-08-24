/**
 * LegalDocument / DocumentArticle / DocumentRelation — URD Muc 4.1, 6.
 *
 * Chi nhung du kien DA XAC MINH trong URD (Muc 4.1) duoc nhap voi day du
 * chi tiet. Cac van ban chi duoc URD xac nhan LA TON TAI qua quan he thay
 * the (TT18/2018, TT35/2016, TT35/2018) duoc nhap toi thieu, KHONG bia ra
 * ngay ban hanh/hieu luc khong co trong nguon. Danh sach day du cac muc
 * CHUA XAC MINH khac (Luat ATTT mang, Luat An ninh mang, cac nghi dinh...)
 * duoc liet ke trong docs/open-questions.md, CHUA duoc nhap thanh
 * LegalDocument o day de tranh nguy co bien "chua xac minh" thanh mot ban
 * ghi trong nhu da xac minh.
 */
import type {
  DocumentArticle,
  DocumentRelation,
  LegalDocument
} from "../../data/schema/models";

const V = "2026-08-24";
const VERIFIED_BY = "Biên tập dữ liệu khởi tạo theo URD (nghiên cứu 26/08/2026) — cần rà soát lại độc lập trước khi dùng làm căn cứ vận hành";

export const legalDocuments: LegalDocument[] = [
  {
    id: "tt-09-2020-nhnn",
    docNumber: "09/2020/TT-NHNN",
    title: "An toàn hệ thống thông tin trong hoạt động ngân hàng",
    issuer: "Ngân hàng Nhà nước Việt Nam",
    issuedDate: "2020-10-21",
    effectiveFrom: "2021-01-01",
    status: "hieu_luc_mot_phan",
    sourceTier: "A",
    lastVerifiedAt: V,
    verifiedBy: VERIFIED_BY,
    verificationNote:
      "Thay thế TT 18/2018/TT-NHNN. Điều 25 đã bị bãi bỏ bởi TT 50/2024/TT-NHNN kể từ 01/01/2025 — xem ca kiểm thử bắt buộc URD Mục 1.2."
  },
  {
    id: "tt-50-2024-nhnn",
    docNumber: "50/2024/TT-NHNN",
    title:
      "An toàn, bảo mật cho việc cung cấp dịch vụ trực tuyến ngành Ngân hàng",
    issuer: "Ngân hàng Nhà nước Việt Nam",
    issuedDate: "2024-10-31",
    effectiveFrom: "2025-01-01",
    status: "con_hieu_luc",
    sourceTier: "A",
    lastVerifiedAt: V,
    verifiedBy: VERIFIED_BY,
    verificationNote:
      "Một số điều khoản (điểm b khoản 1 Điều 4; điểm d khoản 9 Điều 7; khoản 3, 4 Điều 8) có hiệu lực riêng từ 01/07/2025. Thay thế TT 35/2016/TT-NHNN và TT 35/2018/TT-NHNN; bãi bỏ Điều 25 TT 09/2020/TT-NHNN. Có thông tin về dự thảo thông tư thay thế đang lấy ý kiến — CHƯA XÁC MINH tình trạng ban hành."
  },
  {
    id: "tcvn-11930",
    docNumber: "TCVN 11930",
    title: "Yêu cầu cơ bản về an toàn hệ thống thông tin theo cấp độ",
    issuer: "Ủy ban Tiêu chuẩn Đo lường Chất lượng Quốc gia",
    status: "chua_xac_minh",
    sourceTier: "B",
    lastVerifiedAt: V,
    verifiedBy: VERIFIED_BY,
    verificationNote:
      "Được TT 50/2024 viện dẫn. Bản được viện dẫn là TCVN 11930:2017 nhưng CHƯA XÁC MINH đây có phải phiên bản hiện hành hay đã có bản thay thế."
  },
  {
    id: "cv-1524-nhnn-cntt",
    docNumber: "1524/NHNN-CNTT",
    title: "Hướng dẫn sao lưu, bảo đảm hoạt động liên tục",
    issuer: "Ngân hàng Nhà nước Việt Nam",
    issuedDate: "2023-03-08",
    status: "con_hieu_luc",
    sourceTier: "A",
    lastVerifiedAt: V,
    verifiedBy: VERIFIED_BY,
    verificationNote:
      "Là công văn hướng dẫn, KHÔNG phải văn bản quy phạm pháp luật — không viện dẫn như một nghĩa vụ pháp lý độc lập."
  },
  // Cac van ban tien nhiem — chi xac nhan qua quan he "bi thay the",
  // khong bia them chi tiet ngay ban hanh/hieu luc khong co trong nguon.
  {
    id: "tt-18-2018-nhnn",
    docNumber: "18/2018/TT-NHNN",
    title: "(Bị thay thế bởi TT 09/2020/TT-NHNN — chi tiết CHƯA XÁC MINH)",
    issuer: "Ngân hàng Nhà nước Việt Nam",
    status: "het_hieu_luc",
    sourceTier: "B",
    lastVerifiedAt: V,
    verifiedBy: VERIFIED_BY,
    verificationNote:
      "Chỉ xác nhận được sự tồn tại qua điều khoản thay thế của TT 09/2020. Chưa xác minh ngày ban hành/hiệu lực gốc."
  },
  {
    id: "tt-35-2016-nhnn",
    docNumber: "35/2016/TT-NHNN",
    title: "(Bị thay thế bởi TT 50/2024/TT-NHNN — chi tiết CHƯA XÁC MINH)",
    issuer: "Ngân hàng Nhà nước Việt Nam",
    status: "het_hieu_luc",
    sourceTier: "B",
    lastVerifiedAt: V,
    verifiedBy: VERIFIED_BY,
    verificationNote:
      "Chỉ xác nhận được sự tồn tại qua điều khoản thay thế của TT 50/2024. Chưa xác minh ngày ban hành/hiệu lực gốc."
  },
  {
    id: "tt-35-2018-nhnn",
    docNumber: "35/2018/TT-NHNN",
    title: "(Bị thay thế bởi TT 50/2024/TT-NHNN — chi tiết CHƯA XÁC MINH)",
    issuer: "Ngân hàng Nhà nước Việt Nam",
    status: "het_hieu_luc",
    sourceTier: "B",
    lastVerifiedAt: V,
    verifiedBy: VERIFIED_BY,
    verificationNote:
      "Chỉ xác nhận được sự tồn tại qua điều khoản thay thế của TT 50/2024. Chưa xác minh ngày ban hành/hiệu lực gốc."
  }
];

export const documentArticles: DocumentArticle[] = [
  {
    documentId: "tt-09-2020-nhnn",
    articleRef: "Điều 25",
    title: "(Điều khoản đã bị bãi bỏ — nội dung gốc CHƯA XÁC MINH lại)",
    effectiveFrom: "2021-01-01",
    repealedBy: "tt-50-2024-nhnn",
    repealedDate: "2025-01-01"
  },
  {
    documentId: "tt-09-2020-nhnn",
    articleRef: "điểm b khoản 4 Điều 20",
    title: "Điều khoản có mốc hiệu lực riêng",
    effectiveFrom: "2022-01-01"
  },
  {
    documentId: "tt-50-2024-nhnn",
    articleRef: "điểm b khoản 1 Điều 4",
    title: "Điều khoản có mốc hiệu lực riêng (01/07/2025)",
    effectiveFrom: "2025-07-01"
  },
  {
    documentId: "tt-50-2024-nhnn",
    articleRef: "điểm d khoản 9 Điều 7",
    title: "Điều khoản có mốc hiệu lực riêng (01/07/2025)",
    effectiveFrom: "2025-07-01"
  },
  {
    documentId: "tt-50-2024-nhnn",
    articleRef: "khoản 3, 4 Điều 8",
    title: "Điều khoản có mốc hiệu lực riêng (01/07/2025)",
    effectiveFrom: "2025-07-01"
  }
];

export const documentRelations: DocumentRelation[] = [
  { fromDocId: "tt-09-2020-nhnn", toDocId: "tt-18-2018-nhnn", relationType: "thay_the" },
  { fromDocId: "tt-50-2024-nhnn", toDocId: "tt-35-2016-nhnn", relationType: "thay_the" },
  { fromDocId: "tt-50-2024-nhnn", toDocId: "tt-35-2018-nhnn", relationType: "thay_the" },
  {
    fromDocId: "tt-50-2024-nhnn",
    toDocId: "tt-09-2020-nhnn",
    relationType: "bai_bo_mot_phan",
    scope: "Điều 25"
  },
  { fromDocId: "tt-50-2024-nhnn", toDocId: "tcvn-11930", relationType: "huong_dan" }
];
