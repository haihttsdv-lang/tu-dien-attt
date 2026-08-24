/**
 * ContentBlock — nhom CC (Chong chiu va lien tuc hoat dong), tang T1.
 * Xem quy tac bat buoc o dau file src/content/topics/content-blocks.ts.
 * CC-01 da co trong content-blocks.ts, khong lap lai o day.
 */
import type { ContentBlock } from "../../data/schema/models";

export const contentBlocksCc: ContentBlock[] = [
  {
    id: "cb-cc02-t1",
    topicId: "CC-02",
    tier: "T1",
    kind: "dien_giai",
    body:
      "Phân tích tác động nghiệp vụ (Business Impact Analysis — BIA) xác định các quy trình/dịch vụ nghiệp vụ trọng yếu và ước lượng tác động (tài chính, pháp lý, uy tín, khách hàng) nếu các quy trình đó bị gián đoạn theo từng khoảng thời gian. Kết quả BIA là đầu vào trực tiếp để xác định chỉ tiêu thời gian khôi phục (RTO) và điểm khôi phục (RPO) cho từng hệ thống hỗ trợ quy trình đó, cũng như xác định nguồn lực tối thiểu cần thiết để duy trì hoạt động ở mức chấp nhận được trong tình huống gián đoạn. ISO 22301 coi BIA là bước bắt buộc trong giai đoạn hoạch định của Hệ thống quản lý liên tục hoạt động kinh doanh (BCMS), cần được cập nhật định kỳ khi quy trình nghiệp vụ hoặc mức độ phụ thuộc công nghệ thay đổi.",
    sources: [{ type: "framework", refId: "iso22301" }],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-cc03-t1",
    topicId: "CC-03",
    tier: "T1",
    kind: "dien_giai",
    body:
      "Kế hoạch khôi phục sau thảm họa (Disaster Recovery Plan — DRP) mô tả các bước kỹ thuật cụ thể để khôi phục hệ thống công nghệ thông tin sau một sự kiện gián đoạn nghiêm trọng, tập trung vào khía cạnh hạ tầng/hệ thống — khác kế hoạch liên tục hoạt động kinh doanh vốn bao quát cả yếu tố con người, quy trình và địa điểm làm việc thay thế. DRP cần nêu rõ vai trò/trách nhiệm khi kích hoạt, trình tự khôi phục hệ thống theo thứ tự ưu tiên (dựa trên kết quả BIA), và các chỉ tiêu RTO/RPO cần đạt được cho từng hệ thống. ISO 22301 yêu cầu kế hoạch khôi phục phải được kiểm chứng qua diễn tập định kỳ, không chỉ tồn tại dưới dạng tài liệu chưa qua thử nghiệm.",
    sources: [{ type: "framework", refId: "iso22301" }],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-cc04-t1",
    topicId: "CC-04",
    tier: "T1",
    kind: "dien_giai",
    body:
      "Chỉ tiêu thời gian khôi phục (Recovery Time Objective — RTO) là khoảng thời gian tối đa chấp nhận được để khôi phục một hệ thống/dịch vụ sau gián đoạn; chỉ tiêu điểm khôi phục (Recovery Point Objective — RPO) là khoảng thời gian tối đa chấp nhận được về dữ liệu có thể bị mất, tính từ thời điểm sự cố ngược về lần sao lưu/đồng bộ gần nhất. Hai chỉ tiêu này, xác định từ kết quả phân tích tác động nghiệp vụ, quyết định trực tiếp kiến trúc dự phòng cần đầu tư: RTO/RPO càng gần 0 càng đòi hỏi kiến trúc song song hoạt động tại nhiều trung tâm dữ liệu với đồng bộ dữ liệu gần thời gian thực, trong khi RTO/RPO nới lỏng hơn có thể chấp nhận mô hình dự phòng nguội chi phí thấp hơn. ISO 22301 dùng hai chỉ tiêu này làm thước đo cốt lõi khi hoạch định chiến lược liên tục hoạt động.",
    sources: [{ type: "framework", refId: "iso22301" }],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-cc05-t1",
    topicId: "CC-05",
    tier: "T1",
    kind: "dien_giai",
    body:
      "Sao lưu (backup) và khả năng phục hồi (restore) là tuyến phòng thủ cuối cùng khi các kiểm soát phòng ngừa khác thất bại, đặc biệt trước tấn công mã hóa tống tiền (ransomware) — nơi dữ liệu sản xuất và cả bản sao lưu kết nối trực tuyến có thể cùng bị mã hóa nếu không được cách ly đúng cách. Thực hành phổ biến gồm nguyên tắc sao lưu 3-2-1 (ít nhất 3 bản sao, trên 2 loại phương tiện khác nhau, 1 bản lưu ngoại vi/cách ly offline), kiểm thử khôi phục định kỳ để xác nhận bản sao lưu thực sự dùng được, và bảo vệ bản sao lưu khỏi bị sửa đổi/xóa (immutable backup). Công văn 1524/NHNN-CNTT (08/3/2023) là tài liệu hướng dẫn nghiệp vụ của NHNN về sao lưu và bảo đảm hoạt động liên tục cho hệ thống thông tin ngân hàng — không phải văn bản quy phạm pháp luật, chỉ dùng tham khảo thực hành.",
    sources: [
      { type: "legal_document", refId: "cv-1524-nhnn-cntt" },
      { type: "framework", refId: "iso22301" }
    ],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-cc06-t1",
    topicId: "CC-06",
    tier: "T1",
    kind: "dien_giai",
    body:
      "Diễn tập liên tục hoạt động kiểm chứng trên thực tế khả năng của tổ chức trong việc kích hoạt và thực hiện kế hoạch đã xây dựng, với nhiều hình thức tăng dần độ phức tạp: rà soát trên bàn giấy (tabletop exercise) thảo luận kịch bản mà không thao tác hệ thống thật, diễn tập chức năng kiểm tra một phần quy trình/hệ thống cụ thể, và diễn tập toàn diện mô phỏng chuyển đổi thực sự sang địa điểm/hệ thống dự phòng. Sau mỗi lần diễn tập (hoặc sự cố thực tế), rút bài học một cách có hệ thống — ghi nhận khoảng cách giữa kế hoạch và thực tế, cập nhật lại kế hoạch — là bước bắt buộc để chương trình liên tục hoạt động không trở thành tài liệu tĩnh. ISO 22301 yêu cầu chương trình diễn tập định kỳ như một phần của đánh giá hiệu năng BCMS.",
    sources: [{ type: "framework", refId: "iso22301" }],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  }
];
