/**
 * ContentBlock — nhom VH (Van hanh an ninh), tang T1.
 * Xem quy tac bat buoc o dau file src/content/topics/content-blocks.ts.
 * VH-06 da co trong content-blocks.ts, khong lap lai o day.
 */
import type { ContentBlock } from "../../data/schema/models";

export const contentBlocksVh: ContentBlock[] = [
  {
    id: "cb-vh01-t1",
    topicId: "VH-01",
    tier: "T1",
    kind: "dien_giai",
    body:
      "Trung tâm điều hành an ninh (Security Operations Center — SOC) là đơn vị (nội bộ, thuê ngoài, hoặc mô hình lai) chịu trách nhiệm giám sát liên tục tình trạng an toàn thông tin của tổ chức, phát hiện và xử lý ban đầu các sự kiện/sự cố an ninh. Mô hình tổ chức thường phân theo cấp bậc phân tích viên (Tier 1 — tiếp nhận và phân loại cảnh báo, Tier 2 — điều tra sâu, Tier 3 — săn tìm mối đe dọa và xử lý sự cố phức tạp), vận hành theo ca để đảm bảo giám sát 24/7 với hệ thống quan trọng. Quy trình cốt lõi của SOC gắn chặt với thu thập nhật ký và giám sát/phát hiện. NIST CSF 2.0 xếp năng lực này chủ yếu vào hàm Detect và Respond.",
    sources: [{ type: "framework", refId: "nist-csf" }],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-vh02-t1",
    topicId: "VH-02",
    tier: "T1",
    kind: "dien_giai",
    body:
      "Thu thập nhật ký (log) tập trung dữ liệu sự kiện từ nhiều nguồn (hệ điều hành, ứng dụng, thiết bị mạng, hệ thống bảo mật) về một nơi lưu trữ chung, thường qua giải pháp SIEM. Chuẩn hóa (normalization) chuyển đổi các định dạng nhật ký khác nhau về một cấu trúc chung để có thể tương quan sự kiện giữa các nguồn. Chính sách lưu trữ (retention) xác định thời gian giữ nhật ký tùy mục đích: điều tra sự cố gần, phân tích xu hướng dài hạn, hoặc phục vụ yêu cầu của cơ quan quản lý/kiểm toán. ISO/IEC 27002:2022 có kiểm soát riêng về ghi nhật ký sự kiện và bảo vệ nhật ký khỏi bị sửa đổi trái phép; NIST SP 800-53 (họ Audit and Accountability) quy định chi tiết về nội dung và thời gian lưu trữ.",
    sources: [
      { type: "framework", refId: "iso27002" },
      { type: "framework", refId: "nist-sp-800-53" }
    ],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-vh03-t1",
    topicId: "VH-03",
    tier: "T1",
    kind: "dien_giai",
    body:
      "Giám sát an ninh liên tục phân tích các sự kiện nhật ký và lưu lượng để phát hiện dấu hiệu bất thường hoặc dấu hiệu xâm nhập, dựa trên quy tắc phát hiện, ngưỡng thống kê, hoặc mô hình học máy. Phân loại cảnh báo (alert triage) là bước xác định mức độ ưu tiên xử lý cho từng cảnh báo — phân biệt cảnh báo giả (false positive), cảnh báo ý nghĩa thấp và cảnh báo cần điều tra/leo thang ngay — nhằm tối ưu nguồn lực phân tích viên trước khối lượng cảnh báo lớn. Khung MITRE ATT&CK thường dùng để đánh giá độ phủ phát hiện (detection coverage) theo từng kỹ thuật tấn công, giúp xác định khoảng trống giám sát cần bổ sung.",
    sources: [
      { type: "framework", refId: "nist-csf" },
      { type: "framework", refId: "mitre-attack" }
    ],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-vh04-t1",
    topicId: "VH-04",
    tier: "T1",
    kind: "dien_giai",
    body:
      "Săn tìm mối đe dọa (threat hunting) là hoạt động chủ động, có giả thuyết dẫn dắt, nhằm tìm kiếm dấu hiệu xâm nhập chưa được phát hiện bởi các quy tắc cảnh báo tự động hiện có — khác giám sát bị động ở chỗ vốn phản ứng theo cảnh báo đã cấu hình sẵn. Quy trình thường bắt đầu từ một giả thuyết (dựa trên tình báo mối đe dọa mới hoặc một kỹ thuật tấn công cụ thể trong MITRE ATT&CK), sau đó truy vấn dữ liệu nhật ký/telemetry để xác nhận hoặc bác bỏ giả thuyết đó. Kết quả săn tìm thường dẫn tới xây dựng quy tắc phát hiện mới, khép kín vòng lặp cải tiến giữa hoạt động chủ động và giám sát tự động của SOC.",
    sources: [
      { type: "framework", refId: "mitre-attack" },
      { type: "framework", refId: "nist-csf" }
    ],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-vh05-t1",
    topicId: "VH-05",
    tier: "T1",
    kind: "dien_giai",
    body:
      "Tình báo mối đe dọa (threat intelligence) là thông tin đã qua xử lý và phân tích về đối tượng tấn công, chiến thuật, kỹ thuật và mục tiêu tiềm năng, giúp tổ chức ra quyết định phòng thủ chủ động thay vì chỉ phản ứng. Chỉ dấu xâm nhập (IOC) là dữ liệu kỹ thuật cụ thể cho thấy khả năng đã bị xâm nhập (địa chỉ IP độc hại, mã băm tệp tin, tên miền độc hại...), thường có giá trị ngắn hạn vì đối tượng tấn công thay đổi hạ tầng liên tục — khác chỉ dấu về kỹ thuật tấn công (theo MITRE ATT&CK) vốn ổn định và có giá trị lâu dài hơn khi xây dựng quy tắc phát hiện. Tình báo mối đe dọa chất lượng cần được thẩm định độ tin cậy nguồn trước khi đưa vào vận hành.",
    sources: [{ type: "framework", refId: "mitre-attack" }],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-vh07-t1",
    topicId: "VH-07",
    tier: "T1",
    kind: "dien_giai",
    body:
      "Điều tra số (digital forensics) thu thập, phân tích dữ liệu kỹ thuật số để xác định nguyên nhân gốc, phạm vi và dòng thời gian của một sự cố an ninh, phục vụ cả mục đích khắc phục kỹ thuật lẫn khả năng sử dụng làm bằng chứng pháp lý nếu cần. Bảo quản chứng cứ yêu cầu duy trì chuỗi lưu giữ (chain of custody) — ghi nhận đầy đủ ai đã tiếp cận bằng chứng, khi nào, bằng cách nào — cùng việc tạo bản sao pháp y (forensic image) trước khi phân tích để không làm thay đổi dữ liệu gốc. Đây là một phần của hoạt động ứng phó sự cố, thường được NIST SP 800-61 đề cập trong giai đoạn phân tích và xử lý sự cố.",
    sources: [{ type: "framework", refId: "nist-sp-800-61" }],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-vh08-t1",
    topicId: "VH-08",
    tier: "T1",
    kind: "dien_giai",
    body:
      "Quản lý khủng hoảng xử lý các sự cố có tác động vượt ra ngoài phạm vi kỹ thuật thuần túy — ảnh hưởng hoạt động kinh doanh, uy tín hoặc nghĩa vụ pháp lý — đòi hỏi sự tham gia của lãnh đạo cấp cao ngoài đội ứng phó sự cố kỹ thuật, thường qua một ban chỉ đạo khủng hoảng được kích hoạt theo tiêu chí xác định trước. Truyền thông sự cố cần có kế hoạch riêng: thông điệp nhất quán, người phát ngôn được chỉ định, quy trình phối hợp thông tin nội bộ, khách hàng và cơ quan quản lý — tránh thông tin không nhất quán làm trầm trọng thêm khủng hoảng. ISO 22301 và NIST SP 800-61 đều đề cập sự phối hợp giữa ứng phó sự cố kỹ thuật và quản lý khủng hoảng/truyền thông ở cấp tổ chức.",
    sources: [
      { type: "framework", refId: "iso22301" },
      { type: "framework", refId: "nist-sp-800-61" }
    ],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  }
];
