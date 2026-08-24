import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useContentBundle } from "../context/ContentContext";
import { StatusBadge } from "../components/StatusBadge";
import { DisclaimerFooter } from "../components/DisclaimerFooter";
import { buildPointInTimeView, todayIso } from "../../core/effectivity";

/** FR-E09, E10, E11: "Xem quy dinh nhu tai ngay...". */
export function PointInTimePage() {
  const bundle = useContentBundle();
  const [params] = useSearchParams();
  const [asOfDate, setAsOfDate] = useState(todayIso());
  const focusDocId = params.get("doc");

  useEffect(() => {
    document.body.classList.add("point-in-time-mode");
    return () => document.body.classList.remove("point-in-time-mode");
  }, []);

  const view = buildPointInTimeView(
    bundle.legalDocuments,
    bundle.documentRelations,
    bundle.documentArticles,
    asOfDate
  );

  const sorted = focusDocId
    ? [...view].sort((a, b) => (a.document.id === focusDocId ? -1 : b.document.id === focusDocId ? 1 : 0))
    : view;

  return (
    <div>
      <h1 className="page-title">🕘 Xem quy định như tại ngày…</h1>
      <p>
        Chọn một mốc thời gian trong quá khứ (hoặc tương lai) để xem tập quy định có hiệu lực
        <strong> tại đúng thời điểm đó</strong> — không phải quy định hiện hành. Nền giao diện đổi màu để
        không nhầm với chế độ xem thông thường.
      </p>

      <label style={{ display: "block", marginBottom: 16 }}>
        Thời điểm xem:{" "}
        <input
          type="date"
          value={asOfDate}
          onChange={(e) => setAsOfDate(e.target.value)}
          style={{ minHeight: 48, padding: "0 10px", borderRadius: 8 }}
        />
      </label>

      {sorted.map(({ document, statusAsOf, repealedArticles }) => (
        <div key={document.id} className="card">
          <div style={{ display: "flex", justifyContent: "space-between", gap: 8, flexWrap: "wrap" }}>
            <Link to={`/van-ban/${document.id}`}>
              <strong>{document.docNumber}</strong> — {document.title}
            </Link>
            <StatusBadge status={statusAsOf} />
          </div>
          {repealedArticles.length > 0 && (
            <p style={{ fontSize: "0.85rem", marginTop: 6 }}>
              Điều khoản đã bãi bỏ tại thời điểm này: {repealedArticles.map((a) => a.articleRef).join(", ")}
            </p>
          )}
        </div>
      ))}

      <p style={{ fontSize: "0.8rem", color: "inherit", opacity: 0.85 }}>
        Kết quả tạo lúc: {new Date().toISOString()} — thời điểm tra cứu: {asOfDate}. Dùng nội dung này
        cho hồ sơ kiểm tra một sự việc trong quá khứ (FR-E11) — vẫn phải đối chiếu văn bản gốc.
      </p>

      <DisclaimerFooter />
    </div>
  );
}
