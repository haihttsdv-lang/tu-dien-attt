/**
 * ContentBlock — nhom QT (Quan tri va quan ly ATTT), tang T1.
 * Xem quy tac bat buoc o dau file src/content/topics/content-blocks.ts.
 * QT-03 da co trong content-blocks.ts, khong lap lai o day.
 */
import type { ContentBlock } from "../../data/schema/models";

export const contentBlocksQt: ContentBlock[] = [
  {
    id: "cb-qt01-t1",
    topicId: "QT-01",
    tier: "T1",
    kind: "dien_giai",
    body:
      "Thiết lập Hệ thống quản lý an toàn thông tin (ISMS) theo ISO/IEC 27001:2022 bắt đầu từ việc xác định phạm vi (scope) — ranh giới tổ chức, địa điểm, tài sản và công nghệ được đưa vào hệ thống quản lý — dựa trên phân tích bối cảnh nội bộ/bên ngoài và nhu cầu, kỳ vọng của các bên quan tâm. Cam kết lãnh đạo là yêu cầu bắt buộc: ban lãnh đạo cao nhất phải thiết lập chính sách an toàn thông tin, đảm bảo mục tiêu ISMS phù hợp định hướng chiến lược, phân bổ nguồn lực và phân công vai trò/trách nhiệm rõ ràng. Phạm vi ISMS xác định không đầy đủ là nguyên nhân phổ biến khiến chứng nhận không phản ánh đúng rủi ro thực tế của tổ chức.",
    sources: [{ type: "framework", refId: "iso27001" }],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-qt02-t1",
    topicId: "QT-02",
    tier: "T1",
    kind: "dien_giai",
    body:
      "Hệ thống tài liệu an toàn thông tin thường tổ chức theo 4 cấp: chính sách (policy) — định hướng và cam kết cấp cao, ít thay đổi; tiêu chuẩn (standard) — yêu cầu bắt buộc cụ thể hóa chính sách; quy trình (procedure) — các bước thực hiện chi tiết, có chủ sở hữu và tần suất rà soát; hướng dẫn (guideline) — khuyến nghị thực hành, không bắt buộc tuyệt đối. ISO/IEC 27001:2022 yêu cầu tổ chức duy trì và kiểm soát 'thông tin dạng văn bản' (documented information) tương ứng với quy mô, độ phức tạp và mức độ rủi ro của tổ chức, bao gồm phê duyệt, rà soát định kỳ, kiểm soát phiên bản và phân phối.",
    sources: [{ type: "framework", refId: "iso27001" }],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-qt04-t1",
    topicId: "QT-04",
    tier: "T1",
    kind: "dien_giai",
    body:
      "Sổ đăng ký rủi ro (risk register) là công cụ ghi nhận có hệ thống các rủi ro an toàn thông tin đã nhận diện: mô tả rủi ro, tài sản/quy trình liên quan, chủ sở hữu rủi ro, mức rủi ro hiện tại (khả năng × tác động), biện pháp xử lý và mức rủi ro còn lại sau xử lý. Khẩu vị rủi ro (risk appetite) là mức độ rủi ro mà tổ chức sẵn sàng chấp nhận để đạt mục tiêu, do cấp quản trị cao nhất phê duyệt, dùng làm ngưỡng tham chiếu khi quyết định một rủi ro cần xử lý thêm hay có thể chấp nhận. Theo ISO/IEC 27005:2022 và hàm Govern của NIST CSF 2.0, hai công cụ này phải được rà soát định kỳ, không phải hồ sơ tĩnh.",
    sources: [
      { type: "framework", refId: "iso27005" },
      { type: "framework", refId: "nist-csf" }
    ],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-qt05-t1",
    topicId: "QT-05",
    tier: "T1",
    kind: "dien_giai",
    body:
      "Quản lý tài sản thông tin bắt đầu từ việc lập và duy trì kiểm kê (inventory) đầy đủ các tài sản thông tin — dữ liệu, phần mềm, phần cứng, dịch vụ — kèm chủ sở hữu tài sản chịu trách nhiệm bảo vệ. Phân loại thông tin (information classification) gán nhãn mức độ nhạy cảm (công khai, nội bộ, bí mật...) dựa trên tác động nếu bị lộ, thay đổi hoặc mất khả năng truy cập, từ đó xác định biện pháp bảo vệ tương ứng (mã hóa, kiểm soát truy cập, quy tắc xử lý/tiêu hủy). ISO/IEC 27002:2022 xếp nhóm kiểm soát này trong chủ đề Tổ chức, coi kiểm kê và phân loại tài sản là điều kiện tiên quyết để áp dụng các kiểm soát khác một cách có mục tiêu.",
    sources: [{ type: "framework", refId: "iso27002" }],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-qt06-t1",
    topicId: "QT-06",
    tier: "T1",
    kind: "dien_giai",
    body:
      "Quản lý rủi ro bên thứ ba đánh giá và kiểm soát rủi ro an toàn thông tin phát sinh từ nhà cung cấp, đối tác, đơn vị thuê ngoài trong toàn bộ vòng đời quan hệ: thẩm định trước khi ký hợp đồng, điều khoản an toàn thông tin trong hợp đồng (bao gồm quyền kiểm tra/đánh giá), giám sát liên tục, và kế hoạch xử lý khi chấm dứt quan hệ (thu hồi quyền truy cập, hoàn trả/hủy dữ liệu). ISO/IEC 27002:2022 có nhóm kiểm soát riêng cho quan hệ với nhà cung cấp; NIST CSF 2.0 đưa quản lý rủi ro chuỗi cung ứng thành hạng mục riêng trong hàm Govern, phản ánh mức độ quan trọng ngày càng tăng của rủi ro này, đặc biệt với chuỗi cung ứng phần mềm.",
    sources: [
      { type: "framework", refId: "iso27002" },
      { type: "framework", refId: "nist-csf" }
    ],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-qt07-t1",
    topicId: "QT-07",
    tier: "T1",
    kind: "dien_giai",
    body:
      "Quản lý ngoại lệ xử lý các trường hợp một hệ thống/quy trình không thể tuân thủ đầy đủ một chính sách hoặc kiểm soát bắt buộc trong một khoảng thời gian nhất định. Thực hành phổ biến: yêu cầu ngoại lệ phải được cấp có thẩm quyền phù hợp phê duyệt (tương xứng mức rủi ro), nêu rõ lý do, biện pháp giảm thiểu tạm thời (compensating control), thời hạn hiệu lực xác định và kế hoạch khắc phục dứt điểm. Chấp nhận rủi ro có thời hạn không phải là bỏ qua rủi ro vĩnh viễn — theo nguyên tắc xử lý rủi ro của ISO/IEC 27005:2022, một rủi ro được 'chấp nhận' vẫn cần ghi nhận trong sổ đăng ký rủi ro và rà soát lại khi hết hạn hoặc khi bối cảnh thay đổi.",
    sources: [{ type: "framework", refId: "iso27005" }],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-qt08-t1",
    topicId: "QT-08",
    tier: "T1",
    kind: "dien_giai",
    body:
      "Đào tạo nhận thức an toàn thông tin nhằm trang bị cho toàn bộ nhân sự khả năng nhận biết và ứng xử đúng trước các rủi ro phổ biến (lừa đảo, kỹ nghệ xã hội, xử lý thông tin nhạy cảm), thường tổ chức định kỳ và bắt buộc với nhân viên mới. Diễn tập lừa đảo (phishing simulation) là hình thức đánh giá thực hành: gửi email/tin nhắn giả lập có kiểm soát để đo tỷ lệ nhân viên bấm vào liên kết hoặc cung cấp thông tin, từ đó xác định nhóm cần đào tạo bổ sung thay vì xử lý kỷ luật. ISO/IEC 27002:2022 xếp nhận thức, đào tạo an toàn thông tin vào nhóm kiểm soát Con người, coi đây là kiểm soát bắt buộc song song với các kiểm soát kỹ thuật.",
    sources: [{ type: "framework", refId: "iso27002" }],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-qt09-t1",
    topicId: "QT-09",
    tier: "T1",
    kind: "dien_giai",
    body:
      "Chỉ số hiệu năng (KPI) đo mức độ hoàn thành mục tiêu chương trình an toàn thông tin (ví dụ tỷ lệ vá lỗ hổng đúng hạn, thời gian trung bình phát hiện/xử lý sự cố); chỉ số rủi ro trọng yếu (KRI) là tín hiệu cảnh báo sớm về khả năng rủi ro gia tăng. Báo cáo cấp lãnh đạo cần chuyển hóa các chỉ số kỹ thuật này thành ngôn ngữ rủi ro kinh doanh, gắn với khẩu vị rủi ro đã phê duyệt. ISO/IEC 27001:2022 yêu cầu đánh giá hiệu năng ISMS định kỳ (giám sát, đo lường, đánh giá nội bộ, xem xét của lãnh đạo) làm cơ sở cho việc cải tiến liên tục.",
    sources: [{ type: "framework", refId: "iso27001" }],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-qt10-t1",
    topicId: "QT-10",
    tier: "T1",
    kind: "dien_giai",
    body:
      "Lập ngân sách và ưu tiên đầu tư an ninh thông tin đòi hỏi gắn khoản đầu tư với rủi ro cụ thể đã được nhận diện và mức độ ưu tiên trong sổ đăng ký rủi ro, thay vì phân bổ theo tỷ lệ cố định trên ngân sách CNTT. Luận chứng đầu tư (business case) hiệu quả thường trình bày rủi ro nếu không đầu tư, các phương án lựa chọn, chi phí — bao gồm cả chi phí vận hành liên tục — và cách đo lường hiệu quả sau triển khai. COBIT (khung quản trị và quản lý CNTT doanh nghiệp của ISACA) có nhóm mục tiêu quản trị liên quan tới quản lý danh mục đầu tư và tối ưu hóa nguồn lực, thường được tham chiếu khi xây dựng cơ chế ra quyết định đầu tư an ninh có hệ thống.",
    sources: [{ type: "framework", refId: "cobit" }],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-qt11-t1",
    topicId: "QT-11",
    tier: "T1",
    kind: "dien_giai",
    body:
      "Phân định vai trò và trách nhiệm rõ ràng là điều kiện tiên quyết để một chương trình an toàn thông tin vận hành hiệu quả, tránh chồng chéo hoặc bỏ sót trách nhiệm. Ma trận RACI (Responsible, Accountable, Consulted, Informed) là công cụ phổ biến để làm rõ vai trò cho từng hoạt động hoặc kiểm soát cụ thể, đặc biệt quan trọng khi trách nhiệm trải rộng qua nhiều đơn vị (CNTT, an ninh thông tin, nghiệp vụ, pháp chế, kiểm toán nội bộ). ISO/IEC 27001:2022 yêu cầu lãnh đạo cao nhất phân công và truyền đạt vai trò, trách nhiệm liên quan tới an toàn thông tin như một điều kiện bắt buộc của hệ thống quản lý.",
    sources: [{ type: "framework", refId: "iso27001" }],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-qt12-t1",
    topicId: "QT-12",
    tier: "T1",
    kind: "dien_giai",
    body:
      "Văn hóa an toàn thông tin là mức độ mà các giá trị, thái độ và hành vi liên quan tới bảo vệ thông tin được toàn thể nhân sự — không riêng bộ phận an ninh — coi là trách nhiệm chung, vượt ra ngoài việc tuân thủ chính sách hình thức. Xây dựng văn hóa an toàn đòi hỏi cách tiếp cận dài hạn: lãnh đạo làm gương, truyền thông liên tục thay vì đào tạo một lần, cơ chế khuyến khích báo cáo sự cố/sai sót mà không bị trừng phạt (just culture), và đo lường thay đổi hành vi thay vì chỉ đo tỷ lệ hoàn thành khóa đào tạo. ISO/IEC 27002:2022 coi đây là nền tảng cho hiệu quả của toàn bộ nhóm kiểm soát Con người.",
    sources: [{ type: "framework", refId: "iso27002" }],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  }
];
