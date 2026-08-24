import type { ReactNode } from "react";
import { CycleDiagram } from "../components/diagrams/CycleDiagram";
import { LayeredDiagram } from "../components/diagrams/LayeredDiagram";
import { ZeroTrustDiagram } from "../components/diagrams/ZeroTrustDiagram";
import { RtoRpoDiagram } from "../components/diagrams/RtoRpoDiagram";
import { SymmetricCryptoDiagram } from "../components/diagrams/SymmetricCryptoDiagram";
import { AsymmetricCryptoDiagram } from "../components/diagrams/AsymmetricCryptoDiagram";
import { DigitalSignatureDiagram } from "../components/diagrams/DigitalSignatureDiagram";
import { OAuthFlowDiagram } from "../components/diagrams/OAuthFlowDiagram";
import { MfaFlowDiagram } from "../components/diagrams/MfaFlowDiagram";
import { LogPipelineDiagram } from "../components/diagrams/LogPipelineDiagram";
import { NetworkZonesDiagram } from "../components/diagrams/NetworkZonesDiagram";

/**
 * So do khai niem thu cong cho cac chu de "kinh dien" — day la hinh minh
 * hoa cau truc/quy trinh pho bien (khong thuoc doi tuong ban quyen cua bat
 * ky to chuc nao), giup truc quan hoa noi dung T1/T2. Rieng biet voi
 * ContentBlock (van ban) — khong can nguon trich dan vi khong phai khang
 * dinh quy pham, chi la hinh minh hoa cau truc khai niem pho quat.
 */
const PDCA = (
  <CycleDiagram
    key="pdca"
    title="Chu trình PDCA của ISMS"
    steps={[
      { label: "Plan", detail: "hoạch định: bối cảnh, rủi ro, mục tiêu" },
      { label: "Do", detail: "triển khai kiểm soát đã hoạch định" },
      { label: "Check", detail: "đánh giá hiệu năng, đánh giá nội bộ" },
      { label: "Act", detail: "cải tiến liên tục dựa trên kết quả" }
    ]}
  />
);

const RISK_CYCLE = (
  <CycleDiagram
    key="risk-cycle"
    title="Vòng đời quản lý rủi ro an toàn thông tin"
    steps={[
      { label: "Nhận diện", detail: "tài sản, mối đe dọa, điểm yếu" },
      { label: "Phân tích", detail: "khả năng xảy ra × mức độ tác động" },
      { label: "Đánh giá", detail: "so với khẩu vị rủi ro" },
      { label: "Xử lý", detail: "giảm thiểu / chuyển giao / né tránh / chấp nhận" }
    ]}
  />
);

const THREE_LINES = (
  <LayeredDiagram
    key="three-lines"
    title="Mô hình ba tuyến phòng thủ"
    layers={[
      { label: "Tuyến 1 — Đơn vị vận hành", detail: "sở hữu và quản lý rủi ro hằng ngày" },
      { label: "Tuyến 2 — Quản lý rủi ro & tuân thủ", detail: "giám sát, thiết lập khung kiểm soát" },
      { label: "Tuyến 3 — Kiểm toán nội bộ", detail: "đánh giá độc lập tuyến 1 và 2" }
    ]}
  />
);

const DOC_HIERARCHY = (
  <LayeredDiagram
    key="doc-hierarchy"
    title="Cấu trúc tài liệu quản trị ATTT"
    layers={[
      { label: "Chính sách", detail: "định hướng, cam kết cấp lãnh đạo" },
      { label: "Tiêu chuẩn", detail: "yêu cầu cụ thể, đo lường được" },
      { label: "Quy trình", detail: "các bước thực hiện chi tiết" },
      { label: "Hướng dẫn", detail: "khuyến nghị thực hành, không bắt buộc" }
    ]}
  />
);

const NIST_CSF_WHEEL = (
  <CycleDiagram
    key="nist-csf"
    title="6 hàm của NIST CSF 2.0 (minh họa đơn giản hóa)"
    steps={[
      { label: "Govern", detail: "quản trị xuyên suốt" },
      { label: "Identify", detail: "nhận diện rủi ro/tài sản" },
      { label: "Protect", detail: "bảo vệ" },
      { label: "Detect", detail: "phát hiện" },
      { label: "Respond", detail: "ứng phó" },
      { label: "Recover", detail: "khôi phục" }
    ]}
  />
);

const INCIDENT_RESPONSE = (
  <CycleDiagram
    key="incident-response"
    title="Ứng phó sự cố theo NIST SP 800-61 Rev. 3 (ánh xạ CSF 2.0)"
    steps={[
      { label: "Identify", detail: "nhận diện dấu hiệu" },
      { label: "Protect", detail: "ngăn lan rộng" },
      { label: "Detect", detail: "phát hiện, phân loại" },
      { label: "Respond", detail: "xử lý, ngăn chặn" },
      { label: "Recover", detail: "khôi phục dịch vụ" }
    ]}
  />
);

const BCM_CYCLE = (
  <CycleDiagram
    key="bcm-cycle"
    title="Vòng đời quản lý liên tục hoạt động"
    steps={[
      { label: "Phân tích tác động", detail: "BIA — xác định quy trình trọng yếu" },
      { label: "Xây chiến lược", detail: "phương án ứng phó/khôi phục" },
      { label: "Lập kế hoạch", detail: "BCP/DRP chi tiết" },
      { label: "Diễn tập", detail: "kiểm chứng tính khả thi" },
      { label: "Cải tiến", detail: "cập nhật theo bài học rút ra" }
    ]}
  />
);

const TIER_DEPTH = (
  <LayeredDiagram
    title="Ba tầng độ sâu nội dung"
    layers={[
      { label: "T1 — Tra cứu nhanh", detail: "≤ 200 từ, trả lời trong lúc họp/kiểm tra" },
      { label: "T2 — Giải thích đầy đủ", detail: "500–1.500 từ, hiểu bản chất" },
      { label: "T3 — Tham chiếu chuyên sâu", detail: "không giới hạn, danh mục điều khoản" }
    ]}
  />
);

const IAM_LIFECYCLE = (
  <CycleDiagram
    key="iam-lifecycle"
    title="Vòng đời định danh (Joiner–Mover–Leaver)"
    steps={[
      { label: "Cấp phát", detail: "tạo tài khoản khi vào tổ chức/nhận vai trò mới" },
      { label: "Xác thực", detail: "chứng minh danh tính mỗi lần truy cập" },
      { label: "Cấp quyền", detail: "gán quyền theo vai trò, đặc quyền tối thiểu" },
      { label: "Giám sát", detail: "theo dõi hoạt động, rà soát quyền định kỳ" },
      { label: "Thu hồi", detail: "vô hiệu hóa khi nghỉ việc/đổi vai trò" }
    ]}
  />
);

const VULN_MGMT_CYCLE = (
  <CycleDiagram
    key="vuln-cycle"
    title="Vòng đời quản lý điểm yếu"
    steps={[
      { label: "Quét", detail: "phát hiện điểm yếu định kỳ/liên tục" },
      { label: "Ưu tiên", detail: "theo mức nghiêm trọng và khả năng khai thác" },
      { label: "Khắc phục", detail: "vá lỗi hoặc giảm thiểu tạm thời" },
      { label: "Xác minh", detail: "quét lại để xác nhận đã khắc phục" }
    ]}
  />
);

const SOC_TIERS = (
  <LayeredDiagram
    key="soc-tiers"
    title="Cấu trúc phân tuyến SOC"
    layers={[
      { label: "Tuyến 1 — Giám sát & lọc cảnh báo", detail: "tiếp nhận, phân loại ban đầu" },
      { label: "Tuyến 2 — Điều tra chuyên sâu", detail: "phân tích sự cố, ứng phó" },
      { label: "Tuyến 3 — Săn tìm mối đe dọa", detail: "kỹ thuật cao, chủ động tìm kiếm" }
    ]}
  />
);

const DATA_CLASSIFICATION = (
  <LayeredDiagram
    key="data-classification"
    title="Ví dụ thang phân loại thông tin"
    layers={[
      { label: "Công khai", detail: "được phép công bố rộng rãi" },
      { label: "Nội bộ", detail: "chỉ lưu hành trong tổ chức" },
      { label: "Mật", detail: "truy cập hạn chế, cần được cấp quyền" },
      { label: "Tối mật", detail: "kiểm soát nghiêm ngặt nhất" }
    ]}
  />
);

/**
 * Nhieu chu de KY THUAT can so do CO CHE (the hien cach mot giao thuc/thuat
 * toan hoat dong tung buoc — vd. Zero Trust, ma hoa, chu ky so), khac voi
 * so do QUY TRINH/QUAN TRI (chu trinh PDCA, quan ly rui ro...). Moi chu de
 * co the co NHIEU so do — dang mang, khong chi mot.
 */
const registry: Record<string, ReactNode[]> = {
  "KT-02": [<MfaFlowDiagram key="mfa" />, IAM_LIFECYCLE],
  "KT-04": [
    <SymmetricCryptoDiagram key="sym" />,
    <AsymmetricCryptoDiagram key="asym" />,
    <DigitalSignatureDiagram key="sig" />
  ],
  "KT-08": [<OAuthFlowDiagram key="oauth" />],
  "NH-06": [<OAuthFlowDiagram key="oauth" />],
  "VH-02": [<LogPipelineDiagram key="logpipe" />],
  "KT-01": [<NetworkZonesDiagram key="netzones" />],
  "KT-10": [VULN_MGMT_CYCLE],
  "VH-01": [SOC_TIERS],
  "KT-09": [DATA_CLASSIFICATION],
  "CC-04": [<RtoRpoDiagram key="rto-rpo" />],
  "CM-01": [PDCA],
  "QT-01": [PDCA],
  "QT-03": [RISK_CYCLE],
  "CM-03": [RISK_CYCLE],
  "KG-01": [THREE_LINES],
  "QT-02": [DOC_HIERARCHY],
  "CM-07": [NIST_CSF_WHEEL],
  "VH-06": [INCIDENT_RESPONSE],
  "CM-09": [INCIDENT_RESPONSE],
  "CC-01": [BCM_CYCLE],
  "KT-12": [<ZeroTrustDiagram key="zt" />],
  "CM-10": [<ZeroTrustDiagram key="zt" />]
};

export function getConceptDiagrams(topicId: string): ReactNode[] {
  return registry[topicId] ?? [];
}

export { TIER_DEPTH };
