import { wrapLabel } from "./svgText";

/** So do kien truc Zero Trust don gian hoa (NIST SP 800-207) — KT-12, CM-10. */
export function ZeroTrustDiagram() {
  const width = 440;
  const height = 300;

  function multiline(x: number, cy: number, text: string, charsPerLine: number, fontSize: number, fill: string, weight = 400) {
    const lines = wrapLabel(text, charsPerLine);
    const lineHeight = fontSize + 2;
    const startY = cy - ((lines.length - 1) * lineHeight) / 2;
    return (
      <text x={x} y={startY} textAnchor="middle" dominantBaseline="middle" fontSize={fontSize} fontWeight={weight} fill={fill}>
        {lines.map((line, i) => (
          <tspan key={i} x={x} dy={i === 0 ? 0 : lineHeight}>
            {line}
          </tspan>
        ))}
      </text>
    );
  }

  const box = (x: number, y: number, w: number, h: number, label: string, sub?: string, labelChars = 14, subChars = 16) => (
    <g key={`${label}-${x}-${y}`}>
      <rect x={x} y={y} width={w} height={h} rx={8} fill="var(--surface)" stroke="var(--border)" strokeWidth={2} />
      {multiline(x + w / 2, y + h / 2 - (sub ? 12 : 0), label, labelChars, 12, "var(--text)", 700)}
      {sub && multiline(x + w / 2, y + h / 2 + 16, sub, subChars, 9, "var(--text-muted)")}
    </g>
  );

  return (
    <figure className="diagram-figure">
      <figcaption className="diagram-title">Kiến trúc Zero Trust (đơn giản hóa theo NIST SP 800-207)</figcaption>
      <svg viewBox={`0 0 ${width} ${height}`} width="100%" style={{ maxWidth: width }} role="img" aria-label="Sơ đồ kiến trúc Zero Trust">
        <defs>
          <marker id="zt-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 Z" fill="var(--accent)" />
          </marker>
          <marker id="zt-arrow-muted" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 Z" fill="var(--text-muted)" />
          </marker>
        </defs>

        {box(10, 130, 105, 70, "Chủ thể / Thiết bị", "yêu cầu truy cập", 12, 14)}
        <line x1={115} y1={165} x2={158} y2={165} stroke="var(--accent)" strokeWidth={2} markerEnd="url(#zt-arrow)" />

        {box(158, 130, 120, 70, "Policy Enforcement Point", "cổng thực thi chính sách", 12, 16)}

        <line x1={278} y1={165} x2={321} y2={165} stroke="var(--accent)" strokeWidth={2} markerEnd="url(#zt-arrow)" />
        {box(321, 130, 105, 70, "Tài nguyên", "ứng dụng / dữ liệu", 12, 14)}

        <line x1={218} y1={130} x2={218} y2={82} stroke="var(--text-muted)" strokeWidth={2} strokeDasharray="4,3" markerEnd="url(#zt-arrow-muted)" />
        {box(120, 12, 200, 70, "Policy Engine / Admin", "quyết định theo danh tính, thiết bị, ngữ cảnh", 16, 20)}

        {multiline(
          width / 2,
          260,
          'Mọi yêu cầu đều được xác thực, cấp quyền và mã hóa theo từng phiên — không có "vùng tin cậy mặc định".',
          46,
          10.5,
          "var(--text-muted)"
        )}
      </svg>
    </figure>
  );
}
