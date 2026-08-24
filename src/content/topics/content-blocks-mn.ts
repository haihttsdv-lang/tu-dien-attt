/**
 * ContentBlock — nhom MN (Cong nghe va rui ro moi noi), tang T1.
 * Xem quy tac bat buoc o dau file src/content/topics/content-blocks.ts.
 */
import type { ContentBlock } from "../../data/schema/models";

export const contentBlocksMn: ContentBlock[] = [
  {
    id: "cb-mn01-t1",
    topicId: "MN-01",
    tier: "T1",
    kind: "dien_giai",
    body:
      "Rủi ro an toàn của trí tuệ nhân tạo và mô hình ngôn ngữ lớn (LLM) bao gồm các nhóm mới so với rủi ro CNTT truyền thống: tấn công chèn lệnh (prompt injection) khiến mô hình thực hiện hành vi ngoài ý muốn, rò rỉ dữ liệu huấn luyện hoặc dữ liệu ngữ cảnh nhạy cảm qua câu trả lời của mô hình, và hiện tượng mô hình tạo ra thông tin sai lệch nhưng trình bày với độ tự tin cao (hallucination) có thể dẫn tới quyết định sai nếu không được kiểm chứng lại. Khi tích hợp LLM vào quy trình nghiệp vụ, cần áp dụng nguyên tắc quản lý rủi ro tương tự các hệ thống công nghệ khác — nhận diện, phân tích, xử lý theo ISO/IEC 27005:2022 — kèm kiểm soát bổ sung đặc thù AI như giám sát đầu ra và giới hạn phạm vi hành động tự động của mô hình.",
    sources: [{ type: "framework", refId: "iso27005" }],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-mn02-t1",
    topicId: "MN-02",
    tier: "T1",
    kind: "dien_giai",
    body:
      "Quản trị việc sử dụng AI trong hoạt động ngân hàng đòi hỏi cơ chế phê duyệt và giám sát riêng cho các mô hình AI/machine learning được đưa vào vận hành, đặc biệt các mô hình ảnh hưởng trực tiếp tới quyết định liên quan tới khách hàng (chấm điểm tín dụng, phát hiện gian lận, tư vấn đầu tư tự động): xác định chủ sở hữu mô hình, đánh giá độ chệch (bias) và khả năng giải thích được trước khi triển khai, giám sát suy giảm hiệu năng mô hình theo thời gian (model drift), và quy trình xử lý khi mô hình đưa ra quyết định sai. Đây là mở rộng của nguyên tắc quản trị CNTT doanh nghiệp (COBIT) sang một loại tài sản công nghệ mới, đồng thời cần gắn với khung quản trị rủi ro tổng thể theo NIST CSF 2.0 (hàm Govern).",
    sources: [
      { type: "framework", refId: "cobit" },
      { type: "framework", refId: "nist-csf" }
    ],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-mn03-t1",
    topicId: "MN-03",
    tier: "T1",
    kind: "dien_giai",
    body:
      "Máy tính lượng tử đủ mạnh trong tương lai có khả năng phá vỡ các thuật toán mật mã bất đối xứng đang sử dụng rộng rãi (RSA, ECC), đe dọa tính bảo mật lâu dài của dữ liệu đã mã hóa bị đánh cắp và lưu trữ chờ giải mã sau này. Mật mã hậu lượng tử (Post-Quantum Cryptography — PQC) là các thuật toán mới được thiết kế để chống lại cả máy tính cổ điển lẫn máy tính lượng tử, đang trong quá trình chuẩn hóa và dần được đưa vào các thuật toán/giao thức mật mã hiện có. Xây dựng lộ trình chuyển đổi đòi hỏi trước tiên kiểm kê đầy đủ nơi đang sử dụng mật mã bất đối xứng (crypto inventory) — kiểm soát mật mã và quản lý khóa được đề cập trong ISO/IEC 27002:2022 và NIST SP 800-53.",
    sources: [
      { type: "framework", refId: "iso27002" },
      { type: "framework", refId: "nist-sp-800-53" }
    ],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-mn04-t1",
    topicId: "MN-04",
    tier: "T1",
    kind: "dien_giai",
    body:
      "Rủi ro chuỗi cung ứng phần mềm phát sinh từ việc phần mềm hiện đại phụ thuộc vào rất nhiều thành phần mã nguồn mở và thư viện bên thứ ba, mỗi thành phần là một điểm có thể bị khai thác nếu chứa lỗ hổng hoặc bị chèn mã độc. Kiểm soát phổ biến gồm: duy trì danh mục thành phần phần mềm (Software Bill of Materials — SBOM) cho từng ứng dụng, quét lỗ hổng tự động cho các thư viện phụ thuộc trong quy trình phát triển (không chỉ quét mã tự viết), và thẩm định nguồn gốc/uy tín của thành phần mã nguồn mở trước khi sử dụng. NIST SP 800-53 có họ kiểm soát riêng về quản lý rủi ro chuỗi cung ứng (Supply Chain Risk Management); ISO/IEC 27002:2022 đề cập trong nhóm kiểm soát về quan hệ nhà cung cấp.",
    sources: [
      { type: "framework", refId: "nist-sp-800-53" },
      { type: "framework", refId: "iso27002" }
    ],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-mn05-t1",
    topicId: "MN-05",
    tier: "T1",
    kind: "dien_giai",
    body:
      "Công nghệ sổ cái phân tán (Distributed Ledger Technology — DLT, bao gồm blockchain) và tài sản số mang lại rủi ro đặc thù khác với hệ thống tập trung truyền thống: tính bất biến của sổ cái nghĩa là một giao dịch sai/gian lận đã ghi nhận rất khó hoặc không thể đảo ngược; quản lý khóa riêng tư (private key) trở thành điểm kiểm soát sống còn — mất khóa đồng nghĩa mất quyền kiểm soát tài sản vĩnh viễn; và rủi ro tại các điểm giao tiếp giữa hệ thống on-chain và hệ thống ngân hàng truyền thống khi tài sản số được quy đổi. Do đây là lĩnh vực công nghệ mới nổi, nguyên tắc quản lý rủi ro chung theo ISO/IEC 27005:2022 áp dụng được, nhưng cần bổ sung đánh giá rủi ro đặc thù cho từng mô hình triển khai — chưa có khung kiểm soát chuyên biệt được xác minh trong kho dữ liệu này.",
    sources: [{ type: "framework", refId: "iso27005" }],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-mn06-t1",
    topicId: "MN-06",
    tier: "T1",
    kind: "dien_giai",
    body:
      "Giả mạo bằng AI (deepfake) tạo ra hình ảnh, âm thanh hoặc video giả mạo giọng nói/khuôn mặt của một cá nhân cụ thể với độ chân thực ngày càng cao, được sử dụng trong gian lận danh tính — ví dụ giả giọng lãnh đạo để yêu cầu chuyển tiền khẩn cấp, hoặc giả khuôn mặt để vượt qua bước xác thực sinh trắc học từ xa trong quy trình định danh khách hàng điện tử. Kiểm soát ứng phó gồm: quy trình xác minh qua kênh độc lập thứ hai (out-of-band) cho các yêu cầu giao dịch/thay đổi nhạy cảm bất kể mức độ khẩn cấp được viện dẫn, công nghệ phát hiện dấu hiệu giả mạo (liveness detection nâng cao), và đào tạo nhận thức cho nhân viên/khách hàng về thủ đoạn này. Đây là rủi ro mới nổi chưa có khung kiểm soát chuyên biệt được xác minh trong kho dữ liệu này — nguyên tắc chung tham chiếu ISO/IEC 27002:2022 và NIST CSF 2.0.",
    sources: [
      { type: "framework", refId: "iso27002" },
      { type: "framework", refId: "nist-csf" }
    ],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  }
];
