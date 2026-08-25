import { wrapLabel } from "./svgText";

/** Duong di cua nhat ky tu nguon toi kho tap trung — VH-02. */
export function LogPipelineDiagram() {
  const width = 500;
  const height = 170;

  const stage = (x: number, label: string, sub: string, w = 105) => {
    const subLines = wrapLabel(sub, 16);
    return (
      <g key={x}>
        <rect x={x} y={40} width={w} height={70} rx={8} fill="var(--surface)" stroke="var(--border)" strokeWidth={2} />
        <text x={x + w / 2} y={62} textAnchor="middle" fontSize={11} fontWeight={700} fill="var(--text)">
          {label}
        </text>
        {subLines.map((line, i) => (
          <text key={i} x={x + w / 2} y={78 + i * 11} textAnchor="middle" fontSize={8.5} fill="var(--text-muted)">
            {line}
          </text>
        ))}
      </g>
    );
  };

  const arrow = (x1: number, x2: number) => (
    <line key={`${x1}-${x2}`} x1={x1} y1={75} x2={x2} y2={75} stroke="var(--accent)" strokeWidth={2} markerEnd="url(#log-arrow)" />
  );

  return (
    <figure className="diagram-figure">
      <figcaption className="diagram-title">Đường đi của nhật ký (log pipeline)</figcaption>
      <svg viewBox={`0 0 ${width} ${height}`} width="100%" style={{ maxWidth: width }} role="img" aria-label="Sơ đồ đường đi nhật ký">
        <defs>
          <marker id="log-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 Z" fill="var(--accent)" />
          </marker>
        </defs>

        {stage(5, "Nguồn", "hệ điều hành, ứng dụng, thiết bị mạng", 110)}
        {arrow(115, 140)}
        {stage(140, "Thu thập", "agent / syslog / API", 105)}
        {arrow(245, 270)}
        {stage(270, "Chuẩn hóa", "đồng bộ định dạng + thời gian (NTP)", 110)}
        {arrow(380, 405)}
        {stage(405, "Kho tập trung", "chỉ ghi thêm, phân tầng lưu trữ", 90)}

        <text x={width / 2} y={135} textAnchor="middle" fontSize={9.5} fill="var(--text-muted)">
          Chuyển về kho tập trung càng sớm càng tốt — giảm thời gian nhật ký còn ở nơi có thể bị can thiệp
        </text>
      </svg>
    </figure>
  );
}
