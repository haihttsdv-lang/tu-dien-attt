import { useMemo, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { TOPIC_GROUP_LABEL, type TopicGroup } from "../../data/schema/models";
import { DisclaimerFooter } from "../components/DisclaimerFooter";
import { useContentBundle } from "../context/ContentContext";
import { GroupOverviewChart } from "../components/diagrams/GroupOverviewChart";

const GROUPS = Object.keys(TOPIC_GROUP_LABEL) as TopicGroup[];

export function HomePage() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const bundle = useContentBundle();
  const topicIdsWithContent = useMemo(
    () => new Set(bundle.contentBlocks.map((c) => c.topicId)),
    [bundle.contentBlocks]
  );

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (query.trim()) navigate(`/tim-kiem?q=${encodeURIComponent(query.trim())}`);
  }

  return (
    <div>
      <h1 className="page-title">Bách khoa ATTT Ngân hàng</h1>
      <p style={{ color: "var(--text-muted)" }}>
        Tra cứu pháp lý, chuẩn mực quốc tế và kiểm soát an toàn thông tin ngành
        ngân hàng — hoạt động ngoại tuyến, tối ưu cho điện thoại.
      </p>

      <form onSubmit={onSubmit} role="search">
        <input
          className="search-input"
          type="search"
          placeholder="Tìm theo từ khóa, số hiệu văn bản (vd. 09/2020 điều 25)..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Tìm kiếm"
        />
      </form>

      <div className="filter-row" style={{ marginTop: 16 }}>
        <Link to="/khan-cap" className="btn-primary" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center" }}>
          🚨 Chế độ khẩn cấp
        </Link>
        <Link to="/xem-theo-thoi-diem" className="btn-secondary" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center" }}>
          🕘 Xem theo thời điểm
        </Link>
        <Link to="/anh-xa" className="btn-secondary" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center" }}>
          🔗 Ánh xạ khung
        </Link>
      </div>

      <h2 style={{ marginTop: 24 }}>Duyệt theo nhóm chủ đề</h2>
      <GroupOverviewChart topics={bundle.topics} topicIdsWithContent={topicIdsWithContent} />
      <div className="group-grid">
        {GROUPS.map((g) => (
          <Link key={g} to={`/chu-de?nhom=${g}`} className="card card-link">
            <strong>{g}</strong>
            <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
              {TOPIC_GROUP_LABEL[g]}
            </div>
          </Link>
        ))}
      </div>

      <DisclaimerFooter />
    </div>
  );
}
