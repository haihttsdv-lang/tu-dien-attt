/**
 * ContentBlock — nhom KG (Kiem tra, giam sat va kiem toan), tang T1.
 * Xem quy tac bat buoc o dau file src/content/topics/content-blocks.ts.
 */
import type { ContentBlock } from "../../data/schema/models";

export const contentBlocksKg: ContentBlock[] = [
  {
    id: "cb-kg01-t1",
    topicId: "KG-01",
    tier: "T1",
    kind: "dien_giai",
    body:
      "Mô hình ba tuyến phòng thủ (Three Lines Model, cập nhật 2020 bởi IIA) phân định trách nhiệm quản lý rủi ro trong tổ chức: tuyến một là các đơn vị nghiệp vụ/vận hành trực tiếp sở hữu và quản lý rủi ro hằng ngày; tuyến hai là các chức năng giám sát rủi ro và tuân thủ (quản lý rủi ro, an toàn thông tin) thiết lập khung kiểm soát và giám sát độc lập với tuyến một; tuyến ba là kiểm toán nội bộ, đánh giá độc lập tính đầy đủ và hiệu quả của cả hai tuyến trước, báo cáo trực tiếp cho hội đồng quản trị/ban kiểm soát. Mô hình này là nền tảng để tổ chức việc kiểm tra, giám sát trong khung quản trị doanh nghiệp như COBIT.",
    sources: [{ type: "framework", refId: "cobit" }],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-kg02-t1",
    topicId: "KG-02",
    tier: "T1",
    kind: "dien_giai",
    body:
      "Lập kế hoạch kiểm toán dựa trên rủi ro ưu tiên nguồn lực kiểm toán vào các lĩnh vực có rủi ro cao nhất thay vì kiểm toán dàn trải hoặc theo chu kỳ cố định. Quy trình thường gồm: xây dựng vũ trụ kiểm toán (audit universe) liệt kê toàn bộ đối tượng có thể kiểm toán, đánh giá rủi ro cho từng đối tượng (tác động tài chính, mức độ phức tạp, kết quả kiểm toán trước, thay đổi gần đây), và phân bổ tần suất/độ sâu kiểm toán tương ứng. Kế hoạch cần được cập nhật định kỳ khi bối cảnh rủi ro của tổ chức thay đổi, dựa trên đầu vào từ sổ đăng ký rủi ro của tuyến một/hai (ISO/IEC 27005:2022) và khung quản trị CNTT như COBIT.",
    sources: [
      { type: "framework", refId: "iso27005" },
      { type: "framework", refId: "cobit" }
    ],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-kg03-t1",
    topicId: "KG-03",
    tier: "T1",
    kind: "dien_giai",
    body:
      "Chương trình kiểm toán (audit program) cụ thể hóa mục tiêu, phạm vi và các thủ tục kiểm toán cần thực hiện cho một chủ đề kiểm toán cụ thể — ví dụ kiểm toán quản lý truy cập, kiểm toán quản lý thay đổi — bao gồm tiêu chí đánh giá và phương pháp thu thập bằng chứng cho từng thủ tục. Thủ tục kiểm toán theo chủ đề thường được xây dựng dựa trên các khung kiểm soát phổ biến (nhóm kiểm soát của ISO/IEC 27002:2022 hoặc mục tiêu quản trị của COBIT) để đảm bảo tính nhất quán và có thể lặp lại giữa các kỳ kiểm toán, đồng thời điều chỉnh theo đặc thù rủi ro của từng tổ chức.",
    sources: [
      { type: "framework", refId: "cobit" },
      { type: "framework", refId: "iso27002" }
    ],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-kg04-t1",
    topicId: "KG-04",
    tier: "T1",
    kind: "dien_giai",
    body:
      "Thu thập bằng chứng kiểm toán cần đảm bảo tính đầy đủ, phù hợp và đáng tin cậy — ưu tiên bằng chứng trực tiếp quan sát được hoặc trích xuất từ hệ thống hơn xác nhận bằng lời của đơn vị được kiểm toán. Khi không thể kiểm tra toàn bộ tổng thể, kiểm toán viên áp dụng phương pháp chọn mẫu (thống kê hoặc phi thống kê) với cỡ mẫu và tiêu chí chọn được xác định trước, đảm bảo mẫu đại diện cho tổng thể. Với kiểm toán an toàn thông tin, bằng chứng phổ biến gồm cấu hình hệ thống, nhật ký hệ thống, biên bản phê duyệt, và kết quả kiểm thử kỹ thuật độc lập — các nguyên tắc chung này phù hợp với khung quản trị/kiểm toán CNTT như COBIT.",
    sources: [{ type: "framework", refId: "cobit" }],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-kg05-t1",
    topicId: "KG-05",
    tier: "T1",
    kind: "dien_giai",
    body:
      "Hồ sơ làm việc (working papers) ghi nhận đầy đủ quá trình thực hiện kiểm toán: thủ tục đã áp dụng, bằng chứng thu thập, phân tích và kết luận cho từng phát hiện — đủ chi tiết để một kiểm toán viên khác có thể hiểu và tái lập kết luận đó mà không cần hỏi lại người thực hiện ban đầu. Chính sách lưu trữ hồ sơ kiểm toán xác định thời gian giữ hồ sơ, thường cân đối giữa yêu cầu có thể tra cứu lại khi có khiếu nại/thanh tra và nguyên tắc không lưu giữ dữ liệu nhạy cảm lâu hơn mức cần thiết. Đây là thực hành chuẩn mực nghề nghiệp kiểm toán nội bộ, phù hợp với nguyên tắc quản trị của khung COBIT khi áp dụng cho kiểm toán CNTT/an toàn thông tin.",
    sources: [{ type: "framework", refId: "cobit" }],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-kg06-t1",
    topicId: "KG-06",
    tier: "T1",
    kind: "dien_giai",
    body:
      "Phát hiện kiểm toán thường được phân loại theo mức độ nghiêm trọng (cao/trung bình/thấp) dựa trên tác động tiềm tàng nếu không khắc phục và khả năng xảy ra, giúp đơn vị được kiểm toán và lãnh đạo ưu tiên xử lý đúng mức. Mỗi phát hiện cần đi kèm kiến nghị khắc phục cụ thể, khả thi và có chủ sở hữu chịu trách nhiệm cùng thời hạn hoàn thành xác định. Theo dõi khắc phục là quá trình kiểm toán nội bộ xác nhận độc lập rằng biện pháp khắc phục đã được triển khai thực sự hiệu quả — không chỉ dựa trên báo cáo tự nhận của đơn vị được kiểm toán — trước khi đóng phát hiện, một nguyên tắc quản trị phổ biến trong các khung như COBIT.",
    sources: [{ type: "framework", refId: "cobit" }],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-kg07-t1",
    topicId: "KG-07",
    tier: "T1",
    kind: "dien_giai",
    body:
      "Đánh giá tính đầy đủ của kiểm soát (control adequacy) xem xét liệu kiểm soát đã được thiết kế có đủ để giảm thiểu rủi ro xuống mức chấp nhận được hay chưa — đánh giá về mặt thiết kế. Đánh giá tính hiệu quả (effectiveness) kiểm tra liệu kiểm soát đó có thực sự vận hành đúng như thiết kế trong thực tế hay không, thường qua kiểm thử vận hành trên một mẫu giao dịch/sự kiện trong kỳ đánh giá. Một kiểm soát có thiết kế đầy đủ nhưng vận hành không hiệu quả (ví dụ không được thực hiện đều đặn) vẫn để lại rủi ro tồn dư đáng kể. ISO/IEC 27001:2022 yêu cầu đánh giá hiệu năng kiểm soát định kỳ như một phần của đánh giá nội bộ ISMS.",
    sources: [{ type: "framework", refId: "iso27001" }],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-kg08-t1",
    topicId: "KG-08",
    tier: "T1",
    kind: "dien_giai",
    body:
      "Giám sát kiểm soát liên tục (continuous control monitoring) sử dụng công cụ tự động để kiểm tra thường xuyên — thay vì theo chu kỳ kiểm toán định kỳ — việc các kiểm soát chính có đang vận hành đúng hay không, dựa trên dữ liệu trích xuất trực tiếp từ hệ thống. Kiểm toán liên tục (continuous auditing) mở rộng cách tiếp cận này sang chức năng kiểm toán nội bộ, cho phép phát hiện sai lệch gần theo thời gian thực thay vì chỉ tại thời điểm kiểm toán theo kế hoạch. Hai thực hành này bổ trợ cho mô hình ba tuyến phòng thủ, giúp tuyến hai/ba có tín hiệu sớm hơn về suy giảm hiệu quả kiểm soát, phù hợp định hướng của NIST CSF 2.0 và khung quản trị COBIT.",
    sources: [
      { type: "framework", refId: "nist-csf" },
      { type: "framework", refId: "cobit" }
    ],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-kg09-t1",
    topicId: "KG-09",
    tier: "T1",
    kind: "dien_giai",
    body:
      "Làm việc với đoàn thanh tra của cơ quan quản lý nhà nước hoặc kiểm toán độc lập bên ngoài đòi hỏi tổ chức chuẩn bị đầu mối phối hợp rõ ràng, quy trình cung cấp tài liệu/bằng chứng có kiểm soát, và cơ chế theo dõi riêng cho các kiến nghị từ bên ngoài — thường có mức độ ưu tiên và yêu cầu báo cáo tiến độ khắt khe hơn kiến nghị từ kiểm toán nội bộ. Vai trò của kiểm toán nội bộ (tuyến ba trong mô hình ba tuyến phòng thủ) thường bao gồm hỗ trợ điều phối nội bộ trong các đợt thanh tra/kiểm toán độc lập, đồng thời duy trì tính độc lập trong đánh giá của chính mình — nguyên tắc quản trị được phản ánh trong các khung như COBIT.",
    sources: [{ type: "framework", refId: "cobit" }],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-kg10-t1",
    topicId: "KG-10",
    tier: "T1",
    kind: "dien_giai",
    body:
      "Tự đánh giá kiểm soát (Control Self-Assessment — CSA) là cơ chế trong đó chính đơn vị nghiệp vụ/vận hành (tuyến một) tự rà soát và báo cáo mức độ tuân thủ kiểm soát của mình theo bộ tiêu chí chuẩn hóa, dưới sự giám sát và thẩm định lại của tuyến hai hoặc kiểm toán nội bộ, không tự động chấp nhận nguyên trạng. Đánh giá tuân thủ nội bộ mở rộng cách tiếp cận này ra toàn bộ nghĩa vụ chính sách/quy định áp dụng cho đơn vị, không giới hạn ở kiểm soát an toàn thông tin. Hai công cụ này giúp mở rộng độ phủ giám sát vượt quá năng lực của một chương trình kiểm toán định kỳ đơn thuần, phù hợp nguyên tắc giám sát liên tục trong các khung quản trị như COBIT.",
    sources: [
      { type: "framework", refId: "cobit" },
      { type: "framework", refId: "iso27001" }
    ],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  }
];
