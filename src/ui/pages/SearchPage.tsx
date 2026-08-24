import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useSearchIndex } from "../context/ContentContext";
import { search, type SearchResultType } from "../../core/search";
import { StatusBadge } from "../components/StatusBadge";
import { DisclaimerFooter } from "../components/DisclaimerFooter";
import { useRecentSearches } from "../hooks/useLocalHistory";

const TYPE_LABEL: Record<SearchResultType, string> = {
  topic: "Chủ đề",
  legal_document: "Văn bản",
  article: "Điều khoản",
  term: "Thuật ngữ"
};

const SYNONYMS = [
  { term: "PAM", synonyms: ["quản lý tài khoản đặc quyền", "quan ly tai khoan dac quyen"] },
  { term: "IAM", synonyms: ["quản lý định danh và truy cập", "quan ly dinh danh va truy cap"] },
  { term: "SOC", synonyms: ["trung tâm điều hành an ninh", "trung tam dieu hanh an ninh"] },
  { term: "MFA", synonyms: ["xác thực đa yếu tố", "xac thuc da yeu to"] },
  { term: "BCM", synonyms: ["quản lý liên tục hoạt động kinh doanh"] },
  { term: "eKYC", synonyms: ["định danh khách hàng điện tử"] }
];

export function SearchPage() {
  const index = useSearchIndex();
  const [params, setParams] = useSearchParams();
  const [query, setQuery] = useState(params.get("q") ?? "");
  const [typeFilter, setTypeFilter] = useState<SearchResultType | null>(null);
  const { recent, addRecent, clearRecent } = useRecentSearches();

  useEffect(() => {
    const q = params.get("q");
    if (q) setQuery(q);
  }, [params]);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const all = search(index, query, { synonyms: SYNONYMS, limit: 50 });
    return typeFilter ? all.filter((r) => r.doc.type === typeFilter) : all;
  }, [index, query, typeFilter]);

  function runSearch(q: string) {
    setQuery(q);
    setParams({ q });
    addRecent(q);
  }

  return (
    <div>
      <h1 className="page-title">Tìm kiếm</h1>
      <form
        role="search"
        onSubmit={(e) => {
          e.preventDefault();
          runSearch(query);
        }}
      >
        <input
          className="search-input"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="vd. PAM, quan ly dac quyen, 09/2020 dieu 25..."
          aria-label="Từ khóa tìm kiếm"
          autoFocus
        />
      </form>

      <div className="filter-row">
        {(Object.keys(TYPE_LABEL) as SearchResultType[]).map((t) => (
          <button
            key={t}
            type="button"
            className={`chip${typeFilter === t ? " chip--active" : ""}`}
            onClick={() => setTypeFilter(typeFilter === t ? null : t)}
          >
            {TYPE_LABEL[t]}
          </button>
        ))}
      </div>

      {!query && recent.length > 0 && (
        <div className="card">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h2 style={{ margin: 0 }}>Tra cứu gần đây</h2>
            <button type="button" className="btn-secondary" onClick={clearRecent}>
              Xóa
            </button>
          </div>
          <div className="filter-row">
            {recent.map((q) => (
              <button key={q} type="button" className="chip" onClick={() => runSearch(q)}>
                {q}
              </button>
            ))}
          </div>
        </div>
      )}

      {query && (
        <p style={{ color: "var(--text-muted)" }}>{results.length} kết quả cho "{query}"</p>
      )}

      {results.map((r) => (
        <Link key={r.doc.id} to={r.doc.href} className="card card-link">
          <div style={{ display: "flex", justifyContent: "space-between", gap: 8, flexWrap: "wrap" }}>
            <div>
              <span className="status-badge" style={{ background: "var(--info-bg)", color: "var(--info-fg)" }}>
                {TYPE_LABEL[r.doc.type]}
              </span>
              <div style={{ marginTop: 6 }}>
                <strong>{r.doc.title}</strong>
              </div>
              {r.doc.subtitle && (
                <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>{r.doc.subtitle}</div>
              )}
            </div>
            {/* FR-Q05: trang thai hien ngay tren dong ket qua */}
            {r.doc.documentStatus && <StatusBadge status={r.doc.documentStatus} />}
          </div>
        </Link>
      ))}

      {query && results.length === 0 && (
        <div className="card">
          <p>Không tìm thấy kết quả. Thử từ khóa khác hoặc bỏ bộ lọc loại kết quả.</p>
        </div>
      )}

      {!query && (
        <div className="card">
          <h2>Gợi ý</h2>
          <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>
            Bạn có thể gõ tiếng Việt có dấu hoặc không dấu, tiếng Anh, viết tắt (PAM, IAM, SOC, MFA...),
            hoặc số hiệu văn bản kèm điều khoản (vd. "09/2020 điều 25").
          </p>
          <div className="filter-row">
            {["PAM", "IAM", "09/2020 điều 25", "Zero Trust", "PCI DSS"].map((q) => (
              <button key={q} type="button" className="chip" onClick={() => runSearch(q)}>
                {q}
              </button>
            ))}
          </div>
        </div>
      )}

      <DisclaimerFooter />
    </div>
  );
}
