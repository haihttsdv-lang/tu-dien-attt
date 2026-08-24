import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useContentBundle } from "../context/ContentContext";
import { DisclaimerFooter } from "../components/DisclaimerFooter";
import { normalizeForMatch } from "../../core/search/vietnamese";

export function TermsPage() {
  const bundle = useContentBundle();
  const [q, setQ] = useState("");

  const sorted = useMemo(
    () => [...bundle.terms].sort((a, b) => a.vi.localeCompare(b.vi, "vi")),
    [bundle.terms]
  );

  const filtered = useMemo(() => {
    if (!q.trim()) return sorted;
    const nq = normalizeForMatch(q);
    return sorted.filter(
      (t) =>
        normalizeForMatch(t.vi).includes(nq) ||
        normalizeForMatch(t.en).includes(nq) ||
        (t.abbr && normalizeForMatch(t.abbr).includes(nq))
    );
  }, [sorted, q]);

  return (
    <div>
      <h1 className="page-title">Từ điển thuật ngữ song ngữ</h1>
      <input
        className="search-input"
        type="search"
        placeholder="Lọc thuật ngữ..."
        value={q}
        onChange={(e) => setQ(e.target.value)}
      />

      {filtered.map((t) => (
        <div key={t.vi} id={encodeURIComponent(t.vi)} className="card">
          <strong>
            {t.vi} {t.abbr && `(${t.abbr})`}
          </strong>
          <div style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>{t.en}</div>
          <p style={{ marginBottom: t.topicIds.length ? 8 : 0 }}>{t.definition}</p>
          {t.topicIds.length > 0 && (
            <div className="filter-row">
              {t.topicIds.map((tid) => {
                const topic = bundle.topics.find((x) => x.id === tid);
                if (!topic) return null;
                return (
                  <Link key={tid} to={`/chu-de/${tid}`} className="chip" style={{ textDecoration: "none" }}>
                    {topic.id}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      ))}

      <DisclaimerFooter />
    </div>
  );
}
