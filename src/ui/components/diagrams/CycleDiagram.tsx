/**
 * So do quy trinh dang vong lap (PDCA, quan ly rui ro, ung pho su co...).
 * Ve bang SVG thuan, tu tinh vi tri theo luong giac — khong phu thuoc anh
 * ben ngoai, tuong thich sang/toi qua bien CSS (currentColor).
 */
export interface CycleStep {
  label: string;
  detail?: string;
}

interface Props {
  steps: CycleStep[];
  title?: string;
  size?: number;
}

export function CycleDiagram({ steps, title, size = 320 }: Props) {
  const center = size / 2;
  const radius = size * 0.34;
  const nodeR = Math.max(28, size * 0.1);
  const n = steps.length;

  const points = steps.map((_, i) => {
    const angle = (2 * Math.PI * i) / n - Math.PI / 2;
    return {
      x: center + radius * Math.cos(angle),
      y: center + radius * Math.sin(angle)
    };
  });

  return (
    <figure className="diagram-figure">
      {title && <figcaption className="diagram-title">{title}</figcaption>}
      <svg
        viewBox={`0 0 ${size} ${size}`}
        width="100%"
        style={{ maxWidth: size }}
        role="img"
        aria-label={title ?? "Sơ đồ quy trình dạng vòng lặp"}
      >
        <defs>
          <marker
            id="cycle-arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M0,0 L10,5 L0,10 Z" fill="var(--accent)" />
          </marker>
        </defs>

        {points.map((p, i) => {
          const next = points[(i + 1) % n];
          // duong cong nhe giua hai node lien tiep, chua toi vien node de mui ten khong bi de len chu
          const dx = next.x - p.x;
          const dy = next.y - p.y;
          const dist = Math.hypot(dx, dy);
          const ux = dx / dist;
          const uy = dy / dist;
          const startX = p.x + ux * nodeR;
          const startY = p.y + uy * nodeR;
          const endX = next.x - ux * (nodeR + 8);
          const endY = next.y - uy * (nodeR + 8);
          const midX = (startX + endX) / 2 - uy * 18;
          const midY = (startY + endY) / 2 + ux * 18;
          return (
            <path
              key={`edge-${i}`}
              d={`M ${startX} ${startY} Q ${midX} ${midY} ${endX} ${endY}`}
              fill="none"
              stroke="var(--accent)"
              strokeWidth={2}
              markerEnd="url(#cycle-arrow)"
            />
          );
        })}

        {points.map((p, i) => (
          <g key={`node-${i}`}>
            <circle cx={p.x} cy={p.y} r={nodeR} fill="var(--surface)" stroke="var(--accent)" strokeWidth={2} />
            <text
              x={p.x}
              y={p.y}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize={Math.max(11, nodeR * 0.32)}
              fill="var(--text)"
              fontWeight={600}
            >
              {wrapLabel(steps[i].label).map((line, li) => (
                <tspan key={li} x={p.x} dy={li === 0 ? -((wrapLabel(steps[i].label).length - 1) * 6) : 12}>
                  {line}
                </tspan>
              ))}
            </text>
          </g>
        ))}
      </svg>
      <ol className="diagram-legend">
        {steps.map((s, i) => (
          <li key={i}>
            <strong>{s.label}</strong>
            {s.detail && <span> — {s.detail}</span>}
          </li>
        ))}
      </ol>
    </figure>
  );
}

function wrapLabel(label: string): string[] {
  const words = label.split(" ");
  if (words.length <= 2) return [label];
  const mid = Math.ceil(words.length / 2);
  return [words.slice(0, mid).join(" "), words.slice(mid).join(" ")];
}
