import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useContentBundle } from "../context/ContentContext";
import { StatusBadge } from "../components/StatusBadge";
import { SourceCitationList } from "../components/SourceCitationList";
import { DisclaimerFooter } from "../components/DisclaimerFooter";
import { useBookmarks } from "../hooks/useLocalHistory";
import { TOPIC_GROUP_LABEL, type ContentTier } from "../../data/schema/models";
import { NotFoundPage } from "./NotFoundPage";
import { getConceptDiagrams } from "../diagrams/conceptDiagrams";
import { TopicRelationGraph } from "../components/diagrams/TopicRelationGraph";

const TIERS: { id: ContentTier; label: string }[] = [
  { id: "T1", label: "T1 — Tra cứu nhanh" },
  { id: "T2", label: "T2 — Giải thích đầy đủ" },
  { id: "T3", label: "T3 — Tham chiếu chuyên sâu" }
];

export function TopicDetailPage() {
  const { topicId } = useParams<{ topicId: string }>();
  const bundle = useContentBundle();
  const [tier, setTier] = useState<ContentTier>("T1");
  const { isBookmarked, toggleBookmark } = useBookmarks();

  const topic = bundle.topics.find((t) => t.id === topicId);

  const blocksForTier = useMemo(
    () => bundle.contentBlocks.filter((c) => c.topicId === topicId && c.tier === tier),
    [bundle.contentBlocks, topicId, tier]
  );

  // FR-K02: nguon lien quan + trang thai hieu luc ngay dau trang.
  const citedDocuments = useMemo(() => {
    const ids = new Set<string>();
    for (const block of bundle.contentBlocks) {
      if (block.topicId !== topicId) continue;
      for (const s of block.sources) {
        if (s.type === "legal_document") ids.add(s.refId);
      }
    }
    return [...ids]
      .map((id) => bundle.legalDocuments.find((d) => d.id === id))
      .filter((d): d is NonNullable<typeof d> => Boolean(d));
  }, [bundle.contentBlocks, bundle.legalDocuments, topicId]);

  const relatedAuditProgram = bundle.auditPrograms.find((a) => a.topicId === topicId);
  const relatedInterviewQuestions = bundle.interviewQuestions.filter((q) => q.topicId === topicId);

  const relatedTopics = useMemo(
    () =>
      (topic?.relatedTopicIds ?? [])
        .map((rid) => bundle.topics.find((t) => t.id === rid))
        .filter((t): t is NonNullable<typeof t> => Boolean(t)),
    [topic, bundle.topics]
  );

  if (!topic) return <NotFoundPage />;

  const conceptDiagrams = getConceptDiagrams(topic.id);

  const href = `/chu-de/${topic.id}`;

  return (
    <div>
      <p style={{ color: "var(--text-muted)", marginBottom: 4 }}>
        {topic.group} — {TOPIC_GROUP_LABEL[topic.group]}
      </p>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8 }}>
        <h1 className="page-title" style={{ marginBottom: 4 }}>
          {topic.id} — {topic.title}
        </h1>
        <button
          type="button"
          className="btn-secondary"
          aria-pressed={isBookmarked(href)}
          onClick={() => toggleBookmark(href)}
          title="Đánh dấu chủ đề (FR-Q10)"
        >
          {isBookmarked(href) ? "★ Đã đánh dấu" : "☆ Đánh dấu"}
        </button>
      </div>
      <p style={{ color: "var(--text-muted)", marginTop: -8 }}>{topic.titleEn}</p>

      {citedDocuments.length > 0 && (
        <div className="filter-row">
          {citedDocuments.map((d) => (
            <Link key={d.id} to={`/van-ban/${d.id}`} style={{ textDecoration: "none" }}>
              <StatusBadge status={d.status} />
            </Link>
          ))}
        </div>
      )}

      <div className="tier-tabs" role="tablist">
        {TIERS.map((t) => (
          <button
            key={t.id}
            role="tab"
            aria-selected={tier === t.id}
            className={`tier-tab${tier === t.id ? " tier-tab--active" : ""}`}
            onClick={() => setTier(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {conceptDiagrams}

      {blocksForTier.length === 0 ? (
        <div className="card">
          <p>
            Chưa có nội dung tầng {tier} cho chủ đề này. Xem{" "}
            <code>docs/open-questions.md</code> trong repo để biết lý do (thường là do văn bản pháp lý
            liên quan chưa xác minh được số hiệu chính thức).
          </p>
        </div>
      ) : (
        blocksForTier.map((block) => (
          <div key={block.id} className="card">
            <p style={{ whiteSpace: "pre-wrap" }}>{block.body}</p>
            <span className="status-badge" style={{ background: "var(--info-bg)", color: "var(--info-fg)" }}>
              {block.kind === "trich_dan" ? "Trích dẫn nguyên văn" : "Diễn giải biên tập"}
            </span>
            <SourceCitationList sources={block.sources} bundle={bundle} bodyForCopy={block.body} />
          </div>
        ))
      )}

      {relatedAuditProgram && (
        <div className="card">
          <h2>Chương trình kiểm toán</h2>
          <p><strong>Mục tiêu:</strong> {relatedAuditProgram.objective}</p>
          <p><strong>Phạm vi:</strong> {relatedAuditProgram.scope}</p>
          <p><strong>Thủ tục:</strong></p>
          <ul>{relatedAuditProgram.procedures.map((p, i) => <li key={i}>{p}</li>)}</ul>
          <p><strong>Tiêu chí đánh giá:</strong></p>
          <ul>{relatedAuditProgram.criteria.map((c, i) => <li key={i}>{c}</li>)}</ul>
        </div>
      )}

      {relatedInterviewQuestions.length > 0 && (
        <div className="card">
          <h2>Câu hỏi phỏng vấn kiểm tra</h2>
          {relatedInterviewQuestions.map((q, i) => (
            <div key={i} style={{ marginBottom: 12 }}>
              <p><strong>{q.question}</strong></p>
              {q.redFlags.length > 0 && (
                <>
                  <p style={{ margin: "4px 0 2px", color: "var(--danger-fg)", fontSize: "0.85rem" }}>Dấu hiệu không đáng tin:</p>
                  <ul>{q.redFlags.map((r, j) => <li key={j}>{r}</li>)}</ul>
                </>
              )}
              {q.followUps.length > 0 && (
                <>
                  <p style={{ margin: "4px 0 2px", fontSize: "0.85rem" }}>Câu hỏi đào sâu:</p>
                  <ul>{q.followUps.map((f, j) => <li key={j}>{f}</li>)}</ul>
                </>
              )}
            </div>
          ))}
        </div>
      )}

      {relatedTopics.length > 0 && (
        <div className="card">
          <h2>Chủ đề liên quan</h2>
          <TopicRelationGraph center={topic} related={relatedTopics} />
        </div>
      )}

      <DisclaimerFooter />
    </div>
  );
}
