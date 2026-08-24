import type { ReactNode } from "react";
import { CycleDiagram } from "../components/diagrams/CycleDiagram";
import { LayeredDiagram } from "../components/diagrams/LayeredDiagram";
import { ZeroTrustDiagram } from "../components/diagrams/ZeroTrustDiagram";

/**
 * So do khai niem thu cong cho cac chu de "kinh dien" — day la hinh minh
 * hoa cau truc/quy trinh pho bien (khong thuoc doi tuong ban quyen cua bat
 * ky to chuc nao), giup truc quan hoa noi dung T1/T2. Rieng biet voi
 * ContentBlock (van ban) — khong can nguon trich dan vi khong phai khang
 * dinh quy pham, chi la hinh minh hoa cau truc khai niem pho quat.
 */
const PDCA = (
  <CycleDiagram
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

const registry: Record<string, ReactNode> = {
  "CM-01": PDCA,
  "QT-01": PDCA,
  "QT-03": RISK_CYCLE,
  "CM-03": RISK_CYCLE,
  "KG-01": THREE_LINES,
  "QT-02": DOC_HIERARCHY,
  "CM-07": NIST_CSF_WHEEL,
  "VH-06": INCIDENT_RESPONSE,
  "CM-09": INCIDENT_RESPONSE,
  "CC-01": BCM_CYCLE,
  "KT-12": <ZeroTrustDiagram key="zt" />,
  "CM-10": <ZeroTrustDiagram key="zt" />
};

export function getConceptDiagram(topicId: string): ReactNode | null {
  return registry[topicId] ?? null;
}

export { TIER_DEPTH };
