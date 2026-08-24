/** So do truc quan RTO/RPO quanh moc su co — CC-04. */
export function RtoRpoDiagram() {
  const width = 480;
  const height = 160;
  const incidentX = width * 0.55;
  const lastBackupX = width * 0.3;
  const restoredX = width * 0.8;

  return (
    <figure className="diagram-figure">
      <figcaption className="diagram-title">RTO và RPO quanh mốc sự cố</figcaption>
      <svg viewBox={`0 0 ${width} ${height}`} width="100%" style={{ maxWidth: width }} role="img" aria-label="Sơ đồ RTO và RPO">
        <line x1={20} y1={80} x2={width - 20} y2={80} stroke="var(--border)" strokeWidth={3} />

        {/* RPO: tu lan sao luu gan nhat toi luc su co (nhin ve qua khu) */}
        <line x1={lastBackupX} y1={60} x2={incidentX} y2={60} stroke="var(--warn-fg)" strokeWidth={4} />
        <text x={(lastBackupX + incidentX) / 2} y={46} textAnchor="middle" fontSize={12} fontWeight={700} fill="var(--warn-fg)">
          RPO
        </text>
        <text x={(lastBackupX + incidentX) / 2} y={98} textAnchor="middle" fontSize={9.5} fill="var(--text-muted)">
          dữ liệu có thể mất
        </text>

        {/* RTO: tu luc su co toi luc khoi phuc xong (nhin ve tuong lai) */}
        <line x1={incidentX} y1={100} x2={restoredX} y2={100} stroke="var(--danger-fg)" strokeWidth={4} />
        <text x={(incidentX + restoredX) / 2} y={120} textAnchor="middle" fontSize={12} fontWeight={700} fill="var(--danger-fg)">
          RTO
        </text>
        <text x={(incidentX + restoredX) / 2} y={136} textAnchor="middle" fontSize={9.5} fill="var(--text-muted)">
          thời gian khôi phục
        </text>

        {[
          { x: lastBackupX, label: "Lần sao lưu gần nhất" },
          { x: incidentX, label: "Sự cố xảy ra" },
          { x: restoredX, label: "Dịch vụ khôi phục" }
        ].map((p, i) => (
          <g key={i}>
            <circle cx={p.x} cy={80} r={6} fill="var(--accent)" />
            <text x={p.x} y={80 - 14} textAnchor="middle" fontSize={9} fill="var(--text)" style={{ display: i === 1 ? "none" : "block" }} />
          </g>
        ))}
        <text x={lastBackupX} y={150} textAnchor="middle" fontSize={9} fill="var(--text-muted)">Sao lưu gần nhất</text>
        <text x={incidentX} y={20} textAnchor="middle" fontSize={9} fontWeight={700} fill="var(--text)">Sự cố</text>
        <text x={restoredX} y={150} textAnchor="middle" fontSize={9} fill="var(--text-muted)">Khôi phục xong</text>
      </svg>
    </figure>
  );
}
