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
      "Một số điều khoản (điểm b khoản 1 Điều 4; điểm d khoản 9 Điều 7; khoản 3, 4 Điều 8) có hiệu lực riêng từ 01/07/2025. Thay thế TT 35/2016/TT-NHNN và TT 35/2018/TT-NHNN; bãi bỏ Điều 25 TT 09/2020/TT-NHNN. CẬP NHẬT 2026-08-24 (theo phản hồi người dùng): dự thảo thông tư sửa đổi nêu ở lần xác minh trước đã được ban hành chính thức là Thông tư 77/2025/TT-NHNN (31/12/2025) — SỬA ĐỔI, BỔ SUNG (không thay thế toàn văn) Thông tư này, hiệu lực từ 01/03/2026 (riêng Điều 3, Điều 10 hiệu lực 01/07/2026 cho đơn vị cung cấp dịch vụ thanh toán trực tuyến cho cả khách hàng cá nhân và tổ chức). TT50/2024 VẪN CÒN HIỆU LỰC làm văn bản gốc, chỉ một số điều/phụ lục được cập nhật bởi TT77/2025 — xem quan hệ 'sửa đổi' trong DocumentRelation."
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
    title: "Luật An toàn thông tin mạng (đã hết hiệu lực)",
    issuer: "Quốc hội",
    issuedDate: "2015-11-19",
    effectiveFrom: "2016-07-01",
    status: "het_hieu_luc",
    sourceTier: "A",
    lastVerifiedAt: V,
    verifiedBy: VERIFIED_BY,
    verificationNote:
      "CẬP NHẬT 2026-08-24 (theo phản hồi người dùng + tra cứu xác minh lại): bị thay thế bởi Luật An ninh mạng 116/2025/QH15 (hợp nhất Luật ATTT mạng 2015 và Luật An ninh mạng 2018), hiệu lực từ 01/07/2026. Xác nhận qua thuvienphapluat (bài phân tích dẫn nội dung điều khoản thi hành) — khuyến nghị đối chiếu lại trực tiếp điều khoản thi hành trên vbpl.vn trước khi dùng làm căn cứ chính thức vì chưa tự đọc nguyên văn."
  },
  {
    id: "luat-24-2018-qh14",
    docNumber: "24/2018/QH14",
    title: "Luật An ninh mạng (đã hết hiệu lực)",
    issuer: "Quốc hội",
    issuedDate: "2018-06-12",
    effectiveFrom: "2019-01-01",
    status: "het_hieu_luc",
    sourceTier: "A",
    lastVerifiedAt: V,
    verifiedBy: VERIFIED_BY,
    verificationNote:
      "CẬP NHẬT 2026-08-24 (theo phản hồi người dùng + tra cứu xác minh lại): hết hiệu lực kể từ 01/07/2026 khi Luật An ninh mạng 116/2025/QH15 có hiệu lực thi hành (điều khoản thi hành nêu rõ 'Luật An ninh mạng số 24/2018/QH14 hết hiệu lực kể từ ngày Luật này có hiệu lực thi hành'). Xác nhận ban đầu qua vbpl.vn, Bộ Công an, tulieuvankien.dangcongsan.vn."
  },
  {
    id: "luat-116-2025-qh15",
    docNumber: "116/2025/QH15",
    title: "Luật An ninh mạng",
    issuer: "Quốc hội",
    issuedDate: "2025-12-10",
    effectiveFrom: "2026-07-01",
    status: "con_hieu_luc",
    sourceTier: "A",
    lastVerifiedAt: V,
    verifiedBy: VERIFIED_BY,
    verificationNote:
      "Bổ sung 2026-08-24 theo yêu cầu người dùng. Hợp nhất, kế thừa các quy định còn phù hợp của Luật An ninh mạng 24/2018/QH14 VÀ Luật An toàn thông tin mạng 86/2015/QH13 — thay thế cả hai. Có điều khoản chuyển tiếp: hệ thống đã được xác định cấp độ theo Luật 86/2015 giữ nguyên cấp độ đã xác định, phải đáp ứng điều kiện/tiêu chuẩn/biện pháp bảo vệ theo luật mới trong vòng 12 tháng kể từ ngày luật mới có hiệu lực; sản phẩm/dịch vụ/giải pháp/phương tiện kỹ thuật bảo đảm an toàn TTM theo luật cũ đã đưa vào sử dụng trước ngày luật mới có hiệu lực được tiếp tục sử dụng, phải tuân thủ điều kiện an ninh mạng theo luật mới trong vòng 12 tháng. Xác nhận qua thuvienphapluat (bài phân tích + toàn văn), baochinhphu.vn (Quốc hội thông qua). Ngày ban hành 10/12/2025 lấy từ một nguồn duy nhất — nên đối chiếu lại chính xác ngày này qua vbpl.vn trước khi dùng cho hồ sơ chính thức. CHƯA trích dẫn nội dung điều khoản chi tiết nào khác của luật mới ngoài các điều khoản chuyển tiếp nêu trên."
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
    id: "nd-53-2022-cp",
    docNumber: "53/2022/NĐ-CP",
    title: "Quy định chi tiết một số điều của Luật An ninh mạng",
    issuer: "Chính phủ",
    issuedDate: "2022-08-15",
    effectiveFrom: "2022-10-01",
    status: "con_hieu_luc",
    sourceTier: "A",
    lastVerifiedAt: V,
    verifiedBy: VERIFIED_BY,
    verificationNote:
      "Xác nhận qua vanban.chinhphu.vn, xaydungchinhsach.chinhphu.vn, cspl.mic.gov.vn (Bộ TT&TT), mod.gov.vn — đối chiếu chéo nhất quán. Chứa yêu cầu lưu trữ dữ liệu và đặt chi nhánh/văn phòng đại diện tại Việt Nam đối với một số nhóm doanh nghiệp trong/ngoài nước cung cấp dịch vụ trên không gian mạng (PL-03). CHƯA trích dẫn chi tiết điều khoản/đối tượng áp dụng cụ thể ở tầng nội dung — cần đọc nguyên văn trước khi xác định một tổ chức cụ thể có thuộc diện phải lưu trữ dữ liệu trong nước hay không."
  },
  {
    id: "qd-2345-nhnn",
    docNumber: "2345/QĐ-NHNN",
    title: "Triển khai các giải pháp an toàn, bảo mật trong thanh toán trực tuyến và thanh toán thẻ ngân hàng (đã hết hiệu lực)",
    issuer: "Ngân hàng Nhà nước Việt Nam",
    issuedDate: "2023-12-18",
    effectiveFrom: "2024-07-01",
    status: "het_hieu_luc",
    sourceTier: "B",
    lastVerifiedAt: V,
    verifiedBy: VERIFIED_BY,
    verificationNote:
      "CẬP NHẬT 2026-08-24 (theo phản hồi người dùng): nội dung của Quyết định này đã được NHNN quy định lại tại Thông tư 50/2024/TT-NHNN (hiệu lực 01/01/2025) — coi như đã được thay thế trên thực tế. Là QUYẾT ĐỊNH (văn bản hành chính cá biệt), không công bố trên Công báo như Thông tư/Nghị định nên sourceTier vẫn B — CHƯA xác nhận được một văn bản bãi bỏ chính thức riêng cho Quyết định này (có thể về mặt hình thức vẫn tồn tại nhưng nội dung đã lỗi thời). KHÔNG dùng văn bản này làm căn cứ nữa — tra cứu Thông tư 50/2024/TT-NHNN (đã được Thông tư 77/2025/TT-NHNN sửa đổi, bổ sung) thay thế."
  },
  {
    id: "tt-77-2025-nhnn",
    docNumber: "77/2025/TT-NHNN",
    title: "Sửa đổi, bổ sung một số điều của Thông tư 50/2024/TT-NHNN",
    issuer: "Ngân hàng Nhà nước Việt Nam",
    issuedDate: "2025-12-31",
    effectiveFrom: "2026-03-01",
    status: "con_hieu_luc",
    sourceTier: "A",
    lastVerifiedAt: V,
    verifiedBy: VERIFIED_BY,
    verificationNote:
      "Bổ sung 2026-08-24 theo yêu cầu người dùng. Xác nhận qua congbao.chinhphu.vn và vanban.chinhphu.vn (Công báo Chính phủ — nguồn hạng A rõ ràng). Mở rộng phạm vi áp dụng TT50/2024 sang hoạt động cung ứng dịch vụ mobile money; bổ sung đối tượng áp dụng (tổ chức cung ứng dịch vụ trung gian thanh toán, mobile money, công ty thông tin tín dụng); thay thế Phụ lục 01, 02, 04 của TT50/2024 bằng bản cập nhật; bổ sung yêu cầu xác thực khớp thông tin sinh trắc học cho giao dịch của doanh nghiệp/hộ kinh doanh, riêng Điều 3 và Điều 10 hiệu lực từ 01/07/2026 (áp dụng cho đơn vị cung cấp dịch vụ thanh toán trực tuyến cho cả khách hàng cá nhân và tổ chức). Đây là SỬA ĐỔI, KHÔNG PHẢI thay thế toàn văn TT50/2024. CHƯA trích dẫn chi tiết nội dung phụ lục mới hay ngưỡng cụ thể áp dụng cho doanh nghiệp — cần đọc nguyên văn trước khi tư vấn."
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
  },
  {
    documentId: "tt-50-2024-nhnn",
    articleRef: "Điều 3",
    title: "Điều khoản được sửa đổi bởi TT77/2025/TT-NHNN — hiệu lực riêng cho đơn vị cung cấp dịch vụ thanh toán trực tuyến cho cả khách hàng cá nhân và tổ chức",
    effectiveFrom: "2026-07-01"
  },
  {
    documentId: "tt-50-2024-nhnn",
    articleRef: "Điều 10",
    title: "Điều khoản được sửa đổi bởi TT77/2025/TT-NHNN — hiệu lực riêng cho đơn vị cung cấp dịch vụ thanh toán trực tuyến cho cả khách hàng cá nhân và tổ chức",
    effectiveFrom: "2026-07-01"
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
  { fromDocId: "nd-85-2016-cp", toDocId: "tcvn-11930", relationType: "huong_dan" },
  {
    fromDocId: "luat-116-2025-qh15",
    toDocId: "luat-24-2018-qh14",
    relationType: "thay_the",
    scope: "Hợp nhất — Luật mới thay thế toàn bộ Luật An ninh mạng 2018"
  },
  {
    fromDocId: "luat-116-2025-qh15",
    toDocId: "luat-86-2015-qh13",
    relationType: "thay_the",
    scope: "Hợp nhất — Luật mới thay thế toàn bộ Luật An toàn thông tin mạng 2015"
  },
  {
    fromDocId: "tt-77-2025-nhnn",
    toDocId: "tt-50-2024-nhnn",
    relationType: "sua_doi",
    scope: "Sửa đổi, bổ sung — KHÔNG thay thế toàn văn; TT50/2024 vẫn là văn bản gốc còn hiệu lực"
  },
  {
    fromDocId: "tt-50-2024-nhnn",
    toDocId: "qd-2345-nhnn",
    relationType: "thay_the",
    scope: "Nội dung của QĐ 2345 được quy định lại tại TT50/2024 — chưa xác nhận văn bản bãi bỏ chính thức riêng"
  }
];
