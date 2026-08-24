/**
 * ContentBlock — nhom NH (He thong dac thu ngan hang), tang T1.
 * Xem quy tac bat buoc o dau file src/content/topics/content-blocks.ts.
 * NH-02 da co trong content-blocks.ts, khong lap lai o day.
 *
 * Cac ContentBlock trich dan tt-09-2020-nhnn / tt-50-2024-nhnn o day CHI
 * trich dan cap van ban (khong co articleRef), khong nhac toi so dieu
 * khoan hay noi dung quy pham cu the ngoai nhung gi da co trong
 * src/content/documents/index.ts.
 */
import type { ContentBlock } from "../../data/schema/models";

export const contentBlocksNh: ContentBlock[] = [
  {
    id: "cb-nh01-t1",
    topicId: "NH-01",
    tier: "T1",
    kind: "dien_giai",
    body:
      "Hệ thống ngân hàng lõi (core banking system) xử lý các nghiệp vụ cốt lõi — tài khoản, giao dịch, sổ cái — nên yêu cầu an toàn cao nhất về tính toàn vẹn dữ liệu giao dịch, khả năng sẵn sàng và kiểm soát truy cập chặt chẽ tới các chức năng có thể thay đổi số dư hoặc thông tin tài khoản. Các kiểm soát đặc thù thường gồm: phân tách môi trường phát triển/kiểm thử/sản xuất nghiêm ngặt, ghi nhật ký đầy đủ mọi thao tác trên dữ liệu giao dịch, đối chiếu/soát xét cuối ngày, và kiểm soát thay đổi chặt chẽ. Tại Việt Nam, an toàn hệ thống thông tin trong hoạt động ngân hàng — bao gồm hệ thống lõi — được quy định trong Thông tư 09/2020/TT-NHNN (hiệu lực một phần, xem PL-07); thực hành kỹ thuật chung tham chiếu thêm ISO/IEC 27002:2022.",
    sources: [
      { type: "legal_document", refId: "tt-09-2020-nhnn" },
      { type: "framework", refId: "iso27002" }
    ],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-nh03-t1",
    topicId: "NH-03",
    tier: "T1",
    kind: "dien_giai",
    body:
      "ATM, CDM (máy gửi tiền) và thiết bị chấp nhận thanh toán (POS) là các điểm cuối vật lý xử lý tiền mặt và/hoặc dữ liệu thẻ, đối mặt với rủi ro đặc thù: gắn thiết bị đọc trộm dữ liệu thẻ (skimming), tấn công vật lý vào bộ điều khiển ATM (jackpotting), và tấn công vào kênh truyền thông giữa thiết bị và hệ thống xử lý trung tâm. Kiểm soát phổ biến gồm: mã hóa PIN ngay tại đầu đọc, giám sát vật lý và cảnh báo can thiệp thiết bị, tăng cường cấu hình hệ điều hành nhúng của thiết bị, và tuân thủ các yêu cầu bảo mật thiết bị đầu cuối thanh toán trong hệ sinh thái tiêu chuẩn thẻ (PCI DSS áp dụng cho toàn bộ luồng xử lý dữ liệu thẻ liên quan).",
    sources: [{ type: "framework", refId: "pci-dss" }],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-nh04-t1",
    topicId: "NH-04",
    tier: "T1",
    kind: "dien_giai",
    body:
      "Chuyển tiền liên ngân hàng qua mạng SWIFT là kênh xử lý giá trị giao dịch lớn, do đó là mục tiêu ưu tiên của các cuộc tấn công có tổ chức nhằm chiếm quyền kiểm soát và khởi tạo lệnh chuyển tiền giả mạo. SWIFT Customer Security Programme (CSP) yêu cầu mọi tổ chức kết nối mạng SWIFT tự đánh giá và chứng thực hằng năm việc tuân thủ Customer Security Controls Framework (CSCF, hiện v2026), gồm các kiểm soát về bảo vệ môi trường kết nối SWIFT (cô lập khỏi mạng nội bộ chung), giới hạn và giám sát truy cập vào hệ thống giao diện SWIFT, và phát hiện/ứng phó hành vi bất thường trên giao dịch. Không chứng thực đầy đủ CSCF có thể ảnh hưởng tới quan hệ đối tác với các ngân hàng khác trong mạng lưới.",
    sources: [{ type: "framework", refId: "swift-cscf" }],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-nh05-t1",
    topicId: "NH-05",
    tier: "T1",
    kind: "dien_giai",
    body:
      "Ngân hàng điện tử (Internet Banking, Mobile Banking) cho phép khách hàng tự thực hiện giao dịch tài chính qua kênh trực tuyến, đòi hỏi kiểm soát an toàn xuyên suốt: xác thực khách hàng phù hợp mức độ rủi ro giao dịch, mã hóa kênh truyền, bảo vệ ứng dụng di động khỏi các kỹ thuật can thiệp, và giám sát hành vi bất thường theo thời gian thực để phát hiện gian lận. Tại Việt Nam, hoạt động này được điều chỉnh bởi Thông tư 50/2024/TT-NHNN về an toàn, bảo mật cho việc cung cấp dịch vụ trực tuyến ngành Ngân hàng (hiệu lực từ 01/01/2025, một số điều khoản từ 01/07/2025) — xem PL-08; các ngưỡng kỹ thuật/nghiệp vụ cụ thể theo thông tư này cần tra cứu trực tiếp, CHƯA được trích dẫn chi tiết ở tầng nội dung này.",
    sources: [{ type: "legal_document", refId: "tt-50-2024-nhnn" }],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-nh06-t1",
    topicId: "NH-06",
    tier: "T1",
    kind: "dien_giai",
    body:
      "Ngân hàng mở (Open Banking) cho phép bên thứ ba (thường là công ty fintech) truy cập có kiểm soát vào dữ liệu hoặc chức năng khởi tạo giao dịch của khách hàng qua giao diện lập trình mở (Open API), dựa trên sự đồng ý rõ ràng của khách hàng. Rủi ro đặc thù gồm: quản lý sự đồng ý của khách hàng theo phạm vi và thời hạn xác định, xác thực và cấp quyền chặt chẽ cho bên thứ ba (thường qua chuẩn OAuth 2.0/OpenID Connect), và giám sát để phát hiện việc bên thứ ba truy cập vượt phạm vi đã cấp. OWASP ASVS 5.0 có các yêu cầu kiểm chứng liên quan tới xác thực và cấp quyền API; ISO/IEC 27002:2022 áp dụng cho kiểm soát an toàn thông tin nói chung của hệ thống cung cấp API.",
    sources: [
      { type: "framework", refId: "owasp-asvs" },
      { type: "framework", refId: "iso27002" }
    ],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-nh07-t1",
    topicId: "NH-07",
    tier: "T1",
    kind: "dien_giai",
    body:
      "Định danh khách hàng điện tử (eKYC) xác minh danh tính khách hàng từ xa qua kênh số, thường kết hợp xác minh giấy tờ tùy thân với xác thực sinh trắc học (nhận diện khuôn mặt, đối chiếu ảnh chân dung trực tiếp với ảnh trên giấy tờ, kiểm tra sự sống — liveness detection) để chống giả mạo bằng ảnh tĩnh hoặc video deepfake. Đây là lĩnh vực có quy định pháp lý cụ thể của Ngân hàng Nhà nước về điều kiện, hồ sơ và ngưỡng áp dụng, tuy nhiên số hiệu văn bản và các ngưỡng nghiệp vụ/kỹ thuật cụ thể CHƯA XÁC MINH trong kho dữ liệu này (xem docs/open-questions.md, PL-10) — không nêu con số cụ thể ở đây. Về kiểm soát kỹ thuật chung, có thể tham chiếu các nguyên tắc xác thực của ISO/IEC 27002:2022.",
    sources: [{ type: "framework", refId: "iso27002" }],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-nh08-t1",
    topicId: "NH-08",
    tier: "T1",
    kind: "dien_giai",
    body:
      "Phòng chống gian lận giao dịch kết hợp nhiều lớp kiểm soát: quy tắc phát hiện dựa trên ngưỡng (velocity, giá trị giao dịch bất thường), mô hình chấm điểm rủi ro theo thời gian thực dựa trên hành vi lịch sử của khách hàng, và xác thực bổ sung khi giao dịch vượt ngưỡng rủi ro xác định. Hiệu quả của hệ thống phụ thuộc vào chất lượng dữ liệu hành vi lịch sử và khả năng cập nhật quy tắc/mô hình theo các thủ đoạn gian lận mới, bao gồm gian lận có yếu tố giả mạo bằng AI (xem MN-06). ISO/IEC 27002:2022 và NIST CSF 2.0 cung cấp nguyên tắc chung về giám sát và phát hiện bất thường áp dụng được cho bối cảnh này; các ngưỡng nghiệp vụ cụ thể theo quy định của NHNN cần tra cứu riêng, chưa được trích dẫn chi tiết ở đây.",
    sources: [
      { type: "framework", refId: "iso27002" },
      { type: "framework", refId: "nist-csf" }
    ],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-nh09-t1",
    topicId: "NH-09",
    tier: "T1",
    kind: "dien_giai",
    body:
      "Hệ thống chuyển mạch tài chính định tuyến giao dịch thanh toán giữa các ngân hàng/tổ chức trung gian thanh toán, còn hệ thống bù trừ điện tử tính toán nghĩa vụ ròng giữa các bên tham gia trước khi quyết toán. Do xử lý khối lượng giao dịch lớn liên tổ chức, các hệ thống này đòi hỏi tính sẵn sàng cao, cơ chế đối soát chặt chẽ giữa các bên để phát hiện sai lệch, và kiểm soát an toàn tương đương hệ thống ngân hàng lõi. Về mặt pháp lý tại Việt Nam, yêu cầu an toàn hệ thống thông tin áp dụng cho hạ tầng này nằm trong phạm vi điều chỉnh chung của Thông tư 09/2020/TT-NHNN (xem PL-07); thực hành kỹ thuật chung tham chiếu ISO/IEC 27002:2022.",
    sources: [
      { type: "legal_document", refId: "tt-09-2020-nhnn" },
      { type: "framework", refId: "iso27002" }
    ],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-nh10-t1",
    topicId: "NH-10",
    tier: "T1",
    kind: "dien_giai",
    body:
      "Kho dữ liệu ngân hàng tập trung dữ liệu giao dịch, hành vi khách hàng từ nhiều hệ thống nguồn để phục vụ phân tích, báo cáo quản trị và mô hình rủi ro/gian lận. Vì tập trung khối lượng lớn dữ liệu nhạy cảm, kho dữ liệu là mục tiêu tấn công giá trị cao và đòi hỏi kiểm soát riêng: phân quyền truy cập chi tiết theo vai trò và mục đích sử dụng, ẩn danh hóa/giả danh hóa dữ liệu khi dùng cho phân tích không cần định danh trực tiếp, và giám sát truy vấn bất thường trên tập dữ liệu lớn. ISO/IEC 27002:2022 và NIST SP 800-53 (họ System and Communications Protection, Media Protection) cung cấp các nguyên tắc kiểm soát chung áp dụng cho bảo vệ dữ liệu khách hàng tập trung quy mô lớn.",
    sources: [
      { type: "framework", refId: "iso27002" },
      { type: "framework", refId: "nist-sp-800-53" }
    ],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  }
];
