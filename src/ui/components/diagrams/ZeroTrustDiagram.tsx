/** So do kien truc Zero Trust don gian hoa (NIST SP 800-207) — KT-12, CM-10. */
export function ZeroTrustDiagram() {
  const width = 420;
  const height = 260;

  const box = (x: number, y: number, w: number, h: number, label: string, sub?: string, key?: string) => (
    <g key={key}>
      <rect x={x} y={y} width={w} height={h} rx={8} fill="var(--surface)" stroke="var(--border)" strokeWidth={2} />
      <text x={x + w / 2} y={y + h / 2 - (sub ? 8 : 0)} textAnchor="middle" dominantBaseline="middle" fontSize={12} fontWeight={700} fill="var(--text)">
        {label}
      </text>
      {sub && (
        <text x={x + w / 2} y={y + h / 2 + 14} textAnchor="middle" dominantBaseline="middle" fontSize={9.5} fill="var(--text-muted)">
          {sub}
        </text>
      )}
    </g>
  );

  return (
    <figure className="diagram-figure">
      <figcaption className="diagram-title">Kiến trúc Zero Trust (đơn giản hóa theo NIST SP 800-207)</figcaption>
      <svg viewBox={`0 0 ${width} ${height}`} width="100%" style={{ maxWidth: width }} role="img" aria-label="Sơ đồ kiến trúc Zero Trust">
        {box(10, 100, 100, 60, "Chủ thể / Thiết bị", "yêu cầu truy cập")}

        {/* mui ten toi PEP */}
        <line x1={110} y1={130} x2={150} y2={130} stroke="var(--accent)" strokeWidth={2} markerEnd="url(#zt-arrow)" />

        {box(150, 100, 110, 60, "Policy Enforcement Point", "cổng thực thi chính sách")}

        <line x1={260} y1={130} x2={310} y2={130} stroke="var(--accent)" strokeWidth={2} markerEnd="url(#zt-arrow)" />
        {box(310, 100, 100, 60, "Tài nguyên", "ứng dụng / dữ liệu")}

        {/* PEP <-> Policy engine, hai chieu, kiem tra lien tuc */}
        <line x1={205} y1={100} x2={205} y2={60} stroke="var(--text-muted)" strokeWidth={2} strokeDasharray="4,3" markerEnd="url(#zt-arrow-muted)" />
        {box(120, 4, 170, 50, "Policy Engine / Admin", "quyết định theo danh tính, thiết bị, ngữ cảnh")}

        <defs>
          <marker id="zt-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 Z" fill="var(--accent)" />
          </marker>
          <marker id="zt-arrow-muted" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 Z" fill="var(--text-muted)" />
          </marker>
        </defs>

        <text x={width / 2} y={height - 24} textAnchor="middle" fontSize={10.5} fill="var(--text-muted)">
          Mọi yêu cầu đều được xác thực, cấp quyền và mã hóa theo từng phiên — không có "vùng tin cậy mặc định".
        </text>
      </svg>
    </figure>
  );
}
