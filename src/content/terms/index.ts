/**
 * Term — tu dien thuat ngu song ngu Viet-Anh (FR-K05).
 */
import type { Term } from "../../data/schema/models";

export const terms: Term[] = [
  { vi: "quản lý tài khoản đặc quyền", en: "Privileged Access Management", abbr: "PAM", definition: "Tập kiểm soát quản lý, giám sát và giới hạn quyền truy cập của tài khoản có quyền cao (quản trị hệ thống, cơ sở dữ liệu, mạng...).", topicIds: ["KT-03"] },
  { vi: "quản lý định danh và truy cập", en: "Identity and Access Management", abbr: "IAM", definition: "Tập chính sách và công nghệ quản lý danh tính số và quyền truy cập tài nguyên của người dùng/hệ thống.", topicIds: ["KT-02"] },
  { vi: "trung tâm điều hành an ninh", en: "Security Operations Center", abbr: "SOC", definition: "Đơn vị chịu trách nhiệm giám sát, phát hiện và điều phối ứng phó sự cố an toàn thông tin liên tục.", topicIds: ["VH-01"] },
  { vi: "chống thất thoát dữ liệu", en: "Data Loss Prevention", abbr: "DLP", definition: "Nhóm công nghệ và quy trình nhằm phát hiện, ngăn chặn rò rỉ dữ liệu nhạy cảm ra ngoài phạm vi kiểm soát.", topicIds: ["KT-09"] },
  { vi: "mục tiêu thời gian khôi phục", en: "Recovery Time Objective", abbr: "RTO", definition: "Khoảng thời gian tối đa chấp nhận được để khôi phục một hệ thống/dịch vụ sau sự cố.", topicIds: ["CC-04"] },
  { vi: "mục tiêu điểm khôi phục", en: "Recovery Point Objective", abbr: "RPO", definition: "Khoảng thời gian dữ liệu tối đa chấp nhận mất đi, tính từ thời điểm sự cố xảy ra tới lần sao lưu gần nhất.", topicIds: ["CC-04"] },
  { vi: "xác thực đa yếu tố", en: "Multi-Factor Authentication", abbr: "MFA", definition: "Phương thức xác thực yêu cầu từ hai yếu tố độc lập trở lên (biết, sở hữu, sinh trắc học).", topicIds: ["KT-02", "NH-07"] },
  { vi: "quản lý thông tin và sự kiện an ninh", en: "Security Information and Event Management", abbr: "SIEM", definition: "Hệ thống thu thập, chuẩn hóa, tương quan nhật ký và sự kiện an ninh để phát hiện bất thường.", topicIds: ["VH-02", "VH-03"] },
  { vi: "kiến trúc không tin cậy mặc định", en: "Zero Trust Architecture", abbr: "ZTA", definition: "Mô hình kiến trúc không mặc nhiên tin cậy bất kỳ thực thể nào chỉ vì vị trí mạng; mọi truy cập đều được xác thực và cấp quyền theo ngữ cảnh.", topicIds: ["KT-12"] },
  { vi: "quản lý liên tục hoạt động kinh doanh", en: "Business Continuity Management", abbr: "BCM", definition: "Quy trình bảo đảm tổ chức duy trì hoặc khôi phục hoạt động thiết yếu khi xảy ra gián đoạn.", topicIds: ["CC-01"] },
  { vi: "kế hoạch khôi phục sau thảm họa", en: "Disaster Recovery Plan", abbr: "DRP", definition: "Kế hoạch cụ thể để khôi phục hệ thống CNTT sau sự kiện gây gián đoạn nghiêm trọng.", topicIds: ["CC-03"] },
  { vi: "định danh khách hàng điện tử", en: "Electronic Know Your Customer", abbr: "eKYC", definition: "Quy trình định danh, xác minh khách hàng từ xa bằng phương tiện điện tử, thường kết hợp sinh trắc học.", topicIds: ["NH-07"] },
  { vi: "giao diện lập trình ứng dụng", en: "Application Programming Interface", abbr: "API", definition: "Tập quy tắc và giao thức cho phép các hệ thống phần mềm giao tiếp với nhau.", topicIds: ["KT-08", "NH-06"] },
  { vi: "thiết bị bảo mật phần cứng", en: "Hardware Security Module", abbr: "HSM", definition: "Thiết bị phần cứng chuyên dụng để sinh, lưu trữ và quản lý khóa mật mã một cách an toàn.", topicIds: ["KT-04"] },
  { vi: "kiểm thử bảo mật mã nguồn tĩnh", en: "Static Application Security Testing", abbr: "SAST", definition: "Kỹ thuật quét mã nguồn để phát hiện lỗ hổng bảo mật mà không cần chạy ứng dụng.", topicIds: ["KT-07"] },
  { vi: "kiểm thử bảo mật ứng dụng động", en: "Dynamic Application Security Testing", abbr: "DAST", definition: "Kỹ thuật kiểm thử bảo mật ứng dụng đang chạy bằng cách mô phỏng tấn công từ bên ngoài.", topicIds: ["KT-07"] },
  { vi: "chỉ số rủi ro trọng yếu", en: "Key Risk Indicator", abbr: "KRI", definition: "Chỉ số định lượng cảnh báo sớm về sự thay đổi mức độ rủi ro của tổ chức.", topicIds: ["QT-09"] },
  { vi: "chỉ số hiệu năng trọng yếu", en: "Key Performance Indicator", abbr: "KPI", definition: "Chỉ số định lượng đo lường mức độ hoàn thành mục tiêu hoạt động.", topicIds: ["QT-09"] },
  { vi: "hệ thống quản lý an toàn thông tin", en: "Information Security Management System", abbr: "ISMS", definition: "Hệ thống chính sách, quy trình và kiểm soát để quản lý rủi ro an toàn thông tin của tổ chức một cách có hệ thống.", topicIds: ["QT-01", "CM-01"] },
  { vi: "phân tích tác động nghiệp vụ", en: "Business Impact Analysis", abbr: "BIA", definition: "Quá trình xác định mức độ ảnh hưởng của việc gián đoạn tới các quy trình nghiệp vụ trọng yếu.", topicIds: ["CC-02"] },
  { vi: "tình báo mối đe dọa", en: "Threat Intelligence", abbr: "CTI", definition: "Thông tin đã qua phân tích về tác nhân, kỹ thuật và chỉ dấu tấn công, phục vụ ra quyết định phòng thủ.", topicIds: ["VH-05"] },
  { vi: "chỉ dấu xâm nhập", en: "Indicator of Compromise", abbr: "IOC", definition: "Dấu vết kỹ thuật (địa chỉ IP, hash tệp, tên miền...) cho thấy hệ thống có thể đã bị xâm nhập.", topicIds: ["VH-05"] },
  { vi: "săn tìm mối đe dọa", en: "Threat Hunting", definition: "Hoạt động chủ động tìm kiếm dấu hiệu tấn công chưa được phát hiện bởi công cụ giám sát tự động.", topicIds: ["VH-04"] },
  { vi: "đội đỏ", en: "Red Team", definition: "Nhóm mô phỏng tấn công thực tế nhằm kiểm chứng khả năng phòng thủ của tổ chức.", topicIds: ["KT-11"] },
  { vi: "đội tím", en: "Purple Team", definition: "Mô hình phối hợp giữa đội tấn công (đỏ) và đội phòng thủ (xanh) để cải thiện khả năng phát hiện và ứng phó.", topicIds: ["KT-11"] },
  { vi: "quản lý điểm yếu", en: "Vulnerability Management", definition: "Quy trình liên tục phát hiện, đánh giá, ưu tiên và khắc phục điểm yếu bảo mật.", topicIds: ["KT-10"] },
  { vi: "mô hình ba tuyến phòng thủ", en: "Three Lines of Defense", definition: "Mô hình quản trị rủi ro phân tách trách nhiệm: tuyến 1 (đơn vị vận hành), tuyến 2 (quản lý rủi ro/tuân thủ), tuyến 3 (kiểm toán nội bộ).", topicIds: ["KG-01"] },
  { vi: "khẩu vị rủi ro", en: "Risk Appetite", definition: "Mức độ rủi ro mà tổ chức sẵn sàng chấp nhận để đạt được mục tiêu.", topicIds: ["QT-04"] },
  { vi: "mã hóa tống tiền", en: "Ransomware", definition: "Phần mềm độc hại mã hóa dữ liệu nạn nhân và đòi tiền chuộc để khôi phục quyền truy cập.", topicIds: ["CC-05"] },
  { vi: "chuỗi cung ứng phần mềm", en: "Software Supply Chain", definition: "Toàn bộ thành phần, thư viện, công cụ và quy trình tham gia vào việc tạo ra và phân phối phần mềm.", topicIds: ["MN-04"] },
  { vi: "bảng kê thành phần phần mềm", en: "Software Bill of Materials", abbr: "SBOM", definition: "Danh mục liệt kê đầy đủ các thành phần (bao gồm thư viện mã nguồn mở) cấu thành một phần mềm.", topicIds: ["MN-04"] }
];
