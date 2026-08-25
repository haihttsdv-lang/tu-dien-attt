import { useState } from "react";
import { Link } from "react-router-dom";
import { threatTechniques } from "../../content/threats";
import { useContentBundle } from "../context/ContentContext";
import { DisclaimerFooter } from "../components/DisclaimerFooter";

/** FR-A06: chon mot ky thuat tan cong, hien thi cac chu de/kiem soat doi pho. */
export function ThreatMapPage() {
  const bundle = useContentBundle();
  const [selectedId, setSelectedId] = useState(threatTechniques[0]?.id ?? "");
  const selected = threatTechniques.find((t) => t.id === selectedId);

  return (
    <div>
      <h1 className="page-title">🎯 Bản đồ mối đe dọa – kiểm soát</h1>
      <p style={{ color: "var(--text-muted)" }}>
        Chọn một kỹ thuật tấn công phổ biến để xem các chủ đề/kiểm soát trong kho đang đối phó với nó.
        Đây là dữ liệu định hướng dựa trên kiến thức chuyên môn phổ biến, không phải kết quả đánh giá rủi
        ro chính thức cho tổ chức cụ thể nào — dùng để bắt đầu tra cứu, không thay thế đánh giá rủi ro
        riêng của bạn.
      </p>

      <div className="filter-row">
        {threatTechniques.map((t) => (
          <button
            key={t.id}
            type="button"
            className={`chip${selectedId === t.id ? " chip--active" : ""}`}
            onClick={() => setSelectedId(t.id)}
          >
            {t.name}
          </button>
        ))}
      </div>

      {selected && (
        <div className="card">
          <div style={{ display: "flex", justifyContent: "space-between", gap: 8, flexWrap: "wrap" }}>
            <h2 style={{ margin: 0 }}>{selected.name}</h2>
            {selected.mitreId && (
              <span className="status-badge" style={{ background: "var(--info-bg)", color: "var(--info-fg)" }}>
                MITRE ATT&CK {selected.mitreId}
              </span>
            )}
          </div>
          <p style={{ color: "var(--text-muted)", marginTop: 4 }}>
            <strong>Chiến thuật (tactic):</strong> {selected.tactic}
          </p>
          <p>{selected.description}</p>
          {selected.mitreNote && (
            <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>⚠ {selected.mitreNote}</p>
          )}

          <h3>Chủ đề/kiểm soát đối phó</h3>
          <div className="filter-row">
            {selected.controlTopicIds.map((tid) => {
              const topic = bundle.topics.find((t) => t.id === tid);
              if (!topic) return null;
              return (
                <Link key={tid} to={`/chu-de/${tid}`} className="chip" style={{ textDecoration: "none" }}>
                  {topic.id} — {topic.title}
                </Link>
              );
            })}
          </div>
        </div>
      )}

      <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
        Mã kỹ thuật MITRE ATT&CK ghi ở trên chỉ áp dụng cho các kỹ thuật đã ổn định nhiều năm — luôn đối
        chiếu lại phiên bản hiện hành tại attack.mitre.org trước khi dùng trong hồ sơ chính thức (xem{" "}
        <code>docs/open-questions.md</code>).
      </p>

      <DisclaimerFooter />
    </div>
  );
}
