/**
 * Ban do moi de doa – kiem soat (FR-A06, URD Muc 9.4). Day la du lieu DINH
 * HUONG (giong Mapping — ket qua dien giai chuyen mon), khong phai noi
 * dung quy pham nen khong bat buoc sources[] kieu FR-T01. Ma ky thuat MITRE
 * ATT&CK (mitreId) chi ghi cho cac ky thuat da rat on dinh nhieu nam; luon
 * doi chieu lai phien ban hien hanh tai attack.mitre.org truoc khi dan
 * trong ho so chinh thuc — xem mitre-attack trong content/frameworks
 * (sourceTier B, version chua xac minh).
 */
import type { ThreatTechnique } from "../../data/schema/models";

export const threatTechniques: ThreatTechnique[] = [
  {
    id: "threat-phishing",
    name: "Lừa đảo qua email/tin nhắn (Phishing)",
    mitreId: "T1566",
    tactic: "Initial Access — Xâm nhập ban đầu",
    description:
      "Kẻ tấn công gửi email/tin nhắn giả mạo nguồn tin cậy để lừa nạn nhân nhấp liên kết độc hại, mở tệp đính kèm chứa mã độc, hoặc cung cấp thông tin xác thực. Là vector xâm nhập ban đầu phổ biến nhất trong hầu hết các cuộc tấn công có chủ đích vào tổ chức tài chính.",
    controlTopicIds: ["KT-13", "QT-08", "VH-05"]
  },
  {
    id: "threat-valid-accounts",
    name: "Lạm dụng tài khoản hợp lệ bị đánh cắp",
    mitreId: "T1078",
    tactic: "Defense Evasion / Persistence / Privilege Escalation",
    description:
      "Kẻ tấn công dùng thông tin xác thực hợp lệ đã đánh cắp (qua phishing, rò rỉ dữ liệu, mua trên chợ đen) để đăng nhập như người dùng thật — khó phát hiện hơn nhiều so với khai thác lỗ hổng kỹ thuật vì hành vi trông 'hợp lệ' trên bề mặt.",
    controlTopicIds: ["KT-02", "KT-03", "VH-03"]
  },
  {
    id: "threat-brute-force",
    name: "Dò mật khẩu hàng loạt (Brute Force / Credential Stuffing)",
    mitreId: "T1110",
    tactic: "Credential Access",
    description:
      "Thử tự động số lượng lớn tổ hợp mật khẩu (brute force) hoặc thông tin đăng nhập bị rò rỉ từ dịch vụ khác (credential stuffing, dựa trên thói quen dùng lại mật khẩu) để chiếm tài khoản.",
    controlTopicIds: ["KT-02", "NH-08"]
  },
  {
    id: "threat-ransomware",
    name: "Mã hóa tống tiền (Ransomware)",
    mitreId: "T1486",
    tactic: "Impact",
    description:
      "Mã độc mã hóa dữ liệu/hệ thống, đòi tiền chuộc để khôi phục — có thể đi kèm đe dọa công bố dữ liệu đánh cắp (double extortion). Hậu quả trực tiếp tới tính liên tục hoạt động, không chỉ là sự cố bảo mật đơn thuần.",
    controlTopicIds: ["CC-05", "KT-10", "KT-05"]
  },
  {
    id: "threat-supply-chain",
    name: "Xâm phạm chuỗi cung ứng phần mềm",
    mitreId: "T1195",
    tactic: "Initial Access",
    description:
      "Kẻ tấn công chèn mã độc vào một thành phần/thư viện/công cụ mà tổ chức tin cậy và sử dụng (bản cập nhật phần mềm, gói mã nguồn mở, nhà cung cấp dịch vụ) thay vì tấn công trực tiếp — lợi dụng chính niềm tin của tổ chức vào bên thứ ba.",
    controlTopicIds: ["MN-04", "QT-06"]
  },
  {
    id: "threat-exploit-public-app",
    name: "Khai thác lỗ hổng ứng dụng/API công khai",
    mitreId: "T1190",
    tactic: "Initial Access",
    description:
      "Khai thác điểm yếu (chưa vá, lỗi thiết kế, cấu hình sai) của ứng dụng web, API hoặc dịch vụ tiếp xúc trực tiếp Internet — ví dụ Internet Banking, cổng Open API — để giành quyền truy cập trái phép.",
    controlTopicIds: ["KT-07", "KT-08", "KT-10"]
  },
  {
    id: "threat-ddos",
    name: "Tấn công từ chối dịch vụ (DDoS)",
    mitreId: "T1498",
    tactic: "Impact",
    description:
      "Làm ngập hệ thống bằng lượng lớn yêu cầu giả mạo, khiến dịch vụ (Internet Banking, cổng thanh toán) không thể phục vụ người dùng hợp lệ — thường dùng để gây gián đoạn, đôi khi làm bình phong che giấu một cuộc tấn công khác đang diễn ra song song.",
    controlTopicIds: ["KT-01", "CC-04"]
  },
  {
    id: "threat-bec",
    name: "Giả mạo email lãnh đạo lừa chuyển tiền (Business Email Compromise)",
    tactic: "Social Engineering (kết hợp nhiều kỹ thuật MITRE)",
    description:
      "Kẻ tấn công giả mạo hoặc chiếm quyền hộp thư của lãnh đạo/đối tác, yêu cầu nhân viên chuyển tiền khẩn cấp hoặc thay đổi thông tin tài khoản nhận thanh toán. Không nhất thiết dùng mã độc — thường thuần túy là kỹ thuật lừa đảo tâm lý, khó phát hiện bằng công cụ kỹ thuật thuần túy.",
    controlTopicIds: ["QT-08", "KT-13", "NH-08"],
    mitreNote:
      "Đây là kịch bản kết hợp nhiều kỹ thuật (Phishing T1566, Valid Accounts T1078...), không phải một mã kỹ thuật MITRE đơn lẻ."
  },
  {
    id: "threat-ai-deepfake",
    name: "Giả mạo bằng AI vượt xác thực sinh trắc học (Deepfake)",
    tactic: "Defense Evasion / Initial Access (mối đe dọa mới nổi)",
    description:
      "Dùng AI tạo hình ảnh/video/giọng nói giả mạo một cá nhân cụ thể để vượt qua bước xác thực sinh trắc học từ xa (eKYC) hoặc lừa nhân viên qua cuộc gọi video/thoại giả mạo giọng lãnh đạo.",
    controlTopicIds: ["MN-06", "NH-07", "NH-08"],
    mitreNote: "Kỹ thuật mới nổi, MITRE ATT&CK chưa có mã kỹ thuật ổn định riêng tại thời điểm biên soạn."
  },
  {
    id: "threat-insider-privilege-abuse",
    name: "Lạm dụng đặc quyền nội bộ",
    tactic: "Collection / Exfiltration (nội bộ)",
    description:
      "Người dùng nội bộ có quyền hợp lệ (quản trị viên, nhân viên nghiệp vụ) cố ý lạm dụng quyền truy cập để trục lợi hoặc gây hại — ví dụ truy vấn dữ liệu khách hàng ngoài phạm vi công việc, hoặc lợi dụng quyền phê duyệt giao dịch. Khó phát hiện bằng kiểm soát biên vì hành vi xuất phát từ bên trong với quyền hợp lệ.",
    controlTopicIds: ["KT-03", "KG-01", "QT-11"],
    mitreNote: "Rủi ro nội bộ mang tính hành vi con người, không map trực tiếp vào một kỹ thuật MITRE ATT&CK đơn lẻ."
  }
];
