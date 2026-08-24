import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContentBundle } from "../context/ContentContext";
import { DisclaimerFooter } from "../components/DisclaimerFooter";

const NOTES_KEY = "bkattt:emergency-contacts-note";

/** FR-Q09: mot man hinh duy nhat truy cap nhanh cam nang su co + dau moi. */
export function EmergencyPage() {
  const bundle = useContentBundle();
  const [note, setNote] = useState("");

  useEffect(() => {
    try {
      setNote(localStorage.getItem(NOTES_KEY) ?? "");
    } catch {
      // localStorage khong kha dung — bo qua
    }
  }, []);

  function saveNote(value: string) {
    setNote(value);
    try {
      localStorage.setItem(NOTES_KEY, value);
    } catch {
      // bo qua neu khong luu duoc
    }
  }

  const incidentTopic = bundle.topics.find((t) => t.id === "VH-06");
  const reportingTopic = bundle.topics.find((t) => t.id === "PL-11");

  return (
    <div>
      <div className="emergency-hero">
        <h1 style={{ margin: "0 0 6px" }}>🚨 Chế độ khẩn cấp</h1>
        <p style={{ margin: 0 }}>
          Truy cập nhanh cẩm nang ứng phó sự cố. Đây là công cụ tham khảo cá nhân — không thay thế quy
          trình ứng phó sự cố chính thức của tổ chức bạn.
        </p>
      </div>

      <div className="card">
        <h2>1. Quy trình ứng phó sự cố (tham khảo)</h2>
        {incidentTopic && (
          <Link to={`/chu-de/${incidentTopic.id}`} className="btn-primary" style={{ display: "inline-flex", textDecoration: "none" }}>
            Mở {incidentTopic.id} — {incidentTopic.title}
          </Link>
        )}
      </div>

      <div className="card warning-banner warning-banner--unverified" style={{ display: "block" }}>
        <h2 style={{ marginTop: 0 }}>2. Nghĩa vụ & thời hạn báo cáo — CHƯA XÁC MINH</h2>
        <p>
          Thời hạn báo cáo sự cố an toàn thông tin theo quy định của cơ quan quản lý{" "}
          <strong>chưa được xác minh số hiệu văn bản chính xác</strong> trong kho này (URD đánh dấu đây là
          mục ưu tiên xác minh cao nhất). <strong>Không suy đoán thời hạn cụ thể</strong> — tra cứu trực
          tiếp quy định hiện hành của cơ quan quản lý trước khi hành động.
        </p>
        {reportingTopic && (
          <Link to={`/chu-de/${reportingTopic.id}`}>Xem chủ đề {reportingTopic.id} (đang chờ xác minh)</Link>
        )}
      </div>

      <div className="card">
        <h2>3. Danh bạ đầu mối (riêng tư, chỉ lưu trên thiết bị này)</h2>
        <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>
          Vì đây là công cụ cá nhân không gắn với một tổ chức cụ thể, danh bạ đầu mối thật KHÔNG có sẵn
          trong ứng dụng. Bạn có thể tự ghi chú đầu mối của đơn vị mình — nội dung chỉ lưu cục bộ trên
          thiết bị này (localStorage), không đồng bộ, không rời khỏi trình duyệt của bạn.
        </p>
        <textarea
          value={note}
          onChange={(e) => saveNote(e.target.value)}
          rows={5}
          placeholder="vd. Trưởng nhóm SOC: 09xx... — Đầu mối NHNN: ..."
          style={{ width: "100%", padding: 10, borderRadius: 8, border: "1px solid var(--border)" }}
        />
      </div>

      <DisclaimerFooter />
    </div>
  );
}
