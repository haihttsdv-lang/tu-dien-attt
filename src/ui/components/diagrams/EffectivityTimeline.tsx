export interface TimelineEvent {
  date: string; // ISO yyyy-mm-dd
  label: string;
  kind: "issued" | "effective" | "repealed" | "today";
}

const KIND_COLOR: Record<TimelineEvent["kind"], string> = {
  issued: "var(--info-fg)",
  effective: "var(--ok-fg)",
  repealed: "var(--danger-fg)",
  today: "var(--accent)"
};

/** Duong thoi gian truc quan cho vong doi hieu luc mot van ban (FR-E09..E11). */
export function EffectivityTimeline({ events, title }: { events: TimelineEvent[]; title?: string }) {
  if (events.length === 0) return null;
  const sorted = [...events].sort((a, b) => a.date.localeCompare(b.date));
  const width = 640;
  const height = 120;
  const padding = 40;

  const minTime = new Date(sorted[0].date).getTime();
  const maxTime = new Date(sorted[sorted.length - 1].date).getTime();
  const span = Math.max(1, maxTime - minTime);

  function xFor(date: string) {
    const t = new Date(date).getTime();
    return padding + ((t - minTime) / span) * (width - padding * 2);
  }

  return (
    <figure className="diagram-figure">
      {title && <figcaption className="diagram-title">{title}</figcaption>}
      <svg
        viewBox={`0 0 ${width} ${height}`}
        width="100%"
        style={{ maxWidth: width }}
        role="img"
        aria-label={title ?? "Đường thời gian hiệu lực"}
      >
        <line x1={padding} y1={height / 2} x2={width - padding} y2={height / 2} stroke="var(--border)" strokeWidth={3} />
        {sorted.map((e, i) => {
          const x = xFor(e.date);
          const above = i % 2 === 0;
          return (
            <g key={i}>
              <circle cx={x} cy={height / 2} r={7} fill={KIND_COLOR[e.kind]} />
              <line
                x1={x}
                y1={height / 2}
                x2={x}
                y2={above ? height / 2 - 26 : height / 2 + 26}
                stroke={KIND_COLOR[e.kind]}
                strokeWidth={1.5}
                strokeDasharray="3,2"
              />
              <text
                x={x}
                y={above ? height / 2 - 30 : height / 2 + 40}
                textAnchor="middle"
                fontSize={10}
                fontWeight={600}
                fill="var(--text)"
              >
                {e.date}
              </text>
              <text
                x={x}
                y={above ? height / 2 - 18 : height / 2 + 52}
                textAnchor="middle"
                fontSize={9.5}
                fill="var(--text-muted)"
              >
                {truncate(e.label, 22)}
              </text>
            </g>
          );
        })}
      </svg>
    </figure>
  );
}

function truncate(s: string, max: number) {
  return s.length > max ? `${s.slice(0, max - 1)}…` : s;
}
