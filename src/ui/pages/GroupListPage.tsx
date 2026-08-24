import { useMemo, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { useContentBundle } from "../context/ContentContext";
import { TOPIC_GROUP_LABEL, type TopicGroup } from "../../data/schema/models";
import { DisclaimerFooter } from "../components/DisclaimerFooter";

const GROUPS = Object.keys(TOPIC_GROUP_LABEL) as TopicGroup[];

export function GroupListPage() {
  const bundle = useContentBundle();
  const [params, setParams] = useSearchParams();
  const activeGroup = (params.get("nhom") as TopicGroup | null) ?? null;
  const [onlyWithContent, setOnlyWithContent] = useState(false);

  const topicIdsWithContent = useMemo(
    () => new Set(bundle.contentBlocks.map((c) => c.topicId)),
    [bundle.contentBlocks]
  );

  const topics = useMemo(() => {
    return bundle.topics.filter((t) => {
      if (activeGroup && t.group !== activeGroup) return false;
      if (onlyWithContent && !topicIdsWithContent.has(t.id)) return false;
      return true;
    });
  }, [bundle.topics, activeGroup, onlyWithContent, topicIdsWithContent]);

  return (
    <div>
      <h1 className="page-title">Duyệt chủ đề (93 chủ đề / 9 nhóm)</h1>

      <div className="filter-row">
        <button
          type="button"
          className={`chip${activeGroup === null ? " chip--active" : ""}`}
          onClick={() => setParams({})}
        >
          Tất cả
        </button>
        {GROUPS.map((g) => (
          <button
            key={g}
            type="button"
            className={`chip${activeGroup === g ? " chip--active" : ""}`}
            onClick={() => setParams({ nhom: g })}
          >
            {g}
          </button>
        ))}
      </div>

      <label style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.9rem", margin: "8px 0 16px" }}>
        <input
          type="checkbox"
          checked={onlyWithContent}
          onChange={(e) => setOnlyWithContent(e.target.checked)}
        />
        Chỉ hiện chủ đề đã có nội dung T1
      </label>

      {activeGroup && (
        <p style={{ color: "var(--text-muted)", marginTop: -8 }}>
          {activeGroup} — {TOPIC_GROUP_LABEL[activeGroup]}
        </p>
      )}

      {topics.map((t) => {
        const hasContent = topicIdsWithContent.has(t.id);
        return (
          <Link key={t.id} to={`/chu-de/${t.id}`} className="card card-link">
            <div style={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
              <div>
                <strong>
                  {t.id} — {t.title}
                </strong>
                <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>{t.titleEn}</div>
              </div>
              {!hasContent && (
                <span className="status-badge" style={{ background: "var(--info-bg)", color: "var(--info-fg)", whiteSpace: "nowrap" }}>
                  Chưa có T1
                </span>
              )}
            </div>
          </Link>
        );
      })}

      <DisclaimerFooter />
    </div>
  );
}
