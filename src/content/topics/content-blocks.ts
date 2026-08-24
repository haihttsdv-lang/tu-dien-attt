/**
 * ContentBlock — noi dung tang T1 (tra cuu nhanh, <=200 tu — URD 5.11).
 *
 * QUY TAC BAT BUOC KHI THEM MOI (doc truoc khi sua file nay):
 *   1. MOI ContentBlock PHAI co it nhat 1 phan tu trong sources[], tro toi
 *      mot id co that trong content/documents (LegalDocument) hoac
 *      content/frameworks (Framework). Khong duoc de trong — scripts/
 *      validate/validate-content.ts se lam build/CI that bai neu vi pham.
 *   2. TUYET DOI KHONG bia so hieu dieu khoan, ngay ban hanh, hay noi dung
 *      trich dan nguyen van tu luat/thong tu ma khong co trong
 *      content/documents/index.ts. Neu chu de lien quan toi mot van ban
 *      CHUA co trong kho (vi du Luat An toan thong tin mang, Nghi dinh bao
 *      ve du lieu ca nhan...), KHONG tao ContentBlock cho chu de do — de
 *      trong va ghi vao docs/open-questions.md. Giao dien se tu hien thi
 *      trang thai "chua co noi dung — dang cho xac minh".
 *   3. kind = "trich_dan" CHI dung khi body la nguyen van (hoac gan nguyen
 *      van) tu nguon; con lai dung "dien_giai" (URD FR-K04, FR-T03).
 *   4. Voi noi dung dua tren chuan quoc te (ISO/NIST/PCI DSS/...): duoc
 *      phep mo ta o muc khai niem/muc tieu kiem soat chung (kien thuc
 *      chuyen mon pho bien), KHONG trich dan nguyen van dieu khoan co ban
 *      quyen (URD 22 — "Vi pham ban quyen tieu chuan quoc te").
 */
import type { ContentBlock } from "../../data/schema/models";

export const contentBlocks: ContentBlock[] = [
  {
    id: "cb-pl07-t1",
    topicId: "PL-07",
    tier: "T1",
    kind: "dien_giai",
    body:
      "Thông tư 09/2020/TT-NHNN (ban hành 21/10/2020, hiệu lực 01/01/2021) quy định về an toàn hệ thống thông tin trong hoạt động ngân hàng, thay thế Thông tư 18/2018/TT-NHNN. Thông tư phân loại hệ thống thông tin theo 5 cấp độ. LƯU Ý: Điều 25 của Thông tư này đã bị bãi bỏ bởi Thông tư 50/2024/TT-NHNN kể từ 01/01/2025 — văn bản hiện ở trạng thái hiệu lực một phần, không phải còn hiệu lực toàn văn. Xem trang chi tiết văn bản để biết điều khoản cụ thể bị ảnh hưởng.",
    sources: [{ type: "legal_document", refId: "tt-09-2020-nhnn" }],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-pl08-t1",
    topicId: "PL-08",
    tier: "T1",
    kind: "dien_giai",
    body:
      "Thông tư 50/2024/TT-NHNN (ban hành 31/10/2024) quy định về an toàn, bảo mật cho việc cung cấp dịch vụ trực tuyến ngành Ngân hàng, hiệu lực từ 01/01/2025 (một số điều khoản — điểm b khoản 1 Điều 4; điểm d khoản 9 Điều 7; khoản 3, 4 Điều 8 — hiệu lực từ 01/07/2025). Thông tư thay thế Thông tư 35/2016/TT-NHNN và Thông tư 35/2018/TT-NHNN, đồng thời bãi bỏ Điều 25 của Thông tư 09/2020/TT-NHNN. CẬP NHẬT: Thông tư này ĐÃ ĐƯỢC SỬA ĐỔI, BỔ SUNG bởi Thông tư 77/2025/TT-NHNN (31/12/2025, hiệu lực 01/03/2026, riêng Điều 3/10 hiệu lực 01/07/2026) — mở rộng phạm vi sang mobile money, thêm đối tượng áp dụng, thay Phụ lục 01/02/04. TT50/2024 vẫn là văn bản gốc còn hiệu lực, chỉ một phần được cập nhật — xem PL-10 để biết chi tiết liên quan ngưỡng xác thực sinh trắc học.",
    sources: [
      { type: "legal_document", refId: "tt-50-2024-nhnn" },
      { type: "legal_document", refId: "tt-77-2025-nhnn" }
    ],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-pl06-t1",
    topicId: "PL-06",
    tier: "T1",
    kind: "dien_giai",
    body:
      "TCVN 11930 quy định yêu cầu cơ bản về an toàn hệ thống thông tin theo cấp độ, được Thông tư 50/2024/TT-NHNN viện dẫn. Bản được viện dẫn trong quá trình nghiên cứu là TCVN 11930:2017. CHƯA XÁC MINH đây có còn là phiên bản hiện hành hay đã có bản thay thế — cần tra cứu lại tại Ủy ban Tiêu chuẩn Đo lường Chất lượng Quốc gia trước khi trích dẫn số điều khoản cụ thể.",
    sources: [{ type: "legal_document", refId: "tcvn-11930" }],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-cc01-cv1524-t1",
    topicId: "CC-01",
    tier: "T1",
    kind: "dien_giai",
    body:
      "Công văn 1524/NHNN-CNTT (08/3/2023) hướng dẫn về sao lưu và bảo đảm hoạt động liên tục cho hệ thống thông tin ngân hàng. Đây là công văn hướng dẫn nghiệp vụ, KHÔNG phải văn bản quy phạm pháp luật — không viện dẫn như một nghĩa vụ pháp lý độc lập, chỉ dùng làm tài liệu tham khảo thực hành.",
    sources: [{ type: "legal_document", refId: "cv-1524-nhnn-cntt" }],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-cm01-t1",
    topicId: "CM-01",
    tier: "T1",
    kind: "dien_giai",
    body:
      "ISO/IEC 27001:2022 quy định yêu cầu để thiết lập, vận hành, giám sát, duy trì và cải tiến một Hệ thống quản lý an toàn thông tin (ISMS): bối cảnh tổ chức, cam kết lãnh đạo, hoạch định (đánh giá và xử lý rủi ro), hỗ trợ nguồn lực, vận hành, đánh giá hiệu năng và cải tiến liên tục (mô hình PDCA). Tổ chức được chứng nhận ISO 27001 phải áp dụng bộ kiểm soát tham chiếu tại Phụ lục A, tương ứng với ISO/IEC 27002.",
    sources: [{ type: "framework", refId: "iso27001" }],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-kt03-t1",
    topicId: "KT-03",
    tier: "T1",
    kind: "dien_giai",
    body:
      "Quản lý tài khoản đặc quyền (Privileged Access Management — PAM) là tập kiểm soát nhằm phát hiện, quản lý, giám sát và giới hạn quyền truy cập của tài khoản có quyền cao (quản trị hệ thống, cơ sở dữ liệu, mạng...). Thực hành phổ biến: kho lưu mật khẩu đặc quyền có luân chuyển tự động, cấp quyền vừa đủ theo thời gian (just-in-time), ghi phiên làm việc đặc quyền, và tách bạch tài khoản quản trị khỏi tài khoản dùng hằng ngày. ISO/IEC 27002:2022 và NIST SP 800-53 Rev. 5 đều có nhóm kiểm soát riêng cho quản lý truy cập đặc quyền.",
    sources: [
      { type: "framework", refId: "iso27002" },
      { type: "framework", refId: "nist-sp-800-53" }
    ],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-qt03-t1",
    topicId: "QT-03",
    tier: "T1",
    kind: "dien_giai",
    body:
      "Quản lý rủi ro an toàn thông tin gồm bốn bước lặp lại: nhận diện rủi ro (tài sản, mối đe dọa, điểm yếu), phân tích (khả năng xảy ra × mức độ tác động), đánh giá (so với khẩu vị rủi ro của tổ chức) và xử lý (giảm thiểu, chuyển giao, né tránh, hoặc chấp nhận có thời hạn). ISO/IEC 27005:2022 và NIST Cybersecurity Framework 2.0 (hàm Govern, Identify) là hai khung tham chiếu phổ biến cho quy trình này; kết quả đầu ra chính là sổ đăng ký rủi ro.",
    sources: [
      { type: "framework", refId: "iso27005" },
      { type: "framework", refId: "nist-csf" }
    ],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-vh06-t1",
    topicId: "VH-06",
    tier: "T1",
    kind: "dien_giai",
    body:
      "Ứng phó sự cố an toàn thông tin theo NIST SP 800-61 Rev. 3 (04/2025) được ánh xạ theo 5 hàm của CSF 2.0: Identify, Protect, Detect, Respond, Recover — thay cho mô hình vòng đời tuyến tính cứng của bản Rev. 2 trước đây (đã bị rút lại). Quy trình nội bộ cần có: phân loại mức độ nghiêm trọng, ngưỡng leo thang, vai trò trách nhiệm, và liên kết với nghĩa vụ báo cáo có thời hạn theo quy định của NHNN (xem PL-11 — thời hạn báo cáo hiện CHƯA XÁC MINH số hiệu văn bản, cần tra cứu riêng).",
    sources: [{ type: "framework", refId: "nist-sp-800-61" }],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-nh02-t1",
    topicId: "NH-02",
    tier: "T1",
    kind: "dien_giai",
    body:
      "PCI DSS 4.0.1 là chuẩn bảo mật dữ liệu bắt buộc đối với mọi tổ chức lưu trữ, xử lý hoặc truyền dữ liệu chủ thẻ thanh toán (PAN). Chuẩn gồm 12 yêu cầu cấp cao thuộc 6 nhóm mục tiêu: xây dựng và duy trì mạng an toàn, bảo vệ dữ liệu chủ thẻ, duy trì chương trình quản lý điểm yếu, triển khai kiểm soát truy cập mạnh, giám sát và kiểm thử mạng thường xuyên, và duy trì chính sách an toàn thông tin. Phạm vi áp dụng cho ngân hàng phát hành/thanh toán thẻ được xác định qua bài đánh giá phạm vi (scoping) hằng năm.",
    sources: [{ type: "framework", refId: "pci-dss" }],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-cm11-t1",
    topicId: "CM-11",
    tier: "T1",
    kind: "dien_giai",
    body:
      "SWIFT Customer Security Programme (CSP) yêu cầu mọi tổ chức kết nối mạng SWIFT tự đánh giá và chứng thực hằng năm việc tuân thủ Customer Security Controls Framework (CSCF). Phiên bản CSCF v2026 (phát hành 07/2025) gồm 3 mục tiêu — bảo vệ môi trường, nhận biết và giới hạn truy cập, phát hiện và ứng phó — với 32 kiểm soát (26 bắt buộc, 6 khuyến nghị), được ánh xạ tới các chuẩn phổ biến khác như ISO 27002, PCI DSS, NIST CSF.",
    sources: [{ type: "framework", refId: "swift-cscf" }],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-kt12-t1",
    topicId: "KT-12",
    tier: "T1",
    kind: "dien_giai",
    body:
      "Kiến trúc không tin cậy mặc định (Zero Trust Architecture) theo NIST SP 800-207 dựa trên nguyên tắc: không mặc nhiên tin cậy bất kỳ thực thể nào chỉ vì vị trí mạng (trong/ngoài); mọi yêu cầu truy cập tới tài nguyên đều phải được xác thực, cấp quyền và mã hóa theo từng phiên, dựa trên chính sách động (danh tính, thiết bị, ngữ cảnh). Đây là định hướng kiến trúc dài hạn, không phải một sản phẩm đơn lẻ, thường triển khai dần qua cổng chính sách (policy engine), vi phân đoạn mạng và xác thực đa yếu tố liên tục.",
    sources: [{ type: "framework", refId: "nist-sp-800-207" }],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-kt07-t1",
    topicId: "KT-07",
    tier: "T1",
    kind: "dien_giai",
    body:
      "An toàn ứng dụng và vòng đời phát triển an toàn (Secure SDLC) tích hợp kiểm soát bảo mật vào từng giai đoạn phát triển: yêu cầu (threat modeling), thiết kế (nguyên tắc bảo mật ngay từ đầu), viết mã (rà soát mã, quét tĩnh SAST), kiểm thử (quét động DAST, kiểm thử xâm nhập) và vận hành (quét phụ thuộc, giám sát). OWASP Top 10 (bản 2025, chốt 01/2026) liệt kê 10 nhóm rủi ro bảo mật ứng dụng web phổ biến nhất; OWASP ASVS 5.0 cung cấp danh mục yêu cầu kiểm chứng chi tiết theo cấp độ.",
    sources: [
      { type: "framework", refId: "owasp-top10" },
      { type: "framework", refId: "owasp-asvs" }
    ],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  }
];
