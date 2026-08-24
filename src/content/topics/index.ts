/**
 * Topic — URD Muc 5 (93 chu de / 9 nhom). Day la du lieu phan loai thuan
 * tuy, sao chep truc tiep tu bang muc luc URD — khong phai noi dung quy
 * pham nen khong ap dung FR-T01 o cap nay (noi dung thuc su nam o
 * ContentBlock, xem src/content/topics/content-blocks.ts).
 */
import type { Topic } from "../../data/schema/models";

export const topics: Topic[] = [
  // PL — Phap ly va tuan thu (12)
  { id: "PL-01", group: "PL", title: "Luật An toàn thông tin mạng: phạm vi điều chỉnh và nghĩa vụ của tổ chức", titleEn: "Cybersecurity/Information Security Law: scope and obligations", relatedTopicIds: ["PL-02", "PL-05"] },
  { id: "PL-02", group: "PL", title: "Luật An ninh mạng và các văn bản hướng dẫn", titleEn: "Law on Cybersecurity and guiding documents", relatedTopicIds: ["PL-01", "PL-03"] },
  { id: "PL-03", group: "PL", title: "Yêu cầu lưu trữ dữ liệu trong nước và hiện diện pháp lý", titleEn: "Data localization and legal presence requirements", relatedTopicIds: ["PL-02", "PL-04"] },
  { id: "PL-04", group: "PL", title: "Bảo vệ dữ liệu cá nhân: nguyên tắc, quyền của chủ thể dữ liệu, hồ sơ đánh giá tác động", titleEn: "Personal data protection: principles, data subject rights, DPIA", relatedTopicIds: ["PL-03", "KT-09"] },
  { id: "PL-05", group: "PL", title: "Bảo đảm an toàn hệ thống thông tin theo cấp độ: hồ sơ đề xuất, thẩm định, phê duyệt", titleEn: "Information system security classification: dossier, appraisal, approval", relatedTopicIds: ["PL-06", "PL-07"] },
  { id: "PL-06", group: "PL", title: "Tiêu chuẩn quốc gia về yêu cầu cơ bản an toàn HTTT theo cấp độ", titleEn: "National standard on baseline security requirements by system level", relatedTopicIds: ["PL-05"] },
  { id: "PL-07", group: "PL", title: "An toàn hệ thống thông tin trong hoạt động ngân hàng", titleEn: "Information system security in banking operations", relatedTopicIds: ["PL-08", "PL-05", "NH-01"] },
  { id: "PL-08", group: "PL", title: "An toàn, bảo mật cho cung cấp dịch vụ trực tuyến ngành Ngân hàng", titleEn: "Security for online banking services", relatedTopicIds: ["PL-07", "NH-05"] },
  { id: "PL-09", group: "PL", title: "Hệ thống kiểm soát nội bộ của ngân hàng thương mại", titleEn: "Internal control system of commercial banks", relatedTopicIds: ["KG-01"] },
  { id: "PL-10", group: "PL", title: "Xác thực giao dịch điện tử và yêu cầu sinh trắc học", titleEn: "Electronic transaction authentication and biometric requirements", relatedTopicIds: ["NH-07", "NH-08"] },
  { id: "PL-11", group: "PL", title: "Nghĩa vụ, đầu mối và thời hạn báo cáo sự cố an toàn thông tin", titleEn: "Incident reporting obligations, contacts and deadlines", relatedTopicIds: ["VH-06", "CC-01"] },
  { id: "PL-12", group: "PL", title: "Chế tài xử phạt vi phạm về an toàn thông tin và dữ liệu cá nhân", titleEn: "Sanctions for information security and personal data violations", relatedTopicIds: ["PL-04"] },

  // CM — Chuan muc va khung quoc te (15)
  { id: "CM-01", group: "CM", title: "ISO/IEC 27001 — yêu cầu đối với hệ thống quản lý ATTT", titleEn: "ISO/IEC 27001 — ISMS requirements", relatedTopicIds: ["CM-02", "QT-01"] },
  { id: "CM-02", group: "CM", title: "ISO/IEC 27002 — tập biện pháp kiểm soát", titleEn: "ISO/IEC 27002 — control set", relatedTopicIds: ["CM-01"] },
  { id: "CM-03", group: "CM", title: "ISO/IEC 27005 — quản lý rủi ro an toàn thông tin", titleEn: "ISO/IEC 27005 — information security risk management", relatedTopicIds: ["QT-03"] },
  { id: "CM-04", group: "CM", title: "ISO/IEC 27017 và 27018 — an toàn đám mây và dữ liệu cá nhân trên đám mây", titleEn: "ISO/IEC 27017 & 27018 — cloud security and PII in cloud", relatedTopicIds: ["KT-06"] },
  { id: "CM-05", group: "CM", title: "ISO 22301 — quản lý liên tục hoạt động", titleEn: "ISO 22301 — business continuity management", relatedTopicIds: ["CC-01"] },
  { id: "CM-06", group: "CM", title: "PCI DSS — bảo mật dữ liệu thẻ thanh toán", titleEn: "PCI DSS — payment card data security", relatedTopicIds: ["NH-02"] },
  { id: "CM-07", group: "CM", title: "NIST Cybersecurity Framework", titleEn: "NIST Cybersecurity Framework", relatedTopicIds: ["QT-03"] },
  { id: "CM-08", group: "CM", title: "NIST SP 800-53 — tập kiểm soát cho hệ thống thông tin", titleEn: "NIST SP 800-53 — control catalog", relatedTopicIds: ["CM-07"] },
  { id: "CM-09", group: "CM", title: "NIST SP 800-61 — hướng dẫn xử lý sự cố", titleEn: "NIST SP 800-61 — incident handling guide", relatedTopicIds: ["VH-06"] },
  { id: "CM-10", group: "CM", title: "NIST SP 800-207 — kiến trúc không tin cậy mặc định", titleEn: "NIST SP 800-207 — Zero Trust Architecture", relatedTopicIds: ["KT-12"] },
  { id: "CM-11", group: "CM", title: "SWIFT Customer Security Programme", titleEn: "SWIFT Customer Security Programme", relatedTopicIds: ["NH-04"] },
  { id: "CM-12", group: "CM", title: "Nguyên tắc Basel về khả năng chống chịu vận hành; BCBS 239", titleEn: "Basel principles for operational resilience; BCBS 239", relatedTopicIds: ["CC-01"] },
  { id: "CM-13", group: "CM", title: "CIS Controls và CIS Benchmarks", titleEn: "CIS Controls and CIS Benchmarks", relatedTopicIds: ["KT-05"] },
  { id: "CM-14", group: "CM", title: "MITRE ATT&CK và D3FEND", titleEn: "MITRE ATT&CK and D3FEND", relatedTopicIds: ["VH-04", "VH-05"] },
  { id: "CM-15", group: "CM", title: "OWASP Top 10, ASVS, SAMM; CSA CCM; COBIT", titleEn: "OWASP Top 10, ASVS, SAMM; CSA CCM; COBIT", relatedTopicIds: ["KT-07"] },

  // QT — Quan tri va quan ly ATTT (12)
  { id: "QT-01", group: "QT", title: "Hệ thống quản lý ATTT: phạm vi, bối cảnh tổ chức, cam kết lãnh đạo", titleEn: "ISMS: scope, organizational context, leadership commitment", relatedTopicIds: ["CM-01"] },
  { id: "QT-02", group: "QT", title: "Cấu trúc tài liệu: chính sách – tiêu chuẩn – quy trình – hướng dẫn", titleEn: "Document hierarchy: policy – standard – procedure – guideline", relatedTopicIds: ["QT-01"] },
  { id: "QT-03", group: "QT", title: "Quản lý rủi ro ATTT: nhận diện, phân tích, đánh giá, xử lý", titleEn: "Information security risk management lifecycle", relatedTopicIds: ["CM-03", "QT-04"] },
  { id: "QT-04", group: "QT", title: "Sổ đăng ký rủi ro và khẩu vị rủi ro", titleEn: "Risk register and risk appetite", relatedTopicIds: ["QT-03"] },
  { id: "QT-05", group: "QT", title: "Quản lý tài sản thông tin và phân loại thông tin", titleEn: "Information asset management and classification", relatedTopicIds: ["KT-09"] },
  { id: "QT-06", group: "QT", title: "Quản lý rủi ro bên thứ ba và chuỗi cung ứng", titleEn: "Third-party and supply chain risk management", relatedTopicIds: ["MN-04"] },
  { id: "QT-07", group: "QT", title: "Quản lý ngoại lệ và chấp nhận rủi ro có thời hạn", titleEn: "Exception management and time-bound risk acceptance", relatedTopicIds: ["QT-03"] },
  { id: "QT-08", group: "QT", title: "Đào tạo nhận thức ATTT và diễn tập lừa đảo", titleEn: "Security awareness training and phishing simulation", relatedTopicIds: ["KT-13"] },
  { id: "QT-09", group: "QT", title: "Chỉ số đo lường KPI, KRI và báo cáo cấp lãnh đạo", titleEn: "KPI/KRI metrics and executive reporting", relatedTopicIds: ["QT-04"] },
  { id: "QT-10", group: "QT", title: "Ngân sách, ưu tiên đầu tư và luận chứng đầu tư an ninh", titleEn: "Security budget, prioritization and investment justification", relatedTopicIds: ["QT-09"] },
  { id: "QT-11", group: "QT", title: "Vai trò, trách nhiệm và ma trận phân công trong ATTT", titleEn: "Roles, responsibilities and RACI in information security", relatedTopicIds: ["QT-01"] },
  { id: "QT-12", group: "QT", title: "Văn hóa an toàn và quản lý thay đổi hành vi", titleEn: "Security culture and behavior change management", relatedTopicIds: ["QT-08"] },

  // KT — Kien truc va ky thuat (14)
  { id: "KT-01", group: "KT", title: "An toàn hạ tầng mạng, phân vùng và kiểm soát luồng dữ liệu", titleEn: "Network infrastructure security, segmentation and data flow control", relatedTopicIds: ["KT-12"] },
  { id: "KT-02", group: "KT", title: "Quản lý định danh và truy cập", titleEn: "Identity and Access Management (IAM)", relatedTopicIds: ["KT-03"] },
  { id: "KT-03", group: "KT", title: "Quản lý tài khoản đặc quyền", titleEn: "Privileged Access Management (PAM)", relatedTopicIds: ["KT-02"] },
  { id: "KT-04", group: "KT", title: "Mật mã, quản lý khóa và thiết bị bảo mật phần cứng", titleEn: "Cryptography, key management and HSM", relatedTopicIds: ["MN-03"] },
  { id: "KT-05", group: "KT", title: "An toàn điểm cuối, máy chủ và tăng cường cấu hình", titleEn: "Endpoint/server security and hardening", relatedTopicIds: ["CM-13", "KT-10"] },
  { id: "KT-06", group: "KT", title: "An toàn điện toán đám mây, ảo hóa và container", titleEn: "Cloud, virtualization and container security", relatedTopicIds: ["CM-04"] },
  { id: "KT-07", group: "KT", title: "An toàn ứng dụng và vòng đời phát triển an toàn", titleEn: "Application security and secure SDLC", relatedTopicIds: ["CM-15", "KT-08"] },
  { id: "KT-08", group: "KT", title: "An toàn giao diện lập trình và tích hợp hệ thống", titleEn: "API security and system integration", relatedTopicIds: ["NH-06", "KT-07"] },
  { id: "KT-09", group: "KT", title: "An toàn dữ liệu, phân loại và chống thất thoát", titleEn: "Data security, classification and DLP", relatedTopicIds: ["QT-05", "PL-04"] },
  { id: "KT-10", group: "KT", title: "Quản lý điểm yếu và bản vá", titleEn: "Vulnerability and patch management", relatedTopicIds: ["KT-05", "KT-11"] },
  { id: "KT-11", group: "KT", title: "Kiểm thử xâm nhập, diễn tập đội đỏ và đội tím", titleEn: "Penetration testing, red team and purple team exercises", relatedTopicIds: ["KT-10", "CM-14"] },
  { id: "KT-12", group: "KT", title: "Kiến trúc không tin cậy mặc định", titleEn: "Zero Trust Architecture", relatedTopicIds: ["CM-10", "KT-01"] },
  { id: "KT-13", group: "KT", title: "An toàn thư điện tử và chống lừa đảo qua email", titleEn: "Email security and anti-phishing", relatedTopicIds: ["QT-08"] },
  { id: "KT-14", group: "KT", title: "Quản lý cấu hình, quản lý thay đổi và kiểm soát phiên bản", titleEn: "Configuration management, change management and version control", relatedTopicIds: ["KT-05"] },

  // VH — Van hanh an ninh (8)
  { id: "VH-01", group: "VH", title: "Trung tâm điều hành an ninh: mô hình tổ chức và quy trình", titleEn: "Security Operations Center (SOC): organization and process", relatedTopicIds: ["VH-02", "VH-03"] },
  { id: "VH-02", group: "VH", title: "Thu thập, chuẩn hóa và lưu trữ nhật ký", titleEn: "Log collection, normalization and retention", relatedTopicIds: ["VH-01", "VH-03"] },
  { id: "VH-03", group: "VH", title: "Giám sát, phát hiện và phân loại cảnh báo", titleEn: "Monitoring, detection and alert triage", relatedTopicIds: ["VH-02"] },
  { id: "VH-04", group: "VH", title: "Săn tìm mối đe dọa", titleEn: "Threat hunting", relatedTopicIds: ["CM-14", "VH-05"] },
  { id: "VH-05", group: "VH", title: "Tình báo mối đe dọa và chỉ dấu xâm nhập", titleEn: "Threat intelligence and IOCs", relatedTopicIds: ["VH-04", "CM-14"] },
  { id: "VH-06", group: "VH", title: "Ứng phó sự cố: quy trình, phân loại mức độ, leo thang", titleEn: "Incident response: process, severity classification, escalation", relatedTopicIds: ["CM-09", "PL-11"] },
  { id: "VH-07", group: "VH", title: "Điều tra số và bảo quản chứng cứ", titleEn: "Digital forensics and evidence preservation", relatedTopicIds: ["VH-06"] },
  { id: "VH-08", group: "VH", title: "Quản lý khủng hoảng và truyền thông sự cố", titleEn: "Crisis management and incident communications", relatedTopicIds: ["VH-06", "CC-01"] },

  // NH — He thong dac thu ngan hang (10)
  { id: "NH-01", group: "NH", title: "An toàn hệ thống ngân hàng lõi", titleEn: "Core banking system security", relatedTopicIds: ["PL-07"] },
  { id: "NH-02", group: "NH", title: "Hệ thống thẻ và mạng thanh toán thẻ", titleEn: "Card systems and card payment networks", relatedTopicIds: ["CM-06"] },
  { id: "NH-03", group: "NH", title: "ATM, CDM và thiết bị chấp nhận thanh toán", titleEn: "ATM, CDM and payment acceptance devices", relatedTopicIds: ["NH-02"] },
  { id: "NH-04", group: "NH", title: "Chuyển tiền liên ngân hàng và hệ thống SWIFT", titleEn: "Interbank transfer and SWIFT systems", relatedTopicIds: ["CM-11"] },
  { id: "NH-05", group: "NH", title: "Ngân hàng điện tử: Internet Banking và Mobile Banking", titleEn: "Digital banking: Internet Banking and Mobile Banking", relatedTopicIds: ["PL-08", "NH-07"] },
  { id: "NH-06", group: "NH", title: "Giao diện lập trình mở và ngân hàng mở", titleEn: "Open API and Open Banking", relatedTopicIds: ["KT-08"] },
  { id: "NH-07", group: "NH", title: "Định danh khách hàng điện tử và xác thực sinh trắc học", titleEn: "eKYC and biometric authentication", relatedTopicIds: ["PL-10", "NH-08"] },
  { id: "NH-08", group: "NH", title: "Phòng chống gian lận giao dịch", titleEn: "Transaction fraud prevention", relatedTopicIds: ["NH-07", "MN-06"] },
  { id: "NH-09", group: "NH", title: "Hệ thống chuyển mạch tài chính và bù trừ điện tử", titleEn: "Financial switching and electronic clearing systems", relatedTopicIds: ["NH-01"] },
  { id: "NH-10", group: "NH", title: "Kho dữ liệu, phân tích và bảo vệ dữ liệu khách hàng", titleEn: "Data warehouse, analytics and customer data protection", relatedTopicIds: ["KT-09"] },

  // KG — Kiem tra, giam sat va kiem toan (10)
  { id: "KG-01", group: "KG", title: "Mô hình ba tuyến phòng thủ", titleEn: "Three lines of defense model", relatedTopicIds: ["PL-09"] },
  { id: "KG-02", group: "KG", title: "Lập kế hoạch kiểm toán dựa trên rủi ro", titleEn: "Risk-based audit planning", relatedTopicIds: ["KG-01", "QT-03"] },
  { id: "KG-03", group: "KG", title: "Chương trình kiểm toán và thủ tục kiểm toán theo chủ đề", titleEn: "Audit programs and topic-based audit procedures", relatedTopicIds: ["KG-02"] },
  { id: "KG-04", group: "KG", title: "Kỹ thuật thu thập bằng chứng và phương pháp chọn mẫu", titleEn: "Evidence collection techniques and sampling methods", relatedTopicIds: ["KG-05"] },
  { id: "KG-05", group: "KG", title: "Hồ sơ làm việc và lưu trữ hồ sơ kiểm toán", titleEn: "Audit working papers and record retention", relatedTopicIds: ["KG-04"] },
  { id: "KG-06", group: "KG", title: "Phân loại phát hiện, kiến nghị và theo dõi khắc phục", titleEn: "Finding classification, recommendations and remediation tracking", relatedTopicIds: ["KG-03"] },
  { id: "KG-07", group: "KG", title: "Đánh giá tính đầy đủ và tính hiệu quả của kiểm soát", titleEn: "Control adequacy and effectiveness assessment", relatedTopicIds: ["KG-06"] },
  { id: "KG-08", group: "KG", title: "Giám sát kiểm soát liên tục và kiểm toán liên tục", titleEn: "Continuous control monitoring and continuous auditing", relatedTopicIds: ["KG-07"] },
  { id: "KG-09", group: "KG", title: "Làm việc với đoàn thanh tra và kiểm toán độc lập", titleEn: "Working with inspection teams and independent auditors", relatedTopicIds: ["KG-05"] },
  { id: "KG-10", group: "KG", title: "Tự đánh giá kiểm soát và đánh giá tuân thủ nội bộ", titleEn: "Control self-assessment and internal compliance review", relatedTopicIds: ["KG-08"] },

  // CC — Chong chiu va lien tuc hoat dong (6)
  { id: "CC-01", group: "CC", title: "Quản lý liên tục hoạt động kinh doanh", titleEn: "Business continuity management", relatedTopicIds: ["CM-05", "CC-02"] },
  { id: "CC-02", group: "CC", title: "Phân tích tác động nghiệp vụ", titleEn: "Business impact analysis", relatedTopicIds: ["CC-01"] },
  { id: "CC-03", group: "CC", title: "Kế hoạch khôi phục sau thảm họa", titleEn: "Disaster recovery planning", relatedTopicIds: ["CC-04"] },
  { id: "CC-04", group: "CC", title: "Chỉ tiêu thời gian và điểm khôi phục; kiến trúc dự phòng", titleEn: "RTO/RPO targets and resilient architecture", relatedTopicIds: ["CC-03", "CC-05"] },
  { id: "CC-05", group: "CC", title: "Sao lưu, phục hồi và phòng chống mã hóa tống tiền", titleEn: "Backup, restore and ransomware resilience", relatedTopicIds: ["CC-04"] },
  { id: "CC-06", group: "CC", title: "Diễn tập, kiểm chứng và bài học rút ra", titleEn: "Exercises, validation and lessons learned", relatedTopicIds: ["CC-01"] },

  // MN — Cong nghe va rui ro moi noi (6)
  { id: "MN-01", group: "MN", title: "Rủi ro an toàn của trí tuệ nhân tạo và mô hình ngôn ngữ lớn", titleEn: "AI and LLM security risks", relatedTopicIds: ["MN-02"] },
  { id: "MN-02", group: "MN", title: "Quản trị việc sử dụng AI trong hoạt động ngân hàng", titleEn: "AI governance in banking operations", relatedTopicIds: ["MN-01"] },
  { id: "MN-03", group: "MN", title: "Đe dọa từ máy tính lượng tử và lộ trình mật mã hậu lượng tử", titleEn: "Quantum threat and post-quantum cryptography roadmap", relatedTopicIds: ["KT-04"] },
  { id: "MN-04", group: "MN", title: "Rủi ro mã nguồn mở và chuỗi cung ứng phần mềm", titleEn: "Open-source and software supply chain risk", relatedTopicIds: ["QT-06"] },
  { id: "MN-05", group: "MN", title: "Rủi ro công nghệ sổ cái phân tán và tài sản số", titleEn: "Distributed ledger technology and digital asset risk", relatedTopicIds: [] },
  { id: "MN-06", group: "MN", title: "Giả mạo bằng AI và gian lận danh tính", titleEn: "AI-generated deepfakes and identity fraud", relatedTopicIds: ["NH-08"] }
];
