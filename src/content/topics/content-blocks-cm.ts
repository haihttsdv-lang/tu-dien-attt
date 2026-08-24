/**
 * ContentBlock — nhom CM (Chuan muc va khung quoc te), tang T1.
 * Xem quy tac bat buoc o dau file src/content/topics/content-blocks.ts.
 * CM-01 va CM-11 da co trong content-blocks.ts, khong lap lai o day.
 */
import type { ContentBlock } from "../../data/schema/models";

export const contentBlocksCm: ContentBlock[] = [
  {
    id: "cb-cm02-t1",
    topicId: "CM-02",
    tier: "T1",
    kind: "dien_giai",
    body:
      "ISO/IEC 27002:2022 là tài liệu hướng dẫn triển khai bộ kiểm soát an toàn thông tin tham chiếu tại Phụ lục A của ISO/IEC 27001:2022, được tái cấu trúc thành 93 kiểm soát chia theo 4 chủ đề: Tổ chức, Con người, Vật lý và Công nghệ — thay cho 14 nhóm/114 kiểm soát của bản 2013. Mỗi kiểm soát mô tả theo cấu trúc thống nhất: mục đích, hướng dẫn triển khai và thông tin bổ sung, kèm 5 thuộc tính phân loại hỗ trợ lọc và báo cáo theo nhiều góc nhìn. Đây là tài liệu thực hành, không phải yêu cầu bắt buộc chứng nhận — yêu cầu chứng nhận nằm ở ISO/IEC 27001.",
    sources: [{ type: "framework", refId: "iso27002" }],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-cm03-t1",
    topicId: "CM-03",
    tier: "T1",
    kind: "dien_giai",
    body:
      "ISO/IEC 27005:2022 (ấn bản thứ 4) cung cấp hướng dẫn quản lý rủi ro an toàn thông tin, hỗ trợ trực tiếp các yêu cầu hoạch định rủi ro của ISO/IEC 27001. Tài liệu không quy định một phương pháp luận cụ thể mà trình bày quy trình chung: thiết lập bối cảnh, nhận diện, phân tích, đánh giá và xử lý rủi ro, cùng giám sát và trao đổi thông tin xuyên suốt vòng đời. So với bản 2018, ấn bản 2022 nhấn mạnh việc tích hợp quản lý rủi ro vào quy trình quản lý chung của tổ chức thay vì xử lý như một hoạt động riêng biệt. Sổ đăng ký rủi ro và tiêu chí chấp nhận rủi ro là hai đầu ra vận hành then chốt khi áp dụng tài liệu này.",
    sources: [{ type: "framework", refId: "iso27005" }],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-cm04-t1",
    topicId: "CM-04",
    tier: "T1",
    kind: "dien_giai",
    body:
      "ISO/IEC 27017:2015 bổ sung hướng dẫn kiểm soát an toàn thông tin dành riêng cho dịch vụ đám mây, áp dụng cho cả bên cung cấp và bên sử dụng, dựa trên nền các kiểm soát của ISO/IEC 27002 kèm hướng dẫn đặc thù đám mây (phân định trách nhiệm giữa nhà cung cấp và khách hàng, gỡ bỏ tài sản ảo khi chấm dứt hợp đồng, cô lập môi trường khách hàng). Chủ đề bảo vệ dữ liệu cá nhân trên đám mây công cộng thường được đề cập trong bộ tiêu chuẩn liên quan nhưng phiên bản hiện hành của tài liệu đó CHƯA XÁC MINH độc lập trong kho dữ liệu này — không dùng làm căn cứ trích dẫn cho tới khi kiểm tra lại trực tiếp tại iso.org.",
    sources: [{ type: "framework", refId: "iso27017" }],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-cm05-t1",
    topicId: "CM-05",
    tier: "T1",
    kind: "dien_giai",
    body:
      "ISO 22301 quy định yêu cầu đối với Hệ thống quản lý liên tục hoạt động kinh doanh (BCMS), theo cùng cấu trúc bậc cao với các tiêu chuẩn hệ thống quản lý khác như ISO 27001: bối cảnh tổ chức, lãnh đạo, hoạch định, hỗ trợ, vận hành, đánh giá hiệu năng và cải tiến. Phần vận hành yêu cầu thực hiện phân tích tác động nghiệp vụ (BIA), đánh giá rủi ro, xây dựng chiến lược và kế hoạch liên tục hoạt động, cùng chương trình diễn tập định kỳ. Đây là tiêu chuẩn có thể chứng nhận, thường được ngân hàng tham chiếu song song với quy định của NHNN về an toàn hệ thống thông tin và hướng dẫn sao lưu, bảo đảm hoạt động liên tục.",
    sources: [{ type: "framework", refId: "iso22301" }],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-cm06-t1",
    topicId: "CM-06",
    tier: "T1",
    kind: "dien_giai",
    body:
      "PCI DSS là chuẩn bảo mật dữ liệu thẻ do PCI Security Standards Council ban hành, áp dụng bắt buộc cho mọi tổ chức lưu trữ, xử lý hoặc truyền dữ liệu chủ thẻ (PAN). Bản 4.0.1 hiện hành gồm 12 yêu cầu cấp cao thuộc 6 nhóm mục tiêu: xây dựng/duy trì mạng an toàn, bảo vệ dữ liệu chủ thẻ, quản lý điểm yếu, kiểm soát truy cập mạnh, giám sát/kiểm thử mạng thường xuyên và duy trì chính sách an toàn thông tin. Mức độ tuân thủ (Level 1–4) và hình thức đánh giá (tự đánh giá SAQ hay đánh giá bởi QSA) phụ thuộc vào khối lượng giao dịch thẻ hằng năm của tổ chức.",
    sources: [{ type: "framework", refId: "pci-dss" }],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-cm07-t1",
    topicId: "CM-07",
    tier: "T1",
    kind: "dien_giai",
    body:
      "NIST Cybersecurity Framework (CSF) 2.0, công bố 02/2024, là khung quản lý rủi ro an ninh mạng tự nguyện, áp dụng cho mọi loại hình tổ chức. CSF 2.0 bổ sung hàm Govern bên cạnh 5 hàm trước đó — Identify, Protect, Detect, Respond, Recover — nhấn mạnh vai trò của quản trị cấp cao trong thiết lập chiến lược, kỳ vọng và giám sát rủi ro. Khung cung cấp Hồ sơ (Profile) hiện tại và mục tiêu để tự đánh giá khoảng cách, và Bậc (Tier) để đánh giá mức độ trưởng thành quản trị rủi ro. CSF không quy định kiểm soát chi tiết mà thường dùng làm lớp ngôn ngữ chung, ánh xạ tới các bộ kiểm soát cụ thể như NIST SP 800-53 hay ISO/IEC 27002.",
    sources: [{ type: "framework", refId: "nist-csf" }],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-cm08-t1",
    topicId: "CM-08",
    tier: "T1",
    kind: "dien_giai",
    body:
      "NIST SP 800-53 (hiện là Rev. 5, bản cập nhật Rev. 5.2.0 năm 2025) là danh mục kiểm soát an toàn và quyền riêng tư toàn diện cho hệ thống thông tin, tổ chức theo 20 họ kiểm soát (Access Control, Audit and Accountability, Incident Response, System and Communications Protection...). Mỗi kiểm soát có các phần mở rộng cho phép áp dụng theo mức độ tác động (thấp/trung bình/cao) của hệ thống. Dù có nguồn gốc từ khu vực liên bang Hoa Kỳ, danh mục này được sử dụng rộng rãi ngoài phạm vi đó như tài liệu tham chiếu kỹ thuật khi thiết kế kiểm soát, đặc biệt cho các chủ đề chưa có mô tả chi tiết trong ISO/IEC 27002.",
    sources: [{ type: "framework", refId: "nist-sp-800-53" }],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-cm09-t1",
    topicId: "CM-09",
    tier: "T1",
    kind: "dien_giai",
    body:
      "NIST SP 800-61 là tài liệu hướng dẫn xử lý sự cố an toàn thông tin. Bản Rev. 3 (04/2025, thay thế Rev. 2 đã bị rút lại) thay đổi cách tiếp cận: thay vì mô hình vòng đời tuyến tính cứng (chuẩn bị → phát hiện/phân tích → ngăn chặn/diệt trừ/khôi phục → hoạt động sau sự cố) như bản cũ, tài liệu ánh xạ các hoạt động ứng phó sự cố theo 5 hàm của NIST CSF 2.0 (Identify, Protect, Detect, Respond, Recover), cho phép tích hợp trực tiếp với chương trình quản trị rủi ro an ninh mạng tổng thể của tổ chức thay vì xử lý sự cố như một quy trình tách biệt.",
    sources: [{ type: "framework", refId: "nist-sp-800-61" }],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-cm10-t1",
    topicId: "CM-10",
    tier: "T1",
    kind: "dien_giai",
    body:
      "NIST SP 800-207 (08/2020) định nghĩa kiến trúc không tin cậy mặc định (Zero Trust Architecture — ZTA): tập nguyên tắc thiết kế coi mọi yêu cầu truy cập là không đáng tin cậy cho tới khi được xác minh, bất kể nguồn gốc trong hay ngoài mạng nội bộ truyền thống. Tài liệu mô tả các thành phần logic cốt lõi — Policy Engine, Policy Administrator, Policy Enforcement Point — cùng nhiều mô hình triển khai khả dĩ (dựa trên định danh nâng cao, vi phân đoạn mạng, hoặc hạ tầng mạng/phần mềm định nghĩa theo chu vi). Đây là tài liệu định hướng khái niệm, không phải một sản phẩm hay tiêu chuẩn có thể chứng nhận, thường triển khai theo lộ trình nhiều giai đoạn.",
    sources: [{ type: "framework", refId: "nist-sp-800-207" }],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-cm12-t1",
    topicId: "CM-12",
    tier: "T1",
    kind: "dien_giai",
    body:
      "Ủy ban Basel về giám sát ngân hàng (BCBS) ban hành các nguyên tắc về khả năng chống chịu vận hành (operational resilience), yêu cầu ngân hàng xác định dịch vụ nghiệp vụ trọng yếu, thiết lập ngưỡng chịu đựng gián đoạn và kiểm chứng khả năng duy trì dịch vụ trong tình huống gián đoạn nghiêm trọng — bổ sung cho quản lý liên tục hoạt động truyền thống. BCBS 239 quy định nguyên tắc về năng lực tổng hợp dữ liệu rủi ro và báo cáo rủi ro, áp dụng cho ngân hàng có tầm quan trọng hệ thống. CHƯA XÁC MINH độc lập số hiệu/ngày ban hành ấn bản cụ thể trong kho dữ liệu này — chỉ dùng mô tả khái niệm chung, không trích dẫn điều khoản cụ thể.",
    sources: [{ type: "framework", refId: "basel-operational-resilience" }],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-cm13-t1",
    topicId: "CM-13",
    tier: "T1",
    kind: "dien_giai",
    body:
      "CIS Critical Security Controls (hiện v8.1, 2024) là danh mục 18 nhóm kiểm soát ưu tiên theo mức độ triển khai (Implementation Group 1–3, từ tổ chức nguồn lực hạn chế tới tổ chức phức tạp), tập trung vào các biện pháp phòng thủ có bằng chứng thực nghiệm về hiệu quả giảm thiểu tấn công phổ biến — ví dụ kiểm kê tài sản/phần mềm, quản lý điểm yếu, cấu hình an toàn, quản lý tài khoản. CIS Benchmarks là bộ hướng dẫn tăng cường cấu hình an toàn chi tiết theo từng nền tảng cụ thể (hệ điều hành, cơ sở dữ liệu, nền tảng đám mây...), thường dùng làm cơ sở đối chiếu khi kiểm tra tuân thủ cấu hình kỹ thuật.",
    sources: [{ type: "framework", refId: "cis-controls" }],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-cm14-t1",
    topicId: "CM-14",
    tier: "T1",
    kind: "dien_giai",
    body:
      "MITRE ATT&CK là cơ sở tri thức công khai về chiến thuật và kỹ thuật mà đối tượng tấn công sử dụng trong thực tế, tổ chức theo ma trận theo từng giai đoạn tấn công (trinh sát, xâm nhập ban đầu, duy trì hiện diện, leo thang đặc quyền...); được cập nhật thường xuyên nên cần tra cứu số phiên bản hiện hành khi trích dẫn một kỹ thuật cụ thể. MITRE D3FEND là cơ sở tri thức bổ sung, ánh xạ các biện pháp phòng thủ kỹ thuật tương ứng với từng kỹ thuật tấn công trong ATT&CK. Cả hai được dùng rộng rãi để xây dựng kịch bản săn tìm mối đe dọa, đánh giá độ phủ giám sát và thiết kế bài diễn tập đội đỏ/đội tím.",
    sources: [
      { type: "framework", refId: "mitre-attack" },
      { type: "framework", refId: "mitre-d3fend" }
    ],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-cm15-t1",
    topicId: "CM-15",
    tier: "T1",
    kind: "dien_giai",
    body:
      "Nhóm tài liệu này phục vụ các khía cạnh khác nhau của an toàn thông tin: OWASP Top 10 (bản 2025) liệt kê 10 nhóm rủi ro bảo mật ứng dụng web phổ biến nhất; OWASP ASVS 5.0 cung cấp danh mục yêu cầu kiểm chứng bảo mật ứng dụng theo 3 cấp độ, dùng làm tiêu chí kiểm thử/nghiệm thu; CSA Cloud Controls Matrix (CCM v4) là ma trận kiểm soát an toàn dành riêng cho môi trường đám mây, ánh xạ tới nhiều chuẩn khác; COBIT (bản phổ biến COBIT 2019, ISACA) là khung quản trị và quản lý CNTT doanh nghiệp, thường dùng cho mô hình ba tuyến phòng thủ và đo lường hiệu năng quản trị an ninh. OWASP SAMM hiện CHƯA XÁC MINH số phiên bản, không dùng làm căn cứ trích dẫn.",
    sources: [
      { type: "framework", refId: "owasp-top10" },
      { type: "framework", refId: "owasp-asvs" },
      { type: "framework", refId: "csa-ccm" },
      { type: "framework", refId: "cobit" }
    ],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  }
];
