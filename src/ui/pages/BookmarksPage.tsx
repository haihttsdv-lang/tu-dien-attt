import { Link } from "react-router-dom";
import { useContentBundle } from "../context/ContentContext";
import { useBookmarks } from "../hooks/useLocalHistory";
import { DisclaimerFooter } from "../components/DisclaimerFooter";
import { TOPIC_GROUP_LABEL } from "../../data/schema/models";

/** FR-Q10: muc danh dau ca nhan — luu cuc bo tren thiet bi (localStorage). */
export function BookmarksPage() {
  const bundle = useContentBundle();
  const { bookmarks, toggleBookmark } = useBookmarks();

  const topics = bookmarks
    .map((href) => {
      const match = href.match(/^\/chu-de\/([\w-]+)$/);
      if (!match) return null;
      const topic = bundle.topics.find((t) => t.id === match[1]);
      return topic ? { href, topic } : null;
    })
    .filter((x): x is { href: string; topic: (typeof bundle.topics)[number] } => Boolean(x));

  return (
    <div>
      <h1 className="page-title">★ Chủ đề đã đánh dấu</h1>
      <p style={{ color: "var(--text-muted)" }}>
        Chỉ lưu trên thiết bị này (không đồng bộ, không gửi đi đâu) — xóa dữ liệu trình duyệt sẽ mất danh
        sách này.
      </p>

      {topics.length === 0 ? (
        <div className="card">
          <p>
            Chưa có chủ đề nào được đánh dấu. Mở một chủ đề bất kỳ và nhấn <strong>☆ Đánh dấu</strong> để
            thêm vào đây.
          </p>
        </div>
      ) : (
        topics.map(({ href, topic }) => (
          <div key={href} className="card" style={{ display: "flex", justifyContent: "space-between", gap: 8, alignItems: "flex-start" }}>
            <Link to={href} style={{ textDecoration: "none" }}>
              <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                {topic.group} — {TOPIC_GROUP_LABEL[topic.group]}
              </div>
              <strong>
                {topic.id} — {topic.title}
              </strong>
            </Link>
            <button type="button" className="btn-secondary" onClick={() => toggleBookmark(href)}>
              Bỏ đánh dấu
            </button>
          </div>
        ))
      )}

      <DisclaimerFooter />
    </div>
  );
}
