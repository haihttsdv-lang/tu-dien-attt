import { useNavigate } from "react-router-dom";
import type { DocumentRelation, DocumentStatus, LegalDocument } from "../../../data/schema/models";

const STATUS_FILL: Record<DocumentStatus, string> = {
  con_hieu_luc: "var(--ok-bg)",
  het_hieu_luc: "var(--danger-bg)",
  hieu_luc_mot_phan: "var(--warn-bg)",
  chua_co_hieu_luc: "var(--info-bg)",
  du_thao: "var(--info-bg)",
  chua_xac_minh: "var(--unverified-bg)"
};

const RELATION_SHORT: Record<string, string> = {
  thay_the: "thay thế",
  bi_thay_the_boi: "bị thay thế bởi",
  sua_doi: "sửa đổi",
  bi_sua_doi_boi: "bị sửa đổi bởi",
  bai_bo_mot_phan: "bãi bỏ một phần",
  huong_dan: "hướng dẫn",
  duoc_huong_dan_boi: "được hướng dẫn bởi"
};

interface Edge {
  doc: LegalDocument;
  relation: DocumentRelation;
  direction: "out" | "in";
}

/** FR-S02: so do quan he van ban — tu dong sinh tu documentRelations. */
export function DocumentRelationGraph({
  center,
  edges
}: {
  center: LegalDocument;
  edges: Edge[];
}) {
  const navigate = useNavigate();
  if (edges.length === 0) return null;

  const size = 340;
  const c = size / 2;
  const radius = size * 0.37;
  const centerR = 44;
  const nodeR = 34;

  return (
    <figure className="diagram-figure">
      <figcaption className="diagram-title">Sơ đồ quan hệ văn bản</figcaption>
      <svg
        viewBox={`0 0 ${size} ${size}`}
        width="100%"
        style={{ maxWidth: size }}
        role="img"
        aria-label={`Quan hệ giữa ${center.docNumber} và các văn bản khác`}
      >
        {edges.map((e, i) => {
          const angle = (2 * Math.PI * i) / edges.length - Math.PI / 2;
          const x = c + radius * Math.cos(angle);
          const y = c + radius * Math.sin(angle);
          const midX = (c + x) / 2;
          const midY = (c + y) / 2;
          return (
            <g key={`e-${i}`}>
              <line x1={c} y1={c} x2={x} y2={y} stroke="var(--border)" strokeWidth={2} />
              <rect x={midX - 34} y={midY - 9} width={68} height={18} rx={4} fill="var(--bg)" />
              <text x={midX} y={midY} textAnchor="middle" dominantBaseline="middle" fontSize={9} fill="var(--text-muted)">
                {RELATION_SHORT[e.relation.relationType] ?? e.relation.relationType}
              </text>
            </g>
          );
        })}

        {edges.map((e, i) => {
          const angle = (2 * Math.PI * i) / edges.length - Math.PI / 2;
          const x = c + radius * Math.cos(angle);
          const y = c + radius * Math.sin(angle);
          return (
            <g
              key={`n-${i}`}
              onClick={() => navigate(`/van-ban/${e.doc.id}`)}
              style={{ cursor: "pointer" }}
              role="link"
              tabIndex={0}
              onKeyDown={(ev) => ev.key === "Enter" && navigate(`/van-ban/${e.doc.id}`)}
            >
              <circle cx={x} cy={y} r={nodeR} fill={STATUS_FILL[e.doc.status]} stroke="var(--border)" strokeWidth={2} />
              <text x={x} y={y} textAnchor="middle" dominantBaseline="middle" fontSize={10} fontWeight={700} fill="var(--text)">
                {e.doc.docNumber}
              </text>
            </g>
          );
        })}

        <circle cx={c} cy={c} r={centerR} fill={STATUS_FILL[center.status]} stroke="var(--accent)" strokeWidth={3} />
        <text x={c} y={c} textAnchor="middle" dominantBaseline="middle" fontSize={12} fontWeight={700} fill="var(--text)">
          {center.docNumber}
        </text>
      </svg>
    </figure>
  );
}
