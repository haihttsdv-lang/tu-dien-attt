/**
 * ContentBlock — nhom KT (Kien truc va ky thuat), tang T1.
 * Xem quy tac bat buoc o dau file src/content/topics/content-blocks.ts.
 * KT-03, KT-07, KT-12 da co trong content-blocks.ts, khong lap lai o day.
 */
import type { ContentBlock } from "../../data/schema/models";

export const contentBlocksKt: ContentBlock[] = [
  {
    id: "cb-kt01-t1",
    topicId: "KT-01",
    tier: "T1",
    kind: "dien_giai",
    body:
      "An toàn hạ tầng mạng bao gồm thiết kế kiến trúc theo nguyên tắc phòng thủ theo lớp: phân vùng mạng (network segmentation) tách biệt các vùng có mức độ nhạy cảm khác nhau (DMZ, nội bộ, hệ thống lõi), kiểm soát luồng dữ liệu giữa các vùng theo nguyên tắc chỉ cho phép những gì cần thiết (deny by default), và giám sát lưu lượng bất thường. Vi phân đoạn (micro-segmentation) là hình thức phân vùng chi tiết hơn, kiểm soát luồng traffic ở cấp máy chủ/khối lượng công việc, phù hợp với định hướng kiến trúc không tin cậy mặc định của NIST SP 800-207. ISO/IEC 27002:2022 xếp nhóm kiểm soát an toàn mạng trong chủ đề Công nghệ.",
    sources: [
      { type: "framework", refId: "iso27002" },
      { type: "framework", refId: "nist-sp-800-207" }
    ],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-kt02-t1",
    topicId: "KT-02",
    tier: "T1",
    kind: "dien_giai",
    body:
      "Quản lý định danh và truy cập (IAM) bao trùm toàn bộ vòng đời định danh số: cấp phát tài khoản khi gia nhập, điều chỉnh quyền khi thay đổi vị trí công việc, và thu hồi kịp thời khi chấm dứt quan hệ lao động/hợp đồng. Các nguyên tắc cốt lõi gồm đặc quyền tối thiểu (least privilege), phân tách nhiệm vụ (segregation of duties) để tránh một cá nhân kiểm soát toàn bộ quy trình nhạy cảm, và rà soát quyền truy cập định kỳ (access recertification). Xác thực đa yếu tố (MFA) là biện pháp kiểm soát bổ sung phổ biến cho hệ thống quan trọng. ISO/IEC 27002:2022 và NIST SP 800-53 (họ Access Control, Identification and Authentication) đều coi IAM là một trong những nhóm kiểm soát nền tảng nhất.",
    sources: [
      { type: "framework", refId: "iso27002" },
      { type: "framework", refId: "nist-sp-800-53" }
    ],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-kt04-t1",
    topicId: "KT-04",
    tier: "T1",
    kind: "dien_giai",
    body:
      "Kiểm soát mật mã bảo vệ tính bí mật và toàn vẹn dữ liệu khi lưu trữ (at rest) và truyền tải (in transit), thông qua lựa chọn thuật toán, độ dài khóa phù hợp với mức độ nhạy cảm dữ liệu, và chính sách quản lý khóa xuyên suốt vòng đời: sinh khóa, phân phối, lưu trữ, xoay vòng, thu hồi và hủy khóa. Thiết bị bảo mật phần cứng (HSM) là thiết bị chuyên dụng lưu trữ và thực hiện phép toán mật mã với khóa không bao giờ xuất hiện ở dạng rõ bên ngoài thiết bị, thường bắt buộc với hệ thống thanh toán và ký số có giá trị cao. ISO/IEC 27002:2022 có nhóm kiểm soát riêng về mật mã; NIST SP 800-53 (họ System and Communications Protection) quy định chi tiết kỹ thuật hơn.",
    sources: [
      { type: "framework", refId: "iso27002" },
      { type: "framework", refId: "nist-sp-800-53" }
    ],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-kt05-t1",
    topicId: "KT-05",
    tier: "T1",
    kind: "dien_giai",
    body:
      "An toàn điểm cuối và máy chủ tập trung vào giảm bề mặt tấn công của từng thiết bị: gỡ bỏ dịch vụ/phần mềm không cần thiết, đóng cổng mạng không sử dụng, áp dụng cấu hình an toàn theo baseline đã kiểm chứng thay vì cấu hình mặc định của nhà sản xuất. Tăng cường cấu hình (hardening) thường tham chiếu CIS Benchmarks — bộ hướng dẫn cấu hình an toàn chi tiết theo từng nền tảng cụ thể (hệ điều hành, cơ sở dữ liệu, thiết bị mạng...). Kết hợp với giải pháp phát hiện và phản ứng trên điểm cuối (EDR) để giám sát hành vi bất thường sau khi hardening. ISO/IEC 27002:2022 gọi nhóm kiểm soát này là 'cấu hình an toàn', thuộc chủ đề Công nghệ.",
    sources: [
      { type: "framework", refId: "cis-controls" },
      { type: "framework", refId: "iso27002" }
    ],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-kt06-t1",
    topicId: "KT-06",
    tier: "T1",
    kind: "dien_giai",
    body:
      "An toàn điện toán đám mây vận hành theo mô hình trách nhiệm chia sẻ: nhà cung cấp chịu trách nhiệm an toàn 'của' đám mây (hạ tầng vật lý, ảo hóa nền), khách hàng chịu trách nhiệm an toàn 'trong' đám mây (cấu hình, dữ liệu, quyền truy cập) — ranh giới cụ thể thay đổi theo mô hình dịch vụ (IaaS/PaaS/SaaS). Với ảo hóa và container, rủi ro đặc thù gồm: cô lập giữa các máy ảo/container trên cùng hạ tầng vật lý, quản lý vòng đời image (quét lỗ hổng trước khi triển khai), và cấu hình bảo mật của nền tảng điều phối. ISO/IEC 27017:2015 bổ sung hướng dẫn kiểm soát an toàn thông tin dành riêng cho dịch vụ đám mây, dựa trên nền các kiểm soát của ISO/IEC 27002.",
    sources: [
      { type: "framework", refId: "iso27017" },
      { type: "framework", refId: "iso27002" }
    ],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-kt08-t1",
    topicId: "KT-08",
    tier: "T1",
    kind: "dien_giai",
    body:
      "An toàn giao diện lập trình ứng dụng (API) đòi hỏi kiểm soát xuyên suốt vòng đời API: xác thực và cấp quyền cho từng lời gọi, giới hạn tần suất gọi (rate limiting) để chống lạm dụng, xác thực đầu vào chặt chẽ, và quản lý phiên bản API kèm loại bỏ phiên bản cũ không còn được vá lỗi. OWASP duy trì danh mục rủi ro riêng cho API bổ sung cho OWASP Top 10 chung; OWASP ASVS 5.0 cũng có yêu cầu kiểm chứng liên quan tới API. Với tích hợp hệ thống liên tổ chức (ví dụ ngân hàng mở), quản lý vòng đời khóa/chứng chỉ dùng để xác thực giữa các hệ thống và giám sát luồng dữ liệu qua cổng API là kiểm soát bổ sung quan trọng.",
    sources: [
      { type: "framework", refId: "owasp-asvs" },
      { type: "framework", refId: "iso27002" }
    ],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-kt09-t1",
    topicId: "KT-09",
    tier: "T1",
    kind: "dien_giai",
    body:
      "An toàn dữ liệu áp dụng các biện pháp bảo vệ tương ứng với mức độ phân loại của dữ liệu: mã hóa dữ liệu nhạy cảm khi lưu trữ và truyền tải, kiểm soát truy cập theo nguyên tắc cần biết (need-to-know), và che dấu/ẩn danh hóa (masking, tokenization) khi dùng cho mục đích thử nghiệm hoặc phân tích. Giải pháp chống thất thoát dữ liệu (DLP) giám sát và ngăn chặn việc dữ liệu nhạy cảm rời khỏi phạm vi kiểm soát của tổ chức qua các kênh như email, thiết bị lưu trữ di động, hoặc tải lên dịch vụ đám mây không được phê duyệt, dựa trên quy tắc nhận diện nội dung. ISO/IEC 27002:2022 và NIST SP 800-53 đều có nhóm kiểm soát dành riêng cho bảo vệ dữ liệu.",
    sources: [
      { type: "framework", refId: "iso27002" },
      { type: "framework", refId: "nist-sp-800-53" }
    ],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-kt10-t1",
    topicId: "KT-10",
    tier: "T1",
    kind: "dien_giai",
    body:
      "Quản lý điểm yếu là quy trình liên tục: quét phát hiện lỗ hổng định kỳ trên toàn bộ tài sản, đánh giá mức độ nghiêm trọng (thường theo điểm CVSS kết hợp bối cảnh thực tế) và xử lý theo mức độ ưu tiên trong khung thời gian đã cam kết tùy mức độ nghiêm trọng. Quản lý bản vá (patch management) là một nhánh của quy trình trên, đòi hỏi môi trường kiểm thử trước khi triển khai vào sản xuất để tránh gián đoạn dịch vụ. CIS Controls (nhóm Continuous Vulnerability Management) và ISO/IEC 27002:2022 (kiểm soát 'quản lý điểm yếu kỹ thuật') đều coi đây là kiểm soát nền tảng, không thể thay thế hoàn toàn bằng kiểm soát bù trừ lâu dài.",
    sources: [
      { type: "framework", refId: "cis-controls" },
      { type: "framework", refId: "iso27002" }
    ],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-kt11-t1",
    topicId: "KT-11",
    tier: "T1",
    kind: "dien_giai",
    body:
      "Kiểm thử xâm nhập (penetration testing) mô phỏng có kiểm soát các kỹ thuật tấn công thực tế nhằm phát hiện lỗ hổng có thể khai thác trong phạm vi và thời gian xác định, khác quét lỗ hổng tự động ở chỗ có khai thác thực tế để xác nhận tác động. Diễn tập đội đỏ (red team) mô phỏng đối tượng tấn công có mục tiêu cụ thể trong thời gian dài hơn, nhằm kiểm chứng khả năng phát hiện và phản ứng của đội phòng thủ (đội xanh) chứ không chỉ tìm lỗ hổng. Đội tím (purple team) là mô hình hợp tác giữa đội tấn công và đội phòng thủ để tối ưu độ phủ giám sát ngay trong diễn tập. MITRE ATT&CK thường dùng làm khung tham chiếu kỹ thuật tấn công cho cả ba hình thức.",
    sources: [
      { type: "framework", refId: "mitre-attack" },
      { type: "framework", refId: "iso27002" }
    ],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-kt13-t1",
    topicId: "KT-13",
    tier: "T1",
    kind: "dien_giai",
    body:
      "An toàn thư điện tử áp dụng nhiều lớp kiểm soát: xác thực nguồn gửi qua các giao thức SPF, DKIM, DMARC để giảm khả năng giả mạo tên miền; lọc nội dung/tệp đính kèm độc hại tại cổng email gateway; và cảnh báo trực quan cho người dùng khi email đến từ nguồn bên ngoài tổ chức. Vì phần lớn sự cố an ninh nghiêm trọng bắt đầu từ một email lừa đảo (phishing) thành công, kiểm soát kỹ thuật cần đi kèm đào tạo nhận thức và diễn tập lừa đảo định kỳ cho người dùng — hai lớp phòng thủ bổ trợ, không thay thế nhau. ISO/IEC 27002:2022 đề cập an toàn thư điện tử trong nhóm kiểm soát Công nghệ, liên kết với kiểm soát chống mã độc và nhận thức người dùng.",
    sources: [{ type: "framework", refId: "iso27002" }],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-kt14-t1",
    topicId: "KT-14",
    tier: "T1",
    kind: "dien_giai",
    body:
      "Quản lý cấu hình duy trì trạng thái cấu hình chuẩn (baseline) đã được phê duyệt cho hệ thống/thiết bị, phát hiện sai lệch (configuration drift) so với baseline theo thời gian. Quản lý thay đổi là quy trình kiểm soát mọi thay đổi đối với hệ thống sản xuất: đề xuất, đánh giá tác động/rủi ro, phê duyệt bởi cấp có thẩm quyền, kiểm thử, và kế hoạch rollback trước khi triển khai — nhằm giảm rủi ro gián đoạn dịch vụ hoặc mở lỗ hổng do thay đổi không kiểm soát. Kiểm soát phiên bản đối với mã nguồn và cấu hình hạ tầng dạng mã giúp truy vết lịch sử thay đổi và hỗ trợ khôi phục nhanh khi có sự cố. ISO/IEC 27002:2022 có kiểm soát riêng cho quản lý thay đổi trong nhóm Công nghệ.",
    sources: [{ type: "framework", refId: "iso27002" }],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  }
];
