/** Duong di cua nhat ky tu nguon toi kho tap trung — VH-02. */
export function LogPipelineDiagram() {
  const width = 480;
  const height = 160;

  const stage = (x: number, label: string, sub: string, w = 100) => (
    <g key={x}>
      <rect x={x} y={40} width={w} height={60} rx={8} fill="var(--surface)" stroke="var(--border)" strokeWidth={2} />
      <text x={x + w / 2} y={62} textAnchor="middle" fontSize={11} fontWeight={700} fill="var(--text)">
        {label}
      </text>
      <text x={x + w / 2} y={78} textAnchor="middle" fontSize={8.5} fill="var(--text-muted)">
        {sub}
      </text>
    </g>
  );

  const arrow = (x1: number, x2: number) => (
    <line key={`${x1}-${x2}`} x1={x1} y1={70} x2={x2} y2={70} stroke="var(--accent)" strokeWidth={2} markerEnd="url(#log-arrow)" />
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

        {stage(5, "Nguồn", "hệ điều hành, ứng dụng, thiết bị mạng", 95)}
        {arrow(100, 130)}
        {stage(130, "Thu thập", "agent / syslog / API", 95)}
        {arrow(225, 255)}
        {stage(255, "Chuẩn hóa", "đồng bộ định dạng + thời gian (NTP)", 105)}
        {arrow(360, 390)}
        {stage(390, "Kho tập trung", "chỉ ghi thêm, phân tầng lưu trữ", 85)}

        <text x={width / 2} y={130} textAnchor="middle" fontSize={9.5} fill="var(--text-muted)">
          Chuyển về kho tập trung càng sớm càng tốt — giảm thời gian nhật ký còn ở nơi có thể bị can thiệp
        </text>
      </svg>
    </figure>
  );
}
