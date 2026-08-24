/**
 * Framework — URD Muc 4.2, nhom chu de CM (Muc 5.2).
 *
 * Phien ban duoc xac minh qua tra cuu web ngay 2026-08-24 (nguon chinh
 * thuc cua tung to chuc chuan hoa — xem officialUrl). Muc nao KHONG xac
 * minh duoc chac chan thi version = "CHƯA XÁC MINH" kem verificationNote
 * chi ro can kiem tra o dau — dung theo URD 0.1 muc 4 (tuyet doi khong
 * suy doan so hieu phien ban).
 */
import type { Framework } from "../../data/schema/models";

const V = "2026-08-24"; // ngay xac minh trong phien lam viec nay

export const frameworks: Framework[] = [
  {
    id: "iso27001",
    name: "ISO/IEC 27001 — Information security management systems",
    version: "2022 (kèm Amd 1:2024)",
    publisher: "ISO/IEC",
    isCopyrighted: true,
    sourceTier: "A",
    officialUrl: "https://www.iso.org/standard/27001",
    lastVerifiedAt: V
  },
  {
    id: "iso27002",
    name: "ISO/IEC 27002 — Information security controls",
    version: "2022",
    publisher: "ISO/IEC",
    isCopyrighted: true,
    sourceTier: "A",
    officialUrl: "https://www.iso.org/standard/75652.html",
    lastVerifiedAt: V,
    verificationNote:
      "Bản 2022 tái cấu trúc số lượng biện pháp kiểm soát so với bản 2013 — khi trích clauseRef phải ghi rõ theo bản 2022."
  },
  {
    id: "iso27005",
    name: "ISO/IEC 27005 — Guidance on managing information security risks",
    version: "2022 (ấn bản thứ 4)",
    publisher: "ISO/IEC",
    isCopyrighted: true,
    sourceTier: "A",
    officialUrl: "https://www.iso.org/standard/80585.html",
    lastVerifiedAt: V
  },
  {
    id: "iso27017",
    name: "ISO/IEC 27017 — Cloud services security controls",
    version: "2015",
    publisher: "ISO/IEC",
    isCopyrighted: true,
    sourceTier: "B",
    lastVerifiedAt: V,
    verificationNote:
      "CHƯA XÁC MINH độc lập qua iso.org trong phiên này — cần đối chiếu lại trước khi trích dẫn chính thức."
  },
  {
    id: "iso27018",
    name: "ISO/IEC 27018 — Protection of PII in public clouds",
    version: "CHƯA XÁC MINH",
    publisher: "ISO/IEC",
    isCopyrighted: true,
    sourceTier: "C",
    lastVerifiedAt: V,
    verificationNote:
      "Có thông tin trái chiều giữa bản 2014 và bản 2019 (ấn bản 2) trong quá trình tra cứu. Phải xác minh lại trực tiếp tại iso.org trước khi dùng làm căn cứ."
  },
  {
    id: "iso22301",
    name: "ISO 22301 — Business continuity management systems",
    version: "2019 (chưa xác minh độc lập trong phiên này)",
    publisher: "ISO",
    isCopyrighted: true,
    sourceTier: "B",
    lastVerifiedAt: V,
    verificationNote:
      "Thường được biết đến rộng rãi là bản 2019 nhưng chưa được xác minh độc lập qua iso.org trong phiên làm việc này — đối chiếu lại trước khi trích dẫn điều khoản cụ thể."
  },
  {
    id: "pci-dss",
    name: "PCI DSS — Payment Card Industry Data Security Standard",
    version: "4.0.1",
    publisher: "PCI Security Standards Council",
    isCopyrighted: true,
    sourceTier: "A",
    officialUrl: "https://www.pcisecuritystandards.org",
    lastVerifiedAt: V
  },
  {
    id: "nist-csf",
    name: "NIST Cybersecurity Framework",
    version: "2.0 (02/2024)",
    publisher: "NIST",
    isCopyrighted: false,
    sourceTier: "A",
    officialUrl: "https://www.nist.gov/cyberframework",
    lastVerifiedAt: V
  },
  {
    id: "nist-sp-800-53",
    name: "NIST SP 800-53 — Security and Privacy Controls",
    version: "Rev. 5 (Rev. 5.2.0, 2025)",
    publisher: "NIST",
    isCopyrighted: false,
    sourceTier: "A",
    officialUrl: "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final",
    lastVerifiedAt: V
  },
  {
    id: "nist-sp-800-61",
    name: "NIST SP 800-61 — Incident Response Recommendations and Considerations",
    version: "Rev. 3 (04/2025)",
    publisher: "NIST",
    isCopyrighted: false,
    sourceTier: "A",
    officialUrl: "https://csrc.nist.gov/pubs/sp/800/61/r3/final",
    lastVerifiedAt: V,
    verificationNote:
      "Rev. 3 thay đổi mô hình: ánh xạ hoạt động ứng phó sự cố theo 5 hàm CSF 2.0 thay vì vòng đời cứng như Rev. 2 (đã bị rút lại 04/2025)."
  },
  {
    id: "nist-sp-800-207",
    name: "NIST SP 800-207 — Zero Trust Architecture",
    version: "08/2020 (bản hiện hành)",
    publisher: "NIST",
    isCopyrighted: false,
    sourceTier: "A",
    officialUrl: "https://csrc.nist.gov/pubs/sp/800/207/final",
    lastVerifiedAt: V
  },
  {
    id: "swift-cscf",
    name: "SWIFT Customer Security Controls Framework (CSCF)",
    version: "v2026 (phát hành 07/2025)",
    publisher: "SWIFT",
    isCopyrighted: true,
    sourceTier: "A",
    officialUrl: "https://www.swift.com/myswift/customer-security-programme-csp",
    lastVerifiedAt: V,
    verificationNote:
      "v2026 gồm 3 mục tiêu, 7 nguyên tắc, 32 kiểm soát (26 bắt buộc, 6 khuyến nghị)."
  },
  {
    id: "basel-operational-resilience",
    name: "Basel Committee — Principles for Operational Resilience; BCBS 239",
    version: "CHƯA XÁC MINH (chi tiết ấn bản)",
    publisher: "Basel Committee on Banking Supervision (BIS)",
    isCopyrighted: false,
    sourceTier: "B",
    lastVerifiedAt: V,
    verificationNote:
      "Sự tồn tại và mục đích của hai tài liệu này là kiến thức chuyên ngành phổ biến, nhưng số phiên bản/ngày ấn bản cụ thể CHƯA được tra cứu độc lập trong phiên này. Chỉ dùng cho mô tả khái niệm chung, không trích dẫn điều khoản cụ thể trước khi xác minh qua bis.org."
  },
  {
    id: "cis-controls",
    name: "CIS Critical Security Controls",
    version: "v8.1 (2024)",
    publisher: "Center for Internet Security",
    isCopyrighted: true,
    sourceTier: "A",
    officialUrl: "https://www.cisecurity.org/controls/v8-1",
    lastVerifiedAt: V
  },
  {
    id: "mitre-attack",
    name: "MITRE ATT&CK",
    version: "CHƯA XÁC MINH (cập nhật liên tục theo phiên bản đánh số)",
    publisher: "MITRE",
    isCopyrighted: false,
    sourceTier: "B",
    lastVerifiedAt: V,
    verificationNote:
      "Bản thân framework (mục đích, cấu trúc tactics/techniques) là kiến thức phổ biến, nhưng MITRE ATT&CK cập nhật nhiều lần/năm với số phiên bản riêng — phải lấy số phiên bản hiện hành trực tiếp tại attack.mitre.org khi trích dẫn một kỹ thuật (technique ID) cụ thể."
  },
  {
    id: "mitre-d3fend",
    name: "MITRE D3FEND",
    version: "CHƯA XÁC MINH",
    publisher: "MITRE",
    isCopyrighted: false,
    sourceTier: "B",
    lastVerifiedAt: V,
    verificationNote: "Chưa tra cứu độc lập trong phiên này — xem d3fend.mitre.org trước khi trích dẫn chi tiết."
  },
  {
    id: "owasp-top10",
    name: "OWASP Top 10",
    version: "2025 (chốt 01/2026)",
    publisher: "OWASP Foundation",
    isCopyrighted: false,
    sourceTier: "A",
    officialUrl: "https://owasp.org/Top10/2025/",
    lastVerifiedAt: V
  },
  {
    id: "owasp-asvs",
    name: "OWASP Application Security Verification Standard (ASVS)",
    version: "5.0 (05/2025)",
    publisher: "OWASP Foundation",
    isCopyrighted: false,
    sourceTier: "A",
    lastVerifiedAt: V
  },
  {
    id: "owasp-samm",
    name: "OWASP Software Assurance Maturity Model (SAMM)",
    version: "CHƯA XÁC MINH",
    publisher: "OWASP Foundation",
    isCopyrighted: false,
    sourceTier: "C",
    lastVerifiedAt: V,
    verificationNote: "Chưa xác minh số phiên bản hiện hành — xem owaspsamm.org."
  },
  {
    id: "csa-ccm",
    name: "Cloud Security Alliance — Cloud Controls Matrix (CCM)",
    version: "v4",
    publisher: "Cloud Security Alliance",
    isCopyrighted: false,
    sourceTier: "A",
    lastVerifiedAt: V
  },
  {
    id: "cobit",
    name: "COBIT",
    version: "2019 (chưa xác minh độc lập trong phiên này)",
    publisher: "ISACA",
    isCopyrighted: true,
    sourceTier: "B",
    lastVerifiedAt: V,
    verificationNote:
      "Thường được biết đến là COBIT 2019 nhưng chưa được xác minh độc lập qua isaca.org trong phiên làm việc này — đối chiếu lại trước khi trích dẫn mục tiêu quản trị cụ thể."
  }
];
