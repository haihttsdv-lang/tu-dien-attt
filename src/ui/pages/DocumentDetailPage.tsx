import { Link, useParams } from "react-router-dom";
import { useContentBundle } from "../context/ContentContext";
import { StatusBadge } from "../components/StatusBadge";
import { DisclaimerFooter } from "../components/DisclaimerFooter";
import {
  findReplacementDocument,
  getRepealedArticlesAsOf,
  todayIso
} from "../../core/effectivity";
import { NotFoundPage } from "./NotFoundPage";

const RELATION_LABEL: Record<string, string> = {
  thay_the: "Thay thế",
  bi_thay_the_boi: "Bị thay thế bởi",
  sua_doi: "Sửa đổi",
  bi_sua_doi_boi: "Bị sửa đổi bởi",
  bai_bo_mot_phan: "Bãi bỏ một phần",
  huong_dan: "Hướng dẫn",
  duoc_huong_dan_boi: "Được hướng dẫn bởi"
};

export function DocumentDetailPage() {
  const { docId } = useParams<{ docId: string }>();
  const bundle = useContentBundle();
  const doc = bundle.legalDocuments.find((d) => d.id === docId);

  if (!doc) return <NotFoundPage />;

  const articles = bundle.documentArticles.filter((a) => a.documentId === doc.id);
  const repealedNow = getRepealedArticlesAsOf(doc.id, articles, todayIso());
  const repealedRefs = new Set(repealedNow.map((r) => r.articleRef));
  const replacement =
    doc.status === "het_hieu_luc"
      ? findReplacementDocument(doc, bundle.legalDocuments, bundle.documentRelations)
      : undefined;

  const outgoingRelations = bundle.documentRelations.filter((r) => r.fromDocId === doc.id);
  const incomingRelations = bundle.documentRelations.filter((r) => r.toDocId === doc.id);

  return (
    <div>
      {/* FR-E05: canh bao khong the dong khi van ban het hieu luc */}
      {doc.status === "het_hieu_luc" && (
        <div className="warning-banner">
          <span aria-hidden="true">⚠</span>
          <span>
            Văn bản này ĐÃ HẾT HIỆU LỰC.
            {replacement ? (
              <>
                {" "}
                Văn bản thay thế: <Link to={`/van-ban/${replacement.id}`}>{replacement.docNumber}</Link>.
              </>
            ) : (
              " Chưa xác định được văn bản thay thế trong kho — kiểm tra thêm trước khi dùng làm căn cứ."
            )}
          </span>
        </div>
      )}
      {doc.status === "hieu_luc_mot_phan" && (
        <div className="warning-banner warning-banner--partial">
          <span aria-hidden="true">◐</span>
          <span>
            Văn bản này CÒN HIỆU LỰC MỘT PHẦN — có {repealedNow.length} điều khoản đã bị bãi bỏ/sửa đổi
            (xem danh sách bên dưới). Kiểm tra kỹ điều khoản cụ thể trước khi trích dẫn.
          </span>
        </div>
      )}
      {doc.status === "chua_xac_minh" && (
        <div className="warning-banner warning-banner--unverified">
          <span aria-hidden="true">⚠</span>
          <span>Bản ghi này CHƯA XÁC MINH đầy đủ — không dùng làm căn cứ trích dẫn chính thức.</span>
        </div>
      )}

      <h1 className="page-title">{doc.docNumber}</h1>
      <p>{doc.title}</p>

      <div className="card kv-list">
        <StatusBadge status={doc.status} />
        <dl>
          <dt>Cơ quan ban hành</dt>
          <dd>{doc.issuer}</dd>
          {doc.issuedDate && (
            <>
              <dt>Ngày ban hành</dt>
              <dd>{doc.issuedDate}</dd>
            </>
          )}
          {doc.effectiveFrom && (
            <>
              <dt>Ngày hiệu lực</dt>
              <dd>{doc.effectiveFrom}</dd>
            </>
          )}
          <dt>Hạng nguồn</dt>
          <dd>{doc.sourceTier}</dd>
          <dt>Rà soát lần cuối</dt>
          <dd>
            {doc.lastVerifiedAt} — {doc.verifiedBy}
          </dd>
          {doc.verificationNote && (
            <>
              <dt>Ghi chú xác minh</dt>
              <dd>{doc.verificationNote}</dd>
            </>
          )}
          {doc.officialUrl && (
            <>
              <dt>Văn bản gốc</dt>
              <dd>
                <a href={doc.officialUrl} target="_blank" rel="noreferrer">
                  Mở nguồn chính thức ↗
                </a>
              </dd>
            </>
          )}
        </dl>
      </div>

      {articles.length > 0 && (
        <div className="card">
          <h2>Điều khoản</h2>
          {articles.map((a) => {
            const isRepealed = repealedRefs.has(a.articleRef);
            return (
              <div
                key={a.articleRef}
                style={{
                  padding: "8px 0",
                  borderTop: "1px solid var(--border)"
                }}
              >
                <strong>{a.articleRef}</strong> — {a.title}
                {isRepealed && (
                  // FR-E06: canh bao o cap dieu khoan
                  <div className="warning-banner" style={{ marginTop: 6, marginBottom: 0 }}>
                    <span aria-hidden="true">⚠</span>
                    <span>
                      Điều khoản này đã bị bãi bỏ
                      {a.repealedBy && (
                        <>
                          {" "}
                          bởi{" "}
                          <Link to={`/van-ban/${a.repealedBy}`}>
                            {bundle.legalDocuments.find((d) => d.id === a.repealedBy)?.docNumber ?? a.repealedBy}
                          </Link>
                        </>
                      )}
                      {a.repealedDate && ` kể từ ${a.repealedDate}`}.
                    </span>
                  </div>
                )}
                {a.effectiveFrom && !isRepealed && (
                  <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                    Hiệu lực từ {a.effectiveFrom}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {(outgoingRelations.length > 0 || incomingRelations.length > 0) && (
        <div className="card">
          <h2>Quan hệ với văn bản khác</h2>
          {outgoingRelations.map((r, i) => {
            const target = bundle.legalDocuments.find((d) => d.id === r.toDocId);
            return (
              <p key={`out-${i}`}>
                {RELATION_LABEL[r.relationType] ?? r.relationType}:{" "}
                {target ? <Link to={`/van-ban/${target.id}`}>{target.docNumber}</Link> : r.toDocId}
                {r.scope && ` (phạm vi: ${r.scope})`}
              </p>
            );
          })}
          {incomingRelations.map((r, i) => {
            const source = bundle.legalDocuments.find((d) => d.id === r.fromDocId);
            return (
              <p key={`in-${i}`}>
                {source ? <Link to={`/van-ban/${source.id}`}>{source.docNumber}</Link> : r.fromDocId}{" "}
                {RELATION_LABEL[r.relationType]?.toLowerCase() ?? r.relationType} văn bản này
                {r.scope && ` (phạm vi: ${r.scope})`}
              </p>
            );
          })}
        </div>
      )}

      <p>
        <Link to={`/xem-theo-thoi-diem?doc=${doc.id}`}>🕘 Xem trạng thái văn bản này tại một thời điểm khác</Link>
      </p>

      <DisclaimerFooter />
    </div>
  );
}
