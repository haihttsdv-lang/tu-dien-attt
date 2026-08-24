import { Link } from "react-router-dom";
import { useContentBundle } from "../context/ContentContext";
import { DisclaimerFooter } from "../components/DisclaimerFooter";

export function AuditToolsPage() {
  const bundle = useContentBundle();

  return (
    <div>
      <h1 className="page-title">Công cụ tác nghiệp kiểm tra</h1>
      <p style={{ color: "var(--text-muted)" }}>
        Ví dụ minh họa cho một số chủ đề — chưa phủ toàn bộ 93 chủ đề (xem <code>docs/open-questions.md</code>).
      </p>

      <h2>Chương trình kiểm toán</h2>
      {bundle.auditPrograms.map((p) => {
        const topic = bundle.topics.find((t) => t.id === p.topicId);
        return (
          <Link key={p.topicId} to={`/chu-de/${p.topicId}`} className="card card-link">
            <strong>{topic ? `${topic.id} — ${topic.title}` : p.topicId}</strong>
            <p style={{ marginBottom: 0 }}>{p.objective}</p>
          </Link>
        );
      })}

      <h2>Thư viện bằng chứng</h2>
      {bundle.evidenceItems.map((e, i) => {
        const req = bundle.controlRequirements.find((r) => r.id === e.requirementId);
        return (
          <div key={i} className="card">
            <strong>{req ? `${req.clauseRef} — ${req.title}` : e.requirementId}</strong>
            <p style={{ marginBottom: 4 }}>
              <strong>Loại bằng chứng:</strong> {e.evidenceType}
            </p>
            <p style={{ marginBottom: 4 }}>
              <strong>Đơn vị sở hữu:</strong> {e.ownerUnit} · <strong>Hệ thống:</strong> {e.sourceSystem}
            </p>
            <p style={{ marginBottom: 0 }}>
              <strong>Tần suất:</strong> {e.frequency}
            </p>
          </div>
        );
      })}

      {bundle.complianceObligations.length === 0 && (
        <>
          <h2>Lịch nghĩa vụ tuân thủ định kỳ</h2>
          <div className="card">
            <p>
              Chưa có dữ liệu — thời hạn/chu kỳ nghĩa vụ tuân thủ đòi hỏi căn cứ pháp lý đã xác minh chính
              xác (xem mục "Vì sao ComplianceObligation để trống" trong <code>docs/open-questions.md</code>).
            </p>
          </div>
        </>
      )}

      <DisclaimerFooter />
    </div>
  );
}
