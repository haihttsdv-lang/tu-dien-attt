/**
 * LegalDocument / DocumentArticle / DocumentRelation — URD Muc 4.1, 6.
 *
 * Nhom 1: du kien DA XAC MINH trong URD goc (Muc 4.1) — TT09/2020,
 * TT50/2024, TCVN11930, CV1524 — nhap day du chi tiet, sourceTier A.
 *
 * Nhom 2: bo sung ngay 2026-08-24 qua tra cuu doc lap (WebSearch) cho 5
 * trong so 9 van ban PL con thieu, doi chieu cheo NHIEU nguon hang A trong
 * mot lan tra cuu (vbpl.vn — Co so du lieu quoc gia VBPL; congbao.chinhphu.vn
 * / vanban.chinhphu.vn — Cong bao Chinh phu; cong thong tin bo nganh chu
 * quan) truoc khi nhap. Van con CHUA XAC MINH: chi tiet dieu khoan cu the
 * (vd. Dieu nao cua Luat 86/2015 da het hieu luc, thoi han bao cao su co cu
 * the trong TT20/2017) — KHONG duoc suy doan them, chi nhap o cap van ban.
 *
 * Van con thieu hoan toan (chua tim duoc can cu du tin cay): PL-03 (luu
 * tru du lieu trong nuoc), PL-10 (nguong xac thuc sinh trac hoc cu the),
 * PL-12 (Nghi dinh xu phat — moi la DU THAO tai thoi diem tra cuu). Xem
 * docs/open-questions.md.
 *
 * Cac van ban chi duoc xac nhan LA TON TAI qua quan he thay the (TT18/2018,
 * TT35/2016, TT35/2018) duoc nhap toi thieu, KHONG bia ngay ban hanh/hieu
 * luc khong co trong nguon.
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
  // --- Nhom 2: bo sung 2026-08-24 qua tra cuu doc lap (xem comment dau file) ---
  {
    id: "luat-86-2015-qh13",
    docNumber: "86/2015/QH13",
    title: "Luật An toàn thông tin mạng",
    issuer: "Quốc hội",
    issuedDate: "2015-11-19",
    effectiveFrom: "2016-07-01",
    status: "chua_xac_minh",
    sourceTier: "A",
    lastVerifiedAt: V,
    verifiedBy: VERIFIED_BY,
    verificationNote:
      "Số hiệu/ngày ban hành/hiệu lực xác nhận qua vbpl.vn, vanban.chinhphu.vn, phapluat.gov.vn (đối chiếu chéo nhất quán). Có dấu hiệu văn bản này hiện 'hết hiệu lực một phần' (theo mô tả gián tiếp trên vbpl.vn) nhưng CHƯA XÁC MINH được cụ thể điều khoản nào và bị bãi bỏ bởi văn bản nào — do đó trạng thái tạm để chua_xac_minh thay vì khẳng định con_hieu_luc hay hieu_luc_mot_phan. Cần mở trực tiếp trang lược đồ vbpl.vn để xác nhận trước khi dùng làm căn cứ."
  },
  {
    id: "luat-24-2018-qh14",
    docNumber: "24/2018/QH14",
    title: "Luật An ninh mạng",
    issuer: "Quốc hội",
    issuedDate: "2018-06-12",
    effectiveFrom: "2019-01-01",
    status: "con_hieu_luc",
    sourceTier: "A",
    lastVerifiedAt: V,
    verifiedBy: VERIFIED_BY,
    verificationNote:
      "Xác nhận qua vbpl.vn, Bộ Công an (bocongan.gov.vn), tulieuvankien.dangcongsan.vn — đối chiếu chéo nhất quán."
  },
  {
    id: "luat-91-2025-qh15",
    docNumber: "91/2025/QH15",
    title: "Luật Bảo vệ dữ liệu cá nhân",
    issuer: "Quốc hội",
    issuedDate: "2025-06-26",
    effectiveFrom: "2026-01-01",
    status: "con_hieu_luc",
    sourceTier: "A",
    lastVerifiedAt: V,
    verifiedBy: VERIFIED_BY,
    verificationNote:
      "Xác nhận qua Báo Chính phủ (baochinhphu.vn) ngày trước hiệu lực và nhiều cổng thông tin công an địa phương. Thay thế Nghị định 13/2023/NĐ-CP. Có Nghị định hướng dẫn thi hành đi kèm (thông tin ban đầu: 356/2025/NĐ-CP) — sourceTier B, CHƯA xác minh chéo đủ mạnh nên chưa nhập làm bản ghi riêng."
  },
  {
    id: "nd-13-2023-cp",
    docNumber: "13/2023/NĐ-CP",
    title: "Bảo vệ dữ liệu cá nhân (đã hết hiệu lực)",
    issuer: "Chính phủ",
    effectiveFrom: "2023-07-01",
    status: "het_hieu_luc",
    sourceTier: "B",
    lastVerifiedAt: V,
    verifiedBy: VERIFIED_BY,
    verificationNote:
      "Bị thay thế kể từ 01/01/2026 khi Luật Bảo vệ dữ liệu cá nhân 91/2025/QH15 và nghị định hướng dẫn mới có hiệu lực. Chưa đối chiếu trực tiếp qua vbpl.vn trong phiên này (nguồn: thuvienphapluat, tier B)."
  },
  {
    id: "nd-85-2016-cp",
    docNumber: "85/2016/NĐ-CP",
    title: "Bảo đảm an toàn hệ thống thông tin theo cấp độ",
    issuer: "Chính phủ",
    issuedDate: "2016-07-01",
    effectiveFrom: "2016-07-01",
    status: "con_hieu_luc",
    sourceTier: "A",
    lastVerifiedAt: V,
    verifiedBy: VERIFIED_BY,
    verificationNote:
      "Xác nhận qua vbpl.vn và Bộ Tư pháp (moj.gov.vn/pbgdpl.gov.vn). Đây là nghị định hướng dẫn khung phân loại 5 cấp độ mà TT 09/2020/TT-NHNN và TCVN 11930 viện dẫn — chưa kiểm tra có Thông tư/Nghị định sửa đổi bổ sung nào sau 2016 hay không, cần rà soát thêm."
  },
  {
    id: "tt-20-2017-btttt",
    docNumber: "20/2017/TT-BTTTT",
    title: "Điều phối, ứng cứu sự cố an toàn thông tin mạng trên toàn quốc",
    issuer: "Bộ Thông tin và Truyền thông",
    issuedDate: "2017-09-12",
    effectiveFrom: "2017-11-01",
    status: "con_hieu_luc",
    sourceTier: "A",
    lastVerifiedAt: V,
    verifiedBy: VERIFIED_BY,
    verificationNote:
      "Xác nhận qua vbpl.vn, congbao.chinhphu.vn, chinhphu.vn. Thay thế TT 27/2011/TT-BTTTT. QUAN TRỌNG: một số nguồn thứ cấp (không phải hạng A) mô tả thời hạn báo cáo sự cố cụ thể (ví dụ '5 ngày') — con số này CHƯA được xác minh trực tiếp từ văn bản gốc trong phiên này, TUYỆT ĐỐI KHÔNG dùng làm căn cứ cho tới khi đối chiếu nguyên văn Thông tư. Đây là văn bản có khả năng cao nhất trả lời PL-11 nhưng phần thời hạn cụ thể vẫn là ưu tiên xác minh cao nhất."
  },
  {
    id: "tt-13-2018-nhnn",
    docNumber: "13/2018/TT-NHNN",
    title: "Hệ thống kiểm soát nội bộ của ngân hàng thương mại, chi nhánh ngân hàng nước ngoài",
    issuer: "Ngân hàng Nhà nước Việt Nam",
    issuedDate: "2018-05-18",
    effectiveFrom: "2019-01-01",
    status: "con_hieu_luc",
    sourceTier: "A",
    lastVerifiedAt: V,
    verifiedBy: VERIFIED_BY,
    verificationNote:
      "Xác nhận qua vbpl.vn, vanban.chinhphu.vn, tulieuvankien.dangcongsan.vn. Chưa kiểm tra các thông tư sửa đổi/bổ sung có thể đã ban hành sau 2018 (mảng thông tư sửa đổi TT13/2018 khá phổ biến trong thực tế quản lý ngân hàng) — cần rà soát thêm trước khi dùng chi tiết điều khoản."
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
  { fromDocId: "tt-50-2024-nhnn", toDocId: "tcvn-11930", relationType: "huong_dan" },
  {
    fromDocId: "luat-91-2025-qh15",
    toDocId: "nd-13-2023-cp",
    relationType: "thay_the",
    scope: "Toàn bộ khung bảo vệ dữ liệu cá nhân — Luật thay thế nghị định (nâng cấp hiệu lực pháp lý), kèm nghị định hướng dẫn thi hành mới"
  },
  { fromDocId: "nd-85-2016-cp", toDocId: "tcvn-11930", relationType: "huong_dan" }
];
