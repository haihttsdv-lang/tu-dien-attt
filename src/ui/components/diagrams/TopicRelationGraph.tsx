import { useNavigate } from "react-router-dom";
import type { Topic } from "../../../data/schema/models";

/** FR-K03: so do quan he chu de — tu dong sinh tu du lieu, ap dung cho MOI chu de. */
export function TopicRelationGraph({ center, related }: { center: Topic; related: Topic[] }) {
  const navigate = useNavigate();
  if (related.length === 0) return null;

  const size = 320;
  const c = size / 2;
  const radius = size * 0.36;
  const centerR = 40;
  const nodeR = 30;

  return (
    <figure className="diagram-figure">
      <figcaption className="diagram-title">Sơ đồ quan hệ chủ đề</figcaption>
      <svg
        viewBox={`0 0 ${size} ${size}`}
        width="100%"
        style={{ maxWidth: size }}
        role="img"
        aria-label={`Chủ đề ${center.id} và các chủ đề liên quan`}
      >
        {related.map((_, i) => {
          const angle = (2 * Math.PI * i) / related.length - Math.PI / 2;
          const x = c + radius * Math.cos(angle);
          const y = c + radius * Math.sin(angle);
          return <line key={`e-${i}`} x1={c} y1={c} x2={x} y2={y} stroke="var(--border)" strokeWidth={2} />;
        })}

        {related.map((r, i) => {
          const angle = (2 * Math.PI * i) / related.length - Math.PI / 2;
          const x = c + radius * Math.cos(angle);
          const y = c + radius * Math.sin(angle);
          return (
            <g
              key={`n-${i}`}
              onClick={() => navigate(`/chu-de/${r.id}`)}
              style={{ cursor: "pointer" }}
              role="link"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && navigate(`/chu-de/${r.id}`)}
            >
              <circle cx={x} cy={y} r={nodeR} fill="var(--surface)" stroke="var(--border)" strokeWidth={2} />
              <text x={x} y={y} textAnchor="middle" dominantBaseline="middle" fontSize={11} fontWeight={700} fill="var(--accent)">
                {r.id}
              </text>
            </g>
          );
        })}

        <circle cx={c} cy={c} r={centerR} fill="var(--accent)" />
        <text x={c} y={c} textAnchor="middle" dominantBaseline="middle" fontSize={13} fontWeight={700} fill="var(--primary-fg)">
          {center.id}
        </text>
      </svg>
      <div className="filter-row">
        {related.map((r) => (
          <button key={r.id} type="button" className="chip" onClick={() => navigate(`/chu-de/${r.id}`)}>
            {r.id} — {r.title}
          </button>
        ))}
      </div>
    </figure>
  );
}
